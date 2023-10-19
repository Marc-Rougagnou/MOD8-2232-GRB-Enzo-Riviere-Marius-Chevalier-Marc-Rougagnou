import database from './database.js'

const findUserCredentials = async (username) => {
  const query = 'SELECT email, password FROM users WHERE email = ?;'
  const [rows] = await database.execute(query, [username])
  const credentials = rows.length > 0 ? mapUserCredentials(rows[0]) : null
  return credentials
}

const mapUserCredentials = (row) => {
  return {
    username: row.username,
    password: String(row.password)
  }
}

const findUser = async (username) => {
  const query = 'SELECT id,email,username,gender FROM users WHERE email = ?;'
  const [rows] = await database.execute(query, [username])
  const user = rows.length > 0 ? mapUser(rows[0]) : null
  return user
}

const mapUser = (row) => {
  return {
    username: row.username,
    name: row.name
  }
}

const createUser = async (username, password, name) => {
  const query = 'INSERT INTO users (email, password, username) VALUES (?, ?, ?);'
  const [result] = await database.execute(query, [username, password, name])
  if (result.affectedRows > 0) {
    return { username, name }
  }

  throw new Error(`Failed to create user "${username}".`)
}

const findSession = async (id) => {
  const query = 'SELECT id, username, start_time, extended_time, expiry_time FROM sessions WHERE id = ?;'
  const [rows] = await database.execute(query, [id])
  return rows.length > 0 ? mapSession(rows[0]) : null
}

const mapSession = (row) => {
  return {
    id: row.id,
    username: row.username,
    startTime: row.start_time,
    extendedTime: row.extended_time,
    expiryTime: row.expiry_time
  }
}

const createSession = async (session) => {
  console.log(session)
  const query = 'INSERT INTO sessions (id, username, start_time, expiry_time) VALUES (?, ?, ?, ?);'
  const [result] = await database.execute(query, [session.id, session.username, session.startTime, session.expiryTime])
  if (result.affectedRows > 0) {
    return session
  }

  throw new Error(`Failed to create session ${session.id}.`)
}

const extendSession = async (id, extendedTime, expiryTime) => {
  const query = 'UPDATE sessions SET extended_time = ?, expiry_time = ? WHERE id = ?;'
  const [result] = await database.execute(query, [extendedTime, expiryTime, id])
  if (result.affectedRows === 0) {
    throw new Error(`Failed to extend session ${id}.`)
  }
}

const deleteSession = async (id) => {
  const query = 'DELETE FROM sessions WHERE id = ?;'
  const [result] = await database.execute(query, [id])
  return result.affectedRows > 0
}

export default {
  findUserCredentials,
  findUser,
  createUser,
  findSession,
  createSession,
  extendSession,
  deleteSession
}
