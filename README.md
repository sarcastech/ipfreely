# ipfreely
Get the IP address of your favorite domains. Freely.

## Usage
`ipfreely` is a function that takes an argument of an array containing domain names.
Returned value is a readable stream that formats each line of text as `domain.com:123.14.67`.

```javascript
// calling ipfreely will return a readable stream
let ipfreely = require('ipfreely')

// create a writeable stream to save ipfreely's output to a file
let fs = require('fs')
let writeStream = fs.createWriteStream('iplist.txt')

// call and pass an array of domain names
// readable stream will send a line of text for each domain/ip combination
ipfreely(['google.com', 'github.com', 'js.foundation'])
  .pipe(writeStream)
```

## Changelog
- v1.0.1: replace executing [dig](https://linux.die.net/man/1/dig) via `child_process.exec()` with Node's `dns.resolve()`
- v1.0.0: Initial release
