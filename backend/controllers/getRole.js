exports.publicAccess = (req, res) => {
    res.send("Public Access")
}
exports.userAccess = (req, res) => {
    res.send("User Access")
}
exports.reporterAccess = (req, res) => {
    res.send("Reporter Access")
}
exports.adminAccess = (req, res) => {
    res.send("Admin Access")
}