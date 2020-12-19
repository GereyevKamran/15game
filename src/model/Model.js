class Model {
  constructor() {
    this.dataBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
  }

  getDataBase = () => this.dataBase;

  shuffleDb = () => {
    this.dataBase.sort(() => {
      return Math.random() - 0.5;
    });
  }
}

export default Model;
