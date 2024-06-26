import * as cdk from "aws-cdk-lib";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import type { Construct } from "constructs";
import dotenv from "dotenv";

const envParse = dotenv.config({ path: ".env" }).parsed;

export class HonoOnAwsLambdaStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const fn = new NodejsFunction(this, "lambda", {
			entry: "lambda/index.ts",
			handler: "handler",
			runtime: lambda.Runtime.NODEJS_20_X,
			environment: { ...envParse },
		});
		fn.addFunctionUrl({
			authType: lambda.FunctionUrlAuthType.NONE,
		});
		new apigw.LambdaRestApi(this, "hono-on-aws-lambda", {
			handler: fn,
			deployOptions: {
				stageName: "dev",
			},
		});
	}
}
