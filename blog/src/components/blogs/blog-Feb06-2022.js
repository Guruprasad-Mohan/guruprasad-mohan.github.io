import React from "react";
import "./blogs.css";

const BlogFeb0622 = () => {
  return (
    <>
      <h2>Blog 4 - Azure Queue Storage</h2>
      <h6>Feb 06, 2022</h6>
      <br />
      <p>
                Azure Storage Queue provides an entry level messaging solution which can support loosely coupled application architecture.
                Though in enterprise level applications, a more robust and feature laden Azure Service Bus is preferred, there are use-cases
                in the simpler application landscape where the Storage Queues can be handy in application development.
      </p>

      <h5>A case for Message based Architecture</h5>
      <p>
        A traditional application architecture involves the client interacting with a server side API to complete a task.
        Lets say the task in question involves significant multi-stage processing on the server side. In such cases, any 
        outage on the server application can cause the entire application to stop working.
      </p>
      <p>
      The effect is more pronounced in case of e-commerce applications where this can easily translate into monetary loss.
      </p>
      <p>
      A messaging based equivalent of this application would involve the front-end pushing the transactions to a queue based
      service and the server application processing the queue on a sequential basis. The benefit from this approach is that even 
      during server outage, the customer facing application can continue to be responsive and push transactions which the server can process
      when back online. More succinctly, this architecture promotes modular approach to application logic as well as fault tolerance.
      </p>

      <h5>Features</h5>
      <ul>
                <li>Requires a general purpose v2 storage account.</li>
                <li>Supports messages up to 64 KiB in size.</li>
                <li>Messages exist within a single queue.</li>
                <li>Configurable time to live for the messages with a default of 7 days and also an option for "Never Expires".</li>
                <li>Libraries to interact with the Storage queue are available in .NET, JavaScript, Python and other popular languages.</li>
                <li>Duplicate Detection is unavailable when compared to Service bus.</li>
                <li>True FIFO is not guaranteed as opposed to Service bus.</li>
      </ul>

      <h5>Storage Queue interaction using Azure CLI</h5>
      <p>
        The below steps document the commands to create and process messages from the bash shell with the Azure portal.
        The pre-requisites to run these commands are - a Storage Queue created within an Azure Storage Account.
        Open the Azure command line interface within the Azure Portal (select bash as the shell) to run these commands.
      </p>
      <ul>
                <li>export AZURE_STORAGE_ACCOUNT=[Add your storage account name here]</li>
                <li>az storage queue create --name [name of the storage queue]</li>
                <li>az storage message put --content "message 1" --queue-name [name of the storage queue]
                  <p>The above command inserts the text message 1 into the storage queue.
                  <pre>{JSON.stringify({"content": "message 1",
                                        "dequeueCount": null,
                                        "expirationTime": "2022-02-13T11:28:04+00:00",
                                        "id": "5218a93f-159c-4de2-9107-1d75f706483b",
                                        "insertionTime": "2022-02-06T11:28:04+00:00",
                                        "popReceipt": "AgAAAAMAAAAAAAAARLh4m0wb2AE=",
                                        "timeNextVisible": "2022-02-06T11:28:04+00:00"})}</pre>
                  </p>
                </li>
                <li>az storage message peek --queue-name [name of the storage queue] --num-messages 32</li>
                  <p>When you peek a message, the popReceipt, timeNextVisible will be null unlike during get.
                     The max messages you can peak is 32. The output should show all the messages in the queue.
                     Peeking a message does mark the message as read.
                  </p>
                <li>az storage message get --queue-name [name of the storage queue]</li>
                <p>
                  When we read a message from the queue, the message is hidden from other clients for a period of time determined by 
                  the Visibility timeout property. In case, the first reader of the message does not process the message and delete it 
                  by this time, the message gets visible again on the queue. 
                  In such cases, the dequeue count is incremented indicating the number of times the message has been read.
                </p>
                <p>
                  The first reader of the message may not process the message in time either due to extended processing logic or 
                  exception in the calling logic.
                </p>
                <li>az storage message delete --id [ID of the message] --pop-receipt [Pop receipt ID]--queue-name [name of the storage queue]</li>
                <p>
                  The message ID and the pop-receipt ID of the message are mandatory for the message to be deleted.
                  As shown in the message creation step, these IDs are created during the message creation and sent as the result of the create command.
                </p>
      </ul>

      <h5>Node JS implementation of the Storage queue interaction</h5>
      <li>
          A working application coded in JavaScript and node is available in the repo - <br/>
          <p>
            <b><a>https://github.com/Guruprasad-Mohan/node-azure-storage-queue.git</a></b> <br/>
          </p>
      </li>
      <li>The steps to setup and run the code are detailed in the readme file.</li>
      <li>Happy Coding!!!</li>
    </>
  );
};

export default BlogFeb0622;
