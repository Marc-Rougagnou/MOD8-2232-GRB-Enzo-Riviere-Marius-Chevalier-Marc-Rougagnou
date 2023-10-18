import axios from 'axios';
import accountValidator from '../validator/account-validator';
import router from '../router';


const createAccount_ = async (username,email,password,gender,accounts) => {
    try {
        const error=accountValidator.validateAccount(username,email,password,gender,accounts)
        if (error) {
            window.alert("Error: "+error.message)
            return { error }
          }
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
}