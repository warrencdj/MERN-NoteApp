import mongoose from "mongoose"
import dns from "node:dns/promises"

export const connectDB = async () => {
  try {
    dns.setServers(["1.1.1.1"])

    await mongoose.connect(process.env.MONGO_URI)

    console.log("DB Connected Successfully!")
  } catch (error) {
    console.error("Error connecting to DB", error)
    process.exit(1)
  }
};
