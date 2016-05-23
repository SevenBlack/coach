var shopCart = {
	isSelect: true,
	editSkuNumToShopCart: function(d) {
		var b = loxia.encodeUrl(_contextPath + "/removeShopCartSku.json", true);
		var c = $j(d).parent().parent().parent().parent().parent();
		var e = c.find("input[name='extentionCode']").val();
		var a = c.find("select[name='quantitySelect'] option:selected").text();
		shopCart.editShopCart(e, a);
		$j(".content_wrapper").css("height", "auto")
	},
	editShopCart: function(c, b) {
		var a = loxia.encodeUrl($j(document.body).attr("root") + "/editShopCartSkuNum.json", true);
		loxia.asyncXhr(a, {
			extentionCode: c,
			num: b
		}, {
			success: function(e, f) {
				if (e) {
					$j(".ck_probag_listbox").html(e);
					var d = $j("#totalNumContent").val();
					if (!d) {
						d = 0
					}
					$j("#headerShopcartNum").html(d);
					shopCart.requestHeaderShoppingCart()
				}
			},
			error: function() {}
		})
	},
	checkAvailableQty: function(d, b) {
		var a = _contextPath + "/checkAvailableQty.json";
		var c = loxia.syncXhr(a, {
			extentionCode: d,
			num: b
		});
		if (c) {
			if (c.isEnoughStock) {
				return true
			}
			return false
		}
	},
	removeShopCartSku: function(f, c) {
		var e = (c == "shoppingCart" ? $j(f).parent().parent().parent() : $j(f).parent().parent());
		var d = e.find("input[name='styleCode']").val();
		var a = e.find("input[name='prod']").val();
		var b = window.s;
		b.linkTrackVars = "events,eVar44,prop44,products";
		b.linkTrackEvents = b.events = "event29";
		b.prop44 = "mobile site";
		b.eVar44 = "mobile site";
		b.products = a;
		b.tl(f, "o", "SKU Remove");
		showsurepop("你确定要从购物篮中删除该商品吗？", null, function() {
			if (c == "shoppingCart") {
				shopCart.removeContentShopCartSku(f, c)
			} else {
				if (c == "headerShopCart") {
					shopCart.removeHeaderShopCartSku(f, c)
				}
			}
		})
	},
	removeContentShopCartSku: function(g, c) {
		var f = window.location.pathname;
		var b = loxia.encodeUrl(_contextPath + "/removeShopCartSku.json", true);
		var e = $j(g).parent().parent().parent();
		var h = e.find("input[name='extentionCode']").val();
		var d = e.find("input[name='styleCode']").val();
		var a = e.find("select[name='quantitySelect'] option:selected").text();
		loxia.asyncXhr(b, {
			extentionCode: h,
			num: a,
			type: c
		}, {
			success: function(k, l) {
				if (k) {
					$j(".ck_probag_listbox").html(k);
					var j = $j("#totalNumContent").val();
					if (!j) {
						j = 0
					}
					$j("#headerShopcartNum").html(j);
					if (f.indexOf("shoppingCart.htm") != -1) {
						shopCart.requestHeaderShoppingCart()
					}
					var i = window.s;
					i.linkTrackVars = "events,eVar44,prop44,products";
					i.linkTrackEvents = i.events = "scRemove";
					i.prop44 = "mobile site";
					i.eVar44 = "mobile site";
					i.products = d;
					i.tl(g, "o")
				}
			},
			error: function() {}
		})
	},
	removeHeaderShopCartSku: function(g, c) {
		var f = window.location.pathname;
		var b = loxia.encodeUrl(_contextPath + "/removeShopCartSku.json", true);
		var e = $j(g).parent().parent();
		var h = e.find("input[name='extentionCode']").val();
		var d = e.find("input[name='styleCode']").val();
		var a = e.find("span[name='quantityHead']").text();
		loxia.asyncXhr(b, {
			extentionCode: h,
			num: a,
			type: c
		}, {
			success: function(k, l) {
				if (k) {
					$j("#miniCartBox").html(k);
					var j = $j("#totalNumTop").val();
					if (!j) {
						j = 0
					}
					$j("#headerShopcartNum").html(j);
					if (f.indexOf("shoppingCart.htm") != -1) {
						shopCart.requestShoppingCart()
					}
					var i = window.s;
					i.linkTrackVars = "events,eVar44,prop44,products";
					i.linkTrackEvents = i.events = "scRemove";
					i.products = d;
					i.prop44 = "mobile site";
					i.eVar44 = "mobile site";
					i.tl(g, "o")
				}
			},
			error: function() {}
		})
	},
	requestHeaderShoppingCart: function() {
		var a = loxia.encodeUrl($j(document.body).attr("root") + "/coach/requestHeaderShoppingCart.json", true);
		loxia.asyncXhr(a, {}, {
			success: function(c, d) {
				if (c) {
					$j("#miniCartBox").html(c);
					var b = $j("#totalNumTop").val();
					if (!b) {
						totoalNum = 0
					}
					if (b >= 0 && b <= 9) {
						$j("#headerShopcartNum").css("right", "19px")
					}
					if (b > 9) {
						$j("#headerShopcartNum").css("right", "16px")
					}
					if (b > 99) {
						$j("#headerShopcartNum").css("right", "13px")
					}
					$j("#headerShopcartNum").html(b)
				}
			},
			error: function() {}
		})
	},
	requestShoppingCart: function() {
		var a = loxia.encodeUrl($j(document.body).attr("root") + "/requestShoppingCart.json", true);
		loxia.asyncXhr(a, {}, {
			success: function(c, d) {
				if (c) {
					$j(".ck_probag_listbox").html(c);
					var b = $j("#totalNumContent").val();
					if (!b) {
						b = 0
					}
					$j("#headerShopcartNum").html(b)
				}
			},
			error: function() {}
		})
	},
	hiddenHeadCart: function() {
		$j("#miniCartBox").hide()
	},
	selectGift: function(a) {
		var b = $j(a).val();
		$j.ajax({
			url: _contextPath + "/chooseGift.htm",
			type: "POST",
			data: {
				extentionCode: b,
				num: 1
			},
			success: function(c) {
				if (!c.result) {
					$j(a)[0].checked = false
				}
			},
			error: function() {}
		})
	},
	removeMobileContentShopCartSku: function(g, c) {
		var f = window.location.pathname;
		var b = loxia.encodeUrl(_contextPath + "/removeShopCartSku.json", true);
		var e = $j(g).parent().parent().parent();
		var h = e.find("input[name='extentionCode']").val();
		var d = e.find("input[name='styleCode']").val();
		var a = e.find("select[name='quantitySelect'] option:selected").text();
		loxia.asyncXhr(b, {
			extentionCode: h,
			num: a,
			type: c
		}, {
			success: function(k, l) {
				if (k) {
					$j("#ck_probag_listbox").html(k);
					var j = $j("#totalNumContent").val();
					if (!j) {
						j = 0
					}
					$j("#headerShopcartNum").html(j);
					if (f.indexOf("shoppingCart.htm") != -1) {
						shopCart.requestHeaderShoppingCart()
					}
					var i = window.s;
					i.linkTrackVars = "events,eVar44,prop44,products";
					i.linkTrackEvents = i.events = "scRemove";
					i.products = d;
					i.prop44 = "mobile site";
					i.eVar44 = "mobile site";
					i.tl(g, "o")
				}
			},
			error: function() {}
		})
	}
};