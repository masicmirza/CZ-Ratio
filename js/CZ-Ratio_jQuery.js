(function($) {
    $.fn.CZRatio = function(options) {
      // Default options
      let settings = $.extend({
      	ratio: '',
        keep: 'w'
      }, options);
      
      this.each(function() {
        let _this = $(this);
        // Check if ratio parameter is in right format
        if(!RegExp(/^\d+-\d+$/).test(settings.ratio)){
          throw 'CZR ERROR: Ratio parameter in wrong format, it should be in "#-#" format.'
        }
        else {
          let R = settings.ratio.split('-');
          let K = settings.keep;
          // Checking which side is longer
          if(K === 'l' || K === 'L') {
            K = _this.height() > _this.width() ? 'h' : 'w';
          }
          // Checking which side is shorter
          else if(K === 's' || K === 'S') {
            K = _this.height() > _this.width() ? 'w' : 'h';
          }
  
          // Calculating height or width, depending on keep parameter
          switch (K) {
            case 'w':
            case 'W':
              _this.height(_this.width()*(R[1]/R[0]));
              break;
            case 'h':
            case 'H':
              _this.width(_this.height()*(R[0]/R[1]));
              break;
            default:
                throw 'CZR ERROR: Wrong parameter keep, see the documentation.';
          }
        }
      });
    }
  }(jQuery));