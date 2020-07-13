import {routesComponent} from "./routesComponent"

export const routes = [
      {
        path: '/index',
        name: 'index',
        component: routesComponent.indexComponent,
        children: [
          {
            path: '/home',
            name: 'home',
            component: routesComponent.homeComponent
          },
          {
            path: '/classify',
            name: 'classify',
            component: routesComponent.classifyComponent
          },
          {
            path: '/car',
            name: 'car',
            component: routesComponent.carComponent
          },
          {
            path: '/mine',
            name: 'mine',
            component: routesComponent.mineComponent
          },
        ]
      },
      {
        path: '/goodsDetail',
        name: 'goodsDetail',
        component: routesComponent.goodsDetailComponent
      },
      {
        path: '/guidePage',
        name: 'guidePage',
        component: routesComponent.guidePageComponent
      },
      {
        path: '/banner',
        name: 'banner',
        component: routesComponent.bannerComponent
      },
      {
        path: '/register',
        name: 'register',
        component: routesComponent.registerComponent
      },
      {
        path: '/login',
        name: 'login',
        component: routesComponent.loginComponent
      },
      {
        path: '*',
        redirect: {name: 'guidePage'}
      }
]