'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, MapPin, MessageCircle, X } from 'lucide-react'
import { GRUPOS, SALAS, type FotoSala, type Sala } from '@/lib/consultorios'

const WA_LINK = 'https://wa.me/5548998056893'

const isPanoramica = (src: string) => src.includes('panoramica')

// ── Helpers de grupo ────────────────────────────────────────────────────────

function getCapaGrupo(grupoId: string): FotoSala | null {
  const espacos = SALAS.filter(s => s.grupo === grupoId)
  const destaque = espacos.find(s => s.destaque && s.fotos.length > 0)
  if (destaque) return destaque.fotos[0]
  const recepcao = espacos.find(s => s.categoria === 'recepcao' && s.fotos.length > 0)
  if (recepcao) return recepcao.fotos[0]
  return espacos.find(s => s.fotos.length > 0)?.fotos[0] ?? null
}

function getEspacosDoGrupo(grupoId: string): Sala[] {
  return SALAS.filter(s => s.grupo === grupoId && s.fotos.length > 0)
}

function countConsultorios(grupoId: string): number {
  return SALAS.filter(s => s.grupo === grupoId && s.categoria === 'consultorio').length
}

// ── PanoramicViewer ──────────────────────────────────────────────────────────

function PanoramicViewer({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startTranslate, setStartTranslate] = useState(0)
  const [imgWidth, setImgWidth] = useState(0)
  const [hintVisible, setHintVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setHintVisible(false), 2000)
    return () => clearTimeout(t)
  }, [])

  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val))
  const getMaxTranslate = () =>
    containerRef.current && imgWidth > 0 ? -(imgWidth - containerRef.current.offsetWidth) : 0

  const onMouseDown = (e: React.MouseEvent) => { setIsDragging(true); setStartX(e.clientX); setStartTranslate(translateX) }
  const onMouseMove = (e: React.MouseEvent) => { if (!isDragging) return; setTranslateX(clamp(startTranslate + e.clientX - startX, getMaxTranslate(), 0)) }
  const onMouseUp = () => setIsDragging(false)
  const onTouchStart = (e: React.TouchEvent) => { setIsDragging(true); setStartX(e.touches[0].clientX); setStartTranslate(translateX) }
  const onTouchMove = (e: React.TouchEvent) => { if (!isDragging) return; setTranslateX(clamp(startTranslate + e.touches[0].clientX - startX, getMaxTranslate(), 0)) }
  const onTouchEnd = () => setIsDragging(false)

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden h-[80vh] select-none"
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src} alt={alt}
        className="h-full w-auto max-w-none"
        style={{ transform: `translateX(${translateX}px)`, transition: isDragging ? 'none' : 'transform 0.1s ease' }}
        onLoad={(e) => {
          const img = e.target as HTMLImageElement
          if (containerRef.current)
            setImgWidth(img.naturalWidth * (containerRef.current.offsetHeight / img.naturalHeight))
        }}
        draggable={false}
      />
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${hintVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-black/60 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
          <span>←</span> Arraste para explorar <span>→</span>
        </div>
      </div>
    </div>
  )
}

// ── Componente principal ─────────────────────────────────────────────────────

