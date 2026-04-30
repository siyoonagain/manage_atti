// 상품 정보 객체 리스트
// ----------------------------------------------------------
// 작성 예시
// -상품 이름, price는 가격, colors는 색상 배열, sizes는 사이즈 배열
// ----------------------------------------------------------

const products = {
  베베기본티: {
    basePrice: 11520,
    colors: ["블랙", "화이트"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  베베카라티: {
    basePrice: 14400,
    colors: ["블랙", "화이트"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  베베엔젤티: {
    basePrice: 11520,
    colors: ["핑크", "화이트"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  베베단가라티: {
    basePrice: 10080,
    colors: ["블랙", "레드", "오트밀"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  베베둥근카라블라우스여름: {
    basePrice: 21600,
    colors: ["화이트"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  린넨블루머: {
    basePrice: 11520,
    colors: ["블랙", "화이트", "오트밀"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  레이스벙거지모자: {
    basePrice: 15840,
    colors: ["화이트"],
    sizes: { FREE: 0 },
  },

  무지헤어밴드: {
    basePrice: 5760,
    colors: [
      "블랙",
      "화이트",
      "레트",
      "핑크",
      "머스타드",
      "아이",
      "연보라",
      "차콜",
    ],
    sizes: { FREE: 0 },
  },

  도트헤어밴드: {
    basePrice: 5760,
    colors: ["블랙도트", "화이트도트"],
    sizes: { FREE: 0 },
  },

  레이스보넷: {
    basePrice: 8640,
    colors: ["들꽃레이스", "큰꽃레이스", "로즈레이스"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  도트스모크슈트: {
    basePrice: 24480,
    colors: ["블랙도트", "화이트도트"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  체크스모크슈트: {
    basePrice: 23040,
    colors: ["블랙체크", "레드체크"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },
  버블도트세트: {
    basePrice: 25920,
    colors: ["블랙도트", "레드도트"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  린넨보넷: {
    basePrice: 11520,
    colors: ["블랙", "화이트", "오트밀"],
    sizes: { FREE: 0 },
  },

  베베블루머: {
    basePrice: 11520,
    colors: ["체크", "도트"],
    sizes: { bebeS: 0, bebeM: 0 },
  },

  베베여름가디건: {
    basePrice: 15840,
    colors: ["블랙", "화이트"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  레이스프릴보넷: {
    basePrice: 12960,
    colors: ["화이트"],
    sizes: { FREE: 0 },
  },

  뷔스티에블라우스: {
    basePrice: 17280,
    colors: ["화이트"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  바이커레깅스: {
    basePrice: 7200,
    colors: ["블랙", "화이트", "소라", "연핑크", "검정줄", "흰줄"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  슬림기본티: {
    basePrice: 10080,
    colors: ["블랙", "화이트", "소라", "연핑크"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  슬림단가라티: {
    basePrice: 12960,
    colors: ["화이트", "브라운"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  하트베어티: {
    basePrice: 17280,
    colors: ["블랙베어", "레드하트"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  여름와이드팬츠: {
    basePrice: 15840,
    colors: ["블랙줄", "오트밀줄"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  여름방방고쟁이: {
    basePrice: 18720,
    colors: ["검정꽃", "레드꽃", "도트", "들꽃"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  골지랍바반바지: {
    basePrice: 12960,
    colors: ["블랙", "핑크", "브라운"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  브리골지나시티: {
    basePrice: 11520,
    colors: ["블랙", "레드", "브라운"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  딸기나시티: {
    basePrice: 10080,
    colors: ["차콜", "화이트"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  버튼단가라나시티: {
    basePrice: 12960,
    colors: ["블랙", "레드"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  케이블골지나시: {
    basePrice: 10080,
    colors: ["화이트", "말차", "차콜"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  플레이상하세트: {
    basePrice: 28800,
    colors: ["줄무늬", "도트"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  와플니트보넷: {
    basePrice: 8640,
    colors: ["블랙", "화이트"],
    sizes: { FREE: 0 },
  },

  B플레이슈트: {
    basePrice: 20160,
    colors: ["줄무늬", "도트"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  포켓반바지: {
    basePrice: 14400,
    colors: ["화이트", "레드", "네이비", "브라운"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  썸머골지가디건: {
    basePrice: 18720,
    colors: ["블랙", "화이트", "아이", "브라운"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  펀칭레이스세트: {
    basePrice: 28800,
    colors: ["블랙", "화이트"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  발리세트: {
    basePrice: 33120,
    colors: ["화이트", "브라운", "베이지"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  포니T: {
    basePrice: 11520,
    colors: ["화이트", "브라운"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  플리츠고쟁이: {
    basePrice: 15840,
    colors: ["블랙", "옐로우", "소라"],
    sizes: { S: 0, M: 0, L: 0 },
  },

  플리츠슈트: {
    basePrice: 18720,
    colors: ["블랙", "화이트도트", "옐로우", "소라"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },

  프릴리본슈트: {
    basePrice: 31680,
    colors: ["도트", "들꽃"],
    sizes: {
      bebeS: 0,
      bebeM: 0,
    },
  },
};
