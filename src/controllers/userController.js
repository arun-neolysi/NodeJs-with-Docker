/**
 * Get all users
 */
const getUsers = async (req, res) => {
    try {
        return res.status(200).json({ message: "Users fetched successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUsers
}