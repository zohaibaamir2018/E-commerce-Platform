const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            const error = new Error("User not found");
            error.status = 404;
            throw error;
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = { getUser };
