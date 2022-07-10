const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};N();function f(){}function L(e){return e()}function S(){return Object.create(null)}function m(e){e.forEach(L)}function P(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function I(e){return Object.keys(e).length===0}function M(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode.removeChild(e)}function R(e){return document.createElement(e)}function T(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function z(e){return Array.from(e.childNodes)}let $;function d(e){$=e}const a=[],A=[],p=[],E=[],C=Promise.resolve();let y=!1;function F(){y||(y=!0,C.then(j))}function b(e){p.push(e)}const g=new Set;let h=0;function j(){const e=$;do{for(;h<a.length;){const t=a[h];h++,d(t),H(t.$$)}for(d(null),a.length=0,h=0;A.length;)A.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];g.has(n)||(g.add(n),n())}p.length=0}while(a.length);for(;E.length;)E.pop()();y=!1,g.clear(),d(e)}function H(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(b)}}const J=new Set;function K(e,t){e&&e.i&&(J.delete(e),e.i(t))}function q(e,t,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:_}=e.$$;r&&r.m(t,n),i||b(()=>{const u=l.map(L).filter(P);s?s.push(...u):m(u),e.$$.on_mount=[]}),_.forEach(b)}function Q(e,t){const n=e.$$;n.fragment!==null&&(m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){e.$$.dirty[0]===-1&&(a.push(e),F(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(e,t,n,i,r,l,s,_=[-1]){const u=$;d(e);const o=e.$$={fragment:null,ctx:null,props:l,update:f,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:S(),dirty:_,skip_bound:!1,root:t.target||u.$$.root};s&&s(o.root);let v=!1;if(o.ctx=n?n(e,t.props||{},(c,w,...x)=>{const k=x.length?x[0]:w;return o.ctx&&r(o.ctx[c],o.ctx[c]=k)&&(!o.skip_bound&&o.bound[c]&&o.bound[c](k),v&&W(e,c)),w}):[],o.update(),v=!0,m(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){const c=z(t.target);o.fragment&&o.fragment.l(c),c.forEach(O)}else o.fragment&&o.fragment.c();t.intro&&K(e.$$.fragment),q(e,t.target,t.anchor,t.customElement),j()}d(u)}class G{$destroy(){Q(this,1),this.$destroy=f}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!I(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let t;return{c(){t=R("main"),t.innerHTML=`<h1 class="svelte-1uop4nh">Richard</h1> 
  <h1 class="svelte-1uop4nh">Kruszynski</h1> 

  <h2>Bio</h2> 

  <p class="svelte-1uop4nh">Full stack developer with experience in the following:</p> 
  <ul class="unbulletted-list svelte-1uop4nh"><li>Java</li> 
    <li>SQL</li> 
    <li>Angular (2+)</li> 
    <li>Svelte</li> 
    <li>AWS</li> 
    <li>Spring</li> 
    <li>Struts</li> 
    <li>Hiberate</li> 
    <li>REST framework</li> 
    <li>SOAP framework</li> 
    <li>Javascript</li></ul> 

  <h2>Project Examples</h2> 

  <h3><a href="https://www.stlroulette.com">STL Roulette</a></h3> 

  <p class="svelte-1uop4nh">A Svelte site built for those wondering where to go in Saint Louis.
    It randomizes a list of options and displays the output to the user.</p>`,T(t,"class","svelte-1uop4nh")},m(n,i){M(n,t,i)},p:f,i:f,o:f,d(n){n&&O(t)}}}class V extends G{constructor(t){super(),D(this,t,null,U,B,{})}}new V({target:document.getElementById("app")});
