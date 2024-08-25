document
  .getElementById("quizForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;
    for (let i = 1; i <= 10; i++) {
      const question = document.querySelector(`input[name="q${i}"]:checked`);
      if (question) {
        score += parseInt(question.value);
      }
    }
    let resultVariation = 0;
    let resultText = "";
    if (score <= 18) {
      resultVariation = 1;
      resultText = `
      <div class="result-image-container">
      <img src="img/male1.jpg"><img src="img/female1.jpg">
      </div>
      <h3>فعالیت‌ها و سرگرمی‌های آرامش‌بخش</h3>
<h3>این سرگرمی‌ها را امتحان کنید:</h3>
<p>پیاده روی در طبیعت، استراحتگاه یوگا، تماشای پرندگان، ماهیگیری، نقاشی و باغبانی.</p>
<h3></h3>
<p>شما از محیط‌های آرام و آرام لذت می برید. فعالیت‌هایی که به شما امکان تأمل و آرامش را می‌دهند، بیشتر به شما می‌آیند.</p>
<p>کاوانی ۵۰۰ هزار تومان تخفیف برای ماجراجویی خاص تو در نظر گرفته است که از همین الان می‌توانی از آن استفاده کنی!</p>
<form action="saveEnd.php" method="POST" id="myFrom" style="padding-right: 10px;">
  <label class="first-form">
    نام و نام خانوادگی:
    <input type="text" name="name" placeholder="رضا محمدپور" style="width: 150px;" required>
  </label>
  <br>
  <label class="first-form">
    شماره تماس:
    <input type="text" name="phone" placeholder="091..." style="width: 150px;" required>
  </label>
  <button type="submit" style="background-color: #131313;">بزن بریم!</button>
</form>

`;
    } else if (score <= 25) {
      resultVariation = 2;
      resultText = `
      <div class="result-image-container">
      <img src="img/male2.jpg"><img src="img/female2.jpg">
      </div>
      <h3>ماجراجویی‌های کوچک</h3>
<h3>این سرگرمی‌ها را امتحان کنید:</h3>
<p>تعطیلات ساحلی، گشت‌های شهری، سفرهای با دوچرخه، کمپینگ و عکاسی.</p>
<h3></h3>
<p>شما ترکیبی از ماجراجویی و راحتی را دوست دارید. فعالیت‌هایی که کاوش و آرامش را با هم ترکیب می‌کنند، برای شما ایده‌آل هستند.</p>
<p>کاوانی ۵۰۰ هزار تومان تخفیف برای ماجراجویی خاص تو در نظر گرفته است که از همین الان می‌توانی از آن استفاده کنی!</p>
<form action="saveEnd.php" method="POST" id="myFrom" style="padding-right: 10px;">
  <label class="first-form">
    نام و نام خانوادگی:
    <input type="text" name="name" placeholder="رضا محمدپور" style="width: 150px;" required>
  </label>
  <br>
  <label class="first-form">
    شماره تماس:
    <input type="text" name="phone" placeholder="091..." style="width: 150px;" required>
  </label>
  <button type="submit" style="background-color: #131313;">بزن بریم!</button>
</form>
`;
    } else if (score <= 32) {
      resultVariation = 3;
      resultText = `
      <div class="result-image-container">
      <img src="img/male3.jpg"><img src="img/female3.jpg">
      </div>
      <h3>تجربه‌های فعال و پرانرژی</h3>
<h3>این سرگرمی‌ها را امتحان کنید:</h3>
<p>پیاده‌روی، شنا، غواصی، سفرهای جاده‌ای و آشنایی با فرهنگ‌های جدید.</p>
<h3></h3>
<p>شما با فعالیت و هیجان رشد می کنید.  ماجراجویی‌های پویا که شما را در حرکت و کشف نگه می‌دارند برای شما عالی هستند.</p>
<p>کاوانی ۵۰۰ هزار تومان تخفیف برای ماجراجویی خاص تو در نظر گرفته است که از همین الان می‌توانی از آن استفاده کنی!</p>
<form action="saveEnd.php" method="POST" id="myFrom" style="padding-right: 10px;">
  <label class="first-form">
    نام و نام خانوادگی:
    <input type="text" name="name" placeholder="رضا محمدپور" style="width: 150px;" required>
  </label>
  <br>
  <label class="first-form">
    شماره تماس:
    <input type="text" name="phone" placeholder="091..." style="width: 150px;" required>
  </label>
  <button type="submit" style="background-color: #131313;">بزن بریم!</button>
</form>
`;
    } else {
      resultVariation = 4;
      resultText = `
      <div class="result-image-container">
      <img src="img/male4.jpg"><img src="img/female4.jpg">
      </div>
      <h3>ماجراجویی با آدرنالین بالا</h3>
<h3>این سرگرمی‌ها را امتحان کنید:</h3>
<p>صخره‌نوردی، اسکی، چتربازی، رفتینگ در آب‌های خروشان، دوچرخه‌سواری در کوهستان و رقابت‌های ماجراجویانه.</p>
<h3></h3>
<p>شما به دنبال فعالیت‌های هیجان انگیز و پر انرژی هستید. شما از ماجراجویی‌های شدیدی لذت می‌برید که محدودیت‌های شما را به چالش می‌کشند و آدرنالین را در شما افزایش می‌دهند.</p>
<p>کاوانی ۵۰۰ هزار تومان تخفیف برای ماجراجویی خاص تو در نظر گرفته است که از همین الان می‌توانی از آن استفاده کنی!</p>
<form action="saveEnd.php" method="POST" id="myFrom" style="padding-right: 10px;">
  <label class="first-form">
    نام و نام خانوادگی:
    <input type="text" name="name" placeholder="رضا محمدپور" style="width: 150px;" required>
  </label>
  <br>
  <label class="first-form">
    شماره تماس:
    <input type="text" name="phone" placeholder="091..." style="width: 150px;" required>
  </label>
  <button type="submit" style="background-color: #131313;">بزن بریم!</button>
</form>
`;
    }

    document.getElementById("score").innerHTML = `${resultText}`;
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    setTimeout(() => {
      resultDiv.style.top = "50%";
      resultDiv.style.transform = "translate(-50%, -50%)";
      document.querySelector("form").style.filter = "blur(15px)";
    }, 1);

    //Show content based of user gender 
    const storedGender = sessionStorage.getItem("userGender");
    const genderResultDiv = document.querySelector(".result-image-container");
    if (storedGender === "female" && resultVariation == 1) {
      genderResultDiv.innerHTML = `<img src="img/female1.jpg" alt="Female1">`;
    } else if (storedGender === "male" && resultVariation == 1) {
      genderResultDiv.innerHTML = `<img src="img/male1.jpg" alt="Male1">`;
    } else if (storedGender === "female" && resultVariation == 2) {
      genderResultDiv.innerHTML = `<img src="img/female2.jpg" alt="Female2">`;
    } else if (storedGender === "male" && resultVariation == 2) {
      genderResultDiv.innerHTML = `<img src="img/male2.jpg" alt="Male2">`;
    } else if (storedGender === "female" && resultVariation == 3) {
      genderResultDiv.innerHTML = `<img src="img/female3.jpg" alt="Female3">`;
    } else if (storedGender === "male" && resultVariation == 3) {
      genderResultDiv.innerHTML = `<img src="img/male3.jpg" alt="Male3">`;
    } else if (storedGender === "female" && resultVariation == 4) {
      genderResultDiv.innerHTML = `<img src="img/female4.jpg" alt="Female4">`;
    } else if (storedGender === "male" && resultVariation == 4) {
      genderResultDiv.innerHTML = `<img src="img/male4.jpg" alt="Male4">`;
    }

  });

document.querySelectorAll(".question").forEach((question, index) => {
  const nextQuestion = document.querySelector(`#question${index + 2}`);
  if (nextQuestion) {
    question.addEventListener("change", function () {
      nextQuestion.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});
