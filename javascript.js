const calculator = {
    calculatorBackground: document.querySelector('.calculator-background'),
    calculatorDigits: document.querySelector('.digits'),


    addition(){},
    subtraction(){},
    division(){},
    multiplication(){},

    buildDigits(){
        let threeDigitContainer;

        for (let i = 0; i<10; i++){
            if (i%3 == 0){
                threeDigitContainer = document.createElement('div');
                threeDigitContainer.classList.add('three-digit-container')

                this.calculatorDigits.appendChild(threeDigitContainer);
            }
            
            const newNum = document.createElement('div');
            newNum.textContent = i;

            newNum.classList.add('num-div')

            threeDigitContainer.appendChild(newNum);

        } 
    }

}

calculator.buildDigits();

