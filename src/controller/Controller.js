class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    
  }

  init = () => {
    this.view.init();
    this.fillCells();
    this.setNumberDisplay();   

    this.view.resetBtnListener(this.resetGame);
    this.view.NumbersBtnListener(this.changePlaces);
    this.view.gameCounter(this.countNumber.bind(this));
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

  setNumberDisplay = () => {
    const number = this.model.getCount();
    this.view.showGameCount(number);
  }

  countNumber = () => {
    this.model.countNumber();
    this.setNumberDisplay();
  }

}

export default Controller;
