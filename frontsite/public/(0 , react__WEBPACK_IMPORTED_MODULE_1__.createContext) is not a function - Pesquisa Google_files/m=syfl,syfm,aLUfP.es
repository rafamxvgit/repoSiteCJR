this._s=this._s||{};(function(_){var window=this;
try{
_.Ctb=function(a){this.xm=a};
}catch(e){_._DumpException(e)}
try{
var Dtb=function(a){_.un.call(this,a.Ka);var b=this;this.window=a.service.window.get();this.wa=this.xm();this.oa=window.orientation;this.ka=function(){var c=b.xm(),d=b.GPb()&&90===Math.abs(window.orientation)&&b.oa===-1*window.orientation;b.oa=window.orientation;if(c!==b.wa||d){b.wa=c;d=_.$a(b.Ie);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new _.Ctb(c);try{e(f)}catch(g){_.ca(g)}}}};this.Ie=new Set;this.window.addEventListener("resize",this.ka);this.GPb()&&this.window.addEventListener("orientationchange",
this.ka)};_.F(Dtb,_.un);Dtb.nb=_.un.nb;Dtb.Ga=function(){return{service:{window:_.vn}}};Dtb.prototype.addListener=function(a){this.Ie.add(a)};Dtb.prototype.removeListener=function(a){this.Ie.delete(a)};
Dtb.prototype.xm=function(){if(Etb()){var a=_.ol(this.window);a=new _.Tk(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.qc()||(_.ja()?Etb():this.window.visualViewport)?_.ol(this.window):new _.Tk(this.window.innerWidth,this.window.innerHeight);return a.height<a.width};Dtb.prototype.destroy=function(){this.window.removeEventListener("resize",this.ka);this.window.removeEventListener("orientationchange",this.ka)};var Etb=function(){return _.ja()&&_.Le.nJ()&&!navigator.userAgent.includes("GSA")};
Dtb.prototype.qc=function(){return _.Ftb};Dtb.prototype.GPb=function(){return"orientation"in window};_.Ftb=!1;_.wn(_.VTa,Dtb);
_.Ftb=!0;
}catch(e){_._DumpException(e)}
try{
_.z("aLUfP");

_.A();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
