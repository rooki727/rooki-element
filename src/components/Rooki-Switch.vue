<template>
  <div
    :class="[
      'd-switch',
      value ? 'is-checked' : '',
      disabled ? 'is-disabled' : '',
      mimicry ? 'is-mimicry' : ''
    ]"
    :aria-checked="value"
    @click="handleClick"
  >
    <span
      class="d-switch__core"
      ref="core"
      :style="{
        'border-color': value ? activeColor : inactiveColor,
        'background-color': value ? activeColor : inactiveColor
      }"
    ></span>
    <!-- 用来接收name -->
    <input type="checkbox" class="d-switch__input" :name="name" />
  </div>
</template>

<script setup lang="ts" name="Rooki-Switch">
const props = defineProps({
  value: {
    type: Boolean,
    default: false,
    required: true
  },
  activeColor: {
    type: String,
    default: '#409eff'
  },
  inactiveColor: {
    default: '#dcdfe6'
  },
  name: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  mimicry: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['input', 'change'])
const handleClick = () => {
  if (props.disabled) return
  emit('input', !props.value)
  emit('change', !props.value)
}
</script>

<style scoped lang="scss">
.d-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .d-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .d-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
  }
  .d-switch__core:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all 0.3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
  }

  &.is-checked .d-switch__core::after {
    left: 100%;
    margin-left: -17px;
  }
  &.is-disabled .d-switch__core {
    cursor: not-allowed;
  }
  &.is-mimicry .d-switch__core {
    box-shadow: inset 4px 2px 6px #cacaca48, inset -4px -2px 6px rgba(255, 255, 255, 0.247);
  }
  &.is-mimicry .d-switch__core::after {
    box-shadow: inset 2px 1px 3px #d9d9d9, inset -2px -1px 3px #ffffff;
  }
}
</style>