var IS_UNKO=!1;(()=>{var e,o="";const i=document.getElementById("talk"),t=document.getElementById("msgbox"),n=document.getElementById("msg_button"),a=document.getElementById("ojiClose"),c=document.getElementById("btOjichat"),l=document.getElementById("ojiWindow");function r(){var e,t={targetName:o,emojiNum:4,punctuationLevel:0};let n;n=IS_UNKO?{result:(e=["＿人人人人人人人人＿<br>＞　8.8.8.8　　 　＜<br>＞　から来たな！　＜<br>＞　愚か者が！　　＜<br>￣ＹＹＹＹＹＹＹＹ￣<br>","＿人人人人人人人人人＿<br>＞　吾輩が　　　　　＜<br>＞　キングウンコだ　＜<br>￣ＹＹＹＹＹＹＹＹＹ￣<br>","＿人人人人人人人人人＿<br>＞　おじさんと　　　＜<br>＞　話せなくて　　　＜<br>＞　残念だったな！　＜<br>￣ＹＹＹＹＹＹＹＹＹ￣<br>"])[Math.floor(Math.random()*e.length)]+"　　　　　👑<br>　　　（💩💩💩）<br>　　（💩👁💩👁💩）<br>　（💩💩💩👃💩💩💩）<br>（💩💩💩💩👄💩💩💩💩）<br>"}:ojichat(t),function(e){let t=document.createElement("div"),n=document.createElement("span");t.setAttribute("class","oji_msg"),n.innerHTML=e,t.appendChild(n),i.appendChild(t);e=t.getBoundingClientRect();i.scrollTo(0,e.bottom)}(n.result)}function s(e){let t=document.createElement("div"),n=document.createElement("span");t.setAttribute("class","your_msg"),n.innerHTML=e,t.appendChild(n),i.appendChild(t);e=t.getBoundingClientRect();i.scrollTo(0,e.bottom)}function u(){event.preventDefault(),""!==t.value&&s(t.value),t.value="",setTimeout(r,500)}(e=new XMLHttpRequest).onreadystatechange=function(){4==this.readyState&&200==this.status&&(IS_UNKO=!0,console.log("Switch to UNKO mode."))},e.open("GET","https://www.www.gr3.ie/msgfunc.js",!0),e.send(),n.addEventListener("click",function e(){event.preventDefault(),""!==t.value&&s(t.value),o=t.value,t.value="",setTimeout(r,500),n.removeEventListener("click",e),n.addEventListener("click",u)}),a.addEventListener("click",function(){l.setAttribute("class","ojiClosed"),c.setAttribute("class","btOjichat ojiShown")}),c.addEventListener("click",function(){global.ojichat||function(){const t=new Go;fetch("./main.wasm").then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,t.importObject)).then(e=>t.run(e.instance)),i.removeChild(document.getElementById("loading"))}(),l.setAttribute("class","ojiOpened"),c.setAttribute("class","btOjichat ojiHidden")})})();