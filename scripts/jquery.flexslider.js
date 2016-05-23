(function(a) {
	a.flexslider = function(d, n) {
		var b = a(d),
			l = a.extend({}, a.flexslider.defaults, n),
			g = l.namespace,
			i = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch,
			c = (i) ? "touchend" : "click",
			h = l.direction === "vertical",
			j = l.reverse,
			m = (l.itemWidth > 0),
			f = l.animation === "fade",
			k = l.asNavFor !== "",
			e = {};
		a.data(d, "flexslider", b);
		e = {
			init: function() {
				b.animating = false;
				b.currentSlide = l.startAt;
				b.animatingTo = b.currentSlide;
				b.atEnd = (b.currentSlide === 0 || b.currentSlide === b.last);
				b.containerSelector = l.selector.substr(0, l.selector.search(" "));
				b.slides = a(l.selector, b);
				b.container = a(b.containerSelector, b);
				b.count = b.slides.length;
				b.syncExists = a(l.sync).length > 0;
				if (l.animation === "slide") {
					l.animation = "swing"
				}
				b.prop = (h) ? "top" : "marginLeft";
				b.args = {};
				b.manualPause = false;
				b.transitions = !l.video && !f && l.useCSS && (function() {
					var q = document.createElement("div"),
						p = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for (var o in p) {
						if (q.style[p[o]] !== undefined) {
							b.pfx = p[o].replace("Perspective", "").toLowerCase();
							b.prop = "-" + b.pfx + "-transform";
							return true
						}
					}
					return false
				}());
				if (l.controlsContainer !== "") {
					b.controlsContainer = a(l.controlsContainer).length > 0 && a(l.controlsContainer)
				}
				if (l.manualControls !== "") {
					b.manualControls = a(l.manualControls).length > 0 && a(l.manualControls)
				}
				if (l.randomize) {
					b.slides.sort(function() {
						return (Math.round(Math.random()) - 0.5)
					});
					b.container.empty().append(b.slides)
				}
				b.doMath();
				if (k) {
					e.asNav.setup()
				}
				b.setup("init");
				if (l.controlNav) {
					e.controlNav.setup()
				}
				if (l.directionNav) {
					e.directionNav.setup()
				}
				if (l.keyboard && (a(b.containerSelector).length === 1 || l.multipleKeyboard)) {
					a(document).bind("keyup", function(p) {
						var o = p.keyCode;
						if (!b.animating && (o === 39 || o === 37)) {
							var q = (o === 39) ? b.getTarget("next") : (o === 37) ? b.getTarget("prev") : false;
							b.flexAnimate(q, l.pauseOnAction)
						}
					})
				}
				if (l.mousewheel) {
					b.bind("mousewheel", function(q, s, p, o) {
						q.preventDefault();
						var r = (s < 0) ? b.getTarget("next") : b.getTarget("prev");
						b.flexAnimate(r, l.pauseOnAction)
					})
				}
				if (l.pausePlay) {
					e.pausePlay.setup()
				}
				if (l.slideshow) {
					if (l.pauseOnHover) {
						b.hover(function() {
							if (!b.manualPlay && !b.manualPause) {
								b.pause()
							}
						}, function() {
							if (!b.manualPause && !b.manualPlay) {
								b.play()
							}
						})
					}(l.initDelay > 0) ? setTimeout(b.play, l.initDelay): b.play()
				}
				if (i && l.touch) {
					e.touch()
				}
				if (!f || (f && l.smoothHeight)) {
					a(window).bind("resize focus", e.resize)
				}
				setTimeout(function() {
					l.start(b)
				}, 200)
			},
			asNav: {
				setup: function() {
					b.asNav = true;
					b.animatingTo = Math.floor(b.currentSlide / b.move);
					b.currentItem = b.currentSlide;
					b.slides.removeClass(g + "active-slide").eq(b.currentItem).addClass(g + "active-slide");
					b.slides.click(function(q) {
						q.preventDefault();
						var p = a(this),
							o = p.index();
						if (!a(l.asNavFor).data("flexslider").animating && !p.hasClass("active")) {
							b.direction = (b.currentItem < o) ? "next" : "prev";
							b.flexAnimate(o, l.pauseOnAction, false, true, true)
						}
					})
				}
			},
			controlNav: {
				setup: function() {
					if (!b.manualControls) {
						e.controlNav.setupPaging()
					} else {
						e.controlNav.setupManual()
					}
				},
				setupPaging: function() {
					var q = (l.controlNav === "thumbnails") ? "control-thumbs" : "control-paging",
						o = 1,
						r;
					b.controlNavScaffold = a('<ol class="' + g + "control-nav " + g + q + '"></ol>');
					if (b.pagingCount > 1) {
						for (var p = 0; p < b.pagingCount; p++) {
							r = (l.controlNav === "thumbnails") ? '<img src="' + b.slides.eq(p).attr("data-thumb") + '"/>' : "<a>" + o + "</a>";
							b.controlNavScaffold.append("<li>" + r + "</li>");
							o++
						}
					}(b.controlsContainer) ? a(b.controlsContainer).append(b.controlNavScaffold): b.append(b.controlNavScaffold);
					e.controlNav.set();
					e.controlNav.active();
					b.controlNavScaffold.delegate("a, img", c, function(s) {
						s.preventDefault();
						var u = a(this),
							t = b.controlNav.index(u);
						if (!u.hasClass(g + "active")) {
							b.direction = (t > b.currentSlide) ? "next" : "prev";
							b.flexAnimate(t, l.pauseOnAction)
						}
					});
					if (i) {
						b.controlNavScaffold.delegate("a", "click touchstart", function(s) {
							s.preventDefault()
						})
					}
				},
				setupManual: function() {
					b.controlNav = b.manualControls;
					e.controlNav.active();
					b.controlNav.live(c, function(o) {
						o.preventDefault();
						var q = a(this),
							p = b.controlNav.index(q);
						if (!q.hasClass(g + "active")) {
							(p > b.currentSlide) ? b.direction = "next": b.direction = "prev";
							b.flexAnimate(p, l.pauseOnAction)
						}
					});
					if (i) {
						b.controlNav.live("click touchstart", function(o) {
							o.preventDefault()
						})
					}
				},
				set: function() {
					var o = (l.controlNav === "thumbnails") ? "img" : "a";
					b.controlNav = a("." + g + "control-nav li " + o, (b.controlsContainer) ? b.controlsContainer : b)
				},
				active: function() {
					b.controlNav.removeClass(g + "active").eq(b.animatingTo).addClass(g + "active")
				},
				update: function(o, p) {
					if (b.pagingCount > 1 && o === "add") {
						b.controlNavScaffold.append(a("<li><a>" + b.count + "</a></li>"))
					} else {
						if (b.pagingCount === 1) {
							b.controlNavScaffold.find("li").remove()
						} else {
							b.controlNav.eq(p).closest("li").remove()
						}
					}
					e.controlNav.set();
					(b.pagingCount > 1 && b.pagingCount !== b.controlNav.length) ? b.update(p, o): e.controlNav.active()
				}
			},
			directionNav: {
				setup: function() {
					var o = a('<ul class="' + g + 'direction-nav"><li><a class="' + g + 'prev" href="#">' + l.prevText + '</a></li><li><a class="' + g + 'next" href="#">' + l.nextText + "</a></li></ul>");
					if (b.controlsContainer) {
						a(b.controlsContainer).append(o);
						b.directionNav = a("." + g + "direction-nav li a", b.controlsContainer)
					} else {
						b.append(o);
						b.directionNav = a("." + g + "direction-nav li a", b)
					}
					e.directionNav.update();
					b.directionNav.bind(c, function(p) {
						p.preventDefault();
						var q = (a(this).hasClass(g + "next")) ? b.getTarget("next") : b.getTarget("prev");
						b.flexAnimate(q, l.pauseOnAction)
					});
					if (i) {
						b.directionNav.bind("click touchstart", function(p) {
							p.preventDefault()
						})
					}
				},
				update: function() {
					var o = g + "disabled";
					if (b.pagingCount === 1) {
						b.directionNav.addClass(o)
					} else {
						if (!l.animationLoop) {
							if (b.animatingTo === 0) {
								b.directionNav.removeClass(o).filter("." + g + "prev").addClass(o)
							} else {
								if (b.animatingTo === b.last) {
									b.directionNav.removeClass(o).filter("." + g + "next").addClass(o)
								} else {
									b.directionNav.removeClass(o)
								}
							}
						} else {
							b.directionNav.removeClass(o)
						}
					}
				}
			},
			pausePlay: {
				setup: function() {
					var o = a('<div class="' + g + 'pauseplay"><a></a></div>');
					if (b.controlsContainer) {
						b.controlsContainer.append(o);
						b.pausePlay = a("." + g + "pauseplay a", b.controlsContainer)
					} else {
						b.append(o);
						b.pausePlay = a("." + g + "pauseplay a", b)
					}
					e.pausePlay.update((l.slideshow) ? g + "pause" : g + "play");
					b.pausePlay.bind(c, function(p) {
						p.preventDefault();
						if (a(this).hasClass(g + "pause")) {
							b.manualPause = true;
							b.manualPlay = false;
							b.pause()
						} else {
							b.manualPause = false;
							b.manualPlay = true;
							b.play()
						}
					});
					if (i) {
						b.pausePlay.bind("click touchstart", function(p) {
							p.preventDefault()
						})
					}
				},
				update: function(o) {
					(o === "play") ? b.pausePlay.removeClass(g + "pause").addClass(g + "play").text(l.playText): b.pausePlay.removeClass(g + "play").addClass(g + "pause").text(l.pauseText)
				}
			},
			touch: function() {
				var t, r, p, u, x, v, s = false;
				d.addEventListener("touchstart", q, false);

				function q(y) {
					if (b.animating) {
						y.preventDefault()
					} else {
						if (y.touches.length === 1) {
							b.pause();
							u = (h) ? b.h : b.w;
							v = Number(new Date());
							p = (m && j && b.animatingTo === b.last) ? 0 : (m && j) ? b.limit - (((b.itemW + l.itemMargin) * b.move) * b.animatingTo) : (m && b.currentSlide === b.last) ? b.limit : (m) ? ((b.itemW + l.itemMargin) * b.move) * b.currentSlide : (j) ? (b.last - b.currentSlide + b.cloneOffset) * u : (b.currentSlide + b.cloneOffset) * u;
							t = (h) ? y.touches[0].pageY : y.touches[0].pageX;
							r = (h) ? y.touches[0].pageX : y.touches[0].pageY;
							d.addEventListener("touchmove", o, false);
							d.addEventListener("touchend", w, false)
						}
					}
				}

				function o(y) {
					x = (h) ? t - y.touches[0].pageY : t - y.touches[0].pageX;
					s = (h) ? (Math.abs(x) < Math.abs(y.touches[0].pageX - r)) : (Math.abs(x) < Math.abs(y.touches[0].pageY - r));
					if (!s || Number(new Date()) - v > 500) {
						y.preventDefault();
						if (!f && b.transitions) {
							if (!l.animationLoop) {
								x = x / ((b.currentSlide === 0 && x < 0 || b.currentSlide === b.last && x > 0) ? (Math.abs(x) / u + 2) : 1)
							}
							b.setProps(p + x, "setTouch")
						}
					}
				}

				function w(A) {
					d.removeEventListener("touchmove", o, false);
					if (b.animatingTo === b.currentSlide && !s && !(x === null)) {
						var z = (j) ? -x : x,
							y = (z > 0) ? b.getTarget("next") : b.getTarget("prev");
						if (b.canAdvance(y) && (Number(new Date()) - v < 550 && Math.abs(z) > 50 || Math.abs(z) > u / 2)) {
							b.flexAnimate(y, l.pauseOnAction)
						} else {
							if (!f) {
								b.flexAnimate(b.currentSlide, l.pauseOnAction, true)
							}
						}
					}
					d.removeEventListener("touchend", w, false);
					t = null;
					r = null;
					x = null;
					p = null
				}
			},
			resize: function() {
				if (!b.animating && b.is(":visible")) {
					if (!m) {
						b.doMath()
					}
					if (f) {
						e.smoothHeight()
					} else {
						if (m) {
							b.slides.width(b.computedW);
							b.update(b.pagingCount);
							b.setProps()
						} else {
							if (h) {
								b.viewport.height(b.h);
								b.setProps(b.h, "setTotal")
							} else {
								if (l.smoothHeight) {
									e.smoothHeight()
								}
								b.newSlides.width(b.computedW);
								b.setProps(b.computedW, "setTotal")
							}
						}
					}
				}
			},
			smoothHeight: function(o) {
				if (!h || f) {
					var p = (f) ? b : b.viewport;
					(o) ? p.animate({
						height: b.slides.eq(b.animatingTo).height()
					}, o): p.height(b.slides.eq(b.animatingTo).height())
				}
			},
			sync: function(o) {
				var q = a(l.sync).data("flexslider"),
					p = b.animatingTo;
				switch (o) {
					case "animate":
						q.flexAnimate(p, l.pauseOnAction, false, true);
						break;
					case "play":
						if (!q.playing && !q.asNav) {
							q.play()
						}
						break;
					case "pause":
						q.pause();
						break
				}
			}
		};
		b.flexAnimate = function(w, x, q, s, t) {
			if (k && b.pagingCount === 1) {
				b.direction = (b.currentItem < w) ? "next" : "prev"
			}
			if (!b.animating && (b.canAdvance(w, t) || q) && b.is(":visible")) {
				if (k && s) {
					var p = a(l.asNavFor).data("flexslider");
					b.atEnd = w === 0 || w === b.count - 1;
					p.flexAnimate(w, true, false, true, t);
					b.direction = (b.currentItem < w) ? "next" : "prev";
					p.direction = b.direction;
					if (Math.ceil((w + 1) / b.visible) - 1 !== b.currentSlide && w !== 0) {
						b.currentItem = w;
						b.slides.removeClass(g + "active-slide").eq(w).addClass(g + "active-slide");
						w = Math.floor(w / b.visible)
					} else {
						b.currentItem = w;
						b.slides.removeClass(g + "active-slide").eq(w).addClass(g + "active-slide");
						return false
					}
				}
				b.animating = true;
				b.animatingTo = w;
				l.before(b);
				if (x) {
					b.pause()
				}
				if (b.syncExists && !t) {
					e.sync("animate")
				}
				if (l.controlNav) {
					e.controlNav.active()
				}
				if (!m) {
					b.slides.removeClass(g + "active-slide").eq(w).addClass(g + "active-slide")
				}
				b.atEnd = w === 0 || w === b.last;
				if (l.directionNav) {
					e.directionNav.update()
				}
				if (w === b.last) {
					l.end(b);
					if (!l.animationLoop) {
						b.pause()
					}
				}
				if (!f) {
					var v = (h) ? b.slides.filter(":first").height() : b.computedW,
						u, r, o;
					if (m) {
						u = (l.itemWidth > b.w) ? l.itemMargin * 2 : l.itemMargin;
						o = ((b.itemW + u) * b.move) * b.animatingTo;
						r = (o > b.limit && b.visible !== 1) ? b.limit : o
					} else {
						if (b.currentSlide === 0 && w === b.count - 1 && l.animationLoop && b.direction !== "next") {
							r = (j) ? (b.count + b.cloneOffset) * v : 0
						} else {
							if (b.currentSlide === b.last && w === 0 && l.animationLoop && b.direction !== "prev") {
								r = (j) ? 0 : (b.count + 1) * v
							} else {
								r = (j) ? ((b.count - 1) - w + b.cloneOffset) * v : (w + b.cloneOffset) * v
							}
						}
					}
					b.setProps(r, "", l.animationSpeed);
					if (b.transitions) {
						if (!l.animationLoop || !b.atEnd) {
							b.animating = false;
							b.currentSlide = b.animatingTo
						}
						b.container.unbind("webkitTransitionEnd transitionend");
						b.container.bind("webkitTransitionEnd transitionend", function() {
							b.wrapup(v)
						})
					} else {
						b.container.animate(b.args, l.animationSpeed, l.easing, function() {
							b.wrapup(v)
						})
					}
				} else {
					if (!i) {
						b.slides.eq(b.currentSlide).fadeOut(l.animationSpeed, l.easing);
						b.slides.eq(w).fadeIn(l.animationSpeed, l.easing, b.wrapup)
					} else {
						b.slides.eq(b.currentSlide).css({
							opacity: 0,
							zIndex: 1
						});
						b.slides.eq(w).css({
							opacity: 1,
							zIndex: 2
						});
						b.slides.unbind("webkitTransitionEnd transitionend");
						b.slides.eq(b.currentSlide).bind("webkitTransitionEnd transitionend", function() {
							l.after(b)
						});
						b.animating = false;
						b.currentSlide = b.animatingTo
					}
				}
				if (l.smoothHeight) {
					e.smoothHeight(l.animationSpeed)
				}
			}
		};
		b.wrapup = function(o) {
			if (!f && !m) {
				if (b.currentSlide === 0 && b.animatingTo === b.last && l.animationLoop) {
					b.setProps(o, "jumpEnd")
				} else {
					if (b.currentSlide === b.last && b.animatingTo === 0 && l.animationLoop) {
						b.setProps(o, "jumpStart")
					}
				}
			}
			b.animating = false;
			b.currentSlide = b.animatingTo;
			l.after(b)
		};
		b.animateSlides = function() {
			if (!b.animating) {
				b.flexAnimate(b.getTarget("next"))
			}
		};
		b.pause = function() {
			clearInterval(b.animatedSlides);
			b.playing = false;
			if (l.pausePlay) {
				e.pausePlay.update("play")
			}
			if (b.syncExists) {
				e.sync("pause")
			}
		};
		b.play = function() {
			b.animatedSlides = setInterval(b.animateSlides, l.slideshowSpeed);
			b.playing = true;
			if (l.pausePlay) {
				e.pausePlay.update("pause")
			}
			if (b.syncExists) {
				e.sync("play")
			}
		};
		b.canAdvance = function(q, o) {
			var p = (k) ? b.pagingCount - 1 : b.last;
			return (o) ? true : (k && b.currentItem === b.count - 1 && q === 0 && b.direction === "prev") ? true : (k && b.currentItem === 0 && q === b.pagingCount - 1 && b.direction !== "next") ? false : (q === b.currentSlide && !k) ? false : (l.animationLoop) ? true : (b.atEnd && b.currentSlide === 0 && q === p && b.direction !== "next") ? false : (b.atEnd && b.currentSlide === p && q === 0 && b.direction === "next") ? false : true
		};
		b.getTarget = function(o) {
			b.direction = o;
			if (o === "next") {
				return (b.currentSlide === b.last) ? 0 : b.currentSlide + 1
			} else {
				return (b.currentSlide === 0) ? b.last : b.currentSlide - 1
			}
		};
		b.setProps = function(r, o, p) {
			var q = (function() {
				var s = (r) ? r : ((b.itemW + l.itemMargin) * b.move) * b.animatingTo,
					t = (function() {
						if (m) {
							return (o === "setTouch") ? r : (j && b.animatingTo === b.last) ? 0 : (j) ? b.limit - (((b.itemW + l.itemMargin) * b.move) * b.animatingTo) : (b.animatingTo === b.last) ? b.limit : s
						} else {
							switch (o) {
								case "setTotal":
									return (j) ? ((b.count - 1) - b.currentSlide + b.cloneOffset) * r : (b.currentSlide + b.cloneOffset) * r;
								case "setTouch":
									return (j) ? r : r;
								case "jumpEnd":
									return (j) ? r : b.count * r;
								case "jumpStart":
									return (j) ? b.count * r : r;
								default:
									return r
							}
						}
					}());
				return (t * -1) + "px"
			}());
			if (b.transitions) {
				q = (h) ? "translate3d(0," + q + ",0)" : "translate3d(" + q + ",0,0)";
				p = (p !== undefined) ? (p / 1000) + "s" : "0s";
				b.container.css("-" + b.pfx + "-transition-duration", p)
			}
			b.args[b.prop] = q;
			if (b.transitions || p === undefined) {
				b.container.css(b.args)
			}
		};
		b.setup = function(p) {
			if (!f) {
				var q, o;
				if (p === "init") {
					b.viewport = a('<div class="' + g + 'viewport"></div>').css({
						overflow: "hidden",
						position: "relative"
					}).appendTo(b).append(b.container);
					b.cloneCount = 0;
					b.cloneOffset = 0;
					if (j) {
						o = a.makeArray(b.slides).reverse();
						b.slides = a(o);
						b.container.empty().append(b.slides)
					}
				}
				if (l.animationLoop && !m) {
					b.cloneCount = 2;
					b.cloneOffset = 1;
					if (p !== "init") {
						b.container.find(".clone").remove()
					}
					b.container.append(b.slides.first().clone().addClass("clone")).prepend(b.slides.last().clone().addClass("clone"))
				}
				b.newSlides = a(l.selector, b);
				q = (j) ? b.count - 1 - b.currentSlide + b.cloneOffset : b.currentSlide + b.cloneOffset;
				if (h && !m) {
					b.container.height((b.count + b.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
					setTimeout(function() {
						b.newSlides.css({
							display: "block"
						});
						b.doMath();
						b.viewport.height(b.h);
						b.setProps(q * b.h, "init")
					}, (p === "init") ? 100 : 0)
				} else {
					b.container.width((b.count + b.cloneCount) * 200 + "%");
					b.setProps(q * b.computedW, "init");
					setTimeout(function() {
						b.doMath();
						b.newSlides.css({
							width: b.computedW,
							"float": "left",
							display: "block"
						});
						if (l.smoothHeight) {
							e.smoothHeight()
						}
					}, (p === "init") ? 100 : 0)
				}
			} else {
				b.slides.css({
					width: "100%",
					"float": "left",
					marginRight: "-100%",
					position: "relative"
				});
				if (p === "init") {
					if (!i) {
						b.slides.eq(b.currentSlide).fadeIn(l.animationSpeed, l.easing)
					} else {
						b.slides.css({
							opacity: 0,
							display: "block",
							webkitTransition: "opacity " + l.animationSpeed / 1000 + "s ease",
							zIndex: 1
						}).eq(b.currentSlide).css({
							opacity: 1,
							zIndex: 2
						})
					}
				}
				if (l.smoothHeight) {
					e.smoothHeight()
				}
			}
			if (!m) {
				b.slides.removeClass(g + "active-slide").eq(b.currentSlide).addClass(g + "active-slide")
			}
		};
		b.doMath = function() {
			var o = b.slides.first(),
				r = l.itemMargin,
				p = l.minItems,
				q = l.maxItems;
			b.w = b.width();
			b.h = o.height();
			b.boxPadding = o.outerWidth() - o.width();
			if (m) {
				b.itemT = l.itemWidth + r;
				b.minW = (p) ? p * b.itemT : b.w;
				b.maxW = (q) ? q * b.itemT : b.w;
				b.itemW = (b.minW > b.w) ? (b.w - (r * p)) / p : (b.maxW < b.w) ? (b.w - (r * q)) / q : (l.itemWidth > b.w) ? b.w : l.itemWidth;
				b.visible = Math.floor(b.w / (b.itemW + r));
				b.move = (l.move > 0 && l.move < b.visible) ? l.move : b.visible;
				b.pagingCount = Math.ceil(((b.count - b.visible) / b.move) + 1);
				b.last = b.pagingCount - 1;
				b.limit = (b.pagingCount === 1) ? 0 : (l.itemWidth > b.w) ? ((b.itemW + (r * 2)) * b.count) - b.w - r : ((b.itemW + r) * b.count) - b.w - r
			} else {
				b.itemW = b.w;
				b.pagingCount = b.count;
				b.last = b.count - 1
			}
			b.computedW = b.itemW - b.boxPadding
		};
		b.update = function(p, o) {
			b.doMath();
			if (!m) {
				if (p < b.currentSlide) {
					b.currentSlide += 1
				} else {
					if (p <= b.currentSlide && p !== 0) {
						b.currentSlide -= 1
					}
				}
				b.animatingTo = b.currentSlide
			}
			if (l.controlNav && !b.manualControls) {
				if ((o === "add" && !m) || b.pagingCount > b.controlNav.length) {
					e.controlNav.update("add")
				} else {
					if ((o === "remove" && !m) || b.pagingCount < b.controlNav.length) {
						if (m && b.currentSlide > b.last) {
							b.currentSlide -= 1;
							b.animatingTo -= 1
						}
						e.controlNav.update("remove", b.last)
					}
				}
			}
			if (l.directionNav) {
				e.directionNav.update()
			}
		};
		b.addSlide = function(o, q) {
			var p = a(o);
			b.count += 1;
			b.last = b.count - 1;
			if (h && j) {
				(q !== undefined) ? b.slides.eq(b.count - q).after(p): b.container.prepend(p)
			} else {
				(q !== undefined) ? b.slides.eq(q).before(p): b.container.append(p)
			}
			b.update(q, "add");
			b.slides = a(l.selector + ":not(.clone)", b);
			b.setup();
			l.added(b)
		};
		b.removeSlide = function(o) {
			var p = (isNaN(o)) ? b.slides.index(a(o)) : o;
			b.count -= 1;
			b.last = b.count - 1;
			if (isNaN(o)) {
				a(o, b.slides).remove()
			} else {
				(h && j) ? b.slides.eq(b.last).remove(): b.slides.eq(o).remove()
			}
			b.doMath();
			b.update(p, "remove");
			b.slides = a(l.selector + ":not(.clone)", b);
			b.setup();
			l.removed(b)
		};
		e.init()
	};
	a.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: false,
		animationLoop: true,
		smoothHeight: false,
		startAt: 0,
		slideshow: true,
		slideshowSpeed: 7000,
		animationSpeed: 600,
		initDelay: 0,
		randomize: false,
		pauseOnAction: true,
		pauseOnHover: false,
		useCSS: true,
		touch: true,
		video: false,
		controlNav: true,
		directionNav: true,
		prevText: "Previous",
		nextText: "Next",
		keyboard: true,
		multipleKeyboard: false,
		mousewheel: false,
		pausePlay: false,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 0,
		maxItems: 0,
		move: 0,
		start: function() {},
		before: function() {},
		after: function() {},
		end: function() {},
		added: function() {},
		removed: function() {}
	};
	a.fn.flexslider = function(b) {
		if (b === undefined) {
			b = {}
		}
		if (typeof b === "object") {
			return this.each(function() {
				var f = a(this),
					d = (b.selector) ? b.selector : ".slides > li",
					e = f.find(d);
				if (e.length === 1) {
					e.fadeIn(400);
					if (b.start) {
						b.start(f)
					}
				} else {
					if (f.data("flexslider") == undefined) {
						new a.flexslider(this, b)
					}
				}
			})
		} else {
			var c = a(this).data("flexslider");
			switch (b) {
				case "play":
					c.play();
					break;
				case "pause":
					c.pause();
					break;
				case "next":
					c.flexAnimate(c.getTarget("next"), true);
					break;
				case "prev":
				case "previous":
					c.flexAnimate(c.getTarget("prev"), true);
					break;
				default:
					if (typeof b === "number") {
						c.flexAnimate(b, true)
					}
			}
		}
	}
})(jQuery);