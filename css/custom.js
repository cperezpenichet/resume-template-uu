trackingAdder = function() {
	$(".newTab").attr('target', '_blank');
	$(".trackEvent").attr('target', '_blank');
	$(".trackEvent").click(function() {
		x = gtag('event', $(this).data().acn, {
		  'event_category': $(this).data().cat,
		  'event_label': this.href,
		});
	});
};

link_track_init = function() {
	$('#main-navbar a[href$=".pdf"]').attr('target', '_blank');
	$('#main-navbar a[href$=".pdf"]').click(function() {
		x = gtag('event', 'download', {
		  'event_category': 'nav-bar',
		  'event_label': this.href,
		});
	});

}

document.addEventListener('DOMContentLoaded', link_track_init);
document.addEventListener('DOMContentLoaded', trackingAdder);
