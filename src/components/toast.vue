<template>
	<transition name="toast">
		<div v-show="isShowToast" class="lt-toast" id="toast-box"><p>{{content}}</p></div>
	</transition>
</template>
<style lang="less" scope>
.lt-toast{
    position: fixed;
    top:50%;
    width:100%;
    text-align:center;
    z-index:99;
    p{
        display:inline-block;
        min-width:200px;
        padding:8px 12px;
        text-align:center;
        border-radius:3px;
        color: #fff;
        font-size: 14px;
        box-sizing:border-box;
        background: rgba(0,0,0,0.7);
    }
}
.toast-enter-active, .toast-leave-active{
    -webkit-transition:all .5s;
    transition:all .5s;
}
.toast-enter, .toast-leave-to {
	transform:translateY(50px);
    opacity: 0;
}
</style>
