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

>Symbol 特点  
    1) Symbol 的值是唯一的，用来解决命名冲突的问题  
    2) Symbol 值不能与其他数据进行运算,Symbol 值也可以转为布尔值,Symbol 值可以显式转为字符串(toString)。  
    3) Symbol 定义的对象属性不能使用for…in 循环遍历，但是可以使用
Reflect.ownKeys来获取对象的所有键名

```
   //创建Symbol

   let s = Symbol();
   console.log(s, typeof s);
   let s2 = Symbol('华工')
   console.log(s2);
   let s3 = Symbol('华工')
   console.log(s2 === s3); //false

   //Symbol.for创建 这里Symbol是对象 上面是函数 这种数   对象
   //可以通过描述字符串得出唯一Symbol值
   let s4 = Symbol.for('华工');
   let s5 = Symbol.for('华工');
   console.log(s4 === s5); //true   

   // 不能与其他数据运算 自己也不可以
   let result = s + 100;
   let result1 = s > 100;
   let result2 = s + s;

   // 数据类型 USONB

   // u undefined
   // s string Symbol
   // o object 
   // n null number
   // b boolean bigint
```
# 2.9.2.Symbol 内置值
1. Symbol.hasInstance  当其他对象使用 instanceof 运算符，判断是否为该对
象的实例时，会调用这个方法

2. Symbol.isConcatSpreadable 对象的 Symbol.isConcatSpreadable 属性等于的是一个
布尔值，表示该对象用于 Array.prototype.concat()时，
是否可以展开。

3. Symbol.species 创建衍生对象时，会使用该属性


4. Symbol.match 当执行 str.match(myObject) 时，如果该属性存在，会
调用它，返回该方法的返回值。

5. Symbol.replace 当该对象被 str.replace(myObject)方法调用时，会返回
该方法的返回值。

6. Symbol.search 当该对象被 str.search (myObject)方法调用时，会返回
该方法的返回值。

7. Symbol.split 当该对象被 str.split(myObject)方法调用时，会返回该
方法的返回值。

8. Symbol.iterator 对象进行 for...of 循环时，会调用 Symbol.iterator 方法，
返回该对象的默认遍历器

9. Symbol.toPrimitive 该对象被转为原始类型的值时，会调用这个方法，返
回该对象对应的原始类型值。

10. Symbol. toStringTag 在该对象上面调用 toString 方法时，返回该方法的返
回值

11. Symbol. unscopables 该对象指定了使用 with 关键字时，哪些属性会被 with
环境排除。


# 2.10. 迭代器
遍历器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提
供统一的访问机制。任何数据结构只要部署 Iterator 接口（属性），就可以完成遍历操作

>1) ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费  
>2) 原生具备 iterator 接口的数据(可用 for of 遍历)  
    a) Array  
    b) Arguments  
    c) Set  
    d) Map  
    e) String  
    f) TypedArray    
    g) NodeList
>3) 工作原理
    a) 创建一个指针对象，指向当前数据结构的起始位置  
    b) 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员  
    c) 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员  
    d) 每调用 next 方法返回一个包含 value 和 done 属性的对象

***注: 需要自定义遍历数据的时候，要想到迭代器。***

# 2.11. 生成器
生成器函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

1) *的位置没有限制  
2) 生成器函数返回的结果是迭代器对象，调用迭代器对象的 next 方法可以得到yield 语句后的值  
3) yield 相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next方法，执行一段代码  
4) next 方法可以传递实参，作为 yield 语句的返回值  
```
//生成器其实就是一个特殊的函数
        //异步编程  纯回调函数  node fs  ajax mongodb
        //函数代码的分隔符
        function * gen(arg){
          console.log(arg);
            // console.log(111);
           let one= yield '一只没有耳朵';
           console.log(one);
            // console.log(222);
           let two= yield '一只没有尾部';
           console.log(two);
            // console.log(333);
            let three=yield '真奇怪';
            console.log(three);
            // console.log(444);
        }

        let iterator = gen('AAA');
        console.log(iterator.next());
        // 作为上一个yield整体返回结果
        console.log(iterator.next('BBB'));
        console.log(iterator.next('CCC'));
        console.log(iterator.next('DDD'));

        //遍历
        // for(let v of gen()){
        //     console.log(v);
        // }
```

