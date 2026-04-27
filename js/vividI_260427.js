// 상품 정보 객체 리스트
// ----------------------------------------------------------
// 작성 예시
// -상품 이름, price는 가격, colors는 색상 배열, sizes는 사이즈 배열
// ----------------------------------------------------------

const products = {
  크리미후드_베베: {
    basePrice: 24480,
    colors: ["아이", "소라체크"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  체리슈트_베베: {
    basePrice: 17820,
    colors: ["빨강", "베이지"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  하트땡슈트_베베: {
    basePrice: 18720,
    colors: ["도트", "하트"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  세인트슈트_베베: {
    basePrice: 21600,
    colors: ["네이비줄", "핑크"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  그림나시블랑_베베: {
    basePrice: 21600,
    colors: ["소라", "아이"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  그림바지_베베: {
    basePrice: 12960,
    colors: ["소라", "아이"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  베리애플티_베베: {
    basePrice: 11520,
    colors: ["청사과", "딸기"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
      XS: 0,
    },
  },

  지지미체크반바지_베베: {
    basePrice: 8640,
    colors: ["소라", "레드", "올리브", "블랙"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  올리브반바지_베베: {
    basePrice: 8640,
    colors: ["블랙", "아이", "올리브", "레드"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  하트골지나시_베베: {
    basePrice: 10080,
    colors: ["크림", "소라", "먹색"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  체커보드반바지_베베: {
    basePrice: 11520,
    colors: ["올리브", "소라", "블랙(+1,440)"],
    colorPrice: {
      블랙: 1440,
    },
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  A블라우스_베베: {
    basePrice: 15840,
    colors: ["소라", "아이"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  블라썸팬츠_베베: {
    basePrice: 14400,
    colors: ["소라", "아이"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  쿨스판나시_베베: {
    basePrice: 10080,
    colors: ["아이", "핑크"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  빠삐용셔츠_베베: {
    basePrice: 21600,
    colors: ["블루줄", "베이지줄"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  보보숏츠_베베: {
    basePrice: 10080,
    colors: ["버터", "스톤블루"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  포켓코튼반바지_베베: {
    basePrice: 12960,
    colors: ["아이", "소라", "베이지"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  아임라그란티_베베: {
    basePrice: 11520,
    colors: ["밤색", "소라"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  배색포인트티_베베: {
    basePrice: 14400,
    colors: ["아이", "소라"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  큐트블루머_베베: {
    basePrice: 17280,
    colors: ["아이", "연두"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  썸머쿨가디건_베베: {
    basePrice: 14400,
    colors: ["아이", "레드줄"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  카라멜멜빵_베베: {
    basePrice: 23040,
    colors: ["검정", "소라"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  마일세라슈트_베베: {
    basePrice: 30240,
    colors: ["아이", "곤색"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  꿀벌블루머_베베: {
    basePrice: 20160,
    colors: ["카멜", "검정"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  쿨스판바지_베베: {
    basePrice: 10080,
    colors: ["블루", "퍼플"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  지짐이고쟁이_베베: {
    basePrice: 11520,
    colors: ["소라체크", "아이"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  유니콘반팔티_베베: {
    basePrice: 15840,
    colors: ["아이", "인디핑크"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  아이스크림티_베베: {
    basePrice: 12960,
    colors: ["블루", "레드"],
    sizes: {
      "6M": 0,
      "12M": 0,
      "18M": 0,
    },
  },

  썸머벙거지: {
    basePrice: 15840,
    colors: ["아이", "블루줄"],
    sizes: {
      FREE: 0,
    },
  },

  썸머매쉬보넷: {
    basePrice: 14400,
    colors: ["버터", "핑크"],
    sizes: {
      FREE: 0,
    },
  },

  블러썸보넷: {
    basePrice: 12960,
    colors: ["아이", "소라"],
    sizes: {
      FREE: 0,
    },
  },

  썸머골지바니비니: {
    basePrice: 11520,
    colors: ["아이", "검정"],
    sizes: {
      FREE: 0,
    },
  },

  썸머골지삭스: {
    basePrice: 7200,
    colors: ["아이", "핑크", "검정"],
    sizes: {
      FREE: 0,
    },
  },

  도트밴드: {
    basePrice: 10080,
    colors: ["브라운", "소라"],
    sizes: {
      FREE: 0,
    },
  },

  세라턱받이: {
    basePrice: 12960,
    colors: ["아이", "블루"],
    sizes: {
      FREE: 0,
    },
  },

  베리애플티: {
    basePrice: 11520,
    colors: ["청사과", "딸기"],
    sizes: {
      XS: 0,
      S: 0,
    },
  },

  맘베리애플티: {
    basePrice: 11520,
    colors: ["청사과", "딸기"],
    sizes: {
      XS: 0,
      S: 0,
    },
  },

  프릴스카프: {
    basePrice: 12960,
    colors: ["아이", "레드"],
    sizes: {
      FREE: 0,
    },
  },

  지지미체크반바지: {
    basePrice: 8640,
    colors: ["소라", "레드", "올리브", "블랙"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  라라썸머팬츠: {
    basePrice: 10080,
    colors: ["아이", "레드", "올리브", "백메란지", "차콜"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  하트땡티셔츠: {
    basePrice: 14400,
    colors: ["하트", "도트"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  포인트데님반바지: {
    basePrice: 20160,
    colors: ["연청", "진청"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  후들골지가디건: {
    basePrice: 15840,
    colors: ["아이", "그레이"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  태닝토끼반팔티: {
    basePrice: 12960,
    colors: ["진블루", "백멜란지"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  버블바람막이: {
    basePrice: 21600,
    colors: ["소라줄", "아이"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  체커보드반바지: {
    basePrice: 11520,
    colors: ["올리브", "소라", "블랙(+1,440)"],
    colorPrice: {
      블랙: 1440,
    },
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  탱크나시티: {
    basePrice: 11520,
    colors: ["크림", "레드", "소라", "브라운"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  썸머슬랍롤업: {
    basePrice: 21600,
    colors: ["백아이", "연청"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  밀키블라우스: {
    basePrice: 25920,
    colors: ["노랑꽃", "아이"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  러브래빗나시티: {
    basePrice: 12960,
    colors: ["크림", "차콜"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  심플코튼반바지: {
    basePrice: 15840,
    colors: ["블랙", "아이"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  라라하트반팔티: {
    basePrice: 11520,
    colors: ["아이", "레드", "올리브", "차콜"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  마일반팔난방: {
    basePrice: 25920,
    colors: ["아이", "네이비"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  마일반바지: {
    basePrice: 12960,
    colors: ["아이", "네이비"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  마일플리츠스커트: {
    basePrice: 21600,
    colors: ["아이", "레드"],
    colorPrice: {
      아이: 2880,
    },
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  틸타반팔셔츠: {
    basePrice: 21600,
    colors: ["아이", "레드"],
    colorPrice: {
      아이: 2880,
    },
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  틸타원피스: {
    basePrice: 21600,
    colors: ["아이", "레드"],
    colorPrice: {
      아이: 2880,
    },
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  체리반팔티: {
    basePrice: 15840,
    colors: ["레드", "핑크"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  하트미니스커트: {
    basePrice: 24480,
    colors: ["연청", "레드"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  하트미니스커트: {
    basePrice: 24480,
    colors: ["연청", "레드"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  구부찰랑팬츠: {
    basePrice: 18720,
    colors: ["연올리브", "네이비"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  유니콘반팔티: {
    basePrice: 15840,
    colors: ["아이", "인디핑크"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  아이스크림티: {
    basePrice: 12960,
    colors: ["블루", "레드"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  세인트반팔티: {
    basePrice: 12960,
    colors: ["네이비줄", "핑크"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  맘세인트반팔티: {
    basePrice: 23040,
    colors: ["네이비줄", "핑크"],
    sizes: {
      FREE: 0,
    },
  },

  코튼데일리팬츠: {
    basePrice: 12960,
    colors: ["크림", "올리브", "핑크", "블루"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  케이크반팔티: {
    basePrice: 14400,
    colors: ["아이", "핑크"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  케이크반팔티: {
    basePrice: 14400,
    colors: ["아이", "핑크"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  비죠클래식원피스: {
    basePrice: 25920,
    colors: ["연베이지", "연그레이"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  클래식카브라팬츠: {
    basePrice: 20160,
    colors: ["연베이지", "연그레이"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  어도러블티: {
    basePrice: 12960,
    colors: ["아이", "블랙"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  둥글숏팬츠: {
    basePrice: 14400,
    colors: ["바닐라", "올리브"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  버블조거팬츠: {
    basePrice: 12960,
    colors: ["아이", "소라줄"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  프루츠에코백: {
    basePrice: 17280,
    colors: ["핑크", "아이", "노랑", "네이비"],
    sizes: {
      FREE: 0,
    },
  },

  프루츠캡모자: {
    basePrice: 20160,
    colors: ["아이", "소라", "차콜"],
    sizes: {
      FREE: 0,
    },
  },

  펜슬린넨셔츠: {
    basePrice: 27360,
    colors: ["아이", "소라"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  배색포인트반팔티: {
    basePrice: 14400,
    colors: ["아이", "소라"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },

  배색포인트반바지: {
    basePrice: 14400,
    colors: ["아이", "소라"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
    },
  },
};
