var oriDo = s.doPlugins;
s.doPlugins = function s_doPlugins(a) {
	a.eVar44 = "mobile site";
	a.prop44 = "mobile site";
	return oriDo(a)
};

function readCookie(b) {
	var e = b + "=";
	var a = document.cookie.split(";");
	for (var d = 0; d < a.length; d++) {
		var f = a[d];
		while (f.charAt(0) == " ") {
			f = f.substring(1, f.length)
		}
		if (f.indexOf(e) == 0) {
			return f.substring(e.length, f.length)
		}
	}
	return null
}

function clean(b) {
	b.linkTrackVars = b.linkTrackEvents = b.events = "";
	b.products = "";
	b.pageName = "";
	for (var a in b) {
		if (/eVar\d+/g.test(a) || /prop\d+/g.test(a)) {
			b[a] = ""
		}
	}
}

function storeLocatorClickHandler() {
	s.linkTrackVars = "events";
	s.linkTrackEvents = s.events = "event21";
	s.tl(true, "o")
}

function emailSubscriptionClickHandler() {
	s.linkTrackVars = "events";
	s.linkTrackEvents = s.events = "event10";
	s.tl(true, "o")
}

function categoryLoadEventHandler(e) {
	var b = "";
	var a = "";
	var d = "Sub Category";
	switch (e) {
		case "news":
			b = "Coach News";
			a = "Coach News";
			d = "navigation page";
			break;
		case "hands":
			b = "handbags";
			a = "handbags";
			d = "navigation page";
			break;
		case "handshap":
			b = "handbags: silhouettes";
			a = "handbags";
			d = "navigation page";
			break;
		case "handseries":
			b = "Hangbags:collections";
			a = "handbags";
			d = "navigation page";
			break;
		case "bags":
			b = "Wallets";
			a = "Wallets";
			d = "navigation page";
			break;
		case "bagsshap":
			b = "Wallets: silhouettes";
			a = "Wallets";
			d = "navigation page";
			break;
		case "bagsseries":
			b = "Wallets: collections";
			a = "Wallets";
			d = "navigation page";
			break;
		case "accessories":
			b = "Accessories";
			a = "Accessories";
			d = "navigation page";
			break;
		case "jewelry":
			b = "Jewelry";
			a = "Jewelry";
			d = "navigation page";
			break;
		case "shoes":
			b = "Shoes";
			a = "Shoes";
			d = "navigation page";
			break;
		case "dress":
			b = "Apparel";
			a = "Apparel";
			break;
		default:
			b = omnitureRef.pagename;
			a = omnitureRef.prop1;
			break
	}
	var c = {
		prop1: a,
		prop2: b,
		prop3: b,
		prop4: d,
		prop44: "mobile site",
		eVar6: "non-search",
		eVar8: window.eVar8,
		eVar9: window.eVar9,
		eVar10: window.eVar10,
		eVar16: "non-internal campaign",
		eVar17: omnitureRef.subcategory ? (omnitureRef.category + " > " + omnitureRef.subcategory) : omnitureRef.category,
		eVar21: "vertical",
		eVar44: "mobile site",
		eVar46: "",
		eVar47: omnitureRef.subcategory ? (omnitureRef.category + " > " + omnitureRef.subcategory) : omnitureRef.category,
		pageName: b,
		events: "event41"
	};
	track(c)
}

function categoryAllLoadEventHandler(b) {
	var a = {
		prop1: omnitureRef.prop1,
		prop2: omnitureRef.prop2,
		prop3: omnitureRef.prop3,
		prop4: omnitureRef.prop4,
		prop11: b,
		prop44: "mobile site",
		eVar6: "non-search",
		eVar8: window.eVar8,
		eVar9: window.eVar9,
		eVar10: window.eVar10,
		eVar16: "non-internal campaign",
		eVar17: omnitureRef.subcategory ? (omnitureRef.category + " > " + omnitureRef.subcategory) : omnitureRef.category,
		eVar21: "vertical",
		eVar44: "mobile site",
		eVar46: "",
		eVar47: omnitureRef.subcategory ? (omnitureRef.category + " > " + omnitureRef.subcategory) : omnitureRef.category,
		pageName: omnitureRef.pagename,
		events: "event41"
	};
	track(a)
}

