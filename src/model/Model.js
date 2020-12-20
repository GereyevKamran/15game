class Model {
  constructor() {
    this.dataBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' '];
    this.winnerBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ' '];
    this.count = 0;
  };


  getDataBase = () => this.dataBase;
  getCount = () => this.count;  
  
  countNumber = () => {
    this.count++;
  };


  shuffleDb = () => {
    this.dataBase.sort(() => {
      return Math.random() - 0.5;
    });
  };

  findEmptyCell = (index) => {
    if(this.dataBase[index - 1] && this.dataBase[index - 1] === ' ' && (index % 4 !== 0)){
      [this.dataBase[index], this.dataBase[index - 1]] = [this.dataBase[index - 1], this.dataBase[index]];
    } else if (this.dataBase[index + 1] && this.dataBase[index + 1] === ' ' && (index % 4 !== 3)){
      [this.dataBase[index], this.dataBase[index + 1]] = [this.dataBase[index + 1], this.dataBase[index]];
    } else if (this.dataBase[index - 4] && this.dataBase[index - 4] === ' '){
      [this.dataBase[index], this.dataBase[index - 4]] = [this.dataBase[index - 4], this.dataBase[index]];
    } else if (this.dataBase[index + 4] && this.dataBase[index + 4] === ' '){
      [this.dataBase[index], this.dataBase[index + 4]] = [this.dataBase[index + 4], this.dataBase[index]];
    }
  };
}

export default Model;
