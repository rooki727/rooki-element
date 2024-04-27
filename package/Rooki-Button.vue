<template>
  <button
    :class="[
      'd-button',
      `d-button--${buttonProps.type}`,
      buttonProps.mimicry ? 'is-mimicry' : '',
      buttonProps.plain ? 'is-plain' : '',
      buttonProps.round ? 'is-round' : '',
      buttonProps.circle ? 'is-circle' : '',
      buttonProps.disabled ? 'is-disabled' : ''
    ]"
    :disabled="buttonProps.disabled"
    @click="handleClick"
  >
    <div class="mask" v-if="buttonProps.disabled"></div>
    <i
      :class="['iconfont', buttonProps.icon ? `'icon-${buttonProps.icon}'` : '']"
      v-if="Array.isArray(buttonProps.icon)"
    ></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup name="Rooki-Button">
import './assets/font/iconfont.css'
const emit = defineEmits(['click'])
interface Props {
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  mimicry?: boolean
  plain?: boolean
  round?: boolean
  circle?: boolean
  icon?: 'bianji' | 'guanbi' | 'shanchu' | 'tianjia'
  disabled?: boolean
}
const buttonProps: Props = defineProps<Props>()

function handleClick(payload: MouseEvent): void {
  // Your click handling logic here
  emit('click', payload)
}
</script>

<style scoped lang="scss">
$normal-color: #fff;
$normal-active-color: #409eff;
$primary-color: #409eff;
$primary-active-color: #66b1ff;
$info-color: #909399;
$info-active-color: #a6a9ad;
$success-color: #4da522;
$success-active-color: #68a848;
$warning-color: #e89d2c;
$warning-active-color: #f0ad48;
$danger-color: #f14949;
$danger-active-color: #f46b6b;

.d-button {
  display: inline-block;
  position: relative;
  font-family: 'PingFang SC', 'Microsoft Yahei', sans-serif;
  line-height: 1;
  cursor: pointer;
  background-color: $normal-color;
  border: 1px solid #dcdfe6;
  white-space: nowrap;
  color: #606266;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: 500;
  // 禁止文字被选中
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 6px 16px;
  font-size: 14px;
  border-radius: 5px;
  &:hover,
  &:focus {
    color: $normal-active-color;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.d-button--primary {
  color: #fff;
  background-color: $primary-color;
  border-color: $primary-color;
  //   box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
  &:hover,
  &:focus {
    background: $normal-active-color;
    background-color: $normal-active-color;
    color: #fff;
  }
}
.d-button--success {
  color: #fff;
  background-color: $success-color;
  border-color: $success-color;
  &:hover,
  &:focus {
    background: $success-active-color;
    background-color: $success-active-color;
    color: #fff;
  }
}

.d-button--info {
  color: #fff;
  background-color: $info-color;
  border-color: $info-color;
  &:hover,
  &:focus {
    background: $info-active-color;
    background-color: $info-active-color;
    color: #fff;
  }
}
.d-button--warning {
  color: #fff;
  background-color: $warning-color;
  border-color: $warning-color;
  &:hover,
  &:focus {
    background: $warning-active-color;
    background-color: $warning-active-color;
    color: #fff;
  }
}
.d-button--danger {
  color: #fff;
  background-color: $danger-color;
  border-color: $danger-color;
  &:hover,
  &:focus {
    background: $danger-active-color;
    background-color: $danger-active-color;
    color: #fff;
  }
}

// 拟态
.d-button.is-mimicry {
  box-shadow: inset 3px 6px 10px #ccc, inset -3px -7px 10px #fff;
}

.d-button--primary.is-mimicry {
  box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
}
.d-button--info.is-mimicry {
  box-shadow: inset 3px 6px 10px #73767a, inset -3px -7px 10px #adb0b8;
}
.d-button--success.is-mimicry {
  box-shadow: inset 3px 6px 10px #6aa54e, inset -3px -7px 10px #a0f774;
}
.d-button--warning.is-mimicry {
  box-shadow: inset 3px 6px 10px #bc914f, inset -3px -7px 10px #ffd977;
}
.d-button--danger.is-mimicry {
  box-shadow: inset 3px 6px 10px #c45656, inset -3px -7px 10px #ff8282;
}

// 朴素按钮

.d-button.is-plain {
  box-shadow: unset;
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.d-button--primary.is-plain {
  box-shadow: unset;
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.d-button--success.is-plain {
  box-shadow: unset;
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.d-button--info.is-plain {
  box-shadow: unset;
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.d-button--warning.is-plain {
  box-shadow: unset;
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.d-button--danger.is-plain {
  box-shadow: unset;
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round
.d-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// 圆形按钮
.d-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 让图标和文字之间空开
.d-button [class*='fa-'] + span {
  margin-left: 5px;
}
// 禁用
.d-button.d-button.is-disabled .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(148, 146, 146, 0.39);
  left: 0;
  top: 0;
  box-shadow: 2px 2px 3px rgba(216, 213, 213, 0.3);
  border-radius: 4px;
  z-index: 100;
}
.d-button.is-round .mask {
  border-radius: 20px;
}

.d-button.is-circle .mask {
  border-radius: 50%;
}
.d-button.is-disabled {
  cursor: no-drop;
}
</style>