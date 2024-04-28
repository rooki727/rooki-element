# rooki-element

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

<!-- import { getCurrentInstance } from 'vue';

export default {
  setup() {
    const instance = getCurrentInstance();
    console.log(instance.proxy); // 访问this
  }

 在 Vue 3 的组合式 API 中，可以使用 getCurrentInstance() 函数来获取当前组件实例的上下文。然后，你可以从实例上访问 this
} -->

<!-- button使用示例 -->
<template>
  <Rooki-Button>按钮</Rooki-Button>
  <Rooki-Button type="primary">按钮</Rooki-Button>
  <Rooki-Button type="success">按钮</Rooki-Button>
  <Rooki-Button type="danger">按钮</Rooki-Button>
  <Rooki-Button type="warning">按钮</Rooki-Button>
  <Rooki-Button :round="true">按钮</Rooki-Button>
  <Rooki-Button :circle="true">按钮</Rooki-Button>
  <Rooki-Button :disabled="true">按钮</Rooki-Button>
   <Rooki-Button :plain="true">按钮</Rooki-Button>
  <!-- 自定义图标按钮 -->
<Rooki-Button :circle="true" class="iconfont icon-shurukuangqingkong"></Rooki-Button>
<Rooki-Button icon="bianji" :circle="true" style="font-size: 24px"></Rooki-Button>
<Rooki-Button icon="guanbi" :circle="true"></Rooki-Button>
<Rooki-Button icon="shanchu" :circle="true"></Rooki-Button>
<Rooki-Button icon="tianjia" :circle="true"></Rooki-Button>
</template>

<script setup lang="ts">
import '@/assets/font/iconfont.css'
</script>

<style scoped>
</style>
<!-- checkBox使用示例 -->
<template>
  <div>
    <Rooki-CheckBox label="Option 4" value="Option 4" activeColor="#4da522" />
    <Rooki-CheckBox label="Option 3" value="Option 3" :disabled="true" />
    <Rooki-CheckBox label="Option 1" value="Option 1" @change="updateValue" />
    <Rooki-CheckBox label="Option 2" value="Option 2" :checked="true" @change="updateValue" />

    <!-- 单选框group的使用 -->
    <Rooki-CheckBox-Group v-model:modelValue="checkedValues" @change="changeValue">
    </Rooki-CheckBox-Group>

  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const checkedValues = ref([
  { label: 'Option 1', value: 'Option 1', checked: true },
  { label: 'Option 2', value: 'Option 2', checked: false },
  { label: 'Option 3', value: 'Option 3', checked: true },
  { label: 'Option 4', value: 'Option 4', checked: false, disabled: true }
])

const changeValue = (value: Array<Object>) => {
console.log(value)
}

const updateValue = (changeTarget: { value: string; checked: boolean }) => {
console.log(changeTarget)
}
</script>

<!-- dialog用法 -->
<template>
<Rooki-Dialog :visiable="visiable" :title="'123123123'" @close="closeVisiable">
<div>默认插槽位置</div>
<template #footer> <div>footer插槽位置</div></template>
</Rooki-Dialog>
<button @click="openDialog">打开dialog</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visiable = ref(false)
const openDialog = () => {
  visiable.value = true
}
const closeVisiable = (value: boolean) => {
  visiable.value = value
}
</script>

<style scoped>
</style>

<!-- form示例 -->
<template>
  <Rooki-Form v-model:model="model">
    <Rooki-Form-Item label="标签" width="">
      <Rooki-Input v-bind:value="model.name" @input="handInput"></Rooki-Input>
      <Rooki-Button @click="getForm">按钮插槽占用</Rooki-Button>
    </Rooki-Form-Item>
  </Rooki-Form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const model = ref({
  name: '12312',
  account: 1231,
  password: 123123,
  sex: '男',
  hobby: ['篮球', '足球'],
  info: ''
})
const getForm = () => {
  console.log(model.value)
}
const handInput = (value: string) => {
  model.value.name = value
}
</script>

<style scoped>
</style>

<!-- input输入框示例 -->
<template>
  <Rooki-Input
    name="123"
    placeholder="请输入密码"
    v-model:value="inputValue"
    type="password"
    @input="getInputValue"
  ></Rooki-Input>
  <Rooki-Input
    name="321"
    placeholder="请输入账号"
    :clearable="true"
    v-model:value="inputValue2"
    @input="getInputValue2"
  ></Rooki-Input>
  <br />
  <Rooki-Input
    name="textarea"
    placeholder="请输入textarea"
    v-model:value="inputValue3"
    type="textarea"
  ></Rooki-Input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const inputValue2 = ref('')
const inputValue3 = ref('')
const getInputValue = (value: string) => {
  console.log(value)
  inputValue.value = value
}
const getInputValue2 = (value: string) => {
  console.log(value)
  inputValue2.value = value
}
</script>

<!-- 单选框示例 -->
<template>
  <Rooki-Radio v-model:value="value" @change="changeValue" name="单选框1"></Rooki-Radio>
  <Rooki-Radio-Group v-model:modelValue="valueGroup" @change="changeValue2"> </Rooki-Radio-Group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('单选框1')
const valueGroup = ref([
  { label: '1', value: 1, name: '1' },
  { label: '2', value: 2, name: '2' },
  { label: '3', value: 3, name: '3' }
])
const changeValue = (changeTarget: { value: [String, Number]; checked: boolean }) => {
  console.log(changeTarget)
}
const changeValue2 = (changeTarget: { value: [String, Number]; checked: boolean }) => {
  console.log(changeTarget)
}
</script>

<style scoped>
</style>

<!-- switch示例-->
<template>
  <Rooki-Switch name="测试switch" v-model:value="valueSwitch" @change="changeSwitch"></Rooki-Switch>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const valueSwitch = ref(false)
const changeSwitch = (value: boolean) => {
  valueSwitch.value = value
  if (value) {
    console.log('开关打开，操作你的吧！')
  } else {
    console.log('开关关了')
  }
}
</script>

<style scoped>
</style>

<!-- 快速引入 -->

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
