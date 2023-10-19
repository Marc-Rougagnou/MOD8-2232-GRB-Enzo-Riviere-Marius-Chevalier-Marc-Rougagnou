import axios from 'axios'


const findSheets = async () => {
    try {
        const response = await axios.get('/sheets')
        return response.data
    } 
    catch (error) {
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


const findSheet = async (id) => {
    try {
        
        const response = await axios.get(`/sheets/${id}`) 
        return response.data
    } 
    catch (error) {
        return handleError(error)
    }
}

const createSheet = async (title, group, instrument, difficulty,id_creator,imageData) => {
    try {
        
        const response = await axios.post('/sheets', { title, group, instrument, difficulty,id_creator,imageData })
        return response.data
    } catch (error) {
        return handleError(error)
    }
}


const updateSheet = async (id, title, group_name, instruments, difficulty,imageData) => {
    try {
        const response = await axios.patch(`/sheets/${id}`, { title, group_name, instruments, difficulty, imageData })
        return response.data
    } catch (error) {
        return handleError(error)
    }
}

const updateDone= async (id, done) => {
    try {
        const response = await axios.patch(`/sheets/${id}/done`, { done })
        return response.data
    } catch (error) {
        return handleError(error)
    }
}

const deleteSheet = async (id) => {
    try {
        const response = await axios.delete(`/sheets/${id}`)
        return response.data
    } catch (error) {
        return handleError(error)
    }
}


export default {
    findSheets,
    findSheet,
    createSheet,
    updateSheet,
    deleteSheet,
    updateDone,
}