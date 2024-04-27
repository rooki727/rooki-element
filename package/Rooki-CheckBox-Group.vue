<template>
  <div>
    <Rooki-CheckBox
      v-for="(item, index) in arr"
      :key="index"
      :label="item.label ? item.label : ''"
      :value="item.value ? item.value : ''"
      :checked="item.checked ? item.checked : false"
      :disabled="item.disabled ? item.disabled : false"
      :activeColor="item.activeColor ? item.activeColor : '#409eff'"
      :mimicry="item.mimicry ? item.mimicry : false"
      @change="updateValue"
    />
  </div>
</template>
<script lang="ts" setup name="Rooki-CheckBox-Group">
import { computed, type PropType } from 'vue'

// 定义父组件传递的数据结构的接口
interface CheckedValue {
  label: string
  value: string
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
function updateValue(changeTarget: { value: string; checked: boolean }) {
  if (changeTarget.checked) {
    arr.value.forEach((item) => {
      if (item.value === changeTarget.value) {
        item.checked = true
      }
    })
  } else {
    arr.value.forEach((item) => {
      if (item.value === changeTarget.value) {
        item.checked = false
      }
    })
  }
  // 触发 input 事件，将新的值传递给父组件
  emit('change', arr.value)
}
</script>

