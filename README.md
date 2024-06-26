# jenkins-project


### docker-jenkins.yaml
- This is mainly for starting a jenkins container.
- Jenkins server starts on port 8080 (i.e. http://localhost:8080).
- Make sure to run in the working directory.
``` bash
mkdir JenkinsData
JENKINS_DATA_PATH=./JenkinsData
sudo docker compose -f  docker-jenkins.yaml up -d 
```
- Password for the first time login is present here. 
```bash
sudo docker exec -it <hash_id_jenkins> /bin/bash
cat /var/jenkins_home/secrets/initialAdminPassword
```
- Click on install plugins.
- Create a username and password.
- You are good to go now.

### jenkinsfile
- Configure webhooks in github
- githubPush acts as a trigger. 




