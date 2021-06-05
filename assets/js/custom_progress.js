$(function(){
  const input = document.getElementById('value1');
  const progressValue1 = document.querySelector('.Progressbar__value');
  const progress1 = document.querySelector('.media-progress:eq(0)');

  function setValue(value) {
    progressValue1.style.width = `${value}%`;
    progress1.value = value;
  }

  setValue(input.value);

  input.addEventListener('change', e => {
    const value = e.target.value;
    setValue(value);
  });

});


  // draggable progressbar
  function showvalueToinput(n){

      $(".question_container:eq(" + n + ") .media-progress").on("click", function(e) {

        var max = $(this).width(); //Get width element
        var pos = e.pageX - $(this).offset().left; //Position cursor
        var dual = ((pos / max * 100) / 25).toFixed(1); // Round %
        // dual 위치에 span 만들기

        if (dual > 100) {
          var dual = 100;
        }

        $(this).val(dual);
        $("#value"+n+"").val(dual);

      });

  }


  //빨간색 차오르는 정도
$(function(){

  $('.media-progress').on('input', function(){
    var val = $(this).val();
    var min = this.min;
    var max = this.max;

    var value = (this.value-this.min)/(this.max-this.min)*100;
    console.log('val min max',val);
    console.log('val min max',min);
    console.log('val min max',max);
    console.log('value',value);

    $(this).css('background', 'linear-gradient(to right, #4986fc 0%, #4986fc '+ value +'%, #d5d4d3 ' + value + '%, #d5d4d3 100%)'); });



        //   document.getElementsByClassName("media-progress").oninput = function() {
        //   var value = (this.value-this.min)/(this.max-this.min)*100
        //   this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
        // };
});
