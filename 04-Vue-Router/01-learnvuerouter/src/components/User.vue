<template>
    <div>
        <h2>用户界面</h2>
        <p>用户的相关信息</p>
        <h2>{{}}</h2>
    </div>
</template>

<script>
export default {
    name:"User",
    computed:{
       userId(){
           return this.$route
       }
    }
}
</script>

<style>

</style>