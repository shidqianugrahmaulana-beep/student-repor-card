// membuat nama pelajar
// ========================================
// Student Data Processor
// Nama   : Gonjales Fauzan
// Kelas  : XI Rombel 1
// ========================================

// 📦 Data Awal
const studentName = "  aHmAd GonJaleZZ  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";

// 🧩 PART 1 — Clean the Name
// Split nama menjadi kata, ubah ke lowercase, kapitalisasi huruf pertama tiap kata
const cleanedWords = studentName
  .trim()
  .split(" ")
  .filter(word => word.length > 0)
  .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());

const cleanName = cleanedWords.join(" ");
const username = cleanedWords.join(".").toLowerCase();

// 🧩 PART 2 — Analyze the Name
const containsAhmad = cleanName.includes("Ahmad");
const first5Chars = cleanName.slice(0, 5);
const replacementName = cleanName.replace("Ahmad", "Budi");

// 🧩 PART 3 — Process the Age
const age = parseInt(ageText);
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

// 🧩 PART 4 — Process the Score
const scoreNumber = parseFloat(scoreText);
const scoreFormatted = scoreNumber.toFixed(2);
const scoreRound = Math.round(scoreNumber);
const scoreFloor = Math.floor(scoreNumber);
const scoreCeil = Math.ceil(scoreNumber);

// 🧩 PART 5 — Determine the Grade
let grade = "";
if (scoreNumber >= 90) {
  grade = "A";
} else if (scoreNumber >= 80) {
  grade = "B";
} else if (scoreNumber >= 70) {
  grade = "C";
} else if (scoreNumber >= 60) {
  grade = "D";
} else {
  grade = "E";
}

// 🧩 PART 6 — Process Registration Date
const regParts = registrationText.split("-");
const regDay = Number(regParts[0]);
const regMonth = Number(regParts[1]);
const regYear = Number(regParts[2]);

// 🧩 PART 7 — Current Date & Time
const now = new Date();
const currentDay = now.getDay();
const currentHours = String(now.getHours()).padStart(2, "0");
const currentMinutes = String(now.getMinutes()).padStart(2, "0");
const timeString = `${currentHours}:${currentMinutes}`;

// 🧩 PART 8 — Create Date Formatter
function formatDate(date) {
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

const reportDate = formatDate(now);

// 🧩 PART 9 — Lucky Dice
const dice = Math.floor(Math.random() * 6) + 1;
let diceResult = "";
if (dice === 6) {
  diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
  diceResult = "💀 BAD LUCK!";
} else {
  diceResult = "😎 GOOD LUCK!";
}

// ⭐ BONUS KREATIVITAS 1: Status Kelulusan
const isPassed = scoreNumber >= 75 ? "PASSED (LULUS)" : "FAILED (BELUM LULUS)";

// ⭐ BONUS KREATIVITAS 2: Automatic Student Email Generator
const studentEmail = `${username}@hsibs.sch.id`;

// 🧩 PART 10 — FINAL REPORT
console.log("╔════════════════════════════════════╗");
console.log("║      🎓 STUDENT DATA PROCESSOR     ║");
console.log("╚════════════════════════════════════╝");

console.log("👤 STUDENT");
console.log("────────────────────────────────────");
console.log(`Original Name : "${studentName}"`);
console.log(`Clean Name    : ${cleanName}`);
console.log(`Username      : ${username}`);
console.log(`Email (Bonus) : ${studentEmail}`);

console.log("\n🔎 NAME ANALYSIS");
console.log("────────────────────────────────────");
console.log(`Contains Ahmad : ${containsAhmad}`);
console.log(`First 5 chars  : ${first5Chars}`);
console.log(`Replacement    : ${replacementName}`);

console.log("\n🎂 AGE");
console.log("────────────────────────────────────");
console.log(`Age Text       : ${ageText}`);
console.log(`Age            : ${age}`);
console.log(`Birth Year     : ${birthYear}`);

console.log("\n📊 SCORE");
console.log("────────────────────────────────────");
console.log(`Original Score : ${scoreText}`);
console.log(`Formatted      : ${scoreFormatted}`);
console.log(`Round          : ${scoreRound}`);
console.log(`Floor          : ${scoreFloor}`);
console.log(`Ceil           : ${scoreCeil}`);
console.log(`Grade          : ${grade}`);
console.log(`Status (Bonus) : ${isPassed}`);

console.log("\n📅 REGISTRATION");
console.log("────────────────────────────────────");
console.log(`Date           : ${registrationText}`);

console.log("\n🕐 REPORT GENERATED");
console.log("────────────────────────────────────");
console.log(`Date           : ${reportDate}`);
console.log(`Time           : ${timeString}`);

console.log("\n🎲 LUCKY DICE");
console.log("────────────────────────────────────");
console.log(`Dice           : ${dice}`);
console.log(`Result         : ${diceResult}`);

console.log("╔════════════════════════════════════╗");
console.log("║       🚀 PROCESS COMPLETE!         ║");
console.log("╚════════════════════════════════════╝");