export const checkPhoneNumber = (phoneNumber) => {
    phoneNumber = phoneNumber.trim();
    if (!/^06\d{8}$/.test(phoneNumber)) {
        return false;
    }
    return true;
};
//# sourceMappingURL=validate.User.js.map