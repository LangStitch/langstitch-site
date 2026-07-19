pipeline {
  agent {
    kubernetes {
      yaml '''
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: node
    image: node:22-bookworm
    command: ["sleep"]
    args: ["3600"]
'''
      defaultContainer 'node'
    }
  }
  options { timeout(time: 20, unit: 'MINUTES') }
  stages {
    stage('Validate') {
      steps {
        sh '''
          set -eu
          echo "Static site repo — no build required"
          test -f index.html -o -f README.md -o -d .
          find . -maxdepth 2 -type f | head -50
        '''
      }
    }
  }
}
