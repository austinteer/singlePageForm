// jshint devel: true
$('#userSubmitContentForm').validate({
    rules: {
        //Set the email input rules for validation
        email: {
            required: true,
            email: true
        },
        //Set the url input rules for validation
        url: {
            required: true,
            url: true
        }

    },
    messages: {
        //Set the email error messages depending on what rule is triggered
        email: {
            required: 'Please enter an email address.',
            email: 'Please enter a valid email address.'
        },
        //Set the url error messages depending on what rule is triggered
        url: {
            required: 'Please enter a url to the content.',
            url: 'Please enter a valid url. Make sure it starts with http://'
        }
    }
});