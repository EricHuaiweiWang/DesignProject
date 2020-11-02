//global 
var App = {
    debug: true,
    log: function (msg) {
        if (this.debug)
            console.log(msg)
    },
    alert: function (msg) {
        if (this.debug)
            alert(msg)
    }
}