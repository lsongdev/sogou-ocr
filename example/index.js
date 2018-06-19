const SogouOCR = require('..');

SogouOCR.recognize('/Users/Lsong/Desktop/demo.png')
.then(text => {
  console.log(text);
});