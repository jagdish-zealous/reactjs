pipeline {
    agent any
    tools {nodejs "nodejs"}
    triggers {
        pollSCM('* * * * *') // Runs every minute (use sparingly)
    }
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
                bat 'xcopy /Y /E /I build C:\\deploy\\my-react-app\\' 
            }
        }
    }
}