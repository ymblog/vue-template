<template>
	<div class="page-index">
		{{userInfo.name}} <router-link :to="{path:'detail'}">跳转</router-link>
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
<style lang="less" scope>
@import './index.less';
</style>