# 2.12. Promise
Promise 是 ES6 引入的异步编程的新解决方案。语法上 Promise 是一个构造函数，
用来封装异步操作并可以获取其***成功或失败***的结果。  
1) Promise 构造函数: Promise (excutor) {}  
2) Promise.prototype.then 方法  
3) Promise.prototype.catch 方法  

## then方法
```
//创建 promise 对象
        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('用户数据');
                // reject('出错啦');
            }, 1000)
        });

        //调用then方法 返回结果为Promise对象，对象状态由回调函数的执行结果决定
        //1. 如果回调函数中返回的结果是 非 promise 类型的属性, 状态为成功, 返回值为对象的成功的值
        const result = p.then(value => {
            console.log(value);
            //1. 非 promise 类型的属性
            //      return 'iloveyou';
            // 2. 是 promise 对象
            // return new Promise((resolve, reject) => {
            //     // resolve('ok');
            //     reject('error');
            // });
            // 3.抛出错误
            throw new Error('出错了')
        }, reason => {
            console.warn(reason);
        })


        // 链式调用
        p.then(value => {

        }).then(value => {

        });
        console.log(result); //是一个Promise对象
```

## catch方法捕获reject
```
  p.catch(err => {
            console.warn(err)
        })
```


# 2.13. Set
ES6 提供了新的数据结构 Set（集合）。它类似于数组，但成员的值都是***唯
一***的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历，集合的属性和方法：  
   1) size 返回集合的元素个数
   2) add 增加一个新元素，返回当前集合
   3) delete 删除元素，返回 boolean 值
   4) has 检测集合中是否包含某个元素，返回 boolean 值
   5) clear 清空集合，返回 undefined

```
//声明一个 set
        let s = new Set();
        //自动去除
        let s2 = new Set(['大事儿', '小事儿', '好事儿', '坏事儿', '小事儿']);
        for (let v of s2) {
            console.log(v);
        }
        //元素个数
        console.log(s2.size);
        //添加新的元素
        s2.add('喜事儿');
        //删除元素
        s2.delete('坏事儿');
        //检测
        console.log(s2.has('糟心事'));
        //清空
        s2.clear();
        console.log(s2);


        //实践
        // 数组去重
        let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
        let result = [...new Set(arr)]
        console.log(result);

        //交集
        let arr2 = [4, 5, 6, 5, 6]
        let result2 = [...new Set(arr)].filter(item => {
            let s2 = new Set(arr2)
            if (s2.has(item)) {
                return true
            } else {
                return false
            }
        })
        let result3 = [...new Set(arr)].filter(item => new Set(arr2).has(item));
        console.log(result2, result3);

        //并集
        let union = [...new Set([...arr, ...arr2])]
        console.log(union);

        //差集
        let diff1 = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)));
        let diff2 = [...new Set(arr2)].filter(item => !(new Set(arr).has(item)));
        console.log(diff1, diff2);
```


# 2.14. Map
ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”
的范围***不限于字符串***，各种类型的值（包括对象）都可以当作键。Map 也实现了iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历。Map 的属性和方法：  
      1) size 返回 Map 的元素个数  
      2) set 增加一个新元素，返回当前 Map  
      3) get 返回键名对象的键值  
      4) has 检测 Map 中是否包含某个元素，返回 boolean 值  
      5) clear 清空集合，返回 undefined  

