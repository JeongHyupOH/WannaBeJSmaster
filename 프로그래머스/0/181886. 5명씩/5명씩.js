function solution(names) {
    let res = [];
    for(let i = 0; i < names.length; i += 5) {
        res.push(names[i]);
    }
    return res;
}