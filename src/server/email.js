const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000; // Change this to your desired port number

// Enable CORS for all origins (you can restrict it to specific origins in production)
app.use(cors());

// Set up JSON parsing middleware
app.use(express.json());

// Email sending endpoint
app.post("/api/send-email", async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    // Create a nodemailer transporter using your email service configuration
    const transporter = nodemailer.createTransport({
      // Replace with your email service provider and credentials
      service: "Outlook",
      auth: {
        user: "emiliano.duraku@dela-tech.com",
        pass: "Emiljan321!",
      },
    });

    // Compose the email optionss
    const mailOptions = {
      from: "emiliano.duraku@dela-tech.com", // Replace with your email address
      to,
      subject,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const path = require("path");

module.exports = {
  // ... Other webpack configurations ...

  // Add the resolve.fallback option to handle core Node.js modules
  resolve: {
    fallback: {
      vm: require.resolve("vm-browserify"),
    },
  },

  // Add other webpack configuration properties if necessary

  // Ensure output settings are present
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
