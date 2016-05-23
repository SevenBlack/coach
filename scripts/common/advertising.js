var succnum = 0;
var imgsize;
var progress;
var succpath = "";
var jsVersionUse = $j("#jsVersionUse").val();
$j(document).ready(function() {
	var e = "";
	var f = window.location.search;
	if (f.indexOf("menu") >= 0) {
		e = f.replace("&haschilds=true", "").replace("?menu=", "").replace("&isshow=true", "").replace("&isshow=false", "");
		e = "menu/" + e;
		if (e.indexOf("iswshow") > 0) {
			e = "index"
		}
		if (e.indexOf("ismshow") > 0) {
			e = "menu/men"
		}
	} else {
		var b = window.location.href;
		var c = "http://" + window.location.host;
		e = b.replace(c + "/", "");
		if (e.indexOf(".htm") < 0) {
			e = "index"
		} else {
			e = e.replace(".htm", "")
		}
	}
	var d = window.location.pathname;
	d = d.replace("", _contextPath);
	var a = "";
	progress = setInterval("isSuccess()", 100);
		var b = _contextPath + "/coach/getAdvertising.json";
//	var b = "http://m.china.coach.com/getAdvertising.json";
	if (e && e.length > 0) {
		loxia.asyncXhrPost(b, {
			path: e
		}, {
			success: function(h) {
				if (h && h.flag) {
					imgsize = h.datas.length;
					if (h.datas && h.datas.length > 0) {
						for (var g = 0; g < h.datas.length; g++) {
							loadImg(h.datas[g].remoteUrl, e, h.datas[g].isBackGround, h.datas[g].href)
						}
					} else {
						removeFlexDiv()
					}
				}
			}
		})
	} else {
		removeFlexDiv()
	}
});

function loadImg(i, l, a, h) {
	if (i && i.length > 0) {
		succpath = l;
		i = getFileName(i);
		var k = domain_image + "/images/spot/header/" + i;
		var c = $j("#flexdiv");
		var f = '<div id="u_noCarousel">';
		f += '<div id="u_noCarouselMainImage">';
		f += '<div class="width100">	';
		f += '<img alt="" data-lookbook="" class="width100" src="' + domain_image + '/images/mb-hp/hp_mobile_kv1_1.jpg?"' + jsVersionUse + " />";
		f += "</div>";
		f += "</div>";
		f += "</div>	";
		slideDom2 = '<div id="u_noCarousel2">';
		slideDom2 += '<div id="u_noCarouselMainImage2">';
		slideDom2 += '<div class="width100">	';
		slideDom2 += '<img alt="" data-lookbook="" class="width100" src="' + domain_image + '/images/mb-hp/hp_mobile_kv2_1.jpg?"' + jsVersionUse + " />";
		slideDom2 += "</div>";
		slideDom2 += "</div>";
		slideDom2 += "</div>	";
		var j = '<div class="events-scroll-Fade">';
		j += '<div class="scroll-Fade-box">';
		j += '<div class="base">';
		j += '<img src="' + domain_image + '/images/mb-hp/hp_mobile_kv1_1.jpg?"' + jsVersionUse + " />";
		j += "</div>";
		j += "</div>";
		j += '<div class="bullets">';
		j += "</div>";
		j += "</div>	";
		var b = '<div class="events-scroll-Fade2">';
		b += '<div class="scroll-Fade-box">';
		b += '<div class="base">';
		b += '<img src="' + domain_image + '/images/mb-hp/hp_mobile_kv2_1.jpg?"' + jsVersionUse + " />";
		b += "</div>";
		b += "</div>";
		b += '<div class="bullets">';
		b += "</div>";
		b += "</div>";
		if (l == "index" && a != "t") {
			$j("#top_category_advertising").append("<li><a href='" + _contextPath + "/women/newarrivals.htm'><img src='" + domain_image + "/images/mb-hp/hp_mobile_image2.jpg?" + jsVersionUse + "' ></a></li>");
			$j("#top_category_advertising").append("<li>" + b + "</li>");
			$j("#top_category_advertising").append("<li><a href='" + _contextPath + "/men/newarrivals.htm'><img src='" + domain_image + "/images/mb-hp/hp_mobile_image4.jpg?" + jsVersionUse + "' ></a></li>");
			$j("#top_category_advertising").append("<li><a href='" + _contextPath + "/shop/coach-75th.htm'><img src='" + domain_image + "/images/mb-hp/hp_mobile_image5.jpg?" + jsVersionUse + "' ></a></li>");
			$j("#top_category_advertising").show();
			$j("body").waitForImages(function() {
				var m = $j(".hpBackground").find("img").attr("lazy_src");
				$j(".hpBackground").find("img").attr("src", m);
				$j(".hpBackground").fadeIn()
			});
			var e = new COACH.carouselModule();
			e.slideimgW = 618;
			e.slideimgH = 486;
			var d = new COACH.carouselModule();
			e.slideimgW = 618;
			e.slideimgH = 317;
			d.imgname = "hp_mobile_kv2";
			d.slideId = "u_noCarousel2";
			d.slideWrapId = "u_homeCarouselWrapper2";
			d.homeId = "u_homeCarousel2";
			d.slidnum = "11";
			d.Hrefarr = ["/women/newarrivals.htm"];
			setFadeScroll({
				imgSrc: domain_image + "/images/mb-hp/",
				imgName: "hp_mobile_kv1_",
				scrollClass: "events-scroll-Fade",
				alink: [_contextPath + "/static/mothers-day.htm", _contextPath + "/static/mothers-day.htm", _contextPath + "/static/mothers-day.htm"],
				imgLength: 3,
				btn: false
			});
			setFadeScroll({
				imgSrc: domain_image + "/images/mb-hp/",
				imgName: "hp_mobile_kv2_",
				scrollClass: "events-scroll-Fade2",
				alink: [_contextPath + "/shop/vintage-bjskp.htm", _contextPath + "/shop/vintage-bjskp.htm", _contextPath + "/shop/vintage-bjskp.htm"],
				imgLength: 3,
				btn: false
			})
		} else {
			if (a && a == "t") {
				$j("#hpBackground").attr("lazy_src", k);
				$j("body").waitForImages(function() {
					var m = $j(".hpBackground").find("img").attr("lazy_src");
					$j(".hpBackground").find("img").attr("src", m);
					$j(".hpBackground").fadeIn()
				})
			} else {
				k = k + "?" + jsVersionUse;
				var g = "javascript:void(0);";
				if (h && h.length > 0) {
					g = h
				}
				c.append("<li><a href='" + g + "'><img src='" + k + "' /></a></li>")
			}
		}
		succnum++
	}
}

