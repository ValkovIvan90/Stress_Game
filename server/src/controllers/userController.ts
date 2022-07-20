import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";



const createAuthor = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name
    });

    return user
        .save()
        .then(user => res.status(201).json({ user }))
        .catch((error) => res.status(500).json({ error }))
}
const readAuthor = (req: Request, res: Response, next: NextFunction) => {
    const authorId = req.params.authorId;

    return User.findById(authorId)
        .then((user) => (user ? res.status(200).json({ user }) : res.status(404).json({ message: "Not Found" })))
        .catch((error) => res.status(500).json({ error }))
}
const readAll = (req: Request, res: Response, next: NextFunction) => {

    return User.find()
        .then((authors) => res.status(200).json({ authors }))
        .catch((error) => res.status(500).json({ error }))
}
const updateAuthor = (req: Request, res: Response, next: NextFunction) => {
    const authorId = req.params.authorId;
         
    return User.findById(authorId)
        .then((user) => {
            if (user) {
                user.set(req.body);

                return user
                    .save()
                    .then((user) => res.status(201).json({ user }))
                    .catch((error) => res.status(500).json({ error }))
            } else {
                res.status(404).json({ message: "Not Found" })
            }
        })
        .catch((error) => res.status(500).json({ error }));

}
const deleteAuthor = (req: Request, res: Response, next: NextFunction) => {
    const authorId = req.params.authorId;

    return User.findByIdAndDelete(authorId)
        .then((user) => (user ? res.status(201).json({ user, message: 'Deleted' }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createAuthor, readAuthor, readAll, updateAuthor, deleteAuthor };