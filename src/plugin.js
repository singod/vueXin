import Toast from './toast'
export default {
    install(Vue,options){
        Vue.prototype.$toast = function (val,toastOptions) {
            let Constructor = Vue.extend(Toast)
            let toast =  new Constructor({
                    propsData:toastOptions
            })
            toast.$slots.default = [val]
            toast.$mount()
            document.body.appendChild(toast.$el)

        }
    }
}
