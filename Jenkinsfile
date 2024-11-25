pipeline {
    agent any

    environment {
        IMAGE_NAME = 'TsugunovS/app'  // Имя вашего Docker образа (замените на ваше)
        DOCKER_CREDENTIALS = 'TsugunovS'  // Имя ваших учетных данных в Jenkins для Docker Hub
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Сборка Docker образа
                    docker.build("${IMAGE_NAME}")
                }
            }
        }

        stage('Test') {
            steps {
                script {
                        sh 'npm install'  
                        sh 'npm test'    
                    }
                }
            }
        }

        stage('Push') {
            steps {
                script {
                    // Push образа в Docker Hub
                    docker.withRegistry('https://hub.docker.com', "${DOCKER_CREDENTIALS}") {
                        docker.image("${IMAGE_NAME}").push('latest')
                    }
                }
            }
        }
    }
}
