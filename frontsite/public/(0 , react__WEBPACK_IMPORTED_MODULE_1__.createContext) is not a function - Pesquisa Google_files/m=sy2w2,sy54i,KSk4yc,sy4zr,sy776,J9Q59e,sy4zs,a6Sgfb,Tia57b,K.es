this._s=this._s||{};(function(_){var window=this;
try{
var egh;egh=RegExp("tw-data-text|tw-data-placeholder");_.fgh=new function(){this.ka=!1};_.MN=function(a,b){this.pre=a;this.ka=this.pre.firstElementChild;this.textarea=b||null};
_.MN.prototype.Zb=function(a){_.Jl(this.ka,a);this.pre.className=this.pre.className.replace(egh,"tw-data-text");0<=this.pre.className.indexOf("tw-data-placeholder")||0!=this.ka.innerHTML.length||(_.Jl(this.ka,this.q5()),this.pre.className=this.pre.className.replace(egh,"tw-data-placeholder"));this.textarea&&this.textarea.value!=a&&(this.textarea.value=a)};_.MN.prototype.kc=function(){return this.textarea?this.textarea.value:0<=this.pre.className.indexOf("tw-data-text")?_.KAa(this.ka):""};
_.MN.prototype.q5=function(){return this.pre.getAttribute("data-placeholder")||""};_.MN.prototype.A3=function(a){this.pre.setAttribute("data-placeholder",a);0<=this.pre.className.indexOf("tw-data-placeholder")&&_.Jl(this.ka,a)};
}catch(e){_._DumpException(e)}
try{
_.lGl=_.D("KSk4yc",[]);
}catch(e){_._DumpException(e)}
try{
_.z("KSk4yc");
var sux=function(a){return new _.mm(a.top,a.right,a.bottom,a.left)},tux=function(a){var b=Object.values(a.getClientRects()).filter(function(d){return 0<d.width});if(0===b.length)return sux(a.range.getBoundingClientRect());a=sux(b[0]);b=_.$a(b.slice(1));for(var c=b.next();!c.done;c=b.next())c=c.value,a.bottom!==c.bottom?a=sux(c):a.right=c.right;return a},uux=function(a){var b=Object.values(a.getClientRects()).filter(function(d){return 0<d.width});if(0===b.length)return sux(a.range.getBoundingClientRect());
a=sux(b[0]);b=_.$a(b.slice(1));for(var c=b.next();!c.done;c=b.next()){c=c.value;if(a.top!==c.top)break;a.right=c.right}return a};var vux=function(a){this.range=a;for(var b=[],c=a.startContainer;c;){a:{try{if(3!==c.nodeType||!_.ce(c.parentNode)){var d=!1;break a}}catch(f){d=!1;break a}d=c.parentNode;var e;if(e=d.tagName!=="STYLE".toString())e=_.Ke().getComputedStyle(d),e=!("fixed"!==e.getPropertyValue("position")&&!d.offsetParent)&&"none"!==e.getPropertyValue("display")&&"hidden"!==e.getPropertyValue("visibility")&&"none"!==e.getPropertyValue("user-select")&&"none"!==e.getPropertyValue("-moz-user-select")&&"none"!==e.getPropertyValue("-ms-user-select")&&
"none"!==e.getPropertyValue("-webkit-user-select");d=e}d&&c.nodeValue.trim()&&b.push(c);if(c===a.endContainer)break;c=_.AAa(c)}this.ka=b};vux.prototype.toString=function(){var a=this;return 0===this.ka.length?"":this.ka.map(function(b){var c=0,d=b.nodeValue.length;b===a.range.startContainer&&(c=a.range.startOffset);b===a.range.endContainer&&(d=a.range.endOffset);return b.nodeValue.substring(c,d).trim()}).filter(Boolean).join(" ")};
vux.prototype.getClientRects=function(){var a=document.createRange(),b=this.ka[0],c=b===this.range.startContainer?this.range.startOffset:0;if("object"!==typeof b)return a.getClientRects();a.setStart(b,c);b=this.ka[this.ka.length-1];a.setEnd(b,b===this.range.endContainer?this.range.endOffset:b.nodeValue.length);return a.getClientRects()};var wux=function(a){_.E.call(this,a.Ka);var b=this;this.Gk=[];this.Ra=this.Sa=this.Aa=!1;this.wa=null;this.Oa=!1;this.ka=null;this.Ba=!1;this.kl=a.Kd.snackbar;this.tooltip=this.Wa("suEOdc");this.tooltip.isEmpty()&&_.Yeb(this,"suEOdc").then(function(c){return b.tooltip=c});this.Ja=this.Wa("ojBOCb");this.Ha=this.Wa("GV5nwf");this.oa=this.Wa("V4zgDf");this.oa.isEmpty()&&_.Yeb(this,"V4zgDf").then(function(c){return b.oa=c});this.Eb=this.getData("mcl").number(0);this.Ta=this.getData("mwl").number(-1);
this.Ab=this.getData("dl").number(0);this.Ib=_.ed("result-stats");this.Lb=function(c){return new vux(c)};this.Cb=this.getData("cf").Gb();this.Ua=this.getData("ath").Gb();a=_.Ke();this.Gk.push(_.Id(a,"mousedown",function(c){b.onMouseDown(c)},!1,this));this.Gk.push(_.Id(a,"keydown",function(c){b.onKeyDown(c)},!1,this));this.Gk.push(_.Id(a,"mouseup",function(c){b.onMouseUp(c)},!1,this));this.Gk.push(_.Id(a,"keyup",function(){b.onKeyUp()},!1,this));this.Gk.push(_.Id(document,"selectionchange",function(){b.CCa()},
!1,this))};_.F(wux,_.E);wux.Ga=function(){return{Kd:{snackbar:"m3HYFd"}}};_.k=wux.prototype;_.k.Nb=function(){this.Gk.forEach(function(a){return a&&_.zk(a)});this.Gk.length=0};_.k.JCe=function(){this.Wa("neDtlb").isEmpty()||(this.Wa("ZmkZfc").hide(),this.Hn())};
_.k.mvg=function(a){var b=this.Wa("ZmkZfc");if(!b.isEmpty()&&!b.he()&&null!==this.tooltip){b.show();this.tooltip.addClass("lSNMte");this.Wa("YljVCc").hide();var c=xux(this);c&&yux(this,c,!0);zux(this);this.Ba=!1;a=a.targetElement.el();_.rt([new _.cn(b.el(),"show")],{triggerElement:a})}};_.k.LCe=function(a){if("context_actions_dictionary"===a.data.YZa()||"context_actions_translate"===a.data.YZa())this.Ra=!0};_.k.KCe=function(){this.Ra=!1};
var Aux=function(a,b){if(1===a.split(" ").length){var c=_.Ke().getSelection();if(c&&c.anchorNode&&c.focusNode&&c.anchorNode===c.focusNode){var d=c.anchorNode;a=null;d.textContent&&(b.set("ctif",d.textContent),(d=d.parentElement)&&d.textContent&&(b.set("ctif",d.textContent),a=d,("B"===d.tagName||"EM"===d.tagName)&&(d=d.parentElement)&&d.textContent&&(b.set("ctif",d.textContent),a=d)));null!==a&&0<c.rangeCount?(c=c.getRangeAt(0),d=c.cloneRange(),d.selectNodeContents(a),d.setEnd(c.startContainer,c.startOffset),
a=d.toString().length,d.setEnd(c.endContainer,c.endOffset),c=d.toString().length,b.set("slst",a),b.set("sled",c)):isNaN(c.anchorOffset)||isNaN(c.focusOffset)||(a=Math.max(c.anchorOffset,c.focusOffset),b.set("slst",Math.min(c.anchorOffset,c.focusOffset)),b.set("sled",a))}}};_.k=wux.prototype;_.k.onMouseDown=function(a){this.Sa=a=_.hf(this.tooltip.el(),a.target);!a&&this.tooltip.he()&&this.Hn()};
_.k.onKeyDown=function(a){27===a.keyCode&&(this.Oa=!0,this.Hn());var b;if(b=a.shiftKey)b=a.keyCode,b=38===b||40===b||37===b||39===b;b&&(this.Oa=!1,this.Hn());a.ctrlKey&&a.shiftKey&&"X"===a.key&&this.tooltip.he()&&zux(this)};_.k.onMouseUp=function(a){var b=_.hf(this.tooltip.el(),a.target);this.Sa=b;b||(this.wa=a.clientX&&a.clientY?new _.Ok(a.clientX,a.clientY):null,Bux(this,!1))};_.k.onKeyUp=function(){var a=!this.tooltip.he()&&!this.ka;!this.Oa&&a&&(this.wa=null,Bux(this,!0))};
_.k.CCa=function(){this.Aa=!0;""===(_.Ke().getSelection()||"").toString()&&!this.Sa&&this.tooltip.he()&&(this.Hn(),this.Aa=!1)};
var Cux=function(a,b,c){if(!b||c.has(b))return!1;c.add(b);if(!a.Ua&&b.tagName==="A".toString()||"button"===_.FCa(b)||b===a.Ib||"tw-container"===b.id)return!0;var d=_.y.Eof(b);return d&&"auto"!==d.toString()&&"0"!==d.toString()?!0:Cux(a,_.$d(b),c)},Dux=function(a,b){var c=new Set;b=b.getRangeAt(0);for(var d=b.startContainer;d;){try{if(3!==d.nodeType&&1!==d.nodeType)return!1}catch(e){return!1}if(d.parentElement&&Cux(a,d.parentElement,c))return!1;if(d===b.endContainer)break;d=_.AAa(d)}return!0},Bux=
function(a,b){if(a.Aa){a.Aa=!1;var c=xux(a),d=c?c.toString().slice(0,a.Eb).trim():null;a.Ea("Uo0pef").toggle(b);d&&(-1===a.Ta||d.split(" ").length<=a.Ta)?Eux(a,function(){return Fux(a,c,d)}):a.tooltip.he()&&a.Hn()}},Eux=function(a,b){a.ka&&((0,_.jn)(a.ka),a.ka=null);a.ka=(0,_.hn)(b,a.Ab)},Fux=function(a,b,c){if(null!==a.oa&&null!==a.oa.el()){var d=new Map;d.set("rt","tc");d.set("sltx",c);Aux(c,d);_.nv(a.oa.el(),{context:d}).then(function(e){a.showTooltip(e,b);(0,_.hn)(function(){return _.Xf()},200)})}};
wux.prototype.showTooltip=function(a,b){a&&!this.Wa("YljVCc").isEmpty()&&null!==this.tooltip&&null!==this.tooltip.el()&&(this.Cb||null===this.tooltip||(this.tooltip.show(),yux(this,b,!1),this.tooltip.setStyle("opacity",.999),this.tooltip.setStyle("transform","scale(1)")),this.Ba||(_.rt([new _.cn(this.tooltip.el(),"show")],{}),this.Ba=!0))};
var yux=function(a,b,c){if(null!==a.tooltip&&null!==a.tooltip.Bb()){var d=a.tooltip.Bb().offsetWidth,e=a.tooltip.Bb().offsetHeight,f=_.Ke(),g=tux(b),h=uux(b);b=!1;a.wa&&a.wa.y+20<g.bottom&&(b=!0);g.bottom+8+a.tooltip.Bb().offsetHeight>f.innerHeight&&(b=!0);h.top+8+a.tooltip.Bb().offsetHeight<f.innerHeight&&(b=!1);b?e=f.pageYOffset+h.top-8-e:(e=f.pageYOffset+g.bottom+8,h=g);a.tooltip.setStyle("top",Math.round(e)+"px");g=_.Ke();e=g.innerWidth-16;f=h.left;var l=h.right,m=a.wa;h=f+8;var q=l-8;!m||h>=
q?f=(f+l)/2:(f=m.x,f=f<h?h:f>q?q:f);h=f;f=h-d/2;16>f?f=Math.min(16,h-12):f+d>e&&(f=Math.max(e-d,h+12-d));d=h-f;f+=g.pageXOffset;c||a.tooltip.setStyle("left",Math.round(f)+"px");g=b;c=c?null:Math.round(d-6);a.Ja.isEmpty()||a.Ha.isEmpty()||(e=g?a.Ha:a.Ja,g=g?a.Ja:a.Ha,c&&e.setStyle("left",c+"px"),e.show(),g.hide());a.tooltip.setStyle("transform-origin",d+"px "+(b?"bottom":"top"));a.ka=null}};
wux.prototype.Hn=function(){null!==this.tooltip&&null!==this.oa&&null!==this.oa.el()&&!0!==this.Ra&&(this.ka&&((0,_.jn)(this.ka),this.ka=null),this.tooltip.setStyle("top",0),this.tooltip.setStyle("left",0),this.tooltip.hide(),this.tooltip.setStyle("opacity",.001),this.tooltip.setStyle("transform","scale(0.1)"),this.tooltip.removeClass("lSNMte"),_.ov(this.oa.el()),this.Ba=!1)};
var xux=function(a){var b=_.Ke().getSelection();return b&&0!==b.rangeCount&&Dux(a,b)?a.Lb(b.getRangeAt(0)):(a.tooltip.he()&&a.Hn(),null)};wux.prototype.hb=function(a){document.execCommand("copy")&&this.kl&&this.kl.show();_.st(a.targetElement.el());this.Hn()};var zux=function(a){var b=a.Wa("YljVCc");(b.he()?_.Dn(b,'[role="button"], button, a'):_.Dn(a.Wa("ZmkZfc"),'[role="button"], button, a')).focus()};_.J(wux.prototype,"dK6tkc",function(){return this.hb});_.J(wux.prototype,"VvZoSb",function(){return this.KCe});
_.J(wux.prototype,"MlP2je",function(){return this.LCe});_.J(wux.prototype,"v9xSwd",function(){return this.mvg});_.J(wux.prototype,"Geh74d",function(){return this.JCe});_.J(wux.prototype,"k4Iseb",function(){return this.Nb});_.Sq(_.lGl,wux);

_.A();
}catch(e){_._DumpException(e)}
try{
_.$Cl=_.D("J9Q59e",[]);
}catch(e){_._DumpException(e)}
try{
var frw=function(a){this.Ia=_.n(a)};_.F(frw,_.p);_.k=frw.prototype;_.k.Qzf=function(){return _.u(this,1)};_.k.Nsg=function(a){return _.ve(this,1,a)};_.k.C$e=function(){return _.Mf(this,1)};_.k.PPf=function(){return _.Pe(this,1)};_.k.qwd=function(){return _.u(this,2)};_.k.l_d=function(a){return _.ve(this,2,a)};_.k.T7e=function(){return _.Mf(this,2)};_.k.XMf=function(){return _.Pe(this,2)};_.k.mBc=function(){return _.u(this,3)};_.k.m_d=function(a){return _.ve(this,3,a)};
_.k.xnd=function(){return _.Mf(this,3)};_.k.qEd=function(){return _.Pe(this,3)};_.k.ob="mZlIp";var grw={RH:function(){return["shem","bshm"]},Js:function(){return["bsht"]},Rj:function(a,b){var c=new _.et(a.searchParams,b);_.gt(c,"shem",b.Nsg,b.C$e);_.gt(c,"bshm",b.m_d,b.xnd);c=new _.et(a.ka,b);_.gt(c,"bsht",b.l_d,b.T7e)},Ak:function(a,b){var c=new _.et(b.searchParams,a);_.lt(c,a.PPf,a.Qzf,"shem");_.lt(c,a.qEd,a.mBc,"bshm");c=new _.et(b.ka,a);_.lt(c,a.XMf,a.qwd,"bsht")}};var hrw;hrw=null;_.irw=function(a){_.Bu.call(this,a.Ka);new _.Du(this);this.qe=_.yu(a.service.qe,this,new _.xu(grw))};_.F(_.irw,_.Bu);_.irw.Ga=function(){return{service:{qe:_.ku},context:{Dn:"I4I0mc"}}};_.irw.Zk=function(){return frw};_.irw.Tl=function(a){if(hrw)return hrw;var b=new _.sd("FdVNMc");hrw=_.Ze(b,_.irw,new _.zu(b,_.irw,frw));hrw.then(function(c){c.initialize(a)});return hrw};_.go.mZlIp=_.fo;
}catch(e){_._DumpException(e)}
try{
_.z("J9Q59e");
_.jrw=function(a){_.ig.call(this,a.Ka);this.Zg=a.Sd.dtc};_.F(_.jrw,_.ig);_.jrw.Ga=function(){return{Sd:{dtc:_.irw}}};_.wq(_.$Cl,_.jrw);
_.A();
}catch(e){_._DumpException(e)}
try{
_.aDl=_.D("a6Sgfb",[_.$Cl]);
}catch(e){_._DumpException(e)}
try{
_.z("a6Sgfb");
var krw=function(a,b){a.Zg.transition(function(c){c.m_d(b.join(","));return c}).run(_.nw({replace:!0}))},lrw=function(a){a.Zg.get().qEd()&&a.Zg.transition(function(b){b.xnd();return b}).run(_.nw({replace:!0}))};var mrw=function(a){this.Ia=_.n(a)};_.F(mrw,_.p);mrw.wb=[5,3];mrw.prototype.ob="YzXGMb";var qrw=function(a){_.E.call(this,a.Ka);this.Ja=[];this.ka=this.Ba=this.Aa=this.wa="";this.Oa=[];this.oa="";this.Ra=0;var b=a.jsdata.data;this.model=a.model.model;this.Ja=_.Rh(b,5,_.Ne());this.Oa=_.Rh(b,3,_.Ne());this.Ra=_.Uh(b,4);this.wa=nrw(orw(this,this.Oa));this.Aa=this.wa+"/"+this.Ra.toString();this.oa=this.model.Zg.get().mBc();this.ka=orw(this,this.oa.split(","));this.Ba=nrw(this.ka);if(""!==this.wa||""!==this.Ba)a:{if(""!==this.ka){if(this.ka===this.Aa){prw(this);break a}this.wa!==this.Ba&&
(a=this.ka,_.Cd().Fc("bshom",a).log())}""!==this.wa&&("complete"===document.readyState?this.Ha():_.Pq(this).listenOnce(_.Ke(),"load",this.Ha),prw(this))}};_.F(qrw,_.E);qrw.Ga=function(){return{model:{model:_.jrw},jsdata:{data:mrw}}};qrw.prototype.Ha=function(){krw(this.model,rrw(this))};
var prw=function(a){_.Pq(a).listen(_.Ke(),"visibilitychange",function(){_.dd().vF()?lrw(a.model):krw(a.model,rrw(a))})},rrw=function(a){a.oa=a.model.Zg.get().mBc();if(!a.oa)return[a.Aa];var b=a.oa.split(",");""===a.ka?b.push(a.Aa):b[b.indexOf(a.ka)]=a.Aa;return b},orw=function(a,b){b=b.filter(function(c){return a.Ja.includes(nrw(c))});return 0<b.length?b[0]:""},nrw=function(a){var b=a.lastIndexOf("/");return 0>b?a:a.substring(0,b)};_.Sq(_.aDl,qrw);
_.A();
}catch(e){_._DumpException(e)}
try{
_.z("Tia57b");
var Xke=function(a){_.un.call(this,a.Ka)};_.F(Xke,_.un);Xke.nb=_.un.nb;Xke.Ga=_.un.Ga;_.k=Xke.prototype;_.k.c2c=function(a,b){(void 0===b?0:b)&&_.Cc(location,_.cc(a));return!1};_.k.xka=function(){};_.k.hta=function(){var a=this;this.ka||(this.ka=new Promise(function(b){_.dg(_.lf(a,{service:{Tca:_.H0a}}).addCallback(function(c){return b(c.service.Tca)}),function(){return b(a)})}));return this.ka};
_.k.Fga=function(a,b){b=void 0===b?{}:b;b.replace?(_.Dc(location,_.cc(a)),location.reload()):_.Cc(location,_.cc(a));return Promise.resolve(null)};_.k.prefetch=function(){return Promise.resolve(null)};_.wn(_.BUa,Xke);
_.A();
}catch(e){_._DumpException(e)}
try{
_.z("KpRAue");
_.lpe=new _.vd(_.CUa);
_.A();
}catch(e){_._DumpException(e)}
try{
_.Zke=function(a){if(!a.match(/.*com\/search|^\/search/))return _.Zc(new _.Ed("url invalid not /search")),{VQa:!1,jEd:!0};var b,c=null!=(b=_.bm(a,"tbm"))?b:"web";return"web"!==c?(_.Zc(new _.Ed("url invalid mode: "+c)),{VQa:!1,jEd:!0}):_.Yke(a)?{VQa:!0}:(_.Zc(new _.Ed("url invalid missing query: "+a)),{VQa:!1,reload:!0})};_.Yke=function(a){return!!_.bm(a,"q")};
}catch(e){_._DumpException(e)}
try{
_.z("NyeqM");
_.oO=function(a){_.un.call(this,a.Ka);this.wa=!1;this.oa=new Map;this.rr=a.service.rr};_.F(_.oO,_.un);_.oO.nb=_.un.nb;_.oO.Ga=function(){return{service:{rr:_.lpe}}};_.oO.prototype.ka=function(){};_.Ruh=function(a,b){b=void 0===b?{}:b;Puh(a);b.xsh&&_.Quh(a);b.feature&&a.rr.xka(b);if(b.V6){var c=b.V6;c=Array.isArray(c)?c:[c];c=_.$a(c);for(var d=c.next();!d.done;d=c.next())a.oa.set(d.value,b)}};_.Quh=function(a){return _.zg(function(b){return b.return(a.rr.hta().then(function(c){a.rr=c}))})};
_.oO.prototype.transition=function(a,b){return this.rr.Fga(a,b)};
var Puh=function(a){a.wa||(a.wa=!0,document.addEventListener("click",function(b){try{var c=b.target.closest("a");if(c&&!b.defaultPrevented){var d=Suh(a,c);if(d){var e,f=null==(e=d.onClick)?void 0:e.call(d,b,c),g=Object.assign({},d,f);if(_.Zke(c.href).VQa){if(!g.triggerElement){for(d=c;d&&!d.getAttribute("jslog")&&!d.getAttribute("data-ved");)d=d.parentElement;d||_.Zc(Error("Pl"));g.triggerElement=d}a.transition(c.href,g);b.preventDefault()}}}}catch(h){_.Zc(Error("Nl`"+h))}}))},Suh=function(a,b){try{var c=
Tuh(a,b),d=c?a.oa.get(c):void 0;return((null==d?0:d.omit)?Uuh(d.omit):[]).find(function(e){return"function"===typeof e?e(b):a.isMatch(b,e)||"string"===typeof e&&b.closest(e)})?void 0:d}catch(e){_.Zc(Error("Ol`"+e))}},Tuh=function(a,b){return Array.from(a.oa.keys()).find(function(c){return a.isMatch(b,c)})};_.oO.prototype.isMatch=function(a,b){return b instanceof Element?a.isEqualNode(b):a.matches(b)||a.closest(b)};var Uuh=function(a){return Array.isArray(a)?a:[a]};_.wn(_.Q0a,_.oO);

_.A();
}catch(e){_._DumpException(e)}
try{
_.svh=!!(_.Cg[34]>>24&1);_.tvh=!!(_.Cg[34]>>25&1);_.uvh=!!(_.Cg[34]>>26&1);
}catch(e){_._DumpException(e)}
try{
_.vvh=_.D("O9SqHb",[_.Zp,_.Q0a]);
}catch(e){_._DumpException(e)}
try{
_.z("O9SqHb");
var wvh=function(a){_.E.call(this,a.Ka);this.Jc=a.service.Jc;_.tvh&&(this.JF=a.service.JF)};_.F(wvh,_.E);wvh.Ga=function(){return{service:{Jc:_.hu,JF:_.oO}}};wvh.prototype.navigate=function(a){var b=this,c,d,e;return _.zg(function(f){switch(f.ka){case 1:c=!!a&&a.data||{};d=c.url;if(!b.JF){f.Hb(2);break}_.sg(f,3);return f.yield(b.JF.transition(d.toString()),5);case 5:return f.return();case 3:e=_.vg(f),_.Zc(Error("Sl`"+e));case 2:b.Jc.Nh(d,!1),_.pg(f)}})};_.J(wvh.prototype,"RySO6d",function(){return this.navigate});
_.Sq(_.vvh,wvh);
_.A();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
