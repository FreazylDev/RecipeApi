export const checkPhoneNumber = (phoneNumber: string): boolean => {
    phoneNumber = phoneNumber.trim();
    
     if (!/^06\d{8}$/.test(phoneNumber)) {
        return false;
    }

    return true;
}