function registerClickOmnitureHandler() {
	var a = {
		prop1: omnitureRef.prop1,
		prop2: omnitureRef.prop2,
		prop4: omnitureRef.prop4,
		prop11: "119",
		prop16: omnitureRef.prop1 + ":" + omnitureRef.prop2,
		prop17: "registration page",
		prop18: "ln",
		eVar6: "non-search",
		eVar8: window.eVar8,
		eVar9: window.eVar9,
		eVar10: window.eVar10,
		eVar16: "non-internal campaign",
		eVar17: omnitureRef.category + " > " + omnitureRef.subcategory,
		eVar18: "browse",
		eVar21: "vertical",
		eVar30: "silverlight not detected",
		eVar34: omnitureRef.prop1 + ":" + omnitureRef.prop2 + ": ln",
		eVar41: "registration page",
		eVar47: omnitureRef.category + " > " + omnitureRef.subcategory,
		pageName: "registration page",
		events: "event41",
		products: ";productmerch28"
	};
	trackLink(a)
}

function registerFinishClickOmnitureHandler(b) {
	var a = {
		prop1: omnitureRef.prop1,
		prop2: omnitureRef.prop2,
		prop4: omnitureRef.prop4,
		prop11: "119",
		prop16: "registration page",
		prop17: "registration thank you",
		prop18: "ln",
		eVar6: "non-search",
		eVar8: b,
		eVar9: "Registered User",
		eVar10: "Registered User",
		eVar16: "non-internal campaign",
		eVar17: omnitureRef.category + " > " + omnitureRef.subcategory,
		eVar18: "browse",
		eVar21: "vertical",
		eVar30: "silverlight not detected",
		eVar34: "registration page: ln",
		eVar41: "registration thank you",
		eVar47: omnitureRef.category + " > " + omnitureRef.subcategory,
		pageName: "registration thank you",
		events: "event10,event11,event41"
	};
	track(a)
}

function registerConfirmationLoadOmnitureHandler(b) {
	var a = {
		prop1: "My Account",
		prop2: "My Account: Register Confirmation",
		prop3: "My Account: Register Confirmation",
		prop4: "My Account",
		prop11: "119",
		prop16: "registration page",
		prop17: "registration thank you",
		prop18: "ln",
		prop44: "mobile site",
		eVar6: "non-search",
		eVar8: b,
		eVar9: "Registered User",
		eVar10: "Registered User",
		eVar16: "non-internal campaign",
		eVar17: omnitureRef.category + " > " + omnitureRef.subcategory,
		eVar18: "browse",
		eVar21: "vertical",
		eVar30: "silverlight not detected",
		eVar34: "registration page: ln",
		eVar41: "registration thank you",
		eVar44: "mobile site",
		eVar47: omnitureRef.category + " > " + omnitureRef.subcategory,
		pageName: "My Account: Register Confirmation",
		events: "event10,event11,event41"
	};
	track(a)
}

function join(c, e) {
	var b = "";
	for (var a = 0; a < c.length; a++) {
		var d = c[a];
		if (null != d && "" != d) {
			if (a > 0 && "" != b) {
				b += e
			}
			b += d
		}
	}
	return b
}

function searchResultsLoadOmnitureHandler_filter(b, d, f, e, h) {
	var j = "";
	if ("" != b) {
		j = "cr:" + b
	}
	var i = "";
	if ("" != d) {
		i = "ct:" + d
	}
	var c = "";
	if ("" != f) {
		c = "pr:" + f
	}
	var a = [j, i, c];
	var g = join(a, " > ");
	var k = {
		prop4: "search results",
		prop5: "filter|" + g,
		prop6: e,
		prop44: "mobile site",
		prop45: "filter|" + g + " - no refinement",
		eVar6: "filter|" + g,
		eVar8: window.eVar8,
		eVar9: window.eVar9,
		eVar10: window.eVar10,
		eVar44: "mobile site",
		eVar45: "filter|" + g + " - no refinement",
		pageName: "search results : " + b + " " + d + " " + f,
		events: "event8,event41",
		products: ";productmerch128"
	};
	_track(k, h)
}

