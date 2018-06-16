require
(
	["gitbook", "jquery"]
	, function ( gitbook, $ )
	{
		var buttontext = "Evaluate in console";

		/**
			Config time
		*/
		gitbook.events.on
		(
			"start", function( e, config )
			{
				
			}
		);

		/**
			Fired after each new page enhancment
		*/
		gitbook.events.on
		(
			"page.change", function ()
			{
				var $page_inner = $( ".page-inner" );
				$page_inner.html
				(
					$page_inner
						.html()
						.replace
						(
							/(<!---) ?\*\*([\s\S]*?)\*\*([\s\S]*?)(--->)/gi
							, '<p class="alert alert-$2"><span class="fa fa-$2"></span>$3</p>'
						)
				);
			}
		);
	}
);