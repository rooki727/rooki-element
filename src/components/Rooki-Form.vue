<template>
  <div class="d-form">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="Rooki-Form">
defineProps<{
  model: {
    type: Object
    required: true
  }
}>()
</script>

<style scoped>
</style>