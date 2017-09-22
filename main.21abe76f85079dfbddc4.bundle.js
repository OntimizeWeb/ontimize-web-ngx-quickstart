webpackJsonp([10],{189:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function MainComponent(){}return MainComponent.prototype.ngOnInit=function(){},MainComponent.ctorParameters=function(){return[]},MainComponent}()},190:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var u=t(0),e=t(13),o=t(7),i=t(70),a=function(){function LoginComponent(n,l,t,u,e,o){var i=this;this.actRoute=n,this.zone=l,this.navigation=u,this.loginService=e,this.injector=o,this.sessionExpired=!1,this.router=t,this.actRoute.queryParams.subscribe(function(n){if(n){var l=n["session-expired"];i.sessionExpired="true"===l}})}return LoginComponent.prototype.ngOnInit=function(){this.removeSessionToken(),this.navigation.setVisible(!1);var n=new e.f("",e.r.required),l=new e.f("",e.r.required);this.loginForm=new e.h({}),this.loginForm.addControl("username",n),this.loginForm.addControl("password",l),this.loginService.isLoggedIn()&&this.router.navigate(["../"],{relativeTo:this.actRoute})},LoginComponent.prototype.login=function(){var n=this;this.loginForm.valid||alert("Campos no válidos");var l=this.loginForm.value.username,t=this.loginForm.value.password;if(l&&l.length>0&&t&&t.length>0){var u=this;this.loginService.login(l,t).subscribe(function(){u.sessionExpired=!1,u.router.navigate(["../"],{relativeTo:n.actRoute})},this.handleError)}},LoginComponent.prototype.handleError=function(n){switch(n.status){case 401:console.error("Email or password is wrong.")}},LoginComponent.prototype.removeSessionToken=function(){var n=this.injector.get(i.a),l=n.uuid;localStorage.setItem(l,JSON.stringify({}))},LoginComponent.ctorParameters=function(){return[{type:o.a},{type:u.R},{type:o.m},{type:i.g,decorators:[{type:u.B,args:[i.g]}]},{type:i.f,decorators:[{type:u.B,args:[i.f]}]},{type:u.E}]},LoginComponent}()},418:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t(0),e=function(){function AppComponent(n){this.injector=n}return AppComponent.prototype.ngOnInit=function(){},AppComponent.ctorParameters=function(){return[{type:u.E}]},AppComponent}()},424:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function SharedModule(){}return SharedModule}()},431:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var u=(t(218),t(0)),e=t(11),o=t(672),i=t(70);Object(u._25)(),Object(e.k)().bootstrapModuleFactory(o.a).then(i.q).catch(function(n){console.error(n.message)})},672:function(n,l,t){"use strict";t.d(l,"a",function(){return ml});var u=t(0),e=t(673),o=t(418),i=t(29),a=t(421),_=t(422),r=t(423),s=t(674),c=t(682),d=t(684),p=t(3),m=t(11),g=t(8),f=t(415),b=t(414),h=t(128),v=t(16),C=t(217),x=t(28),y=t(13),w=t(30),E=t(17),M=t(32),S=t(35),R=t(34),k=t(33),L=t(40),A=t(110),B=t(139),F=t(111),j=t(113),O=t(112),I=t(138),V=t(71),q=t(7),H=t(27),P=t(4),T=t(416),N=t(188),G=t(90),z=t(171),D=t(172),U=t(281),J=t(392),X=t(179),Q=t(393),W=t(410),K=t(187),Y=t(411),Z=t(412),$=t(413),nn=t(686),ln=t(407),tn=t(137),un=t(22),en=t(31),on=t(38),an=t(41),_n=t(77),rn=t(202),sn=t(189),cn=t(190),dn=t(203),pn=t(204),mn=t(205),gn=t(199),fn=t(206),bn=t(198),hn=t(191),vn=t(192),Cn=t(105),xn=t(92),yn=t(10),wn=t(193),En=t(60),Mn=t(133),Sn=t(106),Rn=t(200),kn=t(91),Ln=t(194),An=t(207),Bn=t(134),Fn=t(76),jn=t(195),On=t(196),In=t(201),Vn=t(208),qn=t(197),Hn=t(136),Pn=t(135),Tn=t(107),Nn=t(61),Gn=t(132),zn=t(209),Dn=t(210),Un=t(211),Jn=t(212),Xn=t(69),Qn=t(78),Wn=t(213),Kn=t(214),Yn=t(215),Zn=t(216),$n=t(93),nl=t(108),ll=t(79),tl=t(62),ul=t(80),el=t(109),ol=t(114),il=t(70),al=t(424),_l=t(689),rl=t(690),sl=t(691),cl=t(692),dl=t(693),pl=t(180),ml=u._47(e.a,[o.a],function(n){return u._65([u._66(512,u.q,u._39,[[8,[i.c,i.b,i.d,i.B,i.C,a.a,i.a,_.a,r.a,s.a,c.a,d.a]],[3,u.q],u.P]),u._66(5120,u.I,u._64,[[3,u.I]]),u._66(4608,p.l,p.k,[u.I]),u._66(5120,u.c,u._53,[]),u._66(5120,u.G,u._61,[]),u._66(5120,u.H,u._62,[]),u._66(4608,m.c,m.u,[p.c]),u._66(6144,u._5,null,[m.c]),u._66(4608,m.f,g.g,[]),u._66(5120,m.d,function(n,l,t,u){return[new m.l(n),new m.q(l),new m.o(t,u)]},[p.c,p.c,p.c,m.f]),u._66(4608,m.e,m.e,[m.d,u.R]),u._66(135680,m.n,m.n,[p.c]),u._66(4608,m.m,m.m,[m.e,m.n]),u._66(5120,f.a,b.d,[]),u._66(5120,f.c,b.e,[]),u._66(4608,f.b,b.c,[f.a,f.c]),u._66(5120,u._3,b.f,[m.m,f.b,u.R]),u._66(6144,m.r,null,[m.n]),u._66(4608,u._15,u._15,[u.R]),u._66(4608,m.h,m.h,[p.c]),u._66(4608,m.j,m.j,[p.c]),u._66(4608,h.b,b.b,[u._3,m.b]),u._66(4608,v.c,v.c,[]),u._66(4608,v.j,v.b,[]),u._66(5120,v.l,v.m,[]),u._66(4608,v.k,v.k,[v.c,v.j,v.l]),u._66(4608,v.i,v.a,[]),u._66(5120,v.f,v.n,[v.k,v.i]),u._66(4608,C.h,C.m,[p.c,u.V,C.k]),u._66(4608,C.n,C.n,[C.h,C.l]),u._66(5120,C.a,function(n){return[n]},[C.n]),u._66(4608,C.j,C.j,[]),u._66(6144,C.i,null,[C.j]),u._66(4608,C.g,C.g,[C.i]),u._66(6144,C.b,null,[C.g]),u._66(5120,C.f,C.o,[C.b,[2,C.a]]),u._66(4608,C.c,C.c,[C.f]),u._66(5120,x.a,x.d,[]),u._66(4608,x.b,x.b,[x.a]),u._66(4608,x.l,x.l,[u.R,m.b]),u._66(5120,x.m,x.k,[[3,x.m],x.b,x.l]),u._66(5120,x.p,x.o,[[3,x.p],x.l,x.b]),u._66(4608,y.v,y.v,[]),u._66(4608,y.e,y.e,[]),u._66(6144,w.b,null,[m.b]),u._66(4608,w.c,w.c,[[2,w.b]]),u._66(4608,E.a,E.a,[]),u._66(5120,M.c,M.a,[[3,M.c],u.R,E.a]),u._66(5120,M.g,M.f,[[3,M.g],M.c]),u._66(4608,S.g,S.g,[M.c,M.g]),u._66(5120,S.c,S.j,[[3,S.c]]),u._66(4608,S.m,S.m,[M.g]),u._66(4608,S.b,S.b,[S.g,S.c,u.q,S.m,u.g,u.E,u.R]),u._66(5120,S.k,S.l,[S.b]),u._66(5120,g.k,g.l,[S.b]),u._66(5120,g.f,g.e,[[3,g.f],u.R,E.a]),u._66(5120,g._123,g._124,[[3,g._123]]),u._66(4608,R.a,R.a,[]),u._66(4608,k.f,k.f,[E.a]),u._66(4608,k.e,k.e,[k.f,E.a,u.R]),u._66(5120,k.j,k.i,[[3,k.j],[2,k.g],E.a]),u._66(5120,g.p,g.q,[S.b]),u._66(4608,g._11,g._11,[S.b,u.E,g.p,[2,p.f],[3,g._11]]),u._66(4608,g._38,g._38,[[2,v.f],m.c]),u._66(4608,g._8,g._8,[]),u._66(5120,g.m,g.n,[S.b]),u._66(5120,g._126,g._127,[S.b]),u._66(5120,g.w,g.x,[S.b]),u._66(4608,g._92,g._92,[S.b,k.j,u.E,[3,g._92]]),u._66(5120,g.z,g.A,[S.b]),u._66(4608,g.d,L.a,[]),u._66(5120,A.b,B.a,[C.c]),u._66(4608,F.a,F.b,[]),u._66(4608,j.b,j.a,[]),u._66(4608,O.b,O.a,[]),u._66(4608,I.a,I.a,[]),u._66(4608,V.a,V.a,[I.a,A.b,F.a,j.b,O.b,V.b,V.c]),u._66(5120,q.a,q.A,[q.m]),u._66(4608,q.f,q.f,[]),u._66(6144,q.h,null,[q.f]),u._66(135680,q.r,q.r,[q.m,u.O,u.m,u.E,q.h]),u._66(4608,q.g,q.g,[]),u._66(5120,q.j,q.D,[q.B]),u._66(5120,u.b,function(n){return[n]},[q.j]),u._66(5120,H.b,P.n,[u.E]),u._66(4608,v.a,v.a,[]),u._66(5120,T.a,N.m,[v.k,v.a]),u._66(5120,G.a,P.p,[u.E]),u._66(5120,z.a,N.g,[u.E]),u._66(5120,D.a,N.i,[u.E]),u._66(5120,U.a,N.h,[u.E]),u._66(5120,J.a,N.c,[u.E]),u._66(5120,X.a,N.j,[u.E]),u._66(5120,Q.a,N.d,[u.E]),u._66(5120,W.a,N.f,[u.E]),u._66(5120,K.a,P.o,[u.E]),u._66(5120,Y.a,N.b,[u.E]),u._66(5120,Z.a,N.l,[u.E]),u._66(5120,$.a,N.k,[u.E]),u._66(512,p.b,p.b,[]),u._66(1024,u.w,m.s,[]),u._66(1024,u.Q,function(){return[q.w()]},[]),u._66(256,H.a,nn.a,[]),u._66(1024,ln.a,N.n,[u.E]),u._66(512,q.B,q.B,[u.E]),u._66(1024,u.d,function(n,l,t,u,e,o){return[m.t(n,l),N.a(t,u,e),q.C(o)]},[[2,m.i],[2,u.Q],u.E,H.a,ln.a,q.B]),u._66(512,u.e,u.e,[[2,u.d]]),u._66(131584,u._50,u._50,[u.R,u._40,u.E,u.w,u.q,u.e]),u._66(2048,u.g,null,[u._50]),u._66(512,u.f,u.f,[u.g]),u._66(512,m.a,m.a,[[3,m.a]]),u._66(512,b.a,b.a,[]),u._66(512,B.d,B.d,[]),u._66(512,v.g,v.g,[]),u._66(512,C.e,C.e,[]),u._66(512,C.d,C.d,[]),u._66(512,tn.b,tn.b,[]),u._66(512,x.n,x.n,[]),u._66(512,x.g,x.g,[]),u._66(512,y.s,y.s,[]),u._66(512,y.j,y.j,[]),u._66(512,y.q,y.q,[]),u._66(512,un.a,un.a,[]),u._66(512,g.c,g.c,[]),u._66(512,w.a,w.a,[]),u._66(256,g.j,!0,[]),u._66(512,g._3,g._3,[[2,m.b],[2,g.j]]),u._66(512,E.b,E.b,[]),u._66(512,M.b,M.b,[]),u._66(512,g._80,g._80,[]),u._66(512,g._74,g._74,[]),u._66(512,g._62,g._62,[]),u._66(512,en.e,en.e,[]),u._66(512,S.d,S.d,[]),u._66(512,g.G,g.G,[]),u._66(512,g._121,g._121,[]),u._66(512,g.J,g.J,[]),u._66(512,g.N,g.N,[]),u._66(512,g.V,g.V,[]),u._66(512,g._2,g._2,[]),u._66(512,R.c,R.c,[]),u._66(512,g._0,g._0,[]),u._66(512,k.a,k.a,[]),u._66(512,g._16,g._16,[]),u._66(512,g._37,g._37,[]),u._66(512,g._9,g._9,[]),u._66(512,g._43,g._43,[]),u._66(512,g._31,g._31,[]),u._66(512,g._29,g._29,[]),u._66(512,g._41,g._41,[]),u._66(512,g._50,g._50,[]),u._66(512,g._54,g._54,[]),u._66(512,g._69,g._69,[]),u._66(512,g._72,g._72,[]),u._66(512,g._77,g._77,[]),u._66(512,g._83,g._83,[]),u._66(512,g._87,g._87,[]),u._66(512,g._91,g._91,[]),u._66(512,g._89,g._89,[]),u._66(512,g._94,g._94,[]),u._66(512,g._110,g._110,[]),u._66(512,g._112,g._112,[]),u._66(512,g._115,g._115,[]),u._66(512,g._118,g._118,[]),u._66(512,g._58,g._58,[]),u._66(512,on.a,on.a,[]),u._66(512,an.a,an.a,[]),u._66(512,_n.b,_n.b,[]),u._66(512,rn.a,rn.a,[]),u._66(1024,q.v,q.y,[[3,q.m]]),u._66(512,q.u,q.c,[]),u._66(512,q.b,q.b,[]),u._66(256,q.i,{enableTracing:!1},[]),u._66(1024,p.g,q.x,[p.r,[2,p.a],q.i]),u._66(512,p.f,p.f,[p.g]),u._66(512,u.m,u.m,[]),u._66(512,u.O,u._10,[u.m,[2,u._11]]),u._66(1024,q.k,function(){return[[{path:"main",component:sn.a,canActivate:[K.a],children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadChildren:"./home/home.module#HomeModule"},{path:"about",loadChildren:"./about/about.module#AboutModule"},{path:"settings",loadChildren:"./settings/settings.module#SettingsModule"},{path:"customers",loadChildren:"./customers/customers.module#CustomersModule"},{path:"accounts",loadChildren:"./accounts/accounts.module#AccountsModule"},{path:"branches",loadChildren:"./branches/branches.module#BranchesModule"},{path:"employees",loadChildren:"./employees/employees.module#EmployeesModule"}]}],[{path:"login",component:cn.a,pathMatch:"full"}],[{path:"",redirectTo:"main",pathMatch:"prefix",canActivate:[K.a]}]]},[]),u._66(1024,q.m,q.z,[u.g,q.u,q.b,p.f,u.E,u.O,u.m,q.k,q.i,[2,q.t],[2,q.l]]),u._66(512,q.p,q.p,[[2,q.v],[2,q.m]]),u._66(512,dn.a,dn.a,[]),u._66(512,pn.a,pn.a,[]),u._66(512,mn.a,mn.a,[]),u._66(512,gn.b,gn.b,[]),u._66(512,fn.a,fn.a,[]),u._66(512,bn.b,bn.b,[]),u._66(512,hn.b,hn.b,[]),u._66(512,vn.b,vn.b,[]),u._66(512,Cn.b,Cn.b,[]),u._66(512,xn.b,xn.b,[]),u._66(512,yn.b,yn.b,[]),u._66(512,wn.b,wn.b,[]),u._66(512,En.d,En.d,[]),u._66(512,Mn.d,Mn.d,[]),u._66(512,Sn.d,Sn.d,[]),u._66(512,Rn.b,Rn.b,[]),u._66(512,kn.b,kn.b,[]),u._66(512,Ln.b,Ln.b,[]),u._66(512,An.a,An.a,[]),u._66(512,Bn.b,Bn.b,[]),u._66(512,Fn.b,Fn.b,[]),u._66(512,jn.b,jn.b,[]),u._66(512,On.b,On.b,[]),u._66(512,In.b,In.b,[]),u._66(512,Vn.a,Vn.a,[]),u._66(512,qn.b,qn.b,[]),u._66(512,Hn.a,Hn.a,[]),u._66(512,Pn.a,Pn.a,[]),u._66(512,Tn.b,Tn.b,[]),u._66(512,Nn.b,Nn.b,[]),u._66(512,Gn.b,Gn.b,[]),u._66(512,zn.a,zn.a,[]),u._66(512,Dn.a,Dn.a,[]),u._66(512,Un.a,Un.a,[]),u._66(512,Jn.a,Jn.a,[]),u._66(512,Xn.b,Xn.b,[]),u._66(512,Qn.b,Qn.b,[]),u._66(512,Wn.a,Wn.a,[]),u._66(512,Kn.a,Kn.a,[]),u._66(512,Yn.a,Yn.a,[]),u._66(512,Zn.a,Zn.a,[]),u._66(512,$n.b,$n.b,[]),u._66(512,nl.b,nl.b,[]),u._66(512,ll.b,ll.b,[]),u._66(512,tl.b,tl.b,[]),u._66(512,ul.b,ul.b,[]),u._66(512,el.b,el.b,[]),u._66(512,ol.b,ol.b,[]),u._66(512,il.n,il.n,[]),u._66(512,al.a,al.a,[]),u._66(512,_l.a,_l.a,[]),u._66(512,rl.a,rl.a,[]),u._66(512,sl.a,sl.a,[]),u._66(512,cl.a,cl.a,[]),u._66(512,dl.a,dl.a,[]),u._66(512,e.a,e.a,[]),u._66(256,C.k,"XSRF-TOKEN",[]),u._66(256,C.l,"X-XSRF-TOKEN",[]),u._66(256,g.s,{overlapTrigger:!0,xPosition:"after",yPosition:"below"},[]),u._66(256,g.o,g.t,[]),u._66(256,V.c,void 0,[]),u._66(256,V.b,void 0,[]),u._66(256,pl.a,N.e,[])])})},673:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function AppModule(){}return AppModule}()},674:function(n,l,t){"use strict";function View_MainComponent_0(n){return e._79(0,[(n()(),e._51(0,null,null,6,"o-app-layout",[],null,null,null,o.b,o.a)),e._49(49152,null,0,i.a,[],null,null),(n()(),e._77(0,["\n  "])),(n()(),e._77(0,["\n  "])),(n()(),e._51(16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),e._49(212992,null,0,a.q,[a.b,e._20,e.q,[8,null],e.l],null,null),(n()(),e._77(0,["\n"]))],function(n,l){n(l,5,0)},null)}function View_MainComponent_Host_0(n){return e._79(0,[(n()(),e._51(0,null,null,1,"app-main",[],null,null,null,View_MainComponent_0,s)),e._49(114688,null,0,_.a,[],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return c});var u=t(675),e=t(0),o=t(676),i=t(114),a=t(7),_=t(189),r=[u.a],s=e._48({encapsulation:2,styles:r,data:{}}),c=e._46("app-main",_.a,View_MainComponent_Host_0,{},{},[])},675:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[".horizontal-container .o-container-content-item > .rounded-panel:first-child {\n  margin-right: 4px; }\n\n.horizontal-container .o-container-content-item > .rounded-panel:last-child {\n  margin-left: 4px; }\n\n.margin-right-24 {\n  margin-right: 24px; }\n\no-form o-form-toolbar.o-form-toolbar-floating {\n  top: 56px !important;\n  padding-top: 16px;\n  padding-bottom: 0px;\n  background: #eeeeee; }\n\no-form form:not(.form-no-toolbar) {\n  top: 66px !important; }\n\n.line-chart .nv-x.nv-axis .nv-axisMaxMin.nv-axisMaxMin-x.nv-axisMin-x text {\n  transform: translate(0px, 0px) rotate(-90deg); }\n\n.line-chart .nv-x.nv-axis .nvd3 text {\n  transform-origin: left;\n  transform: translate(-10px, 0px) rotate(-90deg); }\n\n.nvd3 text {\n  font: 400 12px 'Lato'; }\n\n.movement-types-cell-renderer {\n  font-weight: 700; }\n\n.o-container-title-item.container-title {\n  padding-bottom: 2px; }\n"]},682:function(n,l,t){"use strict";function View_LoginComponent_1(n){return e._79(0,[(n()(),e._51(0,null,null,3,"p",[["class","session-expired"]],null,null,null,null,null)),e._49(999424,null,0,o.c,[o.m,e.v,e._2,e._1,e.G,e.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),e._77(null,["",""])),e._70(0,i.b,[e.E])],function(n,l){n(l,1,0,"session-expired")},function(n,l){n(l,2,0,e._78(l,2,0,e._68(l,3).transform("ERROR_SESSION_EXPIRED")))})}function View_LoginComponent_0(n){return e._79(0,[(n()(),e._51(0,null,null,108,"div",[["class","login-outer-container"],["fxFill",""],["fxLayout","row"],["fxLayoutAlign","center center"]],null,null,null,null,null)),e._49(737280,null,0,o.i,[o.m,e.v,e._2],{layout:[0,"layout"]},null),e._49(737280,null,0,o.h,[o.m,e.v,e._2,[2,o.i]],{align:[0,"align"]},null),e._49(737280,null,0,o.f,[o.m,e.v,e._2],null,null),e._49(999424,null,0,o.c,[o.m,e.v,e._2,e._1,e.G,e.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),e._77(null,["\n\n  "])),(n()(),e._51(0,null,null,101,"div",[["class","login-inner-container md-whiteframe-1dp"],["fxLayout","column"],["fxLayoutAlign","center"]],null,null,null,null,null)),e._49(737280,null,0,o.i,[o.m,e.v,e._2],{layout:[0,"layout"]},null),e._49(737280,null,0,o.h,[o.m,e.v,e._2,[2,o.i]],{align:[0,"align"]},null),e._49(999424,null,0,o.c,[o.m,e.v,e._2,e._1,e.G,e.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),e._77(null,["\n\n    "])),(n()(),e._51(0,null,null,95,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var u=!0,o=n.component;if("submit"===l){u=!1!==e._68(n,13).onSubmit(t)&&u}if("reset"===l){u=!1!==e._68(n,13).onReset()&&u}if("ngSubmit"===l){u=!1!==o.login()&&u}return u},null,null)),e._49(16384,null,0,_.u,[],null,null),e._49(540672,null,0,_.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e._73(2048,null,_.c,null,[_.i]),e._49(16384,null,0,_.o,[_.c],null,null),(n()(),e._77(null,["\n\n      "])),(n()(),e._51(0,null,null,6,"div",[["class","logo-container md-whiteframe-4dp"],["fxLayout","column"],["fxLayoutAlign","center center"]],null,null,null,null,null)),e._49(737280,null,0,o.i,[o.m,e.v,e._2],{layout:[0,"layout"]},null),e._49(737280,null,0,o.h,[o.m,e.v,e._2,[2,o.i]],{align:[0,"align"]},null),e._49(999424,null,0,o.c,[o.m,e.v,e._2,e._1,e.G,e.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),e._77(null,["\n        "])),(n()(),e._51(0,null,null,0,"img",[["src","./assets/images/ontimize.png"]],null,null,null,null,null)),(n()(),e._77(null,["\n      "])),(n()(),e._77(null,["\n\n      "])),(n()(),e._45(16777216,null,null,1,null,View_LoginComponent_1)),e._49(16384,null,0,r.j,[e._20,e._14],{ngIf:[0,"ngIf"]},null),(n()(),e._77(null,["\n\n      "])),(n()(),e._51(0,null,null,22,"md-input-container",[["class","mat-input-container mat-form-field"],["fxFill",""]],[[2,"mat-input-invalid",null],[2,"mat-form-field-invalid",null],[2,"mat-focused",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"]],function(n,l,t){var u=!0;if("click"===l){u=!1!==e._68(n,31)._control.focus()&&u}return u},s.J,s.k)),e._49(737280,null,0,o.f,[o.m,e.v,e._2],null,null),e._49(16384,null,0,c._67,[[2,c.i],e.v],null,null),e._49(7389184,null,6,c._27,[e.v,e.l,[2,c.u]],null,null),e._74(335544320,1,{_control:0}),e._74(335544320,2,{_placeholderChild:0}),e._74(603979776,3,{_errorChildren:1}),e._74(603979776,4,{_hintChildren:1}),e._74(603979776,5,{_prefixChildren:1}),e._74(603979776,6,{_suffixChildren:1}),(n()(),e._77(1,["\n        "])),(n()(),e._51(0,[["user",1]],1,10,"input",[["class","mat-input mat-input-element"],["formControlName","username"],["id","username"],["mdInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"id",0],[8,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"aria-describedby",0],[1,"aria-invalid",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,l,t){var u=!0;if("input"===l){u=!1!==e._68(n,41)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==e._68(n,41).onTouched()&&u}if("compositionstart"===l){u=!1!==e._68(n,41)._compositionStart()&&u}if("compositionend"===l){u=!1!==e._68(n,41)._compositionEnd(t.target.value)&&u}if("blur"===l){u=!1!==e._68(n,47)._focusChanged(!1)&&u}if("focus"===l){u=!1!==e._68(n,47)._focusChanged(!0)&&u}if("input"===l){u=!1!==e._68(n,47)._onInput()&&u}return u},null,null)),e._49(999424,null,0,o.c,[o.m,e.v,e._2,e._1,e.G,e.H,[8,null]],{classBase:[0,"classBase"]},null),e._49(16384,null,0,_.d,[e._2,e.v,[2,_.a]],null,null),e._73(1024,null,_.l,function(n){return[n]},[_.d]),e._49(671744,null,0,_.g,[[3,_.c],[8,null],[8,null],[2,_.l]],{name:[0,"name"]},null),e._73(2048,null,_.m,null,[_.g]),e._49(16384,null,0,_.n,[_.m],null,null),e._49(16384,null,0,c._67,[[2,c.i],e.v],null,null),e._49(933888,null,0,c._40,[e.v,e._2,d.a,[2,_.m],[2,_.p],[2,_.i],[2,c.r]],{id:[0,"id"],placeholder:[1,"placeholder"]},null),e._70(0,i.b,[e.E]),e._73(2048,[[1,4]],c._28,null,[c._40]),(n()(),e._77(1,["\n      "])),(n()(),e._77(null,["\n\n      "])),(n()(),e._51(0,null,null,22,"md-input-container",[["class","mat-input-container mat-form-field"],["fxFill",""]],[[2,"mat-input-invalid",null],[2,"mat-form-field-invalid",null],[2,"mat-focused",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"]],function(n,l,t){var u=!0;if("click"===l){u=!1!==e._68(n,55)._control.focus()&&u}return u},s.J,s.k)),e._49(737280,null,0,o.f,[o.m,e.v,e._2],null,null),e._49(16384,null,0,c._67,[[2,c.i],e.v],null,null),e._49(7389184,null,6,c._27,[e.v,e.l,[2,c.u]],null,null),e._74(335544320,7,{_control:0}),e._74(335544320,8,{_placeholderChild:0}),e._74(603979776,9,{_errorChildren:1}),e._74(603979776,10,{_hintChildren:1}),e._74(603979776,11,{_prefixChildren:1}),e._74(603979776,12,{_suffixChildren:1}),(n()(),e._77(1,["\n        "])),(n()(),e._51(0,[["password",1]],1,10,"input",[["class","mat-input mat-input-element"],["formControlName","password"],["id","password"],["mdInput",""],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[8,"id",0],[8,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"aria-describedby",0],[1,"aria-invalid",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,l,t){var u=!0;if("input"===l){u=!1!==e._68(n,65)._handleInput(t.target.value)&&u}if("blur"===l){u=!1!==e._68(n,65).onTouched()&&u}if("compositionstart"===l){u=!1!==e._68(n,65)._compositionStart()&&u}if("compositionend"===l){u=!1!==e._68(n,65)._compositionEnd(t.target.value)&&u}if("blur"===l){u=!1!==e._68(n,71)._focusChanged(!1)&&u}if("focus"===l){u=!1!==e._68(n,71)._focusChanged(!0)&&u}if("input"===l){u=!1!==e._68(n,71)._onInput()&&u}return u},null,null)),e._49(999424,null,0,o.c,[o.m,e.v,e._2,e._1,e.G,e.H,[8,null]],{classBase:[0,"classBase"]},null),e._49(16384,null,0,_.d,[e._2,e.v,[2,_.a]],null,null),e._73(1024,null,_.l,function(n){return[n]},[_.d]),e._49(671744,null,0,_.g,[[3,_.c],[8,null],[8,null],[2,_.l]],{name:[0,"name"]},null),e._73(2048,null,_.m,null,[_.g]),e._49(16384,null,0,_.n,[_.m],null,null),e._49(16384,null,0,c._67,[[2,c.i],e.v],null,null),e._49(933888,null,0,c._40,[e.v,e._2,d.a,[2,_.m],[2,_.p],[2,_.i],[2,c.r]],{id:[0,"id"],placeholder:[1,"placeholder"],type:[2,"type"]},null),e._70(0,i.b,[e.E]),e._73(2048,[[7,4]],c._28,null,[c._40]),(n()(),e._77(1,["\n      "])),(n()(),e._77(null,["\n\n      "])),(n()(),e._51(0,null,null,5,"button",[["class","mat-raised-button"],["color","primary"],["md-raised-button",""],["type","submit"]],[[8,"disabled",0]],null,null,s.E,s.f)),e._49(16384,null,0,c._67,[[2,c.i],e.v],null,null),e._49(180224,null,0,c.H,[e._2,e.v,d.a,c.f],{color:[0,"color"]},null),e._49(16384,null,0,c._78,[],null,null),(n()(),e._77(0,["",""])),e._70(0,i.b,[e.E]),(n()(),e._77(null,["\n      "])),(n()(),e._51(0,null,null,0,"div",[["layout-padding",""]],null,null,null,null,null)),(n()(),e._77(null,["\n      "])),(n()(),e._51(0,null,null,0,"div",[["layout-padding",""]],null,null,null,null,null)),(n()(),e._77(null,["\n      "])),(n()(),e._51(0,null,null,18,"div",[["fxLayout","column"],["fxLayoutAlign","center center"],["layout-padding",""]],null,null,null,null,null)),e._49(737280,null,0,o.i,[o.m,e.v,e._2],{layout:[0,"layout"]},null),e._49(737280,null,0,o.h,[o.m,e.v,e._2,[2,o.i]],{align:[0,"align"]},null),(n()(),e._77(null,["\n        "])),(n()(),e._51(0,null,null,3,"span",[["class","title_text"]],null,null,null,null,null)),e._49(999424,null,0,o.c,[o.m,e.v,e._2,e._1,e.G,e.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),e._77(null,["",":"])),e._70(0,i.b,[e.E]),(n()(),e._77(null,["\n        "])),(n()(),e._51(0,null,null,3,"span",[["class","dark_text"]],null,null,null,null,null)),e._49(999424,null,0,o.c,[o.m,e.v,e._2,e._1,e.G,e.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),e._77(null,[""," : demo"])),e._70(0,i.b,[e.E]),(n()(),e._77(null,["\n        "])),(n()(),e._51(0,null,null,3,"span",[["class","dark_text"]],null,null,null,null,null)),e._49(999424,null,0,o.c,[o.m,e.v,e._2,e._1,e.G,e.H,[8,null]],{classBase:[0,"classBase"]},null),(n()(),e._77(null,[""," : demouser"])),e._70(0,i.b,[e.E]),(n()(),e._77(null,["\n      "])),(n()(),e._77(null,["\n    "])),(n()(),e._77(null,["\n\n  "])),(n()(),e._77(null,["\n\n"]))],function(n,l){var t=l.component;n(l,1,0,"row");n(l,2,0,"center center"),n(l,3,0);n(l,4,0,"login-outer-container");n(l,7,0,"column");n(l,8,0,"center");n(l,9,0,"login-inner-container md-whiteframe-1dp"),n(l,13,0,t.loginForm);n(l,18,0,"column");n(l,19,0,"center center");n(l,20,0,"logo-container md-whiteframe-4dp"),n(l,26,0,t.sessionExpired),n(l,29,0);n(l,40,0,"mat-input");n(l,43,0,"username");n(l,47,0,"username",e._56(1,"",e._78(l,47,1,e._68(l,48).transform("USERNAME")),"")),n(l,53,0);n(l,64,0,"mat-input");n(l,67,0,"password");n(l,71,0,"password",e._56(1,"",e._78(l,71,1,e._68(l,72).transform("PASSWORD")),""),"password");n(l,78,0,"primary");n(l,88,0,"column");n(l,89,0,"center center");n(l,92,0,"title_text");n(l,97,0,"dark_text");n(l,102,0,"dark_text")},function(n,l){n(l,11,0,e._68(l,15).ngClassUntouched,e._68(l,15).ngClassTouched,e._68(l,15).ngClassPristine,e._68(l,15).ngClassDirty,e._68(l,15).ngClassValid,e._68(l,15).ngClassInvalid,e._68(l,15).ngClassPending),n(l,28,0,e._68(l,31)._control.errorState,e._68(l,31)._control.errorState,e._68(l,31)._control.focused,e._68(l,31)._shouldForward("untouched"),e._68(l,31)._shouldForward("touched"),e._68(l,31)._shouldForward("pristine"),e._68(l,31)._shouldForward("dirty"),e._68(l,31)._shouldForward("valid"),e._68(l,31)._shouldForward("invalid"),e._68(l,31)._shouldForward("pending")),n(l,39,1,[e._68(l,45).ngClassUntouched,e._68(l,45).ngClassTouched,e._68(l,45).ngClassPristine,e._68(l,45).ngClassDirty,e._68(l,45).ngClassValid,e._68(l,45).ngClassInvalid,e._68(l,45).ngClassPending,e._68(l,47).id,e._68(l,47).placeholder,e._68(l,47).disabled,e._68(l,47).required,e._68(l,47)._ariaDescribedby||null,e._68(l,47).errorState]),n(l,52,0,e._68(l,55)._control.errorState,e._68(l,55)._control.errorState,e._68(l,55)._control.focused,e._68(l,55)._shouldForward("untouched"),e._68(l,55)._shouldForward("touched"),e._68(l,55)._shouldForward("pristine"),e._68(l,55)._shouldForward("dirty"),e._68(l,55)._shouldForward("valid"),e._68(l,55)._shouldForward("invalid"),e._68(l,55)._shouldForward("pending")),n(l,63,1,[e._68(l,69).ngClassUntouched,e._68(l,69).ngClassTouched,e._68(l,69).ngClassPristine,e._68(l,69).ngClassDirty,e._68(l,69).ngClassValid,e._68(l,69).ngClassInvalid,e._68(l,69).ngClassPending,e._68(l,71).id,e._68(l,71).placeholder,e._68(l,71).disabled,e._68(l,71).required,e._68(l,71)._ariaDescribedby||null,e._68(l,71).errorState]),n(l,76,0,e._68(l,78).disabled||null),n(l,80,0,e._78(l,80,0,e._68(l,81).transform("LOGIN"))),n(l,93,0,e._78(l,93,0,e._68(l,94).transform("EXAMPLE_LOGIN_INFO"))),n(l,98,0,e._78(l,98,0,e._68(l,99).transform("USERNAME"))),n(l,103,0,e._78(l,103,0,e._68(l,104).transform("PASSWORD")))})}function View_LoginComponent_Host_0(n){return e._79(0,[(n()(),e._51(0,null,null,1,"login",[],null,null,null,View_LoginComponent_0,b)),e._49(114688,null,0,a.a,[p.a,e.R,p.m,m.a,g.a,e.E],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return h});var u=t(683),e=t(0),o=t(28),i=t(22),a=t(190),_=t(13),r=t(3),s=t(29),c=t(8),d=t(17),p=t(7),m=t(172),g=t(171),f=[u.a],b=e._48({encapsulation:2,styles:f,data:{}}),h=e._46("login",a.a,View_LoginComponent_Host_0,{},{},[])},683:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[".login-outer-container {\n  min-height: 640px !important; }\n  .login-outer-container .login-inner-container {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    width: 450px;\n    padding: 5em;\n    padding-top: 8em; }\n    .login-outer-container .login-inner-container h1 {\n      text-align: center;\n      margin-bottom: 30px; }\n    .login-outer-container .login-inner-container .logo-container {\n      border-radius: 50%;\n      width: 150px;\n      height: 150px;\n      position: absolute;\n      top: -75px;\n      left: 50%;\n      -webkit-transform: translate(-50%, 0%); }\n      .login-outer-container .login-inner-container .logo-container img {\n        max-height: 125px;\n        max-width: 125px; }\n    .login-outer-container .login-inner-container .session-expired {\n      text-align: center; }\n    .login-outer-container .login-inner-container button {\n      width: 100%;\n      margin: 30px 0px 0px 0px; }\n    .login-outer-container .login-inner-container .dark_text {\n      color: #c5c5c5;\n      font-size: 9pt; }\n    .login-outer-container .login-inner-container .title_text {\n      color: #7b7a79;\n      font-size: 10pt;\n      font-weight: bold; }\n"]},684:function(n,l,t){"use strict";function View_AppComponent_0(n){return e._79(0,[(n()(),e._51(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e._49(212992,null,0,o.q,[o.b,e._20,e.q,[8,null],e.l],null,null),(n()(),e._77(null,["\n"]))],function(n,l){n(l,1,0)},null)}function View_AppComponent_Host_0(n){return e._79(0,[(n()(),e._51(0,null,null,1,"o-app",[],null,null,null,View_AppComponent_0,_)),e._49(114688,null,0,i.a,[e.E],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return r});var u=t(685),e=t(0),o=t(7),i=t(418),a=[u.a],_=e._48({encapsulation:0,styles:a,data:{}}),r=e._46("o-app",i.a,View_AppComponent_Host_0,{},{},[])},685:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[""]},686:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var u=t(687),e=t(688),o={apiEndpoint:"https://try.ontimize.com/QSAllComponents-jee/services/rest",uuid:"com.ontimize.web.quickstart",title:"Ontimize Web Quickstart",locale:"es",serviceType:"OntimizeEE",servicesConfiguration:u.a,appMenuConfiguration:e.a,applicationLocales:["es","en"]}},687:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u={users:{path:"/users"},customers:{path:"/customers"},branches:{path:"/branches"},movements:{path:"/movements"},employees:{path:"/employees"}}},688:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=[{id:"home",name:"HOME",icon:"dashboard",route:"/main/home"},{id:"views",name:"VIEW",icon:"remove_red_eye",opened:!0,items:[{id:"customers",name:"CUSTOMERS",route:"/main/customers",icon:"people"},{id:"accounts",name:"ACCOUNTS",route:"/main/accounts",icon:"credit_card"},{id:"branches",name:"BRANCHES",route:"/main/branches",icon:"account_balance"},{id:"employees",name:"EMPLOYEES",route:"/main/employees",icon:"person"}]},{id:"general",name:"GENERAL",icon:"info_outline",opened:!1,items:[{id:"about",name:"ABOUT",route:"/main/about",icon:"help_outline"}]}]},689:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var u=t(70),e=t(189),o=(e.a,u.c,function(){function MainRoutingModule(){}return MainRoutingModule}())},690:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function MainModule(){}return MainModule}()},691:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t(190),e=(u.a,function(){function LoginRoutingModule(){}return LoginRoutingModule}())},692:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function LoginModule(){}return LoginModule}()},693:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t(70),e=(u.c,function(){function AppRoutingModule(){}return AppRoutingModule}())}},[431]);