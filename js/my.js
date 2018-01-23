import Axios from 'axios'

export default {
    name: '',
    data() {
        return {
            formName: {//表单中的参数
                user: '',
                userError: '',
                password: '',
                passwordError: '',
                beDisabled: true
            },
            beShow: false//传值给父组件
        }
    },
    /*props:[
            'fromParent'
    ],*/
    methods: {
        resetForm: function () {
            this.formName.user = '';
            this.formName.userError = '';
            this.formName.password = '';
            this.formName.passwordError = '';
        },
        submitForm: function (formName) {
            //与父组件通信传值
            //this.$emit('showState', [this.beShow,this.formName.user])
            //提交user password
            var user = this.formName.user,
                password = this.formName.password;
            console.log(user, password)
            Axios.get('../../src/php/login.php?user=' + user + '&password=' + password)
                .then(function (res) {
                    console.log(res)

                })
                .catch(function () {

                })
        },
        inputBlur: function (errorItem, inputContent) {
            if (errorItem === 'user') {
                if (inputContent === '') {
                    this.formName.userError = '用户名不能为空'
                } else {
                    this.formName.userError = '';
                }
            } else if (errorItem === 'password') {
                if (inputContent === '') {
                    this.formName.passwordError = '密码不能为空'
                } else {
                    this.formName.passwordError = '';
                }
            }
            //对于按钮的状态进行修改
            if (this.formName.user != '' && this.formName.password != '') {
                this.formName.beDisabled = false;
            } else {
                this.formName.beDisabled = true;
            }
        }
    }
}