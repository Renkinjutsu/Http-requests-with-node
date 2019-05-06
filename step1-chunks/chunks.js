
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var https = require('https');

  https.get(requestOptions, function(response) {

    response.on('error', function() {
          console.log('ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!', error)
          return
          });


      response.setEncoding('utf8');
      response.on('data', function(data) {
        console.log('Data Chunk! -> ', data, '\n')
      })
      response.on('end', function() {
        console.log('The end is here!')
      });
    })

}
getAndPrintHTMLChunks()