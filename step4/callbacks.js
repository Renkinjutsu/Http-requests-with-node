function getHTML (options, callback) {
  var https = require('https');
  var append = '';

  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      append += data;
    })
    response.on('end', function() {
      callback(append);
    })
  })
  /* Add your code here */

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)