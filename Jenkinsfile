pipeline {
    agent any

    environment {
        // Define necessary environment variables, like Node Version
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJS'
        PATH = "/usr/bin:${env.PATH}"  // Add Node.js to PATH
    }

    stages {
        stage('Checkout') {
            steps {
                // Pull the code from the GitHub repository
                git branch: 'main', url: 'https://github.com/harikrishnaB18/Cambridge-application.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                    // Install Node.js dependencies
                    sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                    // Run any tests
                    sh 'npm test'
            }
        }

        stage('Build Application') {
            steps {
                    // Build the application (adjust as necessary)
                    sh 'npm run build'
            }
        }

        stage('Deploy to Server') {
            steps {
                    // Deploy the built application (e.g., using SSH or Docker)
                    sshagent(['deploy-key']) {
                        sh "scp -r ./build ubuntu@13.233.9.110:/home/ubuntu/Cambridge-application'"
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
        }
    }
}
