(function(a) {
	Array.prototype.reduce === a && (Array.prototype.reduce = function(i) {
		if (void 0 === this || null === this) {
			throw new TypeError
		}
		var d = Object(this),
			f = d.length >>> 0,
			c = 0,
			e;
		if ("function" != typeof i) {
			throw new TypeError
		}
		if (0 == f && 1 == arguments.length) {
			throw new TypeError
		}
		if (2 <= arguments.length) {
			e = arguments[1]
		} else {
			do {
				if (c in d) {
					e = d[c++];
					break
				}
				if (++c >= f) {
					throw new TypeError
				}
			} while (1)
		}
		for (; c < f;) {
			c in d && (e = i.call(a, e, d[c], c, d)), c++
		}
		return e
	});
	String.prototype.trim === a && (String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, "")
	})
})();
var Merci = function() {
	function d(a) {
		return a._mid || (a._mid = ja++)
	}

	function q(a, c, e, f) {
		c = l(c);
		if (c.ns) {
			var b = RegExp("(?:^| )" + c.ns.replace(" ", " .* ?") + "(?: |$)")
		}
		return (U[d(a)] || []).filter(function(a) {
			return a && (!c.e || a.e == c.e) && (!c.ns || b.test(a.ns)) && (!e || d(a.fn) === d(e)) && (!f || a.sel == f)
		})
	}

	function l(a) {
		a = ("" + a).split(".");
		return {
			e: a[0],
			ns: a.slice(1).sort().join(" ")
		}
	}

	function g(a, c, e) {
		f.isObject(a) ? f.each(a, e) : a.split(/\s/).forEach(function(a) {
			e(a, c)
		})
	}

	function b(a, c, e, b, t, m) {
		var n = d(a),
			k = U[n] || (U[n] = []);
		g(c, e, function(c, e) {
			var d = l(c);
			d.fn = e;
			d.sel = b;
			d.e in ba && (e = function(a) {
				var c = a.relatedTarget;
				if (!c || c !== this && !f.contains(this, c)) {
					return d.fn.apply(this, arguments)
				}
			});
			d.del = t && t(e, c);
			var n = d.del || e;
			d.proxy = function(c) {
				var e = n ? n.apply(a, [c].concat(c.data)) : !0;
				!1 === e && f.preventDefault(c);
				return e
			};
			d.i = k.length;
			k.push(d);
			a.addEventListener(ba[d.e] || d.e, d.proxy, d.del && ("focus" == d.e || "blur" == d.e) || !!m)
		})
	}

	function h(a, c, e, f, b) {
		var t = d(a);
		g(c || "", e, function(c, e) {
			q(a, c, e, f).forEach(function(c) {
				delete U[t][c.i];
				a.removeEventListener(ba[c.e] || c.e, c.proxy, c.del && ("focus" == c.e || "blur" == c.e) || !!b)
			})
		})
	}

	function u(a) {
		var c, e = {
			originalEvent: a
		};
		for (c in a) {
			!ka.test(c) && a[c] !== k && (e[c] = a[c])
		}
		f.each(la, function(c, f) {
			e[c] = function() {
				this[f] = ma;
				return a[c].apply(a, arguments)
			};
			e[f] = na
		});
		return e
	}

	function j(a) {
		return "[object Function]" == V.call(a)
	}

	function s(a) {
		return a instanceof Object
	}

	function y(a) {
		if (!a || !s(a) || a.nodeType || null != a && a == a.window) {
			return !1
		}
		if ("__proto__" in {}) {
			return s(a) && a.__proto__ == Object.prototype
		}
		try {
			if (a.constructor && !a.hasOwnProperty("constructor") && !a.constructor.prototype.hasOwnProperty("isPrototypeOf")) {
				return !1
			}
		} catch (c) {
			return !1
		}
		for (var e in a) {}
		return e === k || a.hasOwnProperty(e)
	}

	function A(a) {
		return a instanceof Array
	}

	function B(a) {
		return "number" == typeof a.length
	}

	function r(a) {
		return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}

	function F(a) {
		return a in O ? O[a] : O[a] = RegExp("(^|\\s)" + a + "(\\s|$)")
	}

	function C(a) {
		return "children" in a ? K.call(a.children) : f.map(a.childNodes, function(a) {
			if (1 == a.nodeType) {
				return a
			}
		})
	}

	function G(a, c) {
		a = a || I;
		if ("__proto__" in {}) {
			a.__proto__ = G.prototype
		} else {
			for (var e in G.prototype) {
				a[e] = G.prototype[e]
			}
		}
		a.selector = c || "";
		return a
	}

	function J(a, c, e) {
		for (p in c) {
			e && y(c[p]) ? (y(a[p]) || (a[p] = {}), J(a[p], c[p], e)) : c[p] !== k && (a[p] = c[p])
		}
	}

	function H(a, c) {
		return c === k ? f(a) : f(a).filter(c)
	}

	function z(a, c, e, f) {
		return j(c) ? c.call(a, e, f) : c
	}

	function x(a, c) {
		var e = a.className,
			f = e && e.baseVal !== k;
		if (c === k) {
			return f ? e.baseVal : e
		}
		f ? e.baseVal = c : a.className = c
	}

	function v(a) {
		var c;
		try {
			return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : !isNaN(c = Number(a)) ? c : /^[\[\{]/.test(a) ? f.parseJSON(a) : a) : a
		} catch (e) {
			return a
		}
	}

	function t(a, c) {
		c(a);
		for (var e in a.childNodes) {
			t(a.childNodes[e], c)
		}
	}

	function m(a, c) {
		var e = a[P],
			e = e && W[e];
		if (c === k) {
			return e || n(a)
		}
		if (e) {
			if (c in e) {
				return e[c]
			}
			var b = L(c);
			if (b in e) {
				return e[b]
			}
		}
		return ha.call(f(a), c)
	}

	function n(a, c, e) {
		var b = a[P] || (a[P] = ++f.uuid),
			d;
		if (!(d = W[b])) {
			d = W;
			var t = {};
			f.each(a.attributes, function(a, c) {
				0 == c.name.indexOf("data-") && (t[L(c.name.replace("data-", ""))] = v(c.value))
			});
			d = d[b] = t
		}
		a = d;
		c !== k && (a[L(c)] = e);
		return a
	}
	var k, p, f, E, I = [],
		K = I.slice,
		M = I.filter,
		w = window.document,
		Q = {},
		O = {},
		R = w.defaultView.getComputedStyle,
		X = {
			"column-count": 1,
			columns: 1,
			"font-weight": 1,
			"line-height": 1,
			opacity: 1,
			"z-index": 1,
			zoom: 1
		},
		Y = /^\s*<(\w+|!)[^>]*>/,
		ca = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		Z = /^(?:body|html)$/i,
		da = "val css html text data width height offset".split(" "),
		S = w.createElement("table"),
		$ = w.createElement("tr"),
		aa = {
			tr: w.createElement("tbody"),
			tbody: S,
			thead: S,
			tfoot: S,
			td: $,
			th: $,
			"*": w.createElement("div")
		},
		ea = /^\.([\w-]+)$/,
		fa = /^#([\w-]*)$/,
		ga = /^[\w-]+$/,
		V = {}.toString,
		D = {},
		L, N, ia = w.createElement("div"),
		ja = 1,
		U = {},
		T = {},
		ba = {
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			blur: "focusout",
			focus: "focusin"
		},
		W = {},
		ha, P = "Merci" + +new Date;
	T.click = T.mousedown = T.mouseup = T.mousemove = "MouseEvents";
	var ma = function() {
			return !0
		},
		na = function() {
			return !1
		},
		ka = /^([A-Z]|layer[XY]$)/,
		la = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	D.matches = function(a, c) {
		if (!a || 1 !== a.nodeType) {
			return !1
		}
		var e = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
		if (e) {
			return e.call(a, c)
		}
		var f;
		f = a.parentNode;
		(e = !f) && (f = ia).appendChild(a);
		f = ~D.qsa(f, c).indexOf(a);
		e && ia.removeChild(a);
		return f
	};
	L = function(a) {
		return a.replace(/-+(.)?/g, function(a, e) {
			return e ? e.toUpperCase() : ""
		})
	};
	N = function(a) {
		return M.call(a, function(c, e) {
			return a.indexOf(c) == e
		})
	};
	D.fragment = function(a, c, e) {
		a.replace && (a = a.replace(ca, "<$1></$2>"));
		c === k && (c = Y.test(a) && RegExp.$1);
		c in aa || (c = "*");
		var b, d = aa[c];
		d.innerHTML = "" + a;
		a = f.each(K.call(d.childNodes), function() {
			d.removeChild(this)
		});
		y(e) && (b = f(a), f.each(e, function(a, c) {
			if (-1 < da.indexOf(a)) {
				b[a](c)
			} else {
				b.attr(a, c)
			}
		}));
		return a
	};
	D.M = G;
	D.isM = function(a) {
		return a instanceof G
	};
	D.init = function(a, c) {
		if (a) {
			if (j(a)) {
				return f(w).ready(a)
			}
			if (D.isM(a)) {
				return a
			}
			var e;
			if (A(a)) {
				e = M.call(a, function(a) {
					return a !== k && null !== a
				})
			} else {
				if (s(a)) {
					e = [y(a) ? f.extend({}, a) : a], a = null
				} else {
					if (Y.test(a)) {
						e = D.fragment(a.trim(), RegExp.$1, c), a = null
					} else {
						if (c !== k) {
							return f(c).find(a)
						}
						e = D.qsa(w, a)
					}
				}
			}
			return G(e, a)
		}
		return G()
	};
	f = function(a, c) {
		return D.init(a, c)
	};
	f.extend = function(a) {
		var c, e = K.call(arguments, 1);
		"boolean" == typeof a && (c = a, a = e.shift());
		e.forEach(function(e) {
			J(a, e, c)
		});
		return a
	};
	D.qsa = function(a, c) {
		var e;
		return a === w && fa.test(c) ? (e = a.getElementById(RegExp.$1)) ? [e] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : K.call(ea.test(c) ? a.getElementsByClassName(RegExp.$1) : ga.test(c) ? a.getElementsByTagName(c) : a.querySelectorAll(c))
	};
	f.contains = function(a, c) {
		return a !== c && a.contains(c)
	};
	f.isFunction = j;
	f.isObject = s;
	f.isArray = A;
	f.isLikeArray = B;
	f.isPlainObject = y;
	f.numOnly = function(a) {
		isNaN(parseFloat(a)) && (a = a.replace(/[^0-9.-]/, ""));
		return parseFloat(a)
	};
	f.inArray = function(a, c, e) {
		return I.indexOf.call(c, a, e)
	};
	f.camelCase = L;
	f.trim = function(a) {
		return a.trim()
	};
	f.map = function(a, c) {
		var e, b = [],
			d;
		if (B(a)) {
			for (d = 0; d < a.length; d++) {
				e = c(a[d], d), null != e && b.push(e)
			}
		} else {
			for (d in a) {
				e = c(a[d], d), null != e && b.push(e)
			}
		}
		return 0 < b.length ? f.fn.concat.apply([], b) : b
	};
	f.each = function(a, c) {
		var e;
		if (B(a)) {
			for (e = 0; e < a.length && !1 !== c.call(a[e], e, a[e]); e++) {}
		} else {
			for (e in a) {
				if (!1 === c.call(a[e], e, a[e])) {
					break
				}
			}
		}
		return a
	};
	f.grep = function(a, c) {
		return M.call(a, c)
	};
	f.event = {
		add: b,
		remove: h
	};
	f.Event = function(a, c) {
		"string" != typeof a && (c = a, a = c.type);
		var e = w.createEvent(T[a] || "Events"),
			f = !0;
		if (c) {
			for (var b in c) {
				"bubbles" == b ? f = !!c[b] : e[b] = c[b]
			}
		}
		e.initEvent(a, f, !0);
		e.isDefaultPrevented = function() {
			return this.cdp
		};
		e.cdp = e.defaultPrevented;
		return e
	};
	f.preventDefault = function(a) {
		a.preventDefault();
		a.cdp = a.defaultPrevented
	};
	f.proxy = function(a, c) {
		if (f.isFunction(a)) {
			var e = function() {
				return a.apply(c, arguments)
			};
			e._mid = d(a);
			return e
		}
		if ("string" == typeof c) {
			return f.proxy(a[c], a)
		}
		throw new TypeError("expected function")
	};
	f.parseJSON = function(a) {
		return window.JSON.parse(a)
	};
	f.parseXML = function(a) {
		return (new DOMParser).parseFromString(a, "text/xml")
	};
	f.plugins = {};
	f.expando = P;
	f.uuid = 0;
	f.isReady = !1;
	f.fn = {
		forEach: I.forEach,
		reduce: I.reduce,
		push: I.push,
		sort: I.sort,
		indexOf: I.indexOf,
		concat: I.concat,
		map: function(a) {
			return f(f.map(this, function(c, e) {
				return a.call(c, e, c)
			}))
		},
		slice: function() {
			return f(K.apply(this, arguments))
		},
		ready: function(a) {
			if ("complete" == w.readyState) {
				if (w.body) {
					a(f)
				} else {
					return setTimeout(function() {
						f(w).ready(a)
					}, 1)
				}
			} else {
				w.addEventListener("DOMContentLoaded", function() {
					a(f)
				}, !1)
			}
			return this
		},
		get: function(a) {
			return a === k ? K.call(this) : this[a]
		},
		toArray: function() {
			return this.get()
		},
		size: function() {
			return this.length
		},
		remove: function() {
			return this.each(function() {
				null != this.parentNode && this.parentNode.removeChild(this)
			})
		},
		each: function(a) {
			this.forEach(function(c, e) {
				a.call(c, e, c)
			});
			return this
		},
		filter: function(a) {
			return j(a) ? this.not(this.not(a)) : f(M.call(this, function(c) {
				return D.matches(c, a)
			}))
		},
		add: function(a, c) {
			return f(N(this.concat(f(a, c))))
		},
		is: function(a) {
			return 0 < this.length && D.matches(this[0], a)
		},
		not: function(a) {
			var c = [];
			if (j(a) && a.call !== k) {
				this.each(function(e) {
					a.call(this, e) || c.push(this)
				})
			} else {
				var e = "string" == typeof a ? this.filter(a) : B(a) && j(a.item) ? K.call(a) : f(a);
				this.forEach(function(a) {
					0 > e.indexOf(a) && c.push(a)
				})
			}
			return f(c)
		},
		has: function(a) {
			return this.filter(function() {
				return s(a) ? f.contains(this, a) : f(this).find(a).size()
			})
		},
		eq: function(a) {
			return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
		},
		first: function() {
			var a = this[0];
			return a && !s(a) ? a : f(a)
		},
		last: function() {
			var a = this[this.length - 1];
			return a && !s(a) ? a : f(a)
		},
		find: function(a) {
			return 1 == this.length ? f(D.qsa(this[0], a)) : this.map(function() {
				return D.qsa(this, a)
			})
		},
		closest: function(a, c) {
			for (var e = this[0]; e && !D.matches(e, a);) {
				e = e !== c && e !== w && e.parentNode
			}
			return f(e)
		},
		parents: function(a) {
			for (var c = [], e = this; 0 < e.length;) {
				e = f.map(e, function(a) {
					if ((a = a.parentNode) && a !== w && 0 > c.indexOf(a)) {
						return c.push(a), a
					}
				})
			}
			return H(c, a)
		},
		parent: function(a) {
			return H(N(this.pluck("parentNode")), a)
		},
		children: function(a) {
			return H(this.map(function() {
				return C(this)
			}), a)
		},
		contents: function() {
			return this.map(function() {
				return K.call(this.childNodes)
			})
		},
		siblings: function(a) {
			return H(this.map(function(a, e) {
				return M.call(C(e.parentNode), function(a) {
					return a !== e
				})
			}), a)
		},
		empty: function() {
			return this.each(function() {
				this.innerHTML = ""
			})
		},
		pluck: function(a) {
			return f.map(this, function(c) {
				return c[a]
			})
		},
		show: function() {
			return this.each(function() {
				"none" == this.style.display && (this.style.display = null);
				if ("none" == R(this, "").getPropertyValue("display")) {
					var a = this.style,
						c = this.nodeName,
						e, f;
					Q[c] || (e = w.createElement(c), w.body.appendChild(e), f = R(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == f && (f = "block"), Q[c] = f);
					a.display = Q[c]
				}
			})
		},
		replaceWith: function(a) {
			return this.before(a).remove()
		},
		wrap: function(a) {
			var c = j(a);
			if (this[0] && !c) {
				var e = f(a).get(0),
					b = e.parentNode || 1 < this.length
			}
			return this.each(function(d) {
				f(this).wrapAll(c ? a.call(this, d) : b ? e.cloneNode(!0) : e)
			})
		},
		wrapAll: function(a) {
			if (this[0]) {
				f(this[0]).before(a = f(a));
				for (var c;
					(c = a.children()).length;) {
					a = c.first()
				}
				f(a).append(this)
			}
			return this
		},
		wrapInner: function(a) {
			var c = j(a);
			return this.each(function(e) {
				var b = f(this),
					d = b.contents();
				e = c ? a.call(this, e) : a;
				d.length ? d.wrapAll(e) : b.append(e)
			})
		},
		unwrap: function() {
			this.parent().each(function() {
				f(this).replaceWith(f(this).children())
			});
			return this
		},
		clone: function() {
			return this.map(function() {
				return this.cloneNode(!0)
			})
		},
		hide: function() {
			return this.css("display", "none")
		},
		toggle: function(a) {
			return this.each(function() {
				var c = f(this);
				(a === k ? "none" == c.css("display") : a) ? c.show(): c.hide()
			})
		},
		prev: function(a) {
			return f(this.pluck("previousElementSibling")).filter(a || "*")
		},
		next: function(a) {
			return f(this.pluck("nextElementSibling")).filter(a || "*")
		},
		html: function(a) {
			return a === k ? 0 < this.length ? this[0].innerHTML : null : this.each(function(c) {
				var e = this.innerHTML;
				f(this).empty().append(z(this, a, c, e))
			})
		},
		text: function(a) {
			return a === k ? 0 < this.length ? this[0].textContent : null : this.each(function() {
				this.textContent = a
			})
		},
		attr: function(a, c) {
			var e;
			return "string" == typeof a && c === k ? 0 == this.length || 1 !== this[0].nodeType ? k : "value" == a && "INPUT" == this[0].nodeName ? this.val() : !(e = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : e : this.each(function(e) {
				if (1 === this.nodeType) {
					if (s(a)) {
						for (p in a) {
							e = p;
							var f = a[p];
							null == f ? this.removeAttribute(e) : this.setAttribute(e, f)
						}
					} else {
						e = z(this, c, e, this.getAttribute(a)), null == e ? this.removeAttribute(a) : this.setAttribute(a, e)
					}
				}
			})
		},
		attributes: function() {
			var a = {};
			if (!this.length) {
				return this
			}
			f.each(this[0].attributes, function(c, e) {
				a[e.name] = e.value
			});
			return a
		},
		removeAttr: function(a) {
			return this.each(function() {
				1 === this.nodeType && this.removeAttribute(a)
			})
		},
		prop: function(a, c) {
			return c === k ? this[0] ? this[0][a] : k : this.each(function(e) {
				this[a] = z(this, c, e, this[a])
			})
		},
		data: function(a, c) {
			var e = this.attr("data-" + r(a), c);
			return null !== e ? v(e) : k
		},
		val: function(a) {
			return a === k ? 0 < this.length ? this[0].multiple ? f(this[0]).find("option").filter(function() {
				return this.selected
			}).pluck("value") : this[0].value : k : this.each(function(c) {
				this.value = z(this, a, c, this.value)
			})
		},
		offset: function() {
			if (!this[0]) {
				return null
			}
			var a = null;
			if (w.documentElement.getBoundingClientRect) {
				a = this[0].getBoundingClientRect()
			} else {
				for (var a = this[0], c = 0, e = 0, f = a.offsetWidth, b = a.offsetHeight; a;) {
					c += a.offsetLeft, e += a.offsetTop, a = a.offsetParent
				}
				a = {
					left: c,
					right: c + f,
					top: e,
					bottom: e + b
				};
				a.width = a.right - a.left;
				a.height = a.bottom - a.top
			}
			return {
				left: a.left + w.body.scrollLeft,
				top: a.top + w.body.scrollTop,
				width: a.width,
				height: a.height
			}
		},
		css: function(a, c) {
			if (2 > arguments.length && "string" == typeof a) {
				return 0 == this.length ? k : this[0].style[L(a)] || R(this[0], "").getPropertyValue(a)
			}
			var e = "";
			for (p in a) {
				!a[p] && 0 !== a[p] ? this.each(function() {
					this.style.removeProperty(r(p))
				}) : e += r(p) + ":" + ("number" == typeof a[p] && !X[r(p)] ? a[p] + "px" : a[p]) + ";"
			}
			"string" == typeof a && (!c && 0 !== c ? this.each(function() {
				this.style.removeProperty(r(a))
			}) : e = r(a) + ":" + ("number" == typeof c && !X[r(a)] ? c + "px" : c));
			return this.each(function() {
				this.style.cssText += ";" + e
			})
		},
		index: function(a) {
			return a ? this.indexOf(f(a)[0]) : this.parent().children().indexOf(this[0])
		},
		hasClass: function(a) {
			return 1 > this.length ? !1 : F(a).test(x(this[0]))
		},
		addClass: function(a) {
			return this.each(function(c) {
				E = [];
				var e = x(this);
				z(this, a, c, e).split(/\s+/g).forEach(function(a) {
					f(this).hasClass(a) || E.push(a)
				}, this);
				E.length && x(this, e + (e ? " " : "") + E.join(" "))
			})
		},
		removeClass: function(a) {
			return this.each(function(c) {
				if (a === k) {
					return x(this, "")
				}
				E = x(this);
				z(this, a, c, E).split(/\s+/g).forEach(function(a) {
					E = E.replace(F(a), " ")
				});
				x(this, E.trim())
			})
		},
		toggleClass: function(a, c) {
			return this.each(function(e) {
				e = z(this, a, e, x(this));
				(c === k ? !f(this).hasClass(e) : c) ? f(this).addClass(e): f(this).removeClass(e)
			})
		},
		scrollTop: function() {
			if (this.length) {
				return "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY
			}
		},
		position: function() {
			if (this.length) {
				var a = this[0],
					c = this.offsetParent(),
					e = this.offset(),
					b = Z.test(c[0].nodeName) ? {
						top: 0,
						left: 0
					} : c.offset();
				e.top -= parseFloat(f(a).css("margin-top")) || 0;
				e.left -= parseFloat(f(a).css("margin-left")) || 0;
				b.top += parseFloat(f(c[0]).css("border-top-width")) || 0;
				b.left += parseFloat(f(c[0]).css("border-left-width")) || 0;
				return {
					top: e.top - b.top,
					left: e.left - b.left
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var a = this.offsetParent || w.body; a && !Z.test(a.nodeName) && "static" == f(a).css("position");) {
					a = a.offsetParent
				}
				return a
			})
		},
		end: function() {
			return this.prevObject || f()
		},
		andSelf: function() {
			return this.add(this.prevObject || f())
		},
		bind: function(a, c) {
			return this.each(function() {
				b(this, a, c)
			})
		},
		unbind: function(a, c) {
			return this.each(function() {
				h(this, a, c)
			})
		},
		one: function(a, c) {
			return this.each(function(e, f) {
				b(this, a, c, null, function(a, c) {
					return function() {
						var e = a.apply(f, arguments);
						h(f, c, a);
						return e
					}
				})
			})
		},
		trigger: function(a, c) {
			if ("string" == typeof a || f.isPlainObject(a)) {
				a = f.Event(a)
			}
			var e = a;
			if (!("defaultPrevented" in e)) {
				e.defaultPrevented = !1;
				var b = e.preventDefault;
				e.preventDefault = function() {
					this.defaultPrevented = !0;
					b.call(this)
				}
			}
			a.data = c;
			return this.each(function() {
				"dispatchEvent" in this && this.dispatchEvent(a)
			})
		},
		triggerHandler: function(a, c) {
			var e, b;
			this.each(function(d, t) {
				e = u("string" == typeof a ? f.Event(a) : a);
				e.data = c;
				e.target = t;
				f.each(q(t, a.type || a), function(a, c) {
					b = c.proxy(e);
					if (e.isImmediatePropagationStopped()) {
						return !1
					}
				})
			});
			return b
		},
		delegate: function(a, c, e) {
			return this.each(function(d, t) {
				b(t, c, e, a, function(c) {
					return function(e) {
						var b, d = f(e.target).closest(a, t).get(0);
						if (d) {
							return b = f.extend(u(e), {
								currentTarget: d,
								liveFired: t
							}), c.apply(d, [b].concat([].slice.call(arguments, 1)))
						}
					}
				})
			})
		},
		undelegate: function(a, c, e) {
			return this.each(function() {
				h(this, c, e, a)
			})
		},
		live: function(a, c) {
			f(w.body).delegate(this.selector, a, c);
			return this
		},
		die: function(a, c) {
			f(w.body).undelegate(this.selector, a, c);
			return this
		},
		on: function(a, c, e) {
			return !c || f.isFunction(c) ? this.bind(a, c || e) : this.delegate(c, a, e)
		},
		off: function(a, c, e) {
			return !c || f.isFunction(c) ? this.unbind(a, c || e) : this.undelegate(c, a, e)
		},
		serializeArray: function(a) {
			var c = [],
				e, b = function(a, c) {
					return {
						name: a,
						value: c
					}
				};
			f(Array.prototype.slice.call(this.get(0).elements)).each(function() {
				e = f(this);
				var a = e.attr("type");
				"fieldset" != this.nodeName.toLowerCase() && (!this.disabled && "submit" != a && "image" != a && "reset" != a && "button" != a && ("radio" != a && "checkbox" != a || this.checked)) && c.push(b(e.attr("name"), e.val()))
			});
			a && ("image" == a.type ? (c.push(b(a.name + ".x", "1")), c.push(b(a.name + ".y", "1"))) : a.value ? c.push(b(a.name, a.value)) : c.push(b(a.name, "Submit")));
			return c
		},
		serialize: function(a) {
			var c = [];
			a = f.merci.isM(a) ? a[0] : a;
			this.serializeArray(a).forEach(function(a) {
				c.push(encodeURIComponent(a.name) + "=" + encodeURIComponent(a.value))
			});
			return c.join("&")
		},
		submit: function(a) {
			a ? this.bind("submit", a) : this.length && (a = f.Event("submit"), this.eq(0).trigger(a), a.defaultPrevented || this.get(0).submit());
			return this
		}
	};
	f.fn.detach = f.fn.remove;
	["parents", "prevAll", "nextAll"].forEach(function(a) {
		f.fn[a] = function(c) {
			for (var e = [], b = this, d = "parents" == a ? "parentNode" : "prevAll" == a ? "previousSibling" : "nextSibling"; 0 < b.length;) {
				b = f.map(b, function(a) {
					if ((a = a[d]) && a !== w && 0 > e.indexOf(a)) {
						return e.push(a), a
					}
				})
			}
			return H(e, c)
		}
	});
	"filter add not eq first last find closest parents parent children siblings".split(" ").forEach(function(a) {
		var c = f.fn[a];
		f.fn[a] = function() {
			var a = c.apply(this, arguments);
			a.prevObject = this;
			return a
		}
	});
	["width", "height"].forEach(function(a) {
		f.fn[a] = function(c) {
			var e, b = a.replace(/./, function(a) {
				return a[0].toUpperCase()
			});
			return c === k ? this[0] == window ? window["inner" + b] : this[0] == w ? w.documentElement["offset" + b] : (e = this.offset()) && e[a] : this.each(function(e) {
				var b = f(this);
				b.css(a, z(this, c, e, b[a]()))
			})
		}
	});
	["after", "prepend", "before", "append"].forEach(function(a, c) {
		var e = c % 2;
		f.fn[a] = function() {
			var a = f.map(arguments, function(a) {
					return s(a) ? a : D.fragment(a)
				}),
				b, d = 1 < this.length;
			return 1 > a.length ? this : this.each(function(m, n) {
				b = e ? n : n.parentNode;
				n = 0 == c ? n.nextSibling : 1 == c ? n.firstChild : 2 == c ? n : null;
				a.forEach(function(a) {
					if (d) {
						a = a.cloneNode(!0)
					} else {
						if (!b) {
							return f(a).remove()
						}
					}
					t(b.insertBefore(a, n), function(a) {
						null != a.nodeName && ("SCRIPT" === a.nodeName.toUpperCase() && (!a.type || "text/javascript" === a.type) && !a.src) && window.eval.call(window, a.innerHTML)
					})
				})
			})
		};
		f.fn[e ? a + "To" : "insert" + (c ? "Before" : "After")] = function(c) {
			f(c)[a](this);
			return this
		}
	});
	"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(a) {
		f.fn[a] = function(c) {
			return c ? this.bind(a, c) : this.trigger(a)
		}
	});
	["focus", "blur"].forEach(function(a) {
		f.fn[a] = function(c) {
			c ? this.bind(a, c) : this.each(function() {
				try {
					this[a]()
				} catch (c) {}
			});
			return this
		}
	});
	ha = f.fn.data;
	f.fn.data = function(a, c) {
		return c === k ? f.isPlainObject(a) ? this.each(function(c, b) {
			f.each(a, function(a, c) {
				n(b, a, c)
			})
		}) : 0 == this.length ? k : m(this[0], a) : this.each(function() {
			n(this, a, c)
		})
	};
	f.fn.removeData = function(a) {
		"string" == typeof a && (a = a.split(/\s+/));
		return this.each(function() {
			var c = this[P],
				e = c && W[c];
			e && f.each(a, function() {
				delete e[L(this)]
			})
		})
	};
	G.prototype = f.fn;
	D.uniq = N;
	D.deserializeValue = v;
	f.merci = D;
	return f
}();
window.Merci = Merci;
"$" in window || (window.$ = Merci);
(function(aP) {
	function aF(d) {
		if ("" === aI) {
			return d
		}
		d = d.charAt(0).toUpperCase() + d.substr(1);
		return aI + d
	}
	var aJ = "ontouchstart" in window,
		aN = "msPointerEnabled" in navigator,
		aQ = navigator.appVersion,
		aM = navigator.userAgent,
		aB = /WebKit/.test(aQ),
		aL = /iphone|ipad|ipod/gi.test(aQ),
		aD = /iphone/gi.test(aQ),
		ax = /ipod/gi.test(aQ),
		ao = /ipad/gi.test(aQ),
		an = /android/gi.test(aQ),
		aE = /android 2./gi.test(aQ),
		aj = /android 3./gi.test(aQ),
		am = /android 4./gi.test(aQ),
		ai = /blackberry/gi.test(aQ) && /version\/6/gi.test(aQ),
		af = /blackberry/gi.test(aQ) && /version\/7/gi.test(aQ),
		ah = aM.match(/(BB10).*Version\/([\d.]+)/) ? !0 : !1,
		aw = /MSIE 10/gi.test(aQ),
		ay = aM.match(/Chrome\/([\d.]+)/) || aM.match(/CriOS\/([\d.]+)/) ? !0 : !1,
		aA = aM.match(/Firefox\/([\d.]+)/) ? !0 : !1,
		aC = document.createElement("div").style,
		aI, aH = ["t", "webkitT", "MozT", "msT", "OT"],
		aK, aG = 0,
		aO = aH.length,
		ak = !1;
	for (; aG < aO && !(aK = aH[aG] + "ransform", aK in aC && (ak = aH[aG].substr(0, aH[aG].length - 1), aw)); aG++) {}
	ak && (an && aB) && (ak = "webkit");
	aH = (aI = ak) ? "-" + aI.toLowerCase() + "-" : "";
	aK = ai || af;
	var aG = aF("transition") in aC,
		aO = aF("transitionProperty"),
		ak = aF("transitionDuration"),
		ag = aF("transformOrigin"),
		ae = aF("transitionTimingFunction"),
		ac = aF("transitionDelay"),
		az = aF("transform") in aC,
		aC = aF("perspective") in aC,
		U = aL && window.Worker || af || ah || aw || ay,
		W = aH + "backface-visibility",
		T = aH + "transform-style",
		i = aH + "transform",
		e = aI + "Transform",
		au = aH + "transition",
		c = aI + "Transition",
		aq = aI,
		P = aJ ? "touchstart" : aN ? "MSPointerDown" : "mousedown",
		at = aJ ? "doubleTap" : "dblclick",
		ap = aJ ? "touchmove" : aN ? "MSPointerMove" : "mousemove",
		a = aJ ? "touchend" : aN ? "MSPointerUp" : "mouseup",
		av = aJ ? "touchcancel" : aN ? "MSPointerCancel" : "mouseup",
		ar = "onorientationchange" in window ? "orientationchange" : "resize",
		o;
	o = {
		"": "transitionend",
		webkit: "webkitTransitionEnd",
		Moz: "transitionend",
		O: "oTransitionEnd"
	}[aI];
	var al = aF("animationName"),
		ad = aF("animationDuration"),
		ab = aF("animationTimingFunction");
	aP.device = {
		ua: aM,
		appVersion: aQ,
		isWebkit: aB,
		isIDevice: aL,
		isIPhone: aD,
		isIPod: ax,
		isIPad: ao,
		getAndroidVersion: function() {
			var b = 0;
			this.isAndroid && (b = aQ.substring(aQ.indexOf("Android") + 8), b = b.substring(0, b.indexOf(";")));
			return b
		},
		isAndroid: an,
		isAndroid2: aE,
		isAndroid3: aj,
		isAndroid4: am,
		isBB6: ai,
		isBB7: af,
		isBB6or7: aK,
		isBB10: ah,
		isIE10: aw,
		isChrome: ay,
		isFirefox: aA,
		screen: function() {
			var d = this.isAndroid && void 0 != window.orientation && 0 == window.orientation ? window.screen.width > window.screen.height : void 0 != window.orientation ? 90 == Math.abs(window.orientation) : window.innerWidth > window.innerHeight;
			d ? aP("body").removeAttr("portrait").attr("landscape", "true") : aP("body").removeAttr("landscape").attr("portrait", "true");
			return {
				width: window.innerWidth,
				height: window.innerHeight,
				portrait: !d,
				landscape: d
			}
		},
		hasTouch: aJ,
		hasPointer: aN,
		hasTransition: aG,
		transitionProperty: aO,
		transitionDuration: ak,
		transformOrigin: ag,
		transitionTimingFunction: ae,
		transitionDelay: ac,
		hasTransform: az,
		hasTransform3d: aC,
		hasPositionFixed: U,
		backfaceVisibility: W,
		transformStyle: T,
		translate: "translate",
		transform: i,
		transformDOM: e,
		transition: au,
		transitionDOM: c,
		vendorSuffix: aH,
		vendorSuffixDOM: aq,
		startEvent: P,
		doubleEvent: at,
		moveEvent: ap,
		endEvent: a,
		cancelEvent: av,
		resizeEvent: ar,
		transitionEnd: o,
		animationName: al,
		animationDuration: ad,
		animationTimingFunction: ab,
		animationEnd: {
			"": "animationend",
			webkit: "webkitAnimationEnd",
			Moz: "animationend",
			O: "oanimationEnd"
		}[aI],
		nextFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(d) {
			return setTimeout(d, 1)
		},
		cancelFrame: window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || clearTimeout
	};
	aJ = aP.device;
	if (aJ.isAndroid2 || aJ.isBB6or7) {
		aJ.hasTransform3d = !1
	}
	aJ.hasTransform3d && (aJ.translate = "translate3d")
})(Merci);
(function(a) {
	a.fn.transform = function(n, d, m, c, k, f, e, i) {
		i = a.device;
		a(this).each(function() {
			var b = "";
			n = n ? n : 0;
			d = d ? d : 0;
			m = m ? m : 0;
			c = c ? c : null;
			k = k ? k : 0;
			f = f ? f : 0;
			e = e ? e : 0;
			k && (b += "rotateX(" + k + "deg) ");
			f && (b += "rotateY(" + f + "deg) ");
			e && (b += "rotateZ(" + e + "deg) ");
			b += i.translate + "(" + n + "px," + d + "px";
			b = i.hasTransform3d ? b + ("," + m + "px) ") : b + ") ";
			c && (b += "scale(" + c + ") ");
			this.style[i.transform] = b
		});
		return a(this)
	}
})(Merci);
Merci(document).ready(function(n) {
	function m() {
		var d = c.screen(),
			h = n.Event("viewportchange");
		n("body").css({
			"min-height": d.height + "px"
		});
		h.width = d.width;
		h.height = d.height;
		h.portrait = d.portrait;
		h.landscape = d.landscape;
		n(window).trigger(h)
	}
	var c = n.device,
		k = c.screen(),
		a = k.portrait,
		i = !1,
		f, e = function() {
			var d = n("*:focus"),
				l = window.innerHeight + 200,
				h = (new Date).getTime();
			f ? (clearInterval(f), f = null) : (i = !1, d.length && !c.isIE10 && (c.isAndroid2 ? setTimeout(function() {
				d[0].focus()
			}, 300) : (d[0].blur(), setTimeout(function() {
				i = !0
			}, 300))), n("body").css({
				"min-height": l + "px"
			}), !c.isAndroid2 && !c.isIE10 && window.scrollTo(0, 1), f = setInterval(function() {
				var g = (new Date).getTime();
				if (parseInt(document.body.clientHeight) >= l && 0 < document.body.scrollTop || 1000 < g - h) {
					clearInterval(f), f = null, c.isAndroid || c.isIE10 ? setTimeout(m, 300) : m()
				}
			}, 100))
		};
	n("body").removeAttr("onorientationchange");
	e();
	setInterval(function() {
		k = c.screen();
		if (k.portrait != a || i) {
			a = k.portrait, e()
		}
	}, 200)
});
(function(k) {
	function a(q, v, u, t) {
		var s = Math.abs(q - v),
			r = Math.abs(u - t);
		return s >= r ? 0 < q - v ? "Left" : "Right" : 0 < u - t ? "Up" : "Down"
	}

	function c() {
		p = null;
		n.last && (n.el.trigger("longTap"), n = {})
	}

	function i() {
		f && clearTimeout(f);
		o && clearTimeout(o);
		e && clearTimeout(e);
		p && clearTimeout(p);
		f = o = e = p = null;
		n = {}
	}
	var n = {},
		f, o, e, p, m = k.device;
	k(document).ready(function() {
		var b, g, d = {};
		if (m.isAndroid2) {
			k("input[type=text], input[type=number]").on(m.startEvent, function(h) {
				h.stopPropagation();
				k(this).click()
			})
		}
		k(document.body).bind(m.startEvent, function(l) {
			var h = l.touches ? l.touches[0] : l;
			n.id = h.identifier ? h.identifier : h.pointerId ? h.pointerId : 1;
			b = Date.now();
			g = b - (n.last || b);
			n.el = k("tagName" in (l.touches ? l.touches[0].target : l.target) ? l.touches ? l.touches[0].target : l.target : (l.touches ? l.touches[0].target : l.target).parentNode);
			f && clearTimeout(f);
			n.x1 = h.pageX;
			n.y1 = h.pageY;
			d[n.id] = {
				x: n.x1,
				y: n.y1
			};
			0 < g && 250 >= g && (n.isDoubleTap = !0);
			n.last = b;
			p = setTimeout(c, 750)
		}).bind(m.moveEvent, function(t) {
			var s;
			if (s = d[n.id]) {
				var r;
				s = d[n.id];
				if (Object.keys) {
					r = Object.keys(s).length
				} else {
					var q = 0;
					for (r in s) {
						++q
					}
					r = q
				}
				s = 0 != r
			}
			if (s && (p && clearTimeout(p), p = null, r = t.touches ? t.touches[0] : t, n.x2 = r.pageX, n.y2 = r.pageY, r = a(n.x1, n.x2, n.y1, n.y2), 10 < Math.abs(n.x1 - n.x2) && ("Up" == r || "Down" == r))) {
				k.preventDefault(t), t.stopPropagation()
			}
		}).bind(m.endEvent, function() {
			p && clearTimeout(p);
			p = null;
			n.x2 && 30 < Math.abs(n.x1 - n.x2) || n.y2 && 30 < Math.abs(n.y1 - n.y2) ? e = setTimeout(function() {
				n.el.trigger("swipe");
				n.el.trigger("swipe" + a(n.x1, n.x2, n.y1, n.y2));
				n = {}
			}, 0) : "last" in n && (o = setTimeout(function() {
				var h = k.Event("tap");
				h.cancelTouch = i;
				n && n.el && (n.el.trigger(h), n.isDoubleTap ? (n.el.trigger("doubleTap"), n = {}) : f = setTimeout(function() {
					f = null;
					n.el.trigger("singleTap");
					n = {}
				}, 250))
			}, 0))
		}).bind(m.cancelEvent, i());
		k(window).bind("scroll", i)
	});
	"touchStart touchEnd touchMove swipe swipeLeft swipeRight swipeUp swipeDown doubleTap tap singleTap longTap".split(" ").forEach(function(d, h) {
		k.fn[d] = function(b) {
			d = d.match(/start$/i) ? m.startEvent : d.match(/move$/i) ? m.moveEvent : d.match(/end$/i) ? m.endEvent : 3 > h ? d.toLowerCase() : d;
			return this.bind(d, b)
		}
	})
})(Merci);
(function(a) {
	a.fn.drag = function(f, d, e, c) {
		return a(this).each(function() {
			function m() {
				return {
					start: {},
					current: {},
					last: {},
					end: {},
					deltaX: 0,
					deltaY: 0,
					moved: !1,
					horizontal: !1,
					vertical: !1,
					directionX: 0,
					directionY: 0
				}
			}

			function o(h, r) {
				var j = h.touches ? h.touches[0] : h;
				b[r].x = j.pageX;
				b[r].y = j.pageY
			}

			function l() {
				b.deltaX = -(b.start.x - b.current.x);
				b.directionX = 0 < b.deltaX ? 1 : -1;
				b.deltaY = -(b.start.y - b.current.y);
				b.directionY = 0 < b.deltaY ? 1 : -1
			}

			function q(h) {
				k && (o(h, "current"), b.moved = !0, l(), !b.vertical && Math.abs(b.deltaX) > Math.abs(b.deltaY) && (b.horizontal = !0), !b.horizontal && Math.abs(b.deltaX) < Math.abs(b.deltaY) && (b.vertical = !0), d && d.call(i, h, b))
			}

			function n(h) {
				k && (b.end.x = b.current.x, b.end.y = b.current.y, l(), e && e.call(i, h, b));
				a("body").unbind(g.moveEvent, q).unbind(g.endEvent, n)
			}
			var k = !1,
				i = this,
				b = null,
				p = {
					horizontal: !0,
					vertical: !0
				},
				g = a.device;
			c && a.extend(p, c);
			k = null;
			b = new m;
			a(this).bind(g.startEvent, function(h) {
				k = null;
				b = new m;
				k = (new Date).getTime();
				o(h, "start");
				f && f.call(this, h, b)
			}).bind(g.moveEvent, q).bind(g.endEvent, n).bind("click", function(h) {
				b.moved && (a.preventDefault(h), h.stopPropagation())
			})
		})
	}
})(Merci);
(function(a) {
	a.zoom = function(i, d) {
		var f = a.device,
			c = {
				busy: !1,
				hint: null,
				landscapeZoom: !1,
				maxZoom: 3,
				msgOnLoad: !0,
				overlay: null,
				pinch: !1,
				target: null,
				targetContainer: null,
				zoomIn: !1,
				zoomMode: "doubleTap"
			},
			e = new function() {
				function R(j, k) {
					var l = 1000 * (Math.abs(j) / k);
					return {
						dist: l * l / 2000,
						time: Math.round(l / 1)
					}
				}

				function T() {
					return c.landscapeZoom || f.screen().portrait
				}

				function E() {
					b && (clearTimeout(b), b = null);
					!c.zoomIn && (T() && !c.pinch && w) && (0 == w.css("opacity") ? K() : e.overlayTransition())
				}

				function M(l, n) {
					var k = c.target[0].clientWidth * (N - 1),
						j = c.target[0].clientHeight * (N - 1);
					l && (0 < P.x ? P.x = 0 : P.x < -k && (P.x = -k), 0 < P.y ? P.y = 0 : P.y < -j && (P.y = -j));
					n ? c.target.one(f.endEvent, function() {
						c.busy = !1
					}).css(f.transition, f.transform + " " + n + "ms ease-out") : (c.busy = !1, c.target.css(f.transition, "none"));
					c.target.transform(P.x, P.y, 0, N)
				}

				function O(k, j) {
					c.busy = !0;
					k.touches && (c.pinch = "doubleTap" != c.zoomMode && 2 == k.touches.length ? !0 : !1);
					S = U;
					o = k.timeStamp;
					h = c.targetContainer.offset();
					D || (D = {
						x: 1 < S ? P.x / (S - 1) : h.left - j.start.x,
						y: 1 < S ? P.y / (S - 1) : h.top - j.start.y
					}, Q = {
						x: (-P.x + j.start.x - h.left) / S,
						y: (-P.y + j.start.y - h.top) / S
					});
					c.pinch && e.overlayTransition()
				}

				function L(j) {
					c.pinch || (a.preventDefault(j), w && w.css(g, "0"), c.zoomIn ? e.zoomOut() : T() && e.zoomIn(!0))
				}

				function K() {
					w && T() && (e.redrawOverlay(), e.overlayTransition(0.9), b = setTimeout(function() {
						w.css(g, "0")
					}, 10000))
				}

				function y(p, m) {
					if (D && (c.zoomIn || c.pinch)) {
						a.preventDefault(p);
						c.zoomIn = !0;
						var n = 0;
						c.pinch && (U = N = parseFloat(S * m.scale), 1 >= N ? (U = 1, 0.8 > N && (N = 0.8)) : N > c.maxZoom && (U = N = c.maxZoom), n = Math.max(0, Math.min(1, (m.scale - 1) / 1.5)));
						var k = -D.y - (-D.y - Q.y) * n;
						P.x = -(-D.x - (-D.x - Q.x) * n) * (N - 1) + m.deltaX;
						P.y = -k * (N - 1) + m.deltaY;
						M(!1, 0)
					}
				}

				function I(p, k) {
					if (D) {
						if (c.pinch) {
							if (p.preventDefault(), c.pinch = !1, p.touches && !p.touches.length) {
								U = N = Math.min(N, c.maxZoom);
								if (1 > U) {
									N = S = U = 1, P.x = 0, P.y = 0
								} else {
									var m = Math.max(0, Math.min(1, (k.scale - 1) / 1.5)),
										l = -D.y - (-D.y - Q.y) * m;
									P.x = -(-D.x - (-D.x - Q.x) * m) * (N - 1) + k.deltaX;
									P.y = -l * (N - 1) + k.deltaY
								}
								M(!0, 250)
							}
						} else {
							if (c.zoomIn && k.moved) {
								if (N = U, c.zoomIn = 1 != U, f.isAndroid && !f.isAndroid4) {
									M(!0, 0)
								} else {
									var m = p.timeStamp - o,
										l = R(k.deltaX / N, m),
										n = R(k.deltaY / N, m);
									P.x += l.dist * k.directionX;
									P.y += n.dist * k.directionY;
									M(!0, Math.min(m + Math.min(l.time, n.time), 250))
								}
							} else {
								c.busy = !1
							}
						}
						if (p.touches && !p.touches.length || !p.touches) {
							D = null
						}
					}
				}

				function u() {
					e.redrawOverlay();
					T() || (w && w.css(g, "0"), e.zoomOut())
				}
				var g = "opacity",
					o, b, h = null,
					w, D = null,
					Q = null,
					P = {
						x: 0,
						y: 0
					},
					S = 1,
					N = 1,
					U = 1;
				return {
					bindTarget: function() {
						"doubleTap" == c.zoomMode && c.targetContainer.bind(f.doubleEvent, L);
						c.targetContainer.drag(O, y, I, {}).bind("tap", E);
						return this
					},
					init: function(j) {
						a.extend(c, j);
						c.hint && (w = c.hint.css({
							"pointer-events": "none"
						}));
						f.isAndroid2 && (c.zoomMode = "doubleTap");
						c.targetContainer && c.target && e.setTarget(c.targetContainer, c.target);
						"overlay" == c.zoomMode && setTimeout(function() {
							e.zoomIn()
						}, 200);
						a(window).bind("viewportchange", u);
						c.msgOnLoad && (b = setTimeout(K, 1000))
					},
					unbindTarget: function() {
						"doubleTap" == c.zoomMode && c.targetContainer.unbind(f.doubleEvent, L);
						c.targetContainer.unbind("tap", E);
						return this
					},
					isZoomed: function() {
						return c.zoomIn
					},
					isBusy: function() {
						return c.busy
					},
					overlayTransition: function(j) {
						b && (clearTimeout(b), b = null);
						w && w.css(f.transition, "opacity 1000ms ease-out").css("opacity", j ? j : "0")
					},
					redrawOverlay: function() {
						if (w && c.target) {
							var j = c.target.parent().offset();
							w.css({
								top: 0.5 * j.height - 0.5 * w.height() + "px",
								left: j.width / 2 + "px"
							})
						}
					},
					setTarget: function(j, k) {
						c.targetContainer = j;
						c.target = k;
						f.hasTransform3d && c.targetContainer.css(f.backfaceVisibility, "hidden");
						"" == c.targetContainer.css(f.transform) && c.targetContainer.transform(0, 0, 0);
						c.target.css("-webkit-transform-origin", "0 0").transform(0, 0, 0);
						e.bindTarget();
						return this
					},
					toggleZoom: function() {
						c.zoomIn ? e.zoomOut() : e.zoomIn();
						return this
					},
					zoomIn: function(j) {
						c.zoomIn || (c.zoomIn = !0, N = U = c.maxZoom, P.x = -(c.target[0].clientWidth / 2) * (N - 1), P.y = -(c.target[0].clientHeight / 2) * (N - 1), M(!0, "undefined" == typeof j || j ? 300 : 0));
						return this
					},
					zoomOut: function(j) {
						c.zoomIn && (c.zoomIn = !1, N = U = 1, P.x = 0, P.y = 0, M(!0, "undefined" == typeof j || j ? 500 : 0));
						return this
					}
				}
			};
		e.init(i, d);
		return e
	}
})(Merci);
(function(p, e) {
	var k = p.device,
		o = k.vendorSuffix,
		v = k.vendorSuffixDOM,
		n = window.document.createElement("div"),
		w = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		m = k.transform,
		z, t, i, f, a, x, c = {};
	c[z = o + "transition-property"] = c[t = o + "transition-duration"] = c[i = o + "transition-timing-function"] = c[f = o + "animation-name"] = c[a = o + "animation-duration"] = c[x = o + "animation-timing-function"] = "";
	p.fx = {
		off: v === e && n.style.transitionProperty === e,
		speeds: {
			_default: 400,
			fast: 200,
			slow: 600
		},
		cssPrefix: o,
		transitionEnd: k.transitionEnd,
		animationEnd: k.animationEnd
	};
	p.fn.animate = function(d, r, l, q) {
		p.isObject(r) && (l = r.easing, q = r.complete, r = r.duration);
		r && (r = ("number" == typeof r ? r : p.fx.speeds[r] || p.fx.speeds._default) / 1000);
		return this.anim(d, r, l, q)
	};
	p.fn.anim = function(A, y, u, r) {
		var B, C = {},
			D, q = "",
			j = this,
			s, d = p.fx.transitionEnd;
		y === e && (y = 0.4);
		p.fx.off && (y = 0);
		if ("string" == typeof A) {
			C[f] = A, C[a] = y + "s", C[x] = u || "linear", d = p.fx.animationEnd
		} else {
			D = [];
			for (B in A) {
				w.test(B) ? q += B + "(" + A[B] + ") " : (C[B] = A[B], D.push(B.toLowerCase(B.replace(/([a-z])([A-Z])/, "$1-$2"))))
			}
			q && (C[m] = q, D.push(m));
			0 < y && "object" === typeof A && (C[z] = D.join(", "), C[t] = y + "s", C[i] = u || "linear")
		}
		s = function(g) {
			if ("undefined" !== typeof g) {
				if (g.target !== g.currentTarget) {
					return
				}
				p(g.target).unbind(d, arguments.callee)
			}
			p(this).css(c);
			r && r.call(this)
		};
		0 < y && this.bind(d, s);
		this.size() && this.get(0).clientLeft;
		this.css(C);
		0 >= y && setTimeout(function() {
			j.each(function() {
				s.call(this)
			})
		}, 0);
		return this
	};
	n = null
})(Merci);
(function(k, j) {
	function c(d, p, o, m, n) {
		"function" == typeof p && !n && (n = p, p = j);
		o = {
			opacity: o
		};
		m && (o.scale = m, d.css(k.fx.cssPrefix + "transform-origin", "0 0"));
		return d.animate(o, p, null, n)
	}

	function i(d, l, m, h) {
		return c(d, l, 0, m, function() {
			f.call(k(this));
			h && h.call(this)
		})
	}
	var a = k.fn.show,
		f = k.fn.hide,
		e = k.fn.toggle;
	k.fn.show = function(h, b) {
		if (h === j) {
			return a.call(this)
		}
		this.css("opacity", 0);
		return c(this, h, 1, "1,1", b)
	};
	k.fn.hide = function(g, h) {
		return g === j ? f.call(this) : i(this, g, "0,0", h)
	};
	k.fn.toggle = function(d, h) {
		return d === j || "boolean" == typeof d ? e.call(this, d) : this.each(function() {
			var b = k(this);
			b["none" == b.css("display") ? "show" : "hide"](d, h)
		})
	};
	k.fn.fadeTo = function(h, m, l) {
		return c(this, h, m, null, l)
	};
	k.fn.fadeIn = function(m, l) {
		var b = this.css("opacity");
		0 < b ? this.css("opacity", 0) : b = 1;
		return a.call(this).fadeTo(m, b, l)
	};
	k.fn.fadeOut = function(g, h) {
		return i(this, g, null, h)
	};
	k.fn.fadeToggle = function(d, h) {
		return this.each(function() {
			var b = k(this);
			b[0 == b.css("opacity") || "none" == b.css("display") ? "fadeIn" : "fadeOut"](d, h)
		})
	}
})(Merci);
(function(d) {
	function q(b, g, h, k) {
		if (b.global) {
			return b = g || B, h = d.Event(h), d(b).trigger(h, k), !h.cdp
		}
	}

	function l(d, g, h) {
		var k = h.context;
		h.success.call(k, d, "success", g);
		q(h, k, "ajaxSuccess", [g, h, d]);
		b("success", g, h)
	}

	function g(d, g, h, k) {
		var j = k.context;
		k.error.call(j, h, g, d);
		q(k, j, "ajaxError", [h, k, d]);
		b(g, h, k)
	}

	function b(b, g, h) {
		var k = h.context;
		h.complete.call(k, g, b);
		q(h, k, "ajaxComplete", [g, h]);
		h.global && !--d.active && q(h, null, "ajaxStop")
	}

	function h() {}

	function u(b) {
		return b && (b == z ? "html" : b == H ? "json" : G.test(b) ? "script" : J.test(b) && "xml") || "text"
	}

	function j(b) {
		b.processData && A(b.data) && (b.data = d.param(b.data, b.traditional));
		if (b.data && (!b.type || "GET" == b.type.toUpperCase())) {
			b.url = (b.url + "&" + b.data).replace(/[&?]{1,2}/, "?")
		}
	}

	function s(b, g, h, k) {
		var j = d.isArray(g);
		d.each(g, function(f, g) {
			k && (f = h ? k : k + "[" + (j ? "" : f) + "]");
			!k && j ? b.add(g.name, g.value) : (h ? d.isArray(g) : A(g)) ? s(b, g, h, f) : b.add(f, g)
		})
	}
	var y = 0,
		A = d.isObject,
		B = window.document,
		r, F, C = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		G = /^(?:text|application)\/javascript/i,
		J = /^(?:text|application)\/xml/i,
		H = "application/json",
		z = "text/html",
		x = /^\s*$/;
	d.active = 0;
	d.ajaxJSONP = function(g) {
		if (!("type" in g)) {
			return d.ajax(g)
		}
		var m = "jsonp" + ++y,
			n = B.createElement("script"),
			k = {
				abort: function() {
					d(n).remove();
					m in window && (window[m] = h);
					b("abort", k, g)
				}
			},
			p;
		g.error && (n.onerror = function() {
			k.abort();
			g.error()
		});
		window[m] = function(b) {
			clearTimeout(p);
			d(n).remove();
			delete window[m];
			l(b, k, g)
		};
		j(g);
		n.src = g.url.replace(/=\?/, "=" + m);
		d("head").append(n);
		0 < g.timeout && (p = setTimeout(function() {
			k.abort();
			b("timeout", k, g)
		}, g.timeout));
		return k
	};
	d.ajaxSettings = {
		type: "GET",
		beforeSend: h,
		success: h,
		error: h,
		complete: h,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript",
			json: H,
			xml: "application/xml, text/xml",
			html: z,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0
	};
	d.ajax = function(b) {
		var m = d.extend({}, b || {});
		for (r in d.ajaxSettings) {
			void 0 === m[r] && (m[r] = d.ajaxSettings[r])
		}
		m.global && 0 === d.active++ && q(m, null, "ajaxStart");
		m.crossDomain || (m.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(m.url) && RegExp.$2 != window.location.host);
		var n = m.dataType;
		b = /=\?/.test(m.url);
		if ("jsonp" == n || b) {
			return b || (m.url = (m.url + "&callback=?").replace(/[&?]{1,2}/, "?")), d.ajaxJSONP(m)
		}
		m.url || (m.url = window.location.toString());
		j(m);
		b = m.accepts[n];
		var k = {},
			p = /^([\w-]+:)\/\//.test(m.url) ? RegExp.$1 : window.location.protocol,
			f = d.ajaxSettings.xhr(),
			s;
		m.crossDomain || (k["X-Requested-With"] = "XMLHttpRequest");
		b && (k.Accept = b, -1 < b.indexOf(",") && (b = b.split(",", 2)[0]), f.overrideMimeType && f.overrideMimeType(b));
		if (m.contentType || !1 !== m.contentType && m.data && "GET" != m.type.toUpperCase()) {
			k["Content-Type"] = m.contentType || "application/x-www-form-urlencoded"
		}
		m.headers = d.extend(k, m.headers || {});
		f.onreadystatechange = function() {
			if (4 == f.readyState) {
				f.onreadystatechange = h;
				clearTimeout(s);
				var b, k = !1;
				if (200 <= f.status && 300 > f.status || 304 == f.status || 0 == f.status && "file:" == p) {
					n = n || u(f.getResponseHeader("content-type"));
					b = f.responseText;
					try {
						"script" == n ? (0, eval)(b) : "xml" == n ? b = f.responseXML : "json" == n && (b = x.test(b) ? null : d.parseJSON(b))
					} catch (j) {
						k = j
					}
					k ? g(k, "parsererror", f, m) : l(b, f, m)
				} else {
					g(null, "error", f, m)
				}
			}
		};
		f.open(m.type, m.url, "async" in m ? m.async : !0);
		for (F in m.headers) {
			f.setRequestHeader(F, m.headers[F])
		}
		b = m.context;
		!1 === m.beforeSend.call(b, f, m) || !1 === q(m, b, "ajaxBeforeSend", [f, m]) ? b = !1 : (q(m, b, "ajaxSend", [f, m]), b = void 0);
		if (!1 === b) {
			return f.abort(), !1
		}
		0 < m.timeout && (s = setTimeout(function() {
			f.onreadystatechange = h;
			f.abort();
			g(null, "timeout", f, m)
		}, m.timeout));
		f.send(m.data ? m.data : null);
		return f
	};
	d.get = function(b, g) {
		return d.ajax({
			url: b,
			success: g
		})
	};
	d.post = function(b, g, h, k) {
		d.isFunction(g) && (k = k || h, h = g, g = null);
		return d.ajax({
			type: "POST",
			url: b,
			data: g,
			success: h,
			dataType: k
		})
	};
	d.getJSON = function(b, g) {
		return d.ajax({
			url: b,
			success: g,
			dataType: "json"
		})
	};
	d.fn.load = function(b, g) {
		if (!this.length) {
			return this
		}
		var h = this,
			k = b.split(/\s/),
			j;
		1 < k.length && (b = k[0], j = k[1]);
		d.get(b, function(b) {
			h.html(j ? d("<div>").html(b.replace(C, "")).find(j) : b);
			g && g.apply(h, arguments)
		});
		return this
	};
	var v = encodeURIComponent;
	d.param = function(b, d) {
		var g = [];
		g.add = function(b, d) {
			this.push(v(b) + "=" + v(d))
		};
		s(g, b, d);
		return g.join("&").replace(/%20/g, "+")
	}
})(Merci);
(function(a) {
	a.cookie = function(n, e, m) {
		var c = "",
			k = m.path ? "; path=" + m.path : "",
			i = m.domain ? "; domain=" + m.domain : "",
			f = m.secure ? "; secure" : "";
		if ("undefined" != typeof e) {
			m = m || {};
			null === e && (e = "", m.expires = -1);
			if (m.expires && ("number" == typeof m.expires || m.expires.toUTCString)) {
				"number" == typeof m.expires ? (c = new Date, c.setTime(c.getTime() + 86400000 * m.expires)) : c = m.expires, c = "; expires=" + c.toUTCString()
			}
			document.cookie = [n, "=", encodeURIComponent(e), c, k, i, f].join("")
		} else {
			if (document.cookie && "" != document.cookie) {
				e = document.cookie.split(";");
				m = e.length;
				for (k = 0; k < m; k++) {
					if (e[k].trim().substring(0, n.length + 1) == n + "=") {
						return decodeURIComponent(e[k].trim().substring(n.length + 1))
					}
				}
			}
		}
	}
})(Merci);