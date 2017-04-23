//LinkedIn functions
//Execute on load profile 
function onLinkedInLoad() {
	IN.Event.on(IN, "auth", function() {
        //Call a method in the scope of the controller.
		angular.element(document.getElementById("appBody")).scope().getLinkedInData();
	});
	IN.Event.on(IN, "logout", function() {
		onLinkedInLogout();
	});
}

//execute on logout event
function onLinkedInLogout() {
	location.reload(true);
}
