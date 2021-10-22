<template>
    <div class="page flex-col" v-if="groupProduct">
        <div class="group1 flex-col">
            <div class="main1 flex-col">
                <div class="main2 flex-col" :style="{background:getChooseImg,backgroundSize:'contain',backgroundPosition:'center center'}">
                    <div class="outer1 flex-col">
                        <div class="bd2 flex-col">
                            <div class="box1 flex-row">
                                <div class="group2 flex-col" @click="gotoDownLoad">
                                </div>
                                <div class="group4 flex-col" @click="gotoDownLoad">
                                </div>
                            </div>
                        </div>

                    </div>
                    <span class="word5">{{choosePng}}/{{bannerUrl.length}}</span>
                </div>
            </div>
            <div class="section7y flex-col" v-if="group.length > 0">
                <div class="outer9y flex-col">
                    <div class="section8y flex-row">
                        <span class="info5y">拼团列表</span>
                        <span class="word12y" @click="gotoDownLoad">查看更多</span>
                        <div class="layer1y flex-col" @click="gotoDownLoad"><div class="group3y flex-col"></div></div>
                    </div>
                    <div class="section9y flex-col" v-for="(item,index) in group" :key="item.id" style="margin-top: 24px;display: flex;flex-direction: column;justify-content: space-between">
                        <div class="outer10y flex-row">
                            <div style="margin-left: 15px"></div>
                            <img v-for="(item,index) in users[index].avatar"
                                 width="40px"
                                 height="40px"
                                 :src="item"
                                 :key="item"
                                    class="img1y"
                                    referrerpolicy="no-referrer"
                                 style="margin-left: -15px"
                                 :style="{zIndex: 400 - index}"
                            />
                            <div class="layer2y flex-col" style="margin-right: auto;margin-left: 30px">
                                <span class="info6" style="margin-left: 0px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{users[index].names}}</span>
                                <span class="info7" v-if="!countdown2[index].flag">已结束</span>
                                <span class="info7" v-else>剩余{{countdown2[index].hour}}:{{countdown2[index].min}}:{{countdown2[index].sec}}</span>
                            </div>
                            <div v-if="countdown2[index].flag" class="layer3y flex-col" @click="gotoDownLoad">
                            </div>
                            <div v-else style="margin-top: 10px;color: rgba(143, 201, 255, 1);">
                                已结束
                            </div>
                            
                        </div>
                        <div class="section10y flex-col" v-if="index !== group.length -1">
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="main3 flex-col" v-if="review.length > 0" :class="{marginTop:group.length <= 0}">
                <div class="main4 flex-col" style="padding-top: 14px;padding-bottom: 14px">
                    <div class="mod4 flex-row">
                        <span class="txt2">新品上市</span>
                        <span class="word6" @click="gotoDownLoad">查看更多</span>
                        <div class="outer7 flex-col" @click="gotoDownLoad">
                            <div class="outer8 flex-col"></div>
                        </div>
                    </div>
                    <div v-for="(item, index) in review" :key="item.id">
                        <div class="mod5 flex-row" style="display: flex;justify-content: flex-start">
                            <div class="box3 flex-col" :style="{background:getAvatar(item),backgroundSize:'cover',backgroundPosition:'center center'}"></div>
                            <span class="info4">{{item.uname}}</span>
                            <div style="margin-left: 5px" v-for="n in item.score" :key="n" class="box4 flex-col"><div class="outer9 flex-col"></div></div>
                            <div style="margin-left: 5px" v-for="n in (5-item.score)" :key="n" class="box4 flex-col"><div class="wtf1 flex-col"></div></div>
                            <span class="word7" style="margin-left: auto">{{$date(item.createAt, 'YYYY-MM-DD')}}</span>
                        </div>
                        <span class="txt4" style="margin-left: 10px;margin-top: 10px">
                            {{item.content}}
                        </span>
                        <div v-if="getImgs(item).length === 1 && getImgs(item)[0] === ''" style="display: flex;flex-direction: row;margin-left: 10px;flex-wrap: wrap;margin-top: 5px">
                        </div>
                        <div v-else-if="getImgs(item).length === 1" style="display: flex;flex-direction: row;margin-left: 10px;flex-wrap: wrap;margin-top: 5px">
                            <img :src="getImgs(item)[0]" width="200px" height="200px">
                        </div>
                        <div v-else style="display: flex;flex-direction: row;margin-left: 10px;flex-wrap: wrap;margin-top: 5px">
                            <div v-for="item in getImgs(item)" :key="item">
                                <img style="margin-right: 10px" :src="item" width="75px" height="75px">
                            </div>
                        </div>
                        <div v-if="index !== review.length-1" class="mod6 flex-col"><div class="main6 flex-col"></div></div>
                    </div>
                </div>
            </div>
            <div class="main8 flex-col" :class="{marginTop:review.length <= 0 && group.length <= 0}">
                <div class="section6 flex-col">
                    <div class="layer4 flex-row">
                        <span class="txt7">规格</span>
                        <span class="info5"></span>
                    </div>
                    <div class="layer5 flex-col" v-for="(item,index) in getSpec" :key="item.id">
                        <div class="box12 flex-row">
                            <span class="txt8">{{item.specKey}}</span>
                            <span class="info6">{{item.specValue}}</span>
                        </div>
                        <div class="layer10 flex-col" v-if="product && product.specs.length > 5 && index === product.specs.length -1">
                            <div class="group13 flex-col"></div>
                        </div>
                    </div>
                    <div class="txt11" @click="openFlag = true" v-if="product && product.specs.length > 5 && !openFlag" style="display: flex;flex-direction: row;justify-content: space-between">
                        <div>点击展开</div>
                        <div style="margin-top: 6px" class="main10 flex-col"></div>
                    </div>
                </div>
            </div>
            <div class="main11 flex-col" style="background: #FFFFFF;padding-top: 10px;padding-left: 10px;padding-right: 10px;padding-bottom: 56px;">
                <span class="info9">商品详情</span>
                <span class="txt12"></span>
                <span class="word14">
                <div v-html="onShow">
                </div>
                </span>
            </div>
            <div class="wrap10yy flex-col" @click="gotoDownLoad">
                <div class="group4yy flex-col">
                    <div class="block4yy flex-col"></div>
                    <div class="block5yy flex-row">
                        <div class="mod7yy flex-col">
                            <div class="wrap11yy flex-col">
                                <div class="section15yy flex-col"></div>
                            </div>
                            <span class="txt8yy">收藏</span>
                        </div>
                        <div v-if="flag === 0" class="mod8yy flex-col">
                            <div class="main2yy flex-row">
                                <span class="word19yy">{{day}}<span class="wwwcc">天</span></span>
                                <span class="word20yy">{{hour}}<span class="wwwcc">时</span></span>
                                <span class="word21yy">{{min}}<span class="wwwcc">分</span></span>
                                <span class="txt9yy">{{sec}}<span class="wwwcc">秒</span></span>
                            </div>
                        </div>
                        <img
                                v-if="flag === 1"
                                class="img4"
                                style="margin-left: auto;margin-right: 10px;height: 40px"
                                referrerpolicy="no-referrer"
                                src="../share1/img/startGroup.png"
                        />
                        <img
                                v-if="flag === -1"
                                style="margin-left: auto;margin-right: 10px;height: 40px"
                                src="../share1/img/over.png"
                        />
                    </div>
                </div>
            </div>
        </div> 
        <div class="group16 flex-col">
            <div class="outer17 flex-row">
                <span class="txt16" style="color: #AF7DFF">￥</span>
                <span class="info10">{{groupProduct.product.groupPrice}}</span>
                <span class="wtf2" style="color: #AF7DFF ">原价：</span>
                <span class="wtf3" style="color: #AF7DFF ">¥{{groupProduct.product.originPrice}}</span>
                <span class="wtf4">
                    <span class="state" v-if="flag === 1">售出: {{groupProduct.product.soldNum}}</span>
                    <span class="state" v-if="flag === 0">待开始</span>
                    <span class="state" v-if="flag === -1">已结束</span>
                </span>
            </div>
        </div>
        <div class="group17 flex-col">
            <div class="outer18 flex-col">
        <span class="word17">
          {{ groupProduct.product.productName }}
        </span>
                <div class="box13 flex-row" style="display: flex;justify-content: flex-start">
                    <div class="outer19 flex-col" v-for="item in product.tags" :key="item.id"><span class="word18">{{ item.name }}</span></div>
                    <img @click="gotoDownLoad"
                         class="icon3"
                         referrerpolicy="no-referrer"
                         src="../share1/img/tucao.png"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {getGroupProduct} from "../../api";

    export default {
        data() {
            return {
                groupId: null,
                product: null,
                groupProduct: null,
                group: [],
                review: [],
                openFlag: false,
                choosePng: 1,
                flag: 0,  // -1结束  0未开始 1进行中
                now: NaN,
                androidUrl: 'http://apptest.xiaohuodui.cn/fenghe4android',
                iosUrl: 'http://apptest.xiaohuodui.cn/fenghe4ios',
                downLoadUrl: 'http://apptest.xiaohuodui.cn/fenghe4android'
            };
        },
        created() {
            console.log(this.$route.query.id)
            this.groupId = this.$route.query.id
            const update = () => {
                // 也是循环调用自身,这次会在一开始就更新this.now
                this.now = Date.now();
                // requestAnimationFrame接受一个参数，这个参数是一个函数
                // 因为在update里调用requestAnimationFrame(update)，相当于设定下次屏幕刷新前执行一下update
                // 那么下次执行update的时候，又会设置下一帧要调用update
                //更新的事件由API把握
                //requestAnimationFrame在下次屏幕刷新前,所以不同的显示器，刷新率不一样，调用的次数也不同,但是，能保证，每次重绘的时候总是最新的时间
                requestAnimationFrame(update);
            };
            update();
            this.init()
        },
        computed:{
            bannerUrl(){
                let imgs = []
                if (this.product && this.product.bannerUrls) {
                    imgs = this.product.bannerUrls.split(',')
                }
                return imgs
            },
            getChooseImg(){
                let img = ''
                if(this.product && this.product.bannerUrls){
                    let url = this.bannerUrl[this.choosePng - 1]
                    img = `url(` + url + `)100% no-repeat`
                }
                return img
            },
            onShow() {
                const regex = new RegExp('<img', 'gi');
                return this.product.text.replace(regex, `<img style="max-width: 100%;"`);
            },
            //剩余的毫秒数
            countdown() {
                //倒计时不会小于0，也就是说countdown最小值是0
                let startTime = this.now
                if (this.groupProduct) {
                    startTime = this.groupProduct.product.startTime
                }
                const time = Math.max(0, startTime - this.now)
                return time
            },
            //剩余的毫秒数
            countdown2() {
                //倒计时不会小于0，也就是说countdown最小值是0
                let time = []
                if (this.group) {
                    for (let i in this.group){
                        let count = Math.max(0, this.group[i].endTime - this.now)
                        if (count > 0) {
                            let flag = true
                            let hour = String.prototype.padStart.call(
                                (count / 3.6e6) | 0,
                                2,
                                "0"
                            )
                            let min =  String.prototype.padStart.call(
                                    ((count % 3.6e6) / 6e4) | 0,
                                    2,
                                    "0"
                                )
                            let sec = String.prototype.padStart.call(
                                ((count % 6e4) / 1e3) | 0,
                                2,
                                "0"
                            )
                            time.push({
                                flag: flag,
                                hour: hour,
                                min: min,
                                sec: sec
                            })
                        }else{
                            let flag = false
                            time.push({
                                flag: flag
                            })
                        }
                    }
                }
                return time
            },
            day(){
                //padStart是用于补位
                return String.prototype.padStart.call(
                    (this.countdown / 8.64e7) | 0,
                    2,
                    "0"
                )
            },
            hour(){
                return String.prototype.padStart.call(
                    (this.countdown % 8.64e7) / 3.6e6 | 0,
                    2,
                    "0"
                );
            },
            min(){
                return String.prototype.padStart.call(
                    ((this.countdown % 3.6e6) / 6e4) | 0,
                    2,
                    "0"
                )
            },
            sec(){
                return String.prototype.padStart.call(
                    ((this.countdown % 6e4) / 1e3) | 0,
                    2,
                    "0"
                )
            },
            getSpec(){
                let specs = []
                if (this.product) {
                    if (this.openFlag) {
                        specs = this.product.specs
                    }else{
                        specs = this.product.specs.filter((item,index) => index < 5)
                    }
                }
                console.log(specs)
                return specs
            },
            users(){
                let users = []
                console.log(this.group)
                if (this.group) {
                    for (let i in this.group) {
                        let vo = this.group[i].groupBuyRecordVOList
                        let names = ''
                        let avatar = []
                        for (let j in vo) {
                            if (j === (vo.length-1+'')) {
                                names += vo[j].user.nickname
                            }else{
                                names = vo[j].user.nickname + '、';
                            }
                            avatar.push(vo[j].user.avatar)
                        }
                        users.push({
                            names: names,
                            avatar: avatar
                        })
                    }
                }
                console.log(users)
                return users;
            }
        },
        watch: {
            countdown(countdown) {
                if (countdown === 0) {
                    this.flag = 1
                }
            },
            countdown2(time){
                
            }
        },
        methods: {
            init(){
                getGroupProduct({id: this.groupId})
                    .then(res => {
                        this.product = res.data.product
                        this.review = res.data.review
                        this.groupProduct = res.data.groupProduct
                        this.group = res.data.group
                        if (this.groupProduct.product.status === 0) {
                            this.flag = 0
                        }else if (this.groupProduct.product.status === 1){
                            this.flag = 1
                        }else{
                            this.flag = -1
                        }
                        if(this.groupProduct.product.endTime < Date.now()){
                            this.flag = -1;
                        }
                        if (res.data.androidUrl != null) {
                            this.androidUrl = res.data.androidUrl
                        }
                        if (res.data.iosUrl != null) {
                            this.iosUrl = res.data.iosUrl
                        }
                        console.log('product', this.product)
                        console.log('groupProduct', this.groupProduct)
                        console.log('group', this.group)
                        console.log('review', this.review)
                    })
            },
            gotoDownLoad(){
                console.log('跳转至下载页')
                let p = navigator.platform;
                let u = navigator.userAgent;
                let is_android = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
                let is_ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                if (p == "Win32" || p == "Win64" || p == "MacPPC" || p == "MacIntel" || p == "X11" || p == "Linux i686") {//PC调试环境
                    console.log('PC环境--供PC端调试');
                    this.downLoadUrl = this.androidUrl
                }else {
                    if (is_android) {//Android终端
                        console.log('Mobile环境--Android移动端');
                        this.downLoadUrl = this.androidUrl
                    }
                    else if (is_ios) {//IOS终端
                        console.log('Mobile环境--IOS移动端');
                        this.downLoadUrl = this.iosUrl
                    }
                }
                window.location.href = this.downLoadUrl
            },
            getAvatar(item){
                const url =  `url(` + item.uavater + `)100% no-repeat`
                return url
            },
            getImgs(item){
                let imgs = []
                if (item.imgs !== null) {
                    imgs = item.imgs.split(',')
                }
                return imgs
            }
        }
    };
</script>
<style src="../share1/common.css" />
<style src="../share1/index.css" />
<style src="./index2.css" />
<style scoped>
    .marginTop{
        margin-top: 140px;
    }
</style>
