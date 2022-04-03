//该文件用于创建Vuex中最为核心的store
import Vuex from 'vuex'
import Vue from 'vue'

//actions-用于响应组件中的动作
const actions = {
    add(context, value) {
        console.log('action中的add被调用');
        context.commit('add', value)
    },
    minus(context, value) {
        console.log('action中的minus被调用');
        context.commit('minus', value)
    },
    addOdd(context, value) {
        console.log('action中的addOdd被调用');
        if (context.state.sum % 2) context.commit('add', value)
    },
    addWait(context, value) {
        console.log('action中的addWait被调用');
        setTimeout(() => {
            context.commit('add', value)
        }, 500);

    },
}

//mutations-用于操作数据state
const mutations = {
    add(state, value) {
        console.log('mutations中的add被调用了');
        state.sum += value
    },
    minus(state, value) {
        console.log('mutations中的add被调用了');
        state.sum -= value
    },
}

//准备state-用于存储数据
const state = {
    sum: 0, //当前和
    school: '华工',
    subject: 'Vue'
}

//准备getters-用于加工state中的数据
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//使用插件
Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
});

// 导出store
export default store