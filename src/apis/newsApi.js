import request from '../plugins/request'

// export const testApi = () => request.get('/apiTest')

// export const apiGet = (params) => request.get('/apiGet', {params})

// export const apiPost = (data) => request.post('/apiPost', data)

// export const apiDelete = (data) => request.delete('/apiDelete', {data})

// 新闻分页
export const newsList = (params) => request.get('/cmsNewsController/queryPage', {params})

// 新闻新增
export const saveNews = (data) => request.post('/cmsNewsController/saveCmsNews', data)

// 新闻删除
export const deleteNews = (data) => request.post('/cmsNewsController/removeNews', data)

// 新闻详情
export const newsDetail = (params) => request.get('/cmsNewsController/getNewsInfoById', {params})
