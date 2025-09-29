const Calculator = {
    /*Dom elements*/
    calculatorBackground: document.querySelector('.calculator-background'),
    calculatorDigits: document.querySelector('.digits'),
    calculatorOperations: document.querySelector('.operations'),
    inputBar: document.querySelector('.input'),

    /*primitive attributes*/
    currentOperation: '',
    /*lockOperation: true,*/

    addition(num1, num2){
        return num1 + num2;
    },

    subtraction(num1, num2){
        return num1 - num2;
    },

    division(num1, num2){
        return num1/num2;
    },

    multiplication(num1, num2){
        return num1 * num2;
    },

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

            newNum.classList.add('num-div');

            threeDigitContainer.appendChild(newNum);

        } 
    },

    formulateExpression(){
        const expArr = this.inputBar.textContent.split(this.currentOperation);

        const num1 = parseFloat(expArr[0]);
        const num2 = parseFloat(expArr[1]);

        let ans = '';

        switch (this.currentOperation){
            case '+':
                ans = this.addition(num1, num2);
                break;
            
            case '-':
                ans = this.subtraction(num1, num2);
                break;

            case 'x':
                ans = this.multiplication(num1, num2);
                break;
            
            case '/':
                ans = this.division(num1, num2);
        }

        return ans;

    },

    displayAnswer(){
        const ans = this.formulateExpression();

        this.inputBar.textContent = ans;
        
    },
    
    displayExpression(exp){
        this.inputBar.textContent += exp;
    },

    clearExpression(){
        this.inputBar.textContent = '';
    },

}

Calculator.buildDigits();



Calculator.calculatorDigits.addEventListener('click', (event) => {
    const target = event.target;

    Calculator.displayExpression(target.textContent);
});

Calculator.calculatorOperations.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id == 'clear'){
        Calculator.clearExpression()
    }

    if (target.id == 'equality'){
        Calculator.displayAnswer();
    }

    else if (!Calculator.lockOperation){
        Calculator.displayExpression(target.textContent);
        Calculator.currentOperation = target.textContent;

    }
});