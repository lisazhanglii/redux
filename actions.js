// 定义action类型
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// 登录action
const login = (userInfo) => ({
    type: LOGIN,
    payload: userInfo,
});

// 注销action
const logout = () => ({
    type: LOGOUT,
});

module.exports = {
    LOGIN,
    LOGOUT,
    login,
    logout,
};
