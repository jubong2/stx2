window.onload = function () {
  // 비주얼 이동버튼 스크롤 기능
  // 변수선언
  const visualbutton = document.querySelector(".visual-bt");
  visualbutton.addEventListener("click", function () {
    // scrollToSection()는 특정 섹션으로 부드럽게 스크롤 하는 기능
    scrollToSection("#business");
  });
  // scrolltosection ()함수 작성
  function scrollToSection(sectionId) {
    console.log(sectionId);
    // console.lig(sectionId)
    //  sectionId로 지정된 요소를 찾아서 section변수에 저장
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};
