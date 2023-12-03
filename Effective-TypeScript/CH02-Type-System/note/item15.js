// 함수의 반환 타입을 명시적으로 지정
function parseCSV(input) {
    var lines = input.split('\n');
    // name, age / John, 25 / Jane, 30
    var header = lines[0], rows = lines.slice(1);
    console.log(header, rows);
    // header = name,age / rows = 
    return rows.map(function (rowStr) {
        var row = {};
        rowStr.split(',').forEach(function (cell, i) {
            row[header.split(',')[i]] = cell;
        });
        return row;
    });
}
// 함수 호출 및 결과 확인
var csvData = "name,age\nJohn,25\nJane,30\n";
var parsedData = parseCSV(csvData);
// TypeScript는 parsedData의 타입을 정확히 추론할 수 있습니다.
// parsedData는 배열이며, 각 요소는 { [columnName: string]: string } 타입입니다.
console.log(parsedData);
