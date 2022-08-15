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
