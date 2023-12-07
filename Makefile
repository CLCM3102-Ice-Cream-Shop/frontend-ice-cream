# Define variables
IMAGE_NAME := frontend-ice-cream-shop
DOCKER_REPO := stanthikun802
DOCKER_TAG := latest
CONTAINER_NAME := frontend-ice-cream-shop

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME) .

# Stop and remove the running container
stop:
	docker stop $(CONTAINER_NAME)
	docker rm $(CONTAINER_NAME)

# Tag the Docker image
tag:
	docker tag $(IMAGE_NAME) $(DOCKER_REPO)/$(IMAGE_NAME):$(DOCKER_TAG)

# Push the Docker image to the repository
push:
	docker push $(DOCKER_REPO)/$(IMAGE_NAME):$(DOCKER_TAG)

# Remove the locally built Docker image
clean:
	docker rmi $(IMAGE_NAME)

# Chain tasks together
all: build tag push clean

# Define phony targets to avoid conflicts with file names
.PHONY: build tag push clean all