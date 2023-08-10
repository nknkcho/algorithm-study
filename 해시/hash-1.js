/**
 * https://programmers.co.kr/learn/courses/30/lessons/1845
 */

function solution(nums) {
  const table = {};
  const availablePonketmons = nums.length / 2;

  for (const ponketmon of nums) {
    if (!table[ponketmon] || table === {}) {
      table[ponketmon] = ponketmon;
    }
  }

  const selectedPonketmons = Object.keys(table).length;
  const answer =
    nums.length / 2 >= selectedPonketmons
      ? selectedPonketmons
      : availablePonketmons;

  return answer;
}

// 폰켓몬의 객체를 만들면 중복은 제거된다 - 해시 이용
// 객체의 key 값의 개수는 중복을 제거한 폰켓몬의 종류의 개수와 같다.
// 최대로 줄 수 있는 폰켓몬의 개수는 nums.length / 2다.
// 둘 중 작은 값을 리턴한다.