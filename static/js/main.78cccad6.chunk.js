(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);a(5);var l=a(0),n=a.n(l),c=a(3),r=a(2);var s=e=>{let{dog:t}=e;const a=t["\uc774\ubbf8\uc9c0"]?"".concat("/ghappydog","/images/").concat(t["\uc774\ubbf8\uc9c0"].replace(/\.([a-zA-Z]+)$/,e=>e.toLowerCase())):"".concat("/ghappydog","/images/default_photo.jpg");return n.a.createElement("div",{className:"dog-card"},n.a.createElement("div",{className:"dog-image-container"},n.a.createElement("img",{src:a,alt:t["\uc774\ub984"],className:"dog-image"}),n.a.createElement("div",{className:"date-label"},n.a.createElement("span",null,t["\uc720\uc2e4 \ub0a0\uc9dc"].split("-")[2]),n.a.createElement("small",null,t["\uc720\uc2e4 \ub0a0\uc9dc"].split("-").slice(0,2).join("-")))),n.a.createElement("div",{className:"dog-info"},n.a.createElement("h2",null,t["\uc774\ub984"]),n.a.createElement("div",{className:"dog-card-info"},n.a.createElement("div",{className:"info-row"},n.a.createElement("span",{className:"label"},"\uc720\uc2e4 \ub0a0\uc9dc:"),n.a.createElement("span",{className:"value"},t["\uc720\uc2e4 \ub0a0\uc9dc"])),n.a.createElement("div",{className:"info-row"},n.a.createElement("span",{className:"label"},"\uc131\ubcc4 (\uc911\uc131\ud654):"),n.a.createElement("span",{className:"value"},t["\uc131\ubcc4"]," (",t["\uc911\uc131\ud654"],")")),n.a.createElement("div",{className:"info-row"},n.a.createElement("span",{className:"label"},"\uacac\uc885/\ubb18\uc885:"),n.a.createElement("span",{className:"value"},t["\uacac\uc885/\ubb18\uc885"])),n.a.createElement("div",{className:"info-row"},n.a.createElement("span",{className:"label"},"\uc720\uc2e4 \uc7a5\uc18c:"),n.a.createElement("span",{className:"value"},t["\ub3c4"]," ",t["\uc2dc, \uad70, \uad6c"]," ",t["\ub3d9, \uc74d, \uba74"]," ",t["\uc138\ubd80 \uc8fc\uc18c"]))),n.a.createElement("div",{className:"actions-container"},t.URL&&n.a.createElement("a",{href:t.URL,target:"_blank",rel:"noopener noreferrer",className:"action-link"},"\uce74\ud1a1 \uc624\ud508\ucc44\ud305"),n.a.createElement(c.b,{to:"/dog-details/".concat(t["\uc774\ub984"]),className:"action-link"},"\ub354 \ubcf4\uae30 ..."))))};var o=e=>{let{animals:t}=e;const{name:a}=Object(r.q)(),[c,s]=Object(l.useState)(null),o=t.find(e=>e["\uc774\ub984"]===a);if(!o)return n.a.createElement("p",null,"\ud574\ub2f9 \uac15\uc544\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");const m=o["\uc774\ubbf8\uc9c0"]?"".concat("/ghappydog","/images/").concat(o["\uc774\ubbf8\uc9c0"].replace(/\.([a-zA-Z]+)$/,e=>e.toLowerCase())):"".concat("/ghappydog","/images/default_photo.jpg"),i=[o["\ucd94\uac00 \uc774\ubbf8\uc9c01"],o["\ucd94\uac00 \uc774\ubbf8\uc9c02"],o["\ucd94\uac00 \uc774\ubbf8\uc9c03"],o["\ucd94\uac00 \uc774\ubbf8\uc9c04"]].filter(e=>e).map(e=>"".concat("/ghappydog","/images/closeup/").concat(e.replace(/\.([a-zA-Z]+)$/,e=>e.toLowerCase()))),u=e=>{s(e)},d=()=>{s(null)};return n.a.createElement("div",{className:"dog-details container mx-auto p-4"},n.a.createElement("div",{className:"dog-details-header"},n.a.createElement("h2",null,o["\uc774\ub984"])),n.a.createElement("div",{className:"dog-details-content"},n.a.createElement("table",{className:"dog-details-table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"dog-details-info"},n.a.createElement("p",null,n.a.createElement("strong",null,"\uc720\uc2e4 \ub0a0\uc9dc:")," ",o["\uc720\uc2e4 \ub0a0\uc9dc"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc131\ubcc4:")," ",o["\uc131\ubcc4"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uacac\uc885/\ubb18\uc885:")," ",o["\uacac\uc885/\ubb18\uc885"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc0c9\uc0c1:")," ",o["\uc0c9\uc0c1"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\ubab8\ubb34\uac8c:")," ",o["\ubab8\ubb34\uac8c"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc720\uc2e4 \uc7a5\uc18c:")," ","".concat(o["\ub3c4"]," ").concat(o["\uc2dc, \uad70, \uad6c"]," ").concat(o["\ub3d9, \uc74d, \uba74"]," ").concat(o["\uc138\ubd80 \uc8fc\uc18c"])),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc138\ubd80 \ud2b9\uc9d5:")," ",o["\uadf8 \uc678 \uc138\ubd80 \ud2b9\uc9d5"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\ub9c8\uc9c0\ub9c9 \ubaa9\uaca9 \uc9c0\uc5ed:")," ",o["\ub9c8\uc9c0\ub9c9 \uc81c\ubcf4 \uc9c0\uc5ed"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc778\uc2dd\uce69:")," ",o["\uc778\uc2dd\uce69"])),n.a.createElement("td",{className:"dog-details-image"},n.a.createElement("img",{src:m,alt:o["\uc774\ub984"],className:"dog-details-img",onClick:()=>u(m)}),n.a.createElement("div",{className:"additional-images"},i.map((e,t)=>n.a.createElement("img",{key:t,src:e,alt:"".concat(o["\uc774\ub984"]," \ucd94\uac00 \uc774\ubbf8\uc9c0 ").concat(t+1),className:"additional-image rounded shadow-lg",onClick:()=>u(e)})))))))),c&&n.a.createElement("div",{className:"modal",onClick:d},n.a.createElement("span",{className:"close",onClick:d},"\xd7"),n.a.createElement("img",{className:"modal-content",src:c,alt:"Zoomed"})))};var m=e=>{let{setLocationFilter:t,setDateFilter:a,setGenderFilter:c,setTypeFilter:r,setSortOrder:s}=e;const[o,m]=Object(l.useState)(""),[i,u]=Object(l.useState)(""),[d,g]=Object(l.useState)(""),[E,p]=Object(l.useState)(""),[v,b]=Object(l.useState)("latest");return n.a.createElement("div",{className:"filter-container"},n.a.createElement("div",{className:"filter"},n.a.createElement("label",null,"\uc704\uce58 \ud544\ud130:",n.a.createElement("input",{type:"text",value:o,onChange:e=>{m(e.target.value),t(e.target.value)}})),n.a.createElement("label",null,"\uc720\uc2e4 \ub0a0\uc9dc \ud544\ud130:",n.a.createElement("input",{type:"text",placeholder:"yyyy, yyyy-mm, yyyy-mm-dd",value:i,onChange:e=>{u(e.target.value),a(e.target.value)}})),n.a.createElement("label",null,"\uc131\ubcc4 \ud544\ud130:",n.a.createElement("select",{value:d,onChange:e=>{g(e.target.value),c(e.target.value)}},n.a.createElement("option",{value:""},"All"),n.a.createElement("option",{value:"\uc554"},"\uc554"),n.a.createElement("option",{value:"\uc218"},"\uc218"))),n.a.createElement("label",null,"\uc885\ub958 \ud544\ud130:",n.a.createElement("select",{value:E,onChange:e=>{p(e.target.value),r(e.target.value)}},n.a.createElement("option",{value:""},"All"),n.a.createElement("option",{value:"\uac1c"},"\uac1c"),n.a.createElement("option",{value:"\uace0\uc591\uc774"},"\uace0\uc591\uc774"))),n.a.createElement("label",null,"\uc815\ub82c:",n.a.createElement("select",{value:v,onChange:e=>{b(e.target.value),s(e.target.value)}},n.a.createElement("option",{value:"latest"},"\ucd5c\uc2e0\uc21c"),n.a.createElement("option",{value:"recent"},"\uc624\ub798\ub41c\uc21c")))),n.a.createElement("div",{className:"filter-buttons"},n.a.createElement("button",{onClick:()=>{m(""),u(""),g(""),p(""),b("latest"),t(""),a(""),c(""),r(""),s("latest")}},"\ud544\ud130 \ucd08\uae30\ud654"),n.a.createElement("button",null,"\ud544\ud130 \uc801\uc6a9")))},i=a(7),u=a.n(i);var d=e=>{let{setLostAnimals:t,setFoundAnimals:a}=e;return Object(l.useEffect)(()=>{const e=(e,t)=>{fetch(e).then(e=>e.text()).then(e=>{u.a.parse(e,{header:!0,dynamicTyping:!0,complete:e=>{t(e.data)}})}).catch(t=>console.error("Error fetching ".concat(e,":"),t))};e("".concat("/ghappydog","/\uc9c0\ud574\ud53c\ub3c5 \uc218\uc0c9\uc6a9 \uc720\uc2e4\uacac \ub9ac\uc2a4\ud2b8.csv"),t),e("".concat("/ghappydog","/\uc9c0\ud574\ud53c\ub3c5_\ucc3e\uc74c.csv"),a)},[t,a]),null};var g=e=>{let{lostAnimals:t}=e;const[a,c]=Object(l.useState)(""),[r,o]=Object(l.useState)(""),[i,u]=Object(l.useState)(""),[d,g]=Object(l.useState)(""),[E,p]=Object(l.useState)("latest"),v=t.filter(e=>{var t,l,n,c;if(!e||!e["\uc720\uc2e4 \ub0a0\uc9dc"])return!1;const s=new Date(e["\uc720\uc2e4 \ub0a0\uc9dc"].replace(/\./g,"-")),[o,m,u]=r.split("-").map(Number),g=(null===(t=e["\ub3c4"])||void 0===t?void 0:t.toLowerCase().includes(a.toLowerCase()))||(null===(l=e["\uc2dc, \uad70, \uad6c"])||void 0===l?void 0:l.toLowerCase().includes(a.toLowerCase()))||(null===(n=e["\ub3d9, \uc74d, \uba74"])||void 0===n?void 0:n.toLowerCase().includes(a.toLowerCase()))||(null===(c=e["\uc138\ubd80 \uc8fc\uc18c"])||void 0===c?void 0:c.toLowerCase().includes(a.toLowerCase()))||""===a,E=!r||o&&s.getFullYear()===o&&(!m||s.getMonth()+1===m)&&(!u||s.getDate()===u),p=e["\uc131\ubcc4"]===i||""===i,v=e["\uc885\ub958"]===d||""===d;return g&&E&&p&&v});(e=>e.sort((e,t)=>{const a=new Date(e["\uc720\uc2e4 \ub0a0\uc9dc"].replace(/\./g,"-")),l=new Date(t["\uc720\uc2e4 \ub0a0\uc9dc"].replace(/\./g,"-"));return"latest"===E?l-a:a-l}))(v);return n.a.createElement("div",{className:"container mx-auto px-4"},n.a.createElement("p",{className:"text-center mb-4"},n.a.createElement("strong",null,"\ucd1d \uc720\uc2e4\ub3d9\ubb3c \uc218: ",v.length)),n.a.createElement("div",{className:"filters mb-4"},n.a.createElement(m,{setLocationFilter:c,setDateFilter:o,setGenderFilter:u,setTypeFilter:g,setSortOrder:p})),n.a.createElement("section",{id:"dog-list"},n.a.createElement("div",{className:"dog-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},v.length>0?v.map(e=>n.a.createElement(s,{key:e["\uc774\ub984"],dog:e})):n.a.createElement("p",{className:"text-center"},"\uc120\ud0dd\ud55c \ud544\ud130\uc5d0 \ub9de\ub294 \uac15\uc544\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."))))};var E=e=>{let{foundAnimals:t}=e;const[a,c]=Object(l.useState)(""),[r,o]=Object(l.useState)(""),[i,u]=Object(l.useState)(""),[d,g]=Object(l.useState)(""),[E,p]=Object(l.useState)("latest"),v=t.filter(e=>{var t,l,n,c;if(!e||!e["\uc720\uc2e4 \ub0a0\uc9dc"])return!1;const s=new Date(e["\uc720\uc2e4 \ub0a0\uc9dc"].replace(/\./g,"-")),[o,m,u]=r.split("-").map(Number),g=(null===(t=e["\ub3c4"])||void 0===t?void 0:t.toLowerCase().includes(a.toLowerCase()))||(null===(l=e["\uc2dc, \uad70, \uad6c"])||void 0===l?void 0:l.toLowerCase().includes(a.toLowerCase()))||(null===(n=e["\ub3d9, \uc74d, \uba74"])||void 0===n?void 0:n.toLowerCase().includes(a.toLowerCase()))||(null===(c=e["\uc138\ubd80 \uc8fc\uc18c"])||void 0===c?void 0:c.toLowerCase().includes(a.toLowerCase()))||""===a,E=!r||o&&s.getFullYear()===o&&(!m||s.getMonth()+1===m)&&(!u||s.getDate()===u),p=e["\uc131\ubcc4"]===i||""===i,v=e["\uc885\ub958"]===d||""===d;return g&&E&&p&&v});(e=>e.sort((e,t)=>{const a=new Date(e["\uc720\uc2e4 \ub0a0\uc9dc"].replace(/\./g,"-")),l=new Date(t["\uc720\uc2e4 \ub0a0\uc9dc"].replace(/\./g,"-"));return"latest"===E?l-a:a-l}))(v);return n.a.createElement("div",{className:"container mx-auto px-4"},n.a.createElement("p",{className:"text-center mb-4"},n.a.createElement("strong",null,"\ucd1d \ubc1c\uacac\ub41c \ub3d9\ubb3c \uc218: ",v.length)),n.a.createElement("div",{className:"filters mb-4"},n.a.createElement(m,{setLocationFilter:c,setDateFilter:o,setGenderFilter:u,setTypeFilter:g,setSortOrder:p})),n.a.createElement("section",{id:"dog-list"},n.a.createElement("div",{className:"dog-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},v.length>0?v.map(e=>n.a.createElement(s,{key:e["\uc774\ub984"],dog:e})):n.a.createElement("p",{className:"text-center"},"\uc120\ud0dd\ud55c \ud544\ud130\uc5d0 \ub9de\ub294 \uac15\uc544\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."))))};a(17);var p=()=>{const[e,t]=Object(l.useState)([]),[a,s]=Object(l.useState)([]),[m,i]=Object(l.useState)(""),[u,p]=Object(l.useState)(""),[v,b]=Object(l.useState)(""),[N,h]=Object(l.useState)("");return Object(l.useEffect)(()=>{},[]),n.a.createElement(c.a,{basename:"/ghappydog"},n.a.createElement(d,{setLostAnimals:t,setFoundAnimals:s}),n.a.createElement("div",{className:"container"},n.a.createElement("header",null,n.a.createElement(c.b,{to:"/",onClick:()=>window.location.reload()},n.a.createElement("img",{src:"".concat("/ghappydog","/logo.png"),alt:"Logo",className:"logo"})),n.a.createElement("div",{className:"header-text"},n.a.createElement("p",{className:"highlight"},'"\uc544\uc774\ub4e4\uc774 \uc9d1\uc73c\ub85c \uac08 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\uc138\uc694"'),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc9c0\ud574\ud53c\ub3c5\uc740 \uc720\uc2e4\uacac \uad6c\uc870\ub97c \uc704\ud55c \ubd09\uc0ac \ubaa8\uc784\uc785\ub2c8\ub2e4.")),n.a.createElement("p",null,n.a.createElement("strong",null,"\ub9ce\uc740 \uc544\uc774\ub4e4\uc774 \uc9d1\uc744 \ucc3e\uc9c0 \ubabb\ud574 \uae38 \uc704\ub97c \ub5a0\ub3cc\uace0 \uc788\uc2b5\ub2c8\ub2e4."),n.a.createElement("br",null),n.a.createElement("strong",null,"\uc791\uc740 \uad00\uc2ec\ub4e4\uc774 \ubaa8\uc5ec \uc544\uc774\ub4e4\uc774 \ub530\ub73b\ud55c \uac00\uc815\uc73c\ub85c \ub3cc\uc544\uac08 \uc218 \uc788\uac8c \ub3c4\uc640\uc8fc\uc138\uc694.")),n.a.createElement("p",{className:"highlight"},"\uc6b0\ub9ac\uac00 \ud3ec\uae30\ud558\uc9c0 \uc54a\uace0 \ucc3e\ub294\ub2e4\uba74 \ubc18\ub4dc\uc2dc \uc9d1\uc73c\ub85c \ub3cc\uc544\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),n.a.createElement("nav",{className:"nav-list"},n.a.createElement(c.b,{to:"/lost"},"\uc720\uc2e4 \ub3d9\ubb3c"),n.a.createElement(c.b,{to:"/found"},"\uc644\ub8cc \ub3d9\ubb3c"))),n.a.createElement(r.c,null,n.a.createElement(r.a,{path:"/lost",element:n.a.createElement(g,{lostAnimals:e})}),n.a.createElement(r.a,{path:"/found",element:n.a.createElement(E,{foundAnimals:a})}),n.a.createElement(r.a,{path:"/dog-details/:name",element:n.a.createElement(o,{animals:e.concat(a)})}))))};var v=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:c,getTTFB:r}=t;a(e),l(e),n(e),c(e),r(e)})},b=a(8);a.n(b).a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null))),v()},5:function(e,t,a){},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.78cccad6.chunk.js.map