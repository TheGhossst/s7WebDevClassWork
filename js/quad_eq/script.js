document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const a = Number(document.getElementById('a-input').value);
    const b = Number(document.getElementById('b-input').value);
    const c = Number(document.getElementById('c-input').value);

    const expression = `${a}x^2 + ${b}x + ${c}`;
    if (!document.getElementById('expression')){
        const expressionEl = document.createElement('p');
        expressionEl.id = 'expression';
        expressionEl.textContent = `The quadratic expression is ${expression}`;
        document.getElementById('container').appendChild(expressionEl);
    }
    else{
        document.getElementById('expression').textContent = `The quadratic expression is ${expression}`
    }
    const det = b * b - 4 * a * c;

    if (det === 0) {
        console.log("Roots are real and identical");

        const roots = [-b / (2 * a), -b / (2 * a)];
        if (!document.getElementById('roots')){
            const rootsEl = document.createElement('p');
            rootsEl.id = 'roots';
            rootsEl.textContent = `The roots are ${roots.join(', ')}`;
            document.getElementById('container').appendChild(rootsEl);
        }
        else{
            document.getElementById('roots').textContent = `The roots are ${roots.join(', ')}`
        }
    }
    else if (det < 0) {
        console.log("Roots are complex");

        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-det) / (2 * a);
    
        const root1 = `${realPart} + ${imaginaryPart}i`;
        const root2 = `${realPart} - ${imaginaryPart}i`;

        if (!document.getElementById('roots')){
            const rootsEl = document.createElement('p');
            rootsEl.id = 'roots';
            rootsEl.textContent = `The complex roots are ${root1} and ${root2}`;
            document.getElementById('container').appendChild(rootsEl);
        }
        else{
            document.getElementById('roots').textContent = `The complex roots are ${root1} and ${root2}`
        }
    }
    else {
        console.log("Roots are real and distinct");

        const roots = [
            (-b + Math.sqrt(det)) / (2 * a),
            (-b - Math.sqrt(det)) / (2 * a)
        ];

        if (!document.getElementById('roots')){
            const rootsEl = document.createElement('p');
            rootsEl.id = 'roots';
            rootsEl.textContent = `The roots are ${roots.join(', ')}`;
            document.getElementById('container').appendChild(rootsEl);
        }
        else{
            document.getElementById('roots').textContent = `The roots are ${roots.join(', ')}`
        }
    }
});
