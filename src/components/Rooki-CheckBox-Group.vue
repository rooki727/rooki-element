<template>
  <div>
    <Rooki-CheckBox
      v-for="(item, index) in arr"
      :key="index"
      :label="item.label"
      :name="item.name"
      :checked="item.checked"
      :disabled="item.disabled"
      :activeColor="item.activeColor"
      :mimicry="item.mimicry"
      @change="updateValue"
    />
  </div>
</template>
<script lang="ts" setup name="Rooki-CheckBox-Group">
import { computed, provide, type PropType } from 'vue'

// 定义父组件传递的数据结构的接口
interface CheckedValue {
  label: string
  name: string
  checked: boolean
  disabled?: Boolean
  activeColor?: String
  mimicry?: Boolean
}
const props = defineProps({
  modelValue: {
    type: Array as PropType<CheckedValue[]>, // 使用 PropType 来指定数组元素的类型
    required: true
  }
})
const arr = computed(() => props.modelValue)

const emit = defineEmits(['change'])
function updateValue(changeTarget: { name: string; checked: boolean }) {
  if (changeTarget.checked) {
    arr.value.forEach((item) => {
      if (item.name === changeTarget.name) {
        item.checked = true
      }
    })
  } else {
    arr.value.forEach((item) => {
      if (item.name === changeTarget.name) {
        item.checked = false
      }
    })
  }
  // 触发 input 事件，将新的值传递给父组件
  emit('change', arr.value)
}
provide('checkedValues', arr.value)
</script>

