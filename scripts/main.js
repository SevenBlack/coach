$j(document).ready(function() {
	$j("a").focus(function() {
		$j(this).blur()
	});

	function m() {
		$j("body").css({
			background: "none"
		})
	}
	setTimeout(m, 3000);
	var l = window.location.href;
	var g = l.split("?")[1];
	if (g == "fav") {
		$j(".maccount_middle .dl_myinfo").find("dd").eq(0).show();
		$j(".maccount_middle .dl_myinfo").find("dd").eq(1).hide();
		$j(".maccount_middle .dl_fav").find("dd").eq(1).show();
		$j(".maccount_middle .dl_fav").find("dd").eq(0).hide();
		$j(".maccount_middle .dl_myinfo").find(".addminimg1").show();
		$j(".maccount_middle .dl_myinfo").find(".addminimg2").hide();
		$j(".maccount_middle .dl_fav").find(".addminimg2").show();
		$j(".maccount_middle .dl_fav").find(".addminimg1").hide();
		$j(".nav .menu_register,.nav .menu_login").parent("li").hide()
	}
	if (g == "login=true" || (g && g.split("&")[0] == "login=true")) {
		var k = getParam("loadtype");
		if (k && $j("#" + k).length > 0) {
			var b = $j("#" + k).attr("loginSuccessUrl");
			if (b) {
				$j("#login-form > #loginSuccessUrl").val(b)
			}
		}
		$j(".dialog_all").hide();
		$j("#menu_login").fadeIn(200)
	}
	if (g == "nologinfav") {
		$j(".maccount_middle .dl_myinfo").find("dd").eq(0).show();
		$j(".maccount_middle .dl_myinfo").find("dd").eq(1).hide();
		$j(".maccount_middle .dl_fav").find("dd").eq(1).show();
		$j(".maccount_middle .dl_fav").find("dd").eq(0).hide();
		$j(".dl_myinfo .addminimg1").show();
		$j(".dl_myinfo .addminimg2").hide();
		$j(".dl_fav .addminimg2").show();
		$j(".dl_fav .addminimg1").hide();
		$j("#user_login_item").hide();
		$j(".nav .menu_register,.nav .menu_login").parent("li").show()
	}
	if (g == "order") {
		$j(".maccount_middle .dl_myinfo").find("dd").eq(0).show();
		$j(".maccount_middle .dl_myinfo").find("dd").eq(1).hide();
		$j(".maccount_middle .dl_myinfo").find(".addminimg1").show();
		$j(".maccount_middle .dl_myinfo").find(".addminimg2").hide();
		$j(".maccount_middle .dl_myorder").find("dd").eq(0).hide();
		$j(".maccount_middle .dl_myorder").find("dd").eq(1).show();
		$j(".maccount_middle .dl_myorder").find(".addminimg2").show();
		$j(".maccount_middle .dl_myorder").find(".addminimg1").hide()
	}
	if (g == "menleather") {
		popSartorialist("850", "550", domain_image + "/statics/assets/men-leather/index.html")
	}
	if (g == "register" || (g && g.split("&")[0] == "register")) {
		var b = _contextPath + "/member/getCountry.json";
		loxia.asyncXhrPost(b, {}, {
			success: function(p, q) {
				if (p) {
					$j(p.countryList).each(function(s, u) {
						var r = $j("<option>");
						r.attr("value", "");
						r.attr("iddCode", "");
						$j("#country").val("CN");
						$j("#iddCode").val("86");
						var t = $j("<option>");
						t.attr("value", u.isoCode);
						t.attr("iddCode", u.iddCode);
						t.text(u.chineseName + "(" + u.localName + ")");
						$j("#country").append(t)
					})
				} else {}
			}
		});
		$j("#country").change(function() {
			var p = $j("#country > option:selected").attr("iddCode");
			$j("#iddCode").val(p)
		});
		var o = $j("#country > option:selected").attr("iddCode");
		$j("#iddCode").val(o);
		$j(".dialog_all").hide();
		var k = getParam("loadtype");
		if (k) {
			$j("#email").val(k)
		}
		$j("#menu_register").show()
	}
	$j(".menu p #hidemenu").click(function() {
		$j(".menu_content").slideUp(100);
		$j(this).hide();
		$j(".menu p #showmenu").show()
	});
	$j(".menu p #showmenu").click(function() {
		$j(".menu_content").slideDown(100);
		$j(this).hide();
		$j(".menu p #hidemenu").show()
	});
	$j(".menu ul li span a").mouseover(function() {
		$j(".menu ul li dl").hide();
		$j(this).parent().parent("li").find("dl").show()
	});
	$j(".menu ul li").mouseleave(function() {
		$j(".menu ul li dl").hide()
	});
	var f = parseInt($j(window).width());
	if (f < 660) {
		$j(".header").css("width", "660px");
		$j(".product_list").css("width", "405px")
	} else {
		$j(".header").css("width", "100%");
		$j(".product_list").css("width", "85%");
		$j(".product_list2").css("width", "95%")
	}
	var c = $j(".hpBackground"),
		h = $j(window).width();
	c.length > 0 && c.css("width", h);
	$j(window).resize(function() {
		var p = parseInt($j(window).width());
		if (p < 660) {
			$j(".header").css("width", "660px");
			$j(".product_list").css("width", "405px")
		} else {
			$j(".header").css("width", "100%");
			$j(".product_list").css("width", "85%")
		}
		c.length > 0 && c.css("width", p)
	});
	var n;
	$j(document).click(function() {
		n = $j(document).height()
	});
	$j(".dialog_all").detach().appendTo("body");
	$j(".black_cross").click(function() {
		$j(".dialog_all").fadeOut(15)
	});
	$j(".menu_register,.btn_register,#register_no").click(function() {
		var r = window.location.protocol;
		if (r == "http:" && !(g == "register" || (g && g.split("&")[0] == "register"))) {
			var s = window.location.href;
			window.location.href = buildHttpsUrl(s, "register");
			return false
		}
		var q = _contextPath + "/member/getCountry.json";
		loxia.asyncXhrPost(q, {}, {
			success: function(t, u) {
				if (t) {
					$j(t.countryList).each(function(w, y) {
						var v = $j("<option>");
						v.attr("value", "");
						v.attr("iddCode", "");
						$j("#country").val("CN");
						$j("#iddCode").val("86");
						var x = $j("<option>");
						x.attr("value", y.isoCode);
						x.attr("iddCode", y.iddCode);
						x.text(y.chineseName + "(" + y.localName + ")");
						$j("#country").append(x)
					})
				} else {}
			}
		});
		$j("#country").change(function() {
			var t = $j("#country > option:selected").attr("iddCode");
			$j("#iddCode").val(t)
		});
		var p = $j("#country > option:selected").attr("iddCode");
		$j("#iddCode").val(p);
		$j(".dialog_all").hide();
		$j("#menu_register").show()
	});
	$j("#join_me").click(function() {
		var t = window.location.pathname;
		var r = t.substring(t.lastIndexOf("/"), t.length);
		if (r == "/member_register_page.htm") {
			window.location.reload()
		} else {
			var s = window.location.protocol;
			if (s == "http:") {
				var u = window.location.href;
				window.location.href = buildHttpsUrl(u, "register", ["loadtype=" + $j("#email_signup").val()]);
				return false
			}
			var q = _contextPath + "/member/getCountry.json";
			loxia.asyncXhrPost(q, {}, {
				success: function(v, w) {
					if (v) {
						$j(v.countryList).each(function(y, A) {
							var x = $j("<option>");
							x.attr("value", "");
							x.attr("iddCode", "");
							$j("#country").val("CN");
							$j("#iddCode").val("86");
							var z = $j("<option>");
							z.attr("value", A.isoCode);
							z.attr("iddCode", A.iddCode);
							z.text(A.chineseName + "(" + A.localName + ")");
							$j("#country").append(z)
						})
					} else {}
				}
			});
			$j("#country").change(function() {
				var v = $j("#country > option:selected").attr("iddCode");
				$j("#iddCode").val(v)
			});
			var p = $j("#country > option:selected").attr("iddCode");
			$j("#iddCode").val(p);
			$j(".dialog_all").hide();
			$j("#menu_register").show();
			$j(".footer_login").hide();
			$j("#email").val($j("#email_signup").val())
		}
	});
	$j(".menu_login").click(function() {
		var q = window.location.protocol;
		if (q == "http:") {
			var r = window.location.href;
			singInLoadHandler();
			window.location.href = buildHttpsUrl(r, "login=true", ["loadtype=" + $j(this).attr("id")]);
			return false
		}
		var p = $j(this).attr("loginSuccessUrl");
		$j("#login-form > #loginSuccessUrl").val(p);
		$j(".dialog_all").hide();
		$j("#menu_login").fadeIn(200);
		singInLoadHandler();
		return false
	});
	$j(".forget_pwd1").click(function() {
		$j(".dialog_all").hide();
		$j("#forget_pwd1").fadeIn(200)
	});
	$j(".forget_pwd3").click(function() {
		$j(".dialog_all").hide();
		$j("#forget_pwd3").fadeIn(200)
	});
	$j(".conbuy_btn").click(function() {
		$j(".dialog_all").hide()
	});
	$j(".pop_ordercode").click(function() {
		$j("#order_detail").fadeIn(200)
	});
	$j(".nav_favorite").click(function(p) {
		p.stopPropagation();
		$j(".product_detail").fadeOut(15);
		$j("#wishlist_dia").fadeIn(200)
	});
	$j("#miniCartBox .miniCart_btm .grey_btn").click(function() {
		$j("#miniCartBox").hide()
	});
	$j("#miniCartLink").click(function() {
		$j("#miniCartBox").show()
	});
	if ($j.browser.msie) {
		if ($j.browser.version == 6) {
			$j(".menu").css({
				position: "absolute",
				top: "0"
			});
			$j(window).scroll(function() {
				$j(".menu").css({
					position: "absolute",
					top: $j(window).scrollTop()
				})
			})
		}
	}
	$j(".black_cross").live("click", function() {
		$j(".product_detail").fadeOut(15).remove()
	});
	var a;
	$j(".color_choose li").click(function() {
		var p = $j(".color_choose li").index($j(this));
		$j(".color_choose li").removeClass("color_choose_select");
		$j(this).addClass("color_choose_select");
		$j(".cococler").text($j(this).attr("title"));
		$j(".product_detail dl").hide().eq(p).show()
	});
	$j(".product_detail dl dd img").click(function() {
		$j(".product_detail dl dt img").attr("src", $j(this).attr("src"))
	});
	$j(".product_list li a img[rel]:not([rel='']),#product_list2 .product_popup img,#product_list2 img[rel]:not([rel='']),#product_list2 .product_list2_info,#product_list_one .pro_samesize img,.wishlist li a img,#search_page .new3_r li img").click(function() {
		if ($j(this).attr("rel") != "no") {
			a = $j(this).attr("src");
			if (a) {
				var q = a.indexOf("?");
				if (q > -1) {
					a = a.substr(0, q + 1) + "$mainlarge$"
				}
			}
			var p = $j(window).scrollTop();
			$j(".product_detail").css("top", p + 100).fadeIn(300);
			$j("#wishlist_dia .dislog_advance img").attr("src", a);
			$j(".product_detail dt img").attr("src", a)
		}
	});
	$j(".example").live("click", function() {
		var p = $j(window).scrollTop();
		$j(".dialog_all").fadeOut(15);
		$j("#example").css("top", p + 110).detach().appendTo("body").fadeIn(200)
	});
	var e;
	var d;
	$j("#product_tab .reviw_rating").each(function() {
		e = $j(this).parent().find(".rating_num").html();
		d = 5 - parseInt(e);
		$j(this).css({
			"background-position": (-d * 20) + "px 0"
		})
	});
	$j("#product_tab_title a").live("focus", function() {
		$j(this).blur()
	});
	$j("#product_tab_title a").live("click", function() {
		var p = $j(this).index();
		$j("#product_tab_title a").removeClass("thisHover");
		$j(this).addClass("thisHover");
		$j("#product_tab .pdl_detail").hide();
		$j("#product_tab .pdl_detail").eq(p).show()
	});
	$j(".nav .search_text").focus(function() {
		document.onclick = function(q) {
			var r = q || window.event;
			var p = r.srcElement || r.target;
			while (p) {
				if (p.id == "searchBox") {
					return
				}
				p = p.parentNode
			}
			$j(".nav .new1").show()
		}
	}).blur(function() {
		document.onclick = function(q) {
			var r = q || window.event;
			var p = r.srcElement || r.target;
			while (p) {
				if (p.id == "searchBox") {
					return
				}
				p = p.parentNode
			}
			$j(".nav .new1").hide()
		}
	});
	$j(".menu .leftMenuCategory").click(function() {
		if ($j(this).next().is(":hidden")) {
			$j(".menu .leftMenuList").hide();
			$j(this).next().show()
		}
	});
	(function() {
		var q;
		var p;
		$j("#women a img").mouseover(function() {
			q = $j(this).attr("src");
			p = q.substring(0, q.length - 4);
			$j(this).attr("src", p + "_hover.jpg")
		}).mouseout(function() {
			$j(this).attr("src", q)
		});
		$j("#men a img").mouseover(function() {
			q = $j(this).attr("src");
			p = q.substring(0, q.length - 4);
			$j(this).attr("src", p + "_hover.png")
		}).mouseout(function() {
			$j(this).attr("src", q)
		});
		$j("#menuMen a img").mouseover(function() {
			q = $j(this).attr("src");
			p = q.substring(0, q.length - 4);
			$j(this).attr("src", p + "-on.png")
		}).mouseout(function() {
			$j(this).attr("src", q)
		});
		$j("#newgift a img").mouseover(function() {
			q = $j(this).attr("src");
			p = q.substring(0, q.length - 4);
			$j(this).attr("src", p + "_hover.jpg")
		}).mouseout(function() {
			$j(this).attr("src", q)
		});
		$j("#new_women a img").mouseover(function() {
			q = $j(this).attr("src");
			p = q.substring(0, q.length - 4);
			$j(this).attr("src", p + "_hover.jpg")
		}).mouseout(function() {
			$j(this).attr("src", q)
		});
		$j("#new_men a img").mouseover(function() {
			q = $j(this).attr("src");
			p = q.substring(0, q.length - 4);
			$j(this).attr("src", p + "_hover.jpg")
		}).mouseout(function() {
			$j(this).attr("src", q)
		})
	})()
});

