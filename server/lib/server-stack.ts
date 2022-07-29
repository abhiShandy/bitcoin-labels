import { Stack, StackProps } from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { HttpMethod } from "aws-cdk-lib/aws-events";
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
  }
}
