exports.caesarCipher = function(inputString, shiftAmount) {
    let ans = ''
    let temp = ''
    const special = "/[!@#$%^&*()1234567890 .]/"

    if(shiftAmount > 0){
        for (i = 0; i < inputString.length; i++){
            if (special.indexOf(inputString[i]) > -1){
                ans += inputString[i]
            }
            else if(inputString[i] == inputString[i].toUpperCase()){
                temp = inputString[i]
                for(j = 0; j < shiftAmount; j++){
                    temp = String.fromCharCode((temp.charCodeAt(0) + 1))
                    if (temp.charCodeAt(0) > 90){
                        temp = String.fromCharCode(65)
                    }
                }
                ans += temp
            }
            else{
                temp = inputString[i]
                for(j = 0; j < shiftAmount; j++){
                    
                    temp = String.fromCharCode((temp.charCodeAt(0) + 1))
                    if (temp.charCodeAt(0) > 122){
                        temp = String.fromCharCode(97)
                    }
                }
                ans += temp
            }
            
        }
        console.log(ans)
        return ans
    }

    else if (shiftAmount < 0){
        for (i = 0; i < inputString.length; i++){
            if (inputString[i] == ' ' || special.indexOf(inputString[i]) > -1){
                ans += inputString[i]
            }
            else if(inputString[i] == inputString[i].toUpperCase()){
                temp = inputString[i]
                for(j = 0; j > shiftAmount; j--){
                    temp = String.fromCharCode((temp.charCodeAt(0) - 1))
                    if (temp.charCodeAt(0) < 65){
                        temp = String.fromCharCode(90)
                    }
                    
                }
                ans += temp
            }
            else{
                temp = inputString[i]
                for(j = 0; j > shiftAmount; j--){
                    temp = String.fromCharCode((temp.charCodeAt(0) - 1))
                    if (temp.charCodeAt(0) < 97){
                        temp = String.fromCharCode(122)
                    }

                }
                ans += temp
            } 
        }
        console.log(ans)
        return ans
    }

    else{
        console.log(inputString)
        return inputString
    }
    
};
