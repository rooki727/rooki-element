//index.js
import RookiButton from './components/Rooki-Button.vue'
import RookiCheckBox from './components/Rooki-CheckBox.vue'
import RookiCheckBoxGroup from './components/Rooki-CheckBox-Group.vue'
import RookiDialog from './components/Rooki-Dialog.vue'
import RookiForm from './components/Rooki-Form.vue'
import RookiFormItem from './components/Rooki-Form-Item.vue'
import RookiInput from './components/Rooki-input.vue'
import RookiRadioGroup from './components/Rooki-Radio-Group.vue'
import RookiRadio from './components/Rooki-Radio.vue'
import RookiSwitch from './components/Rooki-Switch.vue'
export {
  RookiButton,
  RookiCheckBox,
  RookiCheckBoxGroup,
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
  RookiCheckBoxGroup,
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
export default { install } // 单个引入*或批量的引入*
