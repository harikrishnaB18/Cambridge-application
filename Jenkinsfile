pipeline {
    agent any

    environment {
        // Ensure Node.js and npm are in the PATH
        PATH = "/usr/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from GitHub
                git branch: 'main', url: 'https://github.com/harikrishnaB18/Cambridge-application.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        // stage('Run Tests') {
        //     steps {
        //         // Run any tests
        //         sh 'npm test'
        //     }
        // }

        stage('Build Application') {
            steps {
                // Build the React application
                sh 'npm run build'
            }
        }

        stage('Deploy to Server') {
            steps {
                sshagent(['deploy-key']) {
                    sh """
                    ssh ubuntu@3.108.64.9 'mkdir -p /home/ubuntu/Cambridge-application/build'
                    scp -r ./build/* ubuntu@3.108.64.9:/home/ubuntu/Cambridge-application/build/
                    """
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}
