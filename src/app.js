var http = require('http');
var url = require('url');

var ipaddr = process.env.IP || "127.0.0.1";
var port = process.env.PORT || 7070;

http.createServer(function (req, res) {
  var query = url.parse(req.url, true).query;
  if (query.o === 'p') {
    http.get(query.u, function onGet(response) {
      var sRes = query.callback + '(';
      response.on("data", function (chunk) {
        sRes += chunk;
      });
      response.on("end", function () {
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        res.end(sRes + ');');
      });
    });
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(port, ipaddr);