import { SetVal } from '../types'

export function union(setA: Set<SetVal>, setB: Set<SetVal>): Set<SetVal> {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem);
    }

    return _union;
}

export function intersection(setA: Set<SetVal>, setB: Set<SetVal>): Set<SetVal> {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

export function difference(setA: Set<SetVal>, setB: Set<SetVal>): Set<SetVal> {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem);
    }
    return _difference;
}
