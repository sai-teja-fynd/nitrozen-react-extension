import e from"react";import"./breadcrumb.scss.js";import a from"./BreadCrumbItem.js";let r=[];function l(l){console.log(r);const t=r.length;return e.createElement("div",{className:"bread-crumb"},e.createElement("nav",{className:"bread-crumb-nav"},e.createElement("ul",null,r.map(((r,c)=>e.createElement("li",null,e.createElement(a,{key:"idx",BreadCrumb:r,separator:">",isLast:c===t-1,handleClick:l})))))))}function t(e,a){r.forEach(((a,l)=>{a.label===e&&r.splice(l)})),r.push({label:e,link:a})}export{l as default,t as setBreadCrumpsItems};
//# sourceMappingURL=BreadCrumb.js.map
