# Mathyn Codes Website

This repo contains the source code for the website for Mathyn Codes (https://mathyn.codes).

This website serves as a way to promote myself and my work. This website in itself is a promotion of my work 😀!

## Dependencies

To build this website locally please ensure you have the following dependencies installed:
- Node @v22 and NPM @v10
    - Strongly consider using a tool like [NVM for Windows](https://github.com/coreybutler/nvm-windows) to install Node and NPM.
- [Kubectl](https://kubernetes.io/docs/reference/kubectl/) @ v1.31.3
    - Used to interface with a Kubernetes cluster, either locally or remote.
- [Minikube](https://minikube.sigs.k8s.io/docs/) @ v1.34.0
    - Used to run a local Kubernetes machine on your machine.
- [Helm](https://helm.sh/) @ v3.16
    - Used to generate Kubernetes charts from templates.

The scripts and tooling have been written for and tested on a Windows 11 machine.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Running in a Kubernetes cluster

This project is meant to be deployed in a Kubernetes (k8s) cluster. This chapter will discuss how to deploy to both a local and remote cluster.

### Set up your `.env` file

First copy the `.env.template` file and rename this to `.env`. Fill in the empty values with values which make sense for your project.

### Ensure you are using the Minikube k8s context!

- `kubectl config get-contexts`
    - Shows which contexts are available and which context you are currently using.
- `kubectl config use-context CONTEXT_NAME`
    - Set the selected context.
    - For Minikube: `kubectl config use-context minikube`

### Build the docker image

Without a Docker image there's nothing to run in a k8s cluster. Run `npm run docker:build` to build the image.

### Deploy locally using Minikube

> ⚠️ Don't forget to start Minikube using `minikube start` ⚠️

> ⚠️ Ensure you've created the proper k8s namespace using `kubectl create namespace YOUR_NAMESPACE` ⚠️

> Tip: run `minikube dashboard` in a terminal to get access to a very helpful k8s dashboard 😎

Do the following steps:
- `npm run minikube:load`
    - This will load the last build docker image into Minikube (with the tag defined in your `.env` file.)
- `npm run helm:upgrade:local` (or `npm run helm:install:local` if this is the first time running).
    - This will upgrade the deployment (or install if if running the second command).
    - The `:local` part will make sure the parts related to the HTTPS connection are skipped.
- `npm run minikube:expose`
    - This will expose the website to your local system. An URL will be outputted which you can use to access the service.
