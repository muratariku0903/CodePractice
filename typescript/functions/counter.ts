type Countable = string | number[]
type Unpacked<T> = T extends (infer U)[] ? U : T
export const counter = (values: Countable) => {
    let counter: Record<Unpacked<Countable>, number> = {}
    for (const value of values) {
        if (value in counter) {
            counter[value]++
        } else {
            counter[value] = 1
        }
    }

    return counter
}




