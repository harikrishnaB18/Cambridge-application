pipeline {
    agent any

    environment {
        // Ensure that Node.js and npm are included in the PATH
        PATH = "/usr/bin:${env.PATH}"  // Add /usr/bin to PATH
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
                sh 'npm install'  // or 'npm install' if preferred
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
                // Build the application (adjust as necessary)
                sh 'npm run build'
            }
        }

        stage('Deploy to Server') {
            steps {
                // Deploy the built application (e.g., using SSH or Docker)
                sshagent(['deploy-key']) {
                    sh "scp -r ./build ubuntu@15.207.98.35:/home/ubuntu/Cambridge-application/"
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs() // Cleans up the workspace if necessary
        }
    }
}
