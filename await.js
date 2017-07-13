function f1 () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(10)
    }, 2000)
  })
}

async function f2 () {
  var a = await f1()
  console.log(a)
  console.log('f2')
}

f2()

console.log('end')
