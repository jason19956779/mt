var mt = module.exports = {}
var index = require('./dic')
mt.e2c = function (eStr) {
    eStr = eStr.toLowerCase()
    var cStr = ''
    eStr = eStr.split(" ")
    var len = eStr.length
    for(var i = 0; i<len ; i+=1)
    {
        cStr = cStr.concat(' ', index[eStr[i]])
    }
    cStr = cStr.trim()

    return cStr
}