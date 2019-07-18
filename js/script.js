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
    $('.sidenav').sidenav({
      edge: 'right'
    });
  });

  function copyPhone() {
    const el = document.createElement('textarea');
    el.value = '5704706239';
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  function copyEmail() {
    const el = document.createElement('textarea');
    el.value = 'sladuca777@gmail.com';
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
