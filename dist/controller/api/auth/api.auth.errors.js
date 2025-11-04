export const handleAuthErrors = (err) => {
    if (err.code === 11000) {
        const { keyPattern } = err;
        const key = Object.keys(keyPattern).toString();
        if (key === "username")
            return "Je hebt al een account aangemaakt";
        if (key === "phoneNumber")
            return "Dit telefoon nummer wordt al bij een ander account gebruikt";
    }
    if (err._message === "user validation failed") {
        const msg = err.message || "";
        if (msg.includes("not a valid phone number")) {
            return "Dit is geen geldige telefoon nummer";
        }
        return "Validatie fout";
    }
    if (err === "user not found") {
        return "Geen gebruiker met deze naam gevonden";
    }
    if (err === "incorrect phone number") {
        return "Incorrecte telefoon nummer";
    }
    return err;
};
//# sourceMappingURL=api.auth.errors.js.map