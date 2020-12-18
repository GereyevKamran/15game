class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init = () => {
    this.view.init();
    // this.showCountInHeader();
    // this.view.incrementBtnClick(this.increment.bind(this));
  };

  // showCountInHeader = () => {
  //   const number = this.model.getCount();
  //   this.view.showCounter(number);
  // }

  // increment = () => {
  //   this.model.increment();
  //   this.showCountInHeader();
  // }

  incrementDate = () => {
    this.model.setData();
  }
}

export default Controller;
