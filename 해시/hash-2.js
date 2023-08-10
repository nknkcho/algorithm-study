// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 첫번째 풀이 : 해시를 사용하지 않았기 때문에 문제의 의도에 적절하지 않다고 생각.
function solution(participants, completions) {
  participants.sort(); //참가자 배열 정렬
  completions.sort(); //완주자 배열 정렬

  for (var i = 0; i < participants.length; i++) {
    if (participants[i] !== completions[i]) {
      //인덱스 0부터 순차적으로 두 배열 비교
      return participants[i];
      //비완주자가 참가자 배열에 나올 경우 출력
    }
  }
}

// 두번째 풀이 : 해시를 사용해보기
function solution(participants, completions) {
  const table = {};

  // forEach, map 모두 사용 가능
  participants.forEach((participant) => {
    table[participant] ? (table[participant] += 1) : (table[participant] = 1);
  });
  completions.forEach((completion) => {
    table[completion] -= 1;
  });

  for (const key in table) {
    if (table[key] >= 1) return key;
  }

  // 혹은
  // return Object.keys(table).find(key => table[key] === 1)
}
