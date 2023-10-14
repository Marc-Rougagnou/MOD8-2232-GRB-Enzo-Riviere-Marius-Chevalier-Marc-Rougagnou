import 'dotenv/config'
import express from 'express'
import logger from 'morgan'
import helmet from 'helmet'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const environment = process.env.NODE_ENV // Throw error if environment is not defined by cross-env in package.json
if (!environment) {
  throw new Error('Environment is not defined.')
}

// Create Express application object
const app = express()

app.use(logger(environment === 'development' ? 'dev' : 'common'))  // Morgan request logger middleware
app.use(helmet()) // Helmet security middleware
app.use(express.json()) // Express JSON parsing middleware

// Express static file middleware
const clientBuildPath = join(dirname(fileURLToPath(import.meta.url)), '../client/dist')
app.use(express.static(clientBuildPath))

// Start listening for client requests
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
