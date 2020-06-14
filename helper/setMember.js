export default function setMember(obj, keys, value, deepCopy = false) {
    let o = deepCopy ? JSON.parse(JSON.stringify(obj)) : obj
    let x = o
    let iLast = keys.length - 1

    for (let i = 0; i < iLast; ++i) x = x[keys[i]]

    x[keys[iLast]] = value
    return o
}
