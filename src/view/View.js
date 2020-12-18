class View {
  constructor() {
    this.root = null;
    this.header = null;
    this.startButton = null;
    this.footerButton = null;
    this.mainContainer = null;
    this.buttonsNumber = null;
    this.buttonsHeaderContainer = null;
    this.init();
  }

  init = () => {
    this.createGameForm();
    this.startGame();
  };

  createGameForm = () => {
    this.root = document.getElementById("root");
    this.header = this.createDiv({ innerText: this.header, className: "main-container__header" });
    this.startButton = this.createButton({
      className: "footer-button__start__button",
      buttonText: "Start",
    });
    this.footerButton = this.createDiv({
      className: "main-container__footer__button",
    });
    this.buttonsNumber = this.createDiv({
      className: "buttons-container__buttons-number",
    });
    this.mainContainer = this.createDiv({ className: "root__main-container" });
    this.buttonsHeaderContainer = this.createDiv({
      className: "main-container__buttons-container",
    });

    for (let i = 0; i <= 15; i ++) {

      const cellButton = this.createButton({
        className: `cell-div__cell-button cell_${i}`,
        buttonText: i
      });
       
      const cellDiv = this.createDiv({
        className: "button-container__cell-div",
      });

      cellDiv.append(cellButton);
      this.buttonsNumber.append(cellDiv);
    };

    this.mainContainer.append(this.header);
    this.buttonsHeaderContainer.append(this.buttonsNumber);
    this.mainContainer.append(this.buttonsHeaderContainer);
    this.mainContainer.append(this.footerButton);
    this.footerButton.append(this.startButton);
    this.root.append(this.mainContainer);
  };

  createDiv = (props) => {
    const div = document.createElement("div");

    props.className && (div.className = props.className);
    props.innerText && (div.innerText = props.innerText);
    return div;
  };

  createButton = (props) => {
    const button = document.createElement("button");

    props.className && (button.className = props.className);
    props.buttonText && (button.innerText = props.buttonText);

    return button;
  };

  countTimer = () => {
    let totalSeconds = 0;
    setInterval(function(){
      ++totalSeconds;
      let hour = Math.floor(totalSeconds / 3600);
      let minute = Math.floor((totalSeconds - hour * 3600) / 60);
      let seconds = totalSeconds - (hour * 3600 + minute * 60);
      this.header = hour + ":" + minute + ":" + seconds;
      console.log(this.header = hour + ":" + minute + ":" + seconds)

    }, 1000)
  }

  startGame = () =>{
    this.startButton.addEventListener("click", this.countTimer, {once:true})
  }

  // incrementBtnClick = cb => {
  //   this.startButton.addEventListener("click", () => {
  //     cb()
  //   })
  // }

  // showCounter = number => {
  //   this.header.innerText = number;
  // }

}
export default View;
