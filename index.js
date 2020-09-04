var app = new Vue({
    el: '#app',
    data: {
        message: 'Yay it works!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleDateString()
    }
})