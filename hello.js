// ServiceNow Client Script Example
// File: clientScript.js

(function executeClientScript() {
    // Runs when the form is loaded
    g_form.onLoad(function() {
        setUrgencyVisibility(); // Set the initial visibility of Urgency field
    });

    // Runs when the Priority field changes
    g_form.onChange('priority', function() {
        setUrgencyVisibility();
    });

    // Function to show or hide the Urgency field based on Priority
    function setUrgencyVisibility() {
        var priority = g_form.getValue('priority'); // Get the Priority field's value

        if (priority === '1') {
            // If Priority is 1 (High), show the Urgency field
            g_form.setDisplay('urgency', true);
        } else {
            // Otherwise, hide the Urgency field
            g_form.setDisplay('urgency', false);
        }
    }
})();
