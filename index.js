const FormData = require('form-data');

class SogouOCR {
  static recognize(file) {
    return new Promise((resolve, reject) => {
      const form = new FormData();
      form.append('file', file);
      form.submit('http://ocr.shouji.sogou.com/v2/ocr/json', (err, res) => {
        if (err) return reject(err);
        const buffer = [];
        res
          .on('error', reject)
          .on('data', chunk => buffer.push(chunk))
          .on('end', () => {
            resolve(String(Buffer.concat(buffer)));
          })
      });
    });
  }
}

module.exports = SogouOCR;