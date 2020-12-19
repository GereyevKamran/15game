class View {
  constructor() {
    this.root = null;
    this.header = null;
    this.startButton = null;
    this.footerButton = null;
    this.mainContainer = null;
    this.buttonsNumber = null;
    this.buttonsHeaderContainer = null;
  }

  init = () => {
    this.createGameForm();
  };

  resetBtnListener = cb => {
    this.resetButton.addEventListener('click', () => {
      cb();
    });
  }

  NumbersBtnListener = cb => {
    this.buttonsNumber.addEventListener('click', (event) => {
      cb(event.target.innerText);
    });
  }
  

  createGameForm = () => {
    this.root = document.getElementById("root");
    this.header = this.createDiv({ className: "main-container__header" });
    this.startButton = this.createButton({
      className: "footer__start-button",
      id: "start_button",
      buttonText: "Start",
    });
    this.resetButton = this.createButton({
      className: "footer__reset-button",
      id: "reset_button",
      buttonText: "Reset",
    });
    this.footer = this.createDiv({
      className: "main-container__footer",
    });
    this.buttonsNumber = this.createDiv({
      className: "buttons-container__buttons-number",
    });
    this.mainContainer = this.createDiv({ className: "root__main-container" });
    this.buttonsHeaderContainer = this.createDiv({
      className: "main-container__buttons-container",
    });

    this.mainContainer.append(this.header);
    this.buttonsHeaderContainer.append(this.buttonsNumber);
    this.mainContainer.append(this.buttonsHeaderContainer);
    this.footer.append(this.startButton);
    this.footer.append(this.resetButton);
    this.mainContainer.append(this.footer);
    this.root.append(this.mainContainer);
  };

  createCell = (element) => {
    const cellButton = this.createButton({
      className: `cell-div__cell-button`,
      id: 'cell-'+ element,
      buttonText: element
    });
     
    const cellDiv = this.createDiv({
      className: "button-container__cell-div",
    });

    cellDiv.append(cellButton);
    this.buttonsNumber.append(cellDiv);
  };

  createDiv = props => {
    const div = document.createElement("div");

    props.className && (div.className = props.className);
    props.id && (div.id = props.id);

    return div;
  };

  createButton = props => {
    const button = document.createElement("button");

    props.className && (button.className = props.className);
    props.buttonText && (button.innerText = props.buttonText);
    props.id && (button.id = props.id);

    return button;
  };
}
export default View;
