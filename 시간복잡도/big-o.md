## 시간복잡도?

프로그램의 성능을 정확하게 측정하기란 불가능하다. (성능에 영향을 미치는 요인이 정말 많기 때문) 그러나 우리는 프로그램의 성능을 최적화 하기 위한 노력을 의식적으로 하는데,
컴퓨터 프로그래밍에서는 이것을 시간복잡도가 가장 낮은 알고리즘을 채택하여 개선하려 노력한다.
어떠한 프로그램의 절차를 알고리즘이라 한다면, 이때 수행하는 연산의 수를 시간복잡도로 나타낸다.
즉, 시간복잡도는 알고리즘을 수행하기 위해 프로세스가 수행해야 하는 연산을 수치화한 것. 즉, 알고리즘의 성능을 설명하는 것!

## Big-O 표기법

프로그램의 알고리즘이 가진 시간복잡도의 대략적인 성능을 비교하기 위한 상대적인 표기법 중 하나가 바로 빅오 표기법이다.
(오메가 표기법, 세타 표기법도 있지만 이 방법들은 평가하기가 까다롭다. 알고리즘이 최악인 경우를 판단할 수 있는 빅오를 사용하면 평균과 가까운 성능으로 예측하기 쉽기 때문에 주로 빅오 표기법을 사용한다.)
빅오 표기법은 불필요한 연산을 제거하여 알고리즘 분석을 쉽게 할 목적으로 사용된다.

빅오로 측정되는 복잡성에는 시간과 공간복잡도가 있는데,

- 시간복잡도는 입력된 N의 크기에 따라 실행되는 조작의 수를 나타낸다.
- 공간복잡도는 알고리즘이 실행될 때 사용하는 메모리의 양을 나타내는데, 요즘에는 데이터를 저장할 수 있는 메모리의 발전으로 중요도가 낮아졌다.

![Big-O Complexity Chart](/시간복잡도/빅오표기법.png)

## Big-O 표기법의 종류

- O(1): 상수 시간
    - 입력 크기와 무관하게 문제를 해결하는 데에 오직 한 단계만 처리함
    - ex. stack의 push, pop 등
    ```javascript
    function constantTimeExample(arr) {
        const firstElement = arr[0];
        console.log(firstElement);
    }

    const myArray = [1, 2, 3, 4, 5];
    constantTimeExample(myArray);
    ```
- O(log n): 로그 시간
    - 문제를 해결하는데 필요한 단계들이 연산마다 특정 요인에 의해 줄어듦
    - ex. 이진트리
    ```javascript
    function logarithmicTimeExample(n) {
        let i = 1;
        while (i < n) {
            console.log(i);
            i *= 2; // i를 두 배로 증가시킴
        }
    }

    logarithmicTimeExample(32); // 예시 입력: 32
    ```
- O(n): 직선적 시간(선형 시간)
    - 문제를 해결하는데 필요한 단계의 수와 입력값 n이 일대일 관계를 가짐
    - ex. 1중 for문
    ```javascript
    function linearTimeExample(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }

    const myArray = [1, 2, 3, 4, 5];
    linearTimeExample(myArray);
    ```
- O(n log n): 선형 로그 시간
    - 문제를 해결하기 위한 단계의 수가 N*(log2N) 번만큼의 수행시간을 가짐
    - O(N)의 알고리즘과 O(log N)의 알고리즘이 중첩된 형태
    - ex. 퀵(quick) 정렬, 합병(merge) 정렬, 힙(heap) 정렬
    ```javascript
    function linearLogarithmicTimeExample(n) {
        for (let i = 1; i <= n; i++) {
            let j = 1;
            while (j < n) {
                console.log(i, j);
                j *= 2;
            }
        }
    }

    linearLogarithmicTimeExample(8); // 예시 입력: 8
    ```
- O(n^2): 2차 시간
    - 문제를 해결하기 위한 단계의 수는 입력값 n의 제곱
    ```javascript
    function quadraticTimeExample(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                console.log(arr[i], arr[j]);
            }
        }
    }

    const myArray = [1, 2, 3, 4, 5];
    quadraticTimeExample(myArray);
    ```
- O(2^n): 지수 시간
    - 문제를 해결하기 위한 단계의 수는 주어진 상수값 C(여기서는 2)의 n 제곱
    ```javascript
    function exponentialTimeExample(n) {
            if (n <= 0) return;
            console.log(n);
            exponentialTimeExample(n - 1);
    }

    exponentialTimeExample(3); // 예시 입력: 3
    ```