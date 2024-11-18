pipeline {
    agent any

    environment {
<<<<<<< HEAD
        IMAGE_NAME = 'TsugunovS/app'  // Имя вашего Docker образа (замените на ваше)
        DOCKER_CREDENTIALS = 'TsugunovS'  // Имя ваших учетных данных в Jenkins для Docker Hub
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Сборка Docker образа
                    docker.build("${IMAGE_NAME}")
=======
        DOCKER_IMAGE = 'tsugunovs/app' // Docker-образ
        DOCKER_CREDENTIALS = 'dockerhub-credentials'
        GIT_REPO = 'https://github.com/TsugunovS/Jenkins' 
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: "${env.GIT_REPO}"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${env.DOCKER_IMAGE}")
>>>>>>> 0cc3de9 (Updated Jenkinsfile)
                }
            }
        }

<<<<<<< HEAD
        stage('Test') {
            steps {
                script {
                    // Запуск тестов внутри контейнера
                    docker.image("${IMAGE_NAME}").inside {
                        sh 'npm install'  // Установка зависимостей
                        sh 'npm test'     // Запуск тестов
=======
        stage('Run Tests') {
            steps {
                script {
                    docker.image("${env.DOCKER_IMAGE}").inside {
                        sh 'npm install'
                        sh 'npm test'
>>>>>>> 0cc3de9 (Updated Jenkinsfile)
                    }
                }
            }
        }

<<<<<<< HEAD
        stage('Push') {
            steps {
                script {
                    // Push образа в Docker Hub
                    docker.withRegistry('https://hub.docker.com', "${DOCKER_CREDENTIALS}") {
                        docker.image("${IMAGE_NAME}").push('latest')
=======
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', "${env.DOCKER_CREDENTIALS}") {
                        docker.image("${env.DOCKER_IMAGE}").push('latest')
>>>>>>> 0cc3de9 (Updated Jenkinsfile)
                    }
                }
            }
        }
    }
}

<<<<<<< HEAD
=======



















#pipeline {
#    agent any
#
#    environment {
#        DOCKER_CREDENTIALS = 'tsugunovs'
#        DOCKER_IMAGE_NAME = 'tsugunovs/app:latest'
#    }
#
#    stages {
#        stage('Check Workspace') {
#            steps {
#                script {
#                    sh 'pwd'
#                    sh 'ls -la'
#                }
#            }
#        }
#
#        stage('Build Docker Image') {
#            steps {
#                script {
#                    // Сборка Docker образа в текущем рабочем каталоге
#                    docker.build("${DOCKER_IMAGE_NAME}", "hello-world-app")
#                }
#            }
#        }
#
#        stage('Test Application') {
#            steps {
#                script {
#                    // Запуск контейнера для тестирования
#                    sh "docker run --rm ${DOCKER_IMAGE_NAME} npm test"
#                }
#            }
#        }
#
#        stage('Push to Docker Hub') {
#            steps {
#                script {
#                    // Аутентификация и загрузка образа
#                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS) {
#                        docker.image("${DOCKER_IMAGE_NAME}").push()
#                    }
#                }
#            }
#        }
#    }#
#
#    post {
#        always {
#            script {
#                try {
#                    sh "docker rmi ${DOCKER_IMAGE_NAME}"
#                } catch (e) {
#                    echo "Failed to remove image: ${e.getMessage()}"
#                }
#            }
#        }
 #   }
#}
>>>>>>> 0cc3de9 (Updated Jenkinsfile)
