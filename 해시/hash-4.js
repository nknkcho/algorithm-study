// https://school.programmers.co.kr/learn/courses/30/lessons/42578

// 첫번째 풀이
function solution(clothes) {
  let answer = 1;
  let table = {};

  for (const cloth of clothes) {
    table[cloth[1]] ? (table[cloth[1]] += 1) : (table[cloth[1]] = 1);
  }

  for (let key of Object.keys(table)) {
    answer += answer * table[key];
  }

  return answer - 1;
}

// 경우의 수 문제
// 전체의 경우의 수에서 모든 경우를 선택하지 않았을 1가지의 경우를 제외하면 정답
// 각 항목에서 선택하지 않을 옵션을 추가하여 곱한 뒤 - 1
