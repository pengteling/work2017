
import $ from 'jquery'
import 'babel-polyfill'
// Promise
// $.get('http://music.henshui.com/api/musicList.js')
//   .then(data=>{
//     console.log(data)
//     return $.get('http://music.henshui.com/')
//   })
//   .then(data=>{console.log(data)})


function* gen(x){
  var y = yield x + 2;
  var z = yield x + 3;
  return y;
}

var g  =gen(1)
//console.log(gen)
console.log(g)
console.log(g.next())
console.log(g.next())