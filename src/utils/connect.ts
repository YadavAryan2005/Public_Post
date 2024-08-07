import mongoose from "mongoose";
export const connect = async () => {
  if (mongoose.connection.readyState >= 1) return; // Check if already connected
  try {
    await mongoose.connect(process.env.MONGODB_STRING as string);
    console.log("Database connected");
  } catch (error) {
    console.log("Error in DB connection", (error as Error).message);
  }
};

export const disconnect = async () => {
  if (mongoose.connection.readyState === 0) return; // Check if not connected
  await mongoose.disconnect();
  console.log("Database disconnected");
};