function popDetail(b) {
	var c = _contextPath + "/product/" + b + "/detail.json";
	if (b.indexOf("/") >= 0) {
		c = b
	}
	var a = $j(window).scrollTop();
	data = loxia.syncXhr(c, {
		da: new Date().getTime()
	});
	if (data && data.flag != "error") {
		$j(".product_detail").remove();
		$j("body").append(data);
		$j(".product_detail").css("top", a + 100).fadeIn(300)
	} else {
		window.location.href = _contextPath + "/errors/producterror.htm"
	}
}

function pro_moveInfo1(a) {
	$j(a).mouseover(function(f) {
		if ($j(this).attr("rel") != "no" && $j(this).attr("rel") != "") {
			var d = f.clientX;
			var c = f.clientY;
			var b = $j(window).scrollTop();
			$j(".product_explain").detach().appendTo("body").stop(true, true).show().css({
				top: c + b + 25,
				left: d - 20
			});
			$j(".product_explain .product_explain_title").html($j(this).attr("alt"));
			$j(".product_explain .product_explain_price").html($j(this).attr("rel"));
			if ($j(this).attr("value") == "noarrow") {
				$j(".product_explain .arrow").hide()
			} else {
				$j(".product_explain .arrow").show()
			}
		}
	});
	$j(a).mousemove(function(f) {
		if ($j(this).attr("rel") != "no" && $j(this).attr("rel") != "") {
			var d = f.clientX;
			var c = f.clientY;
			var b = $j(window).scrollTop();
			$j(".product_explain").detach().appendTo("body").stop(true, true).show().css({
				top: c + b + 25,
				left: d - 20
			});
			$j(".product_explain .product_explain_title").html($j(this).attr("alt"));
			$j(".product_explain .product_explain_price").html($j(this).attr("rel"));
			if ($j(this).attr("value") == "noarrow") {
				$j(".product_explain .arrow").hide()
			} else {
				$j(".product_explain .arrow").show()
			}
		}
	});
	$j(a).mouseout(function() {
		if ($j(this).attr("rel") != "no" && $j(this).attr("rel") != "") {
			$j(".product_explain").hide()
		}
	})
}

