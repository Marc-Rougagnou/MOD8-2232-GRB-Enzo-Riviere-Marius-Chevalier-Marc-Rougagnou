import database from './database.js'

const findSheets = async (id) => {
    const query = 'SELECT * FROM sheets'
    const [rows] = await database.execute(query)
    return rows.map(mapSheets)
}

const findSheet = async (id) => {
    const query = 'SELECT * FROM sheets WHERE id = ?'
    const [rows] = await database.execute(query, [id])
    return rows.map(mapSheet)
}

function mapSheets(row) {
    return {
        id: row.id,
        title: row.title,
        group_name: row.group_name,
        instruments: row.instruments,
        difficulty: row.difficulty,
        done: row.done,
        id_creator: row.id_creator,   
    }
}

function mapSheet(row) {
    return {
        id: row.id,
        title: row.title,
        group_name: row.group_name,
        instruments: row.instruments,
        difficulty: row.difficulty,
        done: row.done,
        id_creator: row.id_creator,
        imageData: row.imageData,
    }
}


const createSheet = async (title, group_name, instrument, difficulty,id_creator,imageData) => {
    const sheet = {
      id:0,
      title: title,
      group: group_name,
      instrument: instrument,
      difficulty: difficulty,
      done: "No",
      id_creator: id_creator,
      imageData: imageData,
    }
    const query = 'INSERT INTO sheets (title, group_name, instruments, difficulty, done, id_creator,imageData) VALUES (?, ?, ?, ?, ?,?, ?);'
    const parameters = [sheet.title, sheet.group, sheet.instrument, sheet.difficulty, sheet.done, sheet.id_creator,sheet.imageData]
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

const updateSheet = async (id, title, group_name, instruments, difficulty, imageData) => {
    const sheet = {
        title: title,
        group_name: group_name,
        instruments: instruments,
        difficulty: difficulty,
        imageData: imageData,
    }
    const command = buildUpdateCommand(id, sheet)
    const [result] = await database.execute(command.query, command.parameters)
    return result.affectedRows > 0
}

//Request to update the done status of a sheet
const updateDone = async (id, done) => {
    const sheet = {
        done: done,
    }
    const command = buildUpdateCommand(id, sheet)
    const [result] = await database.execute(command.query, command.parameters)
    return result.affectedRows > 0
}

function buildUpdateCommand(id, values) {
    const columns = []
    const parameters = []
  
    for (const column in values) {
      const parameter = values[column]
      if (parameter !== undefined) {
        columns.push(column)
        parameters.push(parameter)
      }
    }
  
    const query = `UPDATE sheets SET ${columns.map((column) => column + ' = ?').join(', ')} WHERE id = ?;`
    parameters.push(id)
  
    return { query, parameters }
}



export default {
    findSheets,
    findSheet,
    createSheet,
    deleteSheet,
    updateSheet,
    updateDone,
}