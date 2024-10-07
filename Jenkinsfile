pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                 withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner \
                    -Dsonar.projectKey=Jenkins \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=http://192.168.91.130:9000 \
                    -Dsonar.login=sqp_d3a3fea6f0415c89e4e45fcecad5fa36a1e02582'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
            }
        }
    }
}

