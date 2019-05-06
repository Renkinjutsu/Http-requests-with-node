
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-exampleeeeeeees/step1.html'
  };

  var https = require('https');

  https.get(requestOptions, function(response) {

    response.on('error', function(response) {
      console.log('ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    });
    if (response) {
      response.setEncoding('utf8');
      response.on('data', function(response) {
        console.log('Data Chunk! -> ', response, '\n')
      })
      response.on('end', function() {
        console.log('The end is here!')
      });
    }

  });
}
getAndPrintHTMLChunks()