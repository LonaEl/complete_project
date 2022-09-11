import express from "express";

import Claim from "../models/claim.js";
const router = express.Router();

router.post("/claim", async(req, res) =>{
    const newClaim = new Claim ({
        fullName: req.body.fullName,
        email: req.body.email,
        amount: req.body.amount,
        bankName: req.body.bankName,
        accountNumber: req.body.accountNumber,
        typeOfAccount: req.body.typeOfAccount,
        });

        try {
            const claim = await newClaim.save();
        res.status(201).send({message:'Claim successfuly submited', claim})
        } catch (error) {
            res.status(500).json(error)
        }
});

export default router