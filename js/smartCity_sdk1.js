(function(){

	function Plugin(){
		var _this = this;

		var _bridgeInit = false;

		_this.response = {};

		_this.cache = {};

		_this.entryPlat = '';

		var utils = {
			getMobileDevice : function(){
				var mbldevice = navigator.userAgent.toLowerCase();
				if (/iphone|ipod|ipad/gi.test( mbldevice ))
				{
					return "iOS";
				}
				else if (/android/gi.test( mbldevice ))
				{
					return "Android";
				}
				else
				{
					return "Unknow Device";
				}
			},

			connectWebViewJavascriptBridge : function( cb ) {								/*桥连*/
				if (window.WebViewJavascriptBridge) {
					cb(WebViewJavascriptBridge);
				}else{
					console.log(111)
					document.addEventListener('WebViewJavascriptBridgeReady', function() {
						console.log(333)
						cb(WebViewJavascriptBridge);
					}, false);
				}
			},

			callApiCenter : function( api, param , callback ){
				var mbldevice = utils.getMobileDevice();
				console.log(mbldevice)
					utils.connectWebViewJavascriptBridge(function( bridge ){
						if (!_bridgeInit) {
	                          bridge.init(function(message, responseCallback) {});
	                          _bridgeInit = true;
	                      }
	                      console.log(bridge)
						bridge.callHandler( api, param, function(response) {
							response = typeof response == 'string' ? JSON.parse( response ) : response;
							$.isFunction( callback ) && callback( response );
						});
						if( api == 'getLocation'){
							bridge.registerHandler('getLocation', function( response, responseCallback) {
								response = typeof response == 'string' ? JSON.parse( response ) : response;
								_this.response[ api ] = response;
								$.isFunction( callback ) && callback( response );
								responseCallback('success');
							});
						}

					});

			}
		}

		_this.callApiCenter = function( api, param , callback ){
			return utils.callApiCenter( api, param , callback );
		}
	}

	$.extend( Plugin.prototype , {
		constructor : Plugin,

		getClient : function( api, json ){
			this.entryPlat = this.entryPlat || 'app';
			this.response[ api ] = json;
			this.cache[ api ]( json );
		},

		getUserInfo : function( callback ){																/*获取用户信息*/
			return this.callApiCenter( 'getUserInfo', null , callback );
		},
		getSystemInfo : function( callback ){															/*获取设备信息*/
			return this.callApiCenter( 'getSystemInfo', null , callback );
		},
		getLocation : function( callback ){																/*获取定位信息*/
			return this.callApiCenter( 'getLocation', null , callback );
		},
		goLogin : function(){																		/*去登录*/
			return this.callApiCenter( 'goLogin' , null , null );
		},
		shareTo : function( param ){																	/*分享*/
			return this.callApiCenter( 'shareTo' , param , null );
		},
		linkTo : function( param ){																	/*跳内链*/
			return this.callApiCenter( 'linkTo' , param , null );
		},
		goBack : function(){																		/*后退*/
			return this.callApiCenter( 'goBack' , null , null );
		},
		goRoot : function(){
			return this.callApiCenter( 'goRoot' , null , null );												/*去根目录*/
		},
		goUcenter : function(){
			return this.callApiCenter( 'goUcenter' , null , null );											/*去用户中心*/
		},
		fullScreenPlay : function( param ){
			return this.callApiCenter( 'fullScreenPlay' , param , null );										/*播放全屏*/
		},
		openHardwareSpeed : function(){																			/*硬件加速*/
			return this.callApiCenter( 'openHardwareSpeed' , null , null );
		},
		appCommonPay : function( param ){																		/*支付调支付宝，微信等客户端*/
            return this.callApiCenter( 'appCommonPay', param , null );
        },
        getRequestHeader : function( callback ){
			return this.callApiCenter( 'getRequestHeader' , null , callback );					/*header加密信息*/
		},	
		goVRPlayer : function( param ){															/*vr播放器*/
			return this.callApiCenter( 'goVRPlayer' , param , null );
		}
	} );

	window.SmartCity = new Plugin();

	window.getUserInfo = function( json ){
		Plugin.prototype.getClient.call( SmartCity, 'getUserInfo', json );
	};

	window.getSystemInfo = function( json ){
		Plugin.prototype.getClient.call( SmartCity, 'getSystemInfo', json );
	};

	window.getLocation = function( json ){
		Plugin.prototype.getClient.call( SmartCity, 'getLocation', json );
	};

	window.getRequestHeader = function( json ){
		Plugin.prototype.getClient.call( SmartCity, 'getRequestHeader', json );
	};

})();



/*
			demo:
			页面引入当前js

			在自己js方法里面调用

			如：

			SmartCity.getUserInfo(function( res ){															//获取用户信息:
					//	res为用户信息
					if( res && res.userinfo.userTokenKey ){
							//  即用户已登录
					}else{
							//  即用户未登录  跳登录页登录
 							SmartCity.goLogin();
					}
			});


			SmartCity.getMd5(function( res ){

			})

			SmartCity.getSystemInfo(function( res ){
					//	res为设备信息  如：device_token等
			});

			SmartCity.getLocation(function( res ){
					//	res为定位信息    确保定位开启
			});

			SmartCity.goLogin();    																	//去登录

			SmartCity.goUcenter();    																//去用户中心

			SmartCity.linkTo({innerLink:'news#123'})                  //  innerLink :   模块标识＃内容id  例：文稿 123

			SmartCity.goBack();     //返回上一步

			SmartCity.shareTo({																				//分享
				title: 标题,
				brief: 描述,
				contentURL: 内容链接,
				imageLink: 图片链接
			});

			SmartCity.openHardwareSpeed();

			SmartCity.goVRPlayer({'VRPlayURL' : 'http://live8.cgangs.com/hls/test/index.m3u8'});
*/
