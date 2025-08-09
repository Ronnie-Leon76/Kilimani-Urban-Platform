import { v2 as cloudinary } from 'cloudinary'

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export interface CloudinaryUploadResult {
  secure_url: string
  public_id: string
  width: number
  height: number
  format: string
  resource_type: string
}

export class CloudinaryService {
  /**
   * Upload a file to Cloudinary
   * @param file - The file to upload (base64 or file path)
   * @param folder - The folder in Cloudinary to upload to
   * @param transformation - Optional transformation parameters
   */
  static async uploadFile(
    file: string | Buffer,
    folder: string = 'kilimani-reports',
    transformation?: any
  ): Promise<CloudinaryUploadResult> {
    try {
      const uploadOptions: any = {
        folder,
        resource_type: 'auto',
        quality: 'auto',
        fetch_format: 'auto',
      }

      if (transformation) {
        uploadOptions.transformation = transformation
      }

      let uploadFile: string
      if (Buffer.isBuffer(file)) {
        // Assume image/jpeg for simplicity; adjust MIME type as needed
        uploadFile = `data:image/jpeg;base64,${file.toString('base64')}`
      } else {
        uploadFile = file
      }
      const result = await cloudinary.uploader.upload(uploadFile, uploadOptions)
      
      return {
        secure_url: result.secure_url,
        public_id: result.public_id,
        width: result.width,
        height: result.height,
        format: result.format,
        resource_type: result.resource_type,
      }
    } catch (error) {
      console.error('Cloudinary upload error:', error)
      throw new Error('Failed to upload file to Cloudinary')
    }
  }

  /**
   * Upload multiple files to Cloudinary
   * @param files - Array of files to upload
   * @param folder - The folder in Cloudinary to upload to
   */
  static async uploadMultipleFiles(
    files: (string | Buffer)[],
    folder: string = 'kilimani-reports'
  ): Promise<CloudinaryUploadResult[]> {
    try {
      const uploadPromises = files.map(file => 
        this.uploadFile(file, folder)
      )
      
      return await Promise.all(uploadPromises)
    } catch (error) {
      console.error('Cloudinary multiple upload error:', error)
      throw new Error('Failed to upload files to Cloudinary')
    }
  }

  /**
   * Delete a file from Cloudinary
   * @param publicId - The public ID of the file to delete
   */
  static async deleteFile(publicId: string): Promise<boolean> {
    try {
      const result = await cloudinary.uploader.destroy(publicId)
      return result.result === 'ok'
    } catch (error) {
      console.error('Cloudinary delete error:', error)
      return false
    }
  }

  /**
   * Generate a signed upload URL for client-side uploads
   * @param folder - The folder to upload to
   * @param publicId - Optional public ID
   */
  static generateSignedUploadUrl(
    folder: string = 'kilimani-reports',
    publicId?: string
  ) {
    const timestamp = Math.round(new Date().getTime() / 1000)
    const params: any = {
      timestamp,
      folder,
      quality: 'auto',
      fetch_format: 'auto',
    }

    if (publicId) {
      params.public_id = publicId
    }

    const signature = cloudinary.utils.api_sign_request(
      params,
      process.env.CLOUDINARY_API_SECRET!
    )

    return {
      url: `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`,
      signature,
      timestamp,
      api_key: process.env.CLOUDINARY_API_KEY,
      folder,
    }
  }
}

export default CloudinaryService
