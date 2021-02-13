$(window).on("load", function(){
    
    function restore_options() {
        var format = localStorage.getItem('format');
        if (!format) format = "png";
        document.getElementById("format").value = format;
        
        var action = localStorage.getItem('action');
        if (!action) action = "save";
        document.getElementById("action").value = action;
    }
    
    // save the setting
    $("#save").on("click", function() {
        var format = document.getElementById("format").value;
        localStorage.setItem('format', format);
        var action = document.getElementById("action").value;
        localStorage.setItem('action', action);
        var status = document.getElementById('status');
        status.textContent = 'Settings saved!';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
    
    restore_options();
});
