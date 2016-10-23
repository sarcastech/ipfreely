# ipfreely
Get the IP address of your favorite domains. Freely.

## Usage
`ipfreely` is a function that takes an argument of an array containing domain names.
This function returns a readable stream.

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