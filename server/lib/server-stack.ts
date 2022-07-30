import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { HttpMethod } from "aws-cdk-lib/aws-events";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class ServerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new RestApi(this, "RestApi", {
      defaultCorsPreflightOptions: {
        allowOrigins: ["*"],
        allowCredentials: true,
        allowHeaders: ["*"],
        allowMethods: ["*"],
      },
    });

    const getAddressBalanceFn = new NodejsFunction(this, "get-address-balance");

    api.root
      .addResource("address")
      .addResource("balance")
      .addResource("{address}")
      .addMethod(HttpMethod.GET, new LambdaIntegration(getAddressBalanceFn));

    const getTxsFn = new NodejsFunction(this, "get-transactions", {
      runtime: Runtime.NODEJS_16_X,
    });
    api.root
      .addResource("transactions")
      .addResource("{xpub}")
      .addMethod(HttpMethod.GET, new LambdaIntegration(getTxsFn));
  }
}
