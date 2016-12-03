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
## Caveat
This module makes use of [dig](https://linux.die.net/man/1/dig), which is super if you're running Linux or OSX.
However, if you happen to be using Windows, you can try your hand at [installing it yourself](http://www.danesparza.net/2011/05/using-the-dig-dns-tool-on-windows-7/), but
you'd be venturing into territory I had no interest in visiting.