function searchResultsLoadOmnitureHandler_onlykeyword(a, c) {
	var b = {
		prop4: "search results",
		prop5: a,
		prop6: c,
		prop16: "product detail",
		prop44: "mobile site",
		prop45: a + " - no refinement",
		eVar6: a,
		eVar8: window.eVar8,
		eVar9: window.eVar9,
		eVar10: window.eVar10,
		eVar17: "non-browse",
		eVar18: "internal keyword search",
		eVar41: "search results : " + a,
		eVar44: "mobile site",
		eVar45: a + " - no refinement",
		pageName: "search results : " + a,
		events: "event8,event41"
	};
	track(b)
}

function nullSearchResultsLoadOmnitureHandler(a) {
	var b = {
		prop4: "no search results",
		prop5: a,
		prop6: "zero",
		prop16: "search results : " + a,
		prop23: "31",
		prop44: "mobile site",
		prop45: a + " - no refinement",
		eVar6: a,
		eVar8: window.eVar8,
		eVar9: window.eVar9,
		eVar10: window.eVar10,
		eVar16: "non-internal campaign",
		eVar17: "non-browse",
		eVar41: "no search results : " + a,
		eVar44: "mobile site",
		eVar45: a + " - no refinement",
		pageName: "no search results : " + a,
		events: "event8,event9"
	};
	track(b)
}

function trackLink(a) {
	_track(a, "click")
}

function track(a) {
	_track(a, "load")
}

function _track(b, e) {
	var d = s_gi(s_account);
	clean(d);
	var a = "";
	for (var c in b) {
		a += c + ",";
		d[c] = b[c]
	}
	d.linkTrackVars = a.substring(0, a.length - 1);
	d.linkTrackEvents = d.events;
	if ("click" == e) {
		d.trackLink(true, "o")
	} else {
		if ("load" == e) {
			d.track()
		}
	}
}

function pdpLoadHandler(b) {
	var a = s_gi(s_account);
	clean(a);
	a.linkTrackVars = "prop1,prop2,prop4,prop10,prop11,prop15,prop16,prop17,prop18";
	a.linkTrackVars += "eVar6,eVar8,eVar9,eVar10,eVar11,eVar16,eVar17,eVar18,eVar19,eVar20,eVar21,eVar24,eVar27,eVar29,eVar30,eVar33,eVar34,eVar41,eVar45,eVar46,eVar47,eVar62";
	a.linkTrackVars += "events,products,pageName";
	a.linkTrackEvents = a.events = "prodView,event12";
	a.prop1 = omnitureRef.prop1;
	a.prop2 = omnitureRef.prop2;
	a.prop4 = omnitureRef.prop4;
	a.prop11 = loadSkuTotalQty();
	a.eVar6 = "non-search";
	a.eVar8 = window.eVar8;
	a.eVar9 = window.eVar9;
	a.eVar10 = window.eVar10;
	a.eVar16 = "non-internal campaign";
	a.eVar17 = omnitureRef.category + " > " + omnitureRef.subcategory;
	a.eVar21 = "vertical";
	a.eVar24 = "browse_verticallarge";
	a.eVar27 = "product detail tab";
	a.eVar30 = "silverlight not detected";
	a.eVar34 = "handbags:new arrivals: ln1";
	a.eVar41 = "product detail";
	a.eVar44 = "mobile site";
	a.eVar47 = omnitureRef.category + " > " + omnitureRef.subcategory;
	a.products = b;
	a.prop44 = "mobile site";
	a.pageName = "product detail";
	a.t()
}

function pdpDetailTabClickHandler(c, b) {
	var a = window.s;
	a.linkTrackVars = "products,eVar27,eVar44,prop44";
	a.linkTrackEvents = "";
	a.products = b;
	a.eVar27 = "product detail tab";
	a.eVar44 = "mobile site";
	a.prop44 = "mobile site";
	a.tl(c, "o", "product page type")
}

