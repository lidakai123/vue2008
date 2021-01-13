<template>
    <div>
        <div class="logo">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.res.jmbbs.com%2Fattachment%2Fforum%2F201906%2F24%2F135227gz22kwp1rp12zcc2.jpg&refer=http%3A%2F%2Fimg.res.jmbbs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612937295&t=782ec0f2b05c65bf906bcab773ec8b22" />
        </div>
        <div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="mobile"
                    name="mobile"
                    label="手机号"
                    placeholder="手机号"
                    :rules="[{ pattern, message: '请填写正确的手机号' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button square block type="info" native-type="submit"
                        >提交</van-button
                    >
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { Form, Field, Button, Toast } from "vant";
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
export default {
    data() {
        return {
            mobile: "",
            password: "",
            pattern: /^1[3-9]\d{9}$/,
        };
    },
     methods: {
        onSubmit(values) {
            this.$http
                .post("http://127.0.0.1:2004/backend/login", values)
                .then((ret) => {
                    if (ret.error_code == 0) {
                        Toast.success("登录成功！");
                        // 跳转
                        // 判断是否有回调地址
                        if (this.$route.query.callback) {
                            this.$router.push(this.$route.query.callback);
                        } else {
                            this.$router.push("/center");
                        }
                    } else {
                        Toast.fail("登录失败！");
                    }
                });
        },
    },
};
</script>

<style lang="scss" scoped>
.logo {
    margin-top: 150px;
    margin-bottom: 100px;
    text-align: center;
}
img{
    width: 200px;
    height: 150px;
}
</style>
