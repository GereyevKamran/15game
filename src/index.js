import "./style.less" 

import View from "./view/View";
import Model from "./model/Model";
import Controller from './controller/Controller';

function init() {
	const view = new View();
	const model = new Model();
	const controller = new Controller(view, model);

	controller.init();
}

init();
