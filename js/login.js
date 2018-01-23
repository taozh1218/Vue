var app = new Vue({

    el: '#app',
    data: {
        account: '',
        psw: ''
    },
    methods: {
        login: function () {
            alert('账号:' + app.account + ',密码:' + app.psw);
        }
    }
});

/**
 var app = new Vue().$mount('#app');

 var account = new Vue({
    el: '#account',
    data: {
        account: ''
    }
});
 var psw = new Vue({
    el: '#psw',
    data: {
        psw: ''
    }
});

 var btn_login = new Vue({
    el: '#btn_login',
    methods: {
        login: function () {
            alert('账户：' + account.account + '密码:' + psw.psw);
        }
    }

});
 */