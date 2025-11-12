import Vue from 'vue'
//import Vuex from 'vuex'
import io from 'socket.io-client'
import Echo from 'laravel-echo'
import axios from 'axios'
import Lang from 'lang.js'

// Komponenten
import ChatMessages from './components/ChatMessages.vue'
import ChatForm from './components/ChatForm.vue'
import $ from 'jquery'
import Plyr from 'plyr'
import Hls from 'hls'
// Import our custom CSS
import './scss/styles.scss'
import './scss/neutral.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


window.$ = window.jQuery = $
window.Plyr = Plyr
window.Hls = Hls
// Vue-Setup
Vue.use(Vuex)
Vue.component('chat-messages', ChatMessages)
Vue.component('chat-form', ChatForm)

// Socket.IO + Echo Setup
window.io = io
window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001',
})
window.Vue = Vue;
// Lang.js Setup
const default_locale = window.default_locale
const fallback_locale = window.fallback_locale
const tidings = window.tidings

Vue.prototype.$trans = new Lang({
    messages: tidings,
    locale: default_locale,
    fallback: fallback_locale,
})
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('chat-form')

    elements.forEach(el => {
        new Vue({ el })
    })
})


window.app = new Vue({
    el: '#app',
    data() {
        return {
            messages: [],
        }
    },
    methods: {
        addMessage(message) {
            axios.post('/messages', message).then(response => {
                console.log(response.data)
            })
        },
        async getMessages() {
            try {
                const response = await axios.get('/polls/get-messages')
                this.messages = response.data
            } catch (e) {
                console.error('Fehler beim Laden:', e)
            }
        },
    },
})
