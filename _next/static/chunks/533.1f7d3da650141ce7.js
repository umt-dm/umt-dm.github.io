"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[533],{79533:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L,getVideoProps:()=>j});var o={};r.r(o),r.d(o,{getPlaybackId:()=>p,getPosterURLFromPlaybackId:()=>f,transform:()=>u});var i={};r.r(i),r.d(i,{transform:()=>x});var n={};r.r(n),r.d(n,{transform:()=>w});var a={};r.r(a),r.d(a,{transform:()=>$});var l={};r.r(l),r.d(l,{amazonS3:()=>a,backblaze:()=>n,mux:()=>o,vercelBlob:()=>i});var s=r(85893),c=r(67294);let d="mux.com";function u(e,t){let r=p(e);if(!r)return e;let o=e.providerMetadata?.mux?.thumbnailTime??t?.thumbnailTime??t?.startTime,i={...e,sources:[{src:`https://stream.${t?.customDomain??d}/${r}.m3u8`,type:"application/x-mpegURL"}],poster:f(r,{thumbnailTime:o,customDomain:t?.customDomain,token:t?.tokens?.thumbnail})};return o>=0&&(i.thumbnailTime=o),i}function p(e){let t=e.providerMetadata?.mux??e.externalIds;return t?.playbackId}let f=(e,{token:t,thumbnailTime:r,width:o,customDomain:i=d}={})=>{let n=null==t?r:void 0,{aud:a}=function(e){let t=(e??"").split(".")[1];return t?JSON.parse(decodeURIComponent(atob(t.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}(t);if(!t||"t"===a)return`https://image.${i}/${e}/thumbnail.webp${function(e){let t=(function(e){let t={};for(let r in e)null!=e[r]&&(t[r]=e[r]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}({token:t,time:n,width:o})}`};var h=r(83454);let m=JSON.parse(h.env.NEXT_PUBLIC_DEV_VIDEO_OPTS??h.env.NEXT_PUBLIC_VIDEO_OPTS??"{}"),v=`${m.folder??"videos"}/`,b=(0,c.lazy)(()=>Promise.all([r.e(412),r.e(223)]).then(r.bind(r,4223))),g=(0,c.forwardRef)((e,t)=>{let r,{style:o,children:i,asset:n,controls:a,poster:l,blurDataURL:d,...u}=e,h=c.Children.toArray(i).find(e=>"object"==typeof e&&"type"in e&&"poster"===e.props.slot);(0,c.isValidElement)(h)&&(l="",d=void 0);let m={},v=n?p(n):void 0,g=!0;if(!v||n?.status!=="ready"||(u.src=null,u.playbackId=v,!l||(g=l!==f(v,u))||(r=`${f(v,{...u,width:480})} 480w,${f(v,{...u,width:640})} 640w,${f(v,{...u,width:960})} 960w,${f(v,{...u,width:1280})} 1280w,${f(v,{...u,width:1600})} 1600w,${f(v,{...u})} 1920w`)),d){let e=!g&&d===n?.blurDataURL,t=g&&d!==n?.blurDataURL;if(e||t){var y;m.width="100%",m.height="100%",m.color="transparent",m.backgroundSize="cover",m.backgroundPosition="center",m.backgroundRepeat="no-repeat",m.backgroundImage=`url('data:image/svg+xml;charset=utf-8,${y=d,`<svg xmlns="http://www.w3.org/2000/svg"><filter id="b" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="20"/><feComponentTransfer><feFuncA type="discrete" tableValues="1 1"/></feComponentTransfer></filter><g filter="url(#b)"><image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="${y}"/></g></svg>`.replace(/#/g,"%23")}')`}}return l&&(i=(0,s.jsxs)(s.Fragment,{children:[i,(0,s.jsx)("img",{slot:"poster",src:g?l:void 0,srcSet:r,style:m,decoding:"async","aria-hidden":"true"})]}),l=""),(0,s.jsx)(c.Suspense,{fallback:null,children:(0,s.jsx)(b,{ref:t,style:{"--controls":!1===a?"none":void 0,...o},children:i,poster:l,...u})})});function y({status:e,hidden:t}){let r="",o="";switch(e){case"error":r="Error",o="An error occurred while uploading your video. Please check the CLI logs for more info.";break;case"sourced":r="Video is not processing",o="Make sure to run next-video sync. The currently loaded video is the source file.";break;default:r="Upload in progress...",o="Your video file is being uploaded. The currently loaded video is the source file."}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{children:`
        .next-video-alert {
          position: absolute;
          inset: 1em;
          bottom: auto;
          padding: .75rem 1rem;
          border-radius: 1rem;
          color: hsl(0, 0%, 100%);
          background-color: hsl(240 10% 3.9% / .7);
          border: 1px solid hsl(240 3.7% 15.9%);
          transition: visibility 0s, opacity .25s;
          visibility: visible;
          opacity: 1;
        }

        .next-video-alert[hidden] {
          display: block;
          transition: visibility 1s, opacity 1s;
          visibility: hidden;
          opacity: 0;
        }

        .next-video-alert svg {
          position: absolute;
        }

        .next-video-alert h5 {
          line-height: 1;
          font-weight: 500;
          margin-bottom: 0.25rem;
          padding-left: 1.75rem;
          font-size: inherit;
        }

        .next-video-alert div {
          padding-left: 1.75rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        `}),(0,s.jsxs)("div",{role:"alert",className:`next-video-alert next-video-alert-${e}`,hidden:t,children:["error"===e?(0,s.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,s.jsx)("path",{d:"M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}):(0,s.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:(0,s.jsx)("path",{d:"M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}),(0,s.jsx)("h5",{children:r}),(0,s.jsx)("div",{children:o})]})]})}async function C({config:e,src:t,width:r,height:o}){let i=`${e.path}?url=${encodeURIComponent(`${t}`)}`;return r&&(i+=`&w=${r}`),o&&(i+=`&h=${o}`),`${i}`}function x(e){let t=e.providerMetadata?.["vercel-blob"]??e.externalIds;if(!t)return e;let r={src:t.url};return t.contentType&&(r.type=t.contentType),{...e,sources:[r]}}function w(e){let t=e.providerMetadata?.backblaze;if(!t)return e;let r=new URL(t.endpoint);r.hostname=`${t.bucket}.${r.hostname}`,r.pathname=t.key;let o={src:`${r}`};return{...e,sources:[o]}}function $(e){let t=e.providerMetadata?.["amazon-s3"];if(!t)return e;let r=new URL(t.endpoint);r.hostname=`${t.bucket}.${r.hostname}`,r.pathname=t.key;let o={src:`${r}`};return{...e,sources:[o]}}function j(e,t){let{asset:r}=t,{controls:o=!0,as:i,className:n,style:a,src:l,poster:s,blurDataURL:c,loader:d,transform:u,...p}=e,f={src:l,controls:o,blurDataURL:c,...p};if("object"==typeof s?(f.poster=s.src,f.blurDataURL??(f.blurDataURL=s.blurDataURL)):f.poster=s,r){if("ready"===r.status){f.blurDataURL??(f.blurDataURL=r.blurDataURL);let e=u(r,f);e&&(f.src=e.sources?.[0]?.src,f.poster??(f.poster=e.poster),f.thumbnailTime??(f.thumbnailTime=e.thumbnailTime))}else{var h;f.src=(h=r.originalFilePath,h?.startsWith(v)?h?.replace(v,"_next-video/"):h)}}return f}function k(e,t){let r=e.provider??m.provider;for(let[o,i]of Object.entries(l))if(o===r.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()))return i.transform(e,t)}var L=(0,c.forwardRef)((e,t)=>{let{as:r=g,loader:o=C,transform:i=k,className:n,style:a,src:l,width:d,height:u}=e,[p,f]=(0,c.useState)("object"==typeof l?l:void 0),[h,v]=(0,c.useState)(!1);"object"==typeof l&&(p=l,l=void 0);let b=function(e,t,r){return async o=>{if("string"==typeof t.src)try{let i=await e({...t,config:m}),n=await fetch(i,{signal:o}),a=await n.json();if(n.ok)r(a);else{let e=`[next-video] The request to ${n.url} failed. `;throw e+=`Did you configure the \`${m.path}\` route to handle video API requests?
`,Error(e)}}catch(e){o.aborted||console.error(e)}}}(o,{src:l,width:d,height:u},e=>f(e)),x=p?.status,w=function(e){if("string"==typeof e)return e.split(/[#?]/)[0].split(".").pop()?.trim()}(l);!function(e,t=5e3){let r=(0,c.useRef)(new AbortController);(0,c.useEffect)(()=>(r.current=new AbortController,e(r.current.signal),()=>{r.current.abort()}),[]),function(e,t){let r=(0,c.useRef)();(0,c.useEffect)(()=>{r.current=e}),(0,c.useEffect)(()=>{let e=async()=>{await r.current?.()};if(null!=t){let r=setInterval(e,t);return()=>clearInterval(r)}},[t])}((0,c.useCallback)(()=>e(r.current.signal),[]),t)}(b,"string"!=typeof l||"ready"==x||["m3u8","mpd"].includes(w??"")?null:1e3);let $=j({...e,transform:i,src:l},{asset:p});return!function(e){return"function"==typeof e&&(()=>{let t=Object.getPrototypeOf(e);return t.prototype&&t.prototype.isReactComponent})()||"function"==typeof e||"object"==typeof e&&"symbol"==typeof e.$$typeof&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}(r)&&console.warn("The `as` property is not a valid component:",r),(0,s.jsxs)("div",{className:`${n?`${n} `:""}next-video-container`,style:a,children:[(0,s.jsx)("style",{children:`
        .next-video-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
        }

        [data-next-video] {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
        }

        [data-next-video] img {
          object-fit: var(--media-object-fit, contain);
          object-position: var(--media-object-position, center);
        }
        `}),(0,s.jsx)(r,{ref:t,"data-next-video":x??"",style:{width:d,height:u},asset:p,onPlaying:()=>v(!0),onPause:()=>v(!1),...$}),(0,s.jsx)(y,{hidden:!!(h||!x||"ready"===x),status:x})]})})}}]);