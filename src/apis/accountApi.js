import request from '../plugins/request'

// 登录
export const login = (data) => request.post('/loginController/login', data)

// 退出登录
export const logout = (data) => request.post('/loginController/logout', data)

// 获取用户信息
export const getAccoutInfo = () => request.get('/loginController/getLoginInfo')

// 密码修改
export const resetPassword = (data) => request.post('/userController/changePass', data)