function getFileName(b) {
	var c = b.lastIndexOf("/");
	var a = b;
	if (c >= 0) {
		a = b.substr(c + 1)
	}
	return a
}

function isSuccess() {
	if (succnum == imgsize) {
		if (succnum == 1) {
			$j("#advertising").hide();
			$j("#loading_div").hide();
			var b = $j("#flexdiv li img").eq(0).attr("src");
			var a = $j("#flexdiv li a").eq(0).attr("href");
			if (b) {
				$j("#top_category_advertising").append("<a href='" + a + "'><img src='" + b + "' alt='' /></a>");
				$j("#top_category_advertising").show()
			}
			if ($j(".product-name-price")[0]) {
				$j(".product-name-price a").each(function(c) {
					var d = $j(this).attr("href") + "&topspotImg=" + b;
					$j(this).attr("href", d)
				})
			}
		} else {
			$j("#loading_div").remove();
			$j("#advertising").removeClass("hide");
			$j("#flexdiv li").show();
			loadslider()
		}
		clearInterval(progress)
	}
}

function loadslider() {
	$j("#advertising").flexslider({
		animation: "slide",
		slideshowSpeed: 4000,
		start: function(a) {
			$j("body").removeClass("loading")
		}
	})
}

function removeFlexDiv() {
	$j("#advertising").remove();
	$j("#loading_div").remove();
	$j("#top_category_advertising").remove()
}

function GetParam() {
	var b = document.location.href;
	var a = "";
	if (b.indexOf("=") > 0) {
		a = b.substring(b.indexOf("=") + 1, b.length)
	}
	return a
}

