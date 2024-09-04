# CMPE 272 Assignment 1

### Author: Johnny To

# Setup

Each microservice in this repo is contained in its folder. If you wish to run an individual microservice just head to the respective microservice folder and run `npm run dev` to run the microservice in development mode or `node index.js` just to start the microservice.

## Docker Images

below are the links and the respective command to pull the docker images.

### helloService

[https://hub.docker.com/r/drabblesaur/a1helloservice](https://hub.docker.com/r/drabblesaur/a1helloservice)

```docker
docker pull drabblesaur/a1helloservice:1.1
```

### worldService

[https://hub.docker.com/r/docker/drabblesaur/a1worldservice](https://hub.docker.com/repository/docker/drabblesaur/a1worldservice/general)

```docker
docker pull drabblesaur/a1worldservice:1.1
```

## Minikube & kubectl setup

For this assignment, I used Minikube to deploy my Kubernetes cluster. The manifest files are in the A1 folder.

1. To start, run minikube by using `minikube start`
2. Once complete head to the /A1 source folder where the Kubernetes manifests are located and run:

```docker
kubectl apply -f helloservice-service.yaml,worldservice-service.yaml,helloservice-deployment.yaml,worldservice-deployment.yaml
```

1. After, confirm that the services have been configured and created by running `kubectl get svc`
2. To run the services use the command below.

```docker
minikube service helloservice worldservice
```

When this command is run it will produce something like so,

```docker
🏃  Starting tunnel for service helloservice.
🏃  Starting tunnel for service worldservice.
|-----------|--------------|-------------|------------------------|
| NAMESPACE |     NAME     | TARGET PORT |          URL           |
|-----------|--------------|-------------|------------------------|
| default   | helloservice |             | http://127.0.0.1:58494 |
| default   | worldservice |             | http://127.0.0.1:58495 |
|-----------|--------------|-------------|------------------------|
🎉  Opening service default/helloservice in default browser...
🎉  Opening service default/worldservice in default browser...
❗  Because you are using a Docker driver on darwin, the terminal needs to be open to run it.
```

Please note and copy the URLs. They are needed to set up the client.

## Client Setup

In the client folder, there is a .env file. This .env file contains the URLs of the services. It is set up like so,

```
REACT_APP_HSERV = http://127.0.0.1:58494/hello

REACT_APP_WSERV = http://127.0.0.1:58495/world
```

Remember the URLs of the services we set up in the previous step? Just paste them in their respective slots along with the path. **(HSERV = helloservice & WSERV = worldservice).**

Next, run `npm install` to load all the modules and use `npm run start` to start the client

![Screenshot](https://raw.githubusercontent.com/Drabblesaur/CMPE272_A1/main/Screenshot_2024-09-03_at_11.36.07_PM.png)

If everything works, you should see something like this above. Use the “Test Microservices” to test the assignment! (Check Console for the logs)

# Testing

I used Jest & Supertest for unit testing these microservices.

To test the microservices, just run `npm test` in the terminal (in each folder) to run the test suite.