function cancelhide() {
	$j("#makesure_pop_box").fadeOut(150)
}

function showpop() {
	var a = $j(window).scrollTop();
	$j("#makesure_pop_box").css("top", a + 80).fadeIn(300)
}

function showsurepop(c, a, b) {
	document.getElementById("makesure_pop_title").innerHTML = c;
	showpop();
	if (a) {
		if (document.getElementById("surebtn")) {
			document.getElementById("surebtn").onclick = function() {
				window.location.href = a;
				if (b) {
					b()
				}
			}
		}
	} else {
		if (b) {
			document.getElementById("surebtn").onclick = function() {
				cancelhide();
				b()
			}
		} else {
			document.getElementById("surebtn").onclick = function() {
				cancelhide()
			}
		}
	}
	if (document.getElementById("cancelbtn")) {
		document.getElementById("cancelbtn").onclick = function() {
			cancelhide()
		}
	}
}

function exit() {
	var a = _contextPath + "/member/logout.json";
	loxia.asyncXhr(a, {}, {
		success: function(b, c) {
			if (b && b.result) {
				setTimeout(function() {
					var d = window.location.host;
					if (d.indexOf("http:") < 0) {
						d = "http://" + d
					}
					if (typeof window.WeixinJSBridge != "undefined" && typeof window.WeixinJSBridge.invoke != "undefined") {
						window.location.href = d + "?loginOut=wechat"
					} else {
						window.location.href = $j(document.body).attr("root") + "/"
					}
				}, 500)
			}
		}
	})
}

