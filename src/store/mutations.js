import {
	SAVE_USERINFO,
	SAVE_TOKEN
} from '@/store/mutation-types.js'
const mutations = {
	[SAVE_USERINFO](state,info){
		state.userInfo = info;
	},
	[SAVE_TOKEN](state,token){
		state.token = token;
	}
}
export default mutations;
