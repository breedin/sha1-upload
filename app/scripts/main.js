(function($) {
  var $fileupload = $('#fileupload');

  $fileupload.fileupload({
    drop: function(event, data) {
      var file = data.files[0];
      var reader = new FileReader();

      reader.onload = function() {
        // sum it!
        var hash = CryptoJS.SHA1(reader.result);
        alert(hash);
      };

      reader.readAsBinaryString(file);
    }
  });

}(jQuery));
