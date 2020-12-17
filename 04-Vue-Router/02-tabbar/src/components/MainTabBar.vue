<template>
   <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="" width="22px" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="" width="22px" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="" width="22px" />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.png" alt="" width="22px" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/shopcat.png" alt="" width="22px"  />
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcat_active.png" alt="" width="22px"  />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="" width="22px" />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="" width="22px" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/tabbar/TabBar.vue'
import TabBarItem from 'components/tabbar/TabBarItem.vue'

export default {
  name:"MainTabBar",
   components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>