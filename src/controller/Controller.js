class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init = () => {
    this.view.init();
    this.fillCells();
    this.view.startButton.addEventListener('click', () => {
      this.model.shuffleDb();
      this.fillCells();
    })
    
  };

  fillCells = () => {
    this.view.buttonsNumber.innerHTML = '';
    this.model.getDataBase().forEach(element => {
      this.view.createCell(element);
    });
  }

}

export default Controller;
