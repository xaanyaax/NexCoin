import type { NextApiRequest , NextApiResponse } from "next";
import connectToDatabase from "@/database/connect";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    //the method must ne POST!
    if(req.method !== "POST") return res.status(405).end();

    const {username, email, password} = req.body;

    await connectToDatabase();

    const existingUser = await User.findOne({email: email});

    if(existingUser){
        return res.status(400).json({error: "User already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({username , email , password: hashedPassword})

    return res.status(201).json({message: "User created successfully"});
}