// https://school.programmers.co.kr/learn/courses/30/lessons/42577

// 첫번째 풀이
function solution(phone_books) {
  const phoneBooks = phone_books.sort();

  for (let i = 0; i < phoneBooks.length - 1; i++) {
    if (phoneBooks[i + 1].startsWith(phoneBooks[i])) {
      return false;
    }
  }

  return true;
}

// 전화번호 배열을 재정렬하여, 비슷한 문자열이 한 곳에 몰리도록 한다
// 배열을 순회하면서 이웃하는 배열 간에 접두어 관계가 있는지 확인한다
// 있다면 즉시 false를 반환한다
