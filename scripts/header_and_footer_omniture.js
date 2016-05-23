$j(document).ready(function() {
	$j(".o-storeloca").bind("click", function() {
		storeLocatorClickHandler()
	});
	$j("#o-emailSubscription").bind("click", function() {
		emailSubscriptionClickHandler()
	});
	$j(".menu_register").click(function() {
		registerClickOmnitureHandler()
	})
});