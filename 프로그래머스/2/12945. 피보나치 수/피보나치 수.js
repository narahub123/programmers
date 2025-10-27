function solution(n) {
  const MOD = 1234567;
  if (n <= 1) return n;

  let a = 0, b = 1;           // F(0), F(1)
  for (let i = 2; i <= n; i++) {
    const c = (a + b) % MOD;  // 매 스텝에서 모듈러
    a = b;
    b = c;
  }
  return b; // 이미 모듈러 적용됨
}
