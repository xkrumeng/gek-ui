import { App } from 'vue'
import GekButton from './button'

const components = [
  GekButton
]

export {
  GekButton
}

const install = (app: App):void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  version: '0.1.0',
  install,
}