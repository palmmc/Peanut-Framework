<template>
  <div class="tooltip" v-if="showTooltip">
    <div class="tooltip-content">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showTooltip: false,
    };
  },
  mounted() {
    this.$el.parentElement.addEventListener("mouseenter", this.show);
    this.$el.parentElement.addEventListener("mouseleave", this.hide);
  },
  beforeDestroy() {
    this.$el.parentElement.removeEventListener("mouseenter", this.show);
    this.$el.parentElement.removeEventListener("mouseleave", this.hide);
  },
  methods: {
    show() {
      this.showTooltip = true;
    },
    hide() {
      this.showTooltip = false;
    },
  },
};
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip-content {
  position: absolute;
  background-color: #333;
  font-size: 14px;
  color: #fff;
  padding: 4px 10px;
  border-radius: 5px;
  z-index: 10;
  bottom: 125%;
  left: 50%;
  transform: translate(-56.2%, -56%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.tooltip:hover .tooltip-content {
  opacity: 1;
}

.tooltip-content::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}
</style>
