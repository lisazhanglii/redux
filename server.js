const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 静态文件服务
app.use(express.static(path.join(__dirname, 'build')));

// 所有路由的处理都指向 index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
