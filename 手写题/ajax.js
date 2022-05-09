function getData(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) { //服务器正常返回响应时
                resolve(JSON.parse(this.responseText));
            } else {
                reject(new Error(this.responseText));
            }
        }
        xhr.onerror = function() { //当网络错误时
            reject(new Error(this.statusText));
        }
        xhr.send();
    })
}
// getData("get", "http://zhouzhixiang.com/api/swiper/getAllSwiper").then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })