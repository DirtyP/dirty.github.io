window.onload = function () {
    const top_left = document.getElementsByClassName('top-left')[0]
    bind(top_left, 'click', function () { window.history.back() })
    var script = document.createElement('script')
    script.setAttribute('src', './data.js');//设置js地址
    document.body.appendChild(script)
    script.onload = function () {
        let course_list = []
        var type = parseInt(window.location.href.split("?")[1].split("=")[1]) //split分割成两个数组split("?")[1]取后面的
        console.log(typeof type)
        for (let key in course_data) {
            console.log(course_data[key].type)
            if (course_data[key].type === type) {
                course_list = course_data[key].course_list
            }
        }
        addCourse(course_list, left_img_url, right_img_url)//配置每一层的教程和左右图片
        init()//初始化,显示第一张
        btn_click()//左右按钮点击事件
        let course_img = document.getElementsByClassName('course-img')[0]
        course_img.onload = function () {
            let index = document.getElementsByClassName('index')
            let left = document.getElementsByClassName('left')
            let right = document.getElementsByClassName('right')
            for (let i = 0; i < left.length; i++) {
                left[i].style.height = course_img.offsetHeight / 0.8 + 'px'
                right[i].style.height = course_img.offsetHeight / 0.8 + 'px'
                if (course_img.offsetHeight > 525) {
                    index[i].style.height = 30 / (525 / course_img.offsetHeight) + 'px'
                }
            }
            // console.log(course_img.offsetHeight)
        }
    }
}
function addCourse(data, left_img_url, right_img_url) {//配置每一层的教程和左右图片
    let content_box = document.getElementsByClassName('content-box')[0]
    for (let key in data) {
        let content = document.createElement('div')
        content.setAttribute('class', "content")

        let left = document.createElement('div')
        left.setAttribute('class', 'left')
        let left_img = document.createElement('img')
        left_img.setAttribute('class', 'arrow go-left')
        left_img.setAttribute('src', left_img_url)
        left.appendChild(left_img)

        let right = document.createElement('div')
        right.setAttribute('class', 'right')
        let right_img = document.createElement('img')
        right_img.setAttribute('class', 'arrow go-right')
        right_img.setAttribute('src', right_img_url)
        right.appendChild(right_img)

        let index = document.createElement('div')
        index.setAttribute('class', 'index')

        let center = document.createElement('div')
        center.setAttribute('class', 'center')
        let title = document.createElement('div')
        title.setAttribute('class', 'title')
        title.innerHTML = data[key].title
        let course = document.createElement('div')
        course.setAttribute('class', 'course')
        for (let i in data[key].course) {
            let index_item = document.createElement('div')
            index_item.setAttribute('class', 'index-item')
            index_item.innerHTML = (parseInt(i) + 1)
            index.appendChild(index_item)

            let course_title = document.createElement('div')
            course_title.setAttribute('class', 'course-title')
            course_title.innerHTML = data[key].course[i].title
            let course_img = document.createElement('img')
            course_img.setAttribute('class', 'course-img')
            course_img.setAttribute('src', data[key].course[i].src)
            course.appendChild(course_title)
            course.appendChild(course_img)
        }
        center.appendChild(title)
        center.appendChild(course)
        content.appendChild(left)
        content.appendChild(center)
        content.appendChild(right)
        content.appendChild(index)
        content_box.appendChild(content)
    }
}

function init() {//初始化,显示第一张
    let course = document.getElementsByClassName('course')
    for (let i = 0; i < course.length; i++) {
        course[i].index = 0
        course[i].getElementsByClassName('course-title')[0].className += ' show'
        course[i].getElementsByClassName('course-img')[0].className += ' show'
        let index_item = course[i].parentElement.parentElement.getElementsByClassName('index')[0].getElementsByClassName('index-item')[0]
        index_item.className += ' checked'
    }
}

function btn_click() {//左右按钮点击事件
    let go_left = document.getElementsByClassName('go-left')
    let go_right = document.getElementsByClassName('go-right')
    for (let i = 0; i < go_left.length; i++) {
        bind(go_left[i], 'click', function () {
            let course = go_left[i].parentElement.parentElement.getElementsByClassName('center')[0].getElementsByClassName('course')[0]
            let course_title = course.getElementsByClassName('course-title')
            let course_img = course.getElementsByClassName('course-img')
            let index_item = go_left[i].parentElement.parentElement.getElementsByClassName('index')[0].getElementsByClassName('index-item')
            if (course.index === 0) {
                return
            }
            else {
                for (let j = 0; j < course_title.length; j++) {
                    course_title[j].className = 'course-title hidden'
                    course_img[j].className = 'course-img hidden'
                    index_item[j].className = 'index-item no-checked'
                }
                course.index--
                course_title[course.index].className += ' show'
                course_img[course.index].className += ' show'
                index_item[course.index].className += ' checked'
            }
        })
    }
    for (let i = 0; i < go_right.length; i++) {
        bind(go_right[i], 'click', function () {
            let course = go_right[i].parentElement.parentElement.getElementsByClassName('center')[0].getElementsByClassName('course')[0]
            let course_title = course.getElementsByClassName('course-title')
            let course_img = course.getElementsByClassName('course-img')
            let index_item = go_right[i].parentElement.parentElement.getElementsByClassName('index')[0].getElementsByClassName('index-item')
            if (course.index === course_img.length - 1) {
                return
            }
            else {
                for (let j = 0; j < course_title.length; j++) {
                    course_title[j].className = 'course-title hidden'
                    course_img[j].className = 'course-img hidden'
                    index_item[j].className = 'index-item no-checked'
                }
                course.index++
                course_title[course.index].className += ' show'
                course_img[course.index].className += ' show'
                index_item[course.index].className += ' checked'
            }
        })
    }
}
function bind(node, type, callback) {
    node.addEventListener(type, callback)
}