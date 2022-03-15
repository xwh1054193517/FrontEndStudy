# 第 1 章 ECMASript 相关介绍

>ECMAScript 是由 Ecma 国际通过 ECMA-262 标准化的脚本程序设计语言。  
  * 第 1 版 1997 年 制定了语言的基本语法  
  * 第 2 版 1998 年 较小改动  
  * 第 3 版 1999 年 引入正则、异常处理、格式化输出等。IE 开始支持  
  * 第 4 版 2007 年 过于激进，未发布  
  * 第 5 版 2009 年 引入严格模式、JSON，扩展对象、数组、原型、字
  * 符串、日期方法  
  * 第 6 版 2015 年 模块化、面向对象语法、Promise、箭头函数、let、
  * const、数组解构赋值等等  
  * 第 7 版 2016 年 幂运算符、数组扩展、Async/await 关键字  
  * 第 8 版 2017 年 Async/await、字符串扩展  
  * 第 9 版 2018 年 对象解构赋值、正则扩展  
  * 第 10 版 2019 年 扩展对象、数组方法  


# 第 2 章 ECMASript 6 新特性

## 2.1.let 关键字

    let 关键字用来声明变量，使用 let 声明的变量有几个特点：
    1) 不允许重复声明
    2) 块儿级作用域
    3) 不存在变量提升
    4) 不影响作用域链


## 2.2. const 关键字
    const 关键字用来声明常量，const 声明有以下特点
    1) 声明必须赋初始值
    2) 标识符一般为大写
    3) 不允许重复声明
    4) 值不允许修改
    5) 块儿级作用域


***注意: 对象属性修改和数组元素变化不会出发 const 错误***  
***应用场景：声明对象类型使用 const，非对象类型声明选择 let***


## 2.3.变量的解构赋值
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为***解构赋值***。  

```
//数组的解构赋值
const arr = ['张学友', '刘德华', '黎明', '郭富城'];
let [zhang, liu, li, guo] = arr; 4

//对象的解构赋值
const lin = {
 name: '林志颖',
 tags: ['车手', '歌手', '小旋风', '演员']
};
let {name, tags} = lin;

//复杂解构
let wangfei = {
  name: '王菲',
  age: 18,
  songs: ['红豆', '流年', '暧昧', '传奇'],
  history: [
    {name: '窦唯'},
    {name: '李亚鹏'},
    {name: '谢霆锋'}
  ]
};
let {songs: [one, two, three], history: [first, second, third]} = wangfei;
```
# 2.4.模板字符串
模板字符串（template string）是增强版的字符串，用反引号（`）标识，特点：  
    1) 字符串中可以出现换行符
    2) 可以使用 ${xxx} 形式输出变量

# 2.5.简化对象写法
ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁


# 2.6.箭头函数
ES6 允许使用「箭头」（=>）定义函数。

* 1. 通用写法
```
let fn = (arg1, arg2, arg3) => {
    return arg1 + arg2 + arg3;
}
```

>箭头函数的注意点:
   1) 如果形参只有一个，则小括号可以省略  
   2) 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果  
   3) 箭头函数 this 指向声明时所在作用域下 this 的值  
   4) 箭头函数不能作为构造函数实例化  
   5) 不能使用 arguments  



* 2. 省略小括号的情况
  
```
let fn2 = num => {
 return num * 10;
};
```
* 3. 省略花括号的情况
  
```
let fn3 = score => score * 20;
```

* 4. this 指向声明时所在作用域中 this 的值

```
let fn4 = () => {
 console.log(this);
} 


let school = {
 name: '尚硅谷',
 getName(){
      let fn5 = () => {
      console.log(this);
    }
  fn5();
 }
};
```
***注意：箭头函数不会更改 this 指向，用来指定回调函数会非常合适***


# 2.7. rest 参数
ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments   
***作用与 arguments 类似***

```
function add(...args){
 console.log(args);
}
add(1,2,3,4,5);
/**
* rest 参数必须是最后一个形参
*/
function minus(a,b,...args){
 console.log(a,b,args);
}
minus(100,1,2,3,4,5,19)
```

# 2.8. spread 扩展运算符
扩展运算符（spread）也是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包。
```
//1. 数组的合并 情圣  误杀  唐探
const kuaizi = ['王太利', '肖央'];
const fenghuang = ['曾毅', '玲花'];
// const zuixuanxiaopingguo = kuaizi.concat(fenghuang);
const zuixuanxiaopingguo = [...kuaizi, ...fenghuang];
console.log(zuixuanxiaopingguo);

//2. 数组的克隆
const sanzhihua = ['E', 'G', 'M'];
const sanyecao = [...sanzhihua]; //  ['E','G','M']
console.log(sanyecao);

//3. 将伪数组转为真正的数组
const divs = document.querySelectorAll('div');
const divArr = [...divs];
console.log(divArr); // arguments
```

# 2.9.Symbol
## 2.9.1.Symbol 基本使用
ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是
JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。  
Symbol 特点  
    1) Symbol 的值是唯一的，用来解决命名冲突的问题  
    2) Symbol 值不能与其他数据进行运算  
    3) Symbol 定义的对象属性不能使用for…in 循环遍历，但是可以使用
       Reflect.ownKeys来获取对象的所有键名