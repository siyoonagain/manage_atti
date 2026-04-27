// 상품 정보 객체 리스트
// ----------------------------------------------------------
// 작성 예시
// -상품 이름, price는 가격, colors는 색상 배열, sizes는 사이즈 배열
// ----------------------------------------------------------

const products = {
  여름패턴고쟁이: {
    basePrice: 12240,
    colors: [
      "강아지",
      "컬러도트",
      "체크딸기",
      "리본",
      "잔줄",
      "큰줄",
      "반스",
      "플라워",
      "큰도트",
      "체크",
      "딸기",
    ],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      JS: 2880,
      JM: 2880,
    },
  },

  데일리면고쟁이: {
    basePrice: 7200,
    colors: [
      "검정",
      "메란지",
      "인디핑크",
      "올리브",
      "백메란지",
      "빈티지그린",
      "크림",
      "버터옐로우",
      "브라운",
    ],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      JS: 1440,
      JM: 1440,
    },
  },

  세로요루고쟁이: {
    basePrice: 8640,
    colors: ["크림", "올리브노랑", "그린", "스카이블루", "검정"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      JS: 1440,
      JM: 1440,
    },
  },

  구부줄린넨팬츠: {
    basePrice: 10080,
    colors: ["아이", "레드", "올리브", "백메란지", "차콜"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      JS: 4320,
      JM: 4320,
    },
  },

  바스락라이트랙팬츠: {
    basePrice: 18000,
    colors: ["아이", "베이비핑크", "그레이", "검정"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      JS: 1440,
      JM: 1440,
    },
  },

  체크팬츠: {
    basePrice: 8640,
    colors: ["소라", "핑크", "레드", "검정"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      JS: 1440,
      JM: 1440,
    },
  },

  칠부베이직면바지: {
    basePrice: 11520,
    colors: ["베이지", "카키", "인디블루", "아이", "네츄럴크림"],
    sizes: {
      XS: 0,
      S: 0,
      M: 0,
      L: 0,
      XL: 0,
      JS: 1440,
      JM: 1440,
    },
  },

  구부시원면바지: {
    basePrice: 14400,
    colors: ["아이", "카키", "그레이", "네이비"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  베이직청반바지: {
    basePrice: 19440,
    colors: ["연청", "중청", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  슬라브포켓청반바지: {
    basePrice: 18720,
    colors: ["연청", "중청"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  프릴논페청반바지: {
    basePrice: 20160,
    colors: ["연청", "논페이드"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  스판데님반바지: {
    basePrice: 11520,
    colors: ["연청", "중청", "진청", "화이트"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  스티치코튼반바지: {
    basePrice: 16560,
    colors: ["화이트", "네츄럴크림", "핑크", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  바스락카고반바지: {
    basePrice: 10800,
    colors: ["베이지", "카키", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  하트스마일바스락반바지: {
    basePrice: 10080,
    colors: ["레드", "검정", "민트", "형광노랑", "형광핑크", "형광오렌지"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  파이핑바스락반바지: {
    basePrice: 10080,
    colors: ["곤색", "아이", "스카이블루", "올리브카키"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  코튼카고반바지: {
    basePrice: 15840,
    colors: ["카키", "베이지", "아이"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  N로고모자: {
    basePrice: 11520,
    colors: ["크림", "검정", "노랑", "소라"],
    sizes: {
      FREE: 0,
    },
  },

  볼캡1607: {
    basePrice: 11520,
    colors: ["검정", "겨자", "크림"],
    sizes: {
      FREE: 0,
    },
  },

  아웃도어모자: {
    basePrice: 11520,
    colors: ["그레이", "오렌지"],
    sizes: {
      FREE: 0,
    },
  },

  웨이브버킷햇: {
    basePrice: 5760,
    colors: ["연베이지", "진베이지"],
    sizes: {
      FREE: 0,
    },
  },

  스트랩보넷모자: {
    basePrice: 12960,
    colors: ["진베이지", "연베이지"],
    sizes: {
      FREE: 0,
    },
  },

  하트리본선글라스: {
    basePrice: 3600,
    colors: ["흰색", "핑크", "검정"],
    sizes: {
      FREE: 0,
    },
  },

  포켓선글라스: {
    basePrice: 6480,
    colors: ["노랑", "초록", "핑크"],
    sizes: {
      FREE: 0,
    },
  },

  네모라운드선글라스: {
    basePrice: 3600,
    colors: ["검정", "베이지"],
    sizes: {
      FREE: 0,
    },
  },

  몬몬선글라스: {
    basePrice: 5040,
    colors: ["핑크", "소라", "보라", "아이", "크림", "검정"],
    sizes: {
      FREE: 0,
    },
  },

  투명라인선글라스: {
    basePrice: 3600,
    colors: ["검정", "그린", "핑크"],
    sizes: {
      FREE: 0,
    },
  },

  하트케이스목걸이선글라스: {
    basePrice: 10080,
    colors: ["핑크", "크림", "검정"],
    sizes: {
      FREE: 0,
    },
  },

  목걸이썬글라스: {
    basePrice: 9360,
    colors: ["01", "02", "03", "04", "05", "06"],
    sizes: {
      FREE: 0,
    },
  },

  곰선글라스: {
    basePrice: 3600,
    sizes: {
      FREE: 0,
    },
    colors: ["검정", "브라운", "핑크", "오렌지"],
  },

  리본자수니삭스: {
    basePrice: 7200,
    colors: ["2족세트"],
    sizes: {
      FREE: 0,
    },
  },

  레이스리본양말: {
    basePrice: 14400,
    colors: ["2족세트"],
    sizes: {
      FREE: 0,
    },
  },

  라벨린넨면반바지: {
    basePrice: 10080,
    colors: ["아이", "검정", "크림", "옐로우베이지"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  포인트라벨반바지: {
    basePrice: 11520,
    colors: [
      "도트",
      "레드줄",
      "베이지줄",
      "반스",
      "꽃",
      "무지레드",
      "딸기",
      "네이비줄",
      "체크",
    ],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  라벨카고반바지: {
    basePrice: 11520,
    // (ㅇ 14400원),
    colors: ["백메란지", "검정", "메란지", "인디블루", "카키"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  핀턱쥬리반바지: {
    basePrice: 9360,
    colors: ["카키", "곤색", "핑크", "백메란지", "메란지", "빈티지블루"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  쥬리스티치반바지: {
    basePrice: 9360,
    colors: ["크림", "인디블루", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  밴딩폴리츠통팬츠: {
    basePrice: 10080,
    colors: ["검정", "아이", "베이지"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  하트주머니반바지: {
    basePrice: 15840,
    colors: ["아이", "핑크", "도트"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  스판날라리7부: {
    basePrice: 9360,
    colors: ["아이", "검정", "인디블루"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  리본트임날라리7부: {
    basePrice: 11520,
    colors: ["검정", "크림", "파스텔블루"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  컬러폴리츠나팔7부: {
    basePrice: 11520,
    colors: [
      "흰도트",
      "검정도트",
      "흰딸기",
      "검정딸기",
      "핑크",
      "검정",
      "검정꽃",
    ],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  썸머인디고나팔7부: {
    basePrice: 10080,
    colors: ["연청", "중청"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  패턴나팔7부: {
    basePrice: 11520,
    colors: [
      "체크",
      "검정도트",
      "딸기",
      "핑크리본",
      "체크꽃",
      "하트",
      "검정리본",
    ],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  로망체크고쟁이: {
    basePrice: 11520,
    colors: ["핑크", "베이지", "파스텔블루"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  여름프릴쉬폰조거: {
    basePrice: 15840,
    colors: ["백메란지", "핑크"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  엉덩이하트조거: {
    basePrice: 10800,
    colors: ["검정", "백메란지", "코랄", "크림"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  플레어치마바지: {
    basePrice: 10800,
    colors: ["체크", "하트", "스트라이프리본", "도트리본"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  실켓치마바지: {
    basePrice: 11520,
    colors: ["검정", "레드", "핑크", "아이"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  마를렌5부치마레깅스: {
    basePrice: 10080,
    colors: ["크림", "핑크", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  오로라스커트: {
    basePrice: 23040,
    colors: ["아이", "민핑", "진핑"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 4320, JM: 4320 },
  },

  프리밴딩쫄레깅스: {
    basePrice: 7200,
    colors: ["아이", "소라", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  하나더레깅스: {
    basePrice: 12960,
    colors: ["크림핑크", "아이큰줄", "검정잔줄"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  무지개골지레깅스: {
    basePrice: 7920,
    colors: ["연핑", "진핑", "크림"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  딸기도트레깅스: {
    basePrice: 8640,
    colors: ["빨강도트", "검정도트", "딸기"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  원폴원모달속바지: {
    basePrice: 10080,
    colors: ["검정", "크림", "아이"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  샤크실켓반팔티: {
    basePrice: 9360,
    colors: ["연베이지", "연그레이", "블루"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  빈티지카반팔티: {
    basePrice: 10080,
    colors: ["아이", "크림", "오트밀"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  바캉스베어티: {
    basePrice: 9360,
    colors: ["아이", "백메란지"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  미니카반팔티: {
    basePrice: 10800,
    colors: ["아이", "크림", "블랙"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  베캉스공룡반팔티: {
    basePrice: 9360,
    colors: ["스카이블루", "아이", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  다이노반팔티: {
    basePrice: 10080,
    colors: ["크림", "인디핑크", "인디블루"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  리틀다이노반팔티: {
    basePrice: 10800,
    colors: ["크림", "검정", "핑크"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  빈티지캠핑반팔티: {
    basePrice: 8640,
    colors: ["크림", "핑크", "메란지"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  챔스탑바반팔티: {
    basePrice: 8640,
    colors: ["카키", "검정", "버건디"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  마리합바반팔티: {
    basePrice: 7920,
    colors: ["검정", "네이비", "스카이블루"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  아이스크림반팔티: {
    basePrice: 7200,
    colors: ["아이", "핑크", "민트카키", "초코"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  챔피언반팔티: {
    basePrice: 7920,
    colors: ["메란지", "네이비", "옐로우"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  뉴욕입체반팔티: {
    basePrice: 7920,
    colors: ["아이", "검정", "버건디", "인디블루"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  해피베어반팔티: {
    basePrice: 7920,
    colors: ["크림", "올리브", "핑크", "진베이지"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  러브띵스반팔티: {
    basePrice: 7920,
    colors: ["아이", "그린", "베이비블루"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  단가라골지합바티: {
    basePrice: 12240,
    colors: ["노랑", "핑크", "블루", "아이"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  절개스티치반팔티: {
    basePrice: 7200,
    colors: ["검정", "네이비", "크림", "아이"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  빅줄곰자수반팔티: {
    basePrice: 12960,
    colors: ["곤색소라", "크림소라", "연두크림", "핑크그린"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  에센셜나그랑반팔: {
    basePrice: 8640,
    colors: ["핑크", "소라", "보라"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  하트스마일단가라티: {
    basePrice: 10800,
    colors: ["네이비", "검정", "버건디"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  곰자수반팔티: {
    basePrice: 8640,
    colors: ["네이비", "핑크", "노랑", "아이"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  멀티카라단가라반팔: {
    basePrice: 15120,
    colors: ["크림", "네이비", "메란지"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  포켓데님반팔티: {
    basePrice: 7200,
    colors: ["아이", "크림"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  베라자수단가라티: {
    basePrice: 10800,
    colors: ["검정", "빨강", "파랑"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  실켓가이름바반팔: {
    basePrice: 8640,
    colors: ["아이", "크림", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  끝지라벨반팔티: {
    basePrice: 8640,
    colors: ["베이비블루", "백메란지", "메란지"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  마름모로고단가라티: {
    basePrice: 10800,
    colors: ["검정", "초록", "카멜"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  바스락탁반팔티: {
    basePrice: 17280,
    colors: ["검정", "아이", "스카이블루", "올리브카키"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  파스텔골지티: {
    basePrice: 10800,
    colors: ["아이", "올리브", "스카이블루"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  무지개골지날라리티: {
    basePrice: 9360,
    colors: ["진핑", "연핑", "크림"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  애센셜날라리티: {
    basePrice: 7200,
    colors: ["검정", "아이"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  딸기나그랑반팔티: {
    basePrice: 9360,
    colors: ["초록", "핑크", "레드"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  요루슬라브날라리티: {
    basePrice: 7920,
    colors: ["검정", "아이", "핑크"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  리본롤단가라나시: {
    basePrice: 10800,
    colors: ["핑크", "소라", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  골지프릴나시: {
    basePrice: 12240,
    colors: ["스카이블루", "아이", "핑크"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  서링퍼프날라리티: {
    basePrice: 10080,
    colors: ["아이", "핑크", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  하트포켓반팔티: {
    basePrice: 10080,
    colors: ["크림", "핑크", "레드"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  레이스하트프릴티: {
    basePrice: 12240,
    colors: ["아이", "민핑", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  날라리홈반팔티: {
    basePrice: 10800,
    colors: ["검정줄", "핑크줄", "무지검정", "무지크림"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  하트펀칭반팔티: {
    basePrice: 10800,
    colors: ["검정", "핑크", "아이"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  딸기도트날라리티: {
    basePrice: 12960,
    colors: ["빨강도트", "검정도트", "딸기"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  단가라골지나시: {
    basePrice: 10800,
    colors: ["검정", "아이", "베이지"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  레이어드나시: {
    basePrice: 5760,
    colors: ["아이", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  여름오버밋반팔: {
    basePrice: 5760,
    colors: ["아이", "검정", "크림"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  원앤원반팔티: {
    basePrice: 15120,
    colors: ["아이", "노랑", "크림", "핑크"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  미니골지원피스티: {
    basePrice: 15840,
    colors: ["레드", "노랑", "핑크", "크림"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  테니스나시원피스: {
    basePrice: 12960,
    colors: ["핑크", "네이비"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  채색베어통원피스: {
    basePrice: 15840,
    colors: ["크림", "핑크", "노랑", "환타"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  세라나시원피스: {
    basePrice: 20160,
    colors: ["크림", "곤색"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  유니콘세일러원피스: {
    basePrice: 17280,
    colors: ["핑크", "크림", "곤색"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  브이넥테니스상하: {
    basePrice: 16560,
    colors: ["소라", "초록", "핑크"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  곰자수줄반팔상하: {
    basePrice: 18720,
    colors: ["네이비", "인디소라", "베이지", "민트"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  카라곰자수상하: {
    basePrice: 17280,
    colors: ["백메란지", "곤색", "노랑", "핑크"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  요루폼폼상하: {
    basePrice: 16560,
    colors: ["크림", "핑크", "모카", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 4320, JM: 4320 },
  },

  리본반팔나팔상하: {
    basePrice: 14400,
    colors: ["크림", "핑크", "노랑", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  여름탑아트상하26: {
    basePrice: 15120,
    colors: ["아이", "크림", "노랑"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  과일자수찹바상하: {
    basePrice: 16560,
    colors: ["수박", "딸기", "파인애플"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  책책과일상하: {
    basePrice: 16560,
    colors: ["딸기", "파인애플", "수박"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  야구챔스상하: {
    basePrice: 15840,
    colors: ["곤색", "백메란지", "내츄럴베이지"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  바이크곰상하: {
    basePrice: 15120,
    colors: ["백메란지", "크림", "버터옐로우"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  스마일입체상하: {
    basePrice: 17280,
    colors: ["노랑", "핑크", "크림", "백메란지"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  모어자수배색상하: {
    basePrice: 17280,
    colors: ["백메란지", "버터옐로우", "핑크", "크림버건디", "크림초코"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  여름라벨상하: {
    basePrice: 14400,
    // (ㅇ 17280원),
    colors: ["오트밀", "딥레드", "노랑"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  여름스티치상하: {
    basePrice: 15120,
    colors: ["백메란지", "검정", "크림", "파랑", "빨강"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 2880, JM: 2880 },
  },

  타이블나염상하: {
    basePrice: 19440,
    colors: ["핑크소라", "보라연두"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 4320, JM: 4320 },
  },

  기능성발토시: {
    basePrice: 3600,
    colors: ["흰색", "검정"],
    sizes: { XS: 0, S: 0, M: 0, L: 0, XL: 0, JS: 1440, JM: 1440 },
  },

  // 체커보드반바지: {
  //   basePrice: 11520,
  //   colors: ["올리브", "소라", "블랙(+1,440)"],
  //   colorPrice: {
  //     블랙: 1440,
  //   },
  //   sizes: {
  //     XS: 0,
  //     S: 0,
  //     M: 0,
  //     L: 0,
  //     XL: 0,
  //   },
  // },
};
