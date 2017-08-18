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
            sideNav: false
        },
        created: function () {
            console.log('test')
        }
    })
})