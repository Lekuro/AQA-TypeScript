## Docker <https://docs.docker.com/reference/dockerfile/>

### Download from <https://www.docker.com/get-started/>

### Install without windows container usually

### Create docker/Dockerfile

### Run dockerfile on level of dockerfile

```
docker build -t expense-tracker:latest .
docker run -d -p 3000:3000 expense-tracker:latest
```

#### If you run not from level of dockerfile you must write `-f path`

```
docker build -t expense-tracker:latest -f docker/Dockerfile.ui .
```

#### name and run dockerfile

```
docker run -d -p 3000:3000 --name my-expense-tracker expense-tracker:latest
```

#### use name to run docker container

```
docker stop my-expense-tracker
docker start my-expense-tracker
docker rm my-expense-tracker
```

### Docker compose build container

-d означає detached mode — тобто запуск у фоні

```
docker-compose up --build -d
```

### Docker compose stop

```
 docker-compose down
```

### Docker compose restart

```
docker-compose down
docker-compose up --build -d
docker-compose logs -f playwright-tests
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
