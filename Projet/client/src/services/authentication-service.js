import { ref, readonly, computed } from 'vue'
import axios from 'axios'
import router from '../router/index.js'
import validator from '../validator/authentication-validator.js'

const authenticatedUser = ref(null)
const readonlyAuthenticatedUser = readonly(authenticatedUser)

initializeUser()
router.beforeEach(updateUser)

function initializeUser() {
  const baseUrl = import.meta.env.VITE_API_URL
  axios
    .get(baseUrl + '/auth/user', { withCredentials: true })
    .then((response) => (authenticatedUser.value = response.data.user))
    .catch((error) => (authenticatedUser.value = null))
}

async function updateUser() {
  try {
    if (authenticatedUser.value !== null) {
      const response = await axios.get('/auth/user')
      authenticatedUser.value = response.data.user
    }
  } catch (error) {
    authenticatedUser.value = null
  }
}

async function signUp(username, password, name) {
  try {
    authenticatedUser.value = null

    username = username.trim()
    name = name.trim()

    const error = validator.validateSignUp(username, password, name)
    if (error) {
      return { error }
    }

    const response = await axios.post('/auth/signup', { name }, { auth: { username, password } })
    return response.data
  } catch (error) {
    return handleError(error)
  }
}

async function logIn(username, password) {
  try {
    console.log(username, password)
    authenticatedUser.value = null

    username = username.trim()

    const error = validator.validateLogIn(username, password)
    if (error) {
      return { error }
    }

    const response = await axios.post('/auth/login', null, { auth: { username, password } })
    authenticatedUser.value = response.data.user
    return response.data
  } catch (error) {
    return handleError(error)
  }
}

async function logOut() {
  try {
    authenticatedUser.value = null
    const response = await axios.post('/auth/logout')
    return response.data
  } catch (error) {
    return handleError(error)
  }
}

function handleError(error) {
  if (error.response) {
    console.log(error.response.data)
    return error.response.data
  }

  if (error.request) {
    console.error(error)
    return { error: { message: 'Failed to connect to server.' } }
  }

  console.error(error)
  return { error: { message: 'Something went wrong.' } }
}

export default function useAuthenticationService() {
  return {
    user: readonlyAuthenticatedUser,
    signUp,
    logIn,
    logOut
  }
}
