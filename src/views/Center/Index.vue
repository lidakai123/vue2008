<template>
    <div class="center-view">
        <div
            class="avatar"
            data-enter-time="1608645908"
            data-click-fun="track_f_737069"
        >

            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAQlBMVEXt7e3v7+/r6+v7+/v9/f309PT8/Pzq6ur////+/v729vbu7u7x8fH5+fnz8/P6+vr4+Pjs7Ozy8vL19fXw8PD39/c1tMDaAAAD/0lEQVR42u2a6ZKkKhCFARFZFBf0/V91eubebhGxSjKTmIoJz88uw/4kMw9LwtijR48ePXr06NGjR48ePfpH5XrfBrttNrTLevnUGkZljBpaXgGht6PUscxoF5d5rtkfGVZaBj8YnZNRNvnk6fi7pWNYpzzD96As+6O8SX8eqIIx6neS39/M1flHEo71PcQfEH9FoTU+Lm4z+qaa9YJCG2yeLlLfl5nUxS/IsGyaSBj/OCc9WC0iNzMBUVvbOzaL+ctO203dxoBHpT9RDAvrjmLLcA9DgSmSCjHt3OU0t3dKyUAjcny58aK7kvCmFgY/RsTO3SvNtlJQDsknefdO/I2/jCCKwyTZsO692OviDhCKNn7DJLo7EtMrDIib8zjl2u6u2hfTDWQwRhDFK44ess6KI9KV6CouE2QwoqRvRBGGaOhCEqJKzdQI/1oXGyNHm6tilqtbxZGDwc+GGRmKytg7p6KI8sym/ySd7cxy4rA0FJF/mvm9M5xMZTYkFP3+Bp/8g+zqQqWB8RQUkY0bcacKTsUkDAEFM1fG9bO+GXonBOt/NnHjtYlJKMWyv+M42uFnqvwpziGfyTN2Xv3SnujD8eX/10jIfLfsLsYNvOaKpuslhxFy468SjAU3sf7eo+2pkRjon6BsWZdIZz+G3hfs5Zp+YhekDGf39k3jT39U2H3BnuVbB9cWTUrIzWKLwIhKFoaxJ3mPwOixOboXikNguB1jQc5rDIERlYpnuLWGQGAIbMWafwljxmLIz8iND6mU8TN8Y6B2UY5cAtLMKdqBMML1DFsghZ3aoqgyikKBHgCaq9VXgRbk6cqhYgcwxoA7UEhOp2e8hxoHxPAaXbIt8kQhWRMb2LQS79qgqXE4A/QgjGg8DbxvEKW5gWRHvKMHb9qOpywWgBGfb3gERvweXkzBCY7r0yTNnn29NlBJ1uizmuYkUDoUhpM056KB4RQ0xSmxYlgpTXBm7tEYx/4WrINA0RC3GttPQeZnpocA6S6ZnoIibbUV99qo7mwsafuzqPM4MiqdXl3Qh6WjyHDc7kpTUjCW7Tb/16MXQlz36BtGK3/7AslhLBwxRuaywHttjF5uLIQwnlWRLQqMWlklrfdvtJjAKsrfzJDJsbqa7lz76itDMH5rOEJtCvVXi+S7aO9eZzI1w+IKKmWth1FyA03yWhRlNtpUqtmhdF77CArghREC26o/w8JuaVLbmAVRUNtYgF4NJbWxFn5FVdLZGGwd+r36obKPBUNBtjhHUhDZWI+lILGxFU9BsJlepaZQi6PgNBTaLCgKpYmEsTFHRoFZBTm66/4YGyOlANvYqIkFsrFBk2v6CAqAjU26igptbKtDUWhjVtfS1WbuF/MY5z0qnakpAAAAAElFTkSuQmCC"
                class="avator-icon"
                v-if="!userInfo.userId"
            />
            <img class="e" v-if="userInfo.userId" src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1097203653,2817737781&fm=26&gp=0.jpg" alt="">
            <div  class="nick-name" v-if="!userInfo.userId" @click="gotoLogin">
                立即登录
            </div>
            <div  class="nick-name" v-if="userInfo.userId">
                <span class="d">已登录</span>
            </div>
        </div>
        <ul class="my-order-tab">
            <li data-enter-time="1608645908" data-click-fun="track_f_192924">
               <span class="a">0.00元</span>
                <span
                    class="mint-badge is-primary is-size-small"
                    style="display: none;"
                    >99+
                </span>
                <div class="common-p">我的余额</div>
            </li>




            <li data-enter-time="1608645908" data-click-fun="track_f_192924">
                        <span class="b">0个</span>
                        <span
                            class="mint-badge is-primary is-size-small"
                            style="display: none;"
                            >99+
                        </span>
                        <div class="common-p">我的优惠</div>
                    </li>



            <li data-enter-time="1608645908" data-click-fun="track_f_128457">
                   <span class="c">0分</span>
                <div class="common-p">我的积分</div>
            </li>
        </ul>
        <!---->
        <div
            class="margin-set my-card"
            data-enter-time="1608645908"
            data-click-fun="track_f_299313"
        >
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAIVBMVEVHcEz/iGT/hWL/hGL/hWL/hGL/hGL/hGP/hWP/jGn/hGISk7EWAAAACnRSTlMAHOamtu21p7QdUXNikQAAAFtJREFUKM9jYKAFENdahQIWGTIwMEatQgNLBRiYlwig6mT0MmBgWohu3iwFBq4F6IJAEZoIrsIAuATp5qTBI8i2atUybIIraGU7ZmKQUsCebLAmMMykWEiTFA8AIQBrdTyC6ekAAAAASUVORK5CYII="
                width="20px"
                height="20px"
                alt=""
            />
            <span class="label">我的订单</span>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                alt=""
                class="arrow"
            />
        </div>
        <div
            class="margin-set my-card"
            data-enter-time="1608645908"
            data-click-fun="track_f_433177"
        >
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAclBMVEVHcEy6onu6onq7ony6onu6onq7o3q/o3+7onq6onu6onq6onq6onq6onq7o3q6o33////Bo3rUqn+6o3q6onq6onq6o3q6o3u/pHq9o3z/qqq7pX3Gqo27onq6o3q/p3+9pHu6o3q6onr49fHOvaH////RwCj0AAAAInRSTlMAttxxne1iHKbmksH443VDARkG6avv9J8wJwM5CdzvIB+3XPrbDQAAAMhJREFUOMvt1MkOgkAQBNAGZJV939UC/v8XRSEwA0Iw8WJCnZrMSwaKpIm+iqrp2IiuqYyTsRN5lhoEdfMyAdr0oEPdeS3o0wx429ADGCjet9xN5CCs7LPLLHDwiiCdq5orSYP+iIXlA1HBVDVWUkQQSg6SHyJ2hqrapmmHSpwYoU88pDyBaSuKUqPpugZ1P9omkpyWkFxj/BNvOMRwaQ2JpEufari6es0Se7oY+Y/Zg3w9e3CVE57w3+HhbXZ4Px7euId3+E/zBNmqKziBGBK3AAAAAElFTkSuQmCC"
                width="20px"
                height="20px"
                alt=""
            />
            <span class="label">积分商城</span>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                alt=""
                class="arrow"
            />
        </div>
        <div
            class="margin-set system-set"
            data-enter-time="1608645908"
            data-click-fun="track_f_628036"
        >
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAB+FBMVEVHcEy5zVK5zFHBzFG4y1DE12K4y1D//3+5y1G4y1C4y1C4y1D//1W71lC4y1DMzGa4zFC4y1C4y1C7zFW8zFG4zFC4zVG4y1C5zVK4zlO5y1C5y1DMzGa5y1G5y1C4y1G5zFC7zlK4y1C4y1C4y1C5zFG4zFG5y1C4y1C4y1C4y1C4zFC4zFC7zVC7zFW4y1C5y1C7y1C4zFG4zFK4y1C5zFC5y1C4y1C4zFC4zVC5zFC4y1G/1FW4zFG80li50Fy5zVDD0lq4zFC5y1C/z1e5y1DI2lvG4lW4y1C4zFC50FG4zlHCzlX///+6zFG4zFG5zVC9zFC9zVK4zFG/1FW4zVK5y1C401e4zFC5zFC6zFK4y1G5zFC//3+4y1C4zFK4zVW4y1C4y1C4y1G6zVi5zFG5zFC4zFC4y1G4zFK5zFK4zFC4zFC7zlG4zFC4y1G9z1O4y1C4zFC4y1C4zVK5zFDa2m28zlW5y1C4zFC4y1C4zFC70lK70FC4y1C6y1C4y1C5y1C4zFC41FW4y1C4zFC4y1C4y1C4y1C4zFC/0VG5y1C5zFC4zFG4y1G4y1G4y1C6zFC6zVC4y1C4zFG4y1C50FW4y1G5y1G5zVG4y1G6y1K6zFG5zFG4zFC5y1G6zFC5y1G5y1C5y1K/31+5zFC4y1C4y1CSREpgAAAAp3RSTlMATUIZwg3zAoHg/s8DE4UF8O78HjL6Yd4+OuLQCoDFd4hE/fH4faae9+rBzfU5D/t8T3RB04yZx2lioakYqhcLXBF/7SCoDgny6ywvFQFV3GYjH3AMV7cdm3VH7F8EylAk45S2GoSSkaNzYJzINYmGK+TSe1PXByqLePS1Iia8WfmPvxK9xN+fsY4cpL6N2ZA2VimysK4hrVRYXko4h7Szb2fMdgily0s2q2oAAAJESURBVDjLnZVVd9tAEEbHMVMMsQMOMzNTk4aZqczMzMzMzHj/Zh8MklK5Pqd6mu/bu5rdmdGRyP88geY003BUXCy+FAdrvAlQOhlWa+wUdAd0sK5O8D6ZquJliohIvp3pMuisWc3l91N2YkgkaRT/9Za9pyDH3ZU3QtohLdfu5/hRERFJuVMEcCzXJSIDBwnu14CtdJyOxu78md5qVzj2HKBVA+4hV/+GuezW6Aby9ME8GjR6F9n6YB/JGp3DFn2wnhy1TMeXpQ9m+UhX1FyI4nhtrSM0Fwk9qeWYXNEFs81psTht5qh2VVCe6hER91IVfI75SXYAsCfFdn6BqiW3fMNRuWiNcQ5MBqPRYMIRI62LlQ5mZIWvyoHMdpKtIiLWZOxmxZ9nRb6ToRg2TJGXW03YFD+D3xJiWTEyMURDA07FXyYkFhYUw4IxGhqxKP4CFgniSQz+pEzKmUicepZpeczzxJdJp0Je8CxRecY/VfBL+mg6t1b+UfD7DwF+yNMgFKZK3BYG+hm9N/XRJeKu3wF1SnZbpnoobtzmrpJwY61jfZwpu8YtVflkHU363LCPMbXetE3dcVE3uVJrbGdeF3xHidbYx1ld8C1vtIZN3QfVM0bapMa4TLsu6Erjg8a4wPlI0Xdmb97gdTZvDav3I6u+z55SKFkjIm1F4c4UZFtFJgahZGhVkiuFXO0IHIHBRndNdYufB+OlRRT2/n2c2W4/EDwZGSwvUPDqte7JUw77aIsNbq330UDc30LWGdW2Hs3SH1zVp5KSEJ1eAAAAAElFTkSuQmCC"
                width="20px"
                height="20px"
                alt=""
            />
            <span class="label">设置</span>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                alt=""
                class="arrow"
            />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        // 去登录页面
        gotoLogin() {
            this.$router.push("/login");
        },
    },
    data() {
        return {
            userInfo: {},
        };
    },
    created() {
        // 获取用户的信息
        // 判断是否存在jwt
        let jwt = this.$store.state.global._token;
        if (jwt) {
            // 发请求
            this.$http
                .get("http://127.0.0.1:2004/backend/get_user_info")
                .then((ret) => (this.userInfo = ret.data));
        }
    },
};
</script>

