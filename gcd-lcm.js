// 220823
// 프로그래머스 최대공약수와 최소공배수

// 내 풀이
// 최대공약수는 유클리드 알고리즘을 사용하여 풀고, 최소공배수 : a * b / 최대공약수 식으로 구함
function solution(n, m) {
  var answer = [];

  // gcd 최대 공약수를 구하는 함수
  const gcd = (a, b) => {
    if (b === 0) return a; // 나누어 떨어지면 a를 리턴
    return gcd(b, a % b); // 나누어 떨어질 때까지 함수 실행
  };

  // lcm 최소 공배수를 구하는 함수
  const lcm = (a, b) => {
    const result = (a * b) / gcd(a, b);
    return result;
  };

  answer.push(gcd(n, m), lcm(n, m));
  return answer;
}

// 다른 사람의 풀이를 보고 배운 점
// for문의 개념에 대해 점검. for(초기식;표현식;증감식)을 활용하여 풀이
// 단, 타인과 공유하는 코드라면 가독성 측면에서 유용했을까 하는 생각
function gcdlcm(a, b) {
  let r;
  // 중간에 r = a % b 가 0이 된다면 for문은 종료
  for (let ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
