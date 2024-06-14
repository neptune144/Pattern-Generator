function generatePattern() {
    const patternType = document.getElementById('patternType').value;
    const rows = parseInt(document.getElementById('rows').value);
    let output = '';

    switch (patternType) {
        case 'rightTriangle':
            for (let i = 1; i <= rows; i++) {
                output += '*'.repeat(i) + '\n';
            }
            break;
        case 'invertedRightTriangle':
            for (let i = rows; i >= 1; i--) {
                output += '*'.repeat(i) + '\n';
            }
            break;
        case 'pyramid':
            for (let i = 0; i < rows; i++) {
                output += ' '.repeat(rows - i - 1) + '*'.repeat(2 * i + 1) + '\n';
            }
            break;
        case 'diamond':
            for (let i = 0; i < rows; i++) {
                output += ' '.repeat(rows - i - 1) + '*'.repeat(2 * i + 1) + '\n';
            }
            for (let i = rows - 2; i >= 0; i--) {
                output += ' '.repeat(rows - i - 1) + '*'.repeat(2 * i + 1) + '\n';
            }
            break;
        case 'square':
            for (let i = 0; i < rows; i++) {
                output += '*'.repeat(rows) + '\n';
            }
            break;
        case 'hollowSquare':
            for (let i = 0; i < rows; i++) {
                if (i === 0 || i === rows - 1) {
                    output += '*'.repeat(rows) + '\n';
                } else {
                    output += '*' + ' '.repeat(rows - 2) + '*' + '\n';
                }
            }
            break;
        case 'rightTriangleNumber':
            for (let i = 1; i <= rows; i++) {
                for (let j = 1; j <= i; j++) {
                    output += j;
                }
                output += '\n';
            }
            break;
        case 'invertedRightTriangleNumber':
            for (let i = rows; i >= 1; i--) {
                for (let j = 1; j <= i; j++) {
                    output += j;
                }
                output += '\n';
            }
            break;
        case 'floydsTriangle':
            let num = 1;
            for (let i = 1; i <= rows; i++) {
                for (let j = 1; j <= i; j++) {
                    output += num + ' ';
                    num++;
                }
                output += '\n';
            }
            break;
        case 'pascalsTriangle':
            let row = [1];
            let y = [0];
            for (let x = 0; x < rows; x++) {
                output += ' '.repeat(rows - x) + row.join(' ') + '\n';
                row = row.map((v, i) => v + (row[i + 1] || 0));
            }
            break;
        default:
            output = 'Invalid pattern type!';
    }

    document.getElementById('patternOutput').textContent = output;
}
