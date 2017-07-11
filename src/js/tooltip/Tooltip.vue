<template>
  <div id="sh_tooltip" :style="offsets">
    <div class="tooltiptext">
      <a class="quit" @click="selfDestruct()">x</a>
      <h4 class="word">{{word}}</h4>
      {{content}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'sh_tooltip',
  props: ['word', 'content', 'offset', 'selfDestruct'],
  computed: {
    offsets: function() {
      return {
        top: `${this.offset.y}px`,
        left: `${this.offset.x}px`
      }
    }
  },
}
</script>

<style>
#sh_tooltip {
  position: relative;
  display: inline-block;
}

.tooltiptext {
  position: absolute;
  z-index: 500;
  
  background-color: #fffaa0;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
  /*color: #fff;*/
  width: 200px;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  top: 100%;
  left: 50%;
  margin-left: -110px;
}

.tooltiptext::after {
    content: " ";
    position: absolute;
    bottom: 100%;  /* At the top of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #fffaa0 transparent;
}

</style>