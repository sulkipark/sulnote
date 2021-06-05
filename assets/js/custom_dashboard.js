$(function(){
    // $("#includeHead").load("../layout/head.html");
    // $("#includeHeader").load("../layout/header.html");
    // $("#includeTopbar").load("topbar.html");
    $("#includeFooter").load("../layout/footer.html");

});

$( function() {
  $( "#resizable_right" ).resizable({
    handles: 'w',
    minWidth: '450', //40%
    maxWidth: '649' //50%
  });
} );


// 전체 resize 배열
$(window).ready(function() {
    var wi = $('#resizable_right').width();
    // $("p.testp").text('Initial screen width is currently: ' + wi + 'px.');

    $('#resizable_right').resize(function() {
        var wi = $('#resizable_right').width();

        if (wi < '648'){
            // $("p.testp").text('resizable width is less than or equal to 480px. resizable Width is currently: ' + wi + 'px.');

              // 두덩이 컨테이너 늘리기 60%
              $('.two_halves').width('60%');

              // 맨 왼쪽꺼 축소 비율 4
              $('#resizable_left').width('60%');
              $('.floatmail_div').width('59.25%');
              $('.floatmail_div #shrinking_email_container').height(535);
              $('.floatboard_div').width('59.25%');

              $('#resizable_mail').width('100%');
              $('#resizable_mail .home_mail_main').width(280);
              $('#resizable_board').width('100%');
              $('#resizable_mail .home_bottom.h100').height(374);
              $('#resizable_mail .scroll.h100').height(374);
              $('#resizable_board .home_bottom.h100').height(374);
              $('#resizable_board .scroll.h100').height(374);

              // $('#resizable_right').width('50%');

              // 중간꺼 끌어오기 비율 3

              $('#resizable_middle').width('40%');
              $('#resizable_middle .person_contain').css('display', 'block');
              $('#resizable_middle #resizable_call').width('100%');
              $('#resizable_schedule').width('100%');

              $('#resizable_middle .person_bottom').height(369);
              $('#resizable_middle .person_scroll').height(140);
              $('#resizable_middle #schedule_list').height(200);
              $('#resizable_call #call_tab').height(260);
              $('#resizable_call #message_tab .tab-content').height(180);

              $('#resizable_right').width('40%');
              $('#resizable_right .tiny-red').width(200);

              // 오른쪽 끌어오기 비율 5
              $('#resizable_right').css('left', '0px');
              $('.mail_bottom').height(800);

            }

            else if (wi >= '450'){ //오른쪽 최소 40%
              //원상복귀

              $('.two_halves').width('50%');
              $('#resizable_left').width('100%');

              $('.floatmail_div').width('49.25%');
              // $('.floatmail_div #shrinking_email_container').height(560);
              $('.floatmail_div #shrinking_email_container').height(535);
              $('.floatboard_div').width('49.25%');

              $('#resizable_mail .home_mail_main').width('100%');
              $('#resizable_mail .home_bottom.h100').height(200);
              $('#resizable_mail .scroll.h100').height(200);
              $('#resizable_board .home_bottom.h100').height(200);
              $('#resizable_board .scroll.h100').height(200);

              $('#resizable_middle').width('100%');
              $('#resizable_middle .person_contain').css('display', 'flex');
              $('#resizable_middle .person_wid_1').css('margin-bottom', '0px');
              $('.person_wid_1').width('50%');
              $('.person_wid_2').width('50%');
              $('#resizable_middle .person_bottom').height(295);
              $('#resizable_middle .person_scroll').height(110);

              $('#resizable_call #call_tab').height(170);
              $('#resizable_call #message_tab .tab-content').height(110);

              $('#resizable_right .tiny-red').width(300);
              $('#resizable_right').css('left', '0');
              $('.mail_bottom').height(800);
              // $('#resizable_right').width('50%');

            }
    });
});



// countdown progress bar
$(function(){
  var sec = 10800; //3시간
  var timer = setInterval(function() {
    sec--;
    var hour = parseInt(sec/(60*60));
    if(hour<10) {hour = '0'+hour;}
    var minute = parseInt((sec%3600)/60);
    if(minute<10) {minute = '0'+minute;}
    var rest_sec = sec % 60;
    if(rest_sec<10) {rest_sec = '0'+rest_sec;}
     $('.seconds_text').text(hour + ":" + minute + ":" + rest_sec);
     progressBar(sec, $('.progressBar_div'));
     if (sec == -1) {
        $('.counter_container').fadeOut('fast');
        clearInterval(timer);
     }
  }, 1000);

  function progressBar(sec, $element) {
    var progressBarWidth = (10800 - sec) * $element.width() / 10800;
    var percent = (((10800 - sec) / 10800) * 100).toFixed(1);
    $('.progress_percent').html(percent); //진척도
    $element.find('div').animate({ width: progressBarWidth }, 500).html(sec + "%&nbsp;");
  }
});

