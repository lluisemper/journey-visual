const asyncHandler = fn => (req, res, next) => {
  return Promise
      .resolve(fn(req, res, next))
      .catch((err) => {
        next(err)
        
      })
}

const methods = [
  'get',
  'post',
  'delete',
  'put'
]

function toAsyncRouter(router) {
  for (let key in router) {
      if (methods.includes(key)) {
          let method = router[key]
          router[key] = (path, ...callbacks) => method.call(router, path, ...callbacks.map(cb => asyncHandler(cb)))
      }
  }
  return router
}

module.exports = toAsyncRouter;