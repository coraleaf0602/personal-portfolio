const path = require('path');
const express = require('express'); 
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); 

const PORT = process.env.PORT || 3001; 

const app = express(); 
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/contact", (req, res) => {
  res.json({ message: "Hello from server!"});
})

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  console.log('Received a contact form submission:', req.body); // Log the request body

  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log('Error sending email:', error); // Log any errors
      res.json(error);
    } else {
      console.log('Email sent successfully');
      res.json({ code: 200, status: "Message Sent" });
    }
  });
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
})

app.listen(PORT, () => { 
    console.log(`Server is online on port: ${PORT}`);
})
