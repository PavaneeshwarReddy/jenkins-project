# jenkins-project




### Install Jenkins
- This is mainly for starting a jenkins server on linux.
- Follow steps on doc page to install
- Jenkins server starts on port 8080 (i.e. http://localhost:8080).
- Password for the first time login is present here. 
```bash
cat /var/jenkins_home/secrets/initialAdminPassword
```
- Click on install plugins.
- Create a username and password.
- You are good to go now.

### Required plugins
- Docker
- Docker pipeline

### jenkinsfile
- Configure pollSCM as trigger
- Make different stages (checkout, build, test, package,  deploy)
- Make post to handle always, success, failure




