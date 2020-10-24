let monthlyCost = 0;
// let cost = function (money) {
//     monthlyCost += money;
// };

// cost(100);
// cost(200);
// cost(300);

Function.prototype.uncurrying = function () {
    var self = this;
    return function () {
        var obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments);
    }
}

let push = Array.prototype.push.uncurrying();
(function () {
    push(arguments, 4);
    console.log(arguments);
})(1, 2, 3)

let cost = (function () {
    let args = [];
    return function () {
        if (arguments.length === 0) {
            let money = 0;
            for (let i = 0, item = 0; item = args[i++];) {
                money += item;
            }
            return money;
        } else {
            [].push.apply(args, arguments);
        }
    }
})()
cost(100);
cost(200);

console.log('monthlyCost: ' + cost);

Function.prototype.before = function (beforefn) {
    let __self = this;
    return function () {
        beforefn.apply(this, arguments);
        return __self.apply(this, arguments);
    }
}

Function.prototype.after = function (afterfn) {
    let __self = this;
    return function () {
        let ret = __self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret
    }
}



let getSingle = function (fn) {
    let ret = {};
    return function () {
        return ret || (ret = fn.apply(this, arguments))
    }
}

let getScript = getSingle(function () {
    return document.createElement('script');
})

var func = function () {
    console.log(2);
}

func = func.before(function () {
    console.log(1)
}).after(function () {
    console.log(3)
})
func();
let script1 = getScript();
let script2 = getScript();
// alert(script1 === script2);

let getUserInfo = function (userId, callback) {
    // $.ajax('http://xxx.com/getUserInfo?' + userId, function (data) {
    //     if (typeof callback === 'function') {
    //         callback(data);
    //     }
    // });
}

getUserInfo(13157, function (data) {
    console.log('' + data.username);
})

var appendDiv = function () {
    for (let i = 0; i < 100; i++) {
        let div = document.createElement('div');
        div.innerHTML = i;
        //document.body.appendChild(div);
        //div.style.display='none';
        if (typeof callback === 'function') {
            callback(div)
        }
    };
}

appendDiv(function (node) {
    node.style.display = 'none';
});

[1, 4, 3].sort((a, b) => a - b);

var isType = (type) => {
    return (obj) => {
        return Object.prototype.toString.call(obj) === '[object' + type + ']';
    }
};

var isString = isType('String');
var isArray = isType('Array');
var isNumber = isType('Number');

let Type = {}
for (let i = 0, item = ''; item = ['String', 'Array', 'Number'][i++];) {
    ((type) => {
        Type['is' + type] = (obj) => {
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        }
    })(item)
}