import request from '../plugins/request'

// 基础设置表单-查询
export const getBasicSetting = () => request.get('/baseInfoController/getFirstBaseInfo')

// 基础设置表单-保存
export const saveBasicSetting = (data) => request.post('/baseInfoController/saveBaseInfo', data)
