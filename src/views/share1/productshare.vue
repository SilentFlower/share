<template>
  <div class="page flex-col" v-if="product">
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
      <div class="main3 flex-col" :class="{marginTop:true}">
        <div class="main4 flex-col" v-if="review.length > 0" style="padding-top: 14px;padding-bottom: 14px">
          <div class="mod4 flex-row">
            <span class="txt2">评价（{{review.length}}+）</span>
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
      <div class="main8 flex-col">
        <div class="section6 flex-col">
          <div class="layer4 flex-row">
            <span class="txt7">规格</span>
            <span class="info5"></span>
          </div>
          <div class="layer5 flex-col" v-for="(item,index) in getSpec(product)" :key="item.id">
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
      <div class="main12 flex-col" @click="gotoDownLoad">
        <div class="section8 flex-col">
          <div class="outer12 flex-col"></div>
          <div class="outer13 flex-row">
            <div class="outer14 flex-col" style="margin-left: 12px">
              <div class="group14 flex-col"></div>
              <span class="word15">购物车</span>
            </div>
            <div class="outer15 flex-col" style="margin-right: auto;margin-left: 20px">
              <div class="main13 flex-col">
                <div class="section9 flex-col"></div>
              </div>
              <span class="txt13">收藏</span>
            </div>
            <img
                    style="margin-left: auto;margin-right: 12px;width: 112px;height: 40px"
                    referrerpolicy="no-referrer"
                    src="./img/addshopcard.png"
            />
            <img
                    style="margin-right: 12px;width: 111px;height: 40px"
                    referrerpolicy="no-referrer"
                    src="./img/buy.png"
            />
          </div>
        </div>
        <div class="section10 flex-col"></div>
      </div>
    </div>
    <div class="group16 flex-col">
      <div class="outer17 flex-row">
        <span class="txt16">￥</span>
        <span class="info10">{{product.price}}</span>
        <span class="word16">售出：{{product.statistic.saleNum}}</span>
      </div>
    </div>
    <div class="group17 flex-col">
      <div class="outer18 flex-col">
        <span class="word17">
          <div>
            <span v-if="product.type === 1"><img align="center" src="./img/yushou.png" height="24"></span>
          <span>{{ product.name }}</span>
          </div>
        </span>
        <div class="box13 flex-row" style="display: flex;justify-content: flex-start">
          <div class="outer19 flex-col" v-for="item in product.tags" :key="item.id"><span class="word18">{{ item.name }}</span></div>
          <img @click="gotoDownLoad"
                  class="icon3"
                  width="76"
                  height="24"
                  referrerpolicy="no-referrer"
                  src="./img/tucao.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getProduct} from "../../api";

  export default {
    data() {
      return {
        productId: null,
        product: null,
        review: [],
        openFlag: false,
        choosePng: 1,
        androidUrl: 'http://apptest.xiaohuodui.cn/fenghe4android',
        iosUrl: 'http://apptest.xiaohuodui.cn/fenghe4ios',
        downLoadUrl: 'http://apptest.xiaohuodui.cn/fenghe4android'
      }
    },
    created() {
      console.log(this.$route.query.id)
      this.productId = this.$route.query.id
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
        let result = ''
        const regex = new RegExp('<img', 'gi');
        if (this.product) {
          result = this.product.text.replace(regex, `<img style="max-width: 100%;"`)
        }
        return result
      },
    },
    methods: {
      init(){
        getProduct({id: this.productId})
        .then(res => {
          this.product = res.data.product
          this.review = res.data.review
          if (res.data.androidUrl != null) {
            this.androidUrl = res.data.androidUrl
          }
          if (res.data.iosUrl != null) {
            this.iosUrl = res.data.iosUrl
          }
          console.log('product', this.product)
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
        console.log(url)
        return url
      },
      getSpec(item){
        let s = []
        if(item){
          s = item.specs
        }
        let specs = []
        if (this.openFlag) {
          specs = s
        }else{
          specs = s.filter((item,index) => index < 5)
        }
        console.log(specs)
        return specs
      },
      getImgs(item){
        let imgs = []
        if (item.imgs !== null) {
          imgs = item.imgs.split(',')
        }
        console.log(imgs)
        return imgs
      }
    }
  };
</script>
<style src="./common.css" />
<style src="./index.css" />
<style scoped>
  .marginTop{
    margin-top: 140px;
  }
</style>


