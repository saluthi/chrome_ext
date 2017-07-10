<template>
  <div id="sh_tooltip" :style="offsets">
    <span class="tooltiptext" :class="{active: active}">
      {{content}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'sh_tooltip',
  props: ['active', 'content', 'coord'],
  computed: {
    offsets: function() {
      return {
        top: `${this.coord.y}px`,
        left: `${this.coord.x}px`
      }
    }
  }
}
</script>

<style>
#sh_tooltip {
  position: fixed;
  display: inline-block;
}

.tooltiptext {
  visibility: hidden;
  position: absolute;
  z-index: 1;
  
  background-color: black;
  color: #fff;
  width: 120px;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  top: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltiptext::after {
    content: " ";
    position: absolute;
    bottom: 100%;  /* At the top of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
}

.active {
  visibility: visible;
}
</style>