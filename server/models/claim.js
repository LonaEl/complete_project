import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({
fullName: {type: String, required: true},
email: {type: String, required: true},
amount: {type: Number, required: true},
bankName: {type: String, required: true},
accountNumber: {type: Number, required: true},
typeOfAccount: {type: String, required: true}
},
{timestamps: true}
);

const Claim = mongoose.model("Claim", claimSchema);
export default Claim;






