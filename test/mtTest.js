
/* eslint-disable no-undef */
var expect = require('chai').expect

describe('mt', function () {
    var mt = require('../lib/mt')
    
    describe('英翻中', function () {
        it('mt.e2c(A dog chase a cat)', function () {
            expect(mt.e2c('A dog chase a cat')).to.equal('一隻 狗 追 一隻 貓')
        })
    })
})
