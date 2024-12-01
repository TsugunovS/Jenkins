pipeline {
    agent any

    environment {
        IMAGE_NAME = 'tsugunovs/newapp'  // Имя вашего Docker образа (замените на ваше)
        DOCKER_CREDENTIALS = 'tsugunovs'  // Имя ваших учетных данных в Jenkins для Docker Hub
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

        stage('Push') {
            steps {
                script {
                    // Push образа в Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS}") {
                        docker.image("${IMAGE_NAME}").push('latest')
                    }
                }
            }
        }
    }
}
