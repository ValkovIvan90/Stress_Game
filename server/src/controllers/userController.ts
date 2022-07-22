import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";

type BodyValue = {
    name: string;
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name }: BodyValue = req.body;
    const existingPerson = await User.findOne({ name });


    if (name.length > 5 && name.length < 15 && !existingPerson || existingPerson == null) {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name
        });

        return user
            .save()
            .then(user => res.status(201).json({ user }))
            .catch((error) => res.status(500).json({ error }))
    } else if (existingPerson) {
        res.status(500).json({ message: "Failed! Name is already in use!" })
    }

}
const readUser = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.authorId;

    return User.findById(userId)
        .then((user) => (user ? res.status(200).json({ user }) : res.status(404).json({ message: "Not Found" })))
        .catch((error) => res.status(500).json({ error }))
}
const readAll = (req: Request, res: Response, next: NextFunction) => {

    return User.find()
        .then((users) => res.status(200).json({ users }))
        .catch((error) => res.status(500).json({ error }))
}


export default { createUser, readUser, readAll };