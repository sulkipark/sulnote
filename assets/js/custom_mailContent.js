



//이메일하나에 그에 해당하는 이메일내용(email_content) 넣어주기

var i=0;

function readTextFile(file)

{

    var rawFile = new XMLHttpRequest();

    rawFile.open("GET", file, false);

    rawFile.onreadystatechange = function ()

    {

        if(rawFile.readyState === 4)

        {

            if(rawFile.status === 200 || rawFile.status == 0)

            {

                var allText = rawFile.responseText;

                // alert(allText);

                email_array[i].email_content = allText;

                // console.log('email_array[i].email_content', email_array[i].email_content);

                i++;

            }

        }

    }

    rawFile.send(null);

}









var email_array = [];

// email_title, email_content, email_sender, email_receiver, email_attachment1, email_attachment2, email_date



var email1 = {
    email_index: 1,

    email_title: '사업전략 임원회의 공지',

    email_content: '',

    email_sender: '경영지원본부장 오지원',

    email_receiver: '	백신사업부장, 합성의약사업부장, 바이오의약사업부장, 미용성형의약사업부장, 신성장동력TF장',

    email_attachment1: '국내 주력 제품군 투자 계획',
    email_attachment1_src: 'email1_1.png',

    email_attachment2: '그룹사 지원 인력 부서배치 계획',
    email_attachment2_src: 'email1_2.png',

    email_date: '2022. 3. 19. 08:35',
    email_readed: 0, //이메일 읽지 않음 0, 이메일 읽음 1
    email_replied: 0 //이메일 답장 안함 0, 이메일 답장함 1

};



var email2 = {
  email_index: 2,

  email_title: '전사 주력사업 선정 임원회의 관련 보고',

  email_content: '',

  email_sender: '백신사업전략팀장 박정수',

  email_receiver: '백신사업부장 백영진, 신성장동력TF장 김성장(cc)',

  email_attachment1: '2022년 백신사업부 제품개발 현황 보고서',
  email_attachment1_src: 'email2_1.png',
  email_attachment2: '백신시장분석보고서 및 설문조사',
  email_attachment2_src: 'email2_2.png',
  email_date: '2022. 3. 19. 10:05',
  email_readed: 0, //이메일 읽지 않음 0, 이메일 읽음 1
  email_replied: 0 //이메일 답장 안함 0, 이메일 답장함 1

};



var email3 = {
  email_index: 3,
  email_title: '전사 주력사업 선정 임원회의 관련 보고 드립니다.',

  email_content: '',

  email_sender: '합성의약사업전략팀장 양민승',

  email_receiver: '합성의약사업부장 한인경, 신성장동력TF장 김성장(cc)',

  email_attachment1: '2022년 합성의약사업부 제품개발 현황 보고서',
  email_attachment1_src: 'email3_1.png',
  email_attachment2: '[합성의약사업부] 연구보고서 및 설문조사',
  email_attachment2_src: 'email3_2.png',
  email_date: '2022. 3. 19. 10:17',
  email_readed: 0, //이메일 읽지 않음 0, 이메일 읽음 1
  email_replied: 0 //이메일 답장 안함 0, 이메일 답장함 1

};



var email4 = {
  email_index: 4,

  email_title: '전사 주력사업 선정 임원회의 관련 보고의 건',

  email_content: '',

  email_sender: '바이오의약사업전략팀장 권재영',

  email_receiver: '바이오의약사업부장 박성원, 신성장동력TF장 김성장(cc)',

  email_attachment1: '2022년 바이오의약사업부 제품개발 현황 보고서',
  email_attachment1_src: 'email4_1.png',
  email_attachment2: '[바이오의약사업부] 의약저널 및 설문조사',
  email_attachment2_src: 'email4_2.png',
  email_date: '2022. 3. 19. 10:21',
  email_readed: 0, //이메일 읽지 않음 0, 이메일 읽음 1
  email_replied: 0 //이메일 답장 안함 0, 이메일 답장함 1

};

var email5 = {
  email_index: 5,

  email_title: '성장동력 사업분야 선정 임원회의 관련 보고의 건',

  email_content: '',

  email_sender: '미용성형의약사업전략팀장 이권호',

  email_receiver: '미용성형의약사업부장 박한일, 신성장동력TF장 김성장(cc)',

  email_attachment1: '미용성형의약사업부 제품경쟁력 현황보고서',
  email_attachment1_src: 'email5_1.png',
  email_attachment2: '미용성형시장분석 보고서 및 설문조사',
  email_attachment2_src: 'email5_2.png',
  email_date: '2022. 3. 19. 10:55',
  email_readed: 0, //이메일 읽지 않음 0, 이메일 읽음 1
  email_replied: 0 //이메일 답장 안함 0, 이메일 답장함 1

};


//Above you're given an empty array with four objects. Fill the devMountainEmployees array with those four objects. After that console.log the length of the Array and make sure that it's equal to 4.



//your code here

email_array.push(email1, email2, email3, email4, email5);

//이메일 순서대로 내용 넣어주기

readTextFile("email/email1.txt");

readTextFile("email/email2.txt");

readTextFile("email/email3.txt");

readTextFile("email/email4.txt");

readTextFile("email/email5.txt");




// board

var board_array = [];

// email_title, email_content, email_sender, email_receiver, email_attachment1, email_attachment2, email_date



var board1 = {
  board_index: 1,
  board_title: '정부의 의약품산업 지원책',
  board_date: '2022. 3. 19. 10:21'
}

var board2 = {
  board_index: 2,
  board_title: '증권사 제약 산업분석 보고서',
  board_date: '2021. 3. 19. 10:21'
}

var board3 = {
  board_index: 3,
  board_title: '“의약품 유통 선진화＂보고서',
  board_date: '2022. 3. 19. 10:21'
}

var board4 = {
  board_index: 4,
  board_title: 'Future Pharma 내부보고서',
  board_date: '2002. 3. 19. 10:21'
}

board_array.push(board1, board2, board3, board4);
