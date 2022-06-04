//Тоглогчийн ээлжийг хадгалах хувьсагч, Нэгдүгээр тоглогчийг 0, Хоёрдугаар тоглогчийг 1 гэж тэмджглэе
var activePlayer = 1;
//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусныг хадгалах хувьсагч, 1 - 6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө

//<div class="player-score" id="score-0">43</div>
var dice = Math.floor(Math.random() * 6) + 1;
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").textContent = dice;

//Програм эхлэхэд бэлтгэе
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
