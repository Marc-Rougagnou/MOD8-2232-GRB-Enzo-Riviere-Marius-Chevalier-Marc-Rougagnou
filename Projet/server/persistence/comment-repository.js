import database from './database.js'


const findComments = async () => {
    const query = 'SELECT * FROM comments'
    const [rows] = await database.execute(query)
    return rows.map(mapComment)
}

const findComment = async (id) => {
    const query = 'SELECT * FROM comments WHERE id = ?;'
    const [rows] = await database.execute(query, [id])
    return rows.length > 0 ? mapComment(rows[0]) : null
}

function mapComment(row) {
    return {
        id: row.id,
        id_sheet: row.id_sheet,
        id_user: row.id_user,
        text: row.text,
    }
}


const createComment = async (id_user, id_sheet, text) => {
    console.log(text)
    const comment = {
      id:0,
      id_user: id_user,
      id_sheet: id_sheet,
      text: text.trim(),
    }
  
    const query = 'INSERT INTO comments (id_user, id_sheet, text) VALUES (?, ?, ?);'

    const parameters = [comment.id_user, comment.id_sheet, comment.text]
    const [result] = await database.execute(query, parameters)
    comment.id = result.insertId
    return comment
}

const deleteComment = async (id) => {

    const query = 'DELETE FROM comments WHERE id = ?'

    const parameters = [id]
    const [result] = await database.execute(query, parameters)
    return result.affectedRows > 0
}


export default {
    findComments,
    findComment,
    createComment,
    deleteComment
}