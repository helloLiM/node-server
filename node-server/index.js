var port = 8080;//设置一个端口8080
var http = require('http')//引入http模块，用来创建一个服务器
var path = require('path')//引入了path模块，用来处理文件路径
var fs = require('fs')//引入文件系统模块（暂不清楚），用来读写文件与数据
var url = require('url')//引入url模块，用来解析url

function staticRoot(sample, request, response) {
    // response.setHeader('Content-Type', 'text/html;charset=utf-8')
    // response.write('你好，我叫赛丽亚')
    //console.log(url)
    var pathObj = url.parse(request.url, true)//获取请求的网址
    if (pathObj.pathname === '/') {
        pathObj.pathname = pathObj.pathname + 'test.html'
    }
    console.log(pathObj.pathname)//输出/test.html
    //将文件路径设置为test.html所在的文件相对路径
    var filePath = path.join(sample, pathObj.pathname)
    console.log(filePath)//输出C:\Users\sam\Desktop\node-server\sample\test.html
    //将文件路径设置为test.html所在的文件绝对路径

    fs.readFile(filePath, 'binary', function (err, fileContent) {
        if (err) {//文件读取错误是展示内容
            response.writeHead(404, 'Not Found')
            response.end('<h1>404 Not Found</h1>')
        } else {//文件读取正确时展示内容
            response.writeHead(200, 'OK')
            response.write(fileContent, 'binary')
            response.write('hello word', 'binary')
            response.end()
        }
        // console.log(fileContent)
    })
    //console.log(__dirname)
    // console.log(fs.readFile)
    //console.log(pathObj)
    // response.end()
}
var server = http.createServer(function (request, response) {
    staticRoot(path.join(__dirname, 'sample'), request, response)
})
//创建一个服务器，并将代码闭包
//__dirname表示当前执行脚本所在的目录
console.log('visit:http:localhost:8080')
server.listen(port)

//此文件最要作用是构建一个本地服务器，使页面可展示在本地服务器上