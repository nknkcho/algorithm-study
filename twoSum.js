// 220825
// leetCode two sum

// 내 풀이
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null; // 답 없음
};


// 베스트 답안
const twoSum = (nums, target) => {
  const map = {}

  for(let i = 0; i < nums.length; i++){
    const another = target - nums[i];

    if(another in map){
      return [map[another], i]
    }

    map[nums[i]] = i;
  }
  return null;
}

// 배열 문제를 생각할 때, map의 존재를 다시 한 번 생각하기 - 루프를 줄일 순 없는가?
// 어떤 값을 계산했을 때 원하는 답이 아니라면, 걍 버리면 될까? 어디에 저장해두었다가 재활용 할 수 있지 않을까?

// hash란? 임의의 크기를 가진 데이터를 고정된 데이터의 크기로 변환시키는 것, 검색과 저장을 아주 빠르게 하는 자료구조로, key-value 형태로 데이터 존재, key값이 배열의 인덱스로 저장되기 때문에 검색과 저장이ㅣ 빠르게 일어남
// hash algorithm? 해쉬를 하는 방법에 대해 절차적으로 명시하는 것
// 시간복잡도란? 입력값의 변화에 따라 연산을 실행할 때, 연산 횟수에 비해 시간이 얼만큼 걸리는가?
