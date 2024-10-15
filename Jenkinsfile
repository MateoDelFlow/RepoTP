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
                        url: 'https://github.com/MateoDelFlow/RepoTP.git'
                }
            }
        }
        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner 6.2';  // Ajusta según la versión del escáner que tengas configurada
                    withSonarQubeEnv('Sonarqube') {  // El nombre debe coincidir con el configurado en Jenkins
                        sh """
                        ${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=Jenkins \
                        -Dsonar.sources=${WORK_DIR} \
                        -Dsonar.projectBaseDir=${WORK_DIR} \
                        -Dsonar.host.url=http://192.168.91.130:9000 \
                        -Dsonar.login=sqp_d3a3fea6f0415c89e4e45fcecad5fa36a1e02582
                        """
                    }
                }
            }
        }
        stage('Docker Build') {
            steps {
                echo 'Building Docker Image'
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