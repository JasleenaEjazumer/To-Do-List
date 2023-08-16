import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const ActivitySchema = mongoose.Schema(
  { 
    user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
    name: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
      
    },
    date:{
        type: Date,
      required: true,
      
    
    },
  
  },
  {
    timestamps: true,
  }
);



const Activity = mongoose.model("activity", ActivitySchema);

export default Activity;