function pdpCommentTabClickHandler(c, b) {
	var a = window.s;
	a.linkTrackVars = "eVar27,eVar44,prop44,products";
	a.linkTrackEvents = a.events = "";
	a.products = b;
	a.eVar27 = "product comment tab";
	a.eVar44 = "mobile site";
	a.prop44 = "mobile site";
	a.tl(c, "o", "product page type")
}

function pdpCommentTabLoadHandler(b) {
	var a = s_gi(s_account);
	clean(a);
	a.linkTrackVars = "prop1,prop2,prop4,prop10,prop11,prop15,prop16,prop17,prop18,prop44";
	a.linkTrackVars += "eVar6,eVar8,eVar9,eVar10,eVar11,eVar16,eVar17,eVar18,eVar19,eVar20,eVar21,eVar24,eVar27,eVar29,eVar30,eVar33,eVar34,eVar44,eVar41,eVar45,eVar47,eVar62";
	a.linkTrackVars += "events,products,pageName";
	a.linkTrackEvents = a.events = "";
	a.prop1 = omnitureRef.prop1;
	a.prop2 = omnitureRef.prop2;
	a.prop4 = omnitureRef.prop4;
	a.prop1 = "product details";
	a.prop2 = "product details";
	a.prop3 = "product details";
	a.prop4 = "view product reviews";
	a.prop11 = loadSkuTotalQty();
	a.prop44 = "mobile site";
	a.eVar6 = "non-search";
	a.eVar8 = window.eVar8;
	a.eVar9 = window.eVar9;
	a.eVar10 = window.eVar10;
	a.eVar16 = "non-internal campaign";
	a.eVar17 = omnitureRef.category + " > " + omnitureRef.subcategory;
	a.eVar21 = "vertical";
	a.eVar27 = "product detail tab";
	a.eVar30 = "silverlight not detected";
	a.eVar34 = "product detail: ln1";
	a.eVar44 = "mobile site";
	a.eVar47 = omnitureRef.category + " > " + omnitureRef.subcategory;
	a.products = b;
	a.pageName = "view prod reviews: " + $j("._sku_name").html() + " - " + $j("#styleCode").val();
	a.t()
}

function pdpColorClickHandler(c, a) {
	var b = window.s;
	b.linkTrackVars = "eVar6,eVar16,eVar17,eVar18,eVar19,eVar20,eVar44,eVar45,eVar47,prop44,events,products,pageName";
	b.linkTrackEvents = b.events = "event24";
	b.eVar6 = "non-search";
	b.eVar16 = "non-internal campaign";
	b.eVar17 = omnitureRef.category + " > " + omnitureRef.subcategory;
	b.eVar44 = "mobile site";
	b.eVar47 = omnitureRef.category + " > " + omnitureRef.subcategory;
	b.pageName = "product detail";
	b.prop44 = "mobile site";
	b.products = a;
	b.tl(true, "o", "sku view")
}

function pdpDetailImageZoomHandler(c, a) {
	var b = window.s;
	b.linkTrackVars = "eVar44,events,prop44,products";
	b.linkTrackEvents = b.events = "event20";
	b.products = a;
	b.eVar44 = "mobile site";
	b.tl(c, "o", "zoom click");
	b.prop44 = "mobile site";
	b.linkTrackVars = b.linkTrackEvents = b.events = "";
	b.products = ""
}

function pdpDetailShareClickHandler(c, b) {
	var a = window.s;
	a.linkTrackVars = "eVar44,prop44,events";
	a.eVar44 = "mobile site";
	a.prop44 = "mobile site";
	a.linkTrackEvents = a.events = b;
	a.t()
}

function pdpYouMayAlsoLikeClickHandler(c, b) {
	var a = window.s;
	a.linkTrackVars = "eVar6,eVar16,eVar17,eVar18,eVar19,eVar20,eVar44,eVar45,eVar47,prop44,events,products,pageName";
	a.linkTrackEvents = a.events = "event41";
	a.eVar6 = "non-search";
	a.eVar16 = "non-internal campaign";
	a.eVar17 = "non-browse";
	a.eVar19 = b;
	a.eVar20 = "category";
	a.eVar44 = "mobile site";
	a.prop44 = "mobile site";
	a.pageName = "product detail";
	a.tl(c, "o", "CrossSellLink")
}

