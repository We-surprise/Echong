<template>
  <div>
    <!-- <h3>Eheader.vue</h3> -->
    <!-- 顶部 -->
    <div class="main-top">
      <!-- header01 -->
      <div class="main-search">
        <a href="" class="main-search-a">
          <div>
            <img
              class="searchimg"
              src="../../assets/searchimg.png"
              alt=""
            />
            <span class="ft12">请输入搜索内容</span>
          </div>
        </a>
        <p class="rela">
          <a href="">
            <span class="smallicon"></span>
          </a>
        </p>
      </div>

      <!-- header02 -->
      <div class="main-nav">
        <div class="rela main-nav-wt">
          <ul class="main-nav-ul">
            <li>
              <div>
                <span class="bold ft20 flex ct li-1">精选</span>
              </div>
            </li>
            <li>
              <div>
                <span class="ct">进口猫粮</span>
              </div>
            </li>
            <li>
              <div>
                <span class="ct">国产猫粮</span>
              </div>
            </li>
            <li>
              <div>
                <span class="ct">罐头零食</span>
              </div>
            </li>
            <li>
              <div>
                <span class="ct">驱虫助手</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 轮播图 swiper -->
    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <a href="javascript:;">
            <img src="../../assets/swper01.jpg" alt="" />
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:;">
            <img src="../../assets/swpier02.png" alt="" />
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:;">
            <img src="../../assets/swper03.jpg" alt="" />
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:;">
            <img src="../../assets/swper04.jpg" alt="" />
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:;">
            <img src="../../assets/swper05.jpg" alt="" />
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:;">
            <img src="../../assets/swper06.jpg" alt="" />
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- body第一部分 -->
    <div class="menus">
      <!-- E宠购物节 -->
      <div class="nav-img">
        <ul class="flex nav-img-ul">
          <li>
            <a href="javascript:;">
              <img
                class="w100 imgbl"
                src="../../../public/nav-img/nav-1.jpg"
              />
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img
                class="w100 imgbl"
                src="../../../public/nav-img/nav-2.jpg"
              />
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img
                class="w100 imgbl"
                src="../../../public/nav-img/nav-3.jpg"
              />
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img
                class="w100 imgbl"
                src="../../../public/nav-img/nav-4.jpg"
              />
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img
                class="w100 imgbl"
                src="../../../public/nav-img/nav-5.jpg"
              />
            </a>
          </li>
        </ul>
      </div>
      <!-- 新春钜惠 -->
      <div>
        <div>
          <a href="javascript:;">
            <img
              style="display:block"
              class="w100 .imgbl"
              src="../../../public/nav-img/juhui.jpg"
            />
          </a>
        </div>
        <div>
          <a href="javascript:;">
            <img
              style="display:block"
              class="w100 .imgbl"
              src="../../../public/nav-img/juhui-1.jpg"
            />
          </a>
        </div>
        <div>
          <a href="javascript:;">
            <img
              style="display:block"
              class="w100 .imgbl"
              src="../../../public/nav-img/juhui-2.jpg"
            />
          </a>
        </div>
        <div>
          <a href="javascript:;">
            <img
              style="display:block"
              class="w100 .imgbl"
              src="../../../public/nav-img/juhui-3.jpg"
            />
          </a>
        </div>
        <div class="flex">
          <div>
            <a href="javascript:;">
              <img
                style="display:block"
                class="w100 .imgbl"
                src="../../../public/nav-img/juhui-4.jpg"
              />
            </a>
          </div>
          <div>
            <a href="javascript:;">
              <img
                style="display:block"
                class="w100 .imgbl"
                src="../../../public/nav-img/juhui-5.jpg"
              />
            </a>
          </div>
        </div>
        <div class="flex">
          <div>
            <a href="javascript:;">
              <img
                style="display:block"
                class="w100 .imgbl"
                src="../../../public/nav-img/juhui-6.jpg"
              />
            </a>
          </div>
          <div>
            <a href="javascript:;">
              <img
                style="display:block"
                class="w100 .imgbl"
                src="../../../public/nav-img/juhui-7.jpg"
              />
            </a>
          </div>
          <div>
            <a href="javascript:;">
              <img
                style="display:block"
                class="w100 .imgbl"
                src="../../../public/nav-img/juhui-8.jpg"
              />
            </a>
          </div>
        </div>
        <div>
          <a href="javascript:;">
            <img
              style="display:block"
              class="w100 .imgbl"
              src="../../../public/nav-img/juhui-bt.jpg"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- body第二部分 新人保障 -->
    <div class="new-customer">
      <div>
        <a href="javascript:;">
          <img
            style="display:block"
            class="w100 .imgbl"
            src="../../../public/newcustomer/newcustomer-1.jpg"
          />
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img
            style="display:block"
            class="w100 .imgbl"
            src="../../../public/newcustomer/newcustomer-2.jpg"
          />
        </a>
      </div>
      <div class="new-list flex">
        <div class="list-gif">
          <a href="javascript:;">
            <img
              style="display:block"
              class="w100 .imgbl"
              src="../../../public/newcustomer/newcustomer-3.gif"
            />
          </a>
        </div>
        <div class="list-static">
          <a href="javascript:;">
            <img
              style="display:block"
              class="w100 .imgbl"
              src="../../../public/newcustomer/newcustomer-4.jpg"
            />
          </a>
          <a href="javascript:;">
            <img
              style="display:block"
              class="w100 .imgbl"
              src="../../../public/newcustomer/newcustomer-5.jpg"
            />
          </a>
          <a href="javascript:;">
            <img
              style="display:block"
              class="w100 .imgbl"
              src="../../../public/newcustomer/newcustomer-6.jpg"
            />
          </a>
        </div>
      </div>
      <div>
        <a href="javascript:;">
          <img
            style="display:block"
            class="w100 .imgbl"
            src="../../../public/newcustomer/newcustomer-7.jpg"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* body第二部分 新人保障 */
