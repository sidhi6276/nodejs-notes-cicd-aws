markdown# 📝 Node.js Notes App - CI/CD Pipeline with AWS

A modern, full-stack notes application built with Node.js and Express, featuring automated CI/CD deployment using Jenkins and Docker containerization on AWS infrastructure.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

## 🌟 Project Overview

This project demonstrates a production-ready implementation of a notes management application with enterprise-grade CI/CD practices. Users can create, read, update, and delete notes through an intuitive web interface, while the backend handles all operations efficiently with persistent JSON-based storage.

### Key Highlights
- **Automated CI/CD Pipeline**: Seamless integration with Jenkins for continuous integration and deployment
- **Containerized Architecture**: Docker-based deployment ensuring consistency across environments
- **AWS Cloud Deployment**: Scalable infrastructure hosted on Amazon Web Services
- **RESTful API Design**: Clean and maintainable API architecture
- **Responsive UI**: User-friendly interface for managing notes

## 🚀 Features

- ✅ Create new notes with title and content
- ✅ View all saved notes in a clean, organized interface
- ✅ Update existing notes with ease
- ✅ Delete notes when no longer needed
- ✅ Persistent storage using JSON file system
- ✅ Dockerized application for easy deployment
- ✅ Automated testing and deployment via Jenkins
- ✅ Production-ready AWS infrastructure

## 🛠️ Tech Stack

### Backend
- **Node.js**: JavaScript runtime for server-side logic
- **Express.js**: Fast, unopinionated web framework for Node.js
- **File System (fs)**: Native Node.js module for data persistence

### DevOps & Infrastructure
- **Docker**: Containerization platform
- **Docker Compose**: Multi-container Docker application management
- **Jenkins**: Automation server for CI/CD pipelines
- **AWS EC2**: Cloud compute instances for hosting
- **GitHub**: Version control and source code management

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling and responsive design
- **JavaScript**: Client-side interactivity

## 📁 Project Structure
```
nodejs-notes-cicd-aws/
│
├── data/                    # Data storage directory
│   └── notes.json          # JSON file for storing notes
│
├── public/                  # Static frontend files
│   ├── index.html          # Main HTML interface
│   ├── styles.css          # Styling for the application
│   └── script.js           # Client-side JavaScript logic
│
├── node_modules/            # Node.js dependencies
│
├── server.js               # Express server and API endpoints
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Locked versions of dependencies
│
├── Dockerfile              # Docker image configuration
├── docker-compose.yml      # Docker Compose orchestration
├── Jenkinsfile             # Jenkins pipeline definition
│
└── README.md               # Project documentation (this file)
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Docker & Docker Compose
- Jenkins (for CI/CD)
- AWS Account (for cloud deployment)
- Git

### Local Development Setup

1. **Clone the repository**
```bash
   git clone https://github.com/sidhi6276/nodejs-notes-cicd-aws.git
   cd nodejs-notes-cicd-aws
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the application**
```bash
   node server.js
```

4. **Access the application**
   
   Open your browser and navigate to:
```
   http://localhost:3000
```

### Docker Deployment

1. **Build and run with Docker Compose**
```bash
   docker-compose up --build
```

2. **Run Docker container manually**
```bash
   # Build the image
   docker build -t nodejs-notes-app .
   
   # Run the container
   docker run -d -p 3000:3000 --name notes-app nodejs-notes-app
```

3. **Stop the container**
```bash
   docker-compose down
   # OR
   docker stop notes-app
```

## 🔄 CI/CD Pipeline

### Jenkins Pipeline Workflow

The Jenkinsfile in this repository defines an automated pipeline with the following stages:

1. **Source Code Checkout**: Pulls latest code from GitHub repository
2. **Build Stage**: Installs dependencies and prepares the application
3. **Test Stage**: Runs automated tests (if configured)
4. **Docker Image Build**: Creates Docker image with application code
5. **Push to Registry**: Pushes image to Docker registry (optional)
6. **Deploy to AWS**: Deploys containerized app to AWS EC2 instance

### Setting Up Jenkins

1. **Install Jenkins plugins**:
   - GitHub Integration
   - Docker Pipeline
   - AWS Credentials
   - NodeJS Plugin

