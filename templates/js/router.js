import * as inbox from './../../app/inbox.js';
import * as all from './../../app/all.js';

const loadPage = async ev => {
  switch (window.location.hash) {
    case '#inbox':
      inbox.ini();
      break;
    case '#all':
      all.ini();
      break;
    default:
      window.location.hash = 'inbox';
  }
};

window.addEventListener('popstate', loadPage);

loadPage();