// reply button 클릭시 보여주기
// var bDispaly =true;



function showProjectContent(){
  $('#final_modal').show();

    var project_content = document.getElementById('project_content').value;
    document.getElementById("getProjectContent").innerText = project_content;
}

function hideModal(){
  $('.modal').hide();
}


function showFileOnMail(nth_attachment){

  // mail modal scroll 항상 위로
  $('.man_scroll').prop('scrollTop', 0);
  $(".man_scroll").scrollTop(0);
  $(".man_scroll").animate({ scrollTop: 0 }, "slow"); //for chrome

  var email_index = $('#email_index').html();
  var email = email_array[email_index-1];
  var imgsrc = 'email/email_attachment/';

  if(nth_attachment==1){
    imgsrc += email.email_attachment1_src;
  }else if(nth_attachment==2){
    imgsrc += email.email_attachment2_src;
  }

  var iframeDisplay = document.getElementById("attachmentDisplay");
  var img = document.createElement("img");
  img.src = imgsrc;
  img.class = 'toggeled_attachment';

  $('#attachmentDisplay img').remove();
  iframeDisplay.prepend(img);
  // $('#attachmentDisplay').load(img);
}

function showFileImgOnBoard(index, src1, src2){

  showfloatBoard(index); //show board modal
  var board_file_container = document.getElementById("board_file_container");

  $('#board_file_container img').remove();// 게시판 컨텐츠 초기화

  var imgsrc1 = 'board/' + src1;
  var img1 = document.createElement("img");
  img1.src = imgsrc1;
  board_file_container.append(img1);

  if(src2 != ''){
    var imgsrc2 = 'board/' + src2;
    var img2 = document.createElement("img");
    img2.src = imgsrc2;
    board_file_container.append(img2);
  }

}

function showFileHTMLOnBoard(index, filename){

  showfloatBoard(index);//show board modal
  $('.floatboard_div .mail_origin').load(filename);
}



$(".toggle_down_btn").click(function(){

  $('img',this).toggle();
  $('.toggled_text_case').toggle();
  if($('#project_content').height == 420){
    $('#project_content').height(550);
  } else if($('#project_content').height == 550){
    $('#project_content').height(420);
  }

});

$(function (){
  for (var i=0; i<email_array.length; i++){
    if(email_array[i].email_readed == 0){
      $('.bg_color_mail:eq('+i+')').addClass('unread');
      $('.bg_color_mail:eq('+i+') .mail_in').addClass('unread');
    }
    $('.bg_color_mail:eq('+i+') .mail_in').val(email_array[i].email_title);
  }
});

function showfloatMail(index){

  // mail modal scroll 항상 위로
  $('.man_scroll').prop('scrollTop', 0);
  $(".man_scroll").scrollTop(0);
  $(".man_scroll").animate({ scrollTop: 0 }, "slow"); //for chrome

  var email = email_array[index-1];

  // console.log('email_readed', email.email_readed);
  // console.log('email_replied', email.email_replied);

  // 읽은 메일인지 아닌지 확인
  if(email.email_readed == 0){ // 안읽은 메일

    if(email.email_replied == 0){ //답장 안한 메일
      $('#floatmail_div #shrinking_email_container').height(535);
      $('#floatmail_div').show();
      $('#show1').hide();
      $('#show2').hide();
    }
    else { ///답장 안한 메
      $('#show2').show();
      $('#floatmail_div_replied').show();
    }

    email.email_readed = 1; //읽음으로 표시
  }
  else { //읽은 메일
      if(email.email_replied == 0){ //답장 안한 메일
        $('#floatmail_div #shrinking_email_container').height(535);
        $('#floatmail_div').show();
        $('#show1').hide();
        $('#show2').hide();
      }
      else { ///답장 안한 메
        $('#show2').show();
        $('#floatmail_div_replied').show();
      }

  }

  // $('.floatmail_div .mail_origin').text(email[1]); // 이메일 컨텐츠 넣기
  document.getElementById("email_index").innerHTML = email.email_index;
  document.getElementById("email_title").innerHTML = email.email_title;
  document.getElementById("email_content").innerHTML = email.email_content;
  // var email_content = 'email/'+email_index+'.html';
  // $('#floatmail_div #email_content').load(email_content);
  // $('#floatmail_div_replied #email_content').load(email_content);
  document.getElementById("email_sender").innerHTML = email.email_sender;
  document.getElementById("email_receiver").innerHTML = email.email_receiver;
  document.getElementById("email_attachment1").innerHTML = email.email_attachment1;
  document.getElementById("email_attachment2").innerHTML = email.email_attachment2;
  document.getElementById("email_date").innerHTML = email.email_date;


}


