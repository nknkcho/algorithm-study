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

// 두번째 풀이 : Map을 사용해보기
function solution(clothes) {
  let answer = 1;
  const map = new Map();

  for (const cloth of clothes) {
    map.has(cloth[1])
      ? map.set(cloth[1], map.get(cloth[1]) + 1)
      : map.set(cloth[1], 1);
  }

  for (let [key, value] of map) {
    answer += answer * value;
  }

  return answer - 1;
}

// 두번째 풀이에 대한 리팩토링
function solution(clothes) {
  const map = new Map();

  for (const [, type] of clothes) {
    // clothes의 첫번째 인자는 필요 없으므로 생략
    if (map.has(type)) {
      map.set(type, map.get(type) + 1);
    } else {
      map.set(type, 1);
    }
  }

  let answer = 1;
  for (const value of map.values()) { // map.values()는 map의 value 값들을 배열로 반환
    answer *= value + 1;
  }

  return answer - 1;
}
