
const { LOGIN, LOGOUT } = require('./actions');

// 使用 LOGIN 和其他常量...

// 初始状态
const initialState = {
    isAuthenticated: false,
    userInfo: null,
};

// 用户认证状态的reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                userInfo: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                userInfo: null,
            };
        default:
            return state;
    }
};

module.exports = authReducer;
