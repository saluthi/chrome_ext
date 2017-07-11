import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/delay';

const lookUpHandler = (request, sender, sendResponse) => {
  if(sender.tab && !!request.lookUp){
    fetch('http://www.randomtext.me/api/lorem/h1/10-20')
      .then((response) => response.json())
      .then((json) => {
        const text = json.text_out;
        const definition = text.slice(4, text.length-5);
        sendResponse({definition});
      });
  }
  return true;
}

chrome.runtime.onMessage.addListener(lookUpHandler);