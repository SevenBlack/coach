(function(a) {
	if (Merci.plugins && Merci.plugins.carousel) {
		return console.log("carousel.js already loaded")
	}
	Merci.plugins.carousel = "1.1rc7";
	a.carousel = function(j) {
		var d, c, h, i = a.device,
			e = i.vendorSuffix;
		d = new function() {
			function k() {
				return {
					content: null,
					drawFunction: function() {},
					id: l.length,
					loaded: !1,
					view: null,
					visible: !1
				}
			}

			function g(b) {
				var m, f = l.length;
				for (m = 0; m < f; m++) {
					if (l[m].id == b) {
						return l[m]
					}
				}
				return null
			}
			var l = [];
			return {
				id: "carousel" + Math.floor(10 * Math.random() + 1),
				amount: 0,
				animate: !0,
				animationSpeed: 1000,
				autoStepDelay: 3000,
				batchSize: 3,
				loop: !1,
				currentIndex: 0,
				busy: !1,
				boundaryCallback: function() {},
				callback: function() {},
				redrawFunction: function() {},
				jump: !1,
				lastVisitedIndex: 0,
				loadedPanels: 0,
				lazyLoading: !0,
				loadingTimer: null,
				mode3D: null,
				offset: {
					position: 0,
					x: 0,
					y: 0
				},
				orientation: "horizontal",
				move: !1,
				moving: !1,
				panels: l,
				sliding: !1,
				slideMode: null,
				visibleBatchSize: 1,
				zoom: null,
				addPanel: function(m) {
					var f = new k;
					a.extend(f, m);
					l.push(f)
				},
				finalize: function() {
					l = []
				},
				editPanel: function(n, m) {
					var o, f = l.length;
					for (o = 0; o < f; o++) {
						if (o == n) {
							return f = new k, a.extend(f, m), l[o] = f
						}
					}
					return !1
				},
				getPanel: function(b) {
					return g(b)
				},
				removePanel: function(b) {
					return (b = g(b)) ? l.splice(b.id, 1) : !1
				}
			}
		};
		c = new function() {
			function f() {
				i.hasTransform3d || (d.mode3D = null);
				"cube" == d.orientation && (d.visibleBatchSize = 1, d.slideMode && (d.slideMode = "swipe"));
				i.isAndroid2 && (d.slideMode = "swipe");
				1 == d.visibleBatchSize && "drag" != d.slideMode && (d.jump = !0);
				d.mode3D ? (d.slideMode = "swipe", d.loop = !0) : d.jump && (d.visibleBatchSize = 1)
			}

			function g(k) {
				var m, l;
				if (!d.busy && !d.loadingTimer) {
					f();
					d.loop || (0 > k ? (d.boundaryCallback.call(this, k, !1), d.moving && c.stop(), k = 0) : k > d.panels.length - d.visibleBatchSize && (d.boundaryCallback.call(this, k, !0), d.moving && c.stop(), k = Math.max(0, d.panels.length - d.visibleBatchSize)));
					d.loop && (0 == d.currentIndex && k == d.panels.length - 1 && (d.amount = -1), d.currentIndex == d.panels.length - 1 && 0 == k && (d.amount = 1));
					if (d.loadingTimer || d.busy) {
						return c
					}
					m = d.panels.length;
					return (l = d.getPanel((k + d.visibleBatchSize * m) % m)) ? (l = k > d.currentIndex ? 1 : -1, d.amount = Math.abs(k - d.currentIndex) * l, d.lastVisitedIndex = d.currentIndex % m, d.currentIndex = (k + d.visibleBatchSize * m) % m, d.busy = !0, d.mode3D && (-1 > d.amount ? d.amount = -1 : 1 < d.amount && (d.amount = 1)), d.loop && (1 < d.visibleBatchSize && d.visibleBatchSize <= d.panels.length ? (0 == d.lastVisitedIndex && k == d.panels.length - 1 && (d.amount = -1), d.lastVisitedIndex == d.panels.length - 1 && 0 == k && (d.amount = 1)) : (0 == d.currentIndex && k == d.panels.length - 1 && (d.amount = -1), d.currentIndex == d.panels.length - 1 && 0 == k && (d.amount = 1))), h.goToPanel(), c) : !1
				}
			}
			var b;
			return {
				addPanel: function(k) {
					d.addPanel("string" == typeof k || k.map ? {
						content: k
					} : k);
					return this
				},
				bind: function() {
					h.bind();
					return this
				},
				callRedrawFunction: function() {
					d.redrawFunction.call(this, i.screen(), d.getPanel(d.currentIndex))
				},
				draw: function(m) {
					var l;
					h.init(m);
					h.initPaginator();
					h.bind();
					!c.zoomController && d.zoom && "overlay" == d.zoom.zoomMode && (m = d.zoom.overlay, c.zoomOverlayPanel = d.zoom.panel, l = m.find("[data-carousel-zoom-target=" + d.id + "]"), m.find("[data-carousel-overlay-close=" + d.id + "]").bind(i.endEvent, function() {
						c.zoomOverlayPanel.hidePanel(function() {
							l.html("")
						});
						c.zoomController = null
					}), a("[data-carousel-zoomIcon=" + d.id + "]").show().bind(i.endEvent, function() {
						var k = d.panels[d.currentIndex].view.find("img")[0].cloneNode();
						l.html(k);
						d.zoom.targetContainer = l;
						d.zoom.target = l.find("img").eq(0).css("width", "100%");
						c.zoomController = new a.zoom(d.zoom);
						setTimeout(function() {
							c.zoomOverlayPanel.showPanel()
						}, 1)
					}));
					c.callRedrawFunction();
					d.move && (d.moving = !0);
					g(d.currentIndex);
					return this
				},
				editPanel: function(k, m, l) {
					d.editPanel(k, m) && (h.drawPanelView(d.getPanel(k), k), l && h.editThumbnail(k, l), h.initPaginator(), h.selectPaginate());
					return this
				},
				finalize: function() {
					d.finalize();
					c.unbind();
					h.finalize()
				},
				goToNextPanel: function() {
					return g(d.currentIndex + 1)
				},
				goToPreviousPanel: function() {
					return g(d.currentIndex - 1)
				},
				goToPanel: g,
				hideLoading: function() {
					h.hideLoading()
				},
				init: function(k) {
					a.extend(d, k);
					f()
				},
				isFirst: function() {
					return d.loop && 0 == d.currentIndex
				},
				isLast: function() {
					return !d.loop && d.currentIndex == d.panels.length - 1
				},
				redraw: function(l, k, n, m) {
					h.redraw(l, k, n, m)
				},
				removePanel: function(k) {
					d.getPanel(k) && (h.destroyPanelView(k), d.removePanel(k))
				},
				selectedIndex: function() {
					return d.currentIndex
				},
				setCallback: function(k) {
					d.callback = k;
					return this
				},
				setBusy: function(k) {
					d.busy = k
				},
				setBoundaryCallback: function(k) {
					d.boundaryCallback = k;
					return this
				},
				setRedrawFunction: function(k) {
					d.redrawFunction = k;
					return this
				},
				showLoading: function() {
					h.showLoading()
				},
				start: function() {
					d.moving = !0;
					b || (b = setInterval(this.goToNextPanel, d.autoStepDelay + d.animationSpeed));
					h.playPauseHide()
				},
				stop: function() {
					d.moving = !1;
					b && clearInterval(b);
					b = null;
					h.playPauseShow()
				},
				toggle: function() {
					d.moving ? c.stop() : c.start()
				},
				unbind: function() {
					h.unbind();
					return this
				},
				updateConfig: function(k) {
					a.extend(d, k);
					f();
					c.unbind();
					c.bind();
					return this
				},
				updatePaginationControls: function() {
					h.initPaginator();
					h.selectPaginate();
					return this
				},
				zoomOverlayPanel: null,
				zoomController: null
			}
		};
		c.init(j);
		h = new function() {
			function k(l) {
				var n = l.view.find("img"),
					q = setInterval(function() {
						var r = 0;
						n.each(function() {
							this.complete && r++
						});
						r >= n.length && (d.getPanel(l.id).loaded = l.loaded = !0, aq++, l.drawFunction.call(this, l), clearInterval(q), q = null)
					}, 10)
			}

			function ao(q, z) {
				var A = (d.sliding ? d.currentIndex : d.lastVisitedIndex) - d.offset.position,
					w = d.sliding ? A - d.visibleBatchSize : A,
					y = (d.sliding ? d.visibleBatchSize : "") + d.offset.position,
					x = (d.sliding ? 3 * d.visibleBatchSize : d.visibleBatchSize) + Math.abs(d.amount),
					B, u, v, r, s;
				if (!d.loadingTimer) {
					aq = aw = 0;
					d.loop || (w = Math.max(Math.max(0, w - A), w), d.sliding && (x = Math.min(2 * d.visibleBatchSize + Math.abs(d.amount) + y, Math.max(d.visibleBatchSize, y + (d.panels.length - y - w) + Math.abs(d.amount))), y = Math.min(d.visibleBatchSize, A)));
					0 > d.amount && (w += d.amount);
					if (z) {
						B = -d.offset.position;
						u = B + d.visibleBatchSize;
						for (s = 0; s < av.length; s++) {
							if (v = av[s]) {
								if (A = v.offset, v.view && (A < B || A > u)) {
									v.view.remove(), av.splice(s, 1), s--
								}
							} else {
								av.splice(s, 1), s--
							}
						}
					}
					for (s = 0; s < x; s++) {
						B = (w + s + d.visibleBatchSize * d.panels.length) % d.panels.length;
						A = s - y + (0 > d.amount ? d.amount : 0);
						v = d.panels[B];
						u = null;
						for (r = 0; r < av.length; r++) {
							if (av[r].id == v.id && av[r].offset == A) {
								u = av[r];
								break
							}
						}
						u ? (az[s] = u, v.loaded && aq++, z && u.drawFunction.call(this, u), az[s].offset = A, 0 == A && (an = az[s])) : v && (B = h.drawPanelView(v, B), ar[0].appendChild(B[0]), B = {}, a.extend(B, v), B.offset = A, v.loaded && aq++, B.drawFunction.call(this, B), 0 == A && (an = B), az.splice(s, 0, B))
					}
					aq < x && h.showLoading();
					aq = 0;
					if (d.lazyLoading) {
						for (s = 0; s < az.length; s++) {
							az[s].loaded ? aq++ : k(az[s])
						}
					} else {
						x = d.panels.length;
						for (s = 0; s < d.panels.length; s++) {
							d.panels[s].view = h.drawPanelView(v, v.id), d.panels[s].loaded ? aq++ : k(d.panels[s])
						}
					}
					d.loadingTimer = setInterval(function() {
						aq >= x && (ad = !0, ac || c.callRedrawFunction(), h.alignPanels(!0), d.move && d.moving && c.start(), h.hideLoading(), q && q.call(this), clearInterval(d.loadingTimer), d.loadingTimer = null)
					}, 10)
				}
			}

			function ap() {
				var l, n;
				for (l = 0; l < az.length; l++) {
					n = az[l], n.offset -= d.amount, 0 == n.offset && (an = n)
				}
			}

			function aC(l) {
				ac && (d.lastVisitedIndex = d.currentIndex, d.redrawFunction.call(this, l, d.getPanel(d.currentIndex)), ao(at, !0))
			}

			function g() {
				d.amount = 0;
				d.busy = !1;
				ad = d.sliding = !1;
				aw = 0
			}

			function ae(n) {
				var l;
				d.zoom && "overlay" != d.zoom.zoomMode && (n = n.view, n = n.find("img").eq(0), l = n.parent(), c.zoomController ? (c.zoomController.zoomOut(!i.isAndroid).unbindTarget().setTarget(l, n), c.zoomController.overlayTransition()) : (d.zoom.targetContainer = l, d.zoom.target = n, c.zoomController = new a.zoom(d.zoom)))
			}

			function at() {
				setTimeout(function(l) {
					ac = !0;
					l = -d.offset.position;
					var q = l + d.visibleBatchSize,
						s, n, r;
					ar.children().css(i.transition, "none");
					for (n = 0; n < az.length; n++) {
						if (s = az[n], r = s.offset, s.view && (r < l || r > q)) {
							s.view.remove(), az.splice(n, 1), n--
						}
					}
					av = az;
					l = (d.currentIndex + d.visibleBatchSize * d.panels.length) % d.panels.length;
					d.callback(l, d.getPanel(l));
					g()
				}, 0)
			}

			function ab(l) {
				d.animate && an && l ? (l = aw && d.sliding ? Math.max(100, (Math.abs(Math.abs(aB * d.amount) - Math.abs(aw)) / aB * d.animationSpeed).toFixed(2)) : d.animationSpeed, aw = 0, ar.children().css(i.transition, "all " + l / 1000 + "s ease-out"), setTimeout(at, l), h.alignPanels(!1)) : (aw = 0, h.alignPanels(!1), at())
			}
			var aA, ar, au = null,
				ag = null,
				ai = null,
				aa = 0,
				aB, ax, af = 0,
				f = 0,
				b = 0,
				az = [],
				av = [],
				aq = 0,
				aw = 0,
				Z = null,
				am = null,
				al = null,
				ak = null,
				t = null,
				p = null,
				aj = null,
				o = null,
				m = null,
				ah = null,
				ac = !1,
				ad = !1,
				an = null,
				ay;
			g();
			return {
				alignPanels: function(z) {
					var w, y, s, x, v, u, q, l = az.length;
					if ("cube" == d.orientation && !z) {
						af -= 90 * d.amount, ar.one(i.transitionEnd, function() {
							at()
						}).css(i.transition, "all " + d.animationSpeed / 1000 + "s ease-out")[0].style[i.transformDOM] = "translateZ( -100px ) rotateY( " + af + "deg )"
					} else {
						for (q = 0; q < l; q++) {
							x = az[q];
							s = x.offset;
							w = f + d.offset.x;
							y = b + d.offset.y;
							u = v = 0;
							d.mode3D ? (v = 2000 * -Math.abs(s) * (d.mode3D.scale / parseInt(d.visibleBatchSize / 2)), "horizontal" == d.orientation ? w += parseInt(aB * s * d.mode3D.offset) : "vertical" == d.orientation && (y += parseInt(ax * s * d.mode3D.offset + aw)), x.view[0].style.opacity = 1 < Math.abs(s) / parseInt(d.visibleBatchSize / 2) ? 0 : 1) : "horizontal" == d.orientation ? (w += aB * s + aw, d.sliding && (w < -aB && (w = -aB), w > aB * d.visibleBatchSize && (w = aB * d.visibleBatchSize)), x.view[0].style.opacity = 1) : "vertical" == d.orientation ? (y += ax * s + aw, d.sliding && (y < -ax && (y = -ax), y > ax * d.visibleBatchSize && (y = ax * d.visibleBatchSize))) : "cube" == d.orientation && (w = [{
								x: 0,
								y: -50,
								z: aB / 2,
								rotateY: 0
							}, {
								x: -aB / 2,
								y: -50,
								z: aB,
								rotateY: 90
							}, {
								x: 0,
								y: -50,
								z: aB / 2,
								rotateY: 180
							}, {
								x: -aB / 2,
								y: -50,
								z: 0,
								rotateY: -90
							}], y = (Math.abs(parseInt(af / 90)) + s + 4) % 4, s = w[y], 0 != y % 2 && x.view.css(e + "transform-origin", "0 50%"), w = s.x, y = s.y, v = s.z, u = s.rotateY);
							z && (x.view[0].style[i.transitionDOM] = "none");
							if (x.offsetX != w || x.offsetY != y) {
								x.offsetX = w, x.offsetY = y, x.view.transform(w, y, v, null, null, u)
							}
							x.view[0].style.visibility = "visible"
						}
					}
				},
				bind: function() {
					var n, l, q;
					aA.tap(function() {
						d.moving && c.stop()
					});
					d.slideMode && ("drag" == d.slideMode ? aA.drag(function() {
						d.loadingTimer || d.busy || c.zoomController && c.zoomController.isZoomed() ? d.sliding = !1 : (d.sliding = !0, d.lastVisitedIndex = d.currentIndex % d.panels.length, d.currentIndex = d.lastVisitedIndex, ao())
					}, function(r, s) {
						if ("horizontal" == d.orientation) {
							if (s.horizontal) {
								a.preventDefault(r)
							} else {
								if (s.vertical) {
									return
								}
							}
						} else {
							if ("vertical" == d.orientation) {
								if (s.vertical) {
									a.preventDefault(r)
								} else {
									if (s.horizontal) {
										return
									}
								}
							}
						}
						if ((!c.zoomController || !c.zoomController.isZoomed()) && d.sliding) {
							d.moving && c.stop(), c.zoomController && c.zoomController.overlayTransition(), ad && (aw = "horizontal" == d.orientation ? s.deltaX : s.deltaY, h.alignPanels())
						}
					}, function(u, s) {
						var r;
						if (!d.loadingTimer && !d.busy && (!c.zoomController || !c.zoomController.isZoomed()) && d.sliding) {
							d.moving ? c.stop() : 250 > s.time && 30 < Math.abs(s.deltaX) ? c.goToPanel(d.currentIndex + (0 < s.deltaX ? -1 : 1)) : ("horizontal" == d.orientation ? 60 < Math.abs(aw) : "vertical" == d.orientation && 75 < Math.abs(aw)) ? (r = Math.round(Math.abs(aw) / ("horizontal" == d.orientation ? aB : ax)), 0 < aw ? c.goToPanel(d.currentIndex + -1 * r) : 0 > aw && c.goToPanel(d.currentIndex + r)) : ab(s.moved)
						}
						d.sliding = !1
					}, {
						horizontal: "horizontal" == d.orientation,
						vertical: "vertical" == d.orientation
					}) : "swipe" == d.slideMode && (n = "vertical" == d.orientation ? "swipeUp" : "swipeLeft", l = "vertical" == d.orientation ? "swipeDown" : "swipeRight", q = function(r) {
						d.busy || c.zoomController && c.zoomController.isZoomed() || (d.moving && c.stop(), c.goToPanel(r))
					}, i.isIE10 && ("vertical" == d.orientation ? aA.css("-ms-touch-action", "pan-x") : "horizontal" == d.orientation && aA.css("-ms-touch-action", "pan-y"), aA.children().bind(i.startEvent, function(r) {
						a.preventDefault(r);
						a(this).bind("click", function() {
							return !1
						})
					}).bind(i.endEvent, function(r) {
						setTimeout(function() {
							if (!d.busy) {
								for (var x, w = i.hasTouch ? r.touches[0] : r, v = w.target, u, s = window.location; v != aA[0] && !(v = v.parentNode, x = a(v).attr("href"), u = a(v).attr("onclick"), x || u);) {}
								x ? (x = -1 != x.indexOf(s.host) ? x : s.protocol + "//" + s.host + x, window.location = x) : u && (x = document.createEvent("MouseEvents"), x.initMouseEvent("click", !0, !0, r.view, 1, w.screenX, w.screenY, w.clientX, w.clientY, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, 0, null), x._fake = !0, v.dispatchEvent(x))
							}
						}, 150)
					})), aA.bind(n, function() {
						q(d.currentIndex + 1)
					}).bind(l, function() {
						q(d.currentIndex - 1)
					})));
					a(window).bind("viewportchange", aC)
				},
				destroyPanelView: function(n) {
					var l, q;
					for (l = 0; l < av.length; l++) {
						q = av[l], q.id == n && q.view && (q.view.remove(), av.splice(l, 1), l--)
					}
					ah && (ah.eq(n).remove(), ay.thumbs.splice(n, 1))
				},
				drawPanelView: function(l, n) {
					l = d.getPanel(n);
					var q = document.createElement("div");
					q.innerHTML = l.content;
					q.style.visibility = "hidden";
					q.className = "foxy_panel";
					aB && (q.style.width = aB + "px");
					ax && (q.style.height = ax + "px");
					d.animate && (q.style.position = "absolute", a(q).css("float", "left").css(i.transformStyle, "preserve-3d").css(i.backfaceVisibility, "hidden").transform(0, 0, 0));
					return l.view = a(q)
				},
				editThumbnail: function(n, l) {
					ay.thumbs[n] = l
				},
				finalize: function() {
					ar.empty();
					ak.empty();
					aj.empty()
				},
				goToPanel: function() {
					h.selectPaginate();
					d.sliding ? (ap(), ae(an), ab(!0)) : ao(function() {
						d.amount ? (ap(), ae(an), setTimeout(function() {
							ab(!0)
						}, 1)) : (ae(an), at())
					})
				},
				hideLoading: function() {
					aa = 0;
					au[0] && (au[0].style.display = "none");
					ai && clearInterval(ai);
					ai = null
				},
				init: function(l) {
					ay = l;
					d.id = ay.id;
					aA = a("#" + ay.id);
					ar = aA.children(".foxy_belt");
					ak = a("[data-carousel-bullets=" + ay.id + "]");
					aj = a("[data-carousel-thumbs=" + ay.id + "]");
					au = a("[data-carousel-loading=" + ay.id + "]");
					ag = au.find("img[data-rotate]");
					az = [];
					"cube" != d.orientation && aA.css({
						overflow: "hidden",
						position: "relative"
					});
					a("#" + d.id + " *").css(e + "touch-callout", "none").css(e + "user-drag", "none").css(e + "user-select", "none").css(e + "tap-highligh-color", "transparent");
					ar.css(i.transformStyle, "preserve-3d").css(i.backfaceVisibility, "hidden").transform(0, 0, 0)
				},
				initPaginator: function() {
					function l(s) {
						var r = parseInt(a(s.target).attr("data-moveto"));
						a.preventDefault(s);
						s.stopPropagation();
						d.moving && (d.busy = !1, c.stop());
						Math.abs(d.currentIndex - r) > d.visibleBatchSize && (r = d.currentIndex + (r > d.currentIndex ? 1 : -1));
						c.goToPanel(r)
					}
					var n;
					if (ak && (ak.empty(), n = d.loop ? d.panels.length : d.panels.length - d.visibleBatchSize + 1, 1 < n)) {
						for (var q = 0; q < n; q++) {
							ak.append('<img data-src="' + ay.bullet + '" data-moveto="' + q + '" data-select="' + ay.selectedBullet + '"/>').bind(i.endEvent, l)
						}
						Z = ak.find("img")
					}
					t = a("[data-carousel-number-indicator=" + d.id + "]");
					p = a("[data-carousel-number-total=" + d.id + "]");
					(am = a("[data-carousel-prev=" + d.id + "]")) && am.bind(i.endEvent, function(r) {
						a.preventDefault(r);
						r.stopPropagation();
						d.moving && (d.busy = !1, c.stop());
						c.goToPanel(d.currentIndex - 1)
					}).data("src", am.attr("src"));
					(al = a("[data-carousel-next=" + d.id + "]")) && al.bind(i.endEvent, function(r) {
						a.preventDefault(r);
						r.stopPropagation();
						d.moving && (d.busy = !1, c.stop());
						c.goToPanel(d.currentIndex + 1)
					}).data("src", al.attr("src"));
					o = a("[data-carousel-play=" + d.id + "]").bind("click", c.toggle);
					m = a("[data-carousel-pause=" + d.id + "]").hide().bind("click", c.toggle);
					if (aj && (aj.empty(), ay.thumbs)) {
						for (q = 0; q < ay.thumbs.length; q++) {
							aj.append('<img class="meThumb" data-src="' + ay.thumbsBaseUrl + ay.thumbs[q] + '" data-moveto="' + q + '" data-select="' + ay.thumbsBaseUrl + ay.thumbs[q] + '"/>').bind(i.endEvent, l)
						}
						ah = aj.find("img")
					}
				},
				playPauseHide: function() {
					o.hide();
					m.show()
				},
				playPauseShow: function() {
					o.show();
					m.hide()
				},
				redraw: function(l, q, r, n) {
					aB = l ? parseInt(l) : aB;
					ax = q ? parseInt(q) : ax;
					l = r ? r : "horizontal" == d.orientation ? aB * d.visibleBatchSize : aB;
					n = n ? n : "vertical" == d.orientation ? ax * d.visibleBatchSize : ax;
					q = ar.children();
					f = d.offset.position ? parseInt((l - aB) / 2) : 0;
					b = d.offset.position ? parseInt((n - ax) / 2) : 0;
					d.mode3D && i.hasTransform3d && (aA.css(e + "perspective", 2000), ar.css(e + "transform-style", "preserve-3d"));
					"cube" == d.orientation ? (aA.css({
						position: "relative",
						margin: "0  auto 40px",
						width: aB,
						height: ax + "px"
					}).css(e + "perspective", 1000), ar.css({
						position: "absolute",
						width: "100%",
						height: "100%"
					}).css(e + "transform-style", "preserve-3d").transform(null, null, -100)) : aA.css({
						width: l + "px",
						height: n + "px"
					});
					q.css(i.transition, "none").css({
						width: aB + "px",
						height: ax + "px"
					});
					for (n = 0; n < az.length; n++) {
						l = az[n], l.view && l.loaded && l.drawFunction.call(this, l)
					}
				},
				selectPaginate: function(l) {
					function n() {
						var r = a(this);
						r.attr("data-moveto") == q ? r.addClass("thumbSelected").attr("src", r.attr("data-select")) : r.removeClass("thumbSelected").attr("src", r.attr("data-src"))
					}
					var q = l ? l : d.currentIndex;
					Z && Z.each(n);
					ah && ah.each(n);
					t && p && (t.html(d.currentIndex + 1), p.html(d.panels.length));
					am && am.attr("src", 0 == d.currentIndex && !d.loop ? am.data("disabled") : am.data("src"));
					al && al.attr("src", d.currentIndex == d.panels.length - d.visibleBatchSize && !d.loop ? al.data("disabled") : al.data("src"))
				},
				showLoading: function() {
					if (ag) {
						if (!ai) {
							var n, l = "yes" == ag.data("rotate");
							au[0] && (ai = setInterval(function() {
								n = aA.offset();
								l && ag.transform(null, null, null, null, null, null, aa += 30);
								au[0].style.top = n.height / 2 - au.height() / 2 + "px";
								au[0].style.display = "block"
							}, 75))
						}
					} else {
						au && au.show().css("top", aA.offset().height / 2 - au.height() / 2 + "px")
					}
				},
				unbind: function() {
					aA.unbind(i.startEvent).unbind(i.moveEvent).unbind(i.endEvent).unbind("tap").unbind(i.doubleEvent).unbind("swipeLeft").unbind("swipeRight").unbind("swipeUp").unbind("swipeDown");
					a(window).unbind("viewportchange", aC)
				}
			}
		};
		return c
	}
})(Merci);