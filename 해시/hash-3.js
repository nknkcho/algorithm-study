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

// 두번째 풀이 : Map을 사용해보기
function solution(phone_book) {
    let answer = new Map();

    for(const data of phone_book) {
        answer.set(data, true);
    }
    // answer = Map(3) { '119' => true, '97674223' => true, '1195524421' => true }
    // phone_book.forEach(data => answer.set(data, true));도 가능

    for(let val of answer){
        // ex: val = ['119', true]
        for(let i = 0; i < val[0].length; i++){
            if(answer.get(val[0].substring(0,i))){ // slice도 가능
                return false;
            }
        }
    }

    return true;
}
