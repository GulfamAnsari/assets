const GA={CATAGORY:"WEBSITE",ALSO_READ_ARTICLE:{ACTION:"ALSO_READ_ARTICLE_CLICK",CLASS:"must-read"},SIDEBAR_SOCIAL_ICON:{ACTION:"SIDEBAR_SOCIAL_ICON_CLICK",IDS:["sidebar-facebook","sidebar-twitter","sidebar-instagram","sidebar-youtube","sidebar-pintrest","sidebar-tumbler"]},FOOTER_SOCIAL_ICON:{ACTION:"FOOTER_SOCIAL_ICON_CLICK",IDS:["footer-facebook","footer-twitter","footer-youtube"]},SIDEBAR_CATAGORY:{ACTION:"SIDEBAR_CATAGORY_CLICK",IDS:["sidebar_how_to","sidebar_tips_and_tricks","sidebar_news","sidebar_programming","sidebar_differences","sidebar_top_things","sidebar_tutorials"]},MAINBODY_CATAGORY:{ACTION:"MAINBODY_CATAGORY_CLICK",IDS:["mainbody_article_catagory"]},PAGE_NAVIGATOR:{ACTION:"PAGE_NAVIGATION_CLICK",IDS:["page_navigation_number","page_navigation_right","page_navigation_left"]},TRENDS:{ACTION:"TREND_ARTICLE_CLICK",IDS:["tre1","tre2","tre3","tre4","tre5","tre6"]},NEXT_PREVIOUS_ARTICLE:{ACTION:"NEXT_PREVIOUS_ARTICLE_CLICK",IDS:["previous-article","next-article"]},RELATED_ARTICLE:{ACTION:"RELATED_ARTICLE_CLICK",IDS:["related-article"]},FEATURED_ARTICLE:{ACTION:"FEATURED_ARTICLE"},SIDEBAR_HASHTAGS:{ACTION:"SIDEBAR_HASHTAGS_CLICK"},HEADER_HASHTAGS:{ACTION:"HEADER_HASHTAGS_CLICK"},SIDEBAR_ARTICLE:{ACTION:"SIDEBAR_ARTICLE_CLICK"},MAINBODY_ARTICLE:{ACTION:"MAINBODY_ARTICLE_CLICK"}},GOOGLE_ADS_UNITS={VERTICAL_SIDEBAR1:'<ins class="adsbygoogle" style="display:inline-block;width:300px;height:600px" data-ad-client="ca-pub-4047152613078439" data-ad-slot="4439939476" data-ad-format="auto" data-full-width-responsive="true"></ins>',VERTICAL_SIDEBAR_2:'<ins class="adsbygoogle" style="display:inline-block;width:300px;height:600px" data-ad-client="ca-pub-4047152613078439" data-ad-slot="5903874936" data-ad-format="auto" data-full-width-responsive="true"></ins>',VERTICAL_SIDEBAR_3:'<ins class="adsbygoogle" style="display:inline-block;width:300px;height:600px" data-ad-client="ca-pub-4047152613078439" data-ad-slot="7165089288" data-ad-format="auto" data-full-width-responsive="true"></ins>',ARTICLE:'<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-4047152613078439" data-ad-slot="7800727927"></ins>',ARTICLE_FEATURE_IMAGE:'<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-4047152613078439" data-ad-slot="6826251972"></ins>',HORIZONTAL_FOOTER:'<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4047152613078439" data-ad-slot="3277162857" data-ad-format="auto" data-full-width-responsive="true"></ins>',HORIZONTAL_SHARE:'<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4047152613078439" data-ad-slot="8114556567" data-ad-format="auto" data-full-width-responsive="true"></ins>',HORIZONTAL_TABLE_OF_CONTENT:'<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-client="ca-pub-4047152613078439" data-ad-slot="8282077528" data-ad-format="auto"></ins>',HORIZONTAL_NAV:'<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4047152613078439" data-ad-slot="3845043105" data-ad-format="auto" data-full-width-responsive="true"></ins>',HORIZONTAL_HEADER_FIXED:'<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-4047152613078439" data-ad-slot="7539841497"></ins>',HORIZONTAL_MAINBODY_ARTICLE:'<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4047152613078439" data-ad-slot="6901439448" data-ad-format="auto" data-full-width-responsive="true"></ins>',CONTENT_AD:'<ins class="adsbygoogle" style="display:block" data-ad-format="autorelaxed" data-ad-client="ca-pub-4047152613078439" data-ad-slot="7400789433"></ins>',RELATED_ARTICLE:'<ins class="adsbygoogle" style="display:block; margin: 8px 0" data-ad-client="ca-pub-4047152613078439" data-ad-slot="8416599386" data-ad-format="fluid" data-full-width-responsive="true"></ins>',Below_Top_Sharing_Box_ARTICLE:'<ins class="adsbygoogle" style="display:block; margin: 8px 0" data-ad-client="ca-pub-4047152613078439" data-ad-slot="4736147703" data-ad-format="auto" data-full-width-responsive="true"></ins>',SIDE_AD:'<ins class="adsbygoogle" style="display:inline-block;width:120px;height:600px" data-ad-client="ca-pub-4047152613078439" data-ad-slot="7101032805"></ins>'};function addGoogleAdsJS(){let ads=document.createElement("script");ads.setAttribute("src","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"),ads.setAttribute("id","goodle-ads"),document.body.appendChild(ads),ads.onload=()=>{(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-4047152613078439",enable_page_level_ads:!0}),startGoogleAds()}}function pushAds(){(adsbygoogle=window.adsbygoogle||[]).push({})}function startGoogleAds(){document.getElementById("Below_Top_Sharing_Box_ARTICLE")&&(document.getElementById("Below_Top_Sharing_Box_ARTICLE").innerHTML=GOOGLE_ADS_UNITS.Below_Top_Sharing_Box_ARTICLE,pushAds()),document.getElementById("above-share-buttons-ad")&&(document.getElementById("above-share-buttons-ad").innerHTML=GOOGLE_ADS_UNITS.HORIZONTAL_SHARE,pushAds());for(var names=document.getElementsByClassName("subHeading-with-border"),index=2;index<names.length;index+=3){var newChild=GOOGLE_ADS_UNITS.ARTICLE;names[index].outerHTML=newChild+names[index].outerHTML,pushAds()}if(document.getElementById("content_container")){let node=document.createElement("DIV");node.innerHTML=GOOGLE_ADS_UNITS.HORIZONTAL_TABLE_OF_CONTENT,document.getElementById("content_container").appendChild(node),pushAds()}if(document.getElementById("related-article")){let node=document.createElement("DIV");node.innerHTML=GOOGLE_ADS_UNITS.RELATED_ARTICLE,document.getElementById("related-article").appendChild(node),pushAds()}for(var mainBodyArticleBoxs=document.getElementsByClassName("article-main-body"),index=0;index<mainBodyArticleBoxs.length;index+=1)mainBodyArticleBoxs[index].innerHTML=GOOGLE_ADS_UNITS.HORIZONTAL_MAINBODY_ARTICLE,pushAds()}function closeFooterAd(){document.getElementById("stickeyAds").style.display="none"}addGoogleAdsJS(),$(document).ready((function(){!function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(o),m=s.getElementsByTagName(o)[0],a.async=1,a.src=g,m.parentNode.insertBefore(a,m)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-141785500-1","auto"),ga("send","pageview"),function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)},(t=l.createElement(r)).async=1,t.src="https://www.clarity.ms/tag/"+i,(y=l.getElementsByTagName(r)[0]).parentNode.insertBefore(t,y)}(window,document,"clarity","script","539z46pv08")})),$(document).ready((function(){$("#searchButton, #searchButton2").click((function(){$("#searchForm").fadeToggle(0),document.getElementById("searchForm").style.width="100%"}))})),$(document).ready((function(){$("#search-close").click((function(){$("#searchForm").fadeToggle(500),document.getElementById("searchForm").style.width="0%"}))})),$(document).ready((function(){if(document.getElementById("disqus_thread")&&!document.getElementById("web-app-droidtechknow")){var x=$(".post-entry p:eq(0)").html();const firstLetter=x.charAt(0);if(firstLetter.toLocaleLowerCase().match(/[a-z]/i)){var text='<span class="first-letter-capital">'+x.charAt(0)+"</span>";$(".post-entry p:eq(0)").html(text+x.slice(1,x.length))}}})),$(document).ready((function(){var iconSearch=document.getElementById("searchButton"),iconSearch2=document.getElementById("searchButton2"),searchField=document.getElementById("search");iconSearch.addEventListener("click",(function(){searchField.focus()})),iconSearch2.addEventListener("click",(function(){searchField.focus()}))}));var _foxpush=_foxpush||[];function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element")}function setActive(){for(aObj=document.getElementById("myNavbar").getElementsByTagName("a"),i=0;i<aObj.length;i++)if(aObj[i].href.includes(document.location.href)){aObj[i].className="active";break}}_foxpush.push(["_setDomain","droidtechknowcom"]),$(document).ready((function(){$("#fixScroll").css("display","none"),$(window).scroll((function(){$(this).scrollTop()?$("#fixScroll:hidden").stop(!0,!0).fadeIn():$("#fixScroll").stop(!0,!0).fadeOut()})),$("document").ready((function(){$("#fixScroll").click((function(){$("html").css({"scroll-behavior":"unset"}),$("html, body").animate({scrollTop:"0px"},500),setTimeout(()=>{$("html").css({"scroll-behavior":"smooth"})},600)}))}))})),$(document).ready((function(){$("#toggle_content_toggle").click((function(){"hide"===document.getElementById("toggle_content_toggle").innerHTML.toLocaleLowerCase()?document.getElementById("toggle_content_toggle").innerHTML="show":document.getElementById("toggle_content_toggle").innerHTML="hide",$("#toggle_content_list").slideToggle()}))})),window.onload=setActive,createScript=(url,id=null,attr=null)=>{var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src=url,id&&(s.id=id),attr&&s.setAttribute(attr.name,attr.value);var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(s,x)},document.getElementById("loading")&&(document.getElementById("loading").style.display="none");var number=5;function showMore(num){var xhttp;document.getElementById("show-more").style.display="none",document.getElementById("loading").style.display="block",number+=num,(xhttp=new XMLHttpRequest).onreadystatechange=function(){if(4==this.readyState&&200==this.status){data=JSON.parse(this.response);for(var i=number-5;i<data.length;i++){var outerDiv=document.createElement("DIV");outerDiv.setAttribute("class","articleBox");var div=document.createElement("DIV");div.setAttribute("class","asideArticleImage");var anchor=document.createElement("A");anchor.setAttribute("href",data[i].articleLink);var image=document.createElement("IMG");image.setAttribute("class","img img-responsive articleImag"),image.setAttribute("alt",data[i].imageAlt),image.setAttribute("src",data[i].imageLink2),image.setAttribute("width","100"),image.setAttribute("height","70"),anchor.appendChild(image),div.appendChild(anchor);var div2=document.createElement("DIV");div2.setAttribute("class","asideArticleTitle");var anchor2=document.createElement("A");anchor2.setAttribute("href",data[i].articleLink);var title=document.createTextNode(data[i].articleTitle),para=document.createElement("H3");para.setAttribute("style","font-size:15px;line-height:20px"),anchor2.appendChild(title),anchor2.setAttribute("style","text-decoration:none"),para.appendChild(anchor2);var div3=document.createElement("DIV");div3.setAttribute("style","color:#545454;font-size:11px;");var span=document.createElement("SPAN");span.setAttribute("class","fa fa-calendar-o"),span.setAttribute("style","padding:0 4px 0");var span2=document.createElement("SPAN");span2.setAttribute("class","articleDate");var date=document.createTextNode(data[i].date);span2.appendChild(date),div2.appendChild(para),div3.appendChild(span),div3.appendChild(span2),div2.appendChild(div3),outerDiv.appendChild(div),outerDiv.appendChild(div2),document.getElementById("sidebar").appendChild(outerDiv)}document.getElementById("loading").style.display="none",document.getElementById("show-more").style.display="block",data.length<number&&(document.getElementById("show-more").style.display="none",document.getElementById("loading").style.display="none")}},xhttp.open("GET","/api/more_result.php?more="+number,!0),xhttp.send(),ga("send","event","website_content","button_clicked",`show_more - ${+number}`,+number)}function showMoreAtgs(){var tagDoc=document.getElementById("tags");$("html").css({"scroll-behavior":"unset"});var elem=document.getElementById("show-more-tag"),txt;(elem.textContent||elem.innerText).includes("Show More")?($(tagDoc).animate({height:"100%"}),elem.innerHTML='Show Less <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>'):($("html, body").animate({scrollTop:$(tagDoc).offset().top-75},500),$(tagDoc).animate({height:"300px"}),elem.innerHTML='Show More  <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>'),setTimeout(()=>{$("html").css({"scroll-behavior":"smooth"})},600)}async function httpFetch(url,method="GET"){try{const res=await fetch(url,{method:method});return res.json()}catch(e){return{error:e}}}function debouncing(callback,time){let cleartime;return function(...args){clearTimeout(cleartime),cleartime=setTimeout(()=>{callback(...args)},time)}}function addSerachEventListner(){document.getElementById("search").addEventListener("keyup",debouncing((function(e){showHint(e.target.value)}),300))}function showHint(str){function addLoader(){let loaderImage='<img class="img img-responsive" style="width: 50px; margin: 4px auto" src="//droidtechknow.com/images/image-loading.svg" />',loaderText='<p style="color: white; text-align: center">Fetching results. Please wait.</p>',loaderDIV=document.createElement("DIV");loaderDIV.setAttribute("style","margin: 4px 0 0 0"),loaderDIV.innerHTML=`${loaderImage}${loaderText}`;let loaderUL=document.createElement("UL");loaderUL.setAttribute("id","resultList"),loaderUL.appendChild(loaderDIV),document.getElementById("queryResult").appendChild(loaderUL)}document.getElementById("resultList")&&document.getElementById("resultList").remove(),addLoader();var data=[];0==str.length&&document.getElementById("resultList")?document.getElementById("resultList").remove():httpFetch("/api/search.php?query="+str).then(res=>{if(document.getElementById("resultList")&&document.getElementById("resultList").remove(),res.error)data=[];else if(0==res.length){var ul;(ul=document.createElement("UL")).setAttribute("id","resultList");var p=document.createElement("P");p.innerText="No result found. Try again with different keywords.",p.setAttribute("style","color: white; text-align: center"),ul.appendChild(p),document.getElementById("queryResult").appendChild(ul)}else{var ul;data=res,(ul=document.createElement("UL")).setAttribute("id","resultList");for(var i=0;i<data.length;i++){var li=document.createElement("LI"),div=document.createElement("DIV"),div2=document.createElement("DIV");div2.setAttribute("class","searchImage");var image=document.createElement("IMG");image.setAttribute("src",data[i].imageLink),image.setAttribute("classs","img img-responsive");var aImage=document.createElement("A");aImage.setAttribute("href",data[i].articleLink),aImage.appendChild(image),div2.appendChild(aImage);var div1=document.createElement("DIV");div1.setAttribute("class","searchTitle");var a=document.createElement("A");a.setAttribute("href",data[i].articleLink);var t=document.createTextNode(data[i].title);a.appendChild(t),div1.appendChild(a),li.appendChild(div1),li.appendChild(div2),ul.appendChild(li),document.getElementById("queryResult").appendChild(ul)}}})}let script=document.createElement("script");function loadLazyScript(el){switch(el.id){case"disques_loading":createScript("https://droidtechknow.disqus.com/embed.js",null,{name:"data-timestamp",value:+new Date}),el.remove();break;case"shrethis_loading":createScript("//platform-api.sharethis.com/js/sharethis.js#property=5b103b99bf48ed0011ba90ff&product=inline-share-buttons"),el.remove();break;case"subscribe_loading":createScript("//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"),el.remove();break;case"comment_count_loading":createScript("//droidtechknow.disqus.com/count.js","dsq-count-scr"),el.remove();break;case"facebook_loading":d=document,s="script",id="facebook-jssdk",fjs=d.getElementsByTagName(s)[0],d.getElementById(id)||((js=d.createElement(s)).id=id,js.src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.0&appId=457850677885538&autoLogAppEvents=1",fjs.parentNode.insertBefore(js,fjs)),createScript("//cdn.foxpush.net/sdk/foxpush_SDK_min.js"),createScript("//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"),el.remove();break;case"youtube_video_loading":var videoContainer;document.getElementById("videoContainer").innerHTML='<iframe src="https://www.youtube.com/embed/1EBONHDcV28" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',el.remove()}var d,s,id,js,fjs}function sendGA(action,label){ga("send","event",GA.CATAGORY,action,label)}script.async=!0,script.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js",document.body.appendChild(script),$(document).on("lazyloaded",e=>{e.target.id&&loadLazyScript(e.target)}),function($){var SelectionSharer=function(options){var self=this;"string"==typeof(options=options||{})&&(options={elements:options}),this.sel=null,this.textSelection="",this.htmlSelection="",this.appId=$('meta[property="fb:app_id"]').attr("content")||$('meta[property="fb:app_id"]').attr("value"),this.url2share=$('meta[property="og:url"]').attr("content")||$('meta[property="og:url"]').attr("value")||window.location.href,this.getSelectionText=function(sel){var html="",text="",sel;if((sel=sel||window.getSelection()).rangeCount){for(var container=document.createElement("div"),i=0,len=sel.rangeCount;i<len;++i)container.appendChild(sel.getRangeAt(i).cloneContents());text=container.textContent,html=container.innerHTML}return self.textSelection=text,self.htmlSelection=html||text,text},this.selectionDirection=function(selection){var sel=selection||window.getSelection(),range=document.createRange();if(!sel.anchorNode)return 0;range.setStart(sel.anchorNode,sel.anchorOffset),range.setEnd(sel.focusNode,sel.focusOffset);var direction=range.collapsed?"backward":"forward";return range.detach(),direction},this.showPopunder=function(){self.popunder=self.popunder||document.getElementById("selectionSharerPopunder");var sel=window.getSelection(),selection=self.getSelectionText(sel);if(sel.isCollapsed||selection.length<10||!selection.match(/ /))return self.hidePopunder();if(self.popunder.classList.contains("fixed"))return self.popunder.style.bottom=0;var range,node=sel.getRangeAt(0).endContainer.parentNode;if(self.popunder.classList.contains("show")){if(Math.ceil(self.popunder.getBoundingClientRect().top)==Math.ceil(node.getBoundingClientRect().bottom))return;return self.hidePopunder(self.showPopunder)}if(node.nextElementSibling)self.pushSiblings(node);else{self.placeholder||(self.placeholder=document.createElement("div"),self.placeholder.className="selectionSharerPlaceholder");var margin=window.getComputedStyle(node).marginBottom;self.placeholder.style.height=margin,self.placeholder.style.marginBottom=-2*parseInt(margin,10)+"px",node.parentNode.insertBefore(self.placeholder)}var offsetTop=window.pageYOffset+node.getBoundingClientRect().bottom;self.popunder.style.top=Math.ceil(offsetTop)+"px",setTimeout((function(){self.placeholder&&self.placeholder.classList.add("show"),self.popunder.classList.add("show")}),0)},this.pushSiblings=function(el){for(;el=el.nextElementSibling;)el.classList.add("selectionSharer"),el.classList.add("moveDown")},this.hidePopunder=function(cb){if(cb=cb||function(){},"fixed"==self.popunder)return self.popunder.style.bottom="-50px",cb();self.popunder.classList.remove("show"),self.placeholder&&self.placeholder.classList.remove("show");for(var els=document.getElementsByClassName("moveDown");el=els[0];)el.classList.remove("moveDown");setTimeout((function(){self.placeholder&&document.body.insertBefore(self.placeholder),cb()}),600)},this.show=function(e){setTimeout((function(){var sel=window.getSelection(),selection=self.getSelectionText(sel);if(!sel.isCollapsed&&selection&&selection.length>10&&selection.match(/ /)){var range,topOffset,top=sel.getRangeAt(0).getBoundingClientRect().top-5+window.scrollY-self.$popover.height(),left=0;if(e)left=e.pageX;else{var obj=sel.anchorNode.parentNode;left+=obj.offsetWidth/2;do{left+=obj.offsetLeft}while(obj=obj.offsetParent)}switch(self.selectionDirection(sel)){case"forward":left-=self.$popover.width();break;case"backward":left+=self.$popover.width();break;default:return}self.$popover.removeClass("anim").css("top",top+10).css("left",left).show(),setTimeout((function(){self.$popover.addClass("anim").css("top",top)}),0)}}),10)},this.hide=function(e){self.$popover.hide()},this.smart_truncate=function(str,n){if(!str||!str.length)return str;var toLong=str.length>n,s_=toLong?str.substr(0,n-1):str;return s_=toLong?s_.substr(0,s_.lastIndexOf(" ")):s_,toLong?s_+"...":s_},this.getRelatedTwitterAccounts=function(){var usernames=[],creator=$('meta[name="twitter:creator"]').attr("content")||$('meta[name="twitter:creator"]').attr("value");creator&&usernames.push(creator);for(var anchors=document.getElementsByTagName("a"),i=0,len=anchors.length;i<len;i++)if(anchors[i].attributes.href&&"string"==typeof anchors[i].attributes.href.value){var matches=anchors[i].attributes.href.value.match(/^https?:\/\/twitter\.com\/([a-z0-9_]{1,20})/i);matches&&matches.length>1&&-1==["widgets","intent"].indexOf(matches[1])&&usernames.push(matches[1])}return usernames.length>0?usernames.join(","):""},this.shareTwitter=function(e){e.preventDefault();var text="“"+self.smart_truncate(self.textSelection.trim(),114)+"”",url="https://twitter.com/intent/tweet?text="+encodeURIComponent(text)+"&related="+self.relatedTwitterAccounts+"&url="+encodeURIComponent(window.location.href);self.viaTwitterAccount&&text.length<114-self.viaTwitterAccount.length&&(url+="&via="+self.viaTwitterAccount);var w=640,h=440,left=screen.width/2-320,top=screen.height/2-220-100;return window.open(url,"share_twitter","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=640, height=440, top="+top+", left="+left),self.hide(),!1},this.shareFacebook=function(e){e.preventDefault();var text=self.htmlSelection.replace(/<p[^>]*>/gi,"\n").replace(/<\/p>|  /gi,"").trim(),url="https://www.facebook.com/dialog/share?app_id="+self.appId+"&display=popup&name="+encodeURIComponent(text)+"&link="+encodeURIComponent(self.url2share)+"&href="+encodeURIComponent(self.url2share)+"&redirect_uri="+encodeURIComponent(self.url2share),w=640,h=440,left=screen.width/2-320,top=screen.height/2-220-100;window.open(url,"share_facebook","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=640, height=440, top="+top+", left="+left)},this.shareEmail=function(e){var text=self.htmlSelection.replace(/<p[^>]*>/gi,"\n").replace(/<\/p>|  /gi,"").trim(),email={};return email.subject=encodeURIComponent("Quote from "+document.title),email.body=encodeURIComponent("“"+text+"”")+"%0D%0A%0D%0AFrom: "+document.title+"%0D%0A"+window.location.href,$(this).attr("href","mailto:?subject="+email.subject+"&body="+email.body),self.hide(),!0},this.render=function(){var popoverHTML='<div class="selectionSharer" id="selectionSharerPopover" style="position:absolute;">  <div id="selectionSharerPopover-inner">    <ul>      <li><a class="action tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>      <li><a class="action facebook" href="" title="Share this selection on Facebook" target="_blank">Facebook</a></li>      <li><a class="action email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="#FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>    </ul>  </div>  <div class="selectionSharerPopover-clip"><span class="selectionSharerPopover-arrow"></span></div></div>',popunderHTML='<div id="selectionSharerPopunder" class="selectionSharer">  <div id="selectionSharerPopunder-inner">    <label>Share this selection</label>    <ul>      <li><a class="action tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>      <li><a class="action facebook" href="" title="Share this selection on Facebook" target="_blank">Facebook</a></li>      <li><a class="action email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="#FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>    </ul>  </div></div>';self.$popover=$(popoverHTML),self.$popover.find("a.tweet").click(self.shareTwitter),self.$popover.find("a.facebook").click(self.shareFacebook),self.$popover.find("a.email").click(self.shareEmail),$("body").append(self.$popover),self.$popunder=$(popunderHTML),self.$popunder.find("a.tweet").click(self.shareTwitter),self.$popunder.find("a.facebook").click(self.shareFacebook),self.$popunder.find("a.email").click(self.shareEmail),$("body").append(self.$popunder),self.appId&&self.url2share&&$(".selectionSharer a.facebook").css("display","inline-block")},this.setElements=function(elements){"string"==typeof elements&&(elements=$(elements)),self.$elements=elements instanceof $?elements:$(elements),self.$elements.mouseup(self.show).mousedown(self.hide).addClass("selectionShareable"),self.$elements.bind("touchstart",(function(e){self.isMobile=!0})),document.onselectionchange=self.selectionChanged},this.selectionChanged=function(e){self.isMobile&&(self.lastSelectionChanged&&clearTimeout(self.lastSelectionChanged),self.lastSelectionChanged=setTimeout((function(){self.showPopunder(e)}),300))},this.render(),options.elements&&this.setElements(options.elements)};$.fn.selectionSharer=function(){var sharer;return(new SelectionSharer).setElements(this),this},"function"==typeof define?define((function(){return SelectionSharer.load=function(name,req,onLoad,config){var sharer;(new SelectionSharer).setElements("p"),onLoad()},SelectionSharer})):window.SelectionSharer=SelectionSharer}(jQuery),$("p").selectionSharer(),window.pagePrgoress=function(t,e){null==e&&(e={});var s=document.querySelector(t);if(!s)return console.error("Object not found with "+t),null;var o={color:"#03A9F4",size:"5px",position:"top",speed:"500"};switch(s.style.position="fixed",s.style.background=n("color"),s.style.height=n("size"),n("position")){case"bottom":s.style.bottom="0px";break;default:s.style.top="0px"}return s.style.transition="width "+n("speed")+"ms",window.addEventListener("scroll",(function(t){var e=document.documentElement,o=document.body,n="scrollTop",i="scrollHeight",r=parseInt((e[n]||o[n])/((e[i]||o[i])-e.clientHeight)*100);s.style.width=r+"vw"})),s;function n(t){return e[t]?e[t]:o[t]}},window.pagePrgoress=function(t,e){null==e&&(e={});var s=document.querySelector(t);if(!s)return console.error("Object not found with "+t),null;var o={color:"#03A9F4",size:"5px",position:"top",speed:"500"};switch(s.style.position="fixed",s.style.background=n("color"),s.style.height=n("size"),n("position")){case"bottom":s.style.bottom="0px";break;default:s.style.top="0px"}return s.style.transition="width "+n("speed")+"ms",window.addEventListener("scroll",(function(t){var e=document.documentElement,o=document.body,n="scrollTop",i="scrollHeight",r=parseInt((e[n]||o[n])/((e[i]||o[i])-e.clientHeight)*100);s.style.width=r+"vw"})),s;function n(t){return e[t]?e[t]:o[t]}},window.pagePrgoress=function(t,e){null==e&&(e={});var s=document.querySelector(t);if(!s)return console.error("Object not found with "+t),null;var o={color:"#03A9F4",size:"5px",position:"top",speed:"500"};switch(s.style.position="fixed",s.style.background=n("color"),s.style.height=n("size"),n("position")){case"bottom":s.style.bottom="0px";break;default:s.style.top="0px"}return s.style.transition="width "+n("speed")+"ms",window.addEventListener("scroll",(function(t){var e=document.documentElement,o=document.body,n="scrollTop",i="scrollHeight",r=parseInt((e[n]||o[n])/((e[i]||o[i])-e.clientHeight)*100);s.style.width=r+"vw"})),s;function n(t){return e[t]?e[t]:o[t]}},pagePrgoress(".page-progress",{color:"rgb(233, 30, 99)",size:"5px",position:"top",speed:"100"}),$(document).ready((function(){for(let key of Object.keys(GA))if(GA[key].IDS)for(let id of GA[key].IDS){let element=document.getElementById(id);element&&addEventListnerForGA(element,key)}else if(GA[key].CLASS){let elemets=document.getElementsByClassName(GA[key].CLASS);if(elemets)for(let el of elemets)addEventListnerForGA(el,key)}function addEventListnerForGA(element,key){element.addEventListener("click",e=>{let origEl=e.target||e.srcElement,val=e.target&&e.target.innerText;console.log("GA Event Fired"),ga("send","event",GA.CATAGORY,GA[key].ACTION+"-"+val,`${window.location.href} ->${origEl.href}`)})}}));const featuredArticles=[{image:"update-android-version-main.jpg",url:"/how-to/how-to-check-and-update-android-version/",title:"How To Check And Update Android Version"},{image:"best-pandemic-movies.jpg",url:"/top-things/best-pandemic-movies-on-netflix-to-watch-in-2020/",title:"Best Pandemic movies on Netflix To Watch In 2020"},{image:"YouTube-Vanced-feature-image-database.png",url:"/tutorials/youtube-vanced-everything-need-know/",title:"YouTube Vanced- everything you need to know About it"},{image:"android-battery-drains-quickly-main.jpg",url:"/top-things/reasons-why-your-android-battery-drains-quickly/",title:"10 Reasons Why Your Android Battery Drains Quickly"},{image:"keyboard-apps-for-android-main.jpg",url:"/top-things/best-keyboard-apps-for-android/",title:"5 Best Keyboard Apps for Android To Increase Your Productivity"},{image:"best-allergy-apps-main.jpg",url:"/top-things/best-pollen-and-allergy-apps/",title:"Best Pollen and Allergy Apps to Beat Allergy"},{image:"online-youtube-video-downloader-main.jpg",url:"/top-things/10-best-online-youtube-video-downloader/",title:"10 Best Online YouTube Video Downloader"},{image:"youtube-alternative-app-main.jpg",url:"/top-things/youtube-alternatives-for-android-phone/",title:"10 Best Youtube Alternatives App For Android Phone"},{image:"best-web-browsers-main.jpg",url:"/top-things/best-web-browsers-for-windows-10/",title:"Best Web Browsers for Windows 10 - (Updated list 2020)"},{image:"block-ads-on-youtube-1-main.jpg",url:"/how-to/block-ads-on-youtube/",title:"4 Simple Ways To Block Ads On YouTube"},{image:"javascript-frameworks-database.jpeg",url:"/programming/top-5-best-popular-javascript-frameworks-to-learn-in-2019/",title:"Top 5 Best Popular JavaScript Frameworks to learn in 2019"},{image:"watch-youtube-videos-together-main.jpg",url:"/top-things/10-ways-to-watch-youtube-videos-together-with-friends/",title:"10 Ways to Watch YouTube Videos Together With Friends"},{image:"access-your-home-router-main.jpg",url:"/how-to/access-router-outside-network/",title:"How To Access Router From Outside Network"},{image:"android-phone-as-a-webcam-main.jpg",url:"/how-to/how-to-use-your-android-phone-as-a-webcam-for-pc/",title:"How To Use Your Android Phone As A WebCam For PC"},{image:"ai-based-netflix-series-and-movies-main.jpg",url:"/top-things/ai-based-netflix-series-and-movies/",title:"AI-based Netflix Series and Movies To Binge While On Lockdown"},{image:"google-alternatives-main.jpg",url:"/top-things/google-alternatives/",title:"Google Alternatives: List Of 5 Best Google Alternatives Search Engines"},{image:"Work-and-Fitness-database.png",url:"/top-things/fitness-apps-for-android-to-track-your-workout/",title:"Top 5 Best Fitness Apps for Android "},{image:"best-procreate-alternatives-main.jpg",url:"/top-things/best-procreate-alternatives-for-android-ios-mac-and-windows-drawing-apps/",title:"Drawing Apps - Best Procreate Alternatives for Android, iOS, Mac, and Windows"},{image:"whatsapp-alternatives-main.jpg",url:"/top-things/best-whatsapp-alternatives-that-actually-respect-your-privacy-and-safety/",title:"8 Best WhatsApp Alternatives that Actually Respect Your Privacy and Safety"},{image:"best-stock-trading-apps-main.jpg",url:"/top-things/best-stock-trading-apps-in-india/",title:"Best Stock Trading Apps In India 2021"}];if(!document.getElementById("disqus_thread")&&!document.getElementById("web-app-droidtechknow")){const src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.1.2/dist/js/splide.min.js";function loadSlider(){setTimeout(()=>{window.Splide?makeFeaturedSlider():loadSlider()},100)}createScript(src),loadSlider()}function makeFeaturedSlider(){var innerHTML="";let i=0;for(;featuredArticles.length>i+1;)0==i||7==i?(innerHTML+=`<li class="splide__slide main">${html(i)}</div>`,i++):(innerHTML+=`<li class="splide__slide"><div class="side">${html(i)}</div>`,i++,innerHTML+=`<div class="side">${html(i)}</div></li>`,i++);function html(i){const URL=`https://droidtechknow.com${featuredArticles[i].url}`,TITLE=`${featuredArticles[i].title}`;return`<a onclick="sendGA('${GA.FEATURED_ARTICLE.ACTION} - ${TITLE}', '${URL}')" href="${URL}">${TITLE}</a><img alt="${featuredArticles[i].title}" class="img img-responsive" data-splide-lazy="${URL}images/${featuredArticles[i].image}"></img>`}document.getElementById("feturedSlider").innerHTML=innerHTML,new Splide(".splide",{type:"loop",perPage:4,rewind:!0,perMove:1,height:"50vh",autoplay:!0,lazyLoad:"sequential",breakpoints:{425:{perPage:1,height:"40vh"},768:{perPage:2,height:"40vh"}},rewind:!0}).mount()}function slideLeftRight(slideDirection){var slideLeft=document.getElementById("slideLeft"),slideRight=document.getElementById("slideRight"),aside=document.getElementsByTagName("aside")[0],article=document.getElementsByTagName("article")[0];"slideLeft"===slideDirection?(article.style.width="100%",aside.style.width="100%",slideLeft.style.visibility="hidden",slideRight.style.visibility="visible"):"slideRight"===slideDirection&&(article.style.width="66.6666%",aside.style.width="33.33%",slideLeft.style.visibility="visible",slideRight.style.visibility="hidden"),sendGA("SIDEBAR_SLIDER_CLICK",slideDirection)}function moveToScreen(id){"#feedback-query-yes"===id?sendFeedback(!0).then(res=>{$("#yes-feedback-submission").show("slow"),$("#feedback-from-page").hide("slow")},()=>{$("#feedback-from-page").hide("slow"),$("#feedback-error").show("slow")}):"#feedback-query-no"===id&&($("#no-feedback-submission").show("slow"),$("#feedback-from-page").hide("slow"))}function sendFeedback(isArticleHelpful,comment=document.getElementById("support-feedback-comment").value){const loadingEle='<div class="loader" id="feedback-loader"><img title="Loading" alt="loading" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP89vFjPQAJFgNZX2NmpAAAAABJRU5ErkJggg==" data-src="//droidtechknow.com/images/image-loading.svg" class="img img-responsive lazyload" /></div>',articlePageTitle=sessionStorage.getItem("title"),postId=sessionStorage.getItem("postId"),postUrl=sessionStorage.getItem("url");var feedbackData={isArticleHelpful:isArticleHelpful,postId:postId,postUrl:postUrl};if(isArticleHelpful)$("#feedback-from-page").append(loadingEle);else{$("#no-feedback-submission").append(loadingEle);for(var rates=document.getElementById("feedback-negative-radio-box").children,rate_value="",i=0;i<rates.length;i++)rates[i].checked&&(rate_value=rates[i].value)}return!isArticleHelpful&&comment&&(feedbackData.comment=comment),!isArticleHelpful&&rate_value&&(feedbackData.default=rate_value),new Promise((resolve,reject)=>{fetch("/api/feedback.php",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({data:feedbackData})}).then(res=>res.json()).then(res=>{res.error?(document.getElementById("feedback-loader").remove(),document.getElementById("feedback-error-text").innerHTML="Special characters are not allowed. Please try again after removing special characters",reject()):(document.getElementById("feedback-loader").remove(),resolve())},e=>{document.getElementById("feedback-error-text").innerHTML="Something went wrong. Please try again.",document.getElementById("feedback-loader").remove(),reject()})})}$(document).ready((function(){$(".no-js").removeClass("no-js"),$(".support-feedback").css("overflow","hidden"),$("#feedback-query-yes").click((function(){moveToScreen("#feedback-query-yes")})),$("#feedback-query-no").click((function(){moveToScreen("#feedback-query-no")})),$("#skip-this").click((function(){sendFeedback(!1).then(res=>{$("#no-feedback-submission").hide("slow"),$("#thank-you-feedback").show("slow")},()=>{$("#no-feedback-submission").hide("slow"),$("#feedback-error").show("slow")})})),$("#send-feedback").click((function(){sendFeedback(!1).then(res=>{$("#no-feedback-submission").hide("slow"),$("#thank-you-feedback").show("slow")},()=>{$("#no-feedback-submission").hide("slow"),$("#feedback-error").show("slow")})})),$(".feedback-close").click((function(){$("#no-feedback-submission").hide("slow"),$("#yes-feedback-submission").hide("slow"),$("#feedback-error").hide("slow"),$("#thank-you-feedback").hide("slow"),$("#feedback-from-page").show("slow")}))}));
