import string
def caesar_cipher(input_string, shift_amount):
    ans = ''
    special = set(string.punctuation)

    if shift_amount > 0:

        for char in input_string:
            if (char in special) or (char.isdigit()) or char == ' ':
                ans += char 
            
            elif char.isupper():
                for i in range(0, shift_amount, 1):
                    char = chr(ord(char) + 1)
                    if ord(char) > 90:
                        char = chr(65)
                ans += char 

            elif char.islower():
                for i in range (0, shift_amount, 1):
                    char = chr(ord(char) + 1)
                    if ord(char) > 122:
                        char = chr(97)
                ans += char 

    elif shift_amount < 0:
        for char in input_string: 
            if (char in special) or (char.isdigit()) or char == ' ':
                ans += char  
            elif char.isupper():
                for i in range(0, shift_amount, -1):
                    char = chr(ord(char) - 1)

                    if ord(char) < 65:
                        char = chr(90)
                ans += char 

            elif char.islower():
                for i in range (0, shift_amount, -1):
                    char = chr(ord(char) - 1)

                    if ord(char) < 97:
                        char = chr(122)
                ans += char         
    else:
        ans = input_string
    print(ans)
    return ans