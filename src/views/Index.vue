<template lang="html">
  <!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
  <div class="index">
    <v-Eheader></v-Eheader>
    <v-baseline></v-baseline>
    <v-footer></v-footer> 
  </div>
</template>

<script>
import Eheader from '@/components/index/Eheader.vue'
import Baseline from '@/common/_baseline.vue'
import Footer from '@/common/_footer.vue'
import index from '@/http/mock.js' //模拟数据
export default {
  components: {
    'v-Eheader': Eheader,
    'v-baseline': Baseline,
    'v-footer': Footer
  },
  data() {
    return {
      datas: '',
      loading:true
    }
  },
  beforeCreate() {

    this.$api({
      method: 'post',
      url: '/index'
    }).then((response) => {
      this.datas = response.data;
    }).catch(function(error) {
      alert(error)
    })
  }
}
</script>

