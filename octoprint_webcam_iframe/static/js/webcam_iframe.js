/*
 * View model for OctoPrint-WebcamIframe
 *
 * Author: jneilliii
 * License: AGPLv3
 */
$(function() {
	function Webcam_iframeViewModel(parameters) {

        		
		setInterval(()=>{
        
			var s = document.querySelector("#webcam_image").src
			document.querySelector("#webcam_image").src = s;	

		},5000)


	}

	OCTOPRINT_VIEWMODELS.push({
		construct: Webcam_iframeViewModel,
		dependencies: ["settingsViewModel", "controlViewModel"],
		elements: [ /* ... */ ]
	});
});
