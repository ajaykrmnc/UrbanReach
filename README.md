# UrbanReach

![UrbanReach Logo](https://media.licdn.com/dms/image/C4D0BAQHCrJ5ISvAluA/company-logo_200_200/0/1653283411007?e=1694649600&v=beta&t=G3WS63xM9ROVnyQgR-Vs3f_aqpEQytviNIvbAkk7WZM)

Urban Reach is India's largest Fresh Produce Supply Chain Company. We are pioneers in solving one of the toughest supply chain problems of the world by leveraging innovative technology. We source fresh produce from farmers and deliver them to businesses within 12 hours.. This repository contains the source code for our web application, which serves as a central hub for our users to access information, manage their urban farms, and connect with other urban farmers.

Visit the live website: [urbanreach.netlify.app](https://urbanreach.netlify.app)

## Team

- Ajay Kumar
- Shivankar Mehta (IITISM Dhanbad)
- Ajeet Kumar (IIT BHU)
- Sanjeet Kumar


## Technology Stack

- Frontend: React.js
- Backend: Node.js
- Database: MongoDB
- Full Stack Framework: MERN (MongoDB, Express.js, React.js, Node.js)

## Deployment

- Frontend: Deployed on Netlify
- Backend: Deployed on Render.com

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/urbanreach/urbanreach.git
   ```

2. Install the dependencies for both the frontend and backend:

   ```bash
   cd urbanreach/client
   npm install

   cd ../server
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the required environment variables:

   ```plaintext
   PORT=3000
   CONNECTION_URL=<your_mongodb_uri>
   ```

4. Start the development servers:

   ```bash
   cd ../frontend
   npm start

   cd ../backend
   npm run dev
   ```

5. Access the web application at `http://localhost:3000` in your browser.

## Contributing

We welcome contributions from everyone! If you would like to contribute to UrbanReach, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add your commit message here"
   ```

4. Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request on the main repository.

6. Wait for the review and approval of your pull request. Once approved, your changes will be merged.

---

Thank you for your interest in UrbanReach! We hope our platform will contribute to the success of your urban farming endeavors. If you have any questions or feedback, please don't hesitate to reach out to us. Happy farming!
