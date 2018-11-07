<template>
	<div class="page-detail">
		{{userInfo.name}} 详情页 <router-link :to="{path:'/'}">返回首页</router-link>
	</div>
</template>
<script>
	import {mapState} from 'vuex';
	export default{
		computed:{
			...mapState(['userInfo'])
		}
	}
</script>