<template>
  <label :class="['d-radio', isChecked ? 'is-checked' : '']">
    <span class="d-radio__input">
      <span
        :class="['d-radio__inner', mimicry ? 'is-mimicry' : '']"
        :style="{
          borderColor: color && isChecked ? color : '#dcdfe6',
          backgroundColor: color && isChecked ? color : '#ffffff'
        }"
      ></span>
      <input
        type="radio"
        class="d-radio__original"
        :value="value"
        :name="name"
        v-model="isSelected"
        @click="updateValue"
      />
    </span>
    <span class="d-radio__label"
      ><slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts" name="Rooki-Radio">
import { computed, ref, watch } from 'vue'

const props = defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  label: {
    type: [String],
    default: ''
  },
  value: {
    type: [String, Number],
    default: null
  },
  name: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#409eff'
  },
  mimicry: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['change'])
const model = computed(() => props.checked)

const isSelected = ref(false)
// 监听model变化，使得新选择一个单选框时变化
watch(
  () => model.value,
  (newValue) => {
    if (newValue) {
      isSelected.value = true
    } else {
      isSelected.value = false
    }
  },
  {
    deep: true
  }
)
const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  isSelected.value = !isSelected.value
  let changeTarget = { value: target.value, checked: isSelected.value }
  emit('change', changeTarget)
}
const isChecked = computed(() => {
  return isSelected.value
})
</script>

<style scoped lang="scss">
.d-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .d-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .d-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;

      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .d-radio__inner.is-mimicry {
      box-shadow: inset 4px 2px 6px #cacaca48, inset -4px -2px 6px rgba(255, 255, 255, 0.377);
    }
    .d-radio__inner:after {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
    }
    .d-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .d-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.d-radio.is-checked {
  .d-radio__input {
    .d-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .d-radio__label {
    color: #409eff;
  }
}
</style>