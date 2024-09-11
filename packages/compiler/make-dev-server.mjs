const makeDevServer = () => {
  return {
    headers: {
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Authorization, Accept',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    hot: true,
  }
}

export default makeDevServer
