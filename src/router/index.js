import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/components/Shouye/Shouye'
import Bankuai from '@/components/Bankuai/Bankuai'
import Zhuti from '@/components/Zhuti/Zhuti'
import Radio from '@/components/Radio/Radio'
import Radio2 from '@/components/Radio/Radio2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/zhuti',
      component: Zhuti
    },{
      path: '/bankuai',
      component: Bankuai,
      children:[{
        path:"radio",
        component:Radio
      },{
        path:"radio2",
        component:Radio2
      }]
    },
    {
      path: '/',
      component: Shouye
    }
  ]
})
