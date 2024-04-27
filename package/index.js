//index.js
import RookiButton from './Rooki-Button.vue' // 引入封装好的组件
import RookiCheckBox from './Rooki-CheckBox.vue'
import RookiCheckboxGroup from './components/Rooki-CheckBox-Group.vue'
import RookiDialog from './Rooki-Dialog.vue'
import RookiForm from './Rooki-Form.vue'
import RookiFormItem from '.Rooki-Form-Item.vue'
import RookiInput from './Rooki-input.vue'
import RookiRadioGroup from './Rooki-Radio-Group.vue'
import RookiRadio from './Rooki-Radio.vue'
import RookiSwitch from './Rooki-Switch.vue'
export {
  RookiButton,
  RookiCheckBox,
  RookiCheckboxGroup,
  RookiDialog,
  RookiForm,
  RookiFormItem,
  RookiInput,
  RookiRadioGroup,
  RookiRadio,
  RookiSwitch
} //实现按需引入*

const components = [
  RookiButton,
  RookiCheckBox,
  RookiCheckboxGroup,
  RookiDialog,
  RookiForm,
  RookiFormItem,
  RookiInput,
  RookiRadioGroup,
  RookiRadio,
  RookiSwitch
]
const install = function (App) {
  components.forEach((component) => {
    App.component(component.name, component)
  })
}
export default { install } // 批量的引入*
