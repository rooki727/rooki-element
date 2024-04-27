<template>
  <div :class="['d-input', showSuffix ? 'suffix' : '']">
    <textarea
      :class="['d-input__textarea', disabled ? 'is-disabled' : '']"
      name=""
      id=""
      cols="30"
      rows="10"
      :value="value"
      :placeholder="placeholder"
      @input="handleInput"
      v-if="type === 'textarea'"
    ></textarea>
    <input
      v-else
      :placeholder="placeholder"
      :type="type"
      :class="['d-input__inner', disabled ? 'is-disabled' : '']"
      :name="name"
      :value="value"
      @input="handleInput"
    />
    <span class="d-input__suffix" v-if="showSuffix">
      <Rooki-Button
        style="border: none"
        v-if="clearable && value"
        :circle="true"
        class="iconfont icon-shurukuangqingkong"
        @click="clearInput"
      ></Rooki-Button>
    </span>
  </div>
</template>

<script setup lang="ts" name="Rooki-Input">
import { computed } from 'vue'
import './assets/font/iconfont.css'
const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: String,
    default: '',
    required: true
  },
  clearable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['input', 'change'])
const handleInput = (e: Event) => {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
    emit('input', e.target.value)
    emit('change', e.target.value)
  }
}
const clearInput = () => {
  emit('input', '')
}

const showSuffix = computed(() => {
  return props.clearable
})
</script>

<style scoped lang="scss">
.d-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .d-input__textarea {
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    padding: 10px 12px;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .d-input__inner {
    appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 30px;
    line-height: 40px;
    outline: none;
    padding: 10px 15px;
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }

    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.d-input.suffix {
  .d-input_inner {
    padding-right: 30px;
  }
  .d-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 30px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 900;
    & .active {
      color: #666;
    }
  }
}
</style>