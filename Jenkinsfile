pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'tsugunovs/newapp' 
        DOCKER_CREDENTIALS = 'dockerhub-credentials' 
        GIT_REPO = 'https://github.com/TsugunovS/Jenkins.git' 
    }

    stages {
        stage('Checkout') {
            steps {
                // Клонирование репозитория
                git branch: 'master', url: "${env.GIT_REPO}"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Сборка Docker-образа
                    docker.build("${env.DOCKER_IMAGE}")
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Запуск тестов внутри контейнера
                    docker.image("${env.DOCKER_IMAGE}").inside {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Публикация образа на Docker Hub
                    docker.withRegistry('', "${env.DOCKER_CREDENTIALS}") {
                        docker.image("${env.DOCKER_IMAGE}").push('latest')
                    }
                }
            }
        }
    }
}

