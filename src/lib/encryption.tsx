import crypto from "crypto"
import { ENCRYPTION_ALGORITHM, ENCRYPTION_SECRET_KEY } from "./env_vars";


export function encrypt(text: string): string {
  try {
    if (typeof text !== "string") {
      throw new Error("Input must be a string");
    }
 
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, Buffer.from(ENCRYPTION_SECRET_KEY), iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
 
    return `${iv.toString("hex")}:${encrypted}`;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Encryption error:`);
    } else {
      throw new Error("An unknown error occurred during encryption");
    }
  }
}