<style lang="scss" scoped>
.center-view {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    background: #f4f4f4;
    margin-bottom: 59px;
}
.center-view .avatar {
    text-align: center;
    margin-top: -44px;
    height: 135px;
    padding-left: 22px;
    padding-top: 64px;
   background-color: green;
    background-size: cover;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
}
.center-view .avatar .avator-icon {
    width: 63px;
    height: 63px;
    border-radius: 35px;
    margin-right: 20px;
    border: 2px solid #fff;
}
.center-view .avatar .nick-name {
    font-size: 16px;
}
.center-view .my-order-tab {
    width: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding: 0;
    height: 79px;
    background: #fff;
    margin-bottom: 10px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.center-view .my-order-tab li {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    list-style: none;
}
.center-view .my-card {
    position: relative;
}
.center-view .margin-set {
    background: #fff;
    padding: 0 15px;
    height: 49px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.center-view .margin-set .label {
    margin-left: 15px;
    color: #191a1b;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.center-view .margin-set .arrow {
    text-align: right;
    width: 6px;
    height: 10px;
}
.center-view .my-balance .value,
.center-view .my-card .value {
    text-align: right;
    color: #797d82;
    padding-right: 14px;
}
.a{
    font-size: 25px;
    color:yellowgreen;
}
.b{
    font-size: 25px;
    color:red;
}
.c{
    font-size: 25px;
    color:blue;
}
.e{
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.d{
    font-size: 20px;
}
</style>
