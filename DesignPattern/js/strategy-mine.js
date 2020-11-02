let errorMsg = {
    default: '输入数据格式不正确',
    minLength: '输入数据长度不足',
    isNumber: '请输入数字',
    required: '内容不为空',
    isMobile: '请输入正确手机号码'
}

let App = {
    debug: true,
    alert: function (msg) {
        if (this.debug)
            alert(msg)
    },
    log: function (msg) {
        if (this.debug)
            console.log(msg)
    }
}

let rules = {
    isNoEmpty: function (value, msg) {
        if (!value) {
            App.log(msg || errorMsg.required)
        }
    },
    minLength: function (value, length, msg) {
        if (value.length < length)
            App.alert(msg || errorMsg.minLength)
    },
    required: function (value, msg) {
        if (!value)
            App.alert(msg || errorMsg.required)
    },
    isMobile: function (value, msg) {
        if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
            App.alert(msg || errorMsg.default)
        }
    }
}

function Validator() {
    this.items = []
}

Validator.prototype = {
    constructor: Validator,
    add(value, rule, msg) {
        let args = [value];
        if (rule.indexOf(':') > -1) {
            let arr = rule.split(':')
            args.push(arr[1])
            rule = args[0]
        }
        this.items.push(function () {
            return rules[rule].apply(this, args)
        })

    },
    start() {
        for (let func of this.items) {
            let res = func()
            if (res) {
                App.log(res)
            }
        }
    }
}