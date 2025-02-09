pipeline {
    agent any
    
    environment {
        // Define the name of the NodeJS tool installed in Jenkins (configured above)
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJS'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the GitHub repository (adjust the URL as necessary)
                git branch: 'main', url: 'https://github.com/harikrishnaB18/Cambridge-application.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies using npm
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the project (e.g., npm run build)
                    sh 'npm run build'  // If you're using a build command like "build" in package.json
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy to remote server using SSH or SCP (adjust according to your deployment method)
                    sshagent(['deploy-key']) {  // Replace 'deploy-key' with your Jenkins credentials ID
                    sh "scp -r ./build ubuntu@65.1.148.76:/path/to/deploy"
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace (optional)
            cleanWs()
        }
    }
}
