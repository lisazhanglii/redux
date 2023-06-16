const React = require('react');
const { connect } = require('react-redux');
const { login, logout } = require('/Users/yixinzhang/IdeaProjects/redux/build/actions');
const store = require('./store');

const MyComponent = ({ isAuthenticated, userInfo, login, logout }) => {
    const handleLogin = () => {
        // 模拟登录，触发登录action
        login({ name: 'John Doe' });
    };

    const handleLogout = () => {
        // 模拟注销，触发注销action
        logout();
    };

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <p>Welcome, {userInfo.name}!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>Please login.</p>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    userInfo: state.auth.userInfo,
});

const mapDispatchToProps = {
    login,
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
