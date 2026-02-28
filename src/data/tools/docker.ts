export const docker = {
  name: "Docker",
  import: "/* Docker Command */",
  categories: [
    {
      title: "Build",
      items: [
        { snippet: "docker build -t <image_name>", desc: "Build a Docker image from a Dockerfile in the current directory and tag it with a name." },
        { snippet: "docker build --no-cache -t <image_name>", desc: "Build a Docker image without using the cache." },
        { snippet: "docker build -f <dockerfile_name> -t <image_name>", desc: "Build a Docker image using a specified Dockerfile." },
      ],
    },
    {
      title: "Clean Up",
      items: [
        { snippet: "docker system prune", desc: "Remove all unused Docker resources, including containers, images, networks, and volumes." },
        { snippet: "docker container prune", desc: "Remove all stopped containers." },
        { snippet: "docker image prune", desc: "Remove unused images." },
        { snippet: "docker volume prune", desc: "Remove unused volumes." },
        { snippet: "docker network prune", desc: "Remove unused networks." },
      ],
    },
    {
      title: "Container Interaction",
      items: [
        { snippet: "docker run <image_name>", desc: "Run a Docker image as a container." },
        { snippet: "docker start <container_id>", desc: "Start a stopped container." },
        { snippet: "docker stop <container_id>", desc: "Stop a running container." },
        { snippet: "docker restart <container_id>", desc: "Restart a running container." },
        { snippet: "docker exec -it <container_id> <command>", desc: "Execute a command inside a running container interactively." },
      ],
    },
    {
      title: "Container Inspection",
      items: [
        { snippet: "docker ps", desc: "List running containers." },
        { snippet: "docker ps -a", desc: "List all containers, including stopped ones." },
        { snippet: "docker logs <container_id>", desc: "Fetch the logs of a specific container." },
        { snippet: "docker inspect <container_id>", desc: "Inspect detailed information about a container." },
      ],
    },
    {
      title: "Image",
      items: [
        { snippet: "docker images", desc: "List available Docker images." },
        { snippet: "docker pull <image_name>", desc: "Pull a Docker image from a Docker registry." },
        { snippet: "docker push <image_name>", desc: "Push a Docker image to a Docker registry." },
        { snippet: "docker rmi <image_id>", desc: "Remove a Docker image." },
      ],
    },
    {
      title: "Docker Run",
      items: [
        { snippet: "docker run -d <image_name>", desc: "Run a Docker image as a container in detached mode." },
        { snippet: "docker run -p <host_port>:<container_port> <image_name>", desc: "Publish container ports to the host." },
        { snippet: "docker run -v <host_path>:<container_path> <image_name>", desc: "Mount a host directory or volume to a container." },
        { snippet: "docker run --name <container_name> <image_name>", desc: "Assign a custom name to the container." },
      ],
    },
  ],
};

/* 

I'll add this soon

Docker Registry Commands:

docker login: Log in to a Docker registry.

docker logout: Log out from a Docker registry.

docker search <term>: Search for Docker images in a Docker registry.

docker pull <registry>/<image_name>: Pull a Docker image from a specific registry.

Docker Service Commands:

docker service create --name <service_name> <image_name>: Create a Docker service from an image.

docker service ls: List running Docker services.

docker service scale <service_name>=<replicas>: Scale the replicas of a Docker service.

docker service logs <service_name>: View logs of a Docker service.

Docker Network Commands:

docker network create <network_name>: Create a Docker network.

docker network ls: List available Docker networks.

docker network inspect <network_name>: Inspect detailed information about a Docker network.

docker network connect <network_name> <container_name>: Connect a container to a Docker network

Docker Volume Commands:

docker volume create <volume_name>: Create a Docker volume.

docker volume ls: List available Docker volumes.

docker volume inspect <volume_name>: Inspect detailed information about a Docker volume.

docker volume rm <volume_name>: Remove a Docker volume.

Docker Swarm Commands:

docker swarm init: Initialize a Docker swarm on the current node.

docker swarm join: Join a Docker swarm as a worker node.

docker node ls: List the nodes in a Docker swarm.

docker service create: Create a service in the Docker swarm.

docker service scale: Scale the replicas of a service in the Docker swarm.

Docker Filesystem Commands:

docker cp <container_id>:<container_path> <host_path>: Copy files from a container to the host.

docker cp <host_path> <container_id>:<container_path>: Copy files from the host to a container.

Docker Environment Variables:

-e or --env: Set environment variables when running a container.

docker run -e <variable_name>=<value> <image_name>: Set an environment variable when running a container.

Docker Health Checks:

HEALTHCHECK instruction: Define a command to check the health of a container.

docker container inspect --format='{{json .State.Health}}' <container_name>: Check the health status of a container.

Docker Compose Commands:

docker-compose up: Create and start containers defined in a Docker Compose file.

docker-compose down: Stop and remove containers defined in a Docker Compose file.

docker-compose ps: List containers defined in a Docker Compose file.

docker-compose logs: View logs of containers defined in a Docker Compose file.

Docker Stats:

docker stats: Display a live stream of resource usage by containers.

docker stats <container_name>: Display the resource usage of a specific container.

*/