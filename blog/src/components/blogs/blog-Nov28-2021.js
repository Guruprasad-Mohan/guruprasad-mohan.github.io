import React from "react";

const BlogNov282021 = () => {
    return (
        <>
            <h2>Blog 2 - API testing with Httprepl</h2>
            <h6>Nov 28, 2021</h6>
            <br />
            <p>
                For ASPNET core developers with preference to the command line tools, Microsoft has provided a lightweight, cross platform command tool to test APIs.
                REPL (Run - Evaluate - Print - Loop) is a workflow popularized by applications like Nodejs.
                <br/>
                Using this command line tool, we can make HTTP requests to test Web APIs and test their output.
                The httprepl tool ships as a NuGet package Microsoft.dotnet-httprepl.
            </p>
            <h5>Setup</h5>
            <p>
                As a pre-requisite, the system should contain a .NETCore 2.1 SDK or higher.
                In the command prompt, run the below command.
                dotnet tool install -g Microsoft.dotnet-httprepl
                The -g option install the package as a global tool.
            </p>

            <h5>Usage</h5>
            <ul>
                <li>
                    The first command to initiate the repl workflow is httprepl.
                </li>
                <li>
                    Use the connect command to connect to a API base URI.
                </li>
                <li>
                    The command ls can be used to list the available API endpoints.
                    (This operation is possible only if the API implements Open API specifications like Swagger.)
                </li>
                <li>
                    A sample operation for a GET endpoint runs as below -
                    <ul>
                        <li> At the command prompt - httprepl </li>
                        <li> connect https://localhost:[port]/[ControllerName] </li>
                        <li> ls </li>
                        <li> GET </li>
                    </ul>
                </li>
            </ul>
            <h5>Demo Application</h5>
            <p>Clone the repository - https://github.com/Guruprasad-Mohan/ApiClientDemo.git for a sample implementation.
            This a simple API implementation to demo the features of the Httprepl command tool.
            <br/>
            The API contains 4 endpoints to support CRUD operations on a simple list of strings. <br/>
            The file Http-REPL-Commands.txt contains commands which needs to be executed from the command line to perform CRUD operations.</p>
        </>
    );
};

export default BlogNov282021;