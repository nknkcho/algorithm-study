// 220826
// leetCode two sum

// 내 풀이
var isPalindrome = function(x) {
  if(x < 0) return false

  const spliting = x.toString().split(""); // ['1', '2', '1']
  const reverseNum = spliting.reverse(); // ['1', '2', '1']
  const joinReversedNum = reverseNum.join(""); // 121

  if(x === Number(joinReversedNum)) return true
  return false
};
