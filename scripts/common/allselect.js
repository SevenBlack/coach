$j(document).ready(function() {
	if ($j.browser.mozilla || $j.browser.msie) {
		$j("select").css({
			backgroundImage: "none",
			paddingRight: "0px"
		})
	} else {
		$j("select").css({
			backgroundImage: "url(" + domain_image + "/images/img-select.png)",
			paddingRight: "25px"
		})
	}
});