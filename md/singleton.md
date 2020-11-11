# Js实战篇 6行代码-单例模式

> 阅读时长：2分钟 

技术点涉及闭包、es5

适用的场景

+ 线程池
+ 全局缓存
+ 浏览器的window对象
+ 唯一的登录浮窗

## 创建唯一的元素

### 示例一
``` javascript
let CreateDiv = (function () {
    let instance = null
    let CreateDiv = function (html) {
        if (instance)
            return instance
        this.html = html
        this.init()
        return instance = this
    }
    CreateDiv.prototype.init = function () {
        let div = document.createElement('single element')
        div.innerHTML = this.html
        document.body.appendChild(div)
    }
    return CreateDiv

})()
let a=new CreateDiv('div1')
let b=new CreateDiv('div2')
```
上述是一个比较常见的单例模式应用、仍然存在一些职责耦合，创建和单例判断逻辑放在了一起。
优化意见：
判断逻辑独立出来，写成一个代理类`singletonProxy`

### 示例二
``` javascript
let CreateDiv = function (html) {
    this.html = html
    this.init()
}

CreateDiv.prototype.init = function () {
    let div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
}

let singletonProxy = (function () {
    let instance;

    return function (html) {
        if (!instance) {
            instance = new CreateDiv(html)
        }
        return instance
    }
})()

let aa= singletonProxy('aa')
let bb= singletonProxy('bb')
```
emm...m 搞定了? 什么，还有优化的空间，看出来了吗？

``` javascript
let singletonProxy = (function () {
    let instance;
    return function (html) {
        return !instance?instance = new CreateDiv_proxy(html):instance
    }
})()

let aa= singletonProxy('aa')
let bb= singletonProxy('bb')
```

```!
提问环节
1. 为什么示例一中,实例化用到了new,示例二没有new也可以？欢迎在评论区给出你的答案
```
下一篇 不一样的策略模式，帮你告别N个if

> 技术文章只看不练=白看，只练不思考、总结=白学
>
> 如果您觉得有用，**赞起来**吧
>
> 您的**认可**，是我写作强劲的动力
>
> 欢迎大家留言**评论**，**给予**宝贵意见:)