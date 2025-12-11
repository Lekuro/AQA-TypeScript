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

## ReportPortal

### Download yml file

```
curl -O https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml

```

#### Change version of traefik for me v2.11.28 was nightmare

```
gateway:
    image: traefik:v2.11.31
```

### Build reportportal in docker. second from lecture

```
docker-compose -p reportportal up -d
```

```
docker-compose -p reportportal up -d --force-recreate
```

### Go to http://localhost:8080/ui/ there have to be `Loading...`

### Run your test locally and go to http://localhost:8080/ui/ again there have to be login page

### Login with login `superadmin` and password `erebus`

#### Create a New Project

Log in to your ReportPortal instance using your superadmin credentials.  
Open the main menu (usually at the bottom left, often indicated by a logo or an expand icon).  
Click the Administrate link.  
In the left-hand sidebar, select Projects.  
Click the Add New Project button, typically located in the top right corner of the page.  
Enter a unique name for your new project.  
Click the Add button to create the project.

#### Create and Assign a User

Users can be created and assigned to projects via the All Users page.  
To create a new user:  
Log in as Administrator and navigate to the Administrate section.  
Select All Users from the left-hand sidebar.  
Click the Add User button.  
Fill in the required fields in the "Add user" form (User name, Password, First Name, Last Name, Email) and click Add.

### Steps to get your API Key

To obtain an API key in ReportPortal, you must generate it from your User Profile page. The API key is associated with a specific user, not the project itself.

Log in to your ReportPortal instance by a new user  
Navigate to your Profile page. This is usually found by clicking the menu at the bottom of the page and selecting "Profile".  
On the Profile page, find the API Keys section or tab.  
Click the "Generate API Key" button.  
Assign a unique name to the API key.  
The system will generate and display the API key only once at this point. You must copy and securely store this key, as it cannot be retrieved later for security reasons.

### Configure `playwright.config.ts`

```
reporter: [
    ['@reportportal/agent-js-playwright',
        {
            endpoint: "http://localhost:8080/api/v1",
            apiKey: "<API_KEY>",
            project: "playwright-docker-reportportal",
            launch: "Launch name",
            description: "My awesome launch",
        }
    ]
]
```

### Run your tests `npm run test`
