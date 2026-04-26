document.addEventListener("DOMContentLoaded", function () {
  const orderList = document.getElementById("orderList");
  const AddBtn = document.getElementById("AddBtn");
  const previewOrderBtn = document.getElementById("previewOrder");
  const cancelBtn = document.getElementById("cancel");
  const confirmBtn = document.getElementById("confirm");

  /* ---------------------------
     공통 함수
  --------------------------- */

  function qs(selector, parent = document) {
    return parent.querySelector(selector);
  }

  function qsa(selector, parent = document) {
    return parent.querySelectorAll(selector);
  }

  function formatPrice(num) {
    return Number(num).toLocaleString() + "원";
  }

  function getItemPrice(productName, colorName, sizeName) {
    const item = products[productName];
    if (!item) return 0;

    const basePrice = Number(item.basePrice) || 0;
    const colorExtra = Number(item.colorPrice?.[colorName]) || 0;
    const sizeExtra = Number(item.sizes?.[sizeName]) || 0;

    return basePrice + colorExtra + sizeExtra;
  }

  function showToast(msg) {
    const toast = qs("#toast");

    toast.innerText = msg;
    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  }

  function resetNumber() {
    qsa(".order-box").forEach((box, index) => {
      qs(".num", box).innerText = "상품 " + (index + 1);
    });
  }

  function closePopup() {
    qs("#popup").style.display = "none";
  }

  /* ---------------------------
     상품 추가
  --------------------------- */

  function addProduct() {
    const count = qsa(".order-box").length + 1;

    let options = `<option value="">상품 선택</option>`;

    for (let name in products) {
      options += `<option value="${name}">${name}</option>`;
    }

    const html = `
      <div class="order-box">
        <div class="top">
          <div class="num">상품 ${count}</div>
          <button type="button" class="del" onclick="removeBox(this)">삭제</button>
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
          <select class="color" disabled onchange="changeSize(this)">
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

  /* ---------------------------
     상품 변경
  --------------------------- */

  window.changeProduct = function (el) {
    const box = el.closest(".order-box");

    const product = el.value;
    const color = qs(".color", box);
    const size = qs(".size", box);
    const price = qs(".price", box);

    color.innerHTML = "";
    size.innerHTML = "";

    if (!product) {
      color.disabled = true;
      size.disabled = true;

      color.innerHTML = `<option>상품 먼저 선택</option>`;
      size.innerHTML = `<option>상품 먼저 선택</option>`;
      price.innerText = "가격 : -";
      return;
    }

    const item = products[product];

    color.disabled = false;
    size.disabled = false;

    color.innerHTML = `<option value="">컬러 선택</option>`;
    size.innerHTML = `<option value="">사이즈 선택</option>`;

    item.colors.forEach((v) => {
      color.innerHTML += `<option value="${v}">${v}</option>`;
    });

    Object.keys(item.sizes).forEach((v) => {
      size.innerHTML += `<option value="${v}">${v}</option>`;
    });

    price.innerText = "기본가 : " + formatPrice(item.basePrice);
  };

  /* ---------------------------
     옵션 가격 반영
  --------------------------- */

  window.changeSize = function (el) {
    const box = el.closest(".order-box");

    const product = qs("select", box).value;
    const color = qs(".color", box).value;
    const size = qs(".size", box).value;
    const price = qs(".price", box);

    if (!product || !size) return;

    const totalPrice = getItemPrice(product, color, size);

    price.innerText = "가격 : " + formatPrice(totalPrice);
  };

  /* ---------------------------
     삭제
  --------------------------- */

  window.removeBox = function (btn) {
    const box = btn.closest(".order-box");

    const product = qs("select", box).value;
    const color = qs(".color", box).value;
    const size = qs(".size", box).value;

    let msg = "상품이 삭제되었습니다.";

    if (product) {
      msg = product;

      if (color) msg += " / " + color;
      if (size) msg += " / " + size;

      msg += " 삭제되었습니다.";
    }

    box.remove();

    resetNumber();
    showToast(msg);
  };

  /* ---------------------------
     주문 데이터 추출
  --------------------------- */

  function getOrderData() {
    const boxes = qsa(".order-box");

    let total = 0;
    let orderData = [];

    boxes.forEach((box, index) => {
      const product = qs("select", box).value;
      const color = qs(".color", box).value;
      const size = qs(".size", box).value;

      if (product && color && size) {
        const price = getItemPrice(product, color, size);

        total += price;

        orderData.push({
          no: index + 1,
          product,
          color,
          size,
          price,
        });
      }
    });

    return {
      items: orderData,
      total: total,
    };
  }

  /* ---------------------------
     미리보기
  --------------------------- */

  function previewOrder() {
    const result = getOrderData();

    if (result.items.length === 0) {
      showToast("상품 옵션을 선택해주세요.");
      return;
    }

    let html = "";

    result.items.forEach((item, index) => {
      html += `
        <div class="pop-item">
          ${index + 1}. ${item.product}<br>
          컬러 : ${item.color}<br>
          사이즈 : ${item.size}<br>
          금액 : ${formatPrice(item.price)}
        </div>
      `;
    });

    const shipping = result.total >= 50000 ? 0 : 3500;
    const finalTotal = result.total + shipping;

    let freeMsg = "";

    if (result.total >= 50000) {
      freeMsg = "🚚 무료배송 적용되었습니다!";
    } else {
      freeMsg =
        "🎁 " +
        formatPrice(50000 - result.total).replace("원", "") +
        "원 더 담으면 무료배송!";
    }

    qs("#popList").innerHTML = html;

    qs("#totalPrice").innerHTML = `
      상품합계 : ${formatPrice(result.total)}<br>
      배송비 : ${formatPrice(shipping)}<br>
      <strong>예상 결제금액 : ${formatPrice(finalTotal)}</strong><br><br>
      <span style="color:#e60023;font-weight:bold;">
        ${freeMsg}
      </span>
    `;

    qs("#popup").style.display = "block";
  }

  /* ---------------------------
     주문 제출
  --------------------------- */

  function submitOrder() {
    const userName = qs("#userName").value.trim();
    const userId = qs("#userId").value.trim().replace(/\s+/g, "");
    const agreeChk = qs("#agreeChk").checked;
    const apiUrl = document.body.dataset.apiUrl;

    if (!userName) {
      showToast("이름을 입력해주세요.");
      qs("#userName").focus();
      return;
    }

    if (!userId) {
      showToast("아이디를 입력해주세요.");
      qs("#userId").focus();
      return;
    }

    if (!agreeChk) {
      showToast("개인정보 수집 동의가 필요합니다.");
      return;
    }

    const result = getOrderData();

    if (result.items.length === 0) {
      showToast("상품 옵션을 선택해주세요.");
      return;
    }

    const loading = qs("#loading");
    const loadingBox = qs(".loading-box");

    loading.style.display = "block";

    loadingBox.innerHTML = `
      <div class="spinner"></div>
      <div class="loading-text">주문 넣는 중입니다...</div>
    `;

    fetch(apiUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderDate: new Date().toLocaleString("ko-KR"),
        userName,
        userId,
        agree: "동의",
        totalPrice: result.total,
        items: result.items,
      }),
    })
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
          location.reload();
        }, 2500);
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

  /* ---------------------------
     공지 토글
  --------------------------- */

  window.toggleNotice = function () {
    const box = qs("#detailNotice");

    box.style.display = box.style.display === "block" ? "none" : "block";
  };

  /* ---------------------------
     이벤트 연결
  --------------------------- */

  if (AddBtn) AddBtn.addEventListener("click", addProduct);
  if (previewOrderBtn) previewOrderBtn.addEventListener("click", previewOrder);
  if (cancelBtn) cancelBtn.addEventListener("click", closePopup);
  if (confirmBtn) confirmBtn.addEventListener("click", submitOrder);

  /* 최초 1개 생성 */
  addProduct();
});
