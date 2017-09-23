$(document).ready(function() {

	$(".modal-link").on("click", function(){
		var modal = $(this).data("link");
		$("."+modal).arcticmodal({
			overlay: {
				css: {
					opacity: .9
				}
			}
		});
		return false;
	});

	// MODAL NAV
	$(".modal-close").on("click", function() {
		$.arcticmodal("close");
	});
	
});
