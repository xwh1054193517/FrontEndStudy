// 引入
import print from './print';
import '../css/iconfont.css';
import '../css/index.less';

console.log('index.js文件被加载了~');

print();

function add(x, y) {
    return x + y;
}

console.log(add(1, 3));

if (module.hot) {
    module.hot.accept('./print.js', function() {
        print()
    })
}