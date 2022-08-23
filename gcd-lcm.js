// 220823
// 프로그래머스 최대공약수와 최소공배수

// 최대공약수 : 유클리드 알고리즘을 사용하기
// 최소공배수 : a * b / 최대공약수
function solution(n, m) {
  var answer = [];
  
  // gcd 최대 공약수를 구하는 함수
  const gcd = (a, b) => {
      if(b === 0) return a // 나누어 떨어지면 a를 리턴
      return gcd(b, a % b) // 나누어 떨어질 때까지 함수 실행
  };
  
  // lcm 최소 공배수를 구하는 함수
  const lcm = (a, b) => {
      const result = a * b / gcd(a, b)
      return result
  };
  
  answer.push(gcd(n, m), lcm(n, m))
  return answer;
}