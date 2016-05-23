var imgReady = (function() {
	var d = [],
		c = null,
		b = function() {
			var e = 0;
			for (; e < d.length; e++) {
				d[e].end ? d.splice(e--, 1) : d[e]()
			}!d.length && a()
		},
		a = function() {
			clearInterval(c);
			c = null
		};
	return function(f, k, m, j) {
		var l, g, n, i, e, h = new Image();
		h.src = f;
		if (h.complete) {
			k.call(h);
			m && m.call(h);
			return
		}
		g = h.width;
		n = h.height;
		h.onerror = function() {
			j && j.call(h);
			l.end = true;
			h = h.onload = h.onerror = null
		};
		l = function() {
			i = h.width;
			e = h.height;
			if (i !== g || e !== n || i * e > 1024) {
				k.call(h);
				l.end = true
			}
		};
		l();
		h.onload = function() {
			!l.end && l();
			m && m.call(h);
			h = h.onload = h.onerror = null
		};
		if (!l.end) {
			d.push(l);
			if (c === null) {
				c = setInterval(b, 40)
			}
		}
	}
})();