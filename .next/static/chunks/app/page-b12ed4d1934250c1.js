(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3568:(e,t,i)=>{Promise.resolve().then(i.bind(i,9809))},9809:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var a=i(5155),s=i(2115),l=i(9795),r=i(5565),o=i(7094);function n(){let[e,t]=(0,s.useState)(null),[n,c]=(0,s.useState)(null),[d,u]=(0,s.useState)(!1),[m,x]=(0,s.useState)(!0),[p,h]=(0,s.useState)(!1),[v,f]=(0,s.useState)(!1),g=(0,s.useRef)(null),[j,y]=(0,s.useState)(!0),N=async()=>{try{let e=new(await i.e(561).then(i.bind(i,1561))).default({el:document.querySelector("[data-scroll-container]"),smooth:!0,multiplier:.5,lerp:.05,reloadOnContextChange:!0}),t=document.querySelector("video");return t&&t.play().catch(function(e){console.log("La lecture automatique a \xe9chou\xe9:",e)}),()=>{e.destroy()}}catch(e){console.error("Error initializing LocomotiveScroll:",e)}};(0,s.useEffect)(()=>{let e=setTimeout(()=>{x(!1),g.current&&g.current.play().catch(e=>{console.log("Erreur de lecture vid\xe9o:",e)}),N()},2e3);return()=>clearTimeout(e)},[]),(0,s.useEffect)(()=>{g.current&&g.current.play().catch(e=>{console.log("Erreur de lecture vid\xe9o:",e)})},[]),(0,s.useEffect)(()=>{let e=()=>{let e=document.querySelector('img[src="/soussol.jpg"]');if(e){let t=e.getBoundingClientRect();y(t.top>window.innerHeight||t.bottom<0)}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let b=[{id:1,title:"Configurateur Celio",category:"Application Web 3D",image:"/celioMeuble.jpeg",description:"Mise en place d'un configurateur 3D pour Meubles Celio.\n Cela permet aux clients de configurer et de visualiser des dressings ou des lits escamotables en temps r\xe9el depuis le site internet. De plus, j'ai d\xe9velopp\xe9 tout un backoffice pour la gestion des donn\xe9es du configurateur.",sections:[{title:"Configurateur 3D",subtitle:"D\xe9velopp\xe9 avec Unity et C#",description:"Mise en place d'un configurateur 3D pour la personnalisation et la visualisation en temps r\xe9el des meubles.",features:[{title:"Choix des dimensions et options de configuration",description:"Personnalisation des dimensions, hauteur, largeur, profondeur, portes, coloris du meuble."},{title:"Choix des fa\xe7ades",description:"S\xe9lection parmi les coloris disponibles pour personnaliser l'aspect visuel du meuble en temps r\xe9el."},{title:"Choix des modules int\xe9rieurs",description:"S\xe9lection d'un module int\xe9rieur pour chaque partie d'un meuble, afin de personnaliser le rangement int\xe9rieur."},{title:"Visualisation 3D interactive et r\xe9aliste",description:"Affichage d'un meuble en 3D permettant d'afficher le meuble avec un \xe9clairage dynamique et de le visualiser en temps r\xe9el."},{title:"Interface intuitive",description:"Mise en place de l'interface du configurateur avec une navigation fluide et ergonomique pour une utilisation optimale."},{title:"Sauvegarde des configurations",description:"Cr\xe9ation d'un syst\xe8me de sauvegarde des configurations pour reprendre le projet ou le rouvrir dans un magasin partenaire."},{title:"Export des devis",description:"Cr\xe9ation d'un devis en HTML/CSS avec des donn\xe9es dynamiques affichant un r\xe9capitulatif du projet."}],video:"/Celio.mp4",images:[],technologies:["Unity","C#","WebGL"]},{title:"Backoffice Administratif",subtitle:"D\xe9velopp\xe9 avec PHP, SQL, JavaScript et HTML/CSS",description:"Interface d'administration compl\xe8te pour la gestion du configurateur.",features:[{title:"Conception et gestion de la base de donn\xe9es",description:"R\xe9flexion et cr\xe9ation de la base de donn\xe9es relationnelle."},{title:"Interface d'administration pour la gestion des tables",description:"Tableau de bord complet permettant de g\xe9rer l'ensemble des param\xe8tres : dimensions, fa\xe7ades, mat\xe9riaux, options, ect."},{title:"Mise \xe0 jour du contenu sans intervention technique",description:"Interface utilisateur permettant aux \xe9quipes marketing et commerciales de mettre \xe0 jour le contenu et les prix de mani\xe8re autonome."},{title:"Visualisation des statistiques d'utilisation",description:'Tableaux de bord analytiques permettant de visualiser les statistiques d\'utilisation du configurateur pour chaque "log" du configurateur, et cr\xe9er un sch\xe9ma de donn\xe9es sur les logs s\xe9lectionn\xe9s.'}],images:["/celioMeuble.jpeg","/celioMeuble.jpeg","/celioMeuble.jpeg"],technologies:["PHP","SQL","HTML/CSS","JavaScript"]}],technologies:["Unity","C#","SQL","PHP"],role:"D\xe9veloppeur",duree:"8 mois"}],w=(e,t)=>{e.stopPropagation(),c(t)},E=async()=>{try{g.current&&(await g.current.play(),h(!0))}catch(e){console.log("Erreur de lecture vid\xe9o:",e)}};return(0,s.useEffect)(()=>{let e=()=>{"visible"===document.visibilityState&&E()};return document.addEventListener("visibilitychange",e),E(),()=>{document.removeEventListener("visibilitychange",e)}},[]),(0,a.jsxs)("main",{className:"relative",children:[!m&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("video",{ref:g,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",className:"fixed top-0 left-0 w-full h-full object-cover z-[-1]",onLoadedData:()=>{g.current&&g.current.play().catch(e=>{console.log("Erreur de lecture vid\xe9o:",e)})},style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",objectFit:"cover"},children:[(0,a.jsx)("source",{src:"/video.mp4",type:"video/mp4"}),"Votre navigateur ne supporte pas la lecture vid\xe9o."]}),(0,a.jsx)("div",{className:"fixed top-0 left-0 w-full h-full z-[-2] block md:hidden",children:(0,a.jsx)(r.default,{src:"/fond.jpg",alt:"Background mobile",fill:!0,style:{objectFit:"cover"},priority:!0,sizes:"100vw"})})]}),(0,a.jsx)("div",{className:"fixed top-0 left-0 w-full h-full bg-black/30 z-[-1]"}),(0,a.jsxs)("div",{"data-scroll-container":!0,className:"min-h-screen bg-[#010003] text-[#E4F5E5] w-full overflow-x-hidden font-['Area_Normal_ExtraBold']",style:{height:"100vh"},children:[m&&(0,a.jsx)(l.P.div,{className:"fixed inset-0 z-50 bg-[#010003] flex items-center justify-center loader-container",initial:{opacity:1},animate:{opacity:0},transition:{duration:.5,delay:1.5},onAnimationComplete:()=>{g.current&&g.current.play().catch(e=>{console.log("Erreur de lecture vid\xe9o:",e)})},children:(0,a.jsxs)("div",{className:"relative flex flex-col items-center",children:[(0,a.jsx)(l.P.div,{className:"text-[#E4F5E5] text-6xl font-['Bold'] logo-reveal",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:"T.C."}),(0,a.jsx)(l.P.div,{className:"mt-8 h-0.5 bg-[#E4F5E5]/20",initial:{width:0},animate:{width:"100px"},transition:{duration:1,ease:"easeInOut"}}),(0,a.jsx)(l.P.p,{className:"mt-4 text-[#E4F5E5]/60 text-sm font-['Area_Normal_Regular']",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},children:"Portfolio"})]})}),(0,a.jsxs)(l.P.div,{animate:{x:e?"-100%":0},transition:{duration:.5},className:"overflow-y-auto h-full",children:[(0,a.jsxs)("section",{"data-scroll":!0,"data-scroll-speed":"0.3",className:"min-h-screen md:min-h-[210vh] flex items-start justify-center relative p-4",children:[(0,a.jsxs)("div",{"data-scroll":!0,"data-scroll-speed":"-2",className:"absolute inset-0 w-full h-[195vh] z-[-1]",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-[#010003]/80 to-[#010003] z-10"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-[#010003]/30"}),(0,a.jsxs)("video",{ref:g,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",className:"object-cover w-full h-full",style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",objectFit:"cover",zIndex:"-1"},children:[(0,a.jsx)("source",{src:"/video.mp4",type:"video/mp4"}),"Votre navigateur ne supporte pas la lecture vid\xe9o."]})]}),(0,a.jsxs)(l.P.div,{className:"text-center space-y-16 sticky top-1/2 -translate-y-1/2",children:[(0,a.jsx)(l.P.h1,{"data-scroll":!0,"data-scroll-speed":"0.1",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:1,delay:2},className:"text-4xl md:text-9xl font-['Area_Normal_ExtraBold'] tracking-tighter text-[#E4F5E5]",children:"Tanguy Clochard"}),(0,a.jsx)(l.P.p,{"data-scroll":!0,"data-scroll-speed":"0.05",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:1,delay:2.5},className:"text-base md:text-xl font-['Area_Normal_ExtraBold'] text-[#E4F5E5] max-w-2xl mx-auto text-center px-4",children:"Concepteur d\xe9veloppeur d'applications"}),(0,a.jsx)("div",{onClick:()=>{let e=document.getElementById("projects-section");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},className:"absolute top-[40vh] left-1/2 -translate-x-1/2 cursor-pointer z-50",children:(0,a.jsx)(l.P.div,{initial:{opacity:0,scale:2,y:20},animate:{opacity:j?1:0,scale:1,y:40},transition:{opacity:{duration:.3},scale:{duration:.8,delay:3},y:{duration:1.5,delay:3,repeat:1/0,repeatType:"reverse",ease:"easeInOut"}},children:(0,a.jsx)("span",{className:"hover:text-white transition-colors duration-300 cursor-pointer",children:(0,a.jsx)(o.Vr3,{size:24,color:"currentColor"})})})})]})]}),(0,a.jsxs)("section",{id:"projects-section","data-scroll":!0,"data-scroll-speed":"0.1",className:"min-h-[90vh] py-20 px-4 md:px-6 relative",children:[(0,a.jsx)(r.default,{src:"/soussol.jpg",alt:"Projet",fill:!0,className:"object-cover opacity-50",priority:!1,loading:"lazy"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-[#010003] via-transparent to-[#010003]"}),(0,a.jsxs)("section",{children:[(0,a.jsx)(l.P.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},className:"relative w-full h-[20vh] mb-20",children:(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,a.jsx)("h2",{className:"text-5xl font-['Area_Normal_ExtraBold'] text-[#E4F5E5]",children:"Projet"})})}),(0,a.jsx)(l.P.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},className:"max-w-7xl mx-auto",children:(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16",children:b.map(e=>(0,a.jsx)(l.P.div,{layoutId:"project-".concat(e.id),onClick:()=>t(e.id),className:"relative group cursor-pointer md:col-span-2 w-full max-w-2xl mx-auto",whileHover:{y:-10},transition:{duration:.3},children:(0,a.jsxs)("div",{className:"relative aspect-[4/3] overflow-hidden rounded-lg",children:[(0,a.jsx)(r.default,{src:e.image,alt:e.title,fill:!0,sizes:"(max-width: 768px) 100vw, 50vw",className:"object-cover transition-transform duration-200"}),(0,a.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg",children:(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h3",{className:"text-2xl font-['Area_Normal_Regular'] text-[#FFFCF9]",children:e.title}),(0,a.jsx)("p",{className:"font-['Area_Normal_Regular'] text-[#FFFCF9]/80",children:e.category})]})})})]})},e.id))})})]}),(0,a.jsx)("section",{"data-scroll":!0,"data-scroll-speed":"0.1",className:"py-9 px-4",children:(0,a.jsxs)(l.P.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},className:"max-w-2xl mx-auto text-center relative z-10",children:[(0,a.jsx)("h2",{className:"text-3xl font-[Area_Normal_ExtraBold] mb-8 text-[#E4F5E5]",children:"Contact"}),(0,a.jsxs)("div",{className:"flex justify-center space-x-8 text-[#E4F5E5]",children:[(0,a.jsx)(l.P.a,{href:"https://github.com/votre-github",whileHover:{scale:1.2},className:"text-2xl cursor-pointer relative z-20",children:(0,a.jsx)(o.hL4,{})}),(0,a.jsx)(l.P.a,{href:"https://www.linkedin.com/in/tanguy-clochard-a32b5a203/",whileHover:{scale:1.2},className:"text-2xl cursor-pointer relative z-20",target:"_blank",children:(0,a.jsx)(o.QEs,{})}),(0,a.jsx)(l.P.a,{href:"mailto:tanguyclochardmail@gmail.com",whileHover:{scale:1.2},className:"text-2xl cursor-pointer relative z-20",children:(0,a.jsx)(o.maD,{})})]})]})})]})]}),(0,a.jsx)(l.P.div,{initial:{x:"100%"},animate:{x:e?0:"100%"},transition:{duration:.5},className:"fixed top-0 left-0 w-full h-full overflow-y-auto",children:e&&(0,a.jsxs)("div",{className:"p-8 relative min-h-screen flex flex-col",children:[(0,a.jsxs)("div",{className:"absolute inset-0 w-full h-full",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-[#010003]/80"}),(0,a.jsx)(r.default,{src:"/sand.jfif",alt:"Background",fill:!0,sizes:"100vw",className:"object-cover opacity-30 scale-150 blur-lg",priority:!0})]}),(0,a.jsxs)("div",{className:"relative z-10 flex-grow",children:[(0,a.jsx)(l.P.button,{onClick:()=>t(null),className:"fixed top-8 left-8 text-[#E4F5E5] hover:text-white transition-colors z-10",whileHover:{scale:1.1},children:(0,a.jsx)(o.QVr,{size:24})}),(0,a.jsx)("div",{className:"flex-grow",children:b.map(t=>t.id===e?(0,a.jsxs)(l.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:"max-w-4xl mx-auto pt-20",children:[t.image2&&(0,a.jsx)("div",{className:"relative aspect-video mb-8",children:(0,a.jsx)(r.default,{src:t.image2,alt:t.title,fill:!0,className:"object-cover rounded-lg"})}),(0,a.jsx)("h2",{className:"text-4xl font-['Bold'] mb-10",children:t.title}),(0,a.jsx)("p",{className:"text-xl text-[#E4F5E5]/80 mb-4",children:t.category}),(0,a.jsx)("div",{className:"flex gap-2 mb-6",children:t.technologies.map((e,t)=>(0,a.jsx)("span",{className:"px-3 py-1 bg-[#E4F5E5]/10 rounded-full text-sm",children:e},t))}),(0,a.jsxs)("div",{className:"space-y-6 mb-12",children:[(0,a.jsx)("p",{className:"text-lg leading-relaxed whitespace-pre-line text-justify font-['Bold']",children:t.description}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsxs)("div",{className:"text-[#E4F5E5]/80 font-['Area_Normal_Regular']",children:[(0,a.jsx)("span",{className:"font-['Area_Normal_Regular']",children:"R\xf4le : "})," ",(0,a.jsx)("span",{className:"font-['Area_Normal_ExtraBold']",children:t.role})]}),(0,a.jsxs)("div",{className:"text-[#E4F5E5]/80 font-['Area_Normal_Regular']",children:[(0,a.jsx)("span",{className:"font-['Area_Normal_Regular']",children:"Dur\xe9e :"})," ",(0,a.jsx)("span",{className:"font-['Area_Normal_ExtraBold']",children:t.duree})]})]})]}),(0,a.jsxs)("div",{className:"relative py-12",children:[(0,a.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,a.jsx)("div",{className:"w-full border-t border-[#E4F5E5]/20"})}),(0,a.jsx)("div",{className:"relative flex justify-center",children:(0,a.jsx)("div",{className:"cursor-pointer group bg-[#010003] px-6 -mt-[1px]",onClick:()=>u(!d),children:(0,a.jsx)(l.P.div,{animate:{rotate:d?180:0},transition:{duration:.3},className:"group-hover:translate-y-1 transition-transform duration-300",children:(0,a.jsx)("div",{className:"text-[#E4F5E5]/40 group-hover:text-[#E4F5E5] transition-colors duration-300",children:(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[(0,a.jsx)("line",{x1:"4",y1:"8",x2:"12",y2:"16",strokeLinecap:"round"}),(0,a.jsx)("line",{x1:"12",y1:"16",x2:"20",y2:"8",strokeLinecap:"round"})]})})})})})]}),(0,a.jsx)(l.P.div,{initial:{height:0,opacity:0},animate:{height:d?"auto":0,opacity:d?1:0},transition:{duration:.3},className:"overflow-hidden",children:(0,a.jsx)("div",{className:"grid grid-cols-1 gap-4 mt-8",children:t.sections.map((e,t)=>{var i;return(0,a.jsxs)("div",{className:"mb-24",children:[(0,a.jsxs)("div",{className:"relative mb-12",children:[(0,a.jsx)("h3",{className:"text-4xl font-['Bold'] mb-2 pb-1 bg-gradient-to-r from-[#E4F5E5] to-[#E4F5E5]/40 bg-clip-text text-transparent",children:e.title}),(0,a.jsx)("div",{className:"w-24 h-1 bg-gradient-to-r from-[#E4F5E5]/80 to-transparent rounded-full"})]}),(0,a.jsx)("h4",{className:"text-2xl text-[#E4F5E5]/80 mb-8",children:e.subtitle}),(0,a.jsx)("div",{className:"flex gap-3 mb-8",children:e.technologies.map((e,t)=>(0,a.jsx)("span",{className:"px-4 py-2 bg-[#E4F5E5]/10 rounded-full text-sm",children:e},t))}),(0,a.jsx)("p",{className:"text-lg leading-relaxed mb-12",children:e.description}),(0,a.jsx)("div",{className:"space-y-8 mb-16 pl-8",children:null===(i=e.features)||void 0===i?void 0:i.map((e,t)=>(0,a.jsxs)(l.P.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.1*t},className:"group",children:[(0,a.jsxs)("div",{className:"flex items-center mb-2",children:[(0,a.jsx)("div",{className:"flex-shrink-0 mr-4",children:(0,a.jsx)("div",{className:"w-1 h-8 bg-gradient-to-b from-[#E4F5E5]/60 to-transparent rounded-full  group-hover:h-12 transition-all duration-300"})}),(0,a.jsx)("span",{className:"text-[#E4F5E5] feature-title text-lg group-hover:text-[#E4F5E5] transition-colors duration-300",children:e.title})]}),(0,a.jsx)("div",{className:"ml-8 text-[#E4F5E5]/70 text-sm text-justify",children:e.description})]},t))}),e.video&&(0,a.jsx)("div",{className:"mb-12",children:(0,a.jsxs)("div",{className:"relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden video-container",children:[(0,a.jsxs)("video",{ref:g,loop:!0,muted:!0,playsInline:!0,className:"w-full h-full object-cover",onPlay:()=>h(!0),onPause:()=>h(!1),children:[(0,a.jsx)("source",{src:e.video,type:"video/mp4"}),"Votre navigateur ne supporte pas la lecture vid\xe9o."]}),(0,a.jsxs)("div",{className:"custom-video-controls flex items-center gap-4",children:[(0,a.jsx)(l.P.button,{className:"video-button",onClick:()=>{let e=g.current;e&&(e.paused?e.play():e.pause())},whileHover:{scale:1.1},whileTap:{scale:.95},children:p?(0,a.jsx)(o.kwt,{size:16}):(0,a.jsx)(o.gSK,{size:16})}),(0,a.jsx)(l.P.button,{className:"video-button",onClick:()=>{var e;let t=null===(e=g.current)||void 0===e?void 0:e.parentElement;t&&(document.fullscreenElement?(document.exitFullscreen(),f(!1)):(t.requestFullscreen(),f(!0)))},whileHover:{scale:1.1},whileTap:{scale:.95},children:v?(0,a.jsx)(o.Wsx,{size:16}):(0,a.jsx)(o._AH,{size:16})})]})]})}),e.images&&e.images.length>0&&(0,a.jsx)("div",{className:"grid grid-cols-2 gap-8 max-w-4xl mx-auto",children:e.images.map((t,i)=>(0,a.jsxs)("div",{className:"relative aspect-video group",onClick:e=>w(e,t),children:[(0,a.jsx)(r.default,{src:t,alt:"".concat(e.title," - Vue ").concat(i+1),fill:!0,sizes:"(max-width: 768px) 100vw, 50vw",className:"object-cover rounded-lg cursor-pointer"}),(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50",children:(0,a.jsx)(o._AH,{size:24,color:"white"})})]},i))})]},t)})})})]},t.id):null)}),(0,a.jsx)("section",{className:"py-9 px-4 mt-20 relative",children:(0,a.jsxs)(l.P.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},className:"max-w-2xl mx-auto text-center",children:[(0,a.jsx)("h2",{className:"text-3xl font-[Area_Normal_ExtraBold] mb-8 text-[#E4F5E5]",children:"Contact"}),(0,a.jsxs)("div",{className:"flex justify-center space-x-8 text-[#E4F5E5]",children:[(0,a.jsx)(l.P.a,{href:"https://github.com/votre-github",whileHover:{scale:1.2},className:"text-2xl",children:(0,a.jsx)(o.hL4,{})}),(0,a.jsx)(l.P.a,{href:"https://www.linkedin.com/in/tanguy-clochard-a32b5a203/",whileHover:{scale:1.2},className:"text-2xl",target:"_blank",children:(0,a.jsx)(o.QEs,{})}),(0,a.jsx)(l.P.a,{href:"mailto:tanguyclochardmail@gmail.com",whileHover:{scale:1.2},className:"text-2xl",children:(0,a.jsx)(o.maD,{})})]})]})})]})]})}),n&&(0,a.jsxs)(l.P.div,{initial:{opacity:0},animate:{opacity:1},className:"fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4",onClick:()=>c(null),children:[(0,a.jsx)("button",{className:"absolute top-4 right-4 text-white hover:text-gray-300 transition-colors",onClick:()=>c(null),children:(0,a.jsx)(o.QCr,{size:24})}),(0,a.jsx)("div",{className:"relative max-w-[90%] max-h-[90vh] w-full h-full",children:(0,a.jsx)(r.default,{src:n,alt:"Image en plein \xe9cran",fill:!0,className:"object-contain",sizes:"90vw",quality:100})})]})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[422,865,441,517,358],()=>t(3568)),_N_E=e.O()}]);