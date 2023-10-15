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

/*
const findSheet = async (id) => {
    try {
        const response = await axios.get(`/sheets/${id}`)
        return response.data
    } 
    catch (error) {
        return handleError(error)
    }
}



const createSheet = async (title, group, instrument, difficulty,imageData,id_creator) => {
    const sheet = {
      id:0,
      title: title.trim(),
      group: group.trim(),
      instrument: instrument.trim(),
      difficulty: difficulty.trim(),
      done: "No",
      imageData: imageData,
      id_creator: id_creator,
    }
  
    const query = 'INSERT INTO sheets (title, group_name, instruments, difficulty, done, imageData, id_creator) VALUES (?, ?, ?, ?, ?, ?, ?);'

    const parameters = [sheet.title, sheet.group, sheet.instrument, sheet.difficulty, sheet.done, sheet.imageData, sheet.id_creator]
    const [result] = await database.execute(query, parameters)
    sheet.id = result.insertId
    return sheet
}

const deleteSheet = async (id) => {

    const query = 'DELETE FROM sheets WHERE id = ?'

    const parameters = [id]
    const [result] = await database.execute(query, parameters)
    return result.affectedRows > 0
}

const updateSheet = async (id, title, group_name, instruments, difficulty, done) => {
    const sheet = {
        id: id,
        title: title,
        group_name: group_name,
        instruments: instruments,
        difficulty: difficulty,
        done: done,
    }

    const command = buildUpdateCommand(id, sheet)
    const [result] = await database.execute(command.query, command.parameters)
    return result.affectedRows > 0
}








*/

export default {
    findSheets,
    /*findSheet,
    createSheet,
    deleteSheet,
    updateSheet,*/
}