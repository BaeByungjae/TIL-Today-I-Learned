function solution(absolutes, signs) {
  let ans = 0;
  for (let i = 0; i < signs.length; i++) {
    ans += signs[i] ? absolutes[i] : -absolutes[i];
  }
  return ans;
}
