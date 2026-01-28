### 🚀 Dependencies to Install

Run the following commands to set up the Serverless environment:

- `npm install -g serverless` (Global CLI to manage deployments)
- `npm install` (To install any local project dependencies)

---

### 🛠️ Key Components Reference

- **`serverless`**: The CLI tool used to package, deploy, and manage your cloud infrastructure on AWS.
- **`serverless.yml`**: The central configuration file that defines your provider, functions, and event triggers.
- **`handler`**: The property that maps a function name to the specific file and exported method (e.g., `hello.handler`).
- **`httpApi`**: An event type that automatically sets up an AWS API Gateway to route web requests to your Lambda.
- **`provider`**: Defines the cloud host settings, including the `runtime` (Node.js 18.x) and `region` (ap-south-1).
- **`service`**: The unique name of your project used to group all related AWS resources in your account.

---

### 💡 Project Overview: What & Why

**What I have done:**
I have built a **Serverless REST API** by creating independent JavaScript functions (`hello.js` and `bye.js`) and configuring them to trigger via specific HTTP GET endpoints using the Serverless Framework.

**Why I did it:**

- **Auto-Scaling:** The API only runs when a request is made, allowing it to scale from zero to thousands of users automatically.
- **Cost Efficiency:** There are no "idle" server costs; AWS only charges for the exact time the code is executing.
- **Infrastructure as Code (IaC):** By using `serverless.yml`, the entire API setup is documented and can be redeployed perfectly in seconds without manual AWS console work.