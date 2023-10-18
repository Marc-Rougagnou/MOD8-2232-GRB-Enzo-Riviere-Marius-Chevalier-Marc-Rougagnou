function validateComment(comment) {
    if (comment === undefined) {
      return new Error('commment is missing.')
    }
  
    if (comment === '') {
      return new Error('Comment must not be empty.')
    }
  
    if (typeof comment !== 'string') {
      return new Error('difficulty must not a string')
    }
  
    return null
  }

function validIdComment(id_comment) {
    if (id_comment === undefined) {
      return new Error('id_comment is missing.')
    }
  
    if (typeof id_comment !== 'number') {
      return new Error('id_comment must be a number.')
    }
  
    return null
  }
  function validAuthor(author) {
    if (author === undefined) {
      return new Error('author is missing.')
    }
  
    if (typeof author !== 'number') {
      return new Error(' id author must be a number.')
    }
    //l'id de l'auteur doit être un nombre inférieur à la taille de la base de donnée
    if(author<=0 || author>100){
        return new Error('id author must be a number between 1 and 100.')
    }
  
    return null
  }

  export default {
    validateComment,
    validIdComment,
    validAuthor
  }

