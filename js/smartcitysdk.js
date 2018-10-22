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
					document.addEventListener('WebViewJavascriptBridgeReady', function() {
						cb(WebViewJavascriptBridge);
					}, false);
				}
				setTimeout(function(){
                	if (!window.WebViewJavascriptBridge) {
                		alert('客户端版本过低,请升级客户端');
                	}
                },3000);
			},

			callApiCenter : function( api, param , callback ){
				var mbldevice = utils.getMobileDevice();
					utils.connectWebViewJavascriptBridge(function( bridge ){
						if (!_bridgeInit) {
	                          bridge.init(function(message, responseCallback) {});
	                          _bridgeInit = true;
	                      }
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
		},
        pageGetData : function( param , callback ){															/*pageGetData*/
            return this.callApiCenter( 'pageGetData' , param , callback );
        },

        pageFinishWebviewRander : function(){
             /*pageFinishWebviewRander*/
             return this.callApiCenter( 'pageFinishWebviewRander' , null , null );
        },

        finishLoadMoreData : function( param ){
             /*pageFinishWebviewRander*/
            return this.callApiCenter( 'finishLoadMoreData' , param , null );
	},
	  loadImageResources : function( param , callback ){
	     /*loadImageResources*/
	     return this.callApiCenter( 'loadImageResources' , param , callback );
	},
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
    window.pageGetData = function( json , callback ){
        Plugin.prototype.getClient.call( SmartCity, 'pageGetData', json , callback );
	};
	window.loadImageResources = function( json , callback ){
          Plugin.prototype.getClient.call( SmartCity, 'loadImageResources', json , callback );
  	};


})();