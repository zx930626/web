// 跨浏览器的处理程序
var EventUtil = {
	addHandler: function(element,type,handler){
		if (element.addEventListener){
			element.addEventListener(type, handler, false);
		}else if (element.attachEvent){
			element.attachEvent('on' + type, handler);
		}else{
			element['on' + type] = handler;
		}
	},
	removeHandler: function(element,type,handler){
		if (element.removeEventListener){
			element.removeEventListener(type, handler, false);
		}else if (element.detachEvent){
			element.detachEvent('on' + type, handler);
		}else{
			element['on' + type] = null;
		}
	},
	// 跨浏览器的事件对象
	getEvent: function(event){
		return event ? event : window.event;
	},
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	preventDefault: (event) => {
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	stopPropagation : (event) => {
		if (event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	},
	getRelatedTarget : function(event){
		if (event.relatedTarget) {
			return event.relatedTarget;
		}else if (event.toElement) {
			return event.toElement;
		}else if (event.fromElement) {
			return event.fromElement
		}else{
			return null;
		}
	},
	// 鼠标点击事件的按钮
	getButton : function(event){
		if (document.implementation.hasFeature("MouseEvents","2.0")){
			return event.button
		}else{
			switch (event.botton) {
				case 0:
					// statements_1
					break;
				case 1:
					// statements_1
					break;
				case 3:
					// statements_1
					break;
				case 5:
					// statements_1
					break;
				case 7:
					return 0;
					break;
				case 2:
					// statements_1
					break;
				case 6:
					return 2;
					break;
				case 4:
					return 1;
					break;
				default:
					// statements_def
					break;
			}
		}
	},
	// 获取鼠标滚轮增量值
	// getWheelDelta : function(event) {
	// 	if (event.wheelDelta) {
	// 		return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta)
	// 	}else{
	// 		return -event.detail * 40
	// 	}
	// }
}









