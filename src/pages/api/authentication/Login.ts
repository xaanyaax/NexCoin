import type { NextApiRequest , NextApiResponse } from "next";
import connectToDatabase from "@/database/connect";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest , res: NextApiResponse){
    if (req.method !== "POST") return res.status(405).end();

    const {email , password} = req.body;

    await connectToDatabase();

    const user = await User.findOne({email});
    if(!user) return res.status(404).json({error: "User not found"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(401).json({error: "Invalid password"});

    const token = jwt.sign({userId : user._id} , process.env.JWT_SECRET! , {
        expiresIn : "7d",
    });

    res.status(200).json({token})  //send token to frontend
}
