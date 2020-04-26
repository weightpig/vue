import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/components/Shouye/Shouye'
import Bankuai from '@/components/Bankuai/Bankuai'
import Zhuti from '@/components/Zhuti/Zhuti'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/zhuti',
      name: 'Zhuti',
      component: Zhuti
    },{
      path: '/bankuai',
      name: 'Bankuai',
      component: Bankuai
    },
    {
      path: '/',
      name: 'Shouye',
      component: Shouye
    }
  ]
})
