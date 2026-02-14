# 🚀 Node.js Notes App — Enterprise DevOps CI/CD Project

A production-style DevOps project demonstrating modern containerization, automated CI/CD pipelines, and cloud deployment using **Docker, Jenkins, MongoDB, and AWS EC2**.

This project replicates a real-world industry deployment workflow used by DevOps teams to automate software delivery.

---

## 🌐 Live Application

👉 http://13.201.3.97/

The application is deployed on AWS EC2 and automatically updated via a Jenkins-powered CI/CD pipeline. Every GitHub push triggers automatic rebuild and redeployment.

---

## 📌 Project Objective

The goal of this project is to design and implement a fully automated DevOps pipeline that eliminates manual deployment and ensures continuous delivery of a containerized Node.js application.

This system demonstrates:

- Infrastructure automation
- Container orchestration
- Secure credential management
- Registry-based deployment
- Continuous integration and delivery
- Cloud-based hosting

---

## 🏗 System Architecture

```
Developer → GitHub → Jenkins CI/CD → Docker Build → Docker Hub → AWS EC2
```

### Architecture Explanation

- Developers push code to GitHub
- Jenkins triggers pipeline automatically
- Docker image rebuilds
- Image pushed to Docker Hub
- EC2 pulls latest image
- Containers redeploy without downtime

---

## ⚙️ Tech Stack

| Layer | Technology |
|------|------------|
| Application | Node.js |
| Containerization | Docker |
| Orchestration | Docker Compose |
| Database | MongoDB |
| CI/CD | Jenkins |
| Cloud | AWS EC2 |
| Version Control | GitHub |
| Registry | Docker Hub |
| OS | Linux (Ubuntu) |

---

## 🔁 CI/CD Pipeline Workflow

1. Code pushed to GitHub
2. Jenkins pipeline triggers automatically
3. Source code is cloned
4. Docker image is built
5. Container health test runs
6. Image pushed to Docker Hub
7. EC2 redeploys updated containers
8. Live application refreshes

Fully automated deployment lifecycle.

---

## 📂 Repository Structure

```
nodejs-notes-cicd-aws/
│
├── data/                    # Data storage directory
│   └── notes.json           # JSON file for storing notes
│
├── public/                  # Static frontend files
│   ├── index.html           # Main HTML interface
│   ├── styles.css           # Styling for the application
│   └── script.js            # Client-side JavaScript logic
│
├── node_modules/            # Node.js dependencies
│
├── server.js                # Express server and API endpoints
├── package.json             # Project metadata and dependencies
├── package-lock.json        # Locked versions of dependencies
│
├── Dockerfile               # Docker image configuration
├── docker-compose.yml       # Docker Compose orchestration
├── Jenkinsfile              # Jenkins pipeline definition
│
└── README.md                # Project documentation
```

---

## 📸 Screenshots

### Live Application Interface

![Notes App Screenshot 1](app1(1).png)

![Notes App Screenshot 2](app1(2).png)

---

## 🐳 Docker Image

Docker Hub repository:

👉 https://hub.docker.com/r/sidhigoel/nodejs-notes-app

Pull image manually:

```
docker pull sidhigoel/nodejs-notes-app
```

Run locally:

```
docker run -p 80:5000 sidhigoel/nodejs-notes-app
```

---

## 🔐 Security Features

- Jenkins credentials manager used for Docker login
- Passwords never stored in code
- Secure automated registry authentication
- Container isolation
- Persistent storage using Docker volumes

---

## 🧠 Key Learning Outcomes

- End-to-end CI/CD automation
- Docker image lifecycle management
- Jenkins pipeline scripting
- Cloud infrastructure deployment
- Persistent container storage
- DevOps best practices
- Production-grade deployment workflow
- Automation-driven software delivery

---

## 💼 Resume Highlight

> Built a production-style DevOps pipeline to automate build, test, registry push, and live deployment of a containerized Node.js application on AWS EC2 using Jenkins and Docker.

---

## 🚀 Future Enhancements

- GitHub webhook auto-trigger
- NGINX reverse proxy
- HTTPS domain integration
- Monitoring dashboard
- Kubernetes deployment
- Auto-scaling infrastructure

---

## 👩‍💻 Author

**Sidhi Goel**  
DevOps Engineer in Progress 🚀  
Passionate about Automation & Cloud Infrastructure
