class View {
    constructor() {
        this.root = null;
    }

    init = () => {
        this.createGameForm();
    };

    startBtnListener = cb => {
        this.resetButton.addEventListener('click', () => {
            cb();
        });
    };

    saveBtnListener = cb => {
        this.saveButton.addEventListener('click', () => {
            cb();
        });
    }

    NumbersBtnListener = cb => {
        this.buttonsNumber.addEventListener('click', event => {
            cb(event.target.innerText);
        });
    };


    createGameForm = () => {
        this.root = document.getElementById('root');
        this.header = this.createDiv({ className: 'main-container__header' });
        this.date = this.createDiv({
            divText: '0:0:0',
            className: 'header__display-date',
        });
        this.counter = this.createDiv({
            divText: '0',
            className: 'header__display-number',
        });
        this.resetButton = this.createButton({
            className: 'footer__reset-button',
            id: 'reset_button',
            buttonText: 'Start',
        });
        this.saveButton = this.createButton({
            className: 'footer__save-button',
            id: 'save_button',
            buttonText: 'Save',
        });
        this.footer = this.createDiv({
            className: 'main-container__footer',
        });
        this.buttonsNumber = this.createDiv({
            className: 'buttons-container__buttons-number',
        });
        this.mainContainer = this.createDiv({ className: 'root__main-container' });
        this.buttonsHeaderContainer = this.createDiv({
            className: 'main-container__buttons-container',
        });
        const historyContainer = this.createDiv({
          className: 'root__history-container'
      });
      this.gamesList = this.createUl({
          className: 'history-container__games-list'
      });
        
        this.header.append(this.date);
        this.header.append(this.counter);
        this.mainContainer.append(this.header);
        this.buttonsHeaderContainer.append(this.buttonsNumber);
        this.mainContainer.append(this.buttonsHeaderContainer);
        this.footer.append(this.resetButton);
        this.footer.append(this.saveButton);
        this.mainContainer.append(this.footer);
        this.root.append(this.mainContainer);
        historyContainer.append(this.gamesList);
        this.root.append(historyContainer);
    };

    createHistoryList = (game) => {
      this.gamesList.innerHTML = "";
       
        game.forEach( element => {
          const gameLi = this.createLi({id: element.id, text:`${ element.id}. time: ${element.time} click: ${element.counter}`});
          this.gamesList.append(gameLi);
        });
              
    }

    createCell = element => {
        this.cellButton = this.createButton({
            className: `cell-div__cell-button`,
            id: 'cell-' + element,
            buttonText: element,
        });

        this.cellDiv = this.createDiv({
            className: 'button-container__cell-div',
        });

        this.cellDiv.append(this.cellButton);
        this.buttonsNumber.append(this.cellDiv);
    };

    createDiv = props => {
        const div = document.createElement('div');

        props.className && (div.className = props.className);
        props.id && (div.id = props.id);
        props.innerHTML && (div.innerHTML = props.innerHTML);
        props.divText && (div.innerText = props.divText);

        return div;
    };

    createUl = props => {
        const ul = document.createElement('ul');

        props.className && (ul.className = props.className);
        props.id && (ul.id = props.id);

        return ul;
    };

    createLi = props => {
      const li = document.createElement('li');

      props.id && (li.id = props.id);
      props.text && (li.innerText = props.text);
      props.className && (li.className = props.className);

      return li;
    }

    createButton = props => {
        const button = document.createElement('button');

        props.className && (button.className = props.className);
        props.buttonText && (button.innerText = props.buttonText);
        props.id && (button.id = props.id);

        return button;
    };

    showCounter = number => {
        this.counter.innerText = number;
    };
}

export default View;
