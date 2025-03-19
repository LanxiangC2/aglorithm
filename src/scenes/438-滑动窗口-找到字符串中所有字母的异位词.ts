function findAnagrams(s: string, p: string): number[] {
    // 滑动窗口 + 双指针
    // 动态统计每个字符出现的次数

    const map = new Map()
    const res = []

    for(let i = 0; i < p.length; i++) {
        map.set(p[i], (map.get(p[i]) || 0) + 1)
    }

    // 初始化窗口
    for (let i = 0; i < p.length; i++) {
        map.has(s[i]) && map.set(s[i], map.get(s[i]) - 1)
    }

    // 遍历s

    let i = 0;
    let j = p.length - 1;

    while (j < s.length) {
        if ([...map.values()].every(v => v === 0)) {
            res.push(i)
        }
        // 滑动窗口
        // 左边界
        map.has(s[i]) && map.set(s[i], map.get(s[i]) + 1)
        i++; 
        // 右边界
        j++;
        map.has(s[j]) && map.set(s[j], map.get(s[j]) - 1)
        
    }

    return res
};


export { 
    findAnagrams
}
