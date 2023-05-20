import{I as B,E as G,A as R}from"./AppLayout.ab6fc550.js";import{N as Z}from"./NewsBox.609db213.js";import{S as X}from"./ShoutBox.3d9e04fd.js";import{D as ee,a as te}from"./DidYouKnowBox.ef278161.js";import{_ as k,p as d,v as $,o as n,d as a,a as t,t as r,b as h,w as m,J as M,x,f as y,e as l,F as w,h as S,n as C,c as v,a5 as se,Z as A,a6 as oe,z as I,l as j,y as re,m as ne,Y as ie,r as ae,g as le,L as ce}from"./app.81fb595a.js";import{S as de,P as ue}from"./SocialChannelBox.d9ef1e90.js";import{_ as D}from"./AlertCard.c328d0b4.js";import{_ as _e}from"./DialogModal.2fbdb19e.js";import{_ as he}from"./SecondaryButton.64a2ae5c.js";import{L as ge}from"./LoadingButton.dd047846.js";import{S as ye}from"./ServerStatusBox.5e94e4e7.js";import{P as pe}from"./PollBox.f3d293dc.js";import{_ as me}from"./CopyToClipboard.4358cfcf.js";import"./InfiniteScroll.5f4923e0.js";import"./InputError.c146dc04.js";import"./Post.a3dba857.js";import"./UserDisplayname.ca7a7eed.js";import"./Modal.84cfdaa8.js";const fe={props:{user:Object,enabled:Boolean}},be={key:0},xe={class:"p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2"},ve={class:"font-extrabold text-gray-800 dark:text-gray-200"},ke=["src"],we={class:"flex flex-col"},Se={class:"break-all"},Le={class:"text-gray-500 dark:text-gray-400"},$e=["title"];function Ce(e,i,s,p,o,u){const b=d("inertia-link"),g=$("tippy");return s.enabled&&s.user?(n(),a("div",be,[t("div",xe,[t("h3",ve,r(e.__("Newest User")),1),h(b,{as:"div",href:e.route("user.public.get",s.user.username),class:"cursor-pointer flex space-x-2 border dark:border-gray-700 rounded-tl-md rounded-tr-xl rounded-b-3xl p-2 items-center hover:border-light-blue-400 dark:hover:border-light-blue-400"},{default:m(()=>[t("img",{class:"w-14 h-14 rounded-full",src:s.user.profile_photo_url,alt:"Avatar"},null,8,ke),t("div",we,[t("div",Se,[t("span",{class:"text-gray-800 dark:text-gray-300 font-semibold",style:M([s.user.roles[0].color?{color:s.user.roles[0].color}:null])},r(s.user.name),5),t("span",Le,"@"+r(s.user.username),1)]),x((n(),a("span",{class:"text-sm text-gray-700 dark:text-gray-500 focus:outline-none",title:e.formatToDayDateString(s.user.created_at)},[y(r(e.__("Joined"))+"\xA0"+r(e.formatTimeAgoToNow(s.user.created_at)),1)],8,$e)),[[g]])])]),_:1},8,["href"])])])):l("",!0)}const Pe=k(fe,[["render",Ce]]),Ae={props:{votingsites:Array,enabled:Boolean}},Ie={key:0},Me={class:"p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2"},je={class:"font-extrabold text-gray-800 dark:text-gray-200"},Be={class:"rounded text-sm text-gray-600 dark:text-gray-400 text-center p-1"},Te={class:"flex flex-col space-y-2"},De=["content"],Ne=["href"];function Ee(e,i,s,p,o,u){const b=$("tippy");return s.enabled&&s.votingsites&&s.votingsites.length>0?(n(),a("div",Ie,[t("div",Me,[t("h3",je,r(e.__("Vote for Server")),1),t("p",Be,r(e.__("Vote on these sites and win rewards!")),1),t("div",Te,[(n(!0),a(w,null,S(s.votingsites,(g,f)=>(n(),a("div",{key:f,class:"rounded flex justify-between items-center p-2 bg-gray-100 dark:bg-cool-gray-900"},[x((n(),a("div",{content:g.url,class:"text-gray-500 dark:text-gray-300 text-sm font-bold focus:outline-none"},[y(r(g.name),1)],8,De)),[[b]]),t("div",null,[t("a",{target:"_blank",class:"rounded tracking-wider text-sm px-2 py-1 text-gray-500 dark:text-gray-300 bg-white dark:bg-cool-gray-800 shadow hover:shadow-md",href:g.url},r(e.__("Vote")),9,Ne)])]))),128))])])])):l("",!0)}const Ve=k(Ae,[["render",Ee]]),Qe={props:["htmlData"]},Ue={key:0},He={class:"bg-white dark:bg-cool-gray-800 rounded px-4 py-3 shadow"},Oe=["innerHTML"];function ze(e,i,s,p,o,u){return s.htmlData?(n(),a("div",Ue,[t("div",He,[t("div",{class:"prose dark:prose-dark max-w-none text-center",innerHTML:s.htmlData},null,8,Oe)])])):l("",!0)}const Fe=k(Qe,[["render",ze]]),qe={components:{Icon:B},props:{newslist:Array}},Ye={key:0,class:"space-y-4"},We={class:"bg-white dark:bg-cool-gray-800 rounded shadow flex justify-between"},Je={class:"p-3 sm:px-5"},Ke={class:"text-xl"},Ge={class:"mb-1"},Re=["content"],Ze={class:"text-sm text-gray-500 dark:text-gray-400 font-light leading-snug"},Xe=["innerHTML"],et=["src"];function tt(e,i,s,p,o,u){const b=d("icon"),g=d("inertia-link"),f=$("tippy");return s.newslist&&s.newslist.length>0?(n(),a("div",Ye,[(n(!0),a(w,null,S(s.newslist,c=>(n(),a("div",We,[t("div",Je,[t("div",Ke,[t("p",Ge,[x(h(b,{title:e.__("Pinned News"),class:"inline text-gray-400 focus:outline-none",name:"paper-clip"},null,8,["title"]),[[f]]),t("span",{class:C(["font-semibold uppercase text-sm tracking-wider",{"text-light-blue-400":c.type.value===0,"text-orange-500":c.type.value===1,"text-green-500":c.type.value===2}])},"\xA0"+r(c.type.key)+"\xA0",3),x((n(),a("span",{content:e.formatToDayDateString(c.published_at),class:"focus:outline-none text-sm text-gray-500 dark:text-gray-400 font-light leading-snug"},[y(r(e.formatTimeAgoToNow(c.published_at)),1)],8,Re)),[[f]]),t("span",Ze," - "+r(c.time_to_read)+" read",1)]),h(g,{href:e.route("news.show",c.slug),class:"hover:text-light-blue-400 dark:text-gray-200 dark:hover:text-light-blue-400 duration-200"},{default:m(()=>[y(r(c.title),1)]),_:2},1032,["href"])]),t("div",{class:"mt-3 text-gray-500 dark:text-gray-400",innerHTML:c.body_md},null,8,Xe)]),c.photo_url?(n(),a("img",{key:0,class:"h-auto w-2/5 object-cover object-center",src:c.photo_url,alt:"News Image"},null,8,et)):l("",!0)]))),256))])):l("",!0)}const st=k(qe,[["render",tt]]),ot={components:{AlertCard:D},data(){return{response:{},loading:!0}},created(){axios.get(route("version.check")).then(e=>{this.response=e.data}).finally(()=>{this.loading=!1})}},rt={key:0,ref:"box"},nt={class:"text-gray-700 dark:text-gray-200"},it={class:"text-red-500"},at={class:"text-green-500"},lt=t("br",null,null,-1),ct={class:"text-light-blue-500 hover:underline",target:"_blank",href:"https://minetrax.github.io/docs/upgrade"},dt={class:"text-xs text-gray-500 italic mt-2"};function ut(e,i,s,p,o,u){const b=d("AlertCard");return!o.loading&&o.response&&o.response.is_uptodate===!1?(n(),a("div",rt,[h(b,{"text-color":"text-red-800 dark:text-red-500","border-color":"border-red-500"},{body:m(()=>[t("div",nt,[y(r(e.__("Your current MineTrax version is"))+"\xA0",1),t("span",it,r(o.response.my_version),1),y("\xA0"+r(e.__("while the latest version is"))+"\xA0",1),t("span",at,r(o.response.latest_version),1),y(". "+r(e.__("Please upgrade to enjoy latest features."))+" ",1),lt,t("a",ct,r(e.__("Click here to know more.")),1),t("p",dt,r(e.__("Note: This box is only visible to Staff Member")),1)])]),default:m(()=>[y(r(e.__("Your MineTrax Version is Outdated!"))+" ",1)]),_:1})],512)):l("",!0)}const _t=k(ot,[["render",ut]]),ht={components:{ErrorMessage:G},props:{server:Object},data(){return{serverInfo:Object,playersList:Object,loading:!0,error:null,sizeClass:"w-5 h-5",interval:null}},computed:{enabled(){return this.$page.props.generalSettings.enable_mcserver_onlineplayersbox?!!(this.server||this.$page.props.defaultQueryServer):!1}},created(){!this.enabled||(this.getServerQuery(),this.interval=setInterval(()=>this.getServerQuery(),1e4))},unmounted(){clearInterval(this.interval)},methods:{getServerQuery(){let e=this.server;e||(e=this.$page.props.defaultQueryServer),axios.get(route("server.query.get",e.id)).then(i=>{this.serverInfo=i.data.server_info,this.playersList=i.data.players_list;for(let s in this.playersList)this.playersList[s]||(this.playersList[s]="00000000-0000-0000-0000-000000000000");this.error=null,Object.keys(this.playersList).length<=5&&(this.sizeClass="w-8 h-8")}).catch(i=>{this.error=i.response.data.message||i.message,this.serverInfo=null,this.playersList=null}).finally(()=>{this.loading=!1})}}},gt={key:0},yt={class:"p-3 sm:px-5 bg-white dark:bg-gray-800 rounded shadow"},pt={class:"font-extrabold text-gray-800 dark:text-gray-200"},mt={key:0,class:"float-right text-green-500 font-semibold"},ft={key:0,class:"flex p-4 justify-center"},bt=t("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-light-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),xt=[bt],vt={key:2,class:"mt-3 text-gray-500 flex flex-wrap justify-center"},kt=["title","src","alt"],wt={key:3,class:"italic p-1 rounded text-center text-gray-400"};function St(e,i,s,p,o,u){const b=d("error-message"),g=$("tippy");return u.enabled?(n(),a("div",gt,[t("div",yt,[t("h3",pt,[y(r(e.__("Online Players"))+" ",1),!o.loading&&!o.error?(n(),a("span",mt,r(o.serverInfo.Players)+" / "+r(o.serverInfo.MaxPlayers),1)):l("",!0)]),o.loading?(n(),a("div",ft,xt)):l("",!0),o.error?(n(),v(b,{key:1},{default:m(()=>[y(r(o.error),1)]),_:1})):l("",!0),!o.loading&&!o.error?(n(),a("div",vt,[(n(!0),a(w,null,S(o.playersList,(f,c)=>(n(),a("div",{key:f,class:C(["flex-shrink-0 mr-1 mb-1",o.sizeClass])},[x(t("img",{title:c,src:e.route("player.avatar.get",{uuid:f,username:c,size:50}),alt:c,class:C(["focus:outline-none",o.sizeClass])},null,10,kt),[[g]])],2))),128))])):l("",!0),!o.error&&(!o.playersList||o.playersList.length<=0)?(n(),a("div",wt,r(e.__("No players online.")),1)):l("",!0)])])):l("",!0)}const Lt=k(ht,[["render",St]]),$t={components:{Icon:B,JetDialogModal:_e,JetSecondaryButton:he,LoadingButton:ge},props:{defaultServerId:Number,serverList:Array},data(){return{serverId:this.defaultServerId,chatLogs:[],message:"",loading:!0,error:null,sending:!1,playersList:[],playersListLoading:!0,shouldDisplayPlayerList:!0,playerListQueryInterval:null,showAdminPlayerActionModel:!1,actionModelCurrentPlayer:null,adminPlayerActionLoading:!1,adminPlayerActionError:null,format:se,isWebQuerySuccess:!1,chatListQueryInterval:null}},computed:{enabled(){return this.$page.props.generalSettings.enable_ingamechat?!!this.defaultServerId:!1}},watch:{serverId:function(e,i){A?Echo.leaveChannel("chatlogs."+i):clearInterval(this.chatListQueryInterval),this.serverId=e,this.getChatListForServer(e),clearInterval(this.playerListQueryInterval),this.getPlayerListForServer(e),this.playerListQueryInterval=setInterval(()=>this.getPlayerListForServer(e),1e4)}},created(){!this.enabled||(this.getChatListForServer(this.serverId),this.getPlayerListForServer(this.serverId),this.playerListQueryInterval=setInterval(()=>this.getPlayerListForServer(this.serverId),1e4))},unmounted(){A?Echo.leave("chatlogs."+this.serverId):clearInterval(this.chatListQueryInterval),clearInterval(this.playerListQueryInterval)},methods:{postSendMessage(){this.sending=!0,this.error=null,axios.post(route("chatlog.send",this.serverId),{message:this.message}).then(()=>{}).catch(e=>{e.response.status===422?this.error=Object.values(e.response.data.errors)[0][0]:e.response.status===403?this.error=e.response.data.message:this.error=e.response.statusText}).finally(()=>{this.message="",this.sending=!1,this.$nextTick(()=>{this.$refs.inputbox.focus(),this.pollServerForNewChat(this.serverId)})})},getChatListForServer(e){this.loading=!0,this.chatLogs=[],axios.get(route("chatlog.index",e)).then(i=>{this.chatLogs=i.data.reverse()}).finally(()=>{this.loading=!1,this.$nextTick(()=>{let i=this.$el.querySelector("#chatbox").scrollHeight;this.$el.querySelector("#chatbox").scrollTo(0,i)})}),A?Echo.channel("chatlogs."+e).listen("ServerChatlogCreated",i=>{this.chatLogs.push(i.data),this.$nextTick(()=>{let s=this.$el.querySelector("#chatbox").scrollHeight;this.$el.querySelector("#chatbox").scrollTo(0,s)})}):this.chatListQueryInterval=setInterval(()=>this.pollServerForNewChat(this.serverId),6e3)},pollServerForNewChat(e){if(A)return;let i=this.chatLogs.length>0?this.chatLogs[this.chatLogs.length-1].id:0;axios.get(route("chatlog.index",{server:e,after:i})).then(s=>{const p=s.data.reverse();p.length>0&&(this.chatLogs=this.chatLogs.concat(p),this.$nextTick(()=>{let o=this.$el.querySelector("#chatbox").scrollHeight;this.$el.querySelector("#chatbox").scrollTo(0,o)}))})},getPlayerListForServer(e){axios.get(route("server.webquery.get",e)).then(i=>{this.playersList=i.data,this.isWebQuerySuccess=!0}).catch(()=>{this.shouldDisplayPlayerList=!1,this.isWebQuerySuccess=!1}).finally(()=>{this.playersListLoading=!1})},openAdminPlayerActionModel(e){this.showAdminPlayerActionModel=!0,this.actionModelCurrentPlayer=e},closeAdminPlayerActionModel(){this.showAdminPlayerActionModel=!1,this.actionModelCurrentPlayer=null},sendCommandToServer(e){this.adminPlayerActionLoading=!0;let i=null,s={type:null,params:null,context:null};switch(e){case"kill":s.type="kill",s.params=this.actionModelCurrentPlayer.username,s.context="player";break;case"mute":if(i=prompt(this.__("Give any reason if muting? Note: ALWAYS LEAVE IT BLANK IF UN-MUTING")),i===null)break;s.type="mute",i?s.params=this.actionModelCurrentPlayer.username+" "+i:s.params=this.actionModelCurrentPlayer.username,s.context="player";break;case"kick":if(i=prompt(this.__("Any reason for kicking this player?")),i===null)break;s.type="kick",s.params=this.actionModelCurrentPlayer.username+" "+i,s.context="player";break;case"ban":if(i=prompt(this.__("Any reason for banning this player?")),i===null)break;s.type="ban",s.params=this.actionModelCurrentPlayer.username+" "+i,s.context="player";break}if(s.type===null){this.adminPlayerActionLoading=!1;return}axios.post(route("admin.server.command",this.serverId),s).then(()=>{this.closeAdminPlayerActionModel()}).catch(p=>{this.adminPlayerActionError=p.message}).finally(()=>{this.adminPlayerActionLoading=!1})}}},Ct={key:0},Pt={class:"p-3 bg-white rounded shadow sm:px-5 dark:bg-cool-gray-800"},At={class:"flex justify-between"},It={class:"font-extrabold text-gray-800 dark:text-gray-200"},Mt=["value"],jt={class:"flex flex-col"},Bt={key:0,class:"space-y-2"},Tt=ne('<div class="w-full"><div class="flex space-x-4 animate-pulse"><div class="flex-1 py-1 space-y-1"><div class="w-3/4 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div><div class="w-5/6 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div></div></div></div><div class="w-full"><div class="flex space-x-4 animate-pulse"><div class="flex-1 py-1 space-y-1"><div class="w-3/4 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div><div class="w-5/6 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div></div></div></div><div class="w-full"><div class="flex space-x-4 animate-pulse"><div class="flex-1 py-1 space-y-1"><div class="w-3/4 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div><div class="w-5/6 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div></div></div></div>',3),Dt=[Tt],Nt={id:"chat-container",class:"relative flex flex-col-reverse justify-between p-1 mt-1 text-white bg-white rounded md:flex-row dark:bg-cool-gray-900"},Et={id:"chatbox",class:"flex flex-col overflow-auto text-sm max-h-96 hide-scrollbar invert dark:invert-0"},Vt=["title","innerHTML"],Qt={key:0,class:"flex items-center justify-center w-full h-full text-sm italic text-gray-500"},Ut={id:"player-list",class:"sticky flex justify-end overflow-auto text-sm bg-gray-100 bg-opacity-100 rounded dark:bg-cool-gray-800 max-h-96 min-w-max hide-scrollbar"},Ht={class:"flex flex-col w-full space-y-1"},Ot={class:"relative flex items-center justify-center p-2 bg-gray-100 dark:bg-opacity-25 dark:bg-cool-gray-600"},zt={class:"ml-4 mr-5 font-bold text-gray-700 dark:text-gray-200"},Ft={class:"flex space-x-1 truncate"},qt=["src"],Yt={id:"right",class:"flex items-center justify-center space-x-1"},Wt=["title","src","alt"],Jt=["onClick"],Kt={key:1,class:"mt-1"},Gt=["disabled","placeholder"],Rt={key:1,class:"text-xs text-red-400"},Zt={key:2,class:"flex justify-end mt-2 text-xs text-gray-500 dark:text-gray-400"},Xt={key:2,class:"mt-2 text-sm text-center text-gray-600 dark:text-gray-400"},es={key:0,class:"flex flex-col items-center font-bold"},ts={class:"text-gray-800 underline"},ss=["src"],os={class:"text-light-blue-600"},rs={class:"text-xs text-gray-600"},ns={class:"flex justify-center space-x-2"},is={key:0,class:"flex justify-center p-1 mt-2 text-sm text-red-500 bg-red-100 border border-red-500"};function as(e,i,s,p,o,u){const b=d("inertia-link"),g=d("icon"),f=d("loading-button"),c=d("jet-secondary-button"),L=d("jet-dialog-modal"),P=$("tippy");return u.enabled?(n(),a("div",Ct,[t("div",Pt,[t("div",At,[t("h3",It,r(e.__("Server In-Game Chat")),1),s.serverList&&s.serverList.length>1?x((n(),a("select",{key:0,id:"serverSelector","onUpdate:modelValue":i[0]||(i[0]=_=>o.serverId=_),"aria-label":"serverSelector",name:"serverSelector",class:"text-xs border-gray-300 rounded-md shadow-sm focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"},[(n(!0),a(w,null,S(s.serverList,_=>(n(),a("option",{key:_.id,value:_.id},r(_.name),9,Mt))),128))],512)),[[oe,o.serverId]]):l("",!0)]),t("div",jt,[o.loading?(n(),a("div",Bt,Dt)):l("",!0),x(t("div",Nt,[x(t("button",{class:"absolute top-0 right-0 mt-1 mr-2 font-semibold text-green-400",type:"button",onClick:i[1]||(i[1]=_=>o.shouldDisplayPlayerList=!o.shouldDisplayPlayerList)}," [+] ",512),[[I,!o.shouldDisplayPlayerList]]),t("div",Et,[(n(!0),a(w,null,S(o.chatLogs,_=>x((n(),a("p",{key:_.id,title:e.formatToDayDateString(_.created_at),class:"focus:outline-none",innerHTML:_.data},null,8,Vt)),[[P]])),128)),!o.chatLogs||o.chatLogs.length<=0?(n(),a("div",Qt,r(e.__("No chat recorded yet!")),1)):l("",!0)]),x(t("div",Ut,[t("div",Ht,[t("div",Ot,[t("h3",zt,r(e.__("Players"))+"\xA0("+r(o.playersList.length)+") ",1),t("button",{class:"absolute right-0 mr-2 font-semibold text-red-500 dark:text-red-400",type:"button",onClick:i[2]||(i[2]=_=>o.shouldDisplayPlayerList=!o.shouldDisplayPlayerList)}," [-] ")]),(n(!0),a(w,null,S(o.playersList,_=>(n(),a("div",{key:_.id,class:"flex justify-between mx-1"},[t("div",Ft,[t("img",{class:"h-5",src:e.route("player.avatar.get",{uuid:_.id,username:_.username,size:50}),alt:"Player Avatar"},null,8,qt),_.is_in_db?(n(),v(b,{key:0,href:e.route("player.show",_.id)},{default:m(()=>[t("span",{class:C(["mr-1 font-semibold truncate text-gray-800 dark:text-white",{"text-orange-500 dark:text-yellow-300":_.is_op}])},r(_.username),3)]),_:2},1032,["href"])):(n(),a("span",{key:1,class:C(["mr-1 truncate text-gray-800 dark:text-white",{"text-orange-500 dark:text-yellow-300":_.is_op}])},r(_.username),3))]),t("div",Yt,[x(t("img",{class:"h-5",title:_.country.name,src:_.country.photo_path,alt:_.country.name},null,8,Wt),[[P]]),e.$page.props.user&&e.$page.props.user.is_staff?(n(),a("a",{key:0,class:"text-gray-400 cursor-pointer hover:text-gray-200",href:"#",onClick:j(T=>u.openAdminPlayerActionModel(_),["prevent"])},[h(g,{name:"cog",class:"w-4 h-4"})],8,Jt)):l("",!0)])]))),128))])],512),[[I,!o.playersListLoading&&o.shouldDisplayPlayerList]])],512),[[I,!o.loading]]),e.$page.props.user?(n(),a("div",Kt,[t("form",{onSubmit:i[4]||(i[4]=j((..._)=>u.postSendMessage&&u.postSendMessage(..._),["prevent"]))},[o.loading?l("",!0):x((n(),a("input",{key:0,ref:"inputbox","onUpdate:modelValue":i[3]||(i[3]=_=>o.message=_),disabled:o.sending||!o.isWebQuerySuccess,"aria-label":"Shout",class:"block w-full mt-1 bg-gray-100 border-none rounded-md focus:ring-gray-300 dark:focus:ring-gray-700 sm:text-sm disabled:opacity-50 dark:bg-cool-gray-900 dark:text-gray-200 focus:bg-white",type:"text",placeholder:o.isWebQuerySuccess?e.__("Say something.."):e.__("Server webquery is offline")},null,8,Gt)),[[re,o.message]]),o.error?(n(),a("span",Rt,r(o.error),1)):l("",!0),!o.loading&&e.can("send server_custom_commands")?(n(),a("span",Zt,r(e.__("Start with / to send a console command")),1)):l("",!0)],32)])):(n(),a("div",Xt,[h(b,{class:"font-semibold text-light-blue-500",href:e.route("login")},{default:m(()=>[y(r(e.__("Login")),1)]),_:1},8,["href"]),e.$page.props.hasRegistrationFeature?(n(),a(w,{key:0},[y(r(" "+e.__("or"))+" ",1),h(b,{class:"font-semibold text-light-blue-500",href:e.route("register")},{default:m(()=>[y(r(e.__("Register")),1)]),_:1},8,["href"])],64)):l("",!0),y(" "+r(e.__("to chat with In-Game Players")),1)]))])]),h(L,{show:o.showAdminPlayerActionModel,onClose:u.closeAdminPlayerActionModel},{title:m(()=>[o.actionModelCurrentPlayer?(n(),a("div",es,[t("span",ts,r(e.__("Manage Player")),1),t("img",{class:"h-24 rounded",src:e.route("player.avatar.get",{uuid:o.actionModelCurrentPlayer.id,username:o.actionModelCurrentPlayer.username}),alt:"Player Avatar"},null,8,ss),t("span",os,r(o.actionModelCurrentPlayer.username),1),t("span",rs,r(o.actionModelCurrentPlayer.id),1)])):l("",!0)]),content:m(()=>[t("div",ns,[e.can("kill players")?(n(),v(f,{key:0,loading:o.adminPlayerActionLoading,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50",type:"button",onClick:i[5]||(i[5]=_=>u.sendCommandToServer("kill"))},{default:m(()=>[y(r(e.__("Kill")),1)]),_:1},8,["loading"])):l("",!0),e.can("mute players")?(n(),v(f,{key:1,loading:o.adminPlayerActionLoading,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200 disabled:opacity-50",type:"button",onClick:i[6]||(i[6]=_=>u.sendCommandToServer("mute"))},{default:m(()=>[y(r(e.__("Mute"))+" / "+r(e.__("UnMute")),1)]),_:1},8,["loading"])):l("",!0),e.can("kick players")?(n(),v(f,{key:2,loading:o.adminPlayerActionLoading,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50",type:"button",onClick:i[7]||(i[7]=_=>u.sendCommandToServer("kick"))},{default:m(()=>[y(r(e.__("Kick")),1)]),_:1},8,["loading"])):l("",!0),e.can("ban players")?(n(),v(f,{key:3,loading:o.adminPlayerActionLoading,class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50",type:"button",onClick:i[8]||(i[8]=_=>u.sendCommandToServer("ban"))},{default:m(()=>[y(r(e.__("Ban")),1)]),_:1},8,["loading"])):l("",!0)]),o.adminPlayerActionError?(n(),a("div",is,r(o.adminPlayerActionError),1)):l("",!0)]),footer:m(()=>[h(c,{onClick:u.closeAdminPlayerActionModel},{default:m(()=>[y(r(e.__("Cancel")),1)]),_:1},8,["onClick"])]),_:1},8,["show","onClose"])])):l("",!0)}const ls=k($t,[["render",as]]),cs={computed:{enabled(){return this.$page.props.generalSettings.enable_donation_box&&this.$page.props.generalSettings.donation_box_url},donationText(){return ie.exports.sample([this.__("Help us run our servers!"),this.__("Your help mean everything to us!"),this.__("If you are capable, we would appreciate your contribution")])}}},ds={key:0},us={class:"p-3 sm:px-5 bg-white dark:bg-cool-gray-800 rounded shadow"},_s={class:"font-extrabold text-gray-800 dark:text-gray-200"},hs={class:"rounded text-sm text-gray-600 dark:text-gray-300 text-center p-1"},gs={class:"mt-3 text-light-blue-400 flex justify-center"},ys=["href"];function ps(e,i,s,p,o,u){return u.enabled?(n(),a("div",ds,[t("div",us,[t("h3",_s,r(e.__("Donate")),1),t("p",hs,r(u.donationText),1),t("div",gs,[t("a",{target:"_blank",class:"hover:bg-light-blue-50 dark:hover:bg-cool-gray-900 border px-2 py-1 border-light-blue-400 font-semibold rounded",href:e.$page.props.generalSettings.donation_box_url},r(e.__("Donate Now")),9,ys)])])])):l("",!0)}const ms=k(cs,[["render",ps]]),fs={props:{users:Array,enabled:Boolean},computed:{guestCount(){let e=0;return this.users.forEach(i=>{i.user||e++}),e},onlineMembers(){return this.users.filter(e=>e.user)}}},bs={key:0},xs={class:"p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2"},vs={class:"font-extrabold text-gray-800 dark:text-gray-200"},ks={key:0,class:"flex justify-center flex-wrap"},ws=["src","alt"],Ss={key:1,class:"text-gray-500 dark:text-gray-400 italic font-light flex justify-center"},Ls={class:"flex justify-center text-xs text-gray-700 dark:text-gray-300 font-semibold"};function $s(e,i,s,p,o,u){const b=d("inertia-link");return s.enabled&&s.users?(n(),a("div",bs,[t("div",xs,[t("h3",vs,r(e.__("Online Users")),1),s.users&&s.users.length>0?(n(),a("div",ks,[(n(!0),a(w,null,S(u.onlineMembers,g=>(n(),v(b,{key:g.id,as:"div",href:e.route("user.public.get",g.user.username),class:"cursor-pointer flex mr-2 items-center text-light-blue-500 hover:underline",style:M([g.user.roles[0].color?{color:g.user.roles[0].color}:null])},{default:m(()=>[t("img",{class:"h-5 w-5 rounded-full mr-0.5",src:g.user.profile_photo_url,alt:g.user.username},null,8,ws),t("span",null,"@"+r(g.user.username),1)]),_:2},1032,["href","style"]))),128))])):(n(),a("div",Ss,r(e.__("No member online.")),1)),t("div",Ls,r(e.__("Total"))+": "+r(u.guestCount+u.onlineMembers.length)+" ("+r(e.__("members"))+": "+r(u.onlineMembers.length)+", "+r(e.__("guests"))+": "+r(u.guestCount)+") ",1)])])):l("",!0)}const Cs=k(fs,[["render",$s]]),Ps={components:{Icon:B},props:{title:String,players:Array,enabled:Boolean}},As={key:0},Is={class:"p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-2"},Ms={class:"font-extrabold text-gray-800 dark:text-gray-200"},js={class:"flex flex-col space-y-2"},Bs={class:""},Ts={class:"bg-gray-100 dark:bg-cool-gray-900 dark:bg-opacity-50 text-gray-700 dark:text-gray-300"},Ds={scope:"col",class:"p-1 text-left text-xs font-bold text-center uppercase tracking-wider"},Ns={scope:"col",class:"p-1 text-left text-xs font-bold uppercase tracking-wider"},Es={scope:"col",class:"p-1 text-left text-xs font-bold uppercase tracking-wider"},Vs={scope:"col",class:"p-1 text-left text-xs font-bold uppercase tracking-wider"},Qs={scope:"col",class:"p-1 text-left text-xs font-bold uppercase tracking-wider hidden sm:table-cell"},Us={scope:"col",class:"p-1 text-left text-xs font-bold uppercase tracking-wider hidden sm:table-cell"},Hs={class:"bg-white dark:bg-cool-gray-800"},Os={class:"p-1 text-sm text-light-blue-400 font-extrabold"},zs={key:0,class:"border-2 rounded text-sm px-1 border-light-blue-300 bg-light-blue-50 dark:bg-cool-gray-800"},Fs={class:"p-1"},qs={class:"flex items-center"},Ys=["content"],Ws=["src","alt"],Js={class:"p-1"},Ks={key:0,class:"flex items-center"},Gs=["content"],Rs=["src"],Zs={class:"p-1"},Xs={class:"flex items-center"},eo={class:"flex-shrink-0 h-6 w-6"},to=["src"],so={class:"ml-4"},oo={key:0,class:"text-gray-700 dark:text-gray-300 font-bold text-sm truncate"},ro={key:1,class:"text-red-500 dark:text-red-400 italic"},no={class:"p-1 text-sm text-gray-700 hidden sm:table-cell"},io={key:0},ao={key:1,class:"text-gray-700 dark:text-gray-500 italic"},lo={class:"p-1 text-xs text-gray-700 dark:text-gray-300 hidden sm:table-cell"},co=["content"];function uo(e,i,s,p,o,u){const b=d("inertia-link"),g=d("icon"),f=$("tippy");return s.enabled&&s.players&&s.players.length>0?(n(),a("div",As,[t("div",Is,[t("h3",Ms,r(s.title),1),t("div",js,[t("table",Bs,[t("thead",Ts,[t("tr",null,[t("th",Ds,r(e.__("#")),1),t("th",Ns,r(e.__("Flag")),1),t("th",Es,r(e.__("Rank")),1),t("th",Vs,r(e.__("Name")),1),t("th",Qs,r(e.__("Rating")),1),t("th",Us,r(e.__("Last Seen")),1)])]),t("tbody",Hs,[(n(!0),a(w,null,S(s.players,(c,L)=>(n(),a("tr",{key:L,class:C({"bg-gray-50 dark:bg-cool-gray-600 dark:bg-opacity-10":L%2===1})},[t("td",Os,[c.position?(n(),a("span",zs,r(c.position),1)):l("",!0)]),t("td",Fs,[t("div",qs,[x((n(),a("div",{class:"flex-shrink-0 h-6 w-6 focus:outline-none",content:c.country.name},[t("img",{class:"h-6 w-6",src:c.country.photo_path,alt:c.country.name},null,8,Ws)],8,Ys)),[[f]])])]),t("td",Js,[c.rank?(n(),a("div",Ks,[x((n(),a("div",{class:"flex-shrink-0 h-6 w-6 focus:outline-none",content:c.rank.name},[t("img",{class:"h-6 w-6",src:c.rank.photo_url,alt:""},null,8,Rs)],8,Gs)),[[f]])])):l("",!0)]),t("td",Zs,[t("div",Xs,[t("div",eo,[t("img",{class:"h-6 w-6",src:c.avatar_url,alt:""},null,8,to)]),t("div",so,[x((n(),v(b,{as:"div",href:e.route("player.show",c.uuid),class:"text-sm text-gray-900 focus:outline-none cursor-pointer hover:underline",content:c.uuid},{default:m(()=>[c.username?(n(),a("span",oo,r(c.username),1)):(n(),a("span",ro,r(e.__("Unknown")),1))]),_:2},1032,["href","content"])),[[f]])])])]),t("td",no,[c.rating!=null?(n(),a("span",io,[x(h(g,{class:"w-6 h-6 focus:outline-none",name:`rating-${c.rating}`,content:c.rating},null,8,["name","content"]),[[f]])])):(n(),a("span",ao,r(e.__("none")),1))]),t("td",lo,[x((n(),a("span",{class:"focus:outline-none",content:e.formatToDayDateString(c.last_seen_at)},[y(r(c.last_seen_at?e.formatTimeAgoToNow(c.last_seen_at):"unknown"),1)],8,co)),[[f]])])],2))),128))])])])])])):l("",!0)}const _o=k(Ps,[["render",uo]]),ho={class:"text-gray-700 text-sm dark:text-gray-200"},go={__name:"VerifyYourEmailBox",setup(e){const i=ae(null),s=()=>{i.value=!0};return(p,o)=>(n(),v(D,{"text-color":"text-orange-800 dark:text-orange-500","border-color":"border-orange-500"},{body:m(()=>[t("div",ho,[t("p",null,r(p.__("Email verification is required to perform any action on the site. Please check your email inbox or ")),1),h(le(ce),{href:p.route("verification.send"),method:"post",as:"button",class:"underline text-light-blue-500 hover:text-light-blue-700",onClick:j(s,["prevent"])},{default:m(()=>[y(r(p.__("Click here to re-send the verification email")),1)]),_:1},8,["href","onClick"]),x(t("div",{class:"mt-2 font-medium text-sm text-green-600"},r(p.__("A new verification link has been sent to your email address.")),513),[[I,i.value]])])]),default:m(()=>[y(r(p.__("Your email address is not verified."))+" ",1)]),_:1}))}},yo={props:{loading:{type:Boolean,required:!0}}},po={key:0,class:"animate-spin h-5 w-5 text-light-blue-600 dark:text-light-blue-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},mo=t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),fo=t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),bo=[mo,fo];function xo(e,i,s,p,o,u){return s.loading?(n(),a("svg",po,bo)):l("",!0)}const vo=k(yo,[["render",xo]]),ko={components:{LoadingSpinner:vo,CopyToClipboard:me},props:{settings:Object,server:Object},data(){return{serverInfo:Object,loading:!0,error:null,interval:null}},computed:{bgImageUrl(){return window.colorMode==="dark"?this.settings.home_hero_bg_image_path_dark:this.settings.home_hero_bg_image_path_light},isBgImageVideo(){return this.bgImageUrl.includes(".webm")},joinBoxEnabled(){return this.settings.show_join_box_in_home_hero?!!(this.server||this.$page.props.defaultQueryServer):!1}},created(){this.joinBoxEnabled&&(this.getServerPing(),this.interval=setInterval(()=>this.getServerPing(),1e4))},unmounted(){this.joinBoxEnabled&&clearInterval(this.interval)},methods:{getServerPing(){let e=this.server;e||(e=this.$page.props.defaultQueryServer),axios.get(route("server.ping.get",e.id)).then(i=>{this.serverInfo=i.data,this.error=null}).catch(i=>{this.error=i.response.data.message||i.message,this.serverInfo=null}).finally(()=>{this.loading=!1})}}},wo=["src"],So=["title","onClick"],Lo={key:0},$o={key:0,class:"text-gray-100 text-xl font-bold"},Co={class:"text-light-blue-500 dark:text-light-blue-400 font-extrabold"},Po={key:1,class:"text-gray-100 text-xl font-bold"},Ao={key:1},Io={class:"text-red-400 font-bold"};function Mo(e,i,s,p,o,u){const b=d("loading-spinner"),g=d("copy-to-clipboard"),f=$("tippy");return s.settings.enable_home_hero_section?(n(),a("div",{key:0,class:"flex justify-center items-center",style:M(`
                background: url('${u.isBgImageVideo?"":u.bgImageUrl}');
                background-size: ${s.settings.home_hero_bg_size_css};
                background-repeat: ${s.settings.home_hero_bg_repeat_css};
                background-position: ${s.settings.home_hero_bg_position_css};
                background-attachment: ${s.settings.home_hero_bg_attachment_css};
                height: ${s.settings.home_hero_bg_height_css};
              `)},[u.isBgImageVideo?(n(),a("video",{key:0,id:"home_hero_bg_image_light_video",class:"-z-10 absolute w-full",autoplay:"",loop:"",muted:"",style:M(`
                object-fit: ${s.settings.home_hero_bg_size_css};
                object-position: ${s.settings.home_hero_bg_position_css};
                height: ${s.settings.home_hero_bg_height_css};
      `)},[t("source",{src:u.bgImageUrl,type:"video/webm"},null,8,wo)],4)):l("",!0),u.joinBoxEnabled?(n(),v(g,{key:1},{default:m(c=>[x((n(),a("button",{type:"button",title:e.__("Click to Copy"),class:"bg-gray-800 bg-opacity-75 items-center px-5 py-3 rounded mx-3",onClick:L=>c.copy(s.server?s.server.hostname:e.$page.props.defaultQueryServer.hostname)},[h(b,{loading:o.loading},null,8,["loading"]),!o.loading&&!o.error?(n(),a("div",Lo,[c.status!=="copied"?(n(),a("span",$o,[y(r(e.__("Join"))+" ",1),t("span",Co,r(o.serverInfo.players.online),1),y(" "+r(e.__("players on"))+" "+r(s.server?s.server.hostname:e.$page.props.defaultQueryServer.hostname),1)])):(n(),a("span",Po,r(e.__("Copied!")),1))])):l("",!0),o.error?(n(),a("div",Ao,[t("span",Io,r(o.error),1)])):l("",!0)],8,So)),[[f]])]),_:1})):l("",!0)],4)):l("",!0)}const jo=k(ko,[["render",Mo]]),Bo={components:{HeroSection:jo,VerifyYourEmailBox:go,TopPlayersListBox:_o,OnlineUsersBox:Cs,DonationBox:ms,PollBox:pe,ServerStatusBox:ye,IngameChatBox:ls,OnlinePlayersBox:Lt,DidYouKnowBox:ee,VersionCheck:_t,SocialChannelBox:de,PostListBox:ue,WelcomeBox:Fe,NewsBox:Z,AppLayout:R,ShoutBox:X,DiscordServerBox:te,NewestUserBox:Pe,VotingSitesBox:Ve,LatestPinnedNews:st},props:{pinnedNewsList:Array,newslist:Array,newestUser:Object,latestPoll:Object,onlineUsers:Array,welcomeBoxContentHtml:{type:[String,null]},chatDefaultServerId:Number,chatServerList:Array,top10Players:Array,themeSettings:Object},data(){return{generalSettings:this.$page.props.generalSettings}}},To={class:"grid grid-cols-none gap-4 px-2 py-4 mx-auto md:grid-cols-4 md:gap-6 md:py-12 md:px-10 md:px-6 lg:px-16 max-w-screen-2xl"},Do={class:"order-1 col-span-1 space-y-4 md:order-none"},No={class:"order-3 col-span-1 space-y-4 md:col-span-2 md:order-none"},Eo={class:"order-2 col-span-1 space-y-4 md:order-none"};function Vo(e,i,s,p,o,u){const b=d("app-head"),g=d("hero-section"),f=d("online-players-box"),c=d("voting-sites-box"),L=d("poll-box"),P=d("did-you-know-box"),_=d("discord-server-box"),T=d("donation-box"),N=d("VerifyYourEmailBox"),E=d("version-check"),V=d("welcome-box"),Q=d("ingame-chat-box"),U=d("top-players-list-box"),H=d("latest-pinned-news"),O=d("post-list-box"),z=d("server-status-box"),F=d("shout-box"),q=d("news-box"),Y=d("online-users-box"),W=d("newest-user-box"),J=d("social-channel-box"),K=d("app-layout");return n(),v(K,null,{default:m(()=>[h(b),s.themeSettings.enable_home_hero_section?(n(),v(g,{key:0,settings:s.themeSettings},null,8,["settings"])):l("",!0),t("div",To,[t("div",Do,[o.generalSettings.enable_mcserver_onlineplayersbox?(n(),v(f,{key:0})):l("",!0),h(c,{votingsites:o.generalSettings.voteforserverbox_content,enabled:o.generalSettings.enable_voteforserverbox},null,8,["votingsites","enabled"]),h(L,{poll:s.latestPoll},null,8,["poll"]),h(P,{enabled:o.generalSettings.enable_didyouknowbox},null,8,["enabled"]),h(_,{enabled:o.generalSettings.enable_discordbox,server:o.generalSettings.discord_server_id},null,8,["enabled","server"]),h(T)]),t("div",No,[e.$page.props.jetstream.hasEmailVerification&&e.$page.props.user&&e.$page.props.user.email_verified_at===null?(n(),v(N,{key:0})):l("",!0),e.$page.props.user&&e.isStaff(e.$page.props.user)?(n(),v(E,{key:1})):l("",!0),o.generalSettings.enable_welcomebox?(n(),v(V,{key:2,"html-data":s.welcomeBoxContentHtml},null,8,["html-data"])):l("",!0),h(Q,{"default-server-id":s.chatDefaultServerId,"server-list":s.chatServerList},null,8,["default-server-id","server-list"]),h(U,{enabled:!0,players:s.top10Players,title:e.__("Top 10 Players")},null,8,["players","title"]),h(H,{newslist:s.pinnedNewsList},null,8,["newslist"]),o.generalSettings.enable_status_feed?(n(),v(O,{key:3})):l("",!0)]),t("div",Eo,[h(z),h(F),h(q,{newslist:s.newslist},null,8,["newslist"]),h(Y,{users:s.onlineUsers,enabled:o.generalSettings.enable_onlineuserbox},null,8,["users","enabled"]),h(W,{user:s.newestUser,enabled:o.generalSettings.enable_newuserbox},null,8,["user","enabled"]),h(J,{enabled:o.generalSettings.enable_socialbox,"show-title":!0,twitter:o.generalSettings.twitter_url,twitch:o.generalSettings.twitch_url,youtube:o.generalSettings.youtube_url,facebook:o.generalSettings.facebook_url},null,8,["enabled","twitter","twitch","youtube","facebook"])])])]),_:1})}const or=k(Bo,[["render",Vo]]);export{or as default};
