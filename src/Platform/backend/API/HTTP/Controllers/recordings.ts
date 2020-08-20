import { Request, Response, Router } from 'express'
import { uploadRecording } from '../../../Recordings/Application/Services/uploadRecording'
import { Multer } from 'multer'
import multer = require('multer')
import { Controller } from './Controller'
import path from 'path'
import { Recording } from '../../../Recordings/Domain/Agregates/recording'
import { PlatformSDK } from '../../../SDK'

export class RecordingsController implements Controller {
  private readonly _router: Router

  constructor() {
    const upload: Multer = multer({
      storage: multer.diskStorage({
        destination(req, file, cb) {
          cb(null, './videos/')
        },
        filename(req, file, cb) {
          cb(null, `${file.fieldname}-${Date.now()}`)
        }
      })
    })

    this._router = Router()
    this._router.post('/api/v1/recording', upload.single('video'), RecordingsController.uploadRecording)
    this._router.get('/api/v1/recording/:id', RecordingsController.getRecording)
  }

  private static uploadRecording(req: Request, res: Response) {
    console.info('uploadRecording')
    const recording = new Recording(req.file.filename)
    PlatformSDK.uploadRecording(recording)
    res.send('OKAY')
  }

  private static getRecording(req: Request, res: Response) {
    console.info('uploadRecording')
    res.sendFile(path.resolve(__dirname, '../../../../../../videos', 'video-' + req.params.id))
  }

  public router(): Router {
    return this._router
  }
}
