// 함수의 반환 타입을 명시적으로 지정
function parseCSV(input: string): { [columnName: string]: string }[] {
  const lines = input.split('\n');
  // name, age / John, 25 / Jane, 30
  const [header, ...rows] = lines;
  console.log(header, rows)
  // header = name,age / rows = ['John, 25','Jane, 30 ']

  return rows.map(rowStr => {
    // 반환할 타입 지정
    const row: { [columnName: string]: string } = {};
    rowStr.split(',').forEach((cell, i) => {
      row[header.split(',')[i]] = cell;
    });
    return row;
  });
}

// 함수 호출 및 결과 확인
const csvData = "name,age\nJohn,25\nJane,30\n";
const parsedData = parseCSV(csvData);

// TypeScript는 parsedData의 타입을 정확히 추론할 수 있습니다.
// parsedData는 배열이며, 각 요소는 { [columnName: string]: string } 타입입니다.
console.log(parsedData);