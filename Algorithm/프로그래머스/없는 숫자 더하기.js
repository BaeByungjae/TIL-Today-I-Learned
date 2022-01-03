function solution(numbers) {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = num.reduce((result, cur) => {
    if (!numbers.includes(cur)) return (result += cur);
    return result;
  });
  return result;
}
