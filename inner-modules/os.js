var os = require('os')

console.log(os.tmpdir()) // 返回操作系统的默认临时文件夹
// /var/folders/j1/n15m1fcs2v59pyt4dk3bj7c80000gn/T

console.log(os.hostname()) // 返回操作系统的主机名
// xiaohuajundeMacBook-Pro.local

console.log(os.type()) // 返回操作系统名
// Darwin

console.log(os.platform())
// darwin
