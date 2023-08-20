// https://school.programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let answer = 0;
  const visited = [false];

  const dfs = (i) => {
    visited[i] = true;

    for (let j = 0; j < computers.length; j++) {
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
