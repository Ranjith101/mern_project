const express = require('express');
const app = express();
const sendmail = require('sendmail')();
const cors = require('cors');

// Middleware to parse incoming request data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());

// Route to handle the form submission
app.post('/enquiry', (req, res) => {
  // Retrieve form data from request body
  const { name, email, mobile, message } = req.body;

  // Configure the email options
  const mailOptions = {
    from: 't9852242@gmail.com',
    to: email, // Use the email from the form as the recipient
    subject: 'New Enquiry',
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`
  };

  // Send email using sendmail
  sendmail(mailOptions, (error, reply) => {
    if (error) {
      console.log('Error:', error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    } else {
      console.log('Email sent:', reply);
      res.status(200).json({ message: 'Enquiry received' });
    }
  });
});

// Start the server
const port = 3000; // Set your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
