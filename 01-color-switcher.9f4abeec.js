const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d;function n(){d=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.removeEventListener("click",n),t.disabled=!1,e.disabled=!0}e.addEventListener("click",n),t.addEventListener("click",(function(){clearInterval(d),e.addEventListener("click",n),e.disabled=!1})),t.disabled=!0;
//# sourceMappingURL=01-color-switcher.9f4abeec.js.map