```
//声明map
        let m = new Map()

        //添加
        m.set('name', 'xu')
        m.set('change', function() {
            console.log('我改变你');
        })
        let key = {
            school: 'adsf'
        }
        m.set(key, ['北京', '伤害'])

        console.log(m.size);
        console.log(m);

        //删除
        m.delete('name')

        //获取 返回的是数组 
        console.log(m.get('change'));
        console.log(m.get(key));

        // //清空
        // m.clear()

        // 遍历
        for (let v of m) {
            console.log(v);
        }
```

# 2.15. class 类
ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对
象的模板。通过 class 关键字，可以定义类。基本上，ES6 的 class 可以看作只是
一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象
原型的写法更加清晰、更像面向对象编程的语法而已。
知识点：
      1) class 声明类
      2) constructor 定义构造函数初始化
      3) extends 继承父类
      4) super 调用父级构造方法
      5) static 定义静态方法和属性
      6) 父类方法可以重写


##类的静态成员
```
// function Phone(){
        // }
        // Phone.name = '手机';
        // Phone.change = function(){
        //     console.log("我可以改变世界");
        // }
        // Phone.prototype.size = '5.5inch';

        // let nokia = new Phone();

        // 实例对象没有函数对象的属性 必须通过prototype交集
        // console.log(nokia.name); //undefined
        // // nokia.change(); //error
        // console.log(nokia.size);

        class Phone{
            //静态属性 实例对象不能得到静态属性
            static name = '手机';
            static change(){
                console.log("我可以改变世界");
            }
        }

        let nokia = new Phone();
        console.log(nokia.name);//undefined
        console.log(Phone.name);
```

## getter和setter ***特别留意***
```
        // get 和 set  
        class Phone {
            constructor(name) {
                this.name = name;
            }
            get name() {
                    console.log("setter");
                    return this._name;
                }
                //不用_name会一直循环 this.name=name会调用set 又会执行this.name=name
            set name(name) {
                console.log('getter');
                this._name = name
            }
        }

        //实例化对象
        let s = new Phone();

        // console.log(s.price);
        s.name = 'free';
```

# 2.16. 数值扩展

## 2.16.1. 二进制和八进制

ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b 和 0o 表示。

## 2.16.2. Number.isFinite() 与 Number.isNaN() 

Number.isFinite() 用来检查一个数值是否为有限的  
Number.isNaN() 用来检查一个值是否为 NaN  

## 2.16.3. Number.parseInt() 与 Number.parseFloat() 

ES6 将全局方法 parseInt 和 parseFloat，移植到 Number 对象上面，使用不变。

## 2.16.4. Math.trunc
用于去除一个数的小数部分，返回整数部分。

## 2.16.5. Number.isInteger
Number.isInteger() 用来判断一个数值是否为整数

## 2.16.6 
Math.sign 判断一个数到底为正数 负数 还是零


# 2.17. 对象扩展
ES6 新增了一些 Object 对象的方法  
   1) Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）
   2) Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象
   3) __proto__、setPrototypeOf、 setPrototypeOf 可以直接设置对象的原型


# 2.18. 模块化
>模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。

## 2.18.1. 模块化的好处
>模块化的优势有以下几点：  
   1) 防止命名冲突  
   2) 代码复用  
   3) 高维护性  


## 2.18.2. 模块化规范产品
>ES6 之前的模块化规范有：  
   1) CommonJS => NodeJS、Browserify  
   2) AMD => requireJS  
   3) CMD => seaJS  

# 2.18.3. ES6 模块化语法
>模块功能主要由两个命令构成：export 和 import。 
* export 命令用于规定模块的对外接口

```
//分别暴露
export let school = '尚硅谷';

export function teach () {
  console.log("我们可以教给你开发技能");
}

// 统一暴露
let school = '尚硅谷';

function findJob () {
  console.log("我们可以帮助你找工作!!");
}

export { school, findJob }


//默认暴露
export default {
  school: 'abc',
  change: function () {
    console.log('我改变了');
  }
}
```


* import 命令用于输入其他模块提供的功能


