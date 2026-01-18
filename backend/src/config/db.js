import mongoose from "mongoose"
import dns from "node:dns/promises"

export const connectDB = async () => {
  try {
    // Allow fallback to system DNS if 1.1.1.1 is unreachable
    dns.setServers(["1.1.1.1", "8.8.8.8"])

    await mongoose.connect(process.env.MONGO_URI)

    console.log("DB Connected Successfully!")
  } catch (error) {
    console.error("Error connecting to DB", error)
    process.exit(1)
  }
}
