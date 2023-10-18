import axios from 'axios';
import accountValidator from '../validator/account-validator';
import { useRouter } from 'vue-router';

const createAccount_ = async (username,email,password,gender,accounts) => {
    try {
        const error=accountValidator.validateAccount(username,email,password,gender,accounts)
        if (error) {

            return { error }
          }
        console.log("passvalidated")
        const response = await axios.post('/profiles', { username,email,password,gender })
        window.alert("Account created successfully")
        
        return response.data
    } catch (error) {
        return handleError(error)
    }
}

const findAccounts = async () => {
    try {
        const response = await axios.get('/profiles')
        return response.data
    } catch (error) {
        return handleError(error)
    }
}

async function logIn(username, password) {
    try {
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

export default {
    createAccount_,
    findAccounts,
    logIn,
}

