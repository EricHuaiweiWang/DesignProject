function Person(n) {
    let name = n;

    this.getName=function(){
        return name;
    }
}

//粗心了，13行 没给instance赋值，花费半小时。。。低级错误
let singletonManager = (function () {
    var instance = null;
    return function(name){
        return !instance ? instance=new Person(name) : instance;
    }
})()


