var bufferLen = new Buffer(10)
var bufferArr = new Buffer([0, 1, 2, 3, 4])
var bufferStr = new Buffer('abcde')

bufferLen.write('abcdefgABCDEFG')
console.log(bufferLen.toString()) // abcdefgABC

bufferLen.write('12345', 5)
console.log(bufferLen.toString()) // abcde12345

bufferLen.write('00000', 2, 3)
console.log(bufferLen.toString()) // ab00012345

console.log(bufferArr.toJSON()) // { type: 'Buffer', data: [0, 1, 2, 3, 4]}

var concatBuffer = Buffer.concat([bufferLen, bufferStr])
console.log(concatBuffer.toString()) // ab00012345abcde

console.log(bufferLen.compare(bufferStr)) // -1

var copyBuffer = new Buffer(4)
bufferStr.copy(copyBuffer)
console.log(copyBuffer.toString()) // abcd

console.log(bufferStr.slice(0, 2).toString()) // ab
