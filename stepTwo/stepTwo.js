var https = require('https');



function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var buf = '';
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    //callback to be invoked
    response.on('data', function (data) {
      console.log('Chunk Received.  Length:', data.length, '\n');
      buf += data.toString();
    });

    response.on('end', function(){
      console.log('Response stream complete');
      console.log(buf);
    })
  })

}
getAndPrintHTML();



