pipeline {
    agent any
    environment {
        WORK_DIR = "/var/lib/jenkins/workspace/${BUILD_ID}" 
        MINIKUBE_WORK_DIR = "/home/admin"  
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout SCM Jobs Project'
                dir("${WORK_DIR}") {
                    git branch: "main",
                        credentialsId: "MateoDelFlow", 
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
                dir("${WORK_DIR}") {  // Utiliza el directorio de trabajo definido por Jenkins
                    sh 'docker build -t mateobonanata/appx-api:latest .'
                }
            }
        }
        stage('Docker Push') {
            steps {
                echo 'Pushing Docker Image'
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) 
                {
                    sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                    sh 'docker push mateobonanata/appx-api:latest'
                }
            }
        }
        stage('Clean Up') {
            steps {
                echo 'Cleaning up old Docker images'
                sh 'docker image prune -f'
            }
        }
        stage('Restart Deployment') {
            steps {
                echo 'Restarting Deployment'
                sh 'sudo -u admin ansible-playbook /home/admin/reiniciar.yml'
            }
        }

    }
}
