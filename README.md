# hono-on-aws-lambda

This repository is an example of using AWS CDK to build an API Gateway and Lambda function with Hono.

## Overview

This project demonstrates how to use the [Hono](https://hono.dev/top) web framework with AWS Lambda and API Gateway, utilizing AWS CDK for infrastructure as code.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [AWS CDK](https://aws.amazon.com/cdk/) (v2 or higher)
- AWS Account with appropriate IAM permissions

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ve1997/hono-on-aws-lambda.git
   cd hono-on-aws-lambda
   ```
2. Install dependencies
   ```sh
   npm install
   ```

## Project Structure

- `lib/` : Contains the AWS CDK stack definition
- `lambda/` : Contains the Hono application code
- `types/`: This includes exporting the AppType which is necessary when creating the Hono client object in the client repository
- `test/` : Contains tests for the Hono application

## Usage

### Deploying the Stack

1. Synthesize the CloudFormation template
   ```sh
   cdk synth
   ```
2. Deploy the stack
   ```sh
   cdk deploy
   ```

### Testing

Run the tests using Vitest
```sh
npm run test
```

## Example Endpoints

The following endpoints are available once the stack is deployed:

- `GET /`: Returns a simple greeting message.
```sh
curl -i [your_endpoint]
```
- `GET /user/:id`: Accepts a path parameter and returns a message including the user ID.
```sh
curl -i [your_endpoint]/user/123
```
- `GET /search`: Accepts a query parameter and returns a message with the search query.
```sh
curl -i "[your_endpoint]/search?q=example"
```
- `POST /register`: Accepts JSON data and returns a personalized message.
```sh
curl -i -X POST -H "Content-Type: application/json" -d @mock/rb.json [your_endpoint]/register
```

Replace `[your_endpoint]` with the actual endpoint URL provided by the `cdk deploy` command.

## Used Stack

![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Hono](https://img.shields.io/badge/hono-E36002?style=for-the-badge&logo=hono&logoColor=white)
![Zod](https://img.shields.io/badge/zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Biome](https://img.shields.io/badge/biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=white)
![AWS](https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white)
![Lambda](https://img.shields.io/badge/lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white)
![APIGW](https://img.shields.io/badge/apigw-FF4F8B?style=for-the-badge&logo=amazonapigateway&logoColor=white)
