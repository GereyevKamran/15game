const rest = require("./rest/REST");
class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    init = () => {
        this.view.init();

        this.view.startBtnListener(this.startGame);
        this.view.NumbersBtnListener(this.changePlaces);
    };

    saveGame = () => {
        const game = {
            counter: this.model.getCounter(),
            time: this.time,
            db: this.model.getDataBase()
        };

        rest.saveGame(game);
    };

    showGame = () => {
        const games = rest.getAllGames();
        
        
    }

    

    changePlaces = number => {
        const index = this.model.getDataBase().indexOf(Number(number));
        this.model.findEmptyCell(index);
        this.fillCells();
        this.view.showCounter(this.model.getCounter());
        this.win();
    };

    startGame = () => {
        this.model.shuffleDb();
        this.fillCells();
        clearInterval(this.timer);
        this.countTimer();
        this.model.resetCounter();
        this.view.showCounter(this.model.getCounter());
    };

    countTimer = () => {
        let totalSeconds = 0;
        this.timer = setInterval(() => {
            ++totalSeconds;
            let hour = Math.floor(totalSeconds / 3600);
            let minute = Math.floor((totalSeconds - hour * 3600) / 60);
            let seconds = totalSeconds - (hour * 3600 + minute * 60);
            this.time = hour + ':' + minute + ':' + seconds;
            document.querySelector('.header__display-date').innerHTML = this.time;
        }, 1000);
    };

    fillCells = () => {
        this.view.buttonsNumber.innerHTML = '';
        this.model.getDataBase().forEach(element => {
            this.view.createCell(element);
        });
    };

    win = () => {
        if (JSON.stringify(this.model.getDataBase()) === JSON.stringify(this.model.getWinComb())) {
            alert(`Congratulations! Your time is ${this.time}, you have clicked ${this.model.getCounter()} times.`);
            this.startGame();
        }
    };
}

export default Controller;
