const { v4: uuidv4 } = require("uuid");

const User = require("../models/user.model");

const getAllUsers = async (req, res) => { //async for await
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
    // res.status(200).json({
    //     message: "all users",
    // });
};

const getOneUser = async (req, res) => {
    try {
        const user = await User.findOne({id: req.params.id})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message);
    }

    // res.status(200).json({
    //     message: "get one users",
    // });
};

const createUser = async (req, res) => { //async for await
    try {
        const mewUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),
        });
        await mewUser.save();
        res.status(201).json(mewUser);
        // res.status(201).json({
        //     message: "user is created",
        // });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({id: req.params.id})
        user.name = req.body.name;
        user.age = Number( req.body.age );
        await user.save();
        res.status(200).json(user);
        // res.status(201).json({
        //     message: "user is created",
        // });
    } catch (error) {
        res.status(500).send(error.message);
    }


    // res.status(200).json({
    //     message: "user is updated",
    // });
};

const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({id: req.params.id})
        res.status(200).json({message: "user is deleted"})
    } catch (error) {
        res.status(500).send(error.message);
    }

    // res.status(200).json({
    //     message: "user is deleted",
    // });
};

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };


