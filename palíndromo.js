/*function verificaPalindomo(string){
    if (!string) return;

    return string.split("").reverse().join("") === string;

}

console.log(verificaPalindomo("ovo")); */

// solução 2
// omo
//012
//abba
//012345
function verificaPalindomo2(string) {
    if (!string) return "string inexistente";
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindomo2("abba"));