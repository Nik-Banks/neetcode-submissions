class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let en = ""
        for(let i = 0; i < strs.length; i++){
            en += strs[i] + "."
        }
        console.log(en)
        return en
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let de = []
        let constru = ""
        for(const s of str){
            if(s == "."){
                de.push(constru)
                constru = ""
            } else {
                constru += s
            }
        }
        console.log(de)
        return de
    }
}
