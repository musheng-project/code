class RoutesComponent {
    indexComponent(){
        return import('../views/Index.vue')
    }
    
    homeComponent(){
        return import('../views/indexComponent/Home.vue')
    }

    classifyComponent(){
        return import('../views/indexComponent/Classify.vue')
    }

    carComponent(){
        return import('../views/indexComponent/Car.vue')
    }

    mineComponent(){
        return import('../views/indexComponent/Mine.vue')
    }

    goodsDetailComponent(){
        return import('../views/GoodsDetail.vue')
    }
    
    guidePageComponent(){
        return import('../views/GuidePage.vue')
    }

    bannerComponent(){
        return import('../views/Banner.vue')
    }

    registerComponent(){
        return import('../views/Register.vue')
    }

    loginComponent(){
        return import('../views/Login.vue')
    }
}

export const routesComponent = new RoutesComponent();