<template>
  <button :class="['gek-button', type, size]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GekButton',
  props: {
    type: String,
    size: String,
  }
})
</script>