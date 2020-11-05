let myImage = (function () {
    let imgNode = document.createElement('img'),
        img = new Image
    document.body.appendChild(imgNode)

    img.onload = function () {
        imgNode.src = img.src
    }

    return {
        setSrc: function (src) {
            imgNode.src = './img/cool-loading-gif-11.gif'
            img.src = src
        }
    }

})()
//myImage.setSrc('https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9fdfd677eda940e8980aa1ad46d1f0b3~tplv-k3u1fbpfcp-zoom-1.image')

// myImage.setSrc('https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9fdfd677eda940e8980aa1ad46d1f0b3~tplv-k3u1fbpfcp-zoom-1.image')

let myImage_optimze = (function () {
    let imageNode = document.createElement('img');
    document.body.appendChild(imageNode)
    return function (src) {
        imageNode.src = src
    }
})()

let myImage_Proxy = (function () {
    let img = new Image

    img.onload = function () {
        myImage_optimze(this.src)
    }

    return function (src) {
        myImage_optimze('./img/cool-loading-gif-11.gif')
        img.src = src
    }
})()

// myImage_Proxy('https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9fdfd677eda940e8980aa1ad46d1f0b3~tplv-k3u1fbpfcp-zoom-1.image')