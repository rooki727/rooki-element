import { createApp } from 'vue'
import App from './App.vue'
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
// 全局注册组件
const app = createApp(App)
app.component('Rooki-Button', RookiButton)
app.component('Rooki-CheckBox', RookiCheckBox)
app.component('Rooki-Checkbox-Group', RookiCheckBoxGroup)
app.component('Rooki-Dialog', RookiDialog)
app.component('Rooki-Form', RookiForm)
app.component('Rooki-Form-Item', RookiFormItem)
app.component('Rooki-Input', RookiInput)
app.component('Rooki-Radio-Group', RookiRadioGroup)
app.component('Rooki-Radio', RookiRadio)
app.component('Rooki-Switch', RookiSwitch)

app.mount('#app')