function buildHttpsUrl(c, a, g) {
	var d = /#+$/;
	var e = c.replace(d, "");
	var f = "";
	if (e.indexOf("#") > 0) {
		var b = e.indexOf("#");
		f = e.substring(b);
		e = e.substring(0, b)
	}
	e = clearHttpsParams(e);
	if (!g) {
		g = "[]"
	}
	if (e.indexOf("?") > 0) {
		if (e.indexOf("?" + a) < 0) {
			e = e.replace("?", "?" + a + "&");
			e = buildArgsForUrl(e, g)
		} else {
			e = buildArgsForUrl(e, g)
		}
	} else {
		e = e + "?" + a;
		e = buildArgsForUrl(e, g)
	}
	return e + f
}

function buildArgsForUrl(c, b) {
	if (b && b.length > 0) {
		for (i = 0; i < b.length; i++) {
			var a = b[i];
			if (a.indexOf("=") > 0) {
				var d = a.split("=")[0];
				var e = a.split("=")[1];
				c = changeURLPar(c, d, e)
			}
		}
	}
	return c
}

function changeURLPar(url, par, par_value) {
	var pattern = par + "=([^&]*)";
	var replaceText = par + "=" + par_value;
	if (url.match(pattern)) {
		var tmp = "/\\" + par + "=[^&]*/";
		tmp = url.replace(eval(tmp), replaceText);
		return (tmp)
	} else {
		if (url.match("[?]")) {
			return url + "&" + replaceText
		} else {
			return url + "?" + replaceText
		}
	}
	return url
}

