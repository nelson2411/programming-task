import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import fileRouter from './routers/file'
import apiErrorHandler from './middlewares/apiErrorHandler'
import compression from 'compression'
import cors from 'cors'

const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { uploadFile, getFileStream } = require('./s3')

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.use(cors())
app.set('port', process.env.PORT || 3000)
// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))

// Use movie router
app.use('/api/v1/files', fileRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
