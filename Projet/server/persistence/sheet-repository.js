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

export default {
    findSheets,
}