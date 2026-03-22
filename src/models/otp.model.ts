import mongoose, { Document } from "mongoose";

export interface IOTP extends Document {
  userId: mongoose.Types.ObjectId;
  otp: string;
  expiresAt: Date;
  attempts: number;
}

const otpSchema = new mongoose.Schema<IOTP>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  attempts: {
    type: Number,
    default: 0,
  },
});

export const OTP = mongoose.model<IOTP>("OTP", otpSchema);