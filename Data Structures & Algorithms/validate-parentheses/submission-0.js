class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s[0] == ")" || s[0] == "}" || s[0] == "]"){
            return false
        }
        let stack = []

        for(let i = 0; i < s.length; i++){
            
            if(s[i] == "(" || s[i] == "{" || s[i] == "["){
                stack.push(s[i])

            } else if(s[i] == ")" || s[i] == "}" || s[i] == "]"){
                let item = stack.pop()

                if(s[i] == ")" && item == "("){
                    continue
                } else if(s[i] == "}" && item == "{") {
                    continue
                } else if(s[i] == "]" && item == "[") {
                    continue
                } else {
                    return false
                }
            } 
        }
        return stack.length == 0
    }
}
