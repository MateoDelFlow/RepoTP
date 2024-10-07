pipeline {
    agent any
    environment {
        WORK_DIR = "/var/lib/jenkins/workspace/${BUILD_ID}"  // Ruta estándar de Jenkins en tu VM
        MINIKUBE_WORK_DIR = "/home/admin"  // Reemplaza "admin" con tu usuario en la VM
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout SCM Jobs Project'
                dir("${WORK_DIR}") {
                    git branch: "main",
                        credentialsId: "MateoDelFlow",  // ID de tus credenciales de GitHub
                        url: 'https://github.com/MateoDelFlow/dds-deploy.git'
                }
            }
        }
        stage('SonarQube Analysis') {
            steps {
                echo 'Sonarqube Analysis'
            }
        }
        stage('Docker Build') {
            steps {
                echo 'Building Docker Image Hola que tal buen dia BIEEEEN CHETO MAL ESTOY LLENO DE MARIAN. AVENIIIDAAA'
            }
        }
        stage('Docker Push') {
            steps {
                echo 'Pushing Docker Image'
            }
        }
        stage('Restart Deployment') {
            steps {
                echo 'Restarting Deployment'
            }
        }
    }
}

