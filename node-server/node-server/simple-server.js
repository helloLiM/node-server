var http = require('http')
var server = http.createServer(function (request, response) {
    console.log('我叫赛利亚')
    response.write('nihao')
    response.end()
})
console.log('可以访问local：8080啦')
server.listen(8080)


//最简单的静态服务器,必须要  response.end()