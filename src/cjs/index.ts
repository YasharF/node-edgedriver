exports.start = async function start (params: unknown) {
  const esmPkg = await import('../index.js')
  return esmPkg.start(params)
}

exports.download = async function download (params?: string) {
  const esmPkg = await import('../index.js')
  return esmPkg.download(params)
}