```
   //1. 通用的导入方式
        // import * as m1 from "./js/m1.js" ; 
        // console.log(m1); 
        // import * as m2 from "./js/m2.js"; 
        // console.log(m2); 
        // import * as m3 from "./js/m3.js"; 
        // console.log(m3); m3.default.change()

        //2. 解构赋值形式
        // import {school, teach} from "./js/m1.js";
        // import {school as guigu, findJob} from "./js/m2.js";
        // import {default as m3} from "./js/m3.js";

        //3. 简便形式  针对默认暴露
        // import m3 from ".js/m3.js";
        // console.log(m3);
```

# 第 3 章 ECMASript 7 新特性
## 3.1.Array.prototype.includes

Includes 方法用来检测数组中是否包含某个元素，返回布尔类型值

## 3.2.指数操作符

在 ES7 中引入指数运算符「**」，用来实现幂运算，功能与 Math.pow 结果相同



# 第 4 章 ECMASript 8 新特性

## 4.1.async 和 await
async 和 await 两种语法结合可以让异步代码像同步代码一样 

### 4.1.1.async 函数

  1. async 函数的返回值为 promise 对象，
  2. promise 对象的结果由 async 函数执行的返回值决定

```
async function fn(params) {
            //返回一个字符串
            // return 'abc'

            // 返回的结果不是一个promise类型对象 那就是成功的promise
            // return;

            // 抛出错误 返回一个失败的promise
            // throw new Error('出错')

            // 返回的结果如果是一个promise对象 由这个Promise决定
            return new Promise((resolve, reject) => {
                resolve('成功的值')
                    // reject('失败的错误')
            })
        }
```

   
### 4.1.2.await 表达式
  1. await 必须写在 async 函数中
  2. await 右侧的表达式一般为 promise 对象
  3. await 返回的是 promise 成功的值
  4. await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理


## 4.2.Object.values 和 Object.entries 
  1. Object.values()方法返回一个给定对象的所有可枚举属性值的数组  
  2. Object.entries()方法返回一个给定对象自身可遍历属性 [key,value] 的数组  

```
        //声明对象
        const school = {
            name:"尚硅谷",
            cities:['北京','上海','深圳'],
            xueke: ['前端','Java','大数据','运维']
        };

        //获取对象所有的键
        // console.log(Object.keys(school));
        //获取对象所有的值
        // console.log(Object.values(school));
        //entries
        // console.log(Object.entries(school));
        //创建 Map
        // const m = new Map(Object.entries(school));
        // console.log(m.get('cities'));

        //对象属性的描述对象
        // console.log(Object.getOwnPropertyDescriptors(school));

        // const obj = Object.create(null, {
        //     name: {
        //         //设置值
        //         value: '尚硅谷',
        //         //属性特性
        //         writable: true,
        //         configurable: true,
        //         enumerable: true
        //     } 
        // });
```


# 第 5 章 ECMASript 9 新特性
## 5.1.Rest/Spread 属性
Rest 参数与 spread 扩展运算符在 ES6 中已经引入，不过 ES6 中只针对于数组，  
在 ES9 中为对象提供了像数组一样的 rest 参数和扩展运算符
```
  //把剩下的参数放到user中
function connect({host, port, ...user}) {
  console.log(host);
  console.log(port);
  console.log(user);
}
connect({
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  type: 'master'
});
```

## 5.2.正则表达式命名捕获组
ES9 允许命名捕获组使用符号?<name>,这样获取捕获结果可读性更强
```
 let str = '<a href="http://www.atguigu.com">尚硅谷</a>';
        //分组命名
        const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;

        const result = reg.exec(str);

        console.log(result.groups.url);

        console.log(result.groups.text);
```

## 5.3.正则表达式反向断言
ES9 支持反向断言，通过对匹配结果前面的内容进行判断，对匹配进行筛选。
```
     //声明字符串
        let str = 'JS5211314你知道么555啦啦啦';
        //正向断言 =后面
        const reg = /\d+(?=啦)/;
        const result = reg.exec(str);

        //反向断言 ?<=表示前面
        const reg = /(?<=么)\d+/;
        const result = reg.exec(str);
        console.log(result);
```

