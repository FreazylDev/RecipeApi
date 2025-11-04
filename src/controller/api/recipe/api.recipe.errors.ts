export const handleRecipeErrors = (err: any) => {
    
    if (err.code === 11000) {
        return "Er bestaat al een recept met deze naam";
    }

    if (err._message === "recipe validation failed") {
        const msg = err.message || "";
        if (msg.includes("no ingredient set")) {
            return "Je hebt geen ingredienten toegevoegd";
        }
        if (msg.includes("no body content set")) {
            return "Je hebt geen uitleg toegevoegd"
        }
        if (msg.includes("no tags set")) {
            return "Je hebt geen tags toegevoed";
        }
        return "Validatie fout";
    }

    if (err === "user not found") {
        return "Geen gebruiker met deze naam gevonden";
    }
    if (err === "incorrect phone number") {
        return "Incorrecte telefoon nummer"
    }

    return err;
}
