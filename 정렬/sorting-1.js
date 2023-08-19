// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  var answer = [];

  commands.forEach((command) => {
    const sorted = array.slice(command[0] - 1, command[1]).sort((a, b) => {
      return a - b;
    });
    const flag = command[2] - 1;
    answer.push(sorted[flag]);
  });

  return answer;
}
