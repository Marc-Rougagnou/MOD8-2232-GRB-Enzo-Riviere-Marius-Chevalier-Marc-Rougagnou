import axios from 'axios';
import accountValidator from '../validator/account-validator';
import router from '../router';


const createAccount_ = async (username,email,password,gender,accounts) => {
    try {
       
        const response = await axios.post('/profiles', { username,email,password,gender })
        window.alert("Account created successfully")
        router.push('/')
        return response.data
    } catch (error) {
        window.alert("Error: "+error.message)
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
const findAccount = async (id) => {
    try {
        const response = await axios.get(`/profiles/${id}`)
        return response.data
    } catch (error) {
        return handleError(error)
    }
}

//Axios function to find the account by username
const findAccountByUsername = async (username) => {
    try {
        const response = await axios.get(`/profiles/${username}`)
        return response.data.user
    } catch (error) {
        return handleError(error)
    }
}

const updateAccount = async (id, username, email, password, gender) => {
    try {
      
      await axios.patch(`/profiles/${id}`, { username, email, password, gender })
      return { success: { message: 'Successfully saved account.' } }
    } catch (error) {
      return handleError(error)
    }
  }


function handleError(error) {
if (error.response) {
    
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
    findAccount,
    updateAccount,
    findAccountByUsername,
}