(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(4),c=a.n(r),o=(a(16),a(3)),s=a(2);var m=e=>{let{dog:t}=e;const a=t["\uc774\ubbf8\uc9c0"]?"".concat("/ghappydog","/images/").concat(t["\uc774\ubbf8\uc9c0"].replace(/\.([a-zA-Z]+)$/,e=>e.toLowerCase())):"".concat("/ghappydog","/images/default_photo.jpg");return n.a.createElement("div",{className:"dog-card border p-4 rounded shadow-lg relative","data-location":t["\uc9c0\uc5ed"],"data-date":t["\uc720\uc2e4 \ub0a0\uc9dc"],"data-gender":t["\uc131\ubcc4"]},n.a.createElement("img",{src:a,alt:t["\uc774\ub984"],className:"w-full h-48 object-cover rounded mb-4"}),n.a.createElement("h2",null,t["\uc774\ub984"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc720\uc2e4 \ub0a0\uc9dc:")," ",t["\uc720\uc2e4 \ub0a0\uc9dc"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc131\ubcc4: "),t["\uc131\ubcc4"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uacac\uc885/\ubb18\uc885: "),t["\uacac\uc885/\ubb18\uc885"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc720\uc2e4 \uc7a5\uc18c: "),t["\uc2dc, \uad70, \uad6c"],", ",t["\ub3d9, \uc74d, \uba74"],", ",t["\uc138\ubd80 \uc8fc\uc18c"]),t.URL&&n.a.createElement("p",null,n.a.createElement("strong",null,"\uce74\ud1a1 \uc624\ud508\ucc44\ud305: "),n.a.createElement("a",{href:t.URL,target:"_blank",rel:"noopener noreferrer"},t.URL)),n.a.createElement(o.b,{to:"/dog-details/".concat(t["\uc774\ub984"]),className:"absolute bottom-4 right-4 text-blue-500"},"\ub354 \ubcf4\uae30 ..."))};var u=e=>{let{animals:t}=e;const{name:a}=Object(s.q)(),l=t.find(e=>e["\uc774\ub984"]===a);if(!l)return n.a.createElement("p",null,"\ud574\ub2f9 \uac15\uc544\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.");const r=l["\uc774\ubbf8\uc9c0"]?"".concat("/ghappydog","/images/").concat(l["\uc774\ubbf8\uc9c0"].replace(/\.([a-zA-Z]+)$/,e=>e.toLowerCase())):"".concat("/ghappydog","/images/default_photo.jpg");return n.a.createElement("div",{className:"dog-details container mx-auto p-4"},n.a.createElement("img",{src:r,alt:l["\uc774\ub984"],className:"w-full max-w-md mx-auto mb-4"}),n.a.createElement("h2",null,l["\uc774\ub984"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc720\uc2e4 \ub0a0\uc9dc:")," ",l["\uc720\uc2e4 \ub0a0\uc9dc"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc131\ubcc4:")," ",l["\uc131\ubcc4"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uacac\uc885/\ubb18\uc885:")," ",l["\uacac\uc885/\ubb18\uc885"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc0c9\uc0c1:")," ",l["\uc0c9\uc0c1"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\ubab8\ubb34\uac8c:")," ",l["\ubab8\ubb34\uac8c"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc720\uc2e4 \uc7a5\uc18c:")," ","".concat(l["\uc2dc, \uad70, \uad6c"],", ").concat(l["\ub3d9, \uc74d, \uba74"],", ").concat(l["\uc138\ubd80 \uc8fc\uc18c"])),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc138\ubd80 \ud2b9\uc9d5:")," ",l["\uadf8 \uc678 \uc138\ubd80 \ud2b9\uc9d5"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\ub9c8\uc9c0\ub9c9 \ubaa9\uaca9 \uc9c0\uc5ed:")," ",l["\ub9c8\uc9c0\ub9c9 \uc81c\ubcf4 \uc9c0\uc5ed"]),n.a.createElement("p",null,n.a.createElement("strong",null,"\uc778\uc2dd\uce69:")," ",l["\uc778\uc2dd\uce69"]))};var d=e=>{let{setLocationFilter:t,setDateFilter:a,setGenderFilter:r,setTypeFilter:c}=e;const[o,s]=Object(l.useState)(""),[m,u]=Object(l.useState)(""),[d,i]=Object(l.useState)(""),[g,p]=Object(l.useState)("");return n.a.createElement("div",{className:"filters flex flex-col md:flex-row justify-center gap-4 mb-4"},n.a.createElement("label",null,"\uc704\uce58 \ud544\ud130:",n.a.createElement("input",{type:"text",value:o,onChange:e=>{s(e.target.value),t(e.target.value)},className:"p-2 border border-gray-300 rounded"})),n.a.createElement("label",null,"\uc720\uc2e4 \ub0a0\uc9dc \ud544\ud130:",n.a.createElement("input",{type:"text",placeholder:"yyyy, yyyy-mm, yyyy-mm-dd",value:m,onChange:e=>{u(e.target.value),a(e.target.value)},className:"p-2 border border-gray-300 rounded"})),n.a.createElement("label",null,"\uc131\ubcc4 \ud544\ud130:",n.a.createElement("select",{value:d,onChange:e=>{i(e.target.value),r(e.target.value)},className:"p-2 border border-gray-300 rounded"},n.a.createElement("option",{value:""},"All"),n.a.createElement("option",{value:"\uc554"},"\uc554"),n.a.createElement("option",{value:"\uc218"},"\uc218"))),n.a.createElement("label",null,"\uc885\ub958 \ud544\ud130:",n.a.createElement("select",{value:g,onChange:e=>{p(e.target.value),c(e.target.value)},className:"p-2 border border-gray-300 rounded"},n.a.createElement("option",{value:""},"All"),n.a.createElement("option",{value:"\uac1c"},"\uac1c"),n.a.createElement("option",{value:"\uace0\uc591\uc774"},"\uace0\uc591\uc774"))),n.a.createElement("button",{onClick:()=>{s(""),u(""),i(""),p(""),t(""),a(""),r(""),c("")},className:"bg-gray-500 text-white py-2 px-4 rounded"},"\ud544\ud130 \ucd08\uae30\ud654"))},i=a(6),g=a.n(i);var p=e=>{let{setLostAnimals:t,setFoundAnimals:a}=e;return Object(l.useEffect)(()=>{const e=(e,t)=>{fetch(e).then(e=>e.text()).then(e=>{g.a.parse(e,{header:!0,dynamicTyping:!0,complete:e=>{t(e.data)}})}).catch(t=>console.error("Error fetching ".concat(e,":"),t))};e("".concat("/ghappydog","/\uc9c0\ud574\ud53c\ub3c5 \uc218\uc0c9\uc6a9 \uc720\uc2e4\uacac \ub9ac\uc2a4\ud2b8.csv"),t),e("".concat("/ghappydog","/\uc9c0\ud574\ud53c\ub3c5_\ucc3e\uc74c.csv"),a)},[t,a]),null};var E=e=>{let{lostAnimals:t}=e;const[a,r]=Object(l.useState)(""),[c,o]=Object(l.useState)(""),[s,u]=Object(l.useState)(""),[i,g]=Object(l.useState)(""),p=t.filter(e=>{var t,l,n;const r=new Date(e["\uc720\uc2e4 \ub0a0\uc9dc"].replace(/\./g,"-")),[o,m,u]=c.split("-").map(Number),d=(null===(t=e["\uc2dc, \uad70, \uad6c"])||void 0===t?void 0:t.toLowerCase().includes(a.toLowerCase()))||(null===(l=e["\ub3d9, \uc74d, \uba74"])||void 0===l?void 0:l.toLowerCase().includes(a.toLowerCase()))||(null===(n=e["\uc138\ubd80 \uc8fc\uc18c"])||void 0===n?void 0:n.toLowerCase().includes(a.toLowerCase()))||""===a,g=!c||o&&r.getFullYear()===o&&(!m||r.getMonth()+1===m)&&(!u||r.getDate()===u),p=e["\uc131\ubcc4"]===s||""===s,E=e["\uc885\ub958"]===i||""===i;return d&&g&&p&&E});return n.a.createElement("div",{className:"container mx-auto px-4"},n.a.createElement("h1",{className:"text-center text-2xl font-bold mb-4"},"\uc9c0\ud574\ud53c\ub3c5 \uc720\uc2e4 \ub3d9\ubb3c \ub9ac\uc2a4\ud2b8"),n.a.createElement("p",{className:"text-center mb-4"},"\uc9c0\ud574\ud53c\ub3c5\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c \uc720\uc2e4\ub41c \uac15\uc544\uc9c0 \uc815\ubcf4\ub97c \ucc3e\uace0 \uc8fc\uc778\uacfc \ub2e4\uc2dc \ub9cc\ub0a0 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\uc138\uc694."),n.a.createElement("p",{className:"text-center mb-4"},n.a.createElement("strong",null,"\ucd1d \uc720\uc2e4\ub3d9\ubb3c \uc218: ",p.length)),n.a.createElement("div",{className:"filters mb-4"},n.a.createElement(d,{setLocationFilter:r,setDateFilter:o,setGenderFilter:u,setTypeFilter:g}),n.a.createElement("div",{className:"my-4 flex justify-center gap-4"},n.a.createElement("button",{onClick:()=>{},className:"bg-blue-500 text-white py-2 px-4 rounded"},"\ud544\ud130 \uc801\uc6a9"),n.a.createElement("button",{onClick:()=>{r(""),o(""),u(""),g("")},className:"bg-gray-500 text-white py-2 px-4 rounded"},"\ud544\ud130 \ucd08\uae30\ud654"))),n.a.createElement("section",{id:"dog-list"},n.a.createElement("div",{className:"dog-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},p.length>0?p.map(e=>n.a.createElement(m,{key:e["\uc774\ub984"],dog:e})):n.a.createElement("p",{className:"text-center"},"\uc120\ud0dd\ud55c \ud544\ud130\uc5d0 \ub9de\ub294 \uac15\uc544\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."))))},b=a(7),v=a.n(b);a(17);var y=()=>{const[e,t]=Object(l.useState)([]),[a,r]=Object(l.useState)([]),[c,m]=Object(l.useState)(""),[d,i]=Object(l.useState)(""),[g,b]=Object(l.useState)(""),[y,h]=Object(l.useState)("");return Object(l.useEffect)(()=>{},[]),n.a.createElement(o.a,{basename:"/ghappydog"},n.a.createElement(p,{setDogs:t}),n.a.createElement(p,{setDogs:r,filePath:"/\uc9c0\ud574\ud53c\ub3c5_\ucc3e\uc74c.csv"}),n.a.createElement("div",{className:"container"},n.a.createElement("header",{className:"text-center"},n.a.createElement("h1",null,n.a.createElement(o.b,{to:"/",onClick:()=>window.location.reload()},"\uc9c0\ud574\ud53c\ub3c5 \uc720\uc2e4 \ub3d9\ubb3c \ub9ac\uc2a4\ud2b8")),n.a.createElement("nav",{className:"flex justify-center gap-4 my-4"},n.a.createElement(o.b,{to:"/",className:"bg-blue-500 text-white py-2 px-4 rounded"},"\uc720\uc2e4 \ub3d9\ubb3c"),n.a.createElement(o.b,{to:"/found",className:"bg-green-500 text-white py-2 px-4 rounded"},"\ubc1c\uacac \ub3d9\ubb3c"))),n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/",element:n.a.createElement(E,{lostAnimals:e,setLocationFilter:m,setDateFilter:i,setGenderFilter:b,setTypeFilter:h})}),n.a.createElement(s.a,{path:"/found",element:n.a.createElement(v.a,{foundAnimals:a,setLocationFilter:m,setDateFilter:i,setGenderFilter:b,setTypeFilter:h})}),n.a.createElement(s.a,{path:"/dog-details/:name",element:n.a.createElement(u,{animals:e.concat(a)})}))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root"))},7:function(e,t){},8:function(e,t,a){e.exports=a(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.47c135c9.chunk.js.map