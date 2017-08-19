import Vue from 'vue/dist/vue.esm'
import Vuetify from 'vuetify'
import  TurbolinksAdapter from 'vue-turbolinks'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuetify)

document.addEventListener('turbolinks:load', () => {
    var element = document.getElementById("main-menu")

    var vueMainMenu = new Vue({
        el: element,
        data: {
            sideNav: false,
            menuItems: [
                {icon: 'supervisor_account', title: 'Employees', link: '/employees'},
                {icon: 'room', title: 'Organize Meetup', link: '#'},
                {icon: 'person', title: 'Profile', link: '#'},
                {icon: 'face', title: 'Sign Up', link: '#'},
                {icon: 'lock_open', title: 'Sign In', link: '#'}
            ]
        },
        created: function () {
            console.log('test')
        },
        methods: {
            goHome: function() {
               Turbolinks.visit('/')
            },
            navigateTo: function(link) {
                console.log(link)
                Turbolinks.visit(link)
            }
        }
    })
})