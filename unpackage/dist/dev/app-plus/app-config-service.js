
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/video/index","pages/mine/index","pages/cloud/index","pages/account/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"网易云音乐","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"color":"#888","selectedColor":"#ff2419","borderStyle":"white","backgroundColor":"#f9f9f9","list":[{"pagePath":"pages/index/index","iconPath":"static/tab/t_1.png","selectedIconPath":"static/tab/t_11.png","text":"发现"},{"pagePath":"pages/video/index","iconPath":"static/tab/t_2.png","selectedIconPath":"static/tab/t_21.png","text":"视频"},{"pagePath":"pages/mine/index","iconPath":"static/tab/t_3.png","selectedIconPath":"static/tab/t_31.png","text":"我的"},{"pagePath":"pages/cloud/index","iconPath":"static/tab/t_4.png","selectedIconPath":"static/tab/t_41.png","text":"云村"},{"pagePath":"pages/account/index","iconPath":"static/tab/t_5.png","selectedIconPath":"static/tab/t_51.png","text":"账号"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"网易云音乐","compilerVersion":"2.7.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"发现","titleNView":false}},{"path":"/pages/video/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"视频","titleNView":false,"bounce":"none","disableScroll":true}},{"path":"/pages/mine/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","titleNView":false}},{"path":"/pages/cloud/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"云村","titleNView":false,"bounce":"none","disableScroll":true}},{"path":"/pages/account/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"账号"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