# 5.4.正则表达式 dotAll 模式
正则表达式中点.匹配除回车外的任何单字符，标记『s』改变这种行为，允许行
终止符出现


# 第 6 章 ECMASript 10 新特性

## 6.1.Object.fromEntries
```
        //二维数组
        const result = Object.fromEntries([
            ['name', '尚硅谷'],
            ['xueke', 'Java,大数据,前端,云计算']
        ]);
        console.log(result);

        //Map
        const m = new Map();
        m.set('name', 'ATGUIGU');
        const result1 = Object.fromEntries(m);
        console.log(result1);

        //Object.entries ES8
        const arr = Object.entries({
            name: "尚硅谷"
        })
        console.log(arr);
```

## 6.2.trimStart 和 trimEnd

```
       // trim trimstart清除开头空白 trimend清除尾部空白
        let str = '   iloveyou   ';
        console.log(str);
        console.log(str.trimStart());
        console.log(str.trimEnd());
```
## 6.3.Array.prototype.flat 与 flatMap
```
        //flat 平
        //将多维数组转化为低位数组
        const arr1 = [1, 2, 3, 4, [5, 6]];
        const arr2 = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
        //参数为深度 是一个数字 3维变1  3-1=2
        console.log(arr1.flat());
        console.log(arr2.flat(2));

        //flatMap
        const arr3 = [1, 2, 3, 4];
        const result = arr3.flatMap(item => [item * 10]);
        console.log(result);
```
## 6.4.Symbol.prototype.description
```
 //创建 Symbol
        let s = Symbol('尚硅谷');
        console.log(s.description);
```


# 第 7 章 ECMASript 11 新特性
## 7.1.String.prototype.matchAll
批量匹配提取字符串

## 7.2.类的私有属性
```
私有属性在命名前加#，只能在类内部调用，外部不可见
        class Person{
            //公有属性
            name;
            //私有属性
            #age;
            #weight;
            //构造方法
            constructor(name, age, weight){
                this.name = name;
                this.#age = age;
                this.#weight = weight;
            }
            intro(){
                console.log(this.name);
                console.log(this.#age);
                console.log(this.#weight);
            }
        }
        //实例化
        const girl = new Person('晓红', 18, '45kg');
        // console.log(girl.name);
        // console.log(girl.#age);报错
        // console.log(girl.#weight);报错
        girl.intro();
```
## 7.3.Promise.allSettled
```
  //调用 allsettled 方法
  // 一定是成功，但里面的promise可能成功也可能失败 得到每个promise的状态信息
  // const result = Promise.allSettled([p1, p2]);
  
  // all根据里面的promise决定，全部成功才成功，一个出错就出错 
  // const res = Promise.all([p1, p2]);
```

## 7.4.可选链操作符

```
// const dbHost = config && config.db && config.db.host;
//?. 前面有我再去读取后面的属性
const dbHost = config?.db?.host;
```

## 7.5.动态 import 导入
```
btn.onclick = function(){
  //导入的结果是个promise对象
    import('./hello.js').then(module => {
        module.hello();
    });
}
```

## 7.6.globalThis 对象
无论执行环节是什么，始终指向全局对象this

## 7.7.Bigint
```
  //大整形
  let n = 521n;
  console.log(n, typeof(n));

  //函数
  let n1 = 123;
  console.log(BigInt(n1));
  // 不能使用浮点数 大整型化
  // console.log(BigInt(1.2));

  //大数值运算
  let max = Number.MAX_SAFE_INTEGER;
  console.log(max);
  console.log(max + 1);
  console.log(max + 2);

  // 超出最大可以转化为bigint来运算
  console.log(BigInt(max))
  console.log(BigInt(max) + BigInt(1))
  console.log(BigInt(max) + BigInt(2))
```