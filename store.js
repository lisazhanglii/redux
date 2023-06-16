const { createStore, combineReducers } = require('redux');
const authReducer = require('./reducer');

// 将authReducer添加到根reducer中
const rootReducer = combineReducers({
    auth: authReducer,
});

// 创建Redux store
const store = createStore(rootReducer);

module.exports = store;
