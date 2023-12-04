function calc() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let operation = document.getElementById('operation').value;

    fetch("scripts/index.php?n1=" + number1 + "&n2=" + number2 + "&op=" + operation)
        .then(response => response.text())
        .then(textString => {
            let resultField = document.querySelector(".result");
            resultField.innerHTML = "Результат: " + textString
        })
}

function ready() {
    let number1div = document.createElement('div');
    number1div.classList.add("number1");
    document.body.append(number1div);

    let number1divText = document.createTextNode('Введите первое число');
    number1div.append(number1divText);

    let input1Field = document.createElement("input");
    input1Field.name = "number1Field";
    input1Field.id = "number1";
    number1div.append(input1Field);

    let operationLabel = document.createElement('label');
    let operationSelect = document.createElement('select');
    operationSelect.name = 'operation';
    operationSelect.id = 'operation';

    let optionMultiplication = document.createElement("option");
    optionMultiplication.value = 'multiplication';
    optionMultiplication.text = 'Умножить'
    let optionDivision = document.createElement("option");
    optionDivision.value = 'division ';
    optionDivision.text = 'Разделить';
    let optionAddition = document.createElement("option");
    optionAddition.value = 'addition';
    optionAddition.text = 'Сложить'
    let optionSubtraction = document.createElement("option");
    optionSubtraction.value = 'subtraction';
    optionSubtraction.text = 'Вычесть'


    document.body.append(operationLabel);
    operationLabel.append(operationSelect);
    operationSelect.append(optionMultiplication);
    operationSelect.append(optionDivision);
    operationSelect.append(optionAddition);
    operationSelect.append(optionSubtraction);

    let number2div = document.createElement('div');
    number2div.classList.add("number2");
    document.body.append(number2div);

    let number2divText = document.createTextNode('Введите второе число');
    number2div.append(number2divText);

    let input2Field = document.createElement("input");
    input2Field.name = "number2Field";
    input2Field.id = "number2";
    number2div.append(input2Field);


    let buttonDiv = document.createElement('div');
    let calcButton = document.createElement("button");
    document.body.append(buttonDiv);
    buttonDiv.append(calcButton);
    calcButton.addEventListener('click', calc);
    let calcButtonText = document.createTextNode('Вычислить');
    calcButton.append(calcButtonText);

    let resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
    document.body.append(resultDiv);

}

document.addEventListener("DOMContentLoaded", ready);