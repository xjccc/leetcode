function climbStairs(n: number): number {
  const dp = [];
 dp[0] = 1;
 dp[1] = 1;
 for (let i = 2; i <= n; i++) {
   dp[i] = dp[i - 2] + dp[i - 1];
 }
 return dp[n];
};
// 斐波那契数列
function climbStairs1(n: number) {
 let prev = 1;
 let cur = 1;
 for (let i = 2; i <= n; i++) {
   const temp = cur;
   cur = prev + cur;
   prev = temp;
 }
 return cur;
}