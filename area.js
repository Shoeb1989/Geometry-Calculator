function calculateTrangleArea(){
    const baseField = document.getElementById('Triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);


    const heightField = document.getElementById('Triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);


    const area = 0.5 * base * height;
    console.log(area)

    const areaSpan = document.getElementById('Triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    const rectangleArea = document.getElementById('Rectangle-width');
    const RectangleValueText = rectangleArea.value;
    const width = parseFloat(RectangleValueText);
    console.log(width);

    const RectangleLength = document.getElementById('Rectangle-length');
    const RectangleValue = RectangleLength.value;
    const length = parseFloat(RectangleValue);
    console.log(length);

    const cm = width * length;
    console.log(cm);

    const cmspan = document.getElementById('Rectangle-area');
    cmspan.innerText = cm;
}

function calculateparallelogramArea(){
    const base = getInputValue('parallelogram-base');

    const height = getInputValue('parallelogram-height');

    const area = base * height;
    setElementInnerText('parallelogram-area', area);

}

function getInputValue(fieldID){
    const inputField = document.getElementById(fieldID);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementID){
    const element = document.getElementById(elementID);
    element.innerText = area;
}


function calculateRombusArea(){
    const baseField3 = document.getElementById('d1-base');
    const baseValueText3 = baseField3.value;
    const base3 = parseFloat(baseValueText3);
    console.log(base3);


    const heightField3 = document.getElementById('d2-height');
    const heightValueText3 = heightField3.value;
    const height3 = parseFloat(heightValueText3);
    console.log(height3);


    const area3 = 0.5 * base3 * height3;
    console.log(area3)

    const areaSpan3 = document.getElementById('d-area');
    areaSpan3.innerText = area3;
}

function calculatepentagonArea(){
    const baseField2 = document.getElementById('PEN-base');
    const baseValueText2 = baseField2.value;
    const base2 = parseFloat(baseValueText2);
    console.log(base2);


    const heightField2 = document.getElementById('PEN-height');
    const heightValueText2 = heightField2.value;
    const height2 = parseFloat(heightValueText2);
    console.log(height2);


    const area2 = 0.5 * base2 * height2;
    console.log(area2)

    const areaSpan2 = document.getElementById('PEN-area');
    areaSpan2.innerText = area2;
}

function calculateellipseArea(){
    const baseField1 = document.getElementById('E-base');
    const baseValueText1 = baseField1.value;
    const base1 = parseFloat(baseValueText1);
    console.log(base1);


    const heightField1 = document.getElementById('E-height');
    const heightValueText1 = heightField1.value;
    const height1 = parseFloat(heightValueText1);
    console.log(height1);


    const area1 = 3.14 * base1 * height1;
    console.log(area1)

    const areaSpan1 = document.getElementById('pi-area');
    areaSpan1.innerText = area1;
}
