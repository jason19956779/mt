var mt = module.exports = {}
var dic = require('./dic')
mt.e2c = function (eStr) {
    cStr = ''
    str = eStr.split(" ")
    var len = str.length
    for(var i = 0; i<len ; i+=1)
    {
        cStr += dic.index[str[i]]
    }

    return cStr
}