"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = require('react');
var _require = require('react-redux'),
  connect = _require.connect;
var _require2 = require('/Users/yixinzhang/IdeaProjects/redux/build/actions'),
  login = _require2.login,
  logout = _require2.logout;
var store = require('./store');
var MyComponent = function MyComponent(_ref) {
  var isAuthenticated = _ref.isAuthenticated,
    userInfo = _ref.userInfo,
    login = _ref.login,
    logout = _ref.logout;
  var handleLogin = function handleLogin() {
    // 模拟登录，触发登录action
    login({
      name: 'John Doe'
    });
  };
  var handleLogout = function handleLogout() {
    // 模拟注销，触发注销action
    logout();
  };
  return /*#__PURE__*/React.createElement("div", null, isAuthenticated ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Welcome, ", userInfo.name, "!"), /*#__PURE__*/React.createElement("button", {
    onClick: handleLogout
  }, "Logout")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Please login."), /*#__PURE__*/React.createElement("button", {
    onClick: handleLogin
  }, "Login")));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userInfo: state.auth.userInfo
  };
};
var mapDispatchToProps = {
  login: login,
  logout: logout
};
var _default = connect(mapStateToProps, mapDispatchToProps)(MyComponent);
exports["default"] = _default;