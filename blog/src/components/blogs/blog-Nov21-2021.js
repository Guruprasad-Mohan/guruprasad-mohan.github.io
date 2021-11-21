import React from "react";

const BlogNov212021 = () => {
    return (
        <>
            <h2>Blog 1 - App Service Plan</h2>
            <h6>Nov 21, 2021</h6>
            <br/>
            <p>
                App Service plan in Azure can be seen as a container for the App services.
                The App Services run within an App Service plan. It is possible to run to more than one
                App Services within an App Service plan. The compute resources necessary for an App service is defined inside an App Service plan.
            </p>

            <h5>Components of an App Service plan </h5>
            <ul>
                <li>Region</li>
                <li># of VM Instances</li>
                <li>Size of VM</li>
                <li>Pricing Tier</li>
            </ul>
            <p>
                The Free and the Shared pricing tier may contain apps from multiple customers running in the same VM.
                These tiers do not support scaling out.
                The basic pricing tier and above run apps on dedicated VMs. The higher the tier, more VMs are available for scaling out.
                The isolated pricing tier runs dedicated VMs on dedicated Azure Virtual network thus supporting both compute and network isolation for the hosted applications.
            </p>

            <h5>Working of an App Service plan </h5>
            <p>
                Lets assume the pricing tier you have opted in the App Service plan has 5 VMs provisioned in the plan.
                The app service deployed in this plan runs on all the 5 provisioned VMs.
                The ancillary features of the app service like diagnostics, logging, montioring applications all share the same VM instances.
                By extension, if multiple apps are deployed within the Service plan, then the compute resources are similarly shared.
                This way, the App Service plan constitutes a scale unit of the App services.
            </p>

            <h5>Design Considerations</h5>
            <ul>
                <li>
                    App Service plans can be scaled up and down by changing the pricing tiers.
                </li>
                <li>
                    It is cost effective to share App Services within the same App Service plan.
                    However, this should be planned judiciously considering the requirements of individual apps in the App Service plan.
                </li>
                <li>
                    If a specific App Service within the App Service plan is considered more business critical/ has more traffic then it makes sense to move it to a separate App Service plan.
                    This way it can be managed indenpendently from the other App services.
                </li>
            </ul>
        </>
    );
};

export default BlogNov212021;