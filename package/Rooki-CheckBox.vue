<template>
  <label
    :class="[
      'd-checkbox',
      isChecked ? 'is-checked' : '',
      disabled ? 'is-disabled' : '',
      mimicry ? 'is-mimicry' : ''
    ]"
  >
    <span class="d-checkbox__input">
      <span
        class="d-checkbox__inner"
        :style="{
          backgroundColor: isChecked ? activeColor : '#fff',
          borderColor: isChecked ? activeColor : '#dcdfe6'
        }"
      ></span>
      <input
        type="checkbox"
        class="d-checkbox__original"
        :name="label"
        :value="value"
        v-model="model"
        :disabled="disabled"
        @input="updateValue($event)"
      />
    </span>
    <span class="d-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts" setup name="Rooki-CheckBox">
import { ref, computed } from 'vue'

const props = defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String,
    default: '#409eff'
  },
  mimicry: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['change'])

const model = ref(props.checked)
const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.checked) {
    model.value = false
  } else {
    model.value = true
  }

  let changeTarget = { value: target.value, checked: target.checked }
  emit('change', changeTarget)
}

const isChecked = computed(() => {
  // 检查checkedValues是否已定义，如果未定义则返回false

  return model.value
})
</script>
<style scoped lang="scss">
.d-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .d-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .d-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        width: 3px;
        position: absolute;
        left: 4px;
        top: 1px;
        transform: rotate(45deg) scaleY(1);
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }

    .d-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .d-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

.d-checkbox:last-of-type {
  margin-right: 0;
}
.d-checkbox.is-checked {
  .d-checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;
    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }
  .d-checkbox__label {
    color: #409eff;
  }
}

.d-checkbox.is-disabled {
  .d-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }
  span.d-checkbox__label {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}

.d-checkbox.is-mimicry {
  .d-checkbox__inner {
    box-shadow: inset 3px 2px 4px #cacaca48, inset -3px -2px 4px rgba(255, 255, 255, 0.377);
  }
}
</style>