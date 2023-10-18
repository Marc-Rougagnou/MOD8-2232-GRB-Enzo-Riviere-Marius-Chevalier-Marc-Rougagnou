function validateComment(comment) {
    if (comment === undefined) {throw new Error('commment is missing.')}
  
    if (comment === '') {throw new Error('Comment must not be empty.')}
  
    if (typeof comment !== 'string') {throw new Error('difficulty must be a string')}
  
    return null
  }

function validIdComment(id_comment) {
    if (id_comment === undefined) {throw new Error('id_comment is missing.')}
  
    if (typeof id_comment !== 'number') {throw new Error('id_comment must be a number.')}
  
    return null
  }
  function validAuthor(author) {
    if (author === undefined) {throw new Error('author is missing.')}
  
    if (typeof author !== 'number') {throw new Error(' id author must be a number.')}
    if(author<=0 || author>100){throw new Error('id author must be a number between 1 and 100.')}
  
    return null
  }

  export default {
    validateComment,
    validIdComment,
    validAuthor
  }

