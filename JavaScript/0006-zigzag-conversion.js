function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = new Array(numRows).fill("").map(() => []);
    let curRow = 0;
    let goingDown = false;

    for (const c of s) {
        rows[curRow].push(c);

        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
        }

        curRow += goingDown ? 1 : -1;
    }

    return rows.map(row => row.join("")).join("");
}

function convert2(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = new Array(numRows).fill("");
    let curRow = 0;
    let goingDown = false;

    for (const c of s) {
        rows[curRow] += c;

        if (curRow === 0 || curRow === numRows - 1)
            goingDown = !goingDown;

        curRow += goingDown ? 1 : -1;
    }

    return rows.join("");
}
