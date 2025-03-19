const findLongestWord = (s: string, dictionary: string[]): string =>{
    const n = dictionary.length

    let res = ''

    for (let i = 0; i < n; i++) {
        const word = dictionary[i]
        let j = 0;
        let k = 0;

        // 双指针，分别遍历 word 和 s
        while (j < word.length && k < s.length) {


            if (word[j] === s[k]) {
                j++;
            }
            k++;

            if (j === word.length) {
                if (word.length == res.length) {
                    // 长度相等，取最小字典序
                    res =  word < res ? word : res
                } else {
                    res = word.length > res.length ? word : res
                }

            }
        }

    }
    return res
}

export { findLongestWord }