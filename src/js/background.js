import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

const lookUpHandler = (request, sender, sendResponse) => {
  if(sender.tab && !!request.lookUp){
    Observable.of('Placeholer definition!')
      .delay(1000)
      .subscribe((definition) => sendResponse({definition}));
  }
  return true;
}

chrome.runtime.onMessage.addListener(lookUpHandler);