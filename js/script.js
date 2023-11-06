$(document).ready(function(){


    $('#registration-form').validate({
    rules: {
        
      fname: {
        required: true,
       required: true,
      },
      myemail: {
        required: true,
        email: true
      },
             subject: {
        required: true,
       required: true
      },
             enquiry: {
        required: true,
       required: true,
      },
            security_code: {
        required: true,
       required: true
      },
            
            
     agree: "required"
     },
        
        highlight: function(element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function(element) {
            element
            .text('OK!').addClass('valid')
            .closest('.control-group').removeClass('error').addClass('success');
        }
  });

}); // end document.ready