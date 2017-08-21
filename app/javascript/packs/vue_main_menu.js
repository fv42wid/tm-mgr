import Vue from 'vue/dist/vue.esm'
import Vuetify from 'vuetify'
import  TurbolinksAdapter from 'vue-turbolinks'
import VueResource from 'vue-resource'

import EmployeeIndex from './employee_index.vue'
import EmployeeShow from './employee_show.vue'
import EmployeeNew from './employee_new.vue'
import UserSignup from './user_signup.vue'

Vue.use(VueResource)
Vue.use(Vuetify)

document.addEventListener('turbolinks:load', () => {
    var element = document.getElementById("main-menu")

    var vueMainMenu = new Vue({
        el: element,
        data: {
            sideNav: false,
            user: null
        },
        computed: {
            menuItems() {
                let menuItems = [
                    {icon: 'face', title: 'Sign Up', link: '/users/sign_up'},
                    {icon: 'lock_open', title: 'Sign In', link: '/users/sign_in'}
                ]
                if(this.userIsAuthenticated) {
                    menuItems = [
                        {icon: 'supervisor_account', title: 'Employees', link: '/employees'},
                        {icon: 'room', title: 'Organize Meetup', link: '#'},
                        {icon: 'person', title: 'Profile', link: '#'},
                        {icon: 'account_circle', title: 'Sign Out', link: '/users/sign_out'}
                    ]
                }
                return menuItems
            },
            userIsAuthenticated() {
                return this.user !== null && this.user !== undefined
            }
        },
        created: function () {
            console.log('mainMenu created')
            this.user = document.getElementById('current_user').getAttribute('data-user')
            console.log(this.user)
        },
        methods: {
            goHome: function() {
               Turbolinks.visit('/')
            },
            navigateTo: function(link) {
                console.log(link)
                Turbolinks.visit(link)
            }
        },
        components: {
            'employee-index' : EmployeeIndex,
            'employee-show' : EmployeeShow,
            'employee-new' : EmployeeNew,
            'user-signup' : UserSignup
        }
    })
})