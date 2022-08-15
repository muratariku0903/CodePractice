export class TestData {
    public get_arr_num(size: number = 10, min: number = 0, max: number = 100): number[] {
        let result = [];
        for (let i = 0; i < size; i++) {
            result.push(Math.floor(Math.random() * (max + 1 - min) + min))
        }

        return result;
    }

    public get_mix_arr_num(size: number = 10, nums: number[]): number[] {
        let mix_nums = [];
        for (let i = 0; i < size; i++) {
            mix_nums.push(nums[Math.floor(Math.random() * nums.length)])
        }
        return mix_nums;
    }

    public get_str(size: number = 10, chars: string = ''): string {
        if (!chars.length) chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let rand_str = '';
        for (var i = 0; i < size; i++) {
            rand_str += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return rand_str;
    }
}
