function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var https = require('https');

  var append = '';

  https.get(requestOptions, function(response) {

      response.on('data', function(data) {
        append += data;
      })
      response.on('end', function(){
        console.log(append);
      })
  })
   /* Add your code here */
}
getAndPrintHTML()