// reply 버튼 누른 후 메일 보내기 전 내용 보여주기
function doDisplay(){

  $('#show1').show();

  $('#show1 textarea').val('');
}

function doSend(){

  // console.log('index', index);

  $('#show1').hide();
  $('#show2').show();

  //메일 리스트에 그 클릭한 인덱스에 답장함으로 표시
  var index = $('#email_index').html();
  var email = email_array[index];
  // console.log('replied_email', email);
  email.email_replied = 1;

  // 이메일 내용 확인
  $('#reply_content').text($('#show1 textarea').val());
}


function hidefloatMail(){
  // 메일전송까지 한 사람 메일에 .replied addClass

  $('.floatmail_div').hide();
  // $('#floatmail_div_replied').hide();

  $('#attachmentDisplay img').hide();
}

function showfloatBoard(index){
  // 읽음으로 표시
  $('.bg_color_board:nth-child('+index+')').removeClass('unread');
  $('.bg_color_board:nth-child('+index+') .mail_in').removeClass('unread');
  $('.bg_color_board:nth-child('+index+') .mail_in span').hide();

  $('.floatboard_div').toggle();


  var board = board_array[index-1];
  document.getElementById("board_title").innerHTML = board.board_title;
  document.getElementById("board_date").innerHTML = board.board_date;
}

function hidefloatBoard(){
  $('.floatboard_div').hide();
}

$(function(){

  // 새 편지 혹은 글 읽을 때
  $(".mail_in.unread").click(function(){
    // 메일 리스트에서 읽음으로 표시
    // $('.bg_color_mail:nth-child('+(index+1)+')').removeClass('unread');
    // $('.bg_color_mail:nth-child('+(index+1)+') .mail_color img:first-child').hide();
    // $('.bg_color_mail:nth-child('+(index+1)+') .mail_color img:last-child').show();
    // $('.bg_color_mail:nth-child('+(index+1)+') .mail_in').removeClass('unread');
    // $('.bg_color_mail:nth-child('+(index+1)+') .mail_in span').hide();
    $(this).children('span').remove();
    $(this).removeClass('unread');
    $(this).addClass('readed');
    $(this).parent().children('span').children('img:first').hide();
    $(this).parent().children('span').children('img:last').show();
    $(this).parent().parent().parent().parent().removeClass('unread');

    // unread class 지우고 read class추가
    $(this).parent().parent().parent().removeClass('unread');
    $(this).parent().parent().parent().addClass('readed');
    //reply 버튼 나오도록 모두 지우기
    // $('#show2').hide();
  });


  // 이미 읽 편지 읽을 때
  // $(".mail_in.readed").click(function(){
  //   $('#show2').show();
  // });

  // 이미 답장한 편지 읽을 때
  // $(".mail_in.replied").click(function(){
  //   $('#shrinking_email_container').height(590);
  //   $('#show2').show();
  // });


  $("#call_icon").click(function(){
    $('#call_icon img:first-child').show();
    $('#call_icon img:last-child').hide();
    $('#message_icon img:first-child').show();
    $('#message_icon img:last-child').hide();
  });

  $("#message_icon").click(function(){
    $('#call_icon img:first-child').hide();
    $('#call_icon img:last-child').show();
    $('#message_icon img:first-child').hide();
    $('#message_icon img:last-child').show();
  });

  $(".sound_img").click(function(){
    $('img',this).toggle();
  });

});


 $(document).ready(function() {
   var unread=document.getElementsByClassName("unread");
   var readed=document.getElementsByClassName("readed");

  $('#unread_label').click(function(){
    for(var i=0; i<unread.length; i++){
      unread[i].style.display='revert';
    }
    for(var i=0; i<readed.length; i++){
      readed[i].style.display='none';
    }
  });
  $('#all_label').click(function(){
    for(var i=0; i<unread.length; i++){
      unread[i].style.display='revert';
    }
    for(var i=0; i<readed.length; i++){
      readed[i].style.display='revert';
    }
 });
});

function reserve(index){
  var reserve_date = $('#reserve_date').html();
  index++;
  var reserve_time = $('.interview_tr:nth-child('+index+') .reserve_time').html();

  // console.log('reserve_time', reserve_time);
  swal({
    title: reserve_date+' '+reserve_time+' 에 ',
    text: '예약하시겠습니까?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: '예',
      cancelButtonText: '아니오',
      // confirmButtonClass: 'btn btn-success',
      // cancelButtonClass: 'btn btn-danger m-l-10',
      buttonsStyling: false
  }).then(function () {
      swal(
          '예약완료',
          '예약이 완료되었습니다.',
          'success'
      )
  }, function (dismiss) {
      // dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'
      if (dismiss === 'cancel') {
          swal(
              '취소됨',
              '예약이 되지 않았습니다.',
              'error'
          )
      }
  })
}
