// export const fibonacciIteractor = (n: number): number => {
//     if (n === 1) return 0;
//     if (n === 2) return 1;

//     return fibonacciIteractor(n - 1) + fibonacciIteractor(n - 2)
// }

// 优化
// 在计算 fn(5) 的时候发现  fn(3) 被计算了两次, 可以将其缓存起来

export const fibonacciIteractor = (n: number): number => {
    // n 表示为第几个数
    const memo = [0, 1];

    const fibonacci = (i: number): number => {
        // i 标识为数组下标
        if (memo[i] != null) return memo[i];
        return memo[i] = fibonacci(i-1) + fibonacci(i-2)
    }

    return fibonacci(n-1)
}