export default function ConsultoriosClient() {
  const [grupoAberto, setGrupoAberto] = useState<string | null>(null)
  const [espacoAberto, setEspacoAberto] = useState<Sala | null>(null)
  const [fotoIndex, setFotoIndex] = useState<number | null>(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const galeriaRef = useRef<HTMLDivElement>(null)

  const fecharLightbox = useCallback(() => { setFotoIndex(null); setImgLoaded(false) }, [])

  const fotoAnterior = useCallback(() => {
    if (!espacoAberto || fotoIndex === null) return
    setImgLoaded(false)
    setFotoIndex((fotoIndex - 1 + espacoAberto.fotos.length) % espacoAberto.fotos.length)
  }, [espacoAberto, fotoIndex])

  const proximaFoto = useCallback(() => {
    if (!espacoAberto || fotoIndex === null) return
    setImgLoaded(false)
    setFotoIndex((fotoIndex + 1) % espacoAberto.fotos.length)
  }, [espacoAberto, fotoIndex])

  useEffect(() => {
    if (fotoIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') fotoAnterior()
      else if (e.key === 'ArrowRight') proximaFoto()
      else if (e.key === 'Escape') fecharLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [fotoIndex, fotoAnterior, proximaFoto, fecharLightbox])

  useEffect(() => {
    document.body.style.overflow = fotoIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [fotoIndex])

  // Pré-carrega todas as fotos do espaço quando a galeria abre
  useEffect(() => {
    if (!espacoAberto) return
    espacoAberto.fotos.forEach(foto => {
      const img = new window.Image()
      img.src = foto.src
    })
  }, [espacoAberto])

  const abrirEspaco = (espaco: Sala) => {
    setEspacoAberto(prev => prev?.id === espaco.id ? null : espaco)
    setFotoIndex(null)
    setTimeout(() => galeriaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  const voltarParaGrupos = () => { setGrupoAberto(null); setEspacoAberto(null); setFotoIndex(null) }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#7C2C3B] text-white py-2.5 px-4 text-center text-sm">
        <Link href="/" className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar ao site da clínica
        </Link>
      </div>

      {/* Hero */}
      <section className="relative bg-[#1A0B0E] py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C2C3B]/80 via-[#4A1520]/60 to-[#1A0B0E]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#FCECBF]" />
            <span className="text-[#FCECBF] text-xs font-semibold tracking-wide">Centro de Florianópolis — SC</span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-[#FCECBF] leading-tight mb-4">
            Conheça nossos espaços
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Ambientes projetados para acolher, confortáveis e profissionais.
          </p>
        </div>
      </section>

      <main className="bg-[#FAF7F4] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

          {/* ── Nível 1: Grid de salas ─────────────────────────────────────── */}
          {grupoAberto === null && (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {GRUPOS.sort((a, b) => a.ordem - b.ordem).map((grupo) => {
                const capa = getCapaGrupo(grupo.id)
                const nConsultorios = countConsultorios(grupo.id)
                return (
                  <button
                    key={grupo.id}
                    onClick={() => setGrupoAberto(grupo.id)}
                    className="group text-left rounded-2xl overflow-hidden bg-white
                               shadow-[0_2px_12px_rgba(0,0,0,0.06)]
                               hover:shadow-[0_8px_32px_rgba(124,44,59,0.16)]
                               hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-52 sm:h-64 bg-neutral-100 overflow-hidden">
                      {capa ? (
                        <Image
                          src={capa.src} alt={capa.alt} fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Camera className="w-12 h-12 text-neutral-300" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h2 className="font-serif font-bold text-white text-lg sm:text-xl leading-tight">
                          {grupo.nome}
                        </h2>
                        <p className="text-white/75 text-xs mt-0.5">
                          {nConsultorios} consultório{nConsultorios !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          )}

          {/* ── Nível 2: Espaços do grupo ──────────────────────────────────── */}
          {grupoAberto !== null && (() => {
            const grupo = GRUPOS.find(g => g.id === grupoAberto)!
            const espacos = getEspacosDoGrupo(grupoAberto)
            return (
              <>
                {/* Header de navegação */}
                <div className="flex items-center gap-4 mb-8">
                  <button
                    onClick={voltarParaGrupos}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7C2C3B]
                               hover:opacity-70 transition-opacity"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Todas as salas
                  </button>
                  <span className="text-neutral-300">/</span>
                  <span className="font-serif font-bold text-neutral-800 text-lg">{grupo.nome}</span>
                </div>

                {/* Grid de espaços */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
                  {espacos.map((espaco) => (
                    <button
                      key={espaco.id}
                      onClick={() => abrirEspaco(espaco)}
                      className={`group text-left rounded-xl overflow-hidden bg-white border-2 transition-all duration-200 ${
                        espacoAberto?.id === espaco.id
                          ? 'border-[#7C2C3B] shadow-[0_4px_16px_rgba(124,44,59,0.20)]'
                          : 'border-transparent shadow-[0_1px_8px_rgba(0,0,0,0.06)] hover:border-[#7C2C3B]/30 hover:-translate-y-0.5'
                      }`}
                    >
                      <div className="relative h-32 sm:h-36 bg-neutral-100 overflow-hidden">
                        {espaco.fotos[0] && (
                          <Image
                            src={espaco.fotos[0].src} alt={espaco.fotos[0].alt} fill
                            className="object-cover group-hover:scale-105 transition-transform duration-400"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                        )}
                        <div className="absolute bottom-1.5 right-1.5 bg-black/55 text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                          <Camera className="w-2.5 h-2.5" />
                          {espaco.fotos.length}
                        </div>
                      </div>
                      <div className="px-2.5 py-2">
                        <p className="font-medium text-neutral-800 text-xs">{espaco.nome}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Galeria inline do espaço selecionado */}
                <div ref={galeriaRef} className="scroll-mt-6">
                  {espacoAberto && (
                    <div className="mt-4 pt-6 border-t border-neutral-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-serif font-bold text-lg text-neutral-800">{grupo.nome} — {espacoAberto.nome}</h3>
                          <p className="text-neutral-500 text-xs mt-0.5">{espacoAberto.fotos.length} foto{espacoAberto.fotos.length !== 1 ? 's' : ''}</p>
                        </div>
                        <button
                          onClick={() => setEspacoAberto(null)}
                          className="p-1.5 rounded-full hover:bg-neutral-100 transition-colors"
                          aria-label="Fechar galeria"
                        >
                          <X className="w-4 h-4 text-neutral-500" />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {espacoAberto.fotos.map((foto, i) => (
                          <button
                            key={i}
                            onClick={() => { setImgLoaded(false); setFotoIndex(i) }}
                            className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100 group"
                          >
                            <Image
                              src={foto.src} alt={foto.alt} fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 640px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )
          })()}

          {/* CTA */}
          <div className="mt-16 bg-[#1A0B0E] rounded-3xl p-10 text-center">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#FCECBF] mb-3">
              Faça parte da nossa equipe!
            </h2>
            <p className="text-white/60 text-sm mb-7 max-w-md mx-auto leading-relaxed">
              Consultórios com a estrutura completa para o atendimento.
            </p>
            <a
              href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FCECBF] text-[#7C2C3B] font-semibold
                         px-7 py-3.5 rounded-full transition-all duration-200
                         hover:bg-[#FFF5D6] hover:scale-[1.02] active:scale-[0.98]
                         shadow-[0_4px_20px_rgba(252,236,191,0.25)]"
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar informações
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-800 text-neutral-400 text-center py-6 px-4 text-xs">
        <p>© {new Date().getFullYear()} Clínica Luciano Noceti · CRP 12/02627</p>
        <p className="mt-1">
          <Link href="/" className="hover:text-white transition-colors">← Voltar ao site</Link>
        </p>
      </footer>

      {/* ── Lightbox ──────────────────────────────────────────────────────── */}
      {fotoIndex !== null && espacoAberto && (
        <div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center lightbox-enter"
          onClick={fecharLightbox}
        >
          {/* Imagem — panorâmica ou padrão */}
          <div
            className={`relative mx-4 ${isPanoramica(espacoAberto.fotos[fotoIndex].src) ? 'w-full' : 'w-full max-w-5xl'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {isPanoramica(espacoAberto.fotos[fotoIndex].src) ? (
              <PanoramicViewer
                src={espacoAberto.fotos[fotoIndex].src}
                alt={espacoAberto.fotos[fotoIndex].alt}
              />
            ) : (
              <div className="relative h-[82vh]">
                {/* Placeholder blur — usa sizes da miniatura (já em cache) → aparece instantâneo */}
                <Image
                  src={espacoAberto.fotos[fotoIndex].src}
                  alt="" fill aria-hidden
                  className="object-contain blur-sm scale-105 opacity-60"
                  sizes="25vw"
                />
                {/* Full-res carrega por cima e faz fade-in */}
                <Image
                  src={espacoAberto.fotos[fotoIndex].src}
                  alt={espacoAberto.fotos[fotoIndex].alt}
                  fill
                  className={`object-contain transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                  sizes="100vw"
                  priority
                  onLoad={() => setImgLoaded(true)}
                />
              </div>
            )}
          </div>

          {/* Seta esquerda */}
          <button
            onClick={(e) => { e.stopPropagation(); fotoAnterior() }}
            className="absolute left-3 sm:left-5 p-3 rounded-full bg-white/10 hover:bg-white/22 text-white transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Seta direita */}
          <button
            onClick={(e) => { e.stopPropagation(); proximaFoto() }}
            className="absolute right-3 sm:right-5 p-3 rounded-full bg-white/10 hover:bg-white/22 text-white transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Fechar */}
          <button
            onClick={fecharLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/22 text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Contador + nome */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <div className="bg-black/70 text-white text-xs px-3 py-1.5 rounded-full">
              {fotoIndex + 1} / {espacoAberto.fotos.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
