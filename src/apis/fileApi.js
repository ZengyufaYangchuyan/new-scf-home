import request from '../plugins/request'

/**
 * 附件上传
 */
export const uploadImg = (data, options = {}) => request.post('/fileController/uploadFile', data, {
  ...options,
  headers: {
    ...options.headers,
    'Content-Type': 'multipart/form-data'
  },
})

/**
 * 附件预览
 */
export const previewImg = (params) => request.get('/fileController/preView', {params})

/**
 * 附件预览(批量)
 */
export const previewImgs = (data) => request.post('/fileController/preViews', data)
