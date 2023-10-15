import database from './database.js'

const findSheets = async (id) => {
    const query = 'SELECT * FROM sheets'
    const [rows] = await database.execute(query)
    return rows.map(mapSheet)
}

const findSheet = async (id) => {
    const query = 'SELECT title, group_name, difficulty, instruments, done, id_creator FROM sheets WHERE id = ?;'
    const [rows] = await database.execute(query, [id])
    return rows.length > 0 ? mapSheet(rows[0]) : null
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
}