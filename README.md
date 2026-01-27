# DevFolio CMS - Dynamic Portfolio Management System

A full-stack MERN application that allows users to create, customize, and manage their professional portfolios through an intuitive content management system.

## 🚀 Features

### 🎨 Dynamic Portfolio Management
- **User Authentication** - Secure login/register system with JWT
- **Real-time Content Editing** - Multi-step form to update portfolio sections
- **Responsive Design** - Mobile-first approach with modern UI/UX
- **Theme Support** - Dark/Light mode toggle

### 📝 Content Sections
- **Hero Section** - Name, title, and professional summary
- **About Me** - Professional description and technologies
- **Skills** - Categorized technical and soft skills
- **Experience** - Work history with achievements
- **Projects** - Featured and other projects with live demos
- **Contact** - Professional contact information
- **Resume** - Upload and download resume functionality

### 🔧 Technical Features
- **Progressive Disclosure** - Step-by-step content editing
- **Image Support** - Project images and portfolio assets
- **External Links** - GitHub, LinkedIn, live project demos
- **SEO Friendly** - Optimized for search engines
- **Fast Loading** - Optimized performance and caching

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Clone Repository
```bash
git clone https://github.com/your-username/mern-editable-portfolio.git
cd mern-editable-portfolio
```

### Backend Setup
```bash
cd server
npm install

# Create .env file
echo "MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-super-secret-jwt-key
PORT=5000" > .env

# Start backend server
npm run dev
```

### Frontend Setup
```bash
cd client
npm install

# Create .env file
echo "VITE_BASE_URL=http://localhost:5000" > .env

# Start frontend development server
npm run dev
```

## 🚀 Usage

### For Portfolio Owners
1. **Register/Login** - Create account or sign in
2. **Edit Content** - Click "Edit Content" to open the form modal
3. **Update Sections** - Fill out the 5-step form:
   - Contact Info (Name, email, social links, resume)
   - About Me (Title, description, technologies)
   - Skills (Technical and soft skills by category)
   - Projects (Featured and other projects)
   - Experience (Work history and achievements)
4. **Save Changes** - Submit to update your live portfolio

### For Visitors
- **View Portfolio** - Browse the professional portfolio
- **Download Resume** - Click to download the owner's resume
- **Contact** - Use provided contact information
- **Visit Projects** - Click on project links to view live demos

## 📁 Project Structure

```
mern-editable-portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # React context (Auth)
│   │   ├── utils/          # Utility functions
│   │   └── assets/         # Static assets
│   └── public/             # Public files
├── server/                 # Express backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   └── controllers/        # Route controllers
└── README.md
```

## 🔐 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```env
VITE_BASE_URL=http://localhost:5000
```

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Portfolio
- `GET /api/portfolio` - Get user portfolio data
- `PUT /api/portfolio` - Update portfolio data

## 🎨 Components Overview

### Core Components
- **Navbar** - Navigation with auth controls
- **Hero** - Landing section with intro
- **About** - Professional summary
- **Skills** - Technical expertise
- **Experience** - Work history
- **Projects** - Portfolio projects
- **Contact** - Contact information

### Form Components
- **CustomFormModal** - Multi-step editing form
- **LoginModal** - Authentication modal
- **RegisterModal** - User registration
- **ProjectCard** - Enhanced project display
- **FeaturedProjectCard** - Highlighted projects

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd client
npm run build
# Deploy to Vercel
```

### Backend (Railway/Render)
```bash
cd server
# Deploy to your preferred platform
```

### Database (MongoDB Atlas)
- Create MongoDB Atlas cluster
- Update MONGODB_URI in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Irfan Khan**
- GitHub: [@ik-deep](https://github.com/ik-deep)
- LinkedIn: [irfan-khan173](https://linkedin.com/in/irfan-khan173)
- Email: er.irfan2798@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- MongoDB for the flexible database
- Vercel for seamless deployment

## 📊 Project Stats

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB
- **Authentication**: JWT with secure password hashing
- **Deployment**: Vercel (Frontend) + Railway (Backend)
- **Database**: MongoDB Atlas

---

⭐ Star this repository if you found it helpful!