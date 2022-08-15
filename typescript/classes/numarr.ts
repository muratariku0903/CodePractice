import { Matrix } from '../types';

export class NumArr {
    getArrSum(nums: number[]): number {
        if (!nums.length) {
            return 0;
        }

        return nums.reduce((acc: number, curr: number) => acc + curr);
    }

    getArrMax(nums: number[]): number {
        return nums.reduce((a: number, b: number) => Math.max(a, b));
    }

    getArrMin(nums: number[]): number {
        return nums.reduce((a: number, b: number) => Math.min(a, b));
    }

    numSort(nums: number[], type: string): number[] {
        if (type === 'asc') {
            nums.sort((a, b) => a - b);
        } else if (type === 'dsc') {
            nums.sort((a, b) => b - a);
        }

        return nums;
    }

    getIdxToInsertForSortArr(nums: number[], num: number): number {
        if (nums.length === 0) return 0;
        if (num <= nums[0]) return 0;
        if (num >= nums[nums.length - 1]) return nums.length;

        let start = 0;
        let end = nums.length - 1;
        let median = Math.floor((end + start) / 2);
        while (start + 1 < end && num !== nums[median]) {
            if (num > nums[median]) {
                start = median;
                median = Math.floor((end + start) / 2);
            } else if (num < nums[median]) {
                end = median;
                median = Math.floor((end + start) / 2);
            }
        }

        return num >= nums[median] ? median + 1 : median;
    }

    combination(nums: number[], k: number): Matrix {
        let ans: Matrix = [];

        if (nums.length < k) {
            return [];
        }

        if (k === 1) {
            for (let i = 0; i < nums.length; i++) {
                ans[i] = [nums[i]];
            }
        } else {
            for (let i = 0; i < nums.length - k + 1; i++) {
                let row = this.combination(nums.slice(i + 1), k - 1);
                for (let j = 0; j < row.length; j++) {
                    ans.push([nums[i]].concat(row[j]));
                }
            }
        }

        return ans;
    }

    permutation(post: number[], result: Matrix = [], pre: number[] = [], size: number = post.length): Matrix {
        if (size > 0) {
            post.forEach((_, i) => {
                const rest = [...post];
                const elem = rest.splice(i, 1);
                this.permutation(rest, result, [...pre, ...elem], size - 1);
            });
        } else {
            result.push(pre);
        }

        return result;
    }

    inRange(matrix: Matrix, r: number, c: number): boolean {
        return r >= 0 && r < matrix.length && c >= 0 && c < matrix[r].length;
    }
}
