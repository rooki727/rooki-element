import { createApp } from 'vue'
import App from './App.vue'
import RookiButton from './components/RookiButton.vue'
import RookiCheckBox from './components/Rooki-CheckBox.vue'
import RookiCheckboxGroup from './components/Rooki-CheckBox-Group.vue'
import RookiDialog from './components/Rooki-Dialog.vue'
// 全局注册组件
const app = createApp(App)
app.component('Rooki-Button', RookiButton)
app.component('Rooki-CheckBox', RookiCheckBox)
app.component('Rooki-Checkbox-Group', RookiCheckboxGroup)
app.component('Rooki-Dialog', RookiDialog)
app.mount('#app')
