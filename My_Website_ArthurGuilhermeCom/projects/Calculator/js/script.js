class Calculator {

    constructor() {
        this.operationValue = document.querySelector("#operationValue");
        this.resultNumber = document.querySelector("#resultNumber");
        this.reset = 0;
    }

// To clear values
    toClearValues() {
        this.operationValue.textContent = "0";
        this.resultNumber.textContent = "0";
    }

    toCheckLastDigit(input, operationValue, reg){
//To study more the methods test() and substr() ------------------------------ 
        if((
            !reg.test(input) &&
            !reg.test(operationValue.substr(operationValue.length - 1))
        )){
            return true
        } else {
            return false
        }

    }

    //Method plus
    plus(n1, n2) {
        return parseFloat(n1) + parseFloat(n2);
    }

    //Method subtraction
    subtraction(n1, n2) {
        return parseFloat(n1) - parseFloat(n2);
    }

    //Method multiplication
    multiplication(n1, n2) {
        return parseFloat(n1) * parseFloat(n2);
    }
    //Method division
    division(n1, n2) {
        return parseFloat(n1) / parseFloat(n2);
    }


    //To update values
    refreshValues(total) {
        this.operationValue.textContent = total;
        this.resultNumber.textContent = total;
    }

    // To resolve operation
    resolution() {
        // To transform a String in Array
        let operationValueArray = (this.operationValue.textContent).split(" ");
        // Result of operation
        let result = 0;
        
        for(let i = 0; i < operationValueArray.length; i++) {
            let operation = 0;
            let actualItem = operationValueArray[i];

            if(actualItem == "x") {
                // Do multiplication
                result = calculator.multiplication(operationValueArray[i - 1], operationValueArray[i + 1]);
                operation = 1;
                // Do division
            } else if(actualItem == "/") {
                result = calculator.division(operationValueArray[i - 1], operationValueArray[i + 1]);
                operation = 1;
                // To check if array has multiplication and division to be done
            } else if(!operationValueArray.includes("x") && !operationValueArray.includes("/")) {
                // add and subtraction
                if(actualItem == "+") {
                    // Do add
                    result = calculator.plus(operationValueArray[i - 1], operationValueArray[i + 1]);
                    operation = 1;
                    // Do subtraction
                } else if (actualItem == "-") {
                    result = calculator.subtraction(operationValueArray[i - 1], operationValueArray[i + 1]);
                    operation = 1;
                }
            }

            //To update values of array to next operation
            if(operation) {
                //Last index in result of operation
                operationValueArray[i - 1] = result;
                // It removes items used to operation
                operationValueArray.splice(i, 2)
                //To update value of index
                i = 0;
            }

        }

        if(result) {
            calculator.reset = 1;
        }


        //To update total
        calculator.refreshValues(result);

    }

    btnPress() {
        let input = this.textContent;
        let operationValue = calculator.operationValue.textContent;
        //To verify if it just has numbers
        var reg = new RegExp('^\\d+$');

        //If it was need to reset, to clear display
        if(calculator.reset && reg.test(input)) {
            operationValue = '0';
        }

        //To clear Property "reset"
        calculator.reset = 0;

        
        // Active method to clear display
        if(input == 'AC') {

            calculator.toClearValues();

        } else if(input == '=') {

            calculator.resolution()

        } 
        
        else {

              //To check if it needs to add or not
                if(calculator.toCheckLastDigit(input, operationValue, reg)) {
                    return false
                }

                //To add space to the operators
                if(!reg.test(input)) {
                    input = ` ${input} `;
                }

                if(operationValue == "0") {
                    if(reg.test(input)) {
                        calculator.operationValue.textContent = input;
                    }
                    
                } else {
                    calculator.operationValue.textContent += input;
                }
        }

    }

}

//Start object
let calculator = new Calculator;

//Start btns
let btns = document.querySelectorAll(".btn");

//Map all buttons
for(let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", calculator.btnPress)
}