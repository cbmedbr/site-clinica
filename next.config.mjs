/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Profissional descredenciada — página /perfil removida.
      // 301 preserva o SEO acumulado direcionando para a home.
      {
        source: '/perfil/ana-karoline-martins',
        destination: '/',
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
