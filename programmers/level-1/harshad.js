// 220824
// 프로그래머스 하샤드 수


function solution(x) {
  let answer = true;
  // 숫자의 각 자릿수를 분리하기 위해 문자열로 바꾼 뒤 split을 통해 배열 받아옴
  let numToString = x.toString().split('');
  // 배열 전체를 순회하면서 값을 누적할 수 있는 reduce 메소드 사용
  let sum = numToString.reduce((acc, cur) => Number(acc) + Number(cur));
  if(x % sum !== 0){
      return false;
  }
  return answer;
}