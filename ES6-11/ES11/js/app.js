// import * as m1 from "./hello.js";
//获取元素
const btn = document.getElementById('btn');

btn.onclick = function() {
    //导入的结果是个promise对象
    import ('./hello.js').then(module => {
        module.hello();
    });
}