// LOGIC

function isPalindrome(substring) {
    let start = 0;
    let end = substring.length - 1;

    for(let i = 0; i < substring.length / 2; i += 1) {
        if(substring[start] !== substring[end]) {
            return false;
        }
        start+=1;
        end-=1;
    }
    return true;
}

function getLongestPalindromicSubstring(string) {
    let longestPalindromicSubstring = "";

    for(let i = 0; i < string.length; i += 1) {
        for(let j = i; j < string.length; j += 1) {
            let substring = string.slice(i, j+1);
            if(isPalindrome(substring) && substring.length > longestPalindromicSubstring.length) {
                longestPalindromicSubstring = substring;
            }
        }
    }

    return longestPalindromicSubstring;
}

// RENDER

console.log(getLongestPalindromicSubstring("aboubakar"));
console.log(getLongestPalindromicSubstring("racecar"));
console.log(getLongestPalindromicSubstring("lviv"));