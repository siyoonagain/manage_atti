document.addEventListener("DOMContentLoaded", function () {
  const orderList = document.getElementById("orderList");
  const AddBtn = document.getElementById("AddBtn");
  const previewOrderBtn = document.getElementById("previewOrder");
  const cancelBtn = document.getElementById("cancel");
  const confirmBtn = document.getElementById("confirm");

  //   상품 추가하기
  if (AddBtn) {
    AddBtn.addEventListener("click", addProduct);
  } else {
    console.log("AddBtn 요소를 찾을 수 없습니다.");
  }

  //   상품 주문하기
  if (previewOrderBtn) {
    previewOrderBtn.addEventListener("click", function () {
      const userNameEl = document.getElementById("userName");
      const userIdEl = document.getElementById("userId");
      const agreeChk = document.getElementById("agreeChk");

      const userName = userNameEl.value.trim();
      const userId = userIdEl.value.trim().replace(/\s+/g, "");

      if (!userName) {
        showToast("이름을 입력해주세요.");
        userNameEl.focus();
        return;
      }

      if (!userId) {
        showToast("아이디를 입력해주세요.");
        userIdEl.focus();
        return;
      }

      if (!agreeChk.checked) {
        showToast("개인정보 수집 동의가 필요합니다.");
        agreeChk.focus();
        return;
      }

      previewOrder();
    });
  } else {
    console.log("previewOrderBtn 요소를 찾을 수 없습니다.");
  }

  //   취소하기
  if (cancelBtn) {
    cancelBtn.addEventListener("click", closePopup);
  } else {
    console.log("cancelBtn 요소를 찾을 수 없습니다.");
  }

  //   제출하기
  if (confirmBtn) {
    confirmBtn.addEventListener("click", submitOrder);
  } else {
    console.log("confirmBtn 요소를 찾을 수 없습니다.");
  }

  //   상품 추가하기 fucntion
  function addProduct() {
    const count = document.querySelectorAll(".order-box").length + 1;

    let options = `<option value="">상품 선택</option>`;

    for (let name in products) {
      options += `<option value="${name}">${name}</option>`;
    }

    const html = `
  <div class="order-box">
    <div class="top">
      <div class="num">상품 ${count}</div>
      <button class="del" onclick="removeBox(this)">삭제</button>
    </div>

    <div class="item">
      <label class="label">상품명</label>
      <select onchange="changeProduct(this)">
        ${options}
      </select>
      <div class="price">가격 : -</div>
    </div>

    <div class="item">
      <label class="label">컬러옵션</label>
      <select class="color" disabled>
        <option>상품 먼저 선택</option>
      </select>
    </div>

    <div class="item">
      <label class="label">사이즈</label>
      <select class="size" disabled onchange="changeSize(this)">
        <option>상품 먼저 선택</option>
      </select>
    </div>
  </div>
  `;

    orderList.insertAdjacentHTML("beforeend", html);
  }

  //   상품 옵션 변경하기
  window.changeProduct = function (el) {
    const box = el.closest(".order-box");
    const color = box.querySelector(".color");
    const size = box.querySelector(".size");
    const price = box.querySelector(".price");

    const value = el.value;

    color.innerHTML = "";
    size.innerHTML = "";

    if (!value) {
      price.innerText = "가격 : -";
      color.disabled = true;
      size.disabled = true;
      color.innerHTML = "<option>상품 먼저 선택</option>";
      size.innerHTML = "<option>상품 먼저 선택</option>";
      return;
    }

    color.disabled = false;
    size.disabled = false;

    color.innerHTML = `<option value="">컬러 선택</option>`;
    size.innerHTML = `<option value="">사이즈 선택</option>`;

    products[value].colors.forEach((item) => {
      color.innerHTML += `<option value="${item}">${item}</option>`;
    });

    Object.keys(products[value].sizes).forEach((item) => {
      size.innerHTML += `<option value="${item}">${item}</option>`;
    });

    price.innerText =
      "기본가 : " + products[value].basePrice.toLocaleString() + "원";
  };

  //   사이즈 가격별 불러오기 기능
  window.changeSize = function (el) {
    const box = el.closest(".order-box");
    const product = box.querySelector("select").value;
    const price = box.querySelector(".price");

    if (!product || !el.value) return;

    const item = products[product];
    const totalPrice = item.basePrice + item.sizes[el.value];

    price.innerText = "가격 : " + totalPrice.toLocaleString() + "원";
  };

  window.removeBox = function (btn) {
    const box = btn.closest(".order-box");

    const product = box.querySelector("select").value;
    const color = box.querySelector(".color").value;
    const size = box.querySelector(".size").value;

    let msg = "";

    if (product) {
      msg = product;

      if (color) msg += " / " + color;
      if (size) msg += " / " + size;

      msg += " 삭제되었습니다.";
    } else {
      msg = "상품이 삭제되었습니다.";
    }

    box.remove();

    resetNumber();

    showToast(msg);
  };

  function resetNumber() {
    document.querySelectorAll(".order-box").forEach((box, index) => {
      box.querySelector(".num").innerText = "상품 " + (index + 1);
    });
  }

  //   주문 미리보기 팝업
  function previewOrder() {
    const boxes = document.querySelectorAll(".order-box");

    let html = "";
    let total = 0;

    boxes.forEach((box, index) => {
      const product = box.querySelector("select").value;
      const color = box.querySelector(".color").value;
      const size = box.querySelector(".size").value;

      if (product && size) {
        const item = products[product];
        const price = item.basePrice + item.sizes[size];

        total += price;

        html += `
      <div class="pop-item">
        ${index + 1}. ${product}<br>
        컬러 : ${color}<br>
        사이즈 : ${size}<br>
        금액 : ${price.toLocaleString()}원
      </div>
      `;
      }
    });

    if (html == "") {
      alert("상품을 선택해주세요.");
      return;
    }

    /* 배송비 계산 */
    let shipping = total >= 50000 ? 0 : 3500;

    /* 무료배송 안내 */
    let freeMsg = "";

    if (total >= 50000) {
      freeMsg = "🚚 무료배송 적용되었습니다!";
    } else {
      let remain = 50000 - total;
      freeMsg = `🎁 ${remain.toLocaleString()}원 더 담으면 무료배송!`;
    }

    /* 최종금액 */
    let finalTotal = total + shipping;

    document.getElementById("popList").innerHTML = html;

    document.getElementById("totalPrice").innerHTML = `
    상품합계 : ${total.toLocaleString()}원<br>
    배송비 : ${shipping.toLocaleString()}원<br>
    <strong>예상 결제금액 : ${finalTotal.toLocaleString()}원</strong><br><br>
    <span style="color:#e60023;font-weight:bold;">
      ${freeMsg}
    </span>
  `;

    document.getElementById("popup").style.display = "block";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  //   토스트 팝업 기능
  function showToast(msg) {
    const toast = document.getElementById("toast");

    toast.innerText = msg;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  }

  //   제출하기 기능
  // submitOrder 함수 전체 교체

  function submitOrder() {
    const userName = document.getElementById("userName").value.trim();

    const userId = document
      .getElementById("userId")
      .value.trim()
      .replace(/\s+/g, "");

    const agreeChk = document.getElementById("agreeChk").checked;

    if (!userName) {
      showToast("이름을 입력해주세요.");
      document.getElementById("userName").focus();
      return;
    }

    if (!userId) {
      showToast("아이디를 입력해주세요.");
      document.getElementById("userId").focus();
      return;
    }

    if (!agreeChk) {
      showToast("개인정보 수집 동의가 필요합니다.");
      document.getElementById("agreeChk").focus();
      return;
    }

    const boxes = document.querySelectorAll(".order-box");

    let orderData = [];
    let total = 0;

    boxes.forEach((box, index) => {
      const product = box.querySelector("select").value;
      const color = box.querySelector(".color").value;
      const size = box.querySelector(".size").value;

      if (product && color && size) {
        const item = products[product];
        const price = item.basePrice + item.sizes[size];

        total += price;

        orderData.push({
          no: index + 1,
          product: product,
          color: color,
          size: size,
          price: price,
        });
      }
    });

    if (orderData.length === 0) {
      showToast("상품 옵션을 선택해주세요.");
      return;
    }

    // 로딩 팝업 열기
    const loading = document.getElementById("loading");
    const loadingBox = document.querySelector(".loading-box");

    loading.style.display = "block";

    loadingBox.innerHTML = `
    <div class="spinner"></div>
    <div class="loading-text">주문 넣는 중입니다...</div>
  `;

    fetch(
      "https://script.google.com/macros/s/AKfycbxKADK6iNA0I8W1HEON-Up-fKsI9AymRIlSYWBL4Os71xGNXGUSw9GRcoEn2-Xb2ABT4w/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderDate: new Date().toLocaleString("ko-KR"),
          userName: userName,
          userId: userId,
          agree: "동의",
          totalPrice: total,
          items: orderData,
        }),
      },
    )
      .then(() => {
        loadingBox.innerHTML = `
          <div class="success-check">✓</div>
          <div class="loading-text">주문 접수 완료</div>
          <div class="sub-text">
            DM으로 정산서를 보내드릴 예정이니<br>
            잠시만 기다려주세요 😊
          </div>
        `;

        showToast("주문이 정상 접수되었습니다.");

        setTimeout(() => {
          loading.style.display = "none";
          location.reload();
        }, 3000);
      })
      .catch(() => {
        loadingBox.innerHTML = `
      <div class="loading-text">전송 오류가 발생했습니다.</div>
    `;

        setTimeout(() => {
          loading.style.display = "none";
        }, 1500);
      });
  }
  addProduct();

  function toggleNotice() {
    const box = document.getElementById("detailNotice");

    if (box.style.display === "block") {
      box.style.display = "none";
    } else {
      box.style.display = "block";
    }
  }
});