function getParam(d, c) {
	if (!c) {
		c = location.href
	}
	if (c.indexOf("#") > 0) {
		var b = c.indexOf("#");
		c = c.substring(0, b)
	}
	var e = c.substring(c.indexOf("?") + 1, c.length).split("&");
	var a = {};
	for (i = 0; j = e[i]; i++) {
		a[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length)
	}
	var f = a[d.toLowerCase()];
	if (typeof(f) == "undefined") {
		return ""
	} else {
		return f
	}
}

function clearHttpsParams(b) {
	var d = /#+$/;
	b = b.replace(d, "");
	var a = getParam("loadtype", b);
	if (b.indexOf("?register") > 0) {
		if (a) {
			b = changeURLPar(b, "loadtype", "");
			b = b.replace("&loadtype=", "")
		}
		b = b.replace("register", "")
	}
	if (b.indexOf("?login=true") > 0) {
		if (a) {
			b = changeURLPar(b, "loadtype", "");
			b = b.replace("&loadtype=", "")
		}
		b = b.replace("login=true", "")
	}
	if (b.indexOf("?regandlogin") > 0) {
		var e = getParam("product", b);
		if (e) {
			b = changeURLPar(b, "product", "");
			b = b.replace("&product=", "")
		}
		var c = getParam("size", b);
		if (c) {
			b = b.replace("&size=" + c, "")
		}
		b = b.replace("regandlogin", "")
	}
	if (b.indexOf("?&") > 0) {
		b = b.replace("?&", "?")
	}
	return b.replace(/\?+$/, "")
}

