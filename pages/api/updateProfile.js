import userSchema from "../../model/schema.js";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
    if(req.method === "POST"){
        const session = await getSession({ req });
        if(!session){
            res.status(401).json({message: "Unauthorized"})
            return;
        }

        const check = await userSchema.findOne({email: session.user.email})
        console.log(check)
        if(check.profileSet){
            res.status(500).json({message: "Profile Already Set"})
            return;
        }

        // update the profileSet in the database
        const result = await userSchema.findOneAndUpdate(
            {email: session.user.email},
            {
                $set: {
                    profileSet: true,
                }
            },
            {new: true},
        )
        .exec()
        .then(() => {
            res.status(200).json({message: "Profile Updated"})
        })
        .catch((err) => {
            consoloe.error(err);
            res.status(500).json({message: "Internal Server Error"})
        })
    }
    else{
        res.status(405).json({message: "Method Not Allowed"})
    }
}