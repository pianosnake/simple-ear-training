!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";let i,r,o;n.r(t);class s{constructor(){i||(i=new(window.AudioContext||window.webkitAudioContext)),r||(r=i.createDynamicsCompressor()).connect(i.destination),r.attack.setValueAtTime(.03,i.currentTime),o||(o=i.createGain()).connect(r)}play(e){return o.gain.setValueAtTime(1,i.currentTime),Promise.all(this.notes.map(e=>e.getAudio(i))).then(()=>{this.notes.sort((e,t)=>e.value-t.value).forEach((t,n)=>{const r=i.createBufferSource(),s=i.createGain(),a=e?n*e:0;r.buffer=t.buffer,r.connect(s),s.connect(o),s.gain.setTargetAtTime(0,i.currentTime+a,.5),r.start(i.currentTime+a,0,2.5)})})}stop(){o.gain.setValueAtTime(0,i.currentTime)}}const a={chromatic:{2:[{type:"Minor second",def:[0,1]},{type:"Major second",def:[0,2]},{type:"Minor third",def:[0,3]},{type:"Major third",def:[0,4]},{type:"Fourth",def:[0,5]},{type:"Tritone",def:[0,6]},{type:"Fifth",def:[0,7]},{type:"Minor sixth",def:[0,8]},{type:"Major sixth",def:[0,9]},{type:"Minor seventh",def:[0,10]},{type:"Major seventh",def:[0,11]},{type:"Octave",def:[0,12]}],3:[{type:"Major",def:[0,4,7]},{type:"minor",def:[0,3,7]},{type:"diminished",def:[0,3,6]},{type:"Augmented",def:[0,4,8]}],4:[{type:"Dominant",def:[0,4,7,10]},{type:"Major 7",def:[0,4,7,11]},{type:"Major 6",def:[0,4,7,9]},{type:"minor 7",def:[0,3,7,10]},{type:"minor Major 7",def:[0,3,7,11]},{type:"half-diminished 7",def:[0,3,6,10]}]},diatonic:{1:[{type:"Do",def:[0]},{type:"Re",def:[2]},{type:"Mi",def:[4]},{type:"Fa",def:[5]},{type:"Sol",def:[7]},{type:"La",def:[9]},{type:"Ti",def:[11]}],3:[{type:"Major (I)",def:[0,4,7]},{type:"minor (ii)",def:[2,5,9]},{type:"minor (iii)",def:[4,7,11]},{type:"Major (IV)",def:[5,9,12]},{type:"Major (V)",def:[7,11,14]},{type:"minor (vi)",def:[9,12,16]},{type:"diminished (vii °)",def:[11,14,17]}],4:[{type:"Major 7 (I)",def:[0,4,7,11]},{type:"minor 7 (ii)",def:[2,5,9,12]},{type:"minor 7 (iii)",def:[4,7,11,14]},{type:"Major 7 (IV)",def:[5,9,12,16]},{type:"Dominant (V7)",def:[7,11,14,17]},{type:"minor 7 (vi)",def:[9,12,16,19]},{type:"half-diminished 7 (vii ø)",def:[11,14,17,21]}]}};function c(e){return e[Math.floor(Math.random()*e.length)]}const d=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],f=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"];class h extends s{constructor(e,t){super(),this.value=parseInt(e),this.file=function(e){const t=Math.floor(e/12)-1;return"./sounds/"+d[e%12]+t+"-97-127.mp3"}(this.value),this.name=f[this.value%12],t&&(this.name+=" / "+t),this.notes=[this],this.buffer=null}getAudio(e){return new Promise((t,n)=>{if(this.buffer)return void t(this.buffer);const i=new XMLHttpRequest;i.open("GET",this.file,!0),i.responseType="arraybuffer",i.onloadend=(()=>{if(404===i.status)return n("Audio file not found");e.decodeAudioData(i.response,e=>{this.buffer=e,t(this.buffer)})}),i.onerror=(e=>n(e)),i.send()})}}function u(e){const t=12*Math.round(Math.random()),n=c(a.diatonic[1]),i=e+n.def[0]-t;return new h(i,n.type)}const l=[-12,0,0,-12];class p extends s{constructor(e,t,n,i){super(),this.notes=n.map((t,r)=>{const o=i&&n.length>2?l[r]:0;return new h(e+t+o)}),this.type=t}get name(){return 2===this.notes.length?`${this.type} (${this.notes[0].name} - ${this.notes[1].name})`:this.notes[0].name+" "+this.type}}class y extends s{constructor(e,t){super(),this.type=e,this.notes=t}get name(){return`${this.type} (${this.notes[0].name} - ${this.notes[1].name})`}}var m=class{constructor(e,t){const n=window.onkeyup;window.onkeyup=function(i){n&&n(i),i.key===e&&t()}}};const v=57,M=15;let w,b=!0,g=1,N=0,k=!1,L=!1,T=!1;const j={};document.querySelectorAll("*[id]").forEach(e=>{j[e.id]=e}),new class{constructor(e){e.playBtn.addEventListener("click",()=>this.playQuestion()),e.hintBtn.addEventListener("click",()=>this.hint()),e.referenceBtn.addEventListener("click",()=>this.playReference()),e.refNoteSelect.addEventListener("change",()=>this.changeReference()),e.refNoteSelect.addEventListener("click",e=>e.stopPropagation()),e.answerBtn.addEventListener("click",()=>this.showAnswer()),e.note1Radio.addEventListener("click",()=>this.setNumberOfNotesToPlay(1)),e.note2Radio.addEventListener("click",()=>this.setNumberOfNotesToPlay(2)),e.note3Radio.addEventListener("click",()=>this.setNumberOfNotesToPlay(3)),e.note4Radio.addEventListener("click",()=>this.setNumberOfNotesToPlay(4)),e.pivotChk.addEventListener("click",()=>this.setPivot()),e.voicedChk.addEventListener("click",()=>this.setVoiced()),e.diatonicChk.addEventListener("click",()=>this.setDiatonic()),this.diatonicChk=e.diatonicChk,this.pivotChk=e.pivotChk,this.playBtn=e.playBtn,this.answerDiv=e.answerDiv,this.refNoteSelect=e.refNoteSelect,this.refNoteLabel=e.refNoteLabel,this.referenceNote=new h(this.refNoteSelect.value),new m("r",()=>this.playQuestion()),new m("a",()=>this.playReference()),new m("h",()=>this.hint()),new m(" ",()=>this.showAnswer())}showMsg(e){this.answerDiv.innerHTML=e}playReference(){this.referenceNote.play()}changeReference(){this.referenceNote=new h(this.refNoteSelect.value),this.refNoteLabel.innerText=this.referenceNote.name}playQuestion(){b?(b=!1,this.referenceNote.stop(),1===g?w=T?u(this.referenceNote.value):function(e,t){return new h(e+Math.floor(Math.random()*t))}(v,M):T?2===g?w=function(e){const t=u(e);let n=u(e);for(;n.value===t.value||Math.abs(n.value-t.value)>12;)n=u(e);const i=Math.abs(t.value-n.value),r=a.chromatic[2].find(e=>e.def[1]===i);return new y(r.type,[t,n])}(this.referenceNote.value):g>2&&(w=function(e,t,n){const i=12*Math.round(Math.random()),r=c(a.diatonic[t]);return new p(e-i,r.type,r.def,n)}(this.referenceNote.value,g,L)):w=k?function(e,t,n){const i=c(a.chromatic[t]),r=c(i.def);return new p(e+i.def[0]-r,i.type,i.def,n)}(this.referenceNote.value,g,L):function(e,t,n,i){const r=e+Math.floor(Math.random()*t),o=c(a.chromatic[n]);return new p(r,o.type,o.def,i)}(v,M,g,L),w.play(),this.showMsg(""),this.playBtn.innerHTML="Repeat"):this.repeatLastQuestion()}repeatLastQuestion(e){w?w.play(e):this.showMsg("Play something first")}hint(){N++,this.repeatLastQuestion(.15*N),N>3&&(N=0)}showAnswer(){w?(this.repeatLastQuestion(),this.showMsg(w.name),this.reset()):this.showMsg("Play something first")}setNumberOfNotesToPlay(e){g=e,this.reset()}setPivot(){k=!k,T=!1,this.diatonicChk.checked=!1,this.reset()}setVoiced(){L=!L,this.reset()}setDiatonic(){T=!T,k=!1,this.pivotChk.checked=!1,this.reset()}reset(){this.playBtn.innerHTML="New",N=0,b=!0}}(j)}]);