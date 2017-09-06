import Vue from 'vue'
import ToastComponent from './toast.vue'
// import { PopupManager } from 'element-ui/src/utils/popup'
// import { isVNode } from 'element-ui/src/utils/vdom'
let ToastConstructor = Vue.extend(ToastComponent)

let instance

const Toast = options => {
  if (Vue.prototype.$isServer) {
    return
  }

  options = options || {}
  let userOnClose = options.onClose

  options.onClose = () => {
    Toast.close(userOnClose)
  }

  instance = new ToastConstructor({
    data: options
  })

  // if (isVNode(options.message)) {
  //   instance.$slots.default = [options.message]
  //   options.message = ''
  // }

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = 9999

  return instance.vm
}

['success', 'warning', 'info', 'error'].forEach(type => {
  Toast[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Toast(options)
  }
})

Toast.close = userOnClose => {
  if (typeof userOnClose === 'function') {
    userOnClose(instance)
  }
}

export default Toast
