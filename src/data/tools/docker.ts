export const docker = {
  name: "Docker",
  import: "/* Docker Command */",
  insertTarget: "terminal" as const,
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
    {
      title: "Registry",
      items: [
        { snippet: "docker login", desc: "Log in to a Docker registry." },
        { snippet: "docker logout", desc: "Log out from a Docker registry." },
        { snippet: "docker search <term>", desc: "Search for Docker images in a Docker registry." },
        { snippet: "docker pull <registry>/<image_name>", desc: "Pull a Docker image from a specific registry." },
      ],
    },
    {
      title: "Service",
      items: [
        { snippet: "docker service create --name <service_name> <image_name>", desc: "Create a Docker service from an image." },
        { snippet: "docker service ls", desc: "List running Docker services." },
        { snippet: "docker service scale <service_name>=<replicas>", desc: "Scale the replicas of a Docker service." },
        { snippet: "docker service logs <service_name>", desc: "View logs of a Docker service." },
      ],
    },
    {
      title: "Network",
      items: [
        { snippet: "docker network create <network_name>", desc: "Create a Docker network." },
        { snippet: "docker network ls", desc: "List available Docker networks." },
        { snippet: "docker network inspect <network_name>", desc: "Inspect detailed information about a Docker network." },
        { snippet: "docker network connect <network_name> <container_name>", desc: "Connect a container to a Docker network." },
      ],
    },
    {
      title: "Volume",
      items: [
        { snippet: "docker volume create <volume_name>", desc: "Create a Docker volume." },
        { snippet: "docker volume ls", desc: "List available Docker volumes." },
        { snippet: "docker volume inspect <volume_name>", desc: "Inspect detailed information about a Docker volume." },
        { snippet: "docker volume rm <volume_name>", desc: "Remove a Docker volume." },
      ],
    },
    {
      title: "Swarm",
      items: [
        { snippet: "docker swarm init", desc: "Initialize a Docker swarm on the current node." },
        { snippet: "docker swarm join", desc: "Join a Docker swarm as a worker node." },
        { snippet: "docker node ls", desc: "List the nodes in a Docker swarm." },
        { snippet: "docker service create", desc: "Create a service in the Docker swarm." },
        { snippet: "docker service scale", desc: "Scale the replicas of a service in the Docker swarm." },
      ],
    },
    {
      title: "Filesystem",
      items: [
        { snippet: "docker cp <container_id>:<container_path> <host_path>", desc: "Copy files from a container to the host." },
        { snippet: "docker cp <host_path> <container_id>:<container_path>", desc: "Copy files from the host to a container." },
      ],
    },
    {
      title: "Environment Variables",
      items: [
        { snippet: "docker run -e <variable_name>=<value> <image_name>", desc: "Set an environment variable when running a container." },
      ],
    },
    {
      title: "Health Checks",
      items: [
        { snippet: "HEALTHCHECK", desc: "Define a command in the Dockerfile to check the health of a container." },
        { snippet: "docker container inspect --format='{{json .State.Health}}' <container_name>", desc: "Check the health status of a container." },
      ],
    },
    {
      title: "Docker Compose",
      items: [
        { snippet: "docker-compose up", desc: "Create and start containers defined in a Docker Compose file." },
        { snippet: "docker-compose down", desc: "Stop and remove containers defined in a Docker Compose file." },
        { snippet: "docker-compose ps", desc: "List containers defined in a Docker Compose file." },
        { snippet: "docker-compose logs", desc: "View logs of containers defined in a Docker Compose file." },
      ],
    },
    {
      title: "Stats",
      items: [
        { snippet: "docker stats", desc: "Display a live stream of resource usage by containers." },
        { snippet: "docker stats <container_name>", desc: "Display the resource usage of a specific container." },
      ],
    },
  ],
};