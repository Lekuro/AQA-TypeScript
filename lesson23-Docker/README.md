## Docker <https://docs.docker.com/reference/dockerfile/>

### Create docker/Dockerfile

### Run dockerfile

```
docker build -t expense-tracker:latest .
docker run -d -p 3000:3000 expense-tracker:latest
```

#### name and run dockerfile

```
docker run -d -p 3000:3000 --name my-expense-tracker expense-tracker:latest
```

```
docker stop my-expense-tracker
docker start my-expense-tracker
docker rm my-expense-tracker
```
### List images
```
docker images
```
### delete images
```
docker image prune
docker volume prune

```
```
docker image prune -a
```