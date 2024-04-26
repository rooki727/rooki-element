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

<!-- checkBox使用示例 -->
<template>
  <div>
    <Rooki-CheckBox label="Option 4" name="Option 4" activeColor="#4da522" />
    <Rooki-CheckBox label="Option 3" name="Option 3" :disabled="true" />
    <Rooki-CheckBox label="Option 1" name="Option 1" @change="updateValue" />
    <Rooki-CheckBox label="Option 2" name="Option 2" :checked="true" @change="updateValue" />
    <Rooki-Checkbox-Group v-model:modelValue="checkedValues" @change="changeValue">
      <!-- Add more RookiCheckBox components here as needed -->
    </Rooki-Checkbox-Group>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const checkedValues = ref([
  { label: 'Option 1', name: 'Option 1', checked: true },
  { label: 'Option 2', name: 'Option 2', checked: false },
  { label: 'Option 3', name: 'Option 3', checked: true },
  { label: 'Option 4', name: 'Option 4', checked: false, disabled: true }
])

const changeValue = (value: Array<Object>) => {
console.log(value)
}

const updateValue = (changeTarget: { name: string; checked: boolean }) => {
console.log(changeTarget)
}
</script>
