// Request authorizer route-level middleware
export function createAuthorizer(role) {
  return async (req, res, next) => {
    try {
      const user = req.session.user

      if (user.role === role) {
        // Authorization succeeded, because the authenticated user has the required role
        return next() // Pass request to next request handler or middleware
      } else {
        // Authorization failed, because the authenticated user does not have the required role
        next(createAuthorizationError()) // Pass error with status 403 Forbidden (actually means unauthorized) to next error handler middleware
      }
    } catch (err) {
      next(err)
    }
  }
}

export function createAuthorizationError() {
  const err = new Error('Request unauthorized.')
  err.status = 403 // Set status to 403 Forbidden (actually means unauthorized)
  return err
}

export default createAuthorizer
