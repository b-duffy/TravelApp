var Client;(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var d=n.getElementsByTagName("script");d.length&&(t=d[d.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var t={};e.r(t),e.d(t,{addTripInfo:()=>r,processCity:()=>a,resetUI:()=>o});const n=document.getElementById("body-container"),d=document.getElementById("list-placeholder"),r=e=>{if(1==document.contains(d)){d.style.display="none";let t=document.createElement("div");t.classList.add("body-card"),n.appendChild(t);let r=document.createElement("div");r.classList.add("body-card-container"),t.appendChild(r);let a=document.createElement("div");r.appendChild(a);let i=document.createElement("h2"),c=document.createElement("p"),o=document.createElement("p"),l=document.createElement("p"),m=document.createElement("a"),p=document.createElement("img");i.innerHTML=`Destination: ${e.city}`,o.innerHTML=`Departure: ${e.startDate}`,l.innerHTML=`Return: ${document.getElementById("date-end").value}`,c.innerHTML=`Temperature: ${e.temp}°`,m.innerHTML="Remove trip",m.id="remove-trip",p.src=`${e.cityPicture}`,a.appendChild(i),a.appendChild(c),a.appendChild(o),a.appendChild(l);let s=document.createElement("div");r.appendChild(s),p.classList.add("body-card-container-img"),s.appendChild(p),t.appendChild(m),m.addEventListener("click",(()=>{t.remove()}))}else if(0==document.contains(d)){let t=document.createElement("div");t.classList.add("body-card"),n.appendChild(t);let d=document.createElement("div");d.classList.add("body-card-container"),t.appendChild(d);let r=document.createElement("div");d.appendChild(r);let a=document.createElement("h2"),i=document.createElement("p"),c=document.createElement("p"),o=document.createElement("p"),l=document.createElement("a"),m=document.createElement("img");a.innerHTML=`Destination: ${e.city}`,c.innerHTML=`Departure: ${e.startDate}`,o.innerHTML=`Return: ${document.getElementById("date-end").value}`,i.innerHTML=`Temperature: ${e.temp}°`,l.innerHTML="Remove Trip",l.id="remove-trip",m.src=`${e.cityPicture}`,r.appendChild(a),r.appendChild(i),r.appendChild(c),r.appendChild(o);let p=document.createElement("div");d.appendChild(p),m.classList.add("body-card-container-img"),p.appendChild(m),t.appendChild(l),l.addEventListener("click",(()=>{t.remove()}))}},a=e=>{e.preventDefault();let t=document.getElementById("city").value,n=document.getElementById("date-start").value,d=document.getElementById("date-end").value;""===t||""===n||""===d?alert("Please enter city, departure date, and return date!"):fetch("http://localhost:8080/add",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({city:t,startDate:n})}).then((e=>e.json())).then((e=>{r(e)}))};document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("submit-button").addEventListener("click",a)}));const i=document.getElementById("body-container"),c=document.getElementById("list-placeholder");function o(){const e=document.querySelector(".body-card");i.contains(e)||(c.style.display="inline")}i.addEventListener("click",o),e.p;const l=e.p+"assets/images/boat.png";document.getElementById("header-logo").src=l,Client=t})();