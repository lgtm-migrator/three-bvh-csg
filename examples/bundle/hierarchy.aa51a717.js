var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequirefee5;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequirefee5=t);var i=t("ilwiq"),r=t("jiuw3"),a=t("fUhpq"),s=t("5Rd1x"),d=t("4CEV9");window.logTriangleDefinitions=d.logTriangleDefinitions;const p={snap:!0,brush1Shape:"box",brush1Complexity:1,brush1Color:"#ffffff",brush2Shape:"sphere",brush2Complexity:1,brush2Color:"#E91E63",operation:d.SUBTRACTION,wireframe:!1,displayBrushes:!0,displayControls:!0,shadows:!0,vertexColors:!1,flatShading:!1,gridTexture:!1,useGroups:!0,enableDebugTelemetry:!0,displayIntersectionEdges:!1,displayTriangleIntersections:!1,displayBrush1BVH:!1,displayBrush2BVH:!1};let w,l,f,c,u,h,m,y,B,x,O,g;function T(){requestAnimationFrame(T);const e=window.performance.now();x&&(x.geometry.dispose(),x.parent.remove(x)),x=B.evaluateHierarchy(O),x.material=g,f.add(x),x.position.z=5,f.add(O);const o=window.performance.now()-e;u.innerText=`${o.toFixed(3)}ms`,y.castShadow=p.shadows,m.enabled=p.displayControls,m.visible=p.displayControls,w.render(f,l)}!async function(){u=document.getElementById("output"),w=new i.WebGLRenderer({antialias:!0}),w.setPixelRatio(window.devicePixelRatio),w.setSize(window.innerWidth,window.innerHeight),w.setClearColor(1118481,1),w.shadowMap.enabled=!0,w.shadowMap.type=i.PCFSoftShadowMap,w.outputEncoding=i.sRGBEncoding,document.body.appendChild(w.domElement),f=new i.Scene,y=new i.DirectionalLight(16777215,1),y.position.set(-1,2,3),f.add(y,y.target),f.add(new i.AmbientLight(11583173,.1));const e=y.shadow.camera;y.castShadow=!0,y.shadow.mapSize.setScalar(4096),y.shadow.bias=1e-5,y.shadow.normalBias=.01,e.left=e.bottom=-2.5,e.right=e.top=2.5,e.updateProjectionMatrix(),l=new i.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50),l.position.set(1,2,4),l.far=100,l.updateProjectionMatrix(),h=new(0,s.OrbitControls)(l,w.domElement),m=new(0,a.TransformControls)(l,w.domElement),m.setSize(.75),m.addEventListener("dragging-changed",(e=>{h.enabled=!e.value})),m.addEventListener("objectChange",(e=>{if(p.snap){const e=m.object;e.position.x=.1*Math.floor(10*e.position.x),e.position.y=.1*Math.floor(10*e.position.y),e.position.z=.1*Math.floor(10*e.position.z)}})),f.add(m),B=new(0,d.Evaluator),B.attributes=["position","normal"],B.useGroups=!1,g=new(0,d.GridMaterial),g.color.set(16761856).convertSRGBToLinear(),O=new(0,d.Operation)(new i.BoxBufferGeometry(10,5,.5),g);{const e=new(0,d.Operation)(new i.CylinderBufferGeometry(.5,.5,1,20),g);e.operation=d.SUBTRACTION,e.rotateX(Math.PI/2);const o=new(0,d.Operation)(new i.BoxBufferGeometry(1,3,1),g);o.operation=d.SUBTRACTION,o.position.y=-1.5;const n=new(0,d.OperationGroup);n.add(e,o),O.add(n),m.attach(n)}{const e=new(0,d.Operation)(new i.BoxBufferGeometry(2,1.75,2),g);e.operation=d.SUBTRACTION;const o=new(0,d.Operation)(new i.BoxBufferGeometry(2,1.75,.2),g);o.operation=d.ADDITION;const n=new(0,d.Operation)(new i.BoxBufferGeometry(1.9,1.65,2),g);n.operation=d.SUBTRACTION;const t=new(0,d.Operation)(new i.BoxBufferGeometry(2,.1,.1),g);t.operation=d.ADDITION;const r=new(0,d.Operation)(new i.BoxBufferGeometry(.1,2,.1),g);r.operation=d.ADDITION;const a=new(0,d.OperationGroup);a.add(e,o,n,t,r),a.position.x=-3,O.add(a)}{const e=new(0,d.Operation)(new i.BoxBufferGeometry(2,1.75,2),g);e.operation=d.SUBTRACTION;const o=new(0,d.Operation)(new i.BoxBufferGeometry(2,1.75,.2),g);o.operation=d.ADDITION;const n=new(0,d.Operation)(new i.BoxBufferGeometry(1.9,1.65,2),g);n.operation=d.SUBTRACTION;const t=new(0,d.Operation)(new i.BoxBufferGeometry(2,.1,.1),g);t.operation=d.ADDITION;const r=new(0,d.Operation)(new i.BoxBufferGeometry(.1,2,.1),g);r.operation=d.ADDITION;const a=new(0,d.OperationGroup);a.add(e,o,n,t,r),a.position.x=3,O.add(a)}c=new(0,r.GUI),c.add(p,"snap"),c.add(p,"displayControls"),c.add(p,"shadows"),window.addEventListener("resize",(function(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)}),!1),window.addEventListener("keydown",(function(e){switch(e.code){case"KeyW":m.setMode("translate");break;case"KeyE":m.setMode("rotate");break;case"KeyR":m.setMode("scale")}})),T()}();
//# sourceMappingURL=hierarchy.aa51a717.js.map
