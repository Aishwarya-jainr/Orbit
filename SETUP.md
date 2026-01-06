# SocioEcho Setup Guide

This guide provides detailed, step-by-step instructions for setting up the SocioEcho application.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [MongoDB Setup](#mongodb-setup)
3. [Gmail App Password Setup](#gmail-app-password-setup)
4. [Environment Configuration](#environment-configuration)
5. [Installation](#installation)
6. [Running the Application](#running-the-application)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Software
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)
- **MongoDB** account

### Verify Installation
```bash
node --version   # Should be v14 or higher
npm --version    # Should be 6 or higher
git --version
```

## MongoDB Setup

### Option 1: MongoDB Atlas (Cloud - Recommended)

1. **Create an Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account

2. **Create a Cluster**
   - Click "Build a Cluster"
   - Choose FREE tier (M0)
   - Select a cloud provider and region close to you
   - Click "Create Cluster" (takes 3-5 minutes)

3. **Create Database User**
   - Go to "Database Access" in left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Username: `socioecho-user` (or your choice)
   - Password: Create a strong password (save it!)
   - Database User Privileges: "Atlas admin"
   - Click "Add User"

4. **Whitelist IP Address**
   - Go to "Network Access" in left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" in left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`
   - Replace `<password>` with your actual password
   - Add database name: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/socioecho?retryWrites=true&w=majority`

### Option 2: Local MongoDB

1. **Install MongoDB**
   - Download from [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - Follow installation instructions for your OS

2. **Start MongoDB**
   ```bash
   # macOS (if installed via Homebrew)
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod

   # Windows
   # MongoDB runs as a service automatically
   ```

3. **Connection String**
   ```
   mongodb://localhost:27017/socioecho
   ```

## Gmail App Password Setup

The application sends verification emails using Gmail. Here's how to set it up:

### Step 1: Enable 2-Step Verification

1. Go to your [Google Account](https://myaccount.google.com/)
2. Click "Security" in the left sidebar
3. Under "Signing in to Google," select "2-Step Verification"
4. Follow the prompts to enable it

### Step 2: Generate App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Or: Google Account → Security → 2-Step Verification → App passwords
2. You might need to sign in again
3. Under "Select app," choose "Mail"
4. Under "Select device," choose "Other (Custom name)"
5. Type "SocioEcho" and click "Generate"
6. **Save the 16-character password** shown - you'll use this in `.env`

### Alternative: Use Gmail with Regular Password

If you don't want to use 2-Step Verification:
1. Go to [Less secure app access](https://myaccount.google.com/lesssecureapps)
2. Turn ON "Allow less secure apps"
3. Use your regular Gmail password

⚠️ **Warning**: App passwords are more secure. This option is less recommended.

## Environment Configuration

### 1. Generate Security Keys

Open terminal and run these commands to generate secure keys:

```bash
# Generate JWT Secret (64 bytes)
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Generate Refresh Secret (64 bytes)
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Generate Crypto Key (16 bytes = 32 hex characters)
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

**Save these outputs** - you'll need them for your `.env` file.

### 2. Create Server .env File

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Copy the example file:
   ```bash
   cp .env.example .env
   ```

3. Edit `.env` file with your values:
   ```env
   # Database
   MONGODB_URI=mongodb+srv://your-user:your-password@cluster.mongodb.net/socioecho?retryWrites=true&w=majority

   # Server
   PORT=4000
   CLIENT_URL=http://localhost:3000

   # Security (use the generated keys from above)
   SECRET=your_generated_64_byte_hex_string
   REFRESH_SECRET=your_generated_different_64_byte_hex_string
   CRYPTO_KEY=your_generated_32_character_hex_string

   # Email
   EMAIL_SERVICE=gmail
   EMAIL=your-email@gmail.com
   PASSWORD=your_16_character_app_password

   # Optional API keys (leave empty for now)
   TEXTRAZOR_API_KEY=
   TEXTRAZOR_API_URL=
   PERSPECTIVE_API_KEY=
   PERSPECTIVE_API_DISCOVERY_URL=
   CLASSIFIER_API_URL=
   INTERFACE_API_KEY=
   INTERFACE_API_URL=
   ```

### 3. Create Client .env File (Optional)

```bash
cd ../client
cp .env.example .env
```

For development, you don't need to modify this file.

## Installation

### 1. Clone Repository (if you haven't already)

```bash
git clone https://github.com/Aishwarya-jainr/SocioEcho.git
cd SocioEcho
```

### 2. Install Server Dependencies

```bash
cd server
npm install
```

Expected output: All dependencies installed without errors.

### 3. Install Client Dependencies

```bash
cd ../client
npm install
```

This may take a few minutes. Expected output: All dependencies installed without errors.

## Running the Application

### Development Mode (Recommended)

You'll need **two terminal windows**.

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

Expected output:
```
Server up and running on port 4000!
Connected to database: socioecho
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

Expected output:
```
Compiled successfully!
You can now view client in the browser.
Local: http://localhost:3000
```

### Verify Everything Works

1. **Backend Health Check:**
   - Open browser: `http://localhost:4000/server-status`
   - Should see: `{"message":"Server is up and running!"}`

2. **Frontend:**
   - Open browser: `http://localhost:3000`
   - Should see the SocioEcho homepage

## Troubleshooting

### Problem: "Cannot connect to database"

**Solutions:**
- Check your `MONGODB_URI` is correct
- Verify you replaced `<password>` in the connection string
- Check if you whitelisted your IP in MongoDB Atlas
- Ensure MongoDB service is running (if local)

### Problem: "Port 4000 is already in use"

**Solution:**
```bash
# Find process using port 4000
lsof -i :4000

# Kill the process (replace <PID> with the actual process ID)
kill -9 <PID>

# Or use a different port in .env
PORT=5000
```

### Problem: "Email verification not working"

**Solutions:**
- Verify you're using App Password, not regular Gmail password
- Check `EMAIL` and `PASSWORD` in `.env` are correct
- Ensure 2-Step Verification is enabled
- Check spam folder

### Problem: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem: Client won't start on port 3000

**Solution:**
- Check if another app is using port 3000
- When prompted, allow it to use a different port (e.g., 3001)
- Remember to update `CLIENT_URL` in server `.env`

### Problem: "undefined" errors in browser console

**Solution:**
- Make sure backend is running first
- Check browser console for specific error messages
- Verify proxy setting in `client/package.json`:
  ```json
  "proxy": "http://127.0.0.1:4000"
  ```

## Next Steps

Once everything is running:

1. **Create an Admin Account:**
   ```bash
   cd server
   node scripts/create-admin.js
   ```

2. **Explore the Application:**
   - Register a new user
   - Verify email
   - Create a post
   - Join communities

3. **Read the API Documentation:**
   - Check `README.md` for available endpoints

4. **Deploy to Production:**
   - See deployment section in `README.md`

## Getting Help

If you're still experiencing issues:
1. Check the main [README.md](./README.md)
2. Open an issue on [GitHub](https://github.com/Aishwarya-jainr/SocioEcho/issues)
3. Review error messages carefully - they often indicate the exact problem

---

**Happy coding! 🚀**
