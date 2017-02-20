/* Request and Response */

var http = require('http');

http.createServer(

    function(request, //客户端发来的请求，node.js 帮我们封装成 request 对象
             response //我们利用response,向客户端发送回答
    ){
        //在控制台显示request对象
        console.log(request);
        //总算完成 hello world 了。
        response.end('Hello world!');

    }).listen(3000);

console.log('Server start at 3000');