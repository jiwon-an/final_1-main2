    // counter_ani(클래스명)
    // last update: 2022-08-16
    // Author CSSLICK
    /** 
      data-speed 속도 설정 옵션 추가
      함수 사용법 단순화
     **/

function counter_ani(el) {
  var count_el = document.querySelectorAll(el);
  var count = 0;
  var c = [];
  var timer = [];
  var duration = 10;
  let speedVal = [];

  for(var i = 0; i < count_el.length; i++) {
    c.push(0);
    timer.push('');
    speedVal[i] = count_el[i].getAttribute('data-speed')
    console.log(speedVal[i])
  }
  console.log(c[0], timer)

  function counter(i){
    timer[i] = setInterval(function () {
      if (c[i] < count_el[i].getAttribute('data-num')) {
        c[i]++;
      } else { clearInterval(timer[i]); }
      count_el[i].innerHTML = c[i];
    }, duration * speedVal[i]);
  }

  for (var _i = 0; _i < count_el.length; _i++) {
    counter(_i)
  }
} //  end fun


function playCount(option) {

  var { el, offset } = option;
  // 요소 위치
  // var offset = 300;
  var section = document.querySelector("#count");
  var el_y = section.offsetTop - offset;

  // 페이지 이동 판정
  let isCount = false;

  window.addEventListener("scroll", function () {
    console.log(document.documentElement.scrollTop);
    if (
      document.body.scrollTop >= el_y ||
      (document.documentElement.scrollTop >= el_y && isCount == false)
    ) {
      counter_ani(el);
      isCount = true;
    }
  }); // scroll

} // playCount
