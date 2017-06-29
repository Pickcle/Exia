const path = require('path')

console.log(path.join('root', '/a', 'b'))
// 将参数串联 => root/a/b

console.log(path.resolve('root', '/a', 'b'))
// 如果/开头会忽略前面的路径 => /a/b

console.log(path.extname('src/vue.js'))
// 获取后缀名 => .js

console.log(path.parse('src/assets/img/a.png'))
// 将string的path转成object
// => { root: '',
//   dir: 'src/assets/img',
//   base: 'a.png',
//   ext: '.png',
//   name: 'a'
// }

console.log(path.format({
  dir: 'src/assets/img',
  name: 'file',
  ext: '.png'
}))
// => 'src/assets/img/file.png'
