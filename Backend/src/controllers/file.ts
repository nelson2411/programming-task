import { Request, Response, NextFunction } from 'express'

import File from '../models/File'
import FileService from '../services/file'
import { BadRequestError } from '../helpers/apiError'

// POST /files
export const createFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { description, author } = req.body

    const file = new File({
      description,
      author,
    })

    await FileService.create(file)
    res.json(file)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /files/:fileId
export const updateFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const fileId = req.params.fileId
    const updatedFile = await FileService.update(fileId, update)
    res.json(updatedFile)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /movies/:movieId
export const deleteFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await FileService.deleteFile(req.params.movieId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /movies/:movieId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await FileService.findById(req.params.fileId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /movies
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await FileService.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
