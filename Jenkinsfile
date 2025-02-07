pipeline {
    agent any

    environment {
        REACT_APP_DIR = '/home/ubuntu/projects/Cambridge-application' 
        BUILD_DIR = "$REACT_APP_DIR/build"
        DEPLOY_DIR = '/var/www/react-app'
        EC2_IP = '15.206.178.33'  // Your EC2 instance IP
    }

    stages {
        stage('Install Dependencies') {
    steps {
        sh 'npm ci --cache ~/.npm'
    }
}


        stage('Build React App') {
            steps {
                // Build the React app in the existing project directory
                sh """
                    cd $REACT_APP_DIR
                    npm run build  // Run the build command for your React app
                """
            }
        }

        stage('Deploy to Server') {
            steps {
                // SSH into the EC2 instance and deploy the app
                withCredentials([sshUserPrivateKey(credentialsId: 'ec2-ssh-key', keyFileVariable: 'SSH_KEY_PATH')]) {
                    sh """
                        ssh -i ${SSH_KEY_PATH} ubuntu@15.206.178.33 << EOF
                            cd $REACT_APP_DIR
                            git pull origin main  // Pull the latest changes if applicable
                            npm ci  // Install dependencies again on the server
                            npm run build  // Rebuild the React app
                            sudo rm -rf $DEPLOY_DIR  // Remove existing deployment folder
                            sudo mkdir -p $DEPLOY_DIR  // Create the deploy directory
                            sudo cp -r $BUILD_DIR/* $DEPLOY_DIR/  // Copy build files to the server
                            sudo systemctl restart nginx  // Restart Nginx to serve the updated app
                        EOF
                    """
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
