import database from './database.js'

const findSheets = async (id) => {
    const query = 'SELECT * FROM sheets'
    const [rows] = await database.execute(query)
    return rows.map(mapSheet)
}

function mapSheet(row) {
    return {
        id: row.id,
        title: row.title,
        group: row.group,
        instrument: row.instrument,
        difficulty: row.difficulty,
        done: row.done,
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




export default {
    findSheets,
    createSheet,
    deleteSheet,
}