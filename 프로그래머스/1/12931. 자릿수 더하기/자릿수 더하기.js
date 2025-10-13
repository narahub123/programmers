function solution(n)
{
    const nums = n.toString().split('').map(Number);
    
    return nums.reduce((acc, cur) => acc + cur);
}