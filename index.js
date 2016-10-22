'use strict'

let exec = require('child_process').exec
let fs = require('fs')
let stream = require('stream')
let errorHandler = require('./lib/error-handler')
let dataStream = new stream.Readable()
dataStream._read = function () {}
dataStream.on('error', errorHandler)

let fileWriter = fs.createWriteStream('ips.txt')
fileWriter.on('error', errorHandler)

dataStream.pipe(fileWriter)

let ipfreely = function (sites) {
  sites.forEach((site) => {
    exec(`dig +short ${site}`, (err, output) => {
      if (err) {
        errorHandler(err)
        return false
      }

      dataStream.push(`${site}: ${output.match(/^[0-9\.]+/)[0]}\n`)
    })
  })
}

module.exports = ipfreely
