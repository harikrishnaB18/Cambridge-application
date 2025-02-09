pipeline {
    agent any
    
    environment {
        // Use the exact NodeJS name configured in Jenkins (e.g., 'NodeJS 14.11.0')
        NODE_HOME = tool name: 'NodeJS 14.11.0', type: 'NodeJS'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Print the NodeJS path to verify it's set correctly
                    echo "NODE_HOME: ${env.NODE_HOME}"

                    // Run npm install using the NodeJS path
                    sh "${env.NODE_HOME}/bin/npm install"
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Run build command
                    sh "${env.NODE_HOME}/bin/npm run build"
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run test command
                    sh "${env.NODE_HOME}/bin/npm test"
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                script {
                    // Deploy the built application (e.g., using SSH or Docker)
                    sshagent(['deploy-key']) {
                        sh "scp -r ./build ubuntu@13.203.76.23:'/home/ubuntu/Cambridge-application"
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline completed."
        }
    }
}