function pdpAddToCartClickHandler(c, a) {
	var b = window.s;
	b.linkTrackVars = "eVar6,eVar16,eVar17,eVar18,eVar19,eVar20,eVar44,eVar45,eVar47,prop44,events,products,pageName";
	b.linkTrackEvents = b.events = "event25";
	b.eVar16 = "non-internal campaign";
	b.eVar17 = omnitureRef.category + " > " + omnitureRef.subcategory;
	b.eVar47 = omnitureRef.category + " > " + omnitureRef.subcategory;
	b.eVar44 = "mobile site";
	b.prop44 = "mobile site";
	b.products = a;
	b.pageName = "addtocart";
	b.tl(c, "o", "SKU Add to Cart")
}

function cartAddedHandler(d, a, b) {
	var c = window.s;
	c.linkTrackVars = "eVar44,prop17,prop44,events,products,pageName";
	c.linkTrackEvents = c.events = (b ? "scAdd,scOpen" : "scAdd");
	c.eVar44 = "mobile site";
	c.prop17 = "addtocart";
	c.prop44 = "mobile site";
	c.products = a;
	c.pageName = "addtocart";
	c.t()
}

function pdpAddToFavoriteHandler(b) {
	var a = _contextPath + "/member/getCountry.json";
	loxia.asyncXhrPost(a, {}, {
		success: function(c, d) {
			if (c) {
				$j(c.countryList).each(function(f, h) {
					var e = $j("<option>");
					e.attr("value", "");
					e.attr("iddCode_r", "");
					$j("#country_r").val("CN");
					$j("#iddCode_r").val("86");
					var g = $j("<option>");
					g.attr("value", h.isoCode);
					g.attr("iddCode_r", h.iddCode);
					g.text(h.chineseName + "(" + h.localName + ")");
					$j("#country_r").append(g)
				})
			} else {}
		}
	});
	$j("#country_r").change(function() {
		var c = $j("#country_r > option:selected").attr("iddCode_r");
		$j("#iddCode_r").val(c)
	})
}

function wishListSignInLoadHandler(b) {
	var a = s_gi(s_account);
	clean(a);
	a.linkTrackVars = "prop1,prop2,prop3,prop4,prop10,prop11,prop15,prop16,prop17,prop18,prop44";
	a.linkTrackVars += "eVar6,eVar8,eVar9,eVar10,eVar11,eVar16,eVar17,eVar18,eVar19,eVar20,eVar21,eVar24,eVar27,eVar29,eVar30,eVar33,eVar34,eVar41,eVar44,eVar45,eVar47,eVar62";
	a.linkTrackVars += "pageName,products,events";
	a.prop1 = omnitureRef.prop1;
	a.prop2 = omnitureRef.prop2;
	a.prop3 = omnitureRef.prop3;
	a.prop4 = omnitureRef.prop4;
	a.prop11 = loadSkuTotalQty();
	a.eVar6 = "non-search";
	a.eVar8 = window.eVar8;
	a.eVar9 = window.eVar9;
	a.eVar10 = window.eVar10;
	a.eVar16 = "non-internal campaign";
	a.eVar17 = omnitureRef.category + " > " + omnitureRef.subcategory;
	a.eVar21 = "vertical";
	a.eVar24 = "browse_verticallarge";
	a.eVar27 = "product detail tab";
	a.eVar30 = "silverlight not detected";
	a.eVar34 = "wishlist sign-in: ln1";
	a.eVar41 = "wishlist sign-in";
	a.eVar44 = "mobile site";
	a.prop44 = "mobile site";
	a.eVar47 = omnitureRef.category + " > " + omnitureRef.subcategory;
	a.linkTrackEvents = a.events = "event41";
	a.pageName = "wishlist sign-in";
	a.products = b;
	a.t()
}

