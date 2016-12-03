'use strict'

const test = require('ava')
const stream = require('stream')
const ipfreely = require('../index')
const domainList = ['github.com']
const chunkRegex = /^[a-z\.]+:[0-9\.]+\n/gi
const foo = ipfreely(domainList)

test('ipfreely should be a function', function (t) {
  t.is(typeof ipfreely, 'function')
})

test(' calling ipfreely should return a readable stream', function (t) {
  t.is(foo instanceof stream.Readable, true)
})

test.cb('readable stream should create a colon-dilimited string', function (t) {
  foo.setEncoding('utf8')
  foo.on('data', function (chunk) {
    t.is(chunkRegex.test(chunk), true)
    t.end()
  })
})
