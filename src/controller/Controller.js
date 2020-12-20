class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;    
  };

  init = () => {
    this.view.init();
    this.fillCells();
    this.setNumberDisplay(); 
    this.winner();  

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
  };

  winner = () => {
    if(JSON.stringify(this.model.dataBase) === JSON.stringify(this.model.winnerBase)){
        alert('Win')
    }
  };

  

  resetGame = () => {
    this.model.shuffleDb();
    this.fillCells();
    this.countTimer();
  };

  countTimer = () => {
    let totalSeconds = 0;
    setInterval(function(){
      ++totalSeconds;
      let hour = Math.floor(totalSeconds / 3600);
      let minute = Math.floor((totalSeconds - hour * 3600) / 60);
      let seconds = totalSeconds - (hour * 3600 + minute * 60);     
      document.querySelector(".header__display-date").innerHTML = hour + ":" + minute + ":" + seconds;      
    }, 1000)    
  };

  fillCells = () => {
    this.view.buttonsNumber.innerHTML = '';
    this.model.getDataBase().forEach(element => {
      this.view.createCell(element);
    });
  };

  setNumberDisplay = () => {
    const number = this.model.getCount();
    this.view.showGameCount(number);
  };

  countNumber = () => {
    this.model.countNumber();
    this.setNumberDisplay();
  }

}

export default Controller;
