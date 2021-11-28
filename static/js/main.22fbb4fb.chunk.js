(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{21:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),c=i(15),r=i.n(c),o=(i(21),i(2)),a=(i(22),i(23),i(0)),l=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h5",{children:"About Me"}),Object(a.jsxs)("div",{className:"font-body",children:["I am Guruprasad Mohan, working as a Software Engg. I am a Full-stack developer using .NET, Azure and React.",Object(a.jsx)("p",{children:"Code enthusiast & a life long learner."})]})]})},h=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Blog 1 - App Service Plan"}),Object(a.jsx)("h6",{children:"Nov 21, 2021"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"App Service plan in Azure can be seen as a container for the App services. The App Services run within an App Service plan. It is possible to run to more than one App Services within an App Service plan. The compute resources necessary for an App service is defined inside an App Service plan."}),Object(a.jsx)("h5",{children:"Components of an App Service plan "}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Region"}),Object(a.jsx)("li",{children:"# of VM Instances"}),Object(a.jsx)("li",{children:"Size of VM"}),Object(a.jsx)("li",{children:"Pricing Tier"})]}),Object(a.jsx)("p",{children:"The Free and the Shared pricing tier may contain apps from multiple customers running in the same VM. These tiers do not support scaling out. The basic pricing tier and above run apps on dedicated VMs. The higher the tier, more VMs are available for scaling out. The isolated pricing tier runs dedicated VMs on dedicated Azure Virtual network thus supporting both compute and network isolation for the hosted applications."}),Object(a.jsx)("h5",{children:"Working of an App Service plan "}),Object(a.jsx)("p",{children:"Lets assume the pricing tier you have opted in the App Service plan has 5 VMs provisioned in the plan. The app service deployed in this plan runs on all the 5 provisioned VMs. The ancillary features of the app service like diagnostics, logging, montioring applications all share the same VM instances. By extension, if multiple apps are deployed within the Service plan, then the compute resources are similarly shared. This way, the App Service plan constitutes a scale unit of the App services."}),Object(a.jsx)("h5",{children:"Design Considerations"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"App Service plans can be scaled up and down by changing the pricing tiers."}),Object(a.jsx)("li",{children:"It is cost effective to share App Services within the same App Service plan. However, this should be planned judiciously considering the requirements of individual apps in the App Service plan."}),Object(a.jsx)("li",{children:"If a specific App Service within the App Service plan is considered more business critical/ has more traffic then it makes sense to move it to a separate App Service plan. This way it can be managed indenpendently from the other App services."})]})]})},p=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Blog 2 - API testing with Httprepl"}),Object(a.jsx)("h6",{children:"Nov 28, 2021"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["For ASPNET core developers with preference to the command line tools, Microsoft has provided a lightweight, cross platform command tool to test APIs. REPL (Run - Evaluate - Print - Loop) is a workflow popularized by applications like Nodejs.",Object(a.jsx)("br",{}),"Using this command line tool, we can make HTTP requests to test Web APIs and test their output. The httprepl tool ships as a NuGet package Microsoft.dotnet-httprepl."]}),Object(a.jsx)("h5",{children:"Setup"}),Object(a.jsx)("p",{children:"As a pre-requisite, the system should contain a .NETCore 2.1 SDK or higher. In the command prompt, run the below command. dotnet tool install -g Microsoft.dotnet-httprepl The -g option install the package as a global tool."}),Object(a.jsx)("h5",{children:"Usage"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"The first command to initiate the repl workflow is httprepl."}),Object(a.jsx)("li",{children:"Use the connect command to connect to a API base URI."}),Object(a.jsx)("li",{children:"The command ls can be used to list the available API endpoints. (This operation is possible only if the API implements Open API specifications like Swagger.)"}),Object(a.jsxs)("li",{children:["A sample operation for a GET endpoint runs as below -",Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:" At the command prompt - httprepl "}),Object(a.jsx)("li",{children:" connect https://localhost:[port]/[ControllerName] "}),Object(a.jsx)("li",{children:" ls "}),Object(a.jsx)("li",{children:" GET "})]})]})]}),Object(a.jsx)("h5",{children:"Demo Application"}),Object(a.jsxs)("p",{children:["Clone the repository - https://github.com/Guruprasad-Mohan/ApiClientDemo.git for a sample implementation. This a simple API implementation to demo the features of the Httprepl command tool.",Object(a.jsx)("br",{}),"The API contains 4 endpoints to support CRUD operations on a simple list of strings. ",Object(a.jsx)("br",{}),"The file Http-REPL-Commands.txt contains commands which needs to be executed from the command line to perform CRUD operations."]})]})},d=function(){return Object(a.jsx)("div",{className:"mt-5 p-4 bg-dark text-white text-center",children:Object(a.jsx)("p",{children:"Mail your queries and feedback at emailWhichNeedsToBeCreated@_Sometime._com"})})},j=function(){return Object(a.jsx)("div",{className:"p-3 bg-primary text-white text-center",children:Object(a.jsx)("h1",{children:"Guru's Tech space"})})};var b=function(){return Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)(j,{}),Object(a.jsx)("div",{className:"container mt-5",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-sm-2",children:Object(a.jsx)(l,{})}),Object(a.jsx)("div",{className:"col-sm-8",children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:h}),Object(a.jsx)(o.a,{path:"/blogNov2821",component:p})]})}),Object(a.jsxs)("div",{className:"col-sm-2",children:[Object(a.jsx)("h6",{className:"mt-4",children:"Links to previous blogs"}),Object(a.jsxs)("ul",{className:"flex-column",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link active",href:"/",children:"Blog Nov21, 2021"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link active",href:"/blogNov2821",children:"Blog Nov28, 2021"})})]})]})]})}),Object(a.jsx)(d,{})]})},m=(i(30),function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,32)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),n(e),s(e),c(e),r(e)}))}),u=i(11);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(u.a,{children:Object(a.jsx)(b,{})})}),document.getElementById("root")),m()}},[[31,1,2]]]);
//# sourceMappingURL=main.22fbb4fb.chunk.js.map