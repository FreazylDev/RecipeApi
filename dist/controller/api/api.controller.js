import {} from "express";
export const test = (req, res) => {
    res.status(200).json({ msg: "API Called!" });
};
export const _404 = (req, res) => {
    res.status(501).json({ msg: "Not a valid API endpoint" });
};
//# sourceMappingURL=api.controller.js.map