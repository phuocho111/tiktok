

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
   data:[],
   discover:[],
   menu:[],
   feedback:[]
}
const getters = {
  allData:(state) => state.data,
  allDiscover:(state) => state.discover,
  allMenu:(state)=>state.menu,
  allFeedback:(state)=> state.feedback
}
const mutations = {
  setData:(state, data) =>(state.data = data),
  setDiscover:(state,discover) =>(state.discover = discover),
  setMenu:(state,menu) =>(state.menu = menu),
  setFeedback:(state,feedback)=>(state.feedback = feedback)
}
const actions = {
  
  async fetchData({commit}){
    const response = await (await fetch("http://localhost:3000/user")).json();
  
    commit('setData', response)
  },
  async fetchDiscover({commit}){
    const discover = await (await fetch("http://localhost:3000/discover")).json();
    commit('setDiscover', discover)
  },
  async fetchMenu({commit}){
    const menu = await(await fetch('http://localhost:3000/menu_item')).json();
    commit('setMenu',menu)
  },
  async fetchFeedback({commit}){
    const feedback = await(await fetch('http://localhost:3000/feedback')).json();
    commit('setFeedback',feedback)
  }
  
}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
