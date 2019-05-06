function getAndPrintHTML (options) {
  var https = require('https');
  var append = '';

  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      append += data;
    })
    response.on('end', function(){
      console.log(append);
    })
  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);