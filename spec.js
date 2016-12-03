'use strict'

const test = require('ava')
const stream = require('stream')
const ipfreely = require('./index')
const domainList = ['github.com']

test('ipfreely should be a function', function (t) {
  t.is(typeof ipfreely, 'function')
})

test.cb('ipfreely should return a readable stream', function (t) {
  let foo = ipfreely(domainList)
  t.is(foo instanceof stream.Readable, true)

  foo.setEncoding('utf8')
  foo.on('data', function (chunk) {
    t.is(typeof chunk, 'string')
    t.is(chunk.indexOf('github.com:'), 0)
    t.end()
  })
})
