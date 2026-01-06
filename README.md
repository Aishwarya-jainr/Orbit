# Orbit 🌐

A modern social networking platform with **AI-powered content moderation**, **context-based authentication**, and **seamless Light/Dark mode**.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.2.0-61dafb.svg)

## 🚀 Features

- **🌓 Light/Dark Mode** - Seamless theme switching with system preference detection
- **User Authentication & Authorization** - JWT-based authentication with refresh tokens
- **Context-Based Security** - Enhanced security with device and location tracking
- **Social Networking** - Posts, comments, likes, follows, and user profiles
- **Community System** - Create and join communities around shared interests
- **Content Moderation** - AI-powered content moderation (optional)
- **Email Verification** - Secure email-based account verification
- **Real-time Updates** - Dynamic content updates
- **Responsive Design** - Beautiful UI built with React and Tailwind CSS
- **Admin Dashboard** - Comprehensive admin tools for platform management

## 🛠️ Tech Stack

### Frontend
- **React** 18.2 - Modern UI library
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client
- **Heroicons** - Beautiful icons

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Passport.js** - Authentication middleware
- **Nodemailer** - Email service

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (Atlas account or local installation)
- **Git**

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Aishwarya-jainr/SocioEcho.git
cd Orbit
```

### 2. Install Dependencies

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Environment Configuration

#### Server Configuration

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Create `.env` file from the example:
   ```bash
   cp .env.example .env
   ```

3. Edit `.env` and fill in your configuration:

**Required Variables:**
```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Security
SECRET=your_jwt_secret_key
REFRESH_SECRET=your_refresh_secret_key
CRYPTO_KEY=your_32_character_key

# Server
PORT=4000
CLIENT_URL=http://localhost:3000

# Email (Gmail recommended)
EMAIL_SERVICE=gmail
EMAIL=your-email@gmail.com
PASSWORD=your_gmail_app_password
```

**How to Get These:**

- **MongoDB URI**: 
  - Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - Create a cluster and get connection string
  
- **JWT Secrets**: Generate random strings:
  ```bash
  node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
  ```

- **Gmail App Password**:
  1. Enable 2-Step Verification in your Google Account
  2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
  3. Generate a new app password
  4. Use this password in your `.env` file

#### Client Configuration (Optional)

```bash
cd client
cp .env.example .env
```

For development, the client uses a proxy (already configured in `package.json`).

### 4. Running the Application

#### Development Mode

**Terminal 1 - Start Backend:**
```bash
cd server
npm start
```
Server will run on `http://localhost:4000`

**Terminal 2 - Start Frontend:**
```bash
cd client
npm start
```
Client will run on `http://localhost:3000`

#### Production Mode

**Backend:**
```bash
cd server
npm run production
```

**Frontend:**
```bash
cd client
npm run build
```

## 🧪 Testing the Setup

1. **Check Server Status:**
   - Navigate to: `http://localhost:4000/server-status`
   - Should return: `{"message": "Server is up and running!"}`

2. **Check Client:**
   - Navigate to: `http://localhost:3000`
   - Application should load without errors

## 📚 API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/refresh` - Refresh access token
- `GET /auth/verify/:token` - Verify email

### Users
- `GET /users/:username` - Get user profile
- `PUT /users/:username` - Update user profile
- `GET /users/:username/followers` - Get followers
- `GET /users/:username/following` - Get following

### Posts
- `GET /posts` - Get all posts
- `POST /posts` - Create post
- `GET /posts/:id` - Get post by ID
- `PUT /posts/:id` - Update post
- `DELETE /posts/:id` - Delete post
- `POST /posts/:id/like` - Like/unlike post
- `POST /posts/:id/comment` - Comment on post

### Communities
- `GET /communities` - Get all communities
- `POST /communities` - Create community
- `GET /communities/:id` - Get community details
- `POST /communities/:id/join` - Join community

## 🚀 Deployment

### Deploy to Vercel

#### Backend Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy server:
   ```bash
   cd server
   vercel
   ```

3. Set environment variables in Vercel dashboard

#### Frontend Deployment

1. Update `client/package.json` proxy to your deployed backend URL

2. Deploy client:
   ```bash
   cd client
   vercel
   ```

3. Update `CLIENT_URL` in server environment variables to your deployed frontend URL

## 📁 Project Structure

```
SocioEcho/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── redux/         # Redux store & slices
│   │   ├── utils/         # Utility functions
│   │   └── App.jsx        # Main app component
│   └── package.json
│
├── server/                # Node.js backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Custom middlewares
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── services/         # Business logic
│   ├── utils/            # Utility functions
│   ├── app.js            # Express app
│   └── package.json
│
└── README.md
```

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt for secure password storage
- **Environment Variables** - Sensitive data stored securely
- **CORS Protection** - Cross-origin resource sharing controls
- **Rate Limiting** - API request rate limiting
- **Email Verification** - Account verification via email
- **Context-Based Auth** - Device and location tracking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Aishwarya Jain**
- GitHub: [@Aishwarya-jainr](https://github.com/Aishwarya-jainr)

## 🙏 Acknowledgments

- Original project inspiration: [SocialEcho by Neaz](https://github.com/NeazMorshed180031/SocialEcho)
- Built with love using React and Node.js

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

**Happy Coding! 🎉**
