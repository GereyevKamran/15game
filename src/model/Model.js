class Model {
    constructor() {
        this.dataBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' '];
        this.winComb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' '];
        this.counter = 0;
    }

    getDataBase = () => this.dataBase;
    getWinComb = () => this.winComb;
    getCounter = () => this.counter;

    resetCounter = () => {
        this.counter = 0;
    };

    shuffleDb = () => {
        this.dataBase.sort(() => {
            return Math.random() - 0.5;
        });
    };

    findEmptyCell = index => {
        if (this.dataBase[index - 1] && this.dataBase[index - 1] === ' ' && index % 4 !== 0) {
            [this.dataBase[index], this.dataBase[index - 1]] = [this.dataBase[index - 1], this.dataBase[index]];
            this.counter++;
        } else if (this.dataBase[index + 1] && this.dataBase[index + 1] === ' ' && index % 4 !== 3) {
            [this.dataBase[index], this.dataBase[index + 1]] = [this.dataBase[index + 1], this.dataBase[index]];
            this.counter++;
        } else if (this.dataBase[index - 4] && this.dataBase[index - 4] === ' ') {
            [this.dataBase[index], this.dataBase[index - 4]] = [this.dataBase[index - 4], this.dataBase[index]];
            this.counter++;
        } else if (this.dataBase[index + 4] && this.dataBase[index + 4] === ' ') {
            [this.dataBase[index], this.dataBase[index + 4]] = [this.dataBase[index + 4], this.dataBase[index]];
            this.counter++;
        }
    };
}

export default Model;
