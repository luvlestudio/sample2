window.onload = () => {
  var newSwiper = new Swiper(".swiper-new-container", {
    slidesPerView: 5,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-new-pagination",
      clickable: true,
    },
  });

  const bidPicture = document.getElementById("big-picture");
  const documentBody = document.querySelector("body");

  const galleryImages = document.querySelectorAll(".swiper-slide img");
  galleryImages.forEach((img) => {
    img.onclick = () => {
      bidPicture.src = img.src;
    };
  });

  bidPicture.onclick = () => {
    if (bidPicture.classList.contains("enlarged")) {
      bidPicture.classList.remove("enlarged");
      documentBody.style.overflow = "auto";
      document.querySelector(".modal-background").remove();
    } else {
      bidPicture.classList.add("enlarged");
      documentBody.style.overflow = "hidden";

      const modalBackground = document.createElement("div");
      modalBackground.className = "modal-background";
      modalBackground.onclick = () => {
        bidPicture.classList.remove("enlarged");
        documentBody.style.overflow = "auto";
        modalBackground.remove();
      };

      documentBody.appendChild(modalBackground);
    }
  };

  // 공유하기 영역
  const btnShareKa = document.querySelector(".shareKt");
  btnShareKa.addEventListener("click", () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "김지호 ♥ 임수아의 모바일 청첩장",
        description: "결혼식에 초대합니다♡",
        imageUrl: "https://i.imgur.com/GlDdP7q.png",
        imageWidth: 1200,
        imageHeight: 630,
        link: {
          mobileWebUrl: "https://sample2.luvle.co.kr",
          webUrl: "https://sample2.luvle.co.kr",
        },
      },
      buttons: [
        {
          title: "자세히 보기",
          link: {
            mobileWebUrl: "https://sample2.luvle.co.kr",
            webUrl: "https://sample2.luvle.co.kr",
          },
        },
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true,
    });
  });

  const shareViaSMSBtn = document.querySelector(".shareTwoG");
  shareViaSMSBtn.addEventListener("click", () => {
    const message = "모바일 청첩장을 확인해주세요! " + window.location.href;
    const link = "sms:?body=" + encodeURIComponent(message);
    window.location.href = link;
  });
};