function singInLoadHandler() {
	var a = s_gi(s_account);
	clean(a);
	a.linkTrackVars = "prop1,prop2,prop3,prop4,prop7,prop44,eVar8,eVar9,eVar10,eVar44,pageName,events";
	a.prop1 = "My Account";
	a.prop2 = "My Account: Sign in";
	a.prop3 = "My Account: Sign in";
	a.prop4 = "My Account";
	a.eVar8 = window.eVar8;
	a.eVar9 = window.eVar9;
	a.eVar10 = window.eVar10;
	a.eVar44 = "mobile site";
	a.prop44 = "mobile site";
	a.linkTrackEvents = a.events = "event32";
	a.prop7 = "Sign-in";
	a.pageName = "My Account: Sign in";
	a.t()
}

function shooppingChartSignIn() {
	var a = s_gi(s_account);
	clean(a);
	a.linkTrackVars = "prop1,prop2,prop3,prop4,eVar8,eVar9,eVar10,eVar44,prop44,pageName";
	a.prop1 = "Checkout";
	a.prop2 = "Checkout: Sign In";
	a.prop3 = "Checkout: Sign In";
	a.prop4 = "Checkout";
	a.eVar8 = window.eVar8;
	a.eVar9 = window.eVar9;
	a.eVar10 = window.eVar10;
	a.eVar44 = "mobile site";
	a.prop44 = "mobile site";
	a.pageName = "Checkout: Sign In";
	a.t()
}

function shoppingCartLoadHandler() {
	var a = s_gi(s_account);
	clean(a);
	a.linkTrackVars = "prop1,prop2,prop3,prop4,prop7,eVar8,eVar9,eVar10,eVar44,prop44,pageName";
	a.prop1 = "Checkout";
	a.prop2 = "Checkout: Shopping Bag";
	a.prop3 = "Checkout: Shopping Bag";
	a.prop4 = "Checkout";
	a.prop7 = "Checkout Start";
	a.eVar8 = window.eVar8;
	a.eVar9 = window.eVar9;
	a.eVar10 = window.eVar10;
	a.eVar44 = "mobile site";
	a.prop44 = "mobile site";
	a.pageName = "Checkout: Shopping Bag";
	a.t()
}

function shippingLoadHandler(a) {
	var b = s_gi(s_account);
	clean(b);
	b.linkTrackVars = "prop1,prop2,prop3,prop4,prop7,eVar8,eVar9,eVar10,eVar30,eVar41,eVar44,prop44,eVar62,pageName,products,events";
	b.prop1 = "Checkout";
	b.prop2 = "Checkout: Shipment Information";
	b.prop3 = "Checkout: Shipment Information";
	b.prop4 = "Checkout";
	b.prop7 = "Shipping Information";
	b.eVar8 = window.eVar8;
	b.eVar9 = window.eVar9;
	b.eVar10 = window.eVar10;
	b.eVar30 = "silverlight not detected";
	b.eVar41 = "checkout";
	b.eVar44 = "mobile site";
	b.prop44 = "mobile site";
	b.pageName = "Checkout: Shipment Information";
	b.products = a;
	b.linkTrackEvents = b.events = "scCheckout";
	b.t()
}

function paymentInfomationLoadHandler(a) {
	var b = s_gi(s_account);
	clean(b);
	b.linkTrackVars = "prop1,prop2,prop3,prop4,prop7,eVar8,eVar9,eVar10,eVar44,prop44,products,pageName,events";
	b.linkTrackEvents = b.events = "event4";
	b.prop1 = "Checkout";
	b.prop2 = "Checkout: Payment Information";
	b.prop3 = "Checkout: Payment Information";
	b.prop4 = "Checkout";
	b.prop7 = "Payment Information";
	b.eVar8 = window.eVar8;
	b.eVar9 = window.eVar9;
	b.eVar10 = window.eVar10;
	b.eVar44 = "mobile site";
	b.prop44 = "mobile site";
	b.products = a;
	b.pageName = "Checkout: Payment Information";
	b.t()
}

