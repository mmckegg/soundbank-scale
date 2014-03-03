var scale = require('./index')

var test = require('tape')

test(function(t){
  var noteScale = {
    scale: 'major',
    root: 60
  }

  var values = [-2,-1,0,1,2,3,4,5,12].map(function(x){
    return scale({params: {offset: x}}, noteScale)
  })

  t.deepEqual(values, [57, 59, 60, 62, 64, 65, 67, 69, 81])
  t.end()
})