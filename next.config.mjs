/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Profissional descredenciada — página /perfil removida.
      // 301 preserva o SEO acumulado direcionando para o índice da equipe.
      {
        source: '/perfil/ana-karoline-martins',
        destination: '/equipe',
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
