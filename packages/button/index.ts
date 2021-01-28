import { App } from 'vue'
import GekButton from './src/button.vue'

GekButton.install = (app: App): void => {
  app.component(GekButton.name, GekButton)
}
export default GekButton
