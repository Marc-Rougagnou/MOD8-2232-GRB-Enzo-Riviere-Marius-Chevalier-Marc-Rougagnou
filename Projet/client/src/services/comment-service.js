import axios from 'axios';

const createComment = async (comment,postid) => {
    try {
        const response = await axios.post('/comments', { comment,postid })
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

export default {
    findComments,
    createComment,
}