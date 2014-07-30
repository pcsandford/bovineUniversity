     $(function() {
console.log('heyo')
      $('.preview a').on('click',function(e){
        var src = $(this).data('src');
        $('img.previewFull').attr('src',src);

      });
    });
  