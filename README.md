# LocaKube

This repository contains a simple Node.js application to demonstrate how to use **Kubernetes** and **Skaffold** for local development.

# Run

Assuming you have installed docker and kubernetes (minikube):

1. run `minikube start` to start kubernetes cluster.
2. change directory to the path containg the **skaffold.yaml** and run `skaffold dev`. This will create the kubernetes objects defined in **/infra/k8s/locakub.k8s.yaml** file and will watch for changes.
3. run `minikube ip` to get the your cluster's IP address.
4. run `kubectl get services` to find the port randomly assigned to the **locakub-srv** ingress service.
5. open your browser and go to **http://YOUR-CLUSTER-IP:PORT-NUMBER_ABOVE/home**. This will show the hostname running the application.
6. there are 3 replicas for the Node.js application. After several refreshing the host number changes.
