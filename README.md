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
slack notification 

### jenkinsfile
- Configure pollSCM as trigger
- Make different stages (checkout, build, test, package,  deploy)
- Make post to handle always, success, failure


### npm test
- These tests were added using jest module
- Need to change test : 'jest' in package.json file
- Folder with __test__ is created which contains all the required test cases.


### slack notification
- Install slack notification 
- Create jenkins cli app in slack apps directory
- Go to manage jenkins > system settings > slack
- Follow steps shown in slack documentation
- Create color coders for different status

### jest-junit
- This is used to capture the results of npm test
- Install this module using npm


