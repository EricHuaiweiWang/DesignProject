function Person(n) {
    let name = n;

    this.getName = function () {
        return name;
    }
}

//粗心了，13行 没给instance赋值，花费半小时。。。低级错误
let singletonManager = (function () {
    var instance = null;
    return function (name) {
        return !instance ? instance = new Person(name) : instance;
    }
})()


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
        let div = document.createElement('div')
        div.innerHTML = this.html
        document.body.appendChild(div)
    }
    return CreateDiv

})()


let a = new CreateDiv('divaaa')
let b = new CreateDiv('divaaass')


let CreateDiv_proxy = function (html) {
    this.html = html
    this.init()
}

CreateDiv_proxy.prototype.init = function () {
    let div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
}

let singletonProxy = (function () {
    let instance;

    return function (html) {
        if (!instance) {
            instance = new CreateDiv_proxy(html)
        }
        return instance
    }
})()

let aa= singletonProxy('aa')
let bb= singletonProxy('bb')
