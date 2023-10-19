import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import middleware from './middleware/index.js'
import routes from './routes/v1/index.js'
import sheetRepository from './persistence/sheet-repository.js'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'


// Get environment defined by cross-env in package.json
const environment = process.env.NODE_ENV
if (!environment) {
  throw new Error('Environment is not defined.')
}

// Create Express application object
const app = express()

// Custom request identifier middleware
app.use(middleware.requestIdentifier)

// Custom Morgan request logger middleware including request identifier
app.use(middleware.requestLogger(environment))

// Helmet security middleware
app.use(helmet())


const clientBuildPath = join(dirname(fileURLToPath(import.meta.url)), '../client/dist')

app.use(express.static(clientBuildPath))

// Cross-origin resource sharing middleware
app.use(
  cors({
    credentials: true, // Send Access-Control-Allow-Credentials response header to enable session cookies
    origin: process.env.CLIENT_ORIGINS.split(' '), // Enable CORS only for origins specified in .env
    optionsSuccessStatus: 200 // Use status 200 for successful OPTIONS responses because legacy browsers choke on normal status 204
  })
)

// Express JSON parsing middleware
app.use(express.json({limit:'1mb'}))

// Cookie parser middleware for parsing request cookies
app.use(cookieParser())

// Custom session handler middleware for extending valid sessions and deleting expired sessions
app.use(middleware.sessionHandler)

// Compression middleware for compressing response bodies
app.use(compression())


// Mount all routes to the path '/api/v1', making them relative to '/api/v1'
app.use('/api/v1', routes)

// Custom resource not found middleware
app.use(middleware.notFoundHandler)

// Custom error handler middleware
app.use(middleware.errorHandler)

app.get('/api/v1/films', async (req, res) => {
  const films = await sheetRepository.findSheets() // Find films in database table
  res.status(200).json({ films }) // Send 200 response with films in JSON body
})

// Start listening for client requests
const port = process.env.PORT
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`))
