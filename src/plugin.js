import Toast from './toast'

let currentToast

export default {
    install(Vue,options){
        Vue.prototype.$toast = function (val,toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({Vue,msg:val,propsData:toastOptions})
        }
    }
}

function createToast({Vue,msg,propsData}) {
    let Constructor = Vue.extend(Toast)
    let toast =  new Constructor({
        propsData
    })
    toast.$slots.default = [msg]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}

