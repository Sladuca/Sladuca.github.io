  $(document).ready(function(){
    $('.path').each(function() {
    	$(this).css("stroke-dasharray", this.getTotalLength());
    	$(this).css("stroke-dashoffset", this.getTotalLength())
    });
    $('.scrollspy').scrollSpy({
    	scrollOffset: 200
    	});
    $('.table-of-contents').pushpin({
		// push below navbar
		offset: 300
	});
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible({
    	accordion: false
    });
  });