2. **Configure Jenkins credentials**:
   - GitHub credentials for repository access
   - AWS credentials (Access Key & Secret Key)
   - Docker registry credentials (if using)

3. **Create Jenkins Pipeline Job**:
   - New Item → Pipeline
   - Configure SCM → GitHub repository URL
   - Script Path: `Jenkinsfile`
   - Enable GitHub webhook for automatic triggers

4. **Configure GitHub Webhook**:
   - Repository Settings → Webhooks → Add webhook
   - Payload URL: `http://<jenkins-server>:8080/github-webhook/`
   - Content type: `application/json`
   - Events: Push events

## ☁️ AWS Deployment

### EC2 Instance Setup

1. **Launch EC2 Instance**:
   - AMI: Ubuntu Server 20.04 LTS or Amazon Linux 2
   - Instance Type: t2.micro (for testing) or t2.small (production)
   - Security Group: Allow ports 22 (SSH), 80 (HTTP), 3000 (App), 8080 (Jenkins)

2. **Install Docker on EC2**:
```bash
   sudo apt update
   sudo apt install docker.io -y
   sudo systemctl start docker
   sudo systemctl enable docker
   sudo usermod -aG docker $USER
```

3. **Install Docker Compose**:
```bash
   sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
```

4. **Deploy Application**:
```bash
   git clone https://github.com/sidhi6276/nodejs-notes-cicd-aws.git
   cd nodejs-notes-cicd-aws
   docker-compose up -d
```

### Security Group Configuration

| Type | Protocol | Port Range | Source |
|------|----------|------------|--------|
| SSH | TCP | 22 | Your IP |
| HTTP | TCP | 80 | 0.0.0.0/0 |
| Custom TCP | TCP | 3000 | 0.0.0.0/0 |
| Custom TCP | TCP | 8080 | Your IP |

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Retrieve all notes |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

### Request/Response Examples

**Create a Note (POST /api/notes)**
```json
Request Body:
{
  "title": "My First Note",
  "content": "This is the content of my note"
}

Response:
{
  "id": "1707912345678",
  "title": "My First Note",
  "content": "This is the content of my note",
  "createdAt": "2024-02-14T10:30:00.000Z"
}
```

## 🧪 Testing
```bash
# Run tests (if test suite is configured)
npm test

# Check application health
curl http://localhost:3000/health
```

## 📝 Environment Variables

Create a `.env` file in the root directory (optional):
```env
PORT=3000
NODE_ENV=production
DATA_PATH=./data/notes.json
```

## 🔒 Best Practices Implemented

- ✅ **Containerization**: Docker ensures consistent environments
- ✅ **Infrastructure as Code**: Jenkinsfile and docker-compose.yml
- ✅ **Version Control**: Git for source code management
- ✅ **Automated Deployment**: Jenkins pipeline for CI/CD
- ✅ **Cloud-Native**: AWS EC2 for scalable hosting
- ✅ **Separation of Concerns**: Clear project structure
- ✅ **Error Handling**: Proper error responses in API

## 🐛 Troubleshooting

### Application won't start
- Verify Node.js version: `node --version`
- Check if port 3000 is available: `lsof -i :3000`
- Review logs: `docker logs notes-app`

### Jenkins pipeline fails
- Verify GitHub webhook configuration
- Check Jenkins credentials
- Review Jenkins console output
- Ensure Docker is running on Jenkins server

### AWS deployment issues
- Verify security group rules
- Check EC2 instance status
- Ensure Docker is installed and running
- Review application logs on EC2

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b `)
3. Commit your changes (`git commit -m `)
4. Push to the branch (`git push origin `)
5. Open a Pull Request


## 👤 Author

**Sidhi**
- GitHub: [@sidhi6276](https://github.com/sidhi6276)

## 🙏 Acknowledgments

- Node.js and Express.js communities
- Docker documentation and best practices
- Jenkins open-source community
- AWS documentation and tutorials

## 📞 Support

For support, please open an issue in the GitHub repository or contact the maintainer.
email id:sidhigoel200@gmail.com

⭐ If you found this project helpful, please give it a star!

**Happy Coding!** 🚀
Sidhi goel