function shopCartListLoadHandler() {
	s.linkTrackVars = "prop1,prop2,prop3,prop4,eVar8,eVar9,eVar10,eVar44,prop44,pageName";
	s.prop1 = "Checkout";
	s.prop2 = "Checkout: Shopping Bag";
	s.prop3 = "Checkout: Shopping Bag";
	s.prop4 = "Checkout";
	s.eVar8 = window.eVar8;
	s.eVar9 = window.eVar9;
	s.eVar10 = window.eVar10;
	s.eVar44 = "mobile site";
	s.prop44 = "mobile site";
	s.pageName = "Checkout: Shopping Bag";
	s.t()
}

function myAccountLoadHandler() {
	s.linkTrackVars = "prop1,prop2,prop3,prop4,prop15,prop16,prop23,prop44,eVar8,eVar9,eVar10,eVar11,eVar29,eVar30,eVar33,eVar41,eVar44,eVar62";
	s.linkTrackVars += "eVar30,eVar41,eVar62";
	s.linkTrackEvents = s.events = "";
	s.prop1 = "My Account";
	s.prop2 = "My Account";
	s.prop3 = "My Account";
	s.prop4 = "My Account";
	s.eVar8 = window.eVar8;
	s.eVar9 = window.eVar9;
	s.eVar10 = window.eVar10;
	s.prop16 = "registration thank you";
	s.prop23 = "7";
	s.eVar30 = "silverlight not detected";
	s.eVar41 = "my account";
	s.eVar44 = "mobile site";
	s.prop44 = "mobile site";
	s.pageName = "my account";
	s.t()
}

function orderSuccessLoadHandler() {
	s.linkTrackVars = "prop1,prop2,prop3,prop4,prop7,eVar1,eVar2,eVar3,eVar4,eVar8,eVar9,eVar10,eVar44,state,zip,purchaseID,prop44,products,pageName,events";
	s.linkTrackEvents = s.events = "purchase,event5,event6,event7,event38";
	s.prop1 = "Checkout";
	s.prop2 = "Checkout: Purchase Complete";
	s.prop3 = "Checkout: Purchase Complete";
	s.prop4 = "Checkout";
	s.prop7 = "Purchase Complete";
	s.eVar1 = s.purchaseID = $j("#orderCode").val();
	switch ($j("#paymentType").val()) {
		case "6":
			s.eVar2 = "alipay";
			break;
		case "18":
			s.eVar2 = "alipay";
			break;
		case "3":
			s.eVar2 = "bank";
			break;
		case "1":
			s.eVar2 = "cod";
			break
	}
	s.eVar3 = $j("#deliveryWay").val();
	s.eVar4 = "not used";
	s.eVar8 = window.eVar8;
	s.eVar9 = window.eVar9;
	s.eVar10 = window.eVar10;
	s.eVar44 = "mobile site";
	s.prop44 = "mobile site";
	s.state = $j("#orderStatus").val();
	s.zip = $j("#zipCode").val();
	s.products = $j("#productStr").val();
	s.pageName = "Checkout: Purchase Complete";
	s.t()
}

function paymentSuccessClickHandler() {
	s.linkTrackVars = "state,zip,events,eVar44,prop44";
	s.linkTrackEvents = s.events = "purchase";
	s.state = "UT";
	s.eVar44 = "mobile site";
	s.prop44 = "mobile site";
	s.tl(this, "o");
	s.linkTrackEvents = s.events = ""
}

function homepageLoadHandler() {
	var a = {
		prop1: "Home Page",
		prop2: "Home Page",
		prop3: "Home Page",
		prop4: "Home Page",
		prop23: "",
		eVar6: "non-search",
		eVar8: window.eVar8,
		eVar9: window.eVar9,
		eVar10: window.eVar10,
		eVar16: "non-internal campaign",
		eVar17: "non-browse",
		eVar18: "homepage feature",
		eVar30: "silverlight not detected",
		eVar41: "homepage",
		eVar44: "mobile site",
		eVar47: "non-browse - no refinement",
		prop44: "mobile site",
		pageName: "Home Page",
		events: "event41",
		products: ";productmerch174"
	};
	track(a)
}

function openMiniCartHandler() {
	var a = window.s;
	a.events = "scView";
	a.pageName = "cart view";
	a.t()
};