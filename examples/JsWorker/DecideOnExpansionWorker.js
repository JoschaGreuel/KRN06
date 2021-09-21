const { Client, logger } = require("camunda-external-task-client-js");
const { Variables } = require("camunda-external-task-client-js");

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'creditScoreChecker'
client.subscribe("DecideOnExpansion", async function({ task, taskService }) {
  // Put your business logic
  // complete the task
  var north = Math.random() >= 0.5;
  // set a process variable 'winning'
  const processVariables = new Variables();
  processVariables.set("north", north);

  await taskService.handleFailure(task, {
    errorMessage: "some failure message",
    errorDetails: "some details",
    retries: 1,
    retryTimeout: 1000
  });
  await taskService.complete(task, processVariables);
  
});