
(function($) {
  /**
   * @todo
   */
  Drupal.behaviors.octobanGalleryPage = {
    attach: function (context) {
      $('.block-latest-portfolio .views-field-field-portfolio-images, .view-list-portfolio .views-field-field-portfolio-images, .view-list-articles .views-field-field-image, .list-article-printerest .views-field-field-image, .view-list-members .views-field-field-member-image').hover(
        function () {
	      $('.field-more-link, .extra-content', this).show();
        },
        function () {
	      $('.field-more-link, .extra-content', this).hide();
        }
      );
    }
  };
  
  Drupal.behaviors.octobanAccordion = {
    attach: function () {
	   $('.block-accordion').accordion({
          heightStyle: 'content',
		   autoHeight: false
       });
    }
  };
  
  Drupal.behaviors.octobanTabs = {
    attach: function () {
	   $('.block-tabs').tabs();
    }
  };
  
  Drupal.behaviors.octobanToggle = {
    attach: function () {
        $('div.toggle_area').find('div.toggle_content').hide().end();
	  
	    $('div.toggle_label').click(function() {
          $(this).next().slideToggle();
	  	  if($(this).hasClass('active')) {
	        $(this).removeClass('active');
		  } else {
	        $(this).addClass('active');
		  }
        });
    }
  };
  
  Drupal.behaviors.octobanKnob = {
    attach: function () {
	  $('.input-knob').knob({
        readOnly: true,
		width: '200',
		height: '220',
		thickness: '0.1',
		color: '#000',
		fgColor: '#ae351d'
      });
    }
  };
  
  Drupal.behaviors.octobanEqualHeights = {
    attach: function (context) {
      $('body', context).once('views-row-equalheights', function () {
        $(window).bind('load', function () {
          $($('.block-latest-portfolio .view-content').get().reverse()).each(function () {
            var elements = $(this).children('.views-row').css('height', '');
            
            if (!Drupal.behaviors.hasOwnProperty('omegaMediaQueries') || Drupal.omega.getCurrentLayout() != 'mobile') {
              var tallest = 0;

              elements.each(function () {    
                if ($(this).height() > tallest) {
                  tallest = $(this).height();
                }
              }).each(function() {
                if ($(this).height() < tallest) {
                  $(this).css('height', tallest);
                }
              });
            }
          });
        });
      });
    }
  };
  
  Drupal.behaviors.octobanThemeColors = {
    attach: function (context) {
      $('body', context).once('block-theme-colors-showhide', function () {													   
        jQuery('.block-theme-colors .close').click(function(e){
		  e.preventDefault();
		  jQuery('.block-theme-colors .block-theme-color-content ').hide();
		  jQuery(this).hide();
		  jQuery('.block-theme-colors .open').show();
		});
		jQuery('.block-theme-colors .open').click(function(e){
          e.preventDefault();
		  jQuery('.block-theme-colors .block-theme-color-content ').show();
		  jQuery(this).hide();
		  jQuery('.block-theme-colors .close').show();
		});  
      });
    }
  };
})(jQuery);

