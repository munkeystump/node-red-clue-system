lastSrc="";
lastAudio="";
bgAudio="";
effectAudio="";
var app = new Vue({
    // The HTML element to attach to
	el: '#app',
    // Variables defined here will be avalable and updated within the HTML
	data: {
		msg: '[No Message Received Yet]',
	},
    // Callback function when Vue library is fully loaded
	mounted: function() {
	    // Start up uibuilder
		uibuilder.start();
		// Keep a reference to the Vue app
		var vueApp = this;
        // Callback triggered when node receives a (non-control) msg
		uibuilder.onChange('msg', function(msg) {
			vueApp.msg = msg;
			//vueApp.$refs.videoRef.src = msg.videoSrc;
			vueApp.$refs.imgRef.src = msg.imgSrc;
			//vueApp.$refs.clueSound.src = msg.clueSound;
			if(msg.videoSrc != lastSrc) {
		        vueApp.$refs.videoOverlay.src = msg.videoSrc;
		        lastSrc = msg.videoSrc;
			}
			if(msg.clueSound != lastAudio) {
		        vueApp.$refs.clueSound.src = msg.clueSound;
		        lastAudio = msg.clueSound;
			}
			if(msg.bgAudio != bgAudio) {
		        vueApp.$refs.bgAudio.src = msg.bgAudio;
		        bgAudio = msg.bgAudio;
			}
			if(msg.effectAudio != effectAudio) {
		        vueApp.$refs.effectAudio.src = msg.effectAudio;
		        effectAudio = msg.effectAudio;
			}
		});
	},
});