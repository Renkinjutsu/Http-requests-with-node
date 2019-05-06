module.exports = function getHTML (options, callback) {
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
};

