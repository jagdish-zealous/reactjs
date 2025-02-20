pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }       

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                bat 'xcopy /E /I build C:\\deploy\\my-react-app\\'
            }
        }
    }
}