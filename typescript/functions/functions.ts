export function is_prime(num: number): boolean {
    if (num === 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

export function fact(num: bigint): bigint {
    if (num <= 1) return BigInt(1);
    return (num * (fact(BigInt(num) - BigInt(1)))) % BigInt(1000000007);
}

export const bs = (nums: number[], n: number): number => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = ~~((left + right) / 2);
        if (nums[mid] === n) return mid;
        if (nums[mid] < n) left = mid + 1;
        if (nums[mid] > n) right = mid - 1;
    }

    return -1;
}
