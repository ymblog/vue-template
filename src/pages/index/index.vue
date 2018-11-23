<template>
	<div class="lt-content">
		<h2>欢迎进入首页</h2>
		<router-link :to="{name:'login'}" class="login-btn" v-if="!data.name">
			<el-button type="primary">立即登录</el-button>
		</router-link>
	</div>
</template>
<script>
	import {mapState} from 'vuex';
	export default{
	  	computed:{
			...mapState(['data'])
		},
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