function isMobile(a) {
	var b = new RegExp("(MIDP)|(WAP)|(UP.Browser)|(Smartphone)|(Obigo)|(Mobile)|(AU.Browser)|(wxd.Mms)|(WxdB.Browser)|(CLDC)|(UP.Link)|(KM.Browser)|(UCWEB)|(SEMC-Browser)|(Mini)|(Symbian)|(Palm)|(Nokia)|(Panasonic)|(MOT-)|(SonyEricsson)|(NEC-)|(Alcatel)|(Ericsson)|(BENQ)|(BenQ)|(Amoisonic)|(Amoi-)|(Capitel)|(PHILIPS)|(SAMSUNG)|(Lenovo)|(Mitsu)|(Motorola)|(SHARP)|(WAPPER)|(LG-)|(LG/)|(EG900)|(CECT)|(Compal)|(kejian)|(Bird)|(BIRD)|(G900/V1.0)|(Arima)|(CTL)|(TDG)|(Daxian)|(DAXIAN)|(DBTEL)|(Eastcom)|(EASTCOM)|(PANTECH)|(Dopod)|(Haier)|(HAIER)|(KONKA)|(KEJIAN)|(LENOVO)|(Soutec)|(SOUTEC)|(SAGEM)|(SEC-)|(SED-)|(EMOL-)|(INNO55)|(ZTE)|(iPhone)|(Android)|(Windows CE)|(Wget)|(Java)|(curl)|(Opera)");
	return b.test(a)
}

function checkLogin() {
	var b = _contextPath + "/checkLogin.json";
	var a = loxia.syncXhrPost(b, {
		da: new Date().getTime()
	});
	return a.isLogin
}

function moveTo(b) {
	if (b.length > 0) {
		var c = b.offset().top;
		var a = b.height();
		$j("html,body").animate({
			scrollTop: c - a
		}, 200)
	}
}
var $$ = function(a) {
	if (document.addEventListener) {
		window.addEventListener("load", a, false)
	} else {
		if (document.attachEvent) {
			window.attachEvent("onload", a)
		}
	}
};

