//index.js
import RookiButton from './components/RookiButton.vue' // 引入封装好的组件

export { RookiButton } //实现按需引入*

const components = [RookiButton]
const install = function (App) {
  components.forEach((component) => {
    App.component(component.name, component)
  })
}
export default { install } // 批量的引入*
