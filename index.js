window.onload = function () {
    const top_left = document.getElementsByClassName('top-left')[0]
    bind(top_left, 'click', function () { window.history.back() })
    var script = document.createElement('script')
    script.setAttribute('src', './data.js');//设置js地址
    document.body.appendChild(script)
    script.onload = function () {
        addImg(data.img_info)
    }
}


function addImg(data) {
    let content = document.getElementsByClassName('content')[0]
    for (let key in data) {
        let img_box = document.createElement('a')
        img_box.setAttribute('href', data[key].href)
        img_box.setAttribute('target', '_self')
        img_box.setAttribute('class', 'img-box')
        let content_img = document.createElement('img')
        content_img.setAttribute('class', 'content-img')
        content_img.setAttribute('src', data[key].url)
        let title = document.createElement('div')
        title.setAttribute('class', 'title')
        title.innerHTML = data[key].title
        img_box.appendChild(content_img)
        img_box.appendChild(title)
        content.appendChild(img_box)
    }
}
function bind(node, type, callback) {
    node.addEventListener(type, callback)
}