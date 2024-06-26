# jenkins-project


### docker-jenkins.yaml
- This is mainly for starting a jenkins in linux.
- Jenkins server starts on port 8080 (i.e. http://localhost:8080).
- Make sure to run in the working directory.
- Password for the first time login is present here. 
```bash
cat /var/jenkins_home/secrets/initialAdminPassword
```
- Click on install plugins.
- Create a username and password.
- You are good to go now.

### jenkinsfile
- Configure pollSCM as trigger
- Make different stages (checkout, build, test, package,  deploy)




