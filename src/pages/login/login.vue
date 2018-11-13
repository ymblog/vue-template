<template>
	<div class="page-login">
		<el-form ref="form" label-width="60px" :model="loginForm" :rules="loginRules">
			<h2 class="login-title">admin</h2>
			<el-form-item label="账号" prop="username">
				<el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<p class="login-tip">账号:admin 密码:admin</p>
			<el-button class="submit" type="primary" @click="onSubmit()" :loading="loading">立即登录</el-button>
		</el-form>
	</div>
</template>
<script>
	export default{
		name: 'login',
		data(){
			const validatePass = (rule, value, callback) => {
		      	if (value.length < 5) {
		       	 	callback('密码不能小于5位');
		      	} else {
		        	callback();
		      	}
		    }
			return{
				loading:false,
				loginForm:{
					username:'admin',
					password:'admin'
				},
				loginRules:{
					username: [{ required: true, trigger: 'blur'}],
					password: [{ required: true, trigger: 'blur', validator: validatePass }]
				}
			}
		},
		methods:{
			onSubmit(){
				//验证
				this.$refs.form.validate(valid => {
					if (valid) {
						this.loading = true;
						this.$store.dispatch('login',this.loginForm).then(() => {
				            this.loading = false;
				           	this.$router.push('/user');
				        }).catch(() => {
				            this.loading = false;
				        });
					}
				});
			}
		}
	}
</script>
<style lang="less" scope>
@import './login.less';
</style>