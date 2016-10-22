'use strict'

let exec = require('child_process').exec
let fs = require('fs')
let stream = require('stream')
let dataStream = new stream.Readable()
dataStream._read = function () {}
dataStream.on('error', function (err) {
  console.log('Read Error: ', err)
})

let fileWriter = fs.createWriteStream('ips.txt')
fileWriter.on('error', function (err) {
  console.log('Write Error: ', err)
})

dataStream.pipe(fileWriter)

let ipfreely = function (sites) {
  sites.forEach((site) => {
    exec(`dig +short ${site}`, (err, output) => {
      if (err) {
        console.log(`Error getting site ${site}`)
        return false
      }

      dataStream.push(`${site}: ${output.match(/^[0-9\.]+/)[0]}\n`)
    })
  })
}

module.exports = ipfreely
