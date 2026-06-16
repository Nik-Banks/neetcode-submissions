class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        HashMap<Character, Integer> stringSMap = new HashMap<>();
        HashMap<Character, Integer> stringTMap = new HashMap<>();
        char[] charactersS = s.toCharArray();
        char[] charactersT = t.toCharArray();

        for(char ch : charactersS){
            stringSMap.put(ch, stringSMap.getOrDefault(ch, 0) + 1);
        }
        for(char ch : charactersT){
            stringTMap.put(ch, stringTMap.getOrDefault(ch, 0) + 1);
        }
        return stringSMap.equals(stringTMap);
    }
}