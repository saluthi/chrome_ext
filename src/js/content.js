import Vue from 'vue';
import Tooltip from './tooltip/Tooltip.vue';

const activeTooltips = [];

const buildTooltipKiller = (target) => {
  return () => {
    activeTooltips.pop().$destroy();
    target.removeChild(target.childNodes[0]);
  }
}

const displayTooltip = (event, word, content) => {
  const offset =  {x: event.offsetX, y: event.offsetY}
  const div = document.createElement('div');
  event.target.insertBefore(div, event.target.childNodes[0]);
  div.id = 'sh_tooltip';
  const selfDestruct = buildTooltipKiller(event.target);
  activeTooltips.push(new Vue({
    el: '#sh_tooltip',
    render: h => {
      const props = {word, content, offset, selfDestruct};
      return h(Tooltip, {props});
    }
  }));
}

document.addEventListener('dblclick', (event) => {
    const context = event.target.textContent;
    const word = document.getSelection().toString();
    chrome.runtime.sendMessage({lookUp: {word, context}}, (response) => {
      if(!!response)
        displayTooltip(event, word, response.definition);
      else{
        console.log(chrome.runtime.lastError);
      }
    });
  }
);
