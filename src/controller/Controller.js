class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.clickCounter = 0;
  }

  init = () => {
    this.view.init();
    this.fillCells();

    this.view.resetBtnListener(this.resetGame);
    this.view.NumbersBtnListener(this.changePlaces);

  };

  changePlaces = number => {
    const index = this.model.getDataBase().indexOf(Number(number))
    this.model.findEmptyCell(index);
    console.log(this.model.getDataBase())
    console.log(index);
    this.fillCells();
  }

  resetGame = () => {
    this.model.shuffleDb();
    this.fillCells();
  };

  fillCells = () => {
    this.view.buttonsNumber.innerHTML = '';
    this.model.getDataBase().forEach(element => {
      this.view.createCell(element);
    });
  }

}

export default Controller;
