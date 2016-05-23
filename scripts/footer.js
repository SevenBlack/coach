$j(document).ready(function() {
	var a = getParam("product");
	if (a && typeof(a) != undefined && a.length > 0) {
		popDetail(a);
		var c = window.location.href.split("?")[1];
		if (c && c.split("&")[0] == "regandlogin") {
			var b = getParam("size");
			if (b && typeof(b) != undefined && b.length > 0) {
				$j("#buy_size").val(b.replace("@", "/"))
			}
			$j("#_isPopRegAndLoginForHttps").val("true");
			if ($j("#wishlist_dia").css("display") == "none") {
				$j(".detail_addtofav").trigger("click")
			}
		}
	}
});

function reload() {
	var a = _contextPath + "/footer.htm";
	loxia.asyncXhrPost(a, {}, {
		success: function(b, c) {
			if (b) {
				$j("#footer").empty().html(b)
			}
		},
		error: function() {}
	})
};