function santaVideo() {
	var b = document.getElementById("santaVideo");
	$j(".santaBtn").bind("click", function() {
		var c = $j(".santa_cv img").height();
		$j(".santacontent").css({
			display: "block",
			height: c + "px"
		});
		b.play()
	});
	b.addEventListener("ended", function() {
		$j(".santacontent").css({
			display: "none",
			height: "0px"
		})
	});
	var a = $j(".santa_cv img").height();
	$j(".santacontent").css({
		height: a + "px"
	});
	$j(window).resize(function() {
		var c = $j(".santa_cv img").height();
		$j(".santacontent").css({
			height: c + "px"
		})
	})
}
$j(window).load(function() {
	var a = window.location.href;
	var b = "http://" + window.location.host;
	path = a.replace(b + "/", "");
	if (path.indexOf(".htm") < 0) {
		path = "index"
	}
	if (path == "index") {
		$j("body").waitForImages(function() {
			var c = $j(".hpBackground").find("img").attr("lazy_src");
			$j(".hpBackground").find("img").attr("src", c);
			$j(".hpBackground").fadeIn()
		})
	}
});
var COACH = COACH || {};
COACH.carouselModule = COACH.carouselModule || function() {
	var m = this;
	m.imgname = "hp_mobile_kv1";
	m.slideId = "u_noCarousel";
	m.slideWrapId = "u_homeCarouselWrapper";
	m.homeId = "u_homeCarousel";
	m.slidnum = "3";
	m.slideimgW = 618;
	m.slideimgH = 659;
	m.Hrefarr = [_contextPath + "/women/dinky.htm", _contextPath + "/women/dinky.htm", _contextPath + "/women/dinky.htm"];
	var e = [],
		h = m.Hrefarr,
		f = [],
		g = [],
		a = [domain_image + "/statics/news/images/hp-carousel-button-inactive.png?" + jsVersionUse, domain_image + "/statics/news/images/hp-carousel-button-active.png?" + jsVersionUse],
		k = true,
		j, i, l = "drag",
		d = m.slideimgW / m.slideimgH;

	function c() {
		for (var n = 1; n <= m.slidnum; n++) {
			var o = n - 1;
			f.push(domain_image + "/images/mb-hp/" + m.imgname + "_" + n + ".jpg?" + jsVersionUse);
			g.push("");
			e.push("")
		}
	}

	function b() {
		if (k) {
			$j("#" + m.slideId).hide().after("<div id=" + m.slideWrapId + "><div id=" + m.homeId + '><div class="foxy_belt"/></div><div data-carousel-bullets=' + m.homeId + ' class="u_homeCarouselBullets"/><div class="unWhSpacerL12 unWhSpacerR12"><div class="u_homeCarouselLine"/></div></div>')
		} else {
			$j("#" + m.slideId).hide().after("<div id=" + m.slideWrapId + "><div id=" + m.homeId + '><div class="foxy_belt"/></div>')
		}
		window[m.homeId] = new Merci.carousel({
			orientation: "horizontal",
			animate: true,
			animationSpeed: 600,
			animationDelay: 3000,
			loop: true,
			move: true,
			slideMode: l,
			visibleBatchSize: 1
		});
		for (var p = 0; p < f.length; p++) {
			var o = "";
			if (h[p] != "") {
				o = '<a href="' + _contextPath + "" + h[p] + '"><img width="100%" src="' + f[p] + '" alt="" /></a>'
			} else {
				o = '<img width="100%" src="' + f[p] + '" alt="" />'
			}
			window[m.homeId].addPanel({
				content: o,
				panelIndex: p,
				linkedLookbook: g[p],
				drawFunction: function(q) {
					if (typeof Lookbook != "undefined" && typeof e != "undefined") {
						q.view.on("click", function(r) {
							if (q.linkedLookbook != "") {
								r.preventDefault();
								r.stopPropagation();
								if (!window[q.linkedLookbook]) {
									window[q.linkedLookbook] = new Lookbook(window[q.linkedLookbook + "_config"])
								}
								window[q.linkedLookbook].open();
								return false
							}
						})
					}
				}
			})
		}
		window[m.homeId].setRedrawFunction(function(q) {
			width = q.width;
			height = Math.round(width / d);
			u_homeCarousel.redraw(width, height, width, height)
		});
		if (k) {
			window[m.homeId].draw({
				id: m.homeId,
				bullet: a[1],
				selectedBullet: a[0]
			})
		} else {
			window[m.homeId].draw({
				id: m.homeId
			})
		}
		var n = new Image();
		n.onload = function() {
			if (this.naturalWidth) {
				j = this.naturalWidth;
				i = this.naturalHeight
			} else {
				j = this.width;
				i = this.height
			}
			setTimeout(function() {
				window[m.homeId].setRedrawFunction(function(q) {
					width = q.width;
					height = Math.round(i * (width / j));
					window[m.homeId].redraw(width, height, width, height)
				}).redraw();
				window[m.homeId].callRedrawFunction()
			}, 10)
		};
		n.src = f[0];
		if (Merci.device.isAndroid4 && Merci.device.isChrome) {
			$j("#" + m.homeId).on("touchstart", function(q) {
				startX = q.touches[0].pageX;
				startY = q.touches[0].pageY
			});
			$j("#" + m.homeId).on("touchmove", function(v) {
				curX = event.touches[0].pageX;
				curY = event.touches[0].pageY;
				var x = startX - curX;
				var w = curY - startY;
				var u = Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(w, 2)));
				var q = Math.atan2(w, x);
				var s = Math.round(q * 180 / Math.PI);
				if (s < 0) {
					s = 360 - Math.abs(s)
				}
				if ((s <= 45) && (s >= 0)) {
					v.preventDefault()
				} else {
					if ((s <= 360) && (s >= 315)) {
						v.preventDefault()
					} else {
						if ((s >= 135) && (s <= 225)) {
							v.preventDefault()
						}
					}
				}
			})
		}
		setTimeout(function() {
			$j("div[data-carousel-bullets=" + m.homeId + "]").off(Merci.device.endEvent);
			$j("div[data-carousel-bullets=" + m.homeId + "] img").on(Merci.device.endEvent, function() {
				$jthis = $j(this);
				if ($jthis.hasClass("thumbSelected")) {
					return false
				}
				window[m.homeId].stop();
				window[m.homeId].goToPanel($jthis.data("moveto"))
			})
		}, 300)
	}
	this.init = function() {
		c();
		b()
	}
};

