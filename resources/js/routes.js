export let routes = [{
        path: '/home',
        component: require('./components/Home.vue').default
    },
    {
        path: '/dashboard',
        component: require('./components/Dashboard.vue').default
    },
    {
        path: '/users',
        component: require('./components/Users.vue').default
    },
    {
        path: '/profile',
        component: require('./components/Profile.vue').default
    }
]
