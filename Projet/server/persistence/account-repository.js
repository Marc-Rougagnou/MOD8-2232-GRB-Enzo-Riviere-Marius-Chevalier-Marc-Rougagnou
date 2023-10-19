import database from './database.js'

const findUsers = async () => {
    const query = 'SELECT * FROM users'
    const [rows] = await database.execute(query)
    return rows.map(mapUser)
}

const findUser = async (id) => {
    const query = 'SELECT * FROM users where id = ?'
    const [rows] = await database.execute(query,[id])
    return rows.length > 0 ? mapUser(rows[0]) : null
}

//Request to find the user by username
const findUserByUsername = async (username) => {
    const query = 'SELECT * FROM users where username = ?'
    const [rows] = await database.execute(query,[username])
    return rows.length > 0 ? mapUser(rows[0]) : null
}


function mapUser(row) {
    return {
        id: row.id,
        username: row.username,
        email: row.email,
        password: row.password,
        gender:row.gender,
    }
}

const createUser = async (username,email,password,gender) => {
    const user = {
        id:0,
        username: username.trim(),
        email: email.trim(),
        password: password.trim(),
        gender: gender.trim(),
    }
    
    const query = 'INSERT INTO users (username, email, password, gender) VALUES (?, ?, ?, ?);'

    const parameters = [user.username, user.email, user.password, user.gender]
    const [result] = await database.execute(query, parameters)
    user.id = result.insertId
    return user
};


const updateUser = async (id, username, email, password, gender) => {
    const sheet = {
        id: id,
        username: username,
        email: email,
        password: password,
        gender: gender,
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
  
    const query = `UPDATE users SET ${columns.map((column) => column + ' = ?').join(', ')} WHERE id = ?;`
    parameters.push(id)
  
    return { query, parameters }
}

const deleteUser = async (id) => {
    
        const query = 'DELETE FROM users WHERE id = ?'
    
        const parameters = [id]
        const [result] = await database.execute(query, parameters)
        return result.affectedRows > 0
    }


export default {
    findUsers,
    findUser,
    createUser,
    updateUser,
    deleteUser,
    findUserByUsername,
}