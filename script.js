document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Creating responsive",
    "secure",
    "real-time applications",
    "with modern technologies",
    "Creating responsive, secure, real-time applications with modern technologies."
  ];

  const element = document.getElementById("typed-text");
  let phraseIndex = 0;
  let charIndex = 0;
  let typing = true;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (typing) {
      if (charIndex < currentPhrase.length) {
        element.textContent += currentPhrase.charAt(charIndex);
        charIndex++;
        setTimeout(type, 70);
      } else {
        typing = false;
        setTimeout(type, 1000); 
      }
    } else {
      if (charIndex > 0) {
        element.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, 30);
      } else {
        typing = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 400);
      }
    }
  }

  type(); 
});
function showResumeModal() {
    document.getElementById('resumeModal').style.display = 'block';
}

function closeResumeModal() {
    document.getElementById('resumeModal').style.display = 'none';
}

