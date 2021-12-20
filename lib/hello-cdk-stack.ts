import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
// import * as sqs from '@aws-cdk/aws-sqs';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HelloCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    new s3.Bucket(this, "fahad-bucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
