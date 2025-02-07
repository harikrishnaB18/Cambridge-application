pipeline {
    agent any

    environment {
        REACT_APP_DIR = '/home/ubuntu/projects/Cambridge-application' 
        BUILD_DIR = "$REACT_APP_DIR/build"
        DEPLOY_DIR = '/var/www/react-app'
        EC2_IP = '65.0.7.33'  
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/harikrishnaB18/Cambridge-application.git', branch: 'main'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Server') {
            steps {
                sh """
                    ssh -i /Downloads/ubuntu-key.pem ubuntu@65.0.7.33 << 'EOF'
                        cd $REACT_APP_DIR
                        git pull origin main
                        npm install
                        npm run build
                        sudo rm -rf $DEPLOY_DIR
                        sudo mkdir -p $DEPLOY_DIR
                        sudo cp -r $BUILD_DIR/* $DEPLOY_DIR/
                        sudo systemctl restart nginx
                    EOF
                """
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
