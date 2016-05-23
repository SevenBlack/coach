function closeBirth(a) {
	$j("#menu_close").show();
	$j(a).parent().hide()
}

function closeWinter(a) {
	$j("#menu_close").show();
	$j(a).parent().hide()
}

function closesingledogDay(a) {
	$j("#menu_close").show();
	$j(a).parent().hide()
}

function closeMen(a) {
	$j("#menu_close").show();
	$j(a).parent().hide()
}

function closeWomen(a) {
	$j("#menu_close").show();
	$j(a).parent().hide()
}

function closeCoachWorld(a) {
	$j("#menu_close").show();
	$j(a).parent().hide()
}

function openBirth(a) {
	$j("#Birth_open").show();
	if ($j("#menu_close").is(":visible")) {
		$j("#menu_close").hide()
	} else {
		$j(a).parent().hide()
	}
}

function openWinter(a) {
	$j("#winter_open").show();
	if ($j("#menu_close").is(":visible")) {
		$j("#menu_close").hide()
	} else {
		$j(a).parent().hide()
	}
}

function opensingledogDay(a) {
	$j("#singleDay_open").show();
	if ($j("#menu_close").is(":visible")) {
		$j("#menu_close").hide()
	} else {
		$j(a).parent().hide()
	}
}

function openCoachWorld(a) {
	$j("#coachWorld_open").show();
	if ($j("#menu_close").is(":visible")) {
		$j("#menu_close").hide()
	} else {
		$j(a).parent().hide()
	}
}

function openCoachCollection(a) {
	$j("#coachCollection_open").show();
	if ($j("#menu_close").is(":visible")) {
		$j("#menu_close").hide()
	} else {
		$j(a).parent().hide()
	}
}

function closeCoachCollection(a) {
	$j("#menu_close").show();
	$j(a).parent().hide()
}

function closeHolidayGift(a) {
	$j("#menu_close").show();
	$j(a).parent().hide()
}

function openHolidayGift(a) {
	$j("#holidayGift_open").show();
	if ($j("#menu_close").is(":visible")) {
		$j("#menu_close").hide()
	} else {
		$j(a).parent().hide()
	}
}

function openMen(a) {
	$j("#men_open").show();
	if ($j("#menu_close").is(":visible")) {
		$j("#menu_close").hide()
	} else {
		$j(a).parent().hide()
	}
}

function openWomen(a) {
	$j("#women_open").show();
	if ($j("#menu_close").is(":visible")) {
		$j("#menu_close").hide()
	} else {
		$j(a).parent().hide()
	}
}

function openhandbags(a) {
	$j("#handbags_open").show();
	if ($j("#menu_close").is(":visible")) {
		$j("#menu_close").hide()
	} else {
		$j(a).parent().hide()
	}
}

function closehandbags(a) {
	$j("#menu_close").show();
	$j(a).parent().hide()
}

function closefallcollections(a) {
	$j("#menu_close").show();
	$j(a).parent().hide()
}! function(b) {
	b.waitForImages = {
		hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
	}, b.expr[":"].uncached = function(a) {
		return b(a).is('img[src!=""]') && !a.complete
	}, b.fn.waitForImages = function(a, f, e) {
		if (b.isPlainObject(arguments[0]) && (f = a.each, e = a.waitForAll, a = a.finished), a = a || b.noop, f = f || b.noop, e = !!e, !b.isFunction(a) || !b.isFunction(f)) {
			throw new TypeError("An invalid callback was supplied.")
		}
		return this.each(function() {
			var n = b(this),
				m = [];
			if (e) {
				var l = b.waitForImages.hasImageProperties || [],
					k = /url\((['"]?)(.*?)\1\)/g;
				n.find("*").each(function() {
					var g = b(this);
					g.is("img:uncached") && m.push({
						src: g.attr("src"),
						element: g[0]
					}), b.each(l, function(h, o) {
						var j = g.css(o);
						if (!j) {
							return !0
						}
						for (var i; i = k.exec(j);) {
							m.push({
								src: i[2],
								element: g[0]
							})
						}
					})
				})
			} else {
				n.find("img:uncached").each(function() {
					m.push({
						src: this.src,
						element: this
					})
				})
			}
			var d = m.length,
				c = 0;
			0 == d && a.call(n[0]), b.each(m, function(j, i) {
				var h = new Image;
				b(h).bind("load error", function(g) {
					return c++, f.call(i.element, c, d, "load" == g.type), c == d ? (a.call(n[0]), !1) : void 0
				}), h.src = i.src
			})
		})
	}
}(jQuery);