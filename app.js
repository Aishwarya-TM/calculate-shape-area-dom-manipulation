const app = document.getElementById('app');

function loadShapes() {
    app.innerHTML = ''; 

    const shapeContainer = document.createElement('div');
    shapeContainer.classList.add('shape-container');

    const triangle = document.createElement('div');
    triangle.classList.add('shape', 'triangle');
    triangle.id = 'triangle';
    triangle.addEventListener('click', () => selectShape('triangle'));
    shapeContainer.appendChild(triangle);

    const square = document.createElement('div');
    square.classList.add('shape', 'square');
    square.id = 'square';
    square.addEventListener('click', () => selectShape('square'));
    shapeContainer.appendChild(square);

    const circle = document.createElement('div');
    circle.classList.add('shape', 'circle');
    circle.id = 'circle';
    circle.addEventListener('click', () => selectShape('circle'));
    shapeContainer.appendChild(circle);

    app.appendChild(shapeContainer);
}

function selectShape(shape) {
    app.innerHTML = ''; 

    const selectedShape = document.createElement('div');
    selectedShape.classList.add('shape', shape, 'highlight');
    selectedShape.id = shape;
    app.appendChild(selectedShape);

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const param1 = document.createElement('input');
    param1.type = 'text';
    param1.classList.add('text');
    param1.id = 'param1';

    const param2 = document.createElement('input');
    param2.type = 'text';
    param2.classList.add('text');
    param2.id = 'param2';

    if (shape === 'triangle') {
        param1.placeholder = 'Enter base';
        param2.placeholder = 'Enter height';
        param2.style.display = 'block';
    } else if (shape === 'square') {
        param1.placeholder = 'Enter side length';
        param2.style.display = 'none'; 
    } else if (shape === 'circle') {
        param1.placeholder = 'Enter radius';
        param2.style.display = 'none'; 
    }

    inputContainer.appendChild(param1);
    inputContainer.appendChild(param2);

    const calculateBtn = document.createElement('button');
    calculateBtn.innerText = 'Calculate';
    calculateBtn.addEventListener('click', () => calculateArea(shape, param1.value, param2.value));
    app.appendChild(inputContainer);
    app.appendChild(calculateBtn);

    const goBackBtn = document.createElement('button');
    goBackBtn.innerText = 'Go Back';
    goBackBtn.addEventListener('click', loadShapes);
    app.appendChild(goBackBtn);
}

function calculateArea(shape, param1, param2) {
    let result = 0;

    if (shape === 'triangle') {
        const base = parseFloat(param1);
        const height = parseFloat(param2);
        if (!isNaN(base) && !isNaN(height)) {
            result = 0.5 * base * height;
        } else {
            alert('Please enter valid numbers for base and height');
            return;
        }
    } else if (shape === 'square') {
        const side = parseFloat(param1);
        if (!isNaN(side)) {
            result = side * side;
        } else {
            alert('Please enter a valid number for side length');
            return;
        }
    } else if (shape === 'circle') {
        const radius = parseFloat(param1);
        if (!isNaN(radius)) {
            result = Math.PI * radius * radius;
        } else {
            alert('Please enter a valid number for radius');
            return;
        }
    }

    displayResult(shape, result);
}

function displayResult(shape, area) {
    app.innerHTML = ''; 
    const resultShape = document.createElement('div');
    resultShape.classList.add('shape', shape, 'highlight');
    resultShape.id = shape;

    const resultOutput = document.createElement('input');
    resultOutput.type = 'text';
    resultOutput.classList.add('text');
    resultOutput.value = `Area: ${area.toFixed(2)}`;
    resultOutput.disabled = true;

    const goBackBtn = document.createElement('button');
    goBackBtn.innerText = 'Go Back';
    goBackBtn.addEventListener('click', loadShapes);

    app.appendChild(resultShape);
    app.appendChild(resultOutput);
    app.appendChild(goBackBtn);
}

window.onload = loadShapes;
