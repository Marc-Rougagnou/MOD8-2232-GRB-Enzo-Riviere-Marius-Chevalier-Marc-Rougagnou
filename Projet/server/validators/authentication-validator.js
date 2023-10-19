function validateSignUp(credentials, name) {
  return (
    validateCredentials(credentials) ??
    validateSignUpUsername(credentials.username) ??
    validateSignUpPassword(credentials.password) ??
    validateName(name)
  )
}

function validateLogIn(credentials) {
  return validateCredentials(credentials)
}

function validateCredentials(credentials) {
  if (!credentials.scheme) {
    return new Error('Authorization header authentication scheme is missing.')
  }

  if (credentials.scheme.toLowerCase() !== 'basic') {
    return new Error('Authorization header must use basic authentication scheme.')
  }

  if (!credentials.username && !credentials.password) {
    return new Error('Username and password are missing.')
  }

  if (!credentials.username) {
    return new Error('Username is missing.')
  }

  if (!credentials.password) {
    return new Error('Password is missing.')
  }

  return null
}

function validateSignUpUsername(username) {
  username = username.trim()

  if (username === '') {
    return new Error('Username must not be empty.')
  }

  if (username.length < 4) {
    return new Error('Username must have at least 4 characters.')
  }

  if (username.length > 50) {
    return new Error('Username must be no longer than 50 characters.')
  }

  return null
}

function validateSignUpPassword(password) {
  if (password.length < 8) {
    return new Error('Password must have at least 8 characters.')
  }

  if (password.length > 50) {
    return new Error('Password must be no longer than 50 characters.')
  }

  return null
}

function validateName(name) {
  if (name === undefined) {
    return new Error('Name is missing.')
  }

  if (typeof name !== 'string') {
    return new Error('Name must be a string.')
  }

  name = name.trim()

  if (name === '') {
    return new Error('Name must not be empty.')
  }

  if (name.length > 255) {
    return new Error('Name must be no longer than 255 characters.')
  }

  return null
}

export default {
  validateSignUp,
  validateLogIn
}
