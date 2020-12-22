import './style.less';

import App from require('./App');
import Server from require('./Server');

import View from './view/View';
import Model from './model/Model';
import Controller from './controller/Controller';

function init() {
  const port = 2000 || process.env.PORT;

  
  const view = new View();
  const model = new Model();
  const controller = new Controller(view, model);

  const app = new App(model);
  const server = new Server(port, app);

  controller.init();

  server.start();
}

init();
