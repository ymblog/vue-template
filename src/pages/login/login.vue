<template>
	<div class="page-login">登录页demo</div>
</template>
<script>
	export default{
		mounted(){
			//登录js demo
			//成功之后执行
			this.$cookie.set('token','token');
			this.$cookie.set('userInfo',JSON.stringify({name:'游客'}));
			this.$store.commit('SAVE_USERINFO',{name:'游客'});
			this.$store.commit('SAVE_TOKEN','token');
			this.$router.push(this.$route.query.redirect);
		}
	}
</script>