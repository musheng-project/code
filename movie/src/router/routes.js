import { routescomponent } from "./routescomponent"

export const routes = [
    {
        path: '/register',
        name: 'register',
        component: routescomponent.registerComponent
    },
    {
        path: '/login',
        name: 'login',
        component: routescomponent.loginComponent
    },
    {
        path: '/likeMovie',
        name: 'likeMovie',
        component: routescomponent.likeMovieComponent
    },
    {
        path: '/index',
        name: 'index',
        component: routescomponent.indexComponent,
        children: [
            {
                path: "/home",
                name: "home",
                component: routescomponent.homeComponent
            },
            {
                path: "/buy",
                name: "buy",
                component: routescomponent.buyComponent,
                children: [
                    {
                        path: '/movie',
                        name: 'movie',
                        component: routescomponent.movieComponent
                    },
                    {
                        path: '/cinema',
                        name: 'cinema',
                        component: routescomponent.cinemaComponent
                    }
                ]
            },
            {
                path: "/find",
                name: "find",
                component: routescomponent.findComponent
            },
            {
                path: "/mine",
                name: "mine",
                component: routescomponent.mineComponent
            }
        ]
    },
    {
        path: '/movieDetail/:id',
        name: 'movieDetail',
        component: routescomponent.movieDetailComponent
    },
    {
        path: '/videoDetail/:id',
        name: 'videoDetail',
        component: routescomponent.videoDetailComponent
    },
    {
        path: '/buyMovieTick',
        name: 'buyMovieTick',
        component: routescomponent.buyMovieTickComponent
    },
    {
        path: "*",
        redirect: { name: "home" }
    }
]
