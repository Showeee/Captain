import{d as rt,u as ot,r as $,w as U,c as at,o as B,a as A,b as w,t as P,e as X,g as V,f as N,h as ht,v as ut,F as ct,i as lt,j as dt,n as Y}from"./index.d20dac7e.js";class G{_seed(a,s){if(a===(a||0))return a;{const u=""+a;let l=0;for(let f=0;f<u.length;++f)l^=u.charCodeAt(f)|0;return l}}}var F=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},K={exports:{}};(function(d){(function(a,s,u){function l(t){var i=this,r=h();i.next=function(){var e=2091639*i.s0+i.c*23283064365386963e-26;return i.s0=i.s1,i.s1=i.s2,i.s2=e-(i.c=e|0)},i.c=1,i.s0=r(" "),i.s1=r(" "),i.s2=r(" "),i.s0-=r(t),i.s0<0&&(i.s0+=1),i.s1-=r(t),i.s1<0&&(i.s1+=1),i.s2-=r(t),i.s2<0&&(i.s2+=1),r=null}function f(t,i){return i.c=t.c,i.s0=t.s0,i.s1=t.s1,i.s2=t.s2,i}function _(t,i){var r=new l(t),e=i&&i.state,n=r.next;return n.int32=function(){return r.next()*4294967296|0},n.double=function(){return n()+(n()*2097152|0)*11102230246251565e-32},n.quick=n,e&&(typeof e=="object"&&f(e,r),n.state=function(){return f(r,{})}),n}function h(){var t=4022871197,i=function(r){r=String(r);for(var e=0;e<r.length;e++){t+=r.charCodeAt(e);var n=.02519603282416938*t;t=n>>>0,n-=t,n*=t,t=n>>>0,n-=t,t+=n*4294967296}return(t>>>0)*23283064365386963e-26};return i}s&&s.exports?s.exports=_:u&&u.amd?u(function(){return _}):this.alea=_})(F,d,!1)})(K);var Q={exports:{}};(function(d){(function(a,s,u){function l(h){var t=this,i="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},h===(h|0)?t.x=h:i+=h;for(var r=0;r<i.length+64;r++)t.x^=i.charCodeAt(r)|0,t.next()}function f(h,t){return t.x=h.x,t.y=h.y,t.z=h.z,t.w=h.w,t}function _(h,t){var i=new l(h),r=t&&t.state,e=function(){return(i.next()>>>0)/4294967296};return e.double=function(){do var n=i.next()>>>11,o=(i.next()>>>0)/4294967296,c=(n+o)/(1<<21);while(c===0);return c},e.int32=i.next,e.quick=e,r&&(typeof r=="object"&&f(r,i),e.state=function(){return f(i,{})}),e}s&&s.exports?s.exports=_:u&&u.amd?u(function(){return _}):this.xor128=_})(F,d,!1)})(Q);var Z={exports:{}};(function(d){(function(a,s,u){function l(h){var t=this,i="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,h===(h|0)?t.x=h:i+=h;for(var r=0;r<i.length+64;r++)t.x^=i.charCodeAt(r)|0,r==i.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function f(h,t){return t.x=h.x,t.y=h.y,t.z=h.z,t.w=h.w,t.v=h.v,t.d=h.d,t}function _(h,t){var i=new l(h),r=t&&t.state,e=function(){return(i.next()>>>0)/4294967296};return e.double=function(){do var n=i.next()>>>11,o=(i.next()>>>0)/4294967296,c=(n+o)/(1<<21);while(c===0);return c},e.int32=i.next,e.quick=e,r&&(typeof r=="object"&&f(r,i),e.state=function(){return f(i,{})}),e}s&&s.exports?s.exports=_:u&&u.amd?u(function(){return _}):this.xorwow=_})(F,d,!1)})(Z);var tt={exports:{}};(function(d){(function(a,s,u){function l(h){var t=this;t.next=function(){var r=t.x,e=t.i,n,o;return n=r[e],n^=n>>>7,o=n^n<<24,n=r[e+1&7],o^=n^n>>>10,n=r[e+3&7],o^=n^n>>>3,n=r[e+4&7],o^=n^n<<7,n=r[e+7&7],n=n^n<<13,o^=n^n<<9,r[e]=o,t.i=e+1&7,o};function i(r,e){var n,o=[];if(e===(e|0))o[0]=e;else for(e=""+e,n=0;n<e.length;++n)o[n&7]=o[n&7]<<15^e.charCodeAt(n)+o[n+1&7]<<13;for(;o.length<8;)o.push(0);for(n=0;n<8&&o[n]===0;++n);for(n==8&&(o[7]=-1),r.x=o,r.i=0,n=256;n>0;--n)r.next()}i(t,h)}function f(h,t){return t.x=h.x.slice(),t.i=h.i,t}function _(h,t){h==null&&(h=+new Date);var i=new l(h),r=t&&t.state,e=function(){return(i.next()>>>0)/4294967296};return e.double=function(){do var n=i.next()>>>11,o=(i.next()>>>0)/4294967296,c=(n+o)/(1<<21);while(c===0);return c},e.int32=i.next,e.quick=e,r&&(r.x&&f(r,i),e.state=function(){return f(i,{})}),e}s&&s.exports?s.exports=_:u&&u.amd?u(function(){return _}):this.xorshift7=_})(F,d,!1)})(tt);var et={exports:{}};(function(d){(function(a,s,u){function l(h){var t=this;t.next=function(){var r=t.w,e=t.X,n=t.i,o,c;return t.w=r=r+1640531527|0,c=e[n+34&127],o=e[n=n+1&127],c^=c<<13,o^=o<<17,c^=c>>>15,o^=o>>>12,c=e[n]=c^o,t.i=n,c+(r^r>>>16)|0};function i(r,e){var n,o,c,p,M,m=[],I=128;for(e===(e|0)?(o=e,e=null):(e=e+"\0",o=0,I=Math.max(I,e.length)),c=0,p=-32;p<I;++p)e&&(o^=e.charCodeAt((p+32)%e.length)),p===0&&(M=o),o^=o<<10,o^=o>>>15,o^=o<<4,o^=o>>>13,p>=0&&(M=M+1640531527|0,n=m[p&127]^=o+M,c=n==0?c+1:0);for(c>=128&&(m[(e&&e.length||0)&127]=-1),c=127,p=4*128;p>0;--p)o=m[c+34&127],n=m[c=c+1&127],o^=o<<13,n^=n<<17,o^=o>>>15,n^=n>>>12,m[c]=o^n;r.w=M,r.X=m,r.i=c}i(t,h)}function f(h,t){return t.i=h.i,t.w=h.w,t.X=h.X.slice(),t}function _(h,t){h==null&&(h=+new Date);var i=new l(h),r=t&&t.state,e=function(){return(i.next()>>>0)/4294967296};return e.double=function(){do var n=i.next()>>>11,o=(i.next()>>>0)/4294967296,c=(n+o)/(1<<21);while(c===0);return c},e.int32=i.next,e.quick=e,r&&(r.X&&f(r,i),e.state=function(){return f(i,{})}),e}s&&s.exports?s.exports=_:u&&u.amd?u(function(){return _}):this.xor4096=_})(F,d,!1)})(et);var nt={exports:{}};(function(d){(function(a,s,u){function l(h){var t=this,i="";t.next=function(){var e=t.b,n=t.c,o=t.d,c=t.a;return e=e<<25^e>>>7^n,n=n-o|0,o=o<<24^o>>>8^c,c=c-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-o|0,t.d=o<<16^n>>>16^c,t.a=c-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,h===Math.floor(h)?(t.a=h/4294967296|0,t.b=h|0):i+=h;for(var r=0;r<i.length+20;r++)t.b^=i.charCodeAt(r)|0,t.next()}function f(h,t){return t.a=h.a,t.b=h.b,t.c=h.c,t.d=h.d,t}function _(h,t){var i=new l(h),r=t&&t.state,e=function(){return(i.next()>>>0)/4294967296};return e.double=function(){do var n=i.next()>>>11,o=(i.next()>>>0)/4294967296,c=(n+o)/(1<<21);while(c===0);return c},e.int32=i.next,e.quick=e,r&&(typeof r=="object"&&f(r,i),e.state=function(){return f(i,{})}),e}s&&s.exports?s.exports=_:u&&u.amd?u(function(){return _}):this.tychei=_})(F,d,!1)})(nt);var it={exports:{}};(function(d){(function(a,s,u){var l=256,f=6,_=52,h="random",t=u.pow(l,f),i=u.pow(2,_),r=i*2,e=l-1,n;function o(x,v,b){var y=[];v=v==!0?{entropy:!0}:v||{};var g=m(M(v.entropy?[x,E(s)]:x==null?I():x,3),y),k=new c(y),C=function(){for(var j=k.g(f),S=t,T=0;j<i;)j=(j+T)*l,S*=l,T=k.g(1);for(;j>=r;)j/=2,S/=2,T>>>=1;return(j+T)/S};return C.int32=function(){return k.g(4)|0},C.quick=function(){return k.g(4)/4294967296},C.double=C,m(E(k.S),s),(v.pass||b||function(j,S,T,O){return O&&(O.S&&p(O,k),j.state=function(){return p(k,{})}),T?(u[h]=j,S):j})(C,g,"global"in v?v.global:this==u,v.state)}function c(x){var v,b=x.length,y=this,g=0,k=y.i=y.j=0,C=y.S=[];for(b||(x=[b++]);g<l;)C[g]=g++;for(g=0;g<l;g++)C[g]=C[k=e&k+x[g%b]+(v=C[g])],C[k]=v;(y.g=function(j){for(var S,T=0,O=y.i,q=y.j,z=y.S;j--;)S=z[O=e&O+1],T=T*l+z[e&(z[O]=z[q=e&q+S])+(z[q]=S)];return y.i=O,y.j=q,T})(l)}function p(x,v){return v.i=x.i,v.j=x.j,v.S=x.S.slice(),v}function M(x,v){var b=[],y=typeof x,g;if(v&&y=="object")for(g in x)try{b.push(M(x[g],v-1))}catch{}return b.length?b:y=="string"?x:x+"\0"}function m(x,v){for(var b=x+"",y,g=0;g<b.length;)v[e&g]=e&(y^=v[e&g]*19)+b.charCodeAt(g++);return E(v)}function I(){try{var x;return n&&(x=n.randomBytes)?x=x(l):(x=new Uint8Array(l),(a.crypto||a.msCrypto).getRandomValues(x)),E(x)}catch{var v=a.navigator,b=v&&v.plugins;return[+new Date,a,b,a.screen,E(s)]}}function E(x){return String.fromCharCode.apply(0,x)}if(m(u.random(),s),d.exports){d.exports=o;try{n=require("crypto")}catch{}}else u["seed"+h]=o})(typeof self!="undefined"?self:F,[],Math)})(it);var ft=K.exports,_t=Q.exports,xt=Z.exports,vt=tt.exports,pt=et.exports,mt=nt.exports,L=it.exports;L.alea=ft;L.xor128=_t;L.xorwow=xt;L.xorshift7=vt;L.xor4096=pt;L.tychei=mt;var gt=L,wt=gt;class W extends G{constructor(a,s){super();this.seed(a,s)}get name(){return"function"}next(){return this._rng()}seed(a,s){this._rng=a}clone(a,s){return new W(this._rng,s)}}var J=(...d)=>{const[a="default",...s]=d;switch(typeof a){case"object":if(a instanceof G)return a;break;case"function":return new W(a);case"number":case"string":return new W(wt(...s))}throw new Error(`invalid RNG "${a}"`)},yt=(d,a=0,s=1)=>()=>d.next()*(s-a)+a;function D(d){return new bt(d)}class bt{constructor(a){this.isInt=()=>{if(Number.isInteger(this.n))return this;throw new Error(`Expected number to be an integer, got ${this.n}`)},this.isPositive=()=>{if(this.n>0)return this;throw new Error(`Expected number to be positive, got ${this.n}`)},this.lessThan=s=>{if(this.n<s)return this;throw new Error(`Expected number to be less than ${s}, got ${this.n}`)},this.greaterThanOrEqual=s=>{if(this.n>=s)return this;throw new Error(`Expected number to be greater than or equal to ${s}, got ${this.n}`)},this.greaterThan=s=>{if(this.n>s)return this;throw new Error(`Expected number to be greater than ${s}, got ${this.n}`)},this.n=a}}var Mt=(d,a=0,s=1)=>(s===void 0&&(s=a===void 0?1:a,a=0),D(a).isInt(),D(s).isInt(),()=>Math.floor(d.next()*(s-a+1)+a)),Et=d=>()=>d.next()>=.5,kt=(d,a=0,s=1)=>()=>{let u,l,f;do u=d.next()*2-1,l=d.next()*2-1,f=u*u+l*l;while(!f||f>1);return a+s*l*Math.sqrt(-2*Math.log(f)/f)},jt=(d,a=0,s=1)=>{const u=d.normal(a,s);return()=>Math.exp(u())},It=(d,a=.5)=>(D(a).greaterThanOrEqual(0).lessThan(1),()=>Math.floor(d.next()+a)),Ct=(d,a=1,s=.5)=>(D(a).isInt().isPositive(),D(s).greaterThanOrEqual(0).lessThan(1),()=>{let u=0,l=0;for(;u++<a;)d.next()<s&&l++;return l}),Tt=(d,a=.5)=>{D(a).greaterThan(0).lessThan(1);const s=1/Math.log(1-a);return()=>Math.floor(1+Math.log(d.next())*s)};const St=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],zt=d=>St[d],Dt=.9189385332046727;var Ot=(d,a=1)=>{if(D(a).isPositive(),a<10){const s=Math.exp(-a);return()=>{let u=s,l=0,f=d.next();for(;f>u;)f=f-u,u=a*u/++l;return l}}else{const s=Math.sqrt(a),u=.931+2.53*s,l=-.059+.02483*u,f=1.1239+1.1328/(u-3.4),_=.9277-3.6224/(u-2);return()=>{for(var h;;){let t,i=d.next();if(i<=.86*_)return t=i/_-.43,Math.floor((2*l/(.5-Math.abs(t))+u)*t+a+.445);i>=_?t=d.next()-.5:(t=i/_-.93,t=(t<0?-.5:.5)-t,i=d.next()*_);const r=.5-Math.abs(t);if(r<.013&&i>r)continue;const e=Math.floor((2*l/r+u)*t+a+.445);if(i=i*f/(l/(r*r)+u),e>=10){const n=(e+.5)*Math.log(a/e)-a-Dt+e-(.08333333333333333-(.002777777777777778-1/(1260*e*e))/(e*e))/e;if(Math.log(i*s)<=n)return e}else if(e>=0){const n=(h=zt(e))!==null&&h!==void 0?h:0;if(Math.log(i)<=e*Math.log(a)-a-n)return e}}}}},Ft=(d,a=1)=>(D(a).isPositive(),()=>-Math.log(1-d.next())/a),Pt=(d,a=1)=>(D(a).isInt().greaterThanOrEqual(0),()=>{let s=0;for(let u=0;u<a;++u)s+=d.next();return s}),Lt=(d,a=1)=>{D(a).isInt().isPositive();const s=d.irwinHall(a);return()=>s()/a},qt=(d,a=1)=>{D(a).greaterThanOrEqual(0);const s=1/a;return()=>1/Math.pow(1-d.next(),s)};class H extends G{get name(){return"default"}next(){return Math.random()}seed(a,s){}clone(){return new H}}class R{constructor(a){this._cache={},this.next=()=>this._rng.next(),this.float=(s,u)=>this.uniform(s,u)(),this.int=(s,u)=>this.uniformInt(s,u)(),this.integer=(s,u)=>this.uniformInt(s,u)(),this.bool=()=>this.uniformBoolean()(),this.boolean=()=>this.uniformBoolean()(),this.uniform=(s,u)=>this._memoize("uniform",yt,s,u),this.uniformInt=(s,u)=>this._memoize("uniformInt",Mt,s,u),this.uniformBoolean=()=>this._memoize("uniformBoolean",Et),this.normal=(s,u)=>kt(this,s,u),this.logNormal=(s,u)=>jt(this,s,u),this.bernoulli=s=>It(this,s),this.binomial=(s,u)=>Ct(this,s,u),this.geometric=s=>Tt(this,s),this.poisson=s=>Ot(this,s),this.exponential=s=>Ft(this,s),this.irwinHall=s=>Pt(this,s),this.bates=s=>Lt(this,s),this.pareto=s=>qt(this,s),a&&a instanceof G?this.use(a):this.use(new H),this._cache={}}get rng(){return this._rng}clone(...a){return a.length?new R(J(...a)):new R(this.rng.clone())}use(...a){this._rng=J(...a)}patch(){if(this._patch)throw new Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()}unpatch(){this._patch&&(Math.random=this._patch,delete this._patch)}_memoize(a,s,...u){const l=`${u.join(";")}`;let f=this._cache[a];return(f===void 0||f.key!==l)&&(f={key:l,distribution:s(this,...u)},this._cache[a]=f),f.distribution}}var Bt=new R,st={exports:{}};/*!
 * fireworks-js 1.4.1 by Vitalij Ryndin (https://crashmax.ru)
 * https://fireworks.js.org
 * License MIT
 */(function(d,a){(function(s,u){d.exports=u()})(F,function(){return(()=>{var s={511:(_,h,t)=>{Object.defineProperty(h,"__esModule",{value:!0}),h.Explosion=void 0;var i=t(909);h.Explosion=class{constructor(r){var{x:e,y:n,ctx:o,hue:c,gravity:p,friction:M,brightness:m,flickering:I,lineWidth:E,explosionLength:x}=r;for(this._coordinates=[],this._alpha=1,this._x=e,this._y=n,this._ctx=o,this._gravity=p,this._friction=M,this._flickering=I,this._lineWidth=E,this._explosionLength=x;this._explosionLength--;)this._coordinates.push([e,n]);this._angle=(0,i.randomFloat)(0,2*Math.PI),this._speed=(0,i.randomInt)(1,10),this._hue=(0,i.randomInt)(c-20,c+20),this._brightness=(0,i.randomInt)(m.min,m.max),this._decay=(0,i.randomFloat)(m.decay.min,m.decay.max)}update(r){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._friction,this._x+=Math.cos(this._angle)*this._speed,this._y+=Math.sin(this._angle)*this._speed+this._gravity,this._alpha-=this._decay,this._alpha<=this._decay&&r()}draw(){var r=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.lineWidth=this._lineWidth,this._ctx.fillStyle=(0,i.hsla)(this._hue,this._brightness,this._alpha),this._ctx.moveTo(this._coordinates[r][0],this._coordinates[r][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,i.hsla)(this._hue,this._flickering?(0,i.randomFloat)(0,this._brightness):this._brightness,this._alpha),this._ctx.stroke()}}},909:(_,h)=>{Object.defineProperty(h,"__esModule",{value:!0}),h.hsla=h.getDistance=h.randomInt=h.randomFloat=void 0,h.randomFloat=function(t,i){return Math.random()*(i-t)+t},h.randomInt=function(t,i){return Math.floor(t+Math.random()*(i+1-t))},h.getDistance=function(t,i,r,e){var n=Math.pow;return Math.sqrt(n(t-r,2)+n(i-e,2))},h.hsla=function(t,i){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return"hsla(".concat(t,", 100%, ").concat(i,"%, ").concat(r,")")}},449:function(_,h,t){var i=this&&this.__awaiter||function(e,n,o,c){return new(o||(o=Promise))(function(p,M){function m(x){try{E(c.next(x))}catch(v){M(v)}}function I(x){try{E(c.throw(x))}catch(v){M(v)}}function E(x){var v;x.done?p(x.value):(v=x.value,v instanceof o?v:new o(function(b){b(v)})).then(m,I)}E((c=c.apply(e,n||[])).next())})};Object.defineProperty(h,"__esModule",{value:!0}),h.Sound=void 0;var r=t(909);h.Sound=class{constructor(e){this._buffer=[],this.onInit=!0,this.options=Object.assign({enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},e),this.init()}init(){this.onInit&&this.options.enabled&&(this.onInit=!1,this._audioContext=new(window.AudioContext||window.webkitAudioContext),this.load())}load(){return i(this,void 0,void 0,function*(){for(var e of this.options.files){var n=yield(yield fetch(e)).arrayBuffer();this._audioContext.decodeAudioData(n).then(o=>{this._buffer.push(o)}).catch(o=>{throw o})}})}play(){if(this.options.enabled&&this._buffer.length){var e=this._audioContext.createBufferSource(),n=this._buffer[(0,r.randomInt)(0,this._buffer.length-1)],o=this._audioContext.createGain();e.buffer=n,o.gain.value=(0,r.randomFloat)(this.options.volume.min/100,this.options.volume.max/100),o.connect(this._audioContext.destination),e.connect(o),e.start(0)}else this.init()}}},668:(_,h,t)=>{Object.defineProperty(h,"__esModule",{value:!0}),h.Trace=void 0;var i=t(909);h.Trace=class{constructor(r){var{x:e,y:n,dx:o,dy:c,ctx:p,hue:M,speed:m,traceLength:I,acceleration:E}=r;for(this._coordinates=[],this._currentDistance=0,this._x=e,this._y=n,this._sx=e,this._sy=n,this._dx=o,this._dy=c,this._ctx=p,this._hue=M,this._speed=m,this._traceLength=I,this._acceleration=E,this._totalDistance=(0,i.getDistance)(e,n,o,c);this._traceLength--;)this._coordinates.push([e,n]);this._angle=Math.atan2(c-n,o-e),this._brightness=(0,i.randomInt)(50,70)}update(r){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._acceleration;var e=Math.cos(this._angle)*this._speed,n=Math.sin(this._angle)*this._speed;this._currentDistance=(0,i.getDistance)(this._sx,this._sy,this._x+e,this._y+n),this._currentDistance>=this._totalDistance?r(this._dx,this._dy,this._hue):(this._x+=e,this._y+=n)}draw(){var r=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.moveTo(this._coordinates[r][0],this._coordinates[r][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,i.hsla)(this._hue,this._brightness),this._ctx.stroke()}}}},u={};function l(_){var h=u[_];if(h!==void 0)return h.exports;var t=u[_]={exports:{}};return s[_].call(t.exports,t,t.exports,l),t.exports}var f={};return(()=>{var _=f;Object.defineProperty(_,"__esModule",{value:!0}),_.Fireworks=void 0;var h=l(668),t=l(449),i=l(511),r=l(909);_.Fireworks=class{constructor(e){var{autoresize:n=!0,boundaries:o,brightness:c,delay:p,hue:M,mouse:m,sound:I,rocketsPoint:E,lineWidth:x,lineStyle:v="round",flickering:b=50,trace:y=3,traceSpeed:g=10,intensity:k=30,explosion:C=5,gravity:j=1.5,opacity:S=.5,particles:T=50,friction:O=.95,acceleration:q=1.05}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._tick=0,this._timestamp=performance.now(),this._version="1.4.1",this._running=!1,this._m=!1,e instanceof HTMLCanvasElement?(this._container=e,this._canvas=e):(this._container=e,this._canvas=document.createElement("canvas"),this._container.appendChild(this._canvas)),this._ctx=this._canvas.getContext("2d"),this._sound=new t.Sound(I),this.setSize(),this.setBoundaries(Object.assign({visible:!1,x:50,y:50},o)),this.autoresize=n,this.trace=y,this.explosion=C,this.gravity=j,this.opacity=S,this.particles=T,this.friction=O,this.acceleration=q,this.flickering=b,this.intensity=k,this.traceSpeed=g,this.lineStyle=v,this.hue=Object.assign({min:0,max:360},M),this.rocketsPoint=Object.assign({min:50,max:50},E),this.lineWidth=Object.assign({explosion:{min:1,max:3},trace:{min:1,max:2}},x),this.mouse=Object.assign({click:!1,move:!1,max:1},m),this.delay=Object.assign({min:15,max:30},p),this.brightness=Object.assign({min:50,max:80,decay:{min:.015,max:.03}},c),this.autoresize&&window.addEventListener("resize",()=>this.windowResize()),this._canvas.addEventListener("mousedown",z=>{this.mouseDown(z)}),this._canvas.addEventListener("mouseup",z=>{this.mouseUp(z)}),this._canvas.addEventListener("mousemove",z=>{this.mouseMove(z)})}get isRunning(){return this._running}get version(){return this._version}start(){this._running||(this._running=!0,this.clear(),this.render())}stop(){this._running&&(this._running=!1,this.clear())}unmount(){window.removeEventListener("resize",this.windowResize),this._canvas.removeEventListener("mousedown",this.mouseDown),this._canvas.removeEventListener("mouseup",this.mouseUp),this._canvas.removeEventListener("mousemove",this.mouseMove)}pause(){this._running=!this._running,this._running&&this.render()}clear(){this._ctx&&(this._traces=[],this._explosions=[],this._ctx.clearRect(0,0,this._width,this._height))}setOptions(e){for(var[n,o]of Object.entries(e)){var c=Object.prototype.hasOwnProperty.call(this,n);if(typeof this[n]=="function")throw new Error("You cannot change the methods of the class!");c&&(typeof this[n]=="object"?Object.assign(this[n],o):this[n]=o),n==="sound"&&Object.assign(this._sound.options,o)}}setSize(){var{width:e=this._container instanceof HTMLCanvasElement?this._canvas.width:this._container.clientWidth,height:n=this._container instanceof HTMLCanvasElement?this._canvas.height:this._container.clientHeight}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._width=e,this._height=n,this._canvas.width=e,this._canvas.height=n,this.setBoundaries({width:e,height:n})}setBoundaries(e){this.boundaries=Object.assign(Object.assign({},this.boundaries),e)}useMouse(e,n){(this.mouse.click||this.mouse.move)&&(this._mx=e.pageX-this._canvas.offsetLeft,this._my=e.pageY-this._canvas.offsetTop,this._m=n)}windowResize(){this.setSize()}mouseDown(e){this.useMouse(e,this.mouse.click)}mouseUp(e){this.useMouse(e,!1)}mouseMove(e){this.useMouse(e,this._m)}render(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this._timestamp;if(this._ctx&&this._running){requestAnimationFrame(o=>this.render(o)),this._ctx.globalCompositeOperation="destination-out",this._ctx.fillStyle="rgba(0, 0, 0, ".concat(this.opacity,")"),this._ctx.fillRect(0,0,this._width,this._height),this._ctx.globalCompositeOperation="lighter",this._ctx.lineCap=this.lineStyle,this._ctx.lineJoin="round",this.drawBoundaries(),this.initTrace(),this.drawTrace(),this.drawExplosion();var n=e-this._timestamp;this._timestamp=e,this._tick+=n*(this.intensity*Math.PI)/1e3}}drawBoundaries(){this.boundaries.visible&&(this._ctx.beginPath(),this._ctx.lineWidth=1,this._ctx.strokeStyle="red",this._ctx.rect(this.boundaries.x,this.boundaries.y,this.boundaries.width-2*this.boundaries.x,.5*this.boundaries.height),this._ctx.stroke())}initTrace(){this._ds=(0,r.randomInt)(this.delay.min,this.delay.max),(this._tick>this._ds||this._m&&this.mouse.max>this._traces.length)&&(this._traces.push(new h.Trace({x:this._width*(0,r.randomInt)(this.rocketsPoint.min,this.rocketsPoint.max)/100,y:this._height,dx:this._mx&&this.mouse.move||this._m?this._mx:(0,r.randomInt)(this.boundaries.x,this.boundaries.width-2*this.boundaries.x),dy:this._my&&this.mouse.move||this._m?this._my:(0,r.randomInt)(this.boundaries.y,.5*this.boundaries.height),ctx:this._ctx,hue:(0,r.randomInt)(this.hue.min,this.hue.max),speed:this.traceSpeed,acceleration:this.acceleration,traceLength:this.trace})),this._tick=0)}drawTrace(){var e=this._traces.length;for(this._ctx.lineWidth=(0,r.randomFloat)(this.lineWidth.trace.min,this.lineWidth.trace.max);e--;)this._traces[e].draw(),this._traces[e].update((n,o,c)=>{this.initExplosion(n,o,c),this._sound.play(),this._traces.splice(e,1)})}initExplosion(e,n,o){for(var c=this.particles;c--;)this._explosions.push(new i.Explosion({x:e,y:n,ctx:this._ctx,hue:o,friction:this.friction,gravity:this.gravity,flickering:(0,r.randomInt)(0,100)<=this.flickering,lineWidth:(0,r.randomFloat)(this.lineWidth.explosion.min,this.lineWidth.explosion.max),explosionLength:Math.round(this.explosion),brightness:this.brightness}))}drawExplosion(){for(var e=this._explosions.length;e--;)this._explosions[e].draw(),this._explosions[e].update(()=>{this._explosions.splice(e,1)})}}})(),f})()})})(st);const At={id:"roll",w:"full"},Xt={mt:"0",pb:"4","border-b":"","border-0":"","border-light-800":""},$t={key:0,relative:"",text:"center"},Wt={class:"-z-3",text:"center",px:"12",pb:"4","inline-block":"",border:"","border-light-800":"","bg-light-100":"",rounded:""},Rt=w("h3",null,"\u5956\u54C1",-1),Gt=w("a",null,"\u5341\u8FDE",-1),Nt=[Gt],Ht={relative:""},Ut={mt:"16"},Vt=w("span",{font:"bold"},"\u4F60\u7684\u7528\u6237\u540D",-1),Yt={mt:"4"},Jt=w("span",{font:"bold"},"\u5355\u62BD\u4E2D\u5956\u7387",-1),Kt={ml:"2"},Qt={mt:"4"},Zt=w("span",{font:"bold"},"\u5341\u8FDE\u4E2D\u5956\u7387",-1),te={ml:"2"},ee={mt:"4"},ne={key:0,border:"","border-light-800":"",rounded:"","py-1":""},ie={font:"bold mono","inline-block":"",text:"center",w:"8"},re=rt({__name:"Roll",setup(d){const a=ot(),s=$(""),u=$([...a.value.captains]),l=$([]),f=$();window.localStorage.getItem("username")&&(s.value=window.localStorage.getItem("username"));const _=()=>{u.value=[...a.value.captains],l.value=[]};U(a,()=>{_()}),U(s,e=>{window.localStorage.setItem("username",e),_()});let h,t;const i=()=>{if(!(h&&new Date().getTime()-h<3e3)){u.value.length===0&&_(),l.value.length>0&&l.value[l.value.length-1].username===s.value&&_();for(let e=0;e<10&&u.value.length>0;e++){const o=Bt.uniformInt(0,u.value.length-1)(),c=u.value[o];if(l.value.push(c),c.username===s.value){!t&&f.value&&(t=new st.exports.Fireworks(f.value,{delay:{min:5,max:15}})),h=new Date().getTime(),t==null||t.start(),setTimeout(()=>t==null?void 0:t.stop(),3e3);break}u.value.splice(o,1)}}},r=at(()=>{const e=u.value.length;if(e<=10)return"100.00";{let n=1;for(let o=0;o<10;o++)n*=1-1/(e-o);return(100*(1-n)).toFixed(2)}});return(e,n)=>(B(),A("div",At,[w("h2",Xt,P(X(dt)(X(a).date,"yyyy \u5E74 M \u6708 d \u65E5"))+" \u8230\u957F\u62BD\u5956 ",1),X(V)?(B(),A("div",$t,[w("div",Wt,[Rt,w("h3",null,P(X(V).name),1),w("div",{mt:"4"},[w("div",{class:"button !border-0",onClick:i},Nt)])])])):N("",!0),w("div",Ht,[X(a).captains.find(o=>o.username===s.value)?(B(),A("div",{key:0,absolute:"",top:"-24",left:"0",class:"-z-1","max-h":"100",h:"full",w:"full",ref_key:"_fw",ref:f},null,512)):N("",!0),w("div",Ut,[Vt,ht(w("input",{type:"text",name:"contest_search",id:"contest_search",class:"p-2 ml-2 rounded-md outline-none <md:shadow-box border border-light-900","onUpdate:modelValue":n[0]||(n[0]=o=>s.value=o)},null,512),[[ut,s.value]])]),w("div",Yt,[Jt,w("span",Kt,P((100/u.value.length).toFixed(2))+" %",1),w("span",null," (\u5269\u4F59 "+P(u.value.length)+" \u4F4D\u8230\u957F)",1)]),w("div",Qt,[Zt,w("span",te,P(X(r))+" %",1)]),w("div",ee,[l.value.length?(B(),A("div",ne,[(B(!0),A(ct,null,lt(l.value.slice(0).reverse(),(o,c)=>(B(),A("div",{key:o.uid,"p-2":"",class:Y(["border-0","border-light-800",c+1<l.value.length&&"border-b"])},[w("span",ie,P(l.value.length-c),1),w("span",{ml:"2",class:Y([o.username===s.value&&"text-green-400 font-bold"])},P(o.username),3)],2))),128))])):N("",!0)])])]))}});export{re as default};
