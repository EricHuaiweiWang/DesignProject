var errorMsgs = {
    default: '输入数据格式不正确',
    minLength: '输入数据长度不足',
    isNumber: '请输入数字',
    required: '内容不为空'
}

let rules = {
    required: function (value, errorMsg) {
        if (value === '') {
            return errorMsg || errorMsgs['required']
        }
    }
}

function Validator() {
    this.items = [];
}

Validator.prototype = {
    constructor: Validator,
    add: function (value, rule, errorMsg) {
        var arg = [value];
        if (rule.indexOf('minLength') !== -1) {
            let temp = rule.split(':');
            arg.push(temp[1]);
            rule = temp[0]
        }
        arg.push(errorMsg);

        this.items.push(function () {
            return rules[rule].apply(this,arg);
        })
    },
    start: function () {
        for(let ret of this.items)
        if(ret()) console.log(ret());
        // for (let i = 0,ret={}; ret = this.items[i++]();) {
        //     if (ret) console.log(ret);
        // }
    }
}

function testTel(val){
    return val;
}

var validate=new Validator();
validate.add(testTel(''),'required')