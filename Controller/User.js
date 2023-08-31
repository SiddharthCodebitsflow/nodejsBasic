const PutRequest = (req, res) => {
    res.json({ message: "This is Put Request" });
}

const deleteRequest = (req, res) => {
    res.json({ message: "This is Delete Request" });
}

const getRequest = (req, res) => {
    res.status(200).json({ message: "This is get Request" });
}

const insertData = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All field is mandatory");
    } else {
        res.status(200).json({
            message: "Data is Valid",
            data: req.body
        });
    }
}

module.exports = { PutRequest, deleteRequest, getRequest, insertData };