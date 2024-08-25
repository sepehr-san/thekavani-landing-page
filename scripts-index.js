const contentDiv = document.getElementById('content-index');
const changeContentBtn = document.getElementById('change-text-btn');
let state = 0; // 0: initial content, 1: form, 2: submitted
contentDiv.style.opacity = '1';
const initialContent = `<h2 class="delay-opacity" style="text-align: center; font-size: 1rem;">گنج را پیدا کردی</h2>
    <p id="text">آینه را نگاه کن.<br>
      گنج، خود ماجراجوی تو است.<br>
      برای شروع سفر ماجراجویی‌ با کاوانی ۵۰۰ هزار تومان برنده شدی!<br>
      </p>`;
const formHtml = `
<form action="save.php" method="POST" id="myFrom" style="padding-right: 10px; text-align: center;">
  <label class="first-form">
    نام و نام خانوادگی:
    <input type="text" name="name" id="name" placeholder="سینا محمدی‌فرد" style="width: 150px; margin: 5px auto;" required>
  </label>
  <br>
  <label for="gender">جنسیت:</label>
  <input type="radio" name="gender" value="male" id="male" onclick="storeGender('male')" style="margin: 10px auto;"> مرد
  <input type="radio" name="gender" value="female" id="female" onclick="storeGender('female')"> زن
  <br><br>
  <label class="first-form" style="margin: 10px auto;">
    شماره تماس:
    <input type="text" name="phone" id="phone" placeholder="091..." style="width: 150px; margin: 5px auto;" required>
  </label>
  <p style="font-size: .65rem; padding: 10px 21% 0;">از این جایزه می‌توانی برای استفاده از خدمات کاوانی استفاده کنی<p>
  <button type="submit" id="submit-form-first" class="animate">ثبت اطلاعات</button>
</form>
`;



changeContentBtn.addEventListener('click', () => {
  switch (state) {
    case 0:
      setTimeout(() => {
        contentDiv.innerHTML = formHtml;// Your code after the delay
        contentDiv.style.opacity = '1';
    }, 1000);
      // contentDiv.innerHTML = formHtml;
      document.getElementById('change-text-btn').style.display = "none";
      document.getElementById('text').style.opacity = '0';
      document.querySelector('.delay-opacity').style.opacity = '0';
      contentDiv.style.opacity = '0';
      state = 1;
      break;
    case 1:
      const form = document.getElementById('myForm');
      form.submit();
      state = 2;
      
      break;
    case 2:
      window.location.href = 'quiz.html';
      break;
  }
});

// Initial content
contentDiv.innerHTML = initialContent;


// Store The User Gender
function storeGender(sex) {
  sessionStorage.setItem('userGender', sex);  
}

/////////////////////

