function validateFindSheet(id) {
    return validateId(id)
  }
  
  function validateCreateSheet(title, group, instrument, difficulty, imageData) {
    return validateTitle(title)
      ?? validateGroup(group)
      ?? validateInstrument(instrument)
      ?? validateDifficulty(difficulty)
      ?? validateImageDate(imageData)
  }
  
  function validateUpdateSheet(id, title, Group, instrument, difficulty, imageData) {
    let err = validateId(id)
    if (err) {
      return err
    }
  
    if (title !== undefined) {
      err = validateTitle(title)
      if (err) {
        return err
      }
    }
  
    if (Group !== undefined) {
      err = validateGroup(Group)
      if (err) {
        return err
      }
    }
  
    if (instrument !== undefined) {
      err = validateInstrument(instrument)
      if (err) {
        return err
      }
    }
  
    if (difficulty !== undefined) {
      err = validateDifficulty(difficulty)
      if (err) {
        return err
      }
    }
  
    if (imageData !== undefined) {
      err = validateImageDate(imageData)
      if (err) {
        return err
      }
    }
  }
  
  function validateDeleteSheet(id) {
    return validateId(id)
  }
  
  function validateId(id) {
    if (id === undefined) {
      return new Error('Id is missing.')
    }
  
    if (!Number.isInteger(id)) {
      return new Error('Id must be an integer.')
    }
  
    return null
  }
  
  function validateTitle(title) {
    if (title === undefined) {
      return new Error('Title is missing.')
    }
  
    if (typeof title !== 'string') {
      return new Error('Title must be a string.')
    }
  
    title = title.trim()
    if (title === '') {
      return new Error('Title must not be empty.')
    }
  
    return null
  }
  
  function validateGroup(Group) {
    if (Group === undefined) {
      return new Error('Group is missing.')
    }
  
    if (typeof Group !== 'string') {
      return new Error('Group must be a string.')
    }
  
    Group = Group.trim()
    if (Group === '') {
      return new Error('Group must not be empty.')
    }
  
    return null
  }
  
  function validateInstrument(instrument) {
    if (instrument === undefined) {
      return new Error('instrument is missing.')
    }
  
    if (!Number.isInteger(instrument)) {
      return new Error('instrument must be an integer.')
    }
  
    if (instrument < 1895) {
      return new Error('instrument must not be less than 1895.')
    }
  
    return null
  }
  
  function validateDifficulty(difficulty) {
    if (difficulty === undefined) {
      return new Error('difficulty is missing.')
    }
  
    if (!Number.isInteger(difficulty)) {
      return new Error('difficulty must be an integer.')
    }
  
    if (difficulty < 1) {
      return new Error('difficulty must not be less than 1.')
    }
  
    return null
  }
  
  function validateImageDate(imageData) {
    if (imageData === undefined) {
      return new Error('imageData is missing.')
    }
  
    if (typeof imageData !== 'string') {
      return new Error('imageData must be a string.')
    }
  
    imageData = imageData.trim()
    if (imageData === '') {
      return new Error('imageData must not be empty.')
    }
  
    return null
  }
  
  export default {
    validateFindSheet,
    validateCreateSheet,
    validateReplaceSheet,
    validateUpdateSheet,
    validateDeleteSheet
  }
  