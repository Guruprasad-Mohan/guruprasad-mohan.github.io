(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{21:function(e,i,n){},22:function(e,i,n){},23:function(e,i,n){},31:function(e,i,n){"use strict";n.r(i);var t=n(1),s=n.n(t),c=n(15),r=n.n(c),a=(n(21),n(2)),l=(n(22),n(23),n(0)),o=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h5",{children:"About Me"}),Object(l.jsxs)("div",{className:"font-body",children:["I am Guruprasad Mohan, working as a Software Engg. I am a Full-stack developer using .NET, Azure and React.",Object(l.jsx)("p",{children:"Code enthusiast & a life long learner."})]})]})},p=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Blog 1 - App Service Plan"}),Object(l.jsx)("h6",{children:"Nov 21, 2021"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"App Service plan in Azure can be seen as a container for the App services. The App Services run within an App Service plan. It is possible to run to more than one App Services within an App Service plan. The compute resources necessary for an App service is defined inside an App Service plan."}),Object(l.jsx)("h5",{children:"Components of an App Service plan "}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Region"}),Object(l.jsx)("li",{children:"# of VM Instances"}),Object(l.jsx)("li",{children:"Size of VM"}),Object(l.jsx)("li",{children:"Pricing Tier"})]}),Object(l.jsx)("p",{children:"The Free and the Shared pricing tier may contain apps from multiple customers running in the same VM. These tiers do not support scaling out. The basic pricing tier and above run apps on dedicated VMs. The higher the tier, more VMs are available for scaling out. The isolated pricing tier runs dedicated VMs on dedicated Azure Virtual network thus supporting both compute and network isolation for the hosted applications."}),Object(l.jsx)("h5",{children:"Working of an App Service plan "}),Object(l.jsx)("p",{children:"Lets assume the pricing tier you have opted in the App Service plan has 5 VMs provisioned in the plan. The app service deployed in this plan runs on all the 5 provisioned VMs. The ancillary features of the app service like diagnostics, logging, montioring applications all share the same VM instances. By extension, if multiple apps are deployed within the Service plan, then the compute resources are similarly shared. This way, the App Service plan constitutes a scale unit of the App services."}),Object(l.jsx)("h5",{children:"Design Considerations"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"App Service plans can be scaled up and down by changing the pricing tiers."}),Object(l.jsx)("li",{children:"It is cost effective to share App Services within the same App Service plan. However, this should be planned judiciously considering the requirements of individual apps in the App Service plan."}),Object(l.jsx)("li",{children:"If a specific App Service within the App Service plan is considered more business critical/ has more traffic then it makes sense to move it to a separate App Service plan. This way it can be managed indenpendently from the other App services."})]})]})},h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h2",{children:"Blog 2 - Coming soon!!!!"})})},d=function(){return Object(l.jsx)("div",{className:"mt-5 p-4 bg-dark text-white text-center",children:Object(l.jsx)("p",{children:"Mail your queries and feedback at emailWhichNeedsToBeCreated@_Sometime._com"})})},j=function(){return Object(l.jsx)("div",{className:"p-3 bg-primary text-white text-center",children:Object(l.jsx)("h1",{children:"Guru's Tech space"})})};var u=function(){return Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"container mt-5",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-2",children:Object(l.jsx)(o,{})}),Object(l.jsx)("div",{className:"col-sm-8",children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{exact:!0,path:"/",component:p}),Object(l.jsx)(a.a,{path:"/blogNov2921",component:h})]})}),Object(l.jsxs)("div",{className:"col-sm-2",children:[Object(l.jsx)("h6",{className:"mt-4",children:"Links to previous blogs"}),Object(l.jsx)("ul",{className:"flex-column",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active",href:"/blogNov2921",children:"Blog Nov29, 2021"})})})]})]})}),Object(l.jsx)(d,{})]})},b=(n(30),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(i){var n=i.getCLS,t=i.getFID,s=i.getFCP,c=i.getLCP,r=i.getTTFB;n(e),t(e),s(e),c(e),r(e)}))}),m=n(11);r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(m.a,{children:Object(l.jsx)(u,{})})}),document.getElementById("root")),b()}},[[31,1,2]]]);
//# sourceMappingURL=main.1fde797e.chunk.js.map