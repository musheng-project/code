class RoutesComponent {

    registerComponent() {
        return import('../views/Register.vue')
    }

    loginComponent() {
        return import('../views/Login.vue')
    }

    indexComponent() {
        return import('../views/Index.vue')
    }

    movieDetailComponent() {
        return import('../views/MovieDetail.vue')
    }

    likeMovieComponent() {
        return import('../views/LikeMovie.vue')
    }

    homeComponent() {
        return import('../views/indexComponent/Home.vue')
    }


    buyComponent() {
        return import('../views/indexComponent/Buy.vue')
    }

    movieComponent() {
        return import('../views/buyComponent/Movie.vue')
    }

    cinemaComponent() {
        return import('../views/buyComponent/Cinema.vue')
    }

    findComponent() {
        return import('../views/indexComponent/Find.vue')
    }

    mineComponent() {
        return import('../views/indexComponent/Mine.vue')
    }

    videoDetailComponent() {
        return import('../views/VideoDetail.vue')
    }

    buyMovieTickComponent() {
        return import('../views/BuyMovieTick.vue')
    }

}

export const routescomponent = new RoutesComponent();