function setFadeScroll(p) {
	var c = $j.extend({}, {
		scrollClass: "events-scroll-Fade",
		imgSrc: "images/homepage/",
		imgName: "east_",
		alink: [],
		imgLength: 2,
		time: 2000,
		loop: true,
		touchmove: true,
		btn: true,
		bullets: true
	}, p);
	var f = $j("." + c.scrollClass),
		a = f.find(".scroll-Fade-box"),
		n = f.find(".scroll-Fade-btnL"),
		k = f.find(".scroll-Fade-btnR"),
		j = [];
	for (var g = 1; g <= c.imgLength; g++) {
		j[g - 1] = {};
		j[g - 1].img = new Image();
		j[g - 1].img.src = c.imgSrc + c.imgName + g + ".jpg?" + jsVersionUse;
		if (c.alink.length > 1) {
			j[g - 1].imgLink = c.alink[g - 1] === undefined ? "" : c.alink[g - 1]
		} else {
			j[g - 1].imgLink = c.alink[0]
		}
		$j(j[g - 1].img).load(function() {
			$j(this).data({
				isloaded: true
			})
		})
	}
	f.data({
		index: 0,
		timeout: null
	});
	var m = function(q) {
			if (q != f.data("index") && !!$j(j[q].img).data("isloaded")) {
				clearTimeout(f.data("timeout"));
				f.data({
					index: q
				});
				var o = $j("<div><a></a></div>"),
					r = o.find("a");
				r.append($j(j[q].img).clone());
				if (j[q].imgLink != "") {
					r.attr("href", j[q].imgLink)
				}
				o.css({
					opacity: 0
				}).appendTo(a).animate({
					opacity: 1
				}, function() {
					var i = $j("." + c.scrollClass + " .scroll-Fade-box>div");
					f.data("timeout", setTimeout(function() {
						i.removeClass("base").filter(":last").addClass("base");
						i.not(".base").remove()
					}, 0))
				});
				$j(".bullets>div").removeClass("is-active").eq(q).addClass("is-active")
			}
		},
		h = function() {
			var o = f.data("index");
			t = o + 1 == c.imgLength ? 0 : o + 1;
			m(t)
		},
		e = function() {
			var o = f.data("index");
			t = o == 0 ? c.imgLength - 1 : o - 1;
			m(t)
		};
	if (c.loop) {
		var d = setInterval(function() {
			h()
		}, c.time);
		var b = function() {
			if (c.loop) {
				clearInterval(d);
				d = setInterval(function() {
					h()
				}, c.time)
			}
		}
	}
	if (c.bullets) {
		$j(".bullets>div").on("touchend", function() {
			var q = $j(this),
				o = $j(".bullets>div").index(q);
			m(o);
			b();
			return false
		})
	}
	if (c.btn) {
		k.on("touchend", function() {
			h();
			b();
			return false
		});
		n.on("touchend", function() {
			e();
			b();
			return false
		})
	}
	if (c.touchmove) {
		var l = false;
		a.on("touchstart", function(i) {
			l = i.originalEvent.changedTouches[0].clientX
		});
		a.on("touchend", function(r) {
			var o = r.originalEvent.changedTouches[0].clientX,
				i = o - l > 0 ? "left" : "right",
				q = Math.abs(o - l);
			if (q > $j(window).width() * 0.1) {
				if (i == "right") {
					h();
					b()
				} else {
					e();
					b()
				}
			}
		})
	}
};