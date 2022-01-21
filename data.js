let BASE_URL = "https://icloud.aurine.cn/aurine-app/smartlive/pushsetting/%E4%B8%89%E6%98%9Fimg/"
let left_img_url = BASE_URL + 'left.png'
let right_img_url = BASE_URL + 'right.png'
let course_data = [
    {
        type: 1,//三星配置
        course_list: [
            {
                title: "三星内存优化配置(旧版)",
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "1-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "1-2.png" },
                { title: `3.切换到"自启动应用程序"`, src: BASE_URL + "1-3.png" }]
            },
            {
                title: "三星内存优化配置(新版)",
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "2-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "2-2.png" },
                { title: `3.点击到“选择要排除的应用程序”（如果没有点击右上角，选择"不检查的应用程程"）`, src: BASE_URL + "2-3.png" },
                { title: `4.点击到“添加应用程序”（有部分版本按钮名称是“添加”）"`, src: BASE_URL + "2-4.png" },
                { title: `5.选择应用并点击“添加”"`, src: BASE_URL + "2-5.png" }]
            }
        ]
    },
    {
        type: 2,//华为配置
        course_list: [
            {
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "1-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "1-2.png" },
                { title: `3.切换到"自启动应用程序"`, src: BASE_URL + "1-3.png" }]
            },
            {
                title: "华为内存优化配置(新版)",
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "2-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "2-2.png" },
                { title: `3.点击到“选择要排除的应用程序”（如果没有点击右上角，选择"不检查的应用程程"）`, src: BASE_URL + "2-3.png" },
                { title: `4.点击到“添加应用程序”（有部分版本按钮名称是“添加”）"`, src: BASE_URL + "2-4.png" },
                { title: `5.选择应用并点击“添加”"`, src: BASE_URL + "2-5.png" }]
            }
        ]
    },
    {
        type: 3,//小米配置
        course_list: [
            {
                title: "小米内存优化配置(旧版)",
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "1-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "1-2.png" },
                { title: `3.切换到"自启动应用程序"`, src: BASE_URL + "1-3.png" }]
            },
            {
                title: "小米内存优化配置(新版)",
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "2-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "2-2.png" },
                { title: `3.点击到“选择要排除的应用程序”（如果没有点击右上角，选择"不检查的应用程程"）`, src: BASE_URL + "2-3.png" },
                { title: `4.点击到“添加应用程序”（有部分版本按钮名称是“添加”）"`, src: BASE_URL + "2-4.png" },
                { title: `5.选择应用并点击“添加”"`, src: BASE_URL + "2-5.png" }]
            }
        ]
    }, {
        type: 4,//vivo配置
        course_list: [
            {
                title: "vivo内存优化配置(旧版)",
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "1-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "1-2.png" },
                { title: `3.切换到"自启动应用程序"`, src: BASE_URL + "1-3.png" }]
            },
            {
                title: "vivo内存优化配置(新版)",
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "2-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "2-2.png" },
                { title: `3.点击到“选择要排除的应用程序”（如果没有点击右上角，选择"不检查的应用程程"）`, src: BASE_URL + "2-3.png" },
                { title: `4.点击到“添加应用程序”（有部分版本按钮名称是“添加”）"`, src: BASE_URL + "2-4.png" },
                { title: `5.选择应用并点击“添加”"`, src: BASE_URL + "2-5.png" }]
            }
        ]
    }, {
        type: 5,//oppo配置
        course_list: [
            {
                title: "oppo内存优化配置(旧版)",
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "1-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "1-2.png" },
                { title: `3.切换到"自启动应用程序"`, src: BASE_URL + "1-3.png" }]
            },
            {
                title: "oppo内存优化配置(新版)",
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "2-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "2-2.png" },
                { title: `3.点击到“选择要排除的应用程序”（如果没有点击右上角，选择"不检查的应用程程"）`, src: BASE_URL + "2-3.png" },
                { title: `4.点击到“添加应用程序”（有部分版本按钮名称是“添加”）"`, src: BASE_URL + "2-4.png" },
                { title: `5.选择应用并点击“添加”"`, src: BASE_URL + "2-5.png" }]
            }
        ]
    }, {
        type: 6,//魅族配置
        course_list: [
            {
                title: "魅族内存优化配置(旧版)",
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "1-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "1-2.png" },
                { title: `3.切换到"自启动应用程序"`, src: BASE_URL + "1-3.png" }]
            },
            {
                title: "魅族内存优化配置(新版)",
                course: [{ title: `1.打开"智能管理器"`, src: BASE_URL + "2-1.png" },
                { title: `2.点击"内存"功能`, src: BASE_URL + "2-2.png" },
                { title: `3.点击到“选择要排除的应用程序”（如果没有点击右上角，选择"不检查的应用程程"）`, src: BASE_URL + "2-3.png" },
                { title: `4.点击到“添加应用程序”（有部分版本按钮名称是“添加”）"`, src: BASE_URL + "2-4.png" },
                { title: `5.选择应用并点击“添加”"`, src: BASE_URL + "2-5.png" }]
            }
        ]
    }
]
let LOGO_BASE_URL = "https://icloud.aurine.cn/aurine-app/smartlive/pushsetting/logo/"
let data = {//首页数据
    img_info: [{ url: LOGO_BASE_URL + "sanxin.png", title: '三星/Touchwiz/One UI', href: "./content.html?type=1" },
    { url: LOGO_BASE_URL + "huawei.png", title: '华为/荣耀/Magic/EMUI/HarmonyOS', href: "./content.html?type=2" },
    { url: LOGO_BASE_URL + "xiaomi.png", title: '小米/红米/MIUI', href: "./content.html?type=3" },
    { url: LOGO_BASE_URL + "vivo.png", title: 'Vivo/Funtouch OS', href: "./content.html?type=4" },
    { url: LOGO_BASE_URL + "oppo.png", title: 'OPPO/ColorOS', href: "./content.html?type=5" },
    { url: LOGO_BASE_URL + "meizu.png", title: '魅族/Flyme', href: "./content.html?type=6" },]
}