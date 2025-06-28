# Module1_AWS_API_Assignment
Assignment: Deploy a Basic REST API using EC2 and AWS Lambda


Tech Stack
- OS: Amazon Linux / Ubuntu
- Backend: Express.js (Node.js)
- Process Manager: `PM2` (Node)

Endpoints
| Method | Path     | Description            |
|--------|----------|------------------------|
| GET    | `/hello` | Returns "Hello, World" |
| GET    | `/status`| Returns uptime & status|

Setup Instructions
- Launch EC2 Instance
   - OS: Amazon Linux 2 or Ubuntu
   - Open ports 22 (SSH) and 8080 (HTTP) in Security Group

- Install dependencies
For Node.js (Express):
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
npm install express pm2

- Create the server.js and run the app
sudo pm2 start app.js

- Test the endpoints
