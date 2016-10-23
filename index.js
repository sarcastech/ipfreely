'use strict'

let exec = require('child_process').exec
let stream = require('stream')
let errorHandler = require('./lib/error-handler')

function ipfreely (siteList) {
  let readStream = new stream.Readable()
  readStream._read = function () {} // no op

  siteList.forEach((site) => {
    exec(`dig +short ${site}`, (err, output) => {
      if (err) {
        errorHandler(err)
        return false
      }

      readStream.push(`${site}: ${output.match(/^[0-9\.]+/)[0]}\n`)
    })
  })

  return readStream
}

module.exports = ipfreely
