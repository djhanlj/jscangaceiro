webpackJsonp([1],[,function(a,b,c){"use strict";c.d(b,"a",function(){return e});var d=c(4);let e=class{constructor(a=d.g("data"),b=d.g("quantidade"),c=d.g("valor")){Object.assign(this,{_quantidade:b,_valor:c}),this._data=new Date(a.getTime()),Object.freeze(this)}get volume(){return this._quantidade*this._valor}get data(){return new Date(this._data.getTime())}get quantidade(){return this._quantidade}get valor(){return this._valor}equals(a){return JSON.stringify(this)==JSON.stringify(a)}}},function(a,b,c){"use strict";function d(a){return a instanceof f||Object.getPrototypeOf(a)instanceof f}c.d(b,"a",function(){return e}),b.b=function(a){return d(a)?a.message:(console.log(a),"N\xE3o foi poss\xEDvel realizar a opera\xE7\xE3o")};let e=class extends Error{constructor(a=""){super(a),this.name=this.constructor.name}};const f=e},,function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function e(a=500){return function(b,c,d){const e=d.value;let f=0;return d.value=function(...b){event&&event.preventDefault(),clearTimeout(f),console.log(f),f=setTimeout(()=>e.apply(this,b),a)},d}}function f(...a){const b=a.map((a)=>document.querySelector(a));return function(a){const c=a,d=function(){const a=new c(...b);Object.getOwnPropertyNames(c.prototype).forEach((b)=>{Reflect.hasMetadata("bindEvent",a,b)&&g(a,Reflect.getMetadata("bindEvent",a,b))})};return d.prototype=c.prototype,d}}function g(a,b){document.querySelector(b.selector).addEventListener(b.event,(c)=>{b.prevent&&c.preventDefault(),a[b.propertyKey](c)})}function h(a){throw new Error(`${a} é um parâmetro obrigatório`)}function i(a=h("event"),b=h("selector"),c=!0){return function(d,e,f){return console.log(d),Reflect.defineMetadata("bindEvent",{event:a,selector:b,prevent:c,propertyKey:e},Object.getPrototypeOf(d),e),f}}Object.defineProperty(b,"__esModule",{value:!0});let j=class a{static create(b,c,d){return new Proxy(b,{get(b,e){return a._ehFuncao(b[e])&&c.includes(e)?function(){console.log(`"${e}" disparou a armadilha`),b[e].apply(b,arguments),d(b)}:b[e]},set(a,b,e){const f=Reflect.set(a,b,e);return c.includes(b)&&d(a),f}})}static _ehFuncao(a){return typeof a==typeof Function}},k=class{constructor(a,b,...c){const d=j.create(a,c,(a)=>{b.update(a)});return b.update(a),d}};const l=["negociacoes"];let m=null,n=null,o=class a{constructor(){throw new Error("N\xE3o \xE9 poss\xEDvel criar inst\xE2ncias dessa classe")}static getConnection(){return new Promise((b,c)=>{if(m)return b(m);const d=indexedDB.open("jscangaceiro",2);d.onupgradeneeded=(b)=>{a._createStores(b.target.result)},d.onsuccess=(a)=>{m=a.target.result,n=m.close.bind(m),m.close=()=>{throw new Error("Voc\xEA n\xE3o pode fechar diretamente a conex\xE3o")},b(a.target.result)},d.onerror=(a)=>{console.log(a.target.result),c(a.target.error.name)}})}static _createStores(a){l.forEach((b)=>{a.objectStoreNames.contains(b)&&a.deleteObjectStore(b),a.createObjectStore(b,{autoIncrement:!0})})}static closeConnection(){m&&n()}};var p=c(5);let q=(()=>{var a=d(function*(){let a=yield o.getConnection();return new p.a(a)});return function(){return a.apply(this,arguments)}})();c.d(b,"a",function(){return k}),c.d(b,!1,function(){return o}),c.d(b,"f",function(){return q});var r=c(2);c.d(b,"e",function(){return r.b});c(6);c.d(b,!1,function(){return j}),c.d(b,"d",function(){return e}),c.d(b,"c",function(){return f}),c.d(b,"g",function(){return h}),c.d(b,"b",function(){return i})},function(a,b,c){"use strict";c.d(b,"a",function(){return e});var d=c(1);let e=class{constructor(a){this._connection=a,this._store="negociacoes"}adiciona(a){return new Promise((b,c)=>{const d=this._connection.transaction([this._store],"readwrite").objectStore(this._store).add(a);d.onsuccess=()=>b(),d.onerror=(a)=>{console.log(a.target.error),c("N\xE3o foi poss\xEDvel salvar a negocia\xE7\xE3o")}})}listaTodos(){return new Promise((a,b)=>{const c=[],e=this._connection.transaction([this._store],"readwrite").objectStore(this._store).openCursor();e.onsuccess=(b)=>{const e=b.target.result;if(e){const a=new d.a(e.value._data,e.value._quantidade,e.value._valor);c.push(a),e.continue()}else a(c)},e.onerror=(a)=>{console.log(a.target.error),b("N\xE3o foi poss\xEDvel listar nas negocia\xE7\xF5es")}})}apagaTodos(){return new Promise((a,b)=>{const c=this._connection.transaction([this._store],"readwrite").objectStore(this._store).clear();c.onsuccess=()=>a(),c.onerror=(a)=>{console.log(a.target.error),b("N\xE3o foi poss\xEDvel apagar as negocia\xE7\xF5es")}})}}},function(a,b,c){"use strict";c.d(b,"a",function(){return d});let d=class{_handleErrors(a){if(!a.ok)throw new Error(a.statusText);return a}get(a){return fetch(a).then((a)=>this._handleErrors(a)).then((a)=>a.json())}}},function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function e(a,b,c,d,e){var f={};return Object.keys(d).forEach(function(a){f[a]=d[a]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce(function(c,d){return d(a,b,c)||c},f),e&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(e):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(a,b,f),f=null),f}Object.defineProperty(b,"__esModule",{value:!0});let f=class{constructor(){this._negociacoes=[],Object.freeze(this)}adiciona(a){this._negociacoes.push(a)}paraArray(){return[].concat(this._negociacoes)}get volumeTotal(){return this._negociacoes.reduce((a,b)=>a+b.volume,0)}esvazia(){this._negociacoes.length=0}};var g=c(1),h=c(5);let i=class{constructor(a){this._elemento=document.querySelector(a)}update(a){this._elemento.innerHTML=this.template(a)}template(){throw new Error("Voc\xEA precisa implementar o m\xE9todo template")}},j=class extends i{template(a){return a.texto?`<p class="alert alert-info">${a.texto}</p>`:`<p></p>`}};var k=c(2);let l=class extends k.a{constructor(){super("A data deve estar no formato dd/mm/aaaa")}},m=class{constructor(){throw new Error("Esta classe n\xE3o pode ser instanciada")}static paraTexto(a){let b=a.getDate(),c=a.getMonth()+1,d=a.getFullYear();return`${b}/${c}/${d}`}static paraData(a){if(!/\d{2}\/\d{2}\/\d{4}$/.test(a))throw new l;return new Date(...a.split("/").reverse().map((a,b)=>a-b%2))}},n=class extends i{template(a){return console.log(a),`
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            </tbody>
                ${a.paraArray().map((a)=>`
                    <tr>
                        <td> ${m.paraTexto(a.data)} </td>
                        <td> ${a.quantidade} </td>
                        <td> ${a.valor} </td>
                        <td> ${a.volume} </td>
                    </tr>
                `).join("")}
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td> ${a.volumeTotal} </td>
                </tr>
            </tfoot>
        </table>
        `}},o=class{constructor(a=""){this._texto=a}get texto(){return this._texto}set texto(a){this._texto=a}};var p,q,r,s,t,u,v,w,x=c(4);let y=(p=x.c("#data","#quantidade","#valor"),q=x.b("submit",".form"),r=x.d(),s=x.b("click","#botao-importa"),t=x.d(),u=x.b("click","#botao-apaga"),p(v=(w=class{constructor(a,b,c){Object.assign(this,{_inputData:a,_inputQuantidade:b,_inputValor:c}),this._negociacoes=new x.a(new f(),new n("#negociacoes"),"adiciona","esvazia"),this._mensagem=new x.a(new o(),new j("#mensagemView"),"texto"),this._init()}_init(){var a=this;return d(function*(){try{const b=yield x.f(),c=yield b.listaTodos();c.forEach(function(b){return a._negociacoes.adiciona(b)})}catch(b){a._mensagem.texto=x.e(b)}})()}adiciona(a){var b=this;return d(function*(){try{a.preventDefault();const c=b._criaNegociacao(),d=yield x.f();yield d.adiciona(c),b._negociacoes.adiciona(c),b._mensagem.texto="Negocia\xE7\xE3o adicionada com sucesso",b._limpaFormulario()}catch(a){b._mensagem.texto=x.e(a)}})()}_limpaFormulario(){this._inputData.value="",this._inputQuantidade.value=1,this._inputValor.value=0,this._inputData.focus(),console.log("formul\xE1rio limpo")}_criaNegociacao(){return console.log(this),new g.a(m.paraData(this._inputData.value),parseInt(this._inputQuantidade.value),parseFloat(this._inputValor.value))}importaNegociacoes(){var a=this;return d(function*(){try{const{NegociacaoService:b}=yield c.e(0).then(c.bind(null,27)),d=new b,e=yield d.obtemNegociacoesdoPeriodo();e.filter(function(b){return!a._negociacoes.paraArray().some(function(a){return b.equals(a)})}).forEach(function(b){return a._negociacoes.adiciona(b)}),a._mensagem.texto="Negocia\xE7\xF5es importadas com sucesso"}catch(b){a._mensagem.texto=x.e(b)}})()}apaga(){var a=this;return d(function*(){try{const b=yield x.f();yield b.apagaTodos(),a._negociacoes.esvazia(),a._mensagem.texto="Negocia\xE7\xF5es apagadas com sucesso"}catch(b){a._mensagem.texto=x.e(b)}})()}},e(w.prototype,"adiciona",[q,r],Object.getOwnPropertyDescriptor(w.prototype,"adiciona"),w.prototype),e(w.prototype,"importaNegociacoes",[s,t],Object.getOwnPropertyDescriptor(w.prototype,"importaNegociacoes"),w.prototype),e(w.prototype,"apaga",[u],Object.getOwnPropertyDescriptor(w.prototype,"apaga"),w.prototype),w))||v);var z=c(8),A=c.n(z),B=c(9),C=c.n(B),D=c(3),E=c.n(D),F=c(10),G=c.n(F);const H=new y,I=new g.a(new Date(),1,200),J=new Headers;J.set("Content-Type","application/json");const K=JSON.stringify(I);fetch("http://localhost:3000/negociacoes",{method:"POST",headers:J,body:K}).then(()=>console.log("Dado enviado com sucesso"))},function(){},function(){},function(){}],[7]);