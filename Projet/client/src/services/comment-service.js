import axios from 'axios';

const createComment = async (id_user, id_sheet, comment) => {
    console.log(id_user, id_sheet, comment, "comment service")
    try {
        console.log(id_user, id_sheet, comment, "comment service")
        const response = await axios.post('/comments', { id_sheet, id_user, comment })
        return response.data
    } catch (error) {
        return handleError(error)
    }
}

const findComments = async () => {
    try {
        const response = await axios.get('/comments')
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
    findComments,
    createComment,
}