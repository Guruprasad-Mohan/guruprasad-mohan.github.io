import React from "react";
import "./blogs.css";

const BlogDec062021 = () => {
    return (
        <>
            <h2>Blog 3 - Azure App Deployment using CLI and Zip Files</h2>
            <h6>Dec 06, 2021</h6>
            <br />
            <p>
                Many a times, we need to quickly deploy a small application to App service and test our code. <br/>
                At such times, it is easier and convenient to use Zip deployment of the code to the App Service. <br />
                There are simple Azure CLI commands which can help achieve this outcome.
                If one prefers a UI based approach to perform the zip deployment, then there are features within the Kudu, which can be leveraged.
                <br />
                <br />
                I have listed below, the sequence of steps to create the App Service and deploy the application as zip files.
            </p>
            <h5>Pre-requisite</h5>
            <p>
                Latest Azure CLI installed in the system.
                Active Azure subscription.
                Access to Visual Studio 2019 community edition.
            </p>

            <h5>Steps</h5>
            <ul>
                <li>
                    <b>az-login</b>
                    <br/>
                    This command logs you into the Azure subscription. It prompts a login page for you to enter the Azure credentials.
                    Once the login is successful, the command window displays the subscription and tenant details in JSON format.
                </li>
                <li className="pt-2">
                    Create the Resource group (RG) - <br/> <b>az group create -l [location] -n [name of the RG] </b>
                </li>
                <li className="pt-2">
                    Set the default RG and Location <br /> 
                    <b> az config set defaults.group=[name of the RG] defaults.location=[location] </b>
                </li>
                <li className="pt-2">
                    Create and deploy an App Service. This becomes the App service URL <i>http://[your_app_name].azurewebsites.net</i> <br/>
                    Select a unique app name. <br/>
                    <b>az webapp up --name [your_app_name] --logs --launch-browser</b>
                </li>
                <li className="pt-2">
                    Use the default ASP.NET Core Web API scaffolding to create a simple Weather API app.
                    We can test the zip deployment with this sample application.
                </li>
                <li className="pt-2">
                    Navigate to the project root folder in the command window and then type dotnet publish.<br />
                    This step publishes the application code to the application root.<br />
                    You can also right click the project file in the Visual studio and click Publish.<br />
                    In the Publish profile, select folder deployment and retain default values or change to a preferred location for publish.
                </li>
                <li className="pt-2">
                    In the command window, navigate to the publish folder created in the above step.<br />
                    Use the below <b>PowerShell</b> command to create a zip package of the publish folder.<br />
                    Provide an appropriate file name in the square brackets below. <br/>

                    <b>Compress-Archive -Path * -DestinationPath [file-name].zip</b>
                </li>
                <li className="pt-2">
                    Push the zip package to the App service using the below command.<br />
                    <b>az webapp deploy --resource-group [name of the RG] --name [your_app_name] --src-path [zip-package-path]</b>
                </li>

                <li className="pt-2">
                    <ul>
                        <li> In case in prefer the UI based approach, then navigate to the App service in the portal.azure.com. </li>
                        <li> In the App service blade, select Advanced Tools under Development Tools. </li>
                        <li> Click on the Go Link in the Advanced Tools page. You will land up in the Kudu environment page. </li>
                        <li> Select Tools option in the header and select Zip Push Deploy. </li>
                        <li> Drag and drop the zip file created in the above step into this location. </li>
                    </ul>
                </li>

                <li className="pt-2">
                    Refresh the link <i>http://[your_app_name].azurewebsites.net</i> and you should see the GET Response of Weather Controller displayed.
                </li>

                <li className="pt-2">
                    Happy Coding !!!
                </li>

            </ul>
        </>
    );
};

export default BlogDec062021;