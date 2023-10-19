function validateSignUp(username, password, name) {
  if (!username) {
    return new Error('Enter a username.')
  }

  if (username.length < 4) {
    return new Error('Enter a username with at least 4 characters.')
  }

  if (username.length > 50) {
    return new Error('Enter a username with at most 50 characters.')
  }

  if (!password) {
    return new Error('Enter a password.')
  }

  if (password.length < 8) {
    return new Error('Enter a password with at least 8 characters.')
  }

  if (!name) {
    return new Error('Enter your name.')
  }

  return null
}

function validateLogIn(username, password) {
  if (!username) {
    return new Error('Enter a username.')
  }

  if (!password) {
    return new Error('Enter a password.')
  }

  return null
}

export default {
  validateSignUp,
  validateLogIn
}
