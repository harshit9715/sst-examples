import { expect, haveResource } from "@aws-cdk/assert";
import * as sst from "@serverless-stack/resources";
import MyStack from "../stacks/MyStack";

test("[Infra] Stack Contains Lambda", () => {
  const app = new sst.App();
  // WHEN
  const stack = new MyStack(app, "test-stack");
  // THEN
  expect(stack).to(haveResource("AWS::Lambda::Function"));
});

test("[Infra] Stack Contains HTTP API Gateway", () => {
  const app = new sst.App();
  // WHEN
  const stack = new MyStack(app, "test-stack");
  // THEN
  expect(stack).to(haveResource("AWS::ApiGatewayV2::Api"));
});