.new-list .list-static {
  width: 53.6%;
}
.new-list .list-gif {
  width: 46.4%;
}
/* menus */
.imgbl {
  display: block;
}
.menus {
  margin-top: -10%;
}
/* E宠购物节 */
.nav-img-ul {
  margin: 0;
  padding: 0;
}
.w100 {
  width: 100%;
}
ul li {
  list-style: none;
  background-color:  transparent;
}

.nav-img {
  position: relative;
  z-index: 1;
  max-width: 750px;
  min-width: 320px;
  margin: 0 auto;
}

/* 轮播图 swiper */
.swiper >>> .mint-swipe-indicators {
  bottom: 14%;
}
.swiper >>> .mint-swipe-indicator.is-active {
  background: #fff;
  width: 16px;
  border-radius: 30px;
}
.swiper >>> .mint-swipe-indicator {
  width: 6px;
  height: 6px;
  display: inline-block;
  border-radius: 100%;
  background: transparent;
  margin: 0 3px;
  opacity: 0.9;
  border: 1px #fff solid;
}
.swiper img {
  width: 100%;
  height: 100%;
}
.swiper {
  width: 100%;
  height: 18.1em;
  background: #b1001c;
}
/* header02 */
.main-top {
  background: transparent;
  position: relative;
}
.main-nav-wt {
  width: 160%;
}
.ct {
  margin: auto;
}
.flex {
  display: flex;
}
.bold {
  font-weight: 700;
}
.ft20 {
  font-size: 20px;
}
.main-nav-ul li {
  float: left;
  font-size: 14px;
  text-align: center;
  color: rgba(255, 255, 255);
  line-height: 44px;
  width: 12.5%;
}
.main-nav-ul .li-1 {
  margin: 0 21px 0 21px;
}
.main-nav-ul {
  padding: 0;
  white-space: nowrap;
  height: 48px;
  line-height: 44px;
  list-style: none;
}
.main-nav {
  min-width: 320px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-top: 5px;
}
/* header01 */
.main-top {
  position: fixed;
  width: 100%;
  /* height: 44px; */
  top: 0;
  z-index: 10;
  max-width: 750px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.main-search {
  display: flex;
  flex: 1;
  height: 30px;
  margin-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
}
.main-search-a {
  display: block;
  flex: 1;
  line-height: 2rem;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.8);
}
.main-search-a .searchimg {
  width: 10px;
  vertical-align: middle;
  margin-left: 15px;
  margin-right: 10px;
}
.main-search-a .ft12 {
  font-size: 12px;
  display: inline-block;
  color: #666;
}
.rela {
  position: relative;
  display: block;
  margin-top: -19px;
}
.smallicon {
  display: inline-block;
  width: 25px;
  height: 25px;
  vertical-align: middle;
  margin-top: 22px;
  background: url("../../assets/smallicon.png") no-repeat;
  background-size: 100% 100%;
  margin-left: 10px;
}
</style>
