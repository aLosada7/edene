export const isFirstCharacterALetter = (text: string): boolean => {
    return /[a-zA-Z]/.test(text.charAt(0));
};
