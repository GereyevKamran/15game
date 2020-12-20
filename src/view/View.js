class View {
  constructor() {
    this.root = null;
    this.date = null;
    this.header = null;
    this.number = null;
    this.counter = null;
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
    this.date = this.createDiv({
      divText: '0:0:0',
      className: 'header__display-date',
    });
    this.number = this.createDiv({
      divText: '0',
      className: 'header__display-number',
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

    this.header.append(this.date);
    this.header.append(this.number);
    this.mainContainer.append(this.header);
    this.buttonsHeaderContainer.append(this.buttonsNumber);
    this.mainContainer.append(this.buttonsHeaderContainer);
    this.footer.append(this.resetButton);
    this.mainContainer.append(this.footer);
    this.root.append(this.mainContainer);
  };

  createCell = (element) => {
    this.cellButton = this.createButton({
      className: `cell-div__cell-button`,
      id: 'cell-'+ element,
      buttonText: element
    });
     
    this.cellDiv = this.createDiv({
      className: "button-container__cell-div",
    });

    this.cellDiv.append(this.cellButton);
    this.buttonsNumber.append(this.cellDiv);
  };

  createDiv = props => {
    const div = document.createElement("div");

    props.className && (div.className = props.className);
    props.id && (div.id = props.id);
    props.innerHTML && ( div.innerHTML = props.innerHTML);
    props.divText && (div.innerText = props.divText)
    

    return div;
  };

  createButton = props => {
    const button = document.createElement("button");

    props.className && (button.className = props.className);
    props.buttonText && (button.innerText = props.buttonText);
    props.id && (button.id = props.id);

    return button;
  };

  gameCounter = cb => {
    this.buttonsHeaderContainer.addEventListener('click', () => {
      cb()
    })
  };

  showGameCount = number => {
    this.number.innerText = number;
  };
}
export default View;
