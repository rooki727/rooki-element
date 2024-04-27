<template>
  <transition name="dialog-fade">
    <!-- 遮罩 -->
    <div class="d-dialog_wrapper" v-show="visiable" @click.self="closeDialog">
      <div
        ref="dialog"
        :class="['d-dialog', mimicry ? 'is-mimicry' : '']"
        :style="{ width: width, 'margin-top': top }"
      >
        <div class="d-dialog_header">
          <!-- title支持slot插槽 -->
          <slot name="title">
            <span class="d-dialog_title">{{ title }}</span>
          </slot>
          <Rooki-Button
            :circle="true"
            class="d-dialog_headerbtn iconfont icon-guanbi"
            @click="closeDialog"
          ></Rooki-Button>
        </div>
        <div class="d-dialog_body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="d-dialog_footer" v-if="$slots.footer">
          <!-- footer插槽 -->
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts" name="Rooki-Dialog">
import { ref } from 'vue'
import '../assets/font/iconfont.css'
const dialog = ref(null)
defineProps({
  title: {
    type: String,
    default: '提示'
  },
  width: {
    type: String,
    default: '60%'
  },
  top: {
    type: String,
    default: '15vh'
  },
  visiable: {
    type: Boolean,
    default: false
  },
  mimicry: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close'])
const closeDialog = () => {
  emit('close', false)
}
</script>

<style scoped lang="scss">
.d-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: -3vh;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .d-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    &_header {
      padding: 20px 20px 10px;
      display: flex;
      justify-content: space-between;
      .d-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .d-dialog_headerbtn {
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .d-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;

      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;

      ::v-deep .d-button:first-child {
        margin-right: 20px;
      }
    }
  }

  .d-dialog.is-mimicry {
    border-radius: 12px;
    box-shadow: inset 7px 14px 23px #dadada, inset -7px -14px 23px #eeeeee;
  }
}
.dialog-fade-enter-active {
  animation: fade 0.5s;
}

.dialog-fade-leave-active {
  animation: fade 0.39s reverse;
}
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(-3vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>