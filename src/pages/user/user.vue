<template>
	<div class="lt-content">
		<h2>欢迎进入个人中心</h2>
		<p>用户名：{{data.name}}</p>
		<el-button class="login-btn" type="primary" @click="logout">退出登录</el-button>
	</div>
</template>
<script>
	import {mapState} from 'vuex';
	export default{
	  	computed:{
			...mapState(['data'])
		},
		methods:{
			logout(){
				this.$store.dispatch('logOut').then(() => {
					this.$router.push('/login');
				});
			}
		}
	}
</script>
<style lang="less" scope>
.lt-content{
	height:90vh;
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
	h2{
		margin-bottom:30px;
		font-size:28px;
	}
	p{
		font-size:16px;
		line-height:2;
	}
	.login-btn{
		margin-top:15px;
	}
}
</style>