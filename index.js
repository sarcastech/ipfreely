'use strict'

let resolve = require('dns').resolve
let stream = require('stream')

function ipfreely (siteList) {
  let readStream = new stream.Readable()
  readStream._read = function () {} // no op

  siteList.forEach((site) => {
    resolve(site, (err, ipList) => {
      if (err) {
        readStream.emit('error', err)
      }
      readStream.push(`${site}:${ipList[0]}\n`)
    })
  })

  return readStream
}

module.exports = ipfreely
