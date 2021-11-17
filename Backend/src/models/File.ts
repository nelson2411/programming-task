/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type FileDocument = Document & {
  description: string
  author: string
}

const fileSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model<FileDocument>('File', fileSchema)
