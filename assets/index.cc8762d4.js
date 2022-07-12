const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};I();function f(){}function L(e){return e()}function S(){return Object.create(null)}function g(e){e.forEach(L)}function N(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function F(e){return Object.keys(e).length===0}function M(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode.removeChild(e)}function T(e){return document.createElement(e)}function B(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function C(e){return Array.from(e.childNodes)}let w;function d(e){w=e}const u=[],A=[],p=[],E=[],R=Promise.resolve();let y=!1;function W(){y||(y=!0,R.then(j))}function b(e){p.push(e)}const _=new Set;let h=0;function j(){const e=w;do{for(;h<u.length;){const t=u[h];h++,d(t),z(t.$$)}for(d(null),u.length=0,h=0;A.length;)A.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];_.has(n)||(_.add(n),n())}p.length=0}while(u.length);for(;E.length;)E.pop()();y=!1,_.clear(),d(e)}function z(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(b)}}const H=new Set;function J(e,t){e&&e.i&&(H.delete(e),e.i(t))}function K(e,t,n,l){const{fragment:i,on_mount:r,on_destroy:s,after_update:m}=e.$$;i&&i.m(t,n),l||b(()=>{const c=r.map(L).filter(N);s?s.push(...c):g(c),e.$$.on_mount=[]}),m.forEach(b)}function q(e,t){const n=e.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){e.$$.dirty[0]===-1&&(u.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,l,i,r,s,m=[-1]){const c=w;d(e);const o=e.$$={fragment:null,ctx:null,props:r,update:f,not_equal:i,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:S(),dirty:m,skip_bound:!1,root:t.target||c.$$.root};s&&s(o.root);let v=!1;if(o.ctx=n?n(e,t.props||{},(a,$,...k)=>{const x=k.length?k[0]:$;return o.ctx&&i(o.ctx[a],o.ctx[a]=x)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](x),v&&G(e,a)),$}):[],o.update(),v=!0,g(o.before_update),o.fragment=l?l(o.ctx):!1,t.target){if(t.hydrate){const a=C(t.target);o.fragment&&o.fragment.l(a),a.forEach(O)}else o.fragment&&o.fragment.c();t.intro&&J(e.$$.fragment),K(e,t.target,t.anchor,t.customElement),j()}d(c)}class D{$destroy(){q(this,1),this.$destroy=f}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!F(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let t;return{c(){t=T("main"),t.innerHTML=`<h1 class="svelte-1uop4nh">Richard</h1> 
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
    <li>Javascript</li> 	
    <li>AppWrite (Open-source and self-hosted alternative to Google Firebase)</li><li></li></ul> 

  <h2>Project Examples</h2> 

  <h3><a href="https://www.stlroulette.com">STL Roulette</a></h3> 

  <p class="svelte-1uop4nh">A Svelte site built for those wondering where to go in Saint Louis.
    It randomizes a list of options and displays the output to the user.</p> 

  <h3><a href="https://www.stlroulette.com">Shared Sightings</a></h3> 

  <p class="svelte-1uop4nh">This is a work in progress site I have been working on.
    At a high level, this is a site designed to allow users to share and discuss sightings of unidentified objects.
    Currently, it is set up to allow anyone to view the sightings, but only registed users are allowed to comment.

    For technologies, this uses a Svelte front end with an AppWrite backend.
    It also integrates with OpenStreetMaps using Leafly to display the map tiles.</p>`,B(t,"class","svelte-1uop4nh")},m(n,l){M(n,t,l)},p:f,i:f,o:f,d(n){n&&O(t)}}}class V extends D{constructor(t){super(),Q(this,t,null,U,P,{})}}new V({target:document.getElementById("app")});
