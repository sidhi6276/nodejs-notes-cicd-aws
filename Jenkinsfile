pipeline {
    agent any

    environment {
        IMAGE_NAME = "sidhigoel/nodejs-notes-app"
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/sidhi6276/nodejs-notes-cicd-aws.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Test Container') {
            steps {
                sh 'docker run --rm $IMAGE_NAME echo "Container test passed"'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh '''
                docker rm -f notes-app-container || true
                docker-compose up --build -d
                '''
            }
        }
    }

    post {
        success {
            echo '🚀 Deployment successful'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}
