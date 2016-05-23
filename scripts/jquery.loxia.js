(function(a) {
	if (typeof this["loxia"] === "undefined") {
		var b = this;
		this.loxia = {
			global: b,
			windowFeatures: "toolbar=no, menubar=no,scrollbars=yes, resizable=no,location=no, status=no",
			isString: function(c) {
				return typeof c === "string" || c instanceof String
			},
			formatNumber: function(f) {
				f = f + "";
				var c = f.split(".");
				var e = c[0],
					d = c.length > 1 ? "." + c[1] : "";
				e = e.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
				return e + d
			},
			getViewport: function() {
				var c, d;
				if (typeof window.innerWidth != "undefined") {
					c = window.innerWidth, d = window.innerHeight
				} else {
					if (typeof document.documentElement != "undefined" && typeof document.documentElement.clientWidth != "undefined" && document.documentElement.clientWidth != 0) {
						c = document.documentElement.clientWidth, d = document.documentElement.clientHeight
					} else {
						c = document.getElementsByTagName("body")[0].clientWidth, d = document.getElementsByTagName("body")[0].clientHeight
					}
				}
				return {
					width: c,
					height: d
				}
			},
			center: function(c, e) {
				var j = {},
					h = 0,
					g = 0,
					i = 0,
					f = 0;
				if (e) {
					j.width = a(e).width();
					j.height = a(e).height()
				} else {
					j = this.getViewport();
					i = a("html").scrollLeft();
					f = a("html").scrollTop()
				}
				if (e) {
					g = a(e).offset().left;
					h = a(e).offset().top
				}
				a(c).css({
					position: "absolute",
					left: (i + g + (j.width - a(c).width()) / 2) + "px",
					top: (f + h + (j.height - a(c).height()) / 2) + "px"
				})
			},
			encodeUrl: function(f, d) {
				var e = f.indexOf("?");
				if (e === -1) {
					if (d === undefined || d) {
						return this.getTimeUrl(f)
					} else {
						return f
					}
				}
				var c = f.substring(0, e + 1),
					j = f.substring(e + 1).split("&");
				for (var g = 0; g < j.length; g++) {
					if (g > 0) {
						c += "&"
					}
					var h = j[g].split("=");
					c += h[0] + "=" + encodeURIComponent(h[1])
				}
				if (d === undefined || d) {
					c = this.getTimeUrl(c)
				}
				return c
			},
			getTimeUrl: function(c) {
				var d = (new Date()).getTime();
				if (c.indexOf("loxiaflag=") >= 0) {
					c = c.replace(/loxiaflag=\d{13}/, "loxiaflag=" + d.toString());
					return c
				}
				c += (/\?/.test(c)) ? "&" : "?";
				return (c + "loxiaflag=" + d.toString())
			},
			getObject: function(f, e) {
				e = e || b;
				var g = f.split(".");
				for (var d = 0, c; e && (c = g[d]); d++) {
					e = (c in e ? e[c] : undefined)
				}
				return e
			},
			setObject: function(g, f, e) {
				e = e || b;
				var j = g.split(".");
				var h = j.pop();
				for (var d = 0, c; e && (c = j[d]); d++) {
					e = (c in e ? e[c] : e[c] = {})
				}
				return (e && h ? (e[h] = f) : undefined)
			},
			hitch: function(c, d) {
				if (!d) {
					d = c;
					c = null
				}
				if (this.isString(d)) {
					c = c || b;
					if (!c[d]) {
						throw (['hitch: scope["', d, '"] is null (scope="', c, '")'].join(""))
					}
					return function() {
						return c[d].apply(c, arguments || [])
					}
				}
				return !c ? d : function() {
					return d.apply(c, arguments || [])
				}
			},
			_ajaxSetValue: function(e, c, d) {
				if (d === null) {
					return
				}
				var f = e[c];
				if (this.isString(f)) {
					e[c] = [f, d]
				} else {
					if (a.isArray(f)) {
						e[c].push(d)
					} else {
						e[c] = d
					}
				}
			},
			_ajaxFieldValue: function(e) {
				var c = null,
					d = (e.type || "").toLowerCase();
				if (e.name && d && !e.disabled) {
					if (d === "radio" || d === "checkbox") {
						if (e.checked) {
							c = e.value
						}
					} else {
						if (e.multiple) {
							c = [];
							a("option", e).each(function() {
								if (this.selected) {
									c.push(this.value)
								}
							})
						} else {
							c = e.value
						}
					}
				}
				return c
			},
			_ajaxFormToObj: function(e) {
				if (!e) {
					return {}
				}
				e = this.isString(e) ? a("#" + e).get(0) : e;
				var d = {},
					f = this,
					c = "file|submit|image|reset|button|";
				a.each(e.elements, function(h, k) {
					var g = k.name,
						j = (k.type || "").toLowerCase();
					if (g && j && c.indexOf(j) === -1 && !k.disabled) {
						f._ajaxSetValue(d, g, f._ajaxFieldValue(k))
					}
				});
				return d
			},
			_ajaxOptions: function(e, f, d) {
				var c = {};
				if (arguments.length === 1) {
					c = e
				} else {
					c = d || {};
					c.url = e;
					if (f) {
						if (this.isString(f)) {
							a.extend(c, {
								data: this._ajaxFormToObj(f)
							})
						} else {
							a.extend(c, {
								data: f
							})
						}
					}
				}
				return c
			},
			asyncXhr: function(d, e, c) {
				a.ajax(this._ajaxOptions(d, e, c))
			},
			asyncXhrGet: function(e, f, d) {
				var c = this._ajaxOptions(e, f, d);
				c.type = "GET";
				a.ajax(c)
			},
			asyncXhrPost: function(e, f, d) {
				var c = this._ajaxOptions(e, f, d);
				c.type = "POST";
				a.ajax(c)
			},
			syncXhr: function(e, g, d) {
				var f, c = this._ajaxOptions(e, g, d);
				a.extend(c, {
					async: false,
					success: function(h, i) {
						f = h
					},
					error: function(i, k, j) {
						f = {};
						var h = {};
						h.message = "Error occurs when fetching data from url:" + this.url;
						h.cause = k ? k : j;
						f.exception = h
					}
				});
				a.ajax(c);
				return f
			},
			syncXhrGet: function(d, e, c) {
				if (arguments.length === 1) {
					d.type = "GET"
				} else {
					c = a.extend({}, c, {
						type: "GET"
					})
				}
				return this.syncXhr(d, e, c)
			},
			syncXhrPost: function(d, e, c) {
				if (arguments.length === 1) {
					d.type = "POST"
				} else {
					c = a.extend({}, c, {
						type: "POST"
					})
				}
				return this.syncXhr(d, e, c)
			},
			openPage: function(c, f, e, d) {
				f = f || "_blank";
				e = e || this.windowFeatures;
				if (d && d.length && d.length === 2) {
					e = "width=" + d[0] + ",height=" + d[1] + "," + e
				}
				return window.open(this.encodeUrl(c), f, e)
			},
			fixPng: function(f, d) {
				var e = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 5.5") != -1);
				var c = (navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) == 4 && navigator.appVersion.indexOf("MSIE 6.0") != -1);
				if (!a.browser.msie || !(e || c)) {
					return
				}
				f = f || document;
				d = d || a(document.body).attr("root");
				a(f).find("img[src$=.png]").each(function() {
					a(this).attr("width", a(this).width());
					a(this).attr("height", a(this).height());
					var n = "";
					var i = "";
					var h = (a(this).attr("id")) ? ' id="' + a(this).attr("id") + '" ' : "";
					var o = (a(this).attr("class")) ? ' class="' + a(this).attr("class") + '" ' : "";
					var k = (a(this).attr("title")) ? ' title="' + a(this).attr("title") + '" ' : "";
					var l = (a(this).attr("alt")) ? ' alt="' + a(this).attr("alt") + '" ' : "";
					var j = (a(this).attr("align")) ? "float:" + a(this).attr("align") + ";" : "";
					var g = (a(this).parent().attr("href")) ? "cursor:hand;" : "";
					if (this.style.border) {
						n += "border:" + this.style.border + ";";
						this.style.border = ""
					}
					if (this.style.padding) {
						n += "padding:" + this.style.padding + ";";
						this.style.padding = ""
					}
					if (this.style.margin) {
						n += "margin:" + this.style.margin + ";";
						this.style.margin = ""
					}
					var m = (this.style.cssText);
					i += '<img src="' + domain_image + '/images/transparent.gif"';
					if (h) {
						i += h
					}
					if (o) {
						i += o
					}
					if (k) {
						i += k
					}
					if (l) {
						i += l
					}
					i += ' style="background:transparent;' + j + g;
					i += "width:" + a(this).width() + "px;height:" + a(this).height() + "px;";
					i += "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + a(this).attr("src") + "', sizingMethod='scale');";
					i += m + '" />';
					a(this).after(i);
					a(this).remove()
				})
			}
		}
	}
})(jQuery);