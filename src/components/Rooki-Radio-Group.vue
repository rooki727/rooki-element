<template>
  <div class="d-radio-group">
    <Rooki-Radio
      v-for="(item, index) in arr"
      :key="index"
      :label="item.label ? item.label : ''"
      :value="item.value ? item.value : null"
      :name="item.name ? item.name : ''"
      :checked="item.checked ? item.checked : false"
      :mimicry="item.mimicry ? item.mimicry : false"
      :color="item.color ? item.color : ' #409eff'"
      @change="updateValue"
    ></Rooki-Radio>
  </div>
</template>

<script setup lang="ts" name="Rooki-Radio-Group">
import { computed, type PropType } from 'vue'

interface radioGroup {
  checked?: Boolean

  label?: String

  value: String | Number

  name?: String

  color?: String

  mimicry?: Boolean
}
const props = defineProps({
  modelValue: {
    type: Array as PropType<radioGroup[]>, // 使用 PropType 来指定数组元素的类型
    required: true
  }
})

const arr = computed(() => props.modelValue)
// lastTarget用于记录上一个点击的model
let lastTargetValue: String | Number

const emit = defineEmits(['change'])
function updateValue(changeTarget: { value: String | Number; checked: Boolean }) {
  if (changeTarget.checked) {
    arr.value.forEach((item) => {
      if (item.value == changeTarget.value) {
        item.checked = true
      }
    })
    arr.value.forEach((item) => {
      if (item.value == lastTargetValue && item.value != changeTarget.value) {
        item.checked = false
      }
    })
    lastTargetValue = changeTarget.value
    // 触发 change 事件，将新的值传递给父组件
    emit('change', changeTarget)
  } else {
    arr.value.forEach((item) => {
      if (item.value == changeTarget.value) {
        item.checked = false
      }
    })
  }
}
</script>

<style scoped>
</style>