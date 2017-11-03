var mt = module.exports = {}
var index = require('./dic')
mt.e2c = function (eStr) {
    var cStr = ''
    str = eStr.split(" ")
    var len = str.length
    for(var i = 0; i<len ; i+=1)
    {
        cStr = cStr.concat(' ', index[str[i]])
    }
    cStr = cStr.trim()

    return cStr
}