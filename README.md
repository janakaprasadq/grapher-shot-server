# Contact Form Backend Server

This is the backend server for handling a contact form. It processes form submissions and sends emails using **Nodemailer**. The server is built with **Node.js** and **Express**.

## Features

- Receives form submissions via a POST endpoint.
- Sends emails using Gmail.
- Input validation and error handling.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/janakaprasadq/grapher-shot-server
   cd grapher-shot-server
2. Install dependencies:
   ```bash
   npm install
3. Create a .env file in the root directory and add the following:
   ```bash
   EMAIL_USER = your-email@gmail.com
   EMAIL_PASS=your - app-password
   SENDER_EMAIL = need a other email for send mails

4. Start the server
   ```bash
   npm start
The server will run on http://localhost:5000.
