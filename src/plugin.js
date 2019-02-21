import Toast from './toast'
export default {
    install(Vue,options){
        Vue.prototype.$toast = function (val) {
            let Constructor = Vue.extend(Toast)
            let toast =  new Constructor()
            toast.$slots.default = [val]
            toast.$mount()
            document.body.appendChild(toast.$el)

        }
    }
}
