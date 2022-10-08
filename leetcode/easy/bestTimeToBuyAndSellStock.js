// 220830
// leetCode best time to buy and sell

// 내 답변
// ..iteration 두 번 도는거 밖에 생각이 안난다.. 근데 그것도 잘 못함ㅋ ㅠ
// 일단 어떤 값을 구할 것인가 부터 기준을 세우고 들어가자
// 내가 구할 값은 profit, 즉 차가 가장 큰 경우. 만약 그 경우가 없으면 0을 리턴한다.
function maxProfit(prices){
  let profit = 0;

  for(let i = 0; i < prices.length; i++){
    for(let j = i + 1; j < prices.length; j++){
      const currentProfit = prices[j] - prices[i]

      if(currentProfit > profit){
        // 여기서 리턴을 하지 않는 이유는 iteration을 끝까지 돌아야 누적되면서 비교를 할 수 있기 때문임
        profit = currentProfit
      }
    }
  }
  return profit
}
// 근데 위 답안은 Time Limit Exceeded...

// 다른 답안
var maxProfit = function (prices) {
  let result = 0;
  let min = prices[0];
  for(let i = 1; i < prices.length; i++){
    // min 값을 재할당 해줌으로써 memoization이 가능해짐
    min = Math.min(prices[i], min);
    result = Math.max(result, prices[i] - min);
  }
  return result;
}