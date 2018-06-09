var player;

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
	player = new YT.Player('播放器-影片', {
		  height: '390',
		  width: '640',
		  videoId: 'M7lc1UVf-VE',
		  events: {
			'onReady': onPlayerReady
		  }
	});
}

function onPlayerReady(event) {
    // event.target.playVideo();
}

function onChangeYoutube(videoId)
{
	player.loadVideoById(videoId);
}
