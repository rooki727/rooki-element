<template>
  <div class="d-form-item">
    <label class="d-form-item__label" :style="{ width: width }">
      {{ label }}
    </label>
    <div class="d-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="Rooki-Form-Item">
defineProps({
  label: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '80px'
  }
})
</script>

<style scoped lang="scss">
.d-form-item {
  margin-bottom: 22px;
  &::before,
  &::after {
    display: table;
    content: '';
  }
  .d-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .d-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    &::before,
    &::after {
      display: table;
      content: '';
    }
  }
}
</style>