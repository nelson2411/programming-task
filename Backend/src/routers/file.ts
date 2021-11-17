import express from 'express'

import {
  createFile,
  findById,
  deleteFile,
  findAll,
  updateFile,
} from '../controllers/file'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:fileId', findById)
router.put('/:fileId', updateFile)
router.delete('/:fileId', deleteFile)
router.post('/', createFile)

export default router
