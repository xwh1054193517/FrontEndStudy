function axios({
    url,
    method = 'GET',
    params = {},
    data = {}
}) {
    // 返回一个promise对象
    return new Promise((resolve, reject) => {
        // 处理method 转大写
        method = method.toUpperCase()

        // 处理 query参数（拼接到url上）id=1&xxx=abc
        let queryString = '';
        Object.keys(params).forEach(key => {
            queryString += `${key}=${params[key]}&`
        });

        if (queryString) {
            // 去除最后的'&'
            queryString = queryString.substring(0, queryString.length - 1)
                // 接到url
            url += '?' + queryString
        }

        // 1. 执行异步Ajax请求
        // 创建xhr对象
        const request = new XMLHttpRequest()
            // 打开连接（初始化请求，没有请求）
        request.open(method, url, true)
            // 发送请求
        if (method === 'GET' || method === 'DELETE') {
            request.send() // undefined
        } else if (method === 'POST' || method === 'PUT') {
            // 设置请求头，告诉服务器请求体的格式是json
            request.setRequestHeader('Content-Type', 'appliaction/json;charset=utf-8');
            // 发送json格式请求参数
            request.send(JSON.stringify(data)); // 异步执行
        }
        // 绑定状态改变的监听
        request.onreadystatechange = function() { // 同步执行
            // 如果请求没有完成，直接结束
            if (request.readyState !== 4) {
                return;
            }
            // 如果响应状态码在[200, 300)之间代表成功，否则失败
            const { status, statusText } = request
            if (status >= 200 && status <= 299) { // 2.1 如果请求成功，调用resolve()
                // 准备结果数据对象response
                const response = {
                    data: JSON.parse(request.response),
                    status,
                    statusText
                };
                resolve(response);
            } else { // 2.2 如果请求失败，调用reject()
                reject(new Error('request error status is ' + status));
            }
        }

    })



}