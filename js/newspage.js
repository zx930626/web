
	function sendCommand(type,path,key){
	    var url = "testapp:"+type+":"+path+":"+key;
	    document.location = url;
	}
	
	function clickMedia(type,path,key) {
	    sendCommand(type,path,key);
	}
	
	function goTolink(linkSr,idStr,moduleStr,content_fromid){
	    var url = "";
	    if (linkSr != "") {
	        url = linkSr;
	    }
	    else if (moduleStr != "") {
            
            var param = {
                idStr : idStr,
                content_fromid : content_fromid
            };
            var values = JSON.stringify( param );
            
	        url = moduleStr+"#"+values;
	    }
        
	    
	    document.location = url;
	}
	
	//初始化函数
	window.onload = function(){
	    myBody = document.getElementById('article_body');
	}

    /*切换字体大小*/
    function showMostBigSize() {
        $('#article_body')
        .addClass('mostfont')
        .removeClass('bigfont')
        .removeClass('midfont')
        .removeClass('smallfont')

	}

	function showBigSize() {
        $('#article_body')
        .removeClass('mostfont')
        .addClass('bigfont')
        .removeClass('midfont')
        .removeClass('smallfont')
	}
	
	function showMidSize() {
        $('#article_body')
        .removeClass('mostfont')
        .removeClass('bigfont')
        .addClass('midfont')
        .removeClass('smallfont')
    }
	
	function showSmallSize() {
        $('#article_body')
        .removeClass('mostfont')
        .removeClass('bigfont')
        .removeClass('midfont')
        .addClass('smallfont')
	}
	
	function updateTopBlankHeight(height) {
	    var myElement = document.querySelector(".top_blank");
	    myElement.style.height = height+"px";
	}
	
	function updateBottomBlankHeight(height) {
	    var myElement = document.querySelector(".bottom_blank");
	    myElement.style.height = height+"px";
	}
	
	
	function goToCommentList(){
	    sendCommand("goToCommentList","","");
	}
	
	function goToRichText(textType){
	    sendCommand("goToRichText",textType,"");
	}
	
	function goToRichContent(){
	    sendCommand("goToRichText","","");
	}
	
	
	function setImage(filePath,picKey)
	{
	    var img = $('img[name="'+ picKey + '"]');
	    img.length && img.attr('src','file://'+ filePath);
	}
	
	function test_alert(filePath){
	    var obj = document.getElementsByTagName('img');
	        obj[0].setAttribute('src', 'file://'+ filePath);
	}

//    function getKeywords(json){
//
//        var html="";
//        for(var i=0;i<json.length;i++){
//            html+="<span onclick=\"goTolink('"+json[i].url+"')\">"+json[i].name+"</span>";
//        }
//
//        $(".article_footer_brief").html(html);
//    }

	function initaboutNews( json, level ){
	    /*level 代表正常图片尺寸的倍数
	     1 68*46
	     2 136*92
	     3 204*138
	     4 272x184
	     5 340x230
	     */
	    var level = level || 1;
	    var SIZE = ['68x46','136x92','204x138','272x184','340x230'];
	    var type = '';
	   	if(isAndroid){
	   		type=1;
	   	}
	   	else if(isIOS){
	   		type =0;
	   	}
	    if( json && $.isArray( json ) && json.length ){
	        $.each( json, function(key,value){
	               // if(value['indexpic'] && value['indexpic']['host'] ){
	               // value['url'] = value.indexpic.host + value.indexpic.dir + SIZE[level-1] + '/'  + value.indexpic.filepath + value.indexpic.filename;
	               // }else{
	               // value['url'] = '';
	               // }
	               value.isDevice=type;
	        } );
	        var tpl_dom = template('my_tpl', {data : json});
	        $( tpl_dom ).insertBefore( '.artical-comment' );
	    }
	}

    /*切换夜间模式*/
    function changeStyle( type ){
        if( type == 'nightStyle' ){
            $('body').addClass('nightStyle');
        }else{
            $('body').removeClass('nightStyle');
        }
    }
    function showPic(md5){
        var ob = document.getElementsByName(md5);
        if( !ob ) return;
        for(var i = 0;i < ob.length;i++){
            var imgSrc = ob[i].getAttribute('src_link');
            if(imgSrc){
                ob[i].setAttribute('src',imgSrc);
            }
        }

    }

    function showReloadPic(md5){
        var ob = document.getElementById(md5);
        var imgSrc = ob.getAttribute('src_link');
        if(imgSrc){
            ob.setAttribute('src','file:///android_asset/big_reload_img.png');
        }
    }


    function updateNewsdetail(newsdetail){
        window._update(newsdetail);
    }
    function updateContent(content){
         var ob = document.getElementById('article_body');
         ob.innerHTML = content;
    }


    function setClickNum(num){
        $('.click_num').text(num);
    }

    function setShareVisibility( num ){
        if( num == 0 ){
            $('.artical-share').hide();
        }else if( num ==1 ){
            $('.artical-share').show();
        }
    }
	// 获取新评论
	function getNewComment() {
		app._initComment();
	}

	// 获取新订阅状态
	function getNewSubState(status) {
		if(app.newsInfo.subscribe) {
			Vue.set(app.newsInfo.subscribe,"is_subscribe",status)
		}
	}


