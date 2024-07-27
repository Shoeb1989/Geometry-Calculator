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


