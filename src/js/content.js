import Vue from 'vue'
import Tooltip from './tooltip/Tooltip.vue'

const init = () => {
  const div = document.createElement('div')
  document.body.appendChild(div);
  div.id = 'sh_tooltip'
  return new Vue({
    el: '#sh_tooltip',
    data: {
      active: false,
      content: '',
      coord: {x: 0, y: 0}
    },
    template: '<Tooltip :active="active" :content="content" :coord="coord"/>',
    components: { Tooltip }
  });
}


const displayDefinition = (position, definition) => {
  shTooltip.active = true;
  shTooltip.content = definition;
  shTooltip.coord.x = position.x;
  shTooltip.coord.y = position.y;
}

document.addEventListener('dblclick', (event) => {
    const context = event.target.textContent;
    const position = {x: event.screenX, y: event.screenY}
    const word = document.getSelection().toString();
    chrome.runtime.sendMessage({lookUp: {word, context}}, (response) => {
      if(!!response)
        displayDefinition(position, response.definition);
      else{
        console.log(chrome.runtime.lastError)
      }
    });
  }
);

const shTooltip = init();