export function generatePassword(length, useUppercase, useLowercase, useSpecialChars, useDigits) {
    let chars = ''
    let password = ''

    if (useUppercase) 
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (useLowercase) 
        chars += 'abcdefghijklmnopqrstuvwxyz'
    if (useSpecialChars) 
        chars += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    if (useDigits) 
      chars += '0123456789'

    for (let i = 0; i < length; i++) 
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    
    return password
}

