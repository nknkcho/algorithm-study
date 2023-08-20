// https://school.programmers.co.kr/learn/courses/30/lessons/43165

// DFS로 풀어보기
function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  const dfs = (depth, ac) => {
    if (depth < length) {
      dfs(depth + 1, ac + numbers[depth]);
      dfs(depth + 1, ac - numbers[depth]);
    } else {
      if (ac === target) {
        answer++;
      }
    }
  };

  dfs(0, 0);

  return answer;
}
