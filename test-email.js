import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

console.log("Starting SMTP test...");
console.log("User:", process.env.EMAIL_USER);
console.log("Pass:", process.env.EMAIL_PASS ? "****" : "MISSING");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.error("❌ SMTP Verification Error:", error);
    } else {
        console.log("✅ SMTP Server is ready to take our messages");
    }
    process.exit();
});