function createCookie(b, e, h, c, f) {
	var a = "";
	if (h) {
		var g = new Date();
		g.setTime(g.getTime() + (h * 24 * 60 * 60 * 1000));
		a = "; expires=" + g.toGMTString()
	}
	c = c ? "; domain=" + c : "";
	f = "; path=" + (f ? f : "/");
	document.cookie = b + "=" + e + a + f + c
}

function eraseCookie(a, b, c) {
	setCookie(a, "", -1, b, c)
}

function isWeiXin() {
	var a = window.navigator.userAgent.toLowerCase();
	if (a.match(/MicroMessenger/i) == "micromessenger") {
		return true
	} else {
		return false
	}
}
$j(document).ready(function() {
	var g = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
		d = g ? "touchstart" : "mousedown",
		f = g ? "touchend touchcancel" : "click",
		c = function(k) {
			var h = g ? k.originalEvent.changedTouches : k;
			return {
				x: h.clientX ? h.clientX : h[0].pageX,
				y: h.clientY ? h.clientY : h[0].pageY
			}
		};
	$j.each("sp_tap".split(" "), function(k, h) {
		$j.fn[h] = function(l) {
			return l ? this.bind(h, l) : this.trigger(h)
		};
		if ($j.attrFn) {
			$j.attrFn[h] = true
		}
	});

	function e(n, k, m, h) {
		var l = m.type;
		m.type = k;
		if (h) {
			$j.event.trigger(m, undefined, n)
		} else {
			$j.event.dispatch.call(n, m)
		}
		m.type = l
	}
	$j.event.special.sp_tap = {
		setup: function(n, m, l) {
			function o() {
				return {
					sx: 0,
					sy: 0,
					ex: 0,
					ey: 0
				}
			}
			var k = o();
			var h = $j(this);
			if (g) {
				h.bind(d, function(p) {
					var q = c(p);
					k.sx = q.x;
					k.sy = q.y
				}).bind(f, function(p) {
					var q = c(p);
					k.ex = q.x;
					k.ey = q.y;
					if (k.sx == k.ex && k.sy == k.ey) {
						e(h[0], "sp_tap", p);
						k = o()
					}
				})
			} else {
				h.bind(f, function(p) {
					e(h[0], "sp_tap", p)
				})
			}
		},
		teardown: function(h) {
			$j(this).unbind(f).unbind(d)
		}
	};
	var a = "88%",
		b = $j(".page_left");
	$j(".page_slide").on("sp_tap", function() {
		var h = $j("body");
		if (h.hasClass("page_fixed")) {
			h.removeClass("page_fixed")
		} else {
			h.addClass("page_fixed")
		}
		return false
	});
	$j(".menus-events").on("sp_tap", function() {
		var l = $j(this).siblings(".sub-menu"),
			m = $j(this).find(".slide_btn"),
			h = m.closest(".menus-events");
		if (l.is(":visible")) {
			l.hide();
			m.removeClass("active");
			l.find(".sub-menu").hide();
			l.find(".slide_btn").removeClass("active");
			h.removeClass("bold")
		} else {
			l.show();
			m.addClass("active");
			if (h.hasClass("menus-main")) {
				h.addClass("bold");
				var k = h.closest("li").siblings("li");
				k.find(".menus-main").removeClass("bold");
				k.find(".sub-menu").hide();
				k.find(".slide_btn").removeClass("active");
				$j(".page_menu_left").scrollTop(0)
			}
		}
	});
	$j(window).on(g ? "touchmove scroll" : "scroll", function() {
		var k = $j(".page_header"),
			h = $j("header").height(),
			l = parseInt($j("body").css("left"));
		scrollTop = $j(window).scrollTop();
		if (scrollTop > 30) {
			k.addClass("page_top")
		} else {
			k.removeClass("page_top")
		}
	})
});