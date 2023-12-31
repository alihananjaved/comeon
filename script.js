function handleYes() {
  // Redirect to affirmation page when "Yes" is clicked on any page
  window.location.href = "affirmation.html";
}

function handleNo() {
  const currentPage = getCurrentPage();

  if (currentPage === 'index') {
    // Redirect to P2 page when "No" is clicked on the index page
    window.location.href = "p2.html";
  } else if (currentPage === 'p2') {
    // Redirect to P3 page when "No" is clicked on the P2 page
    window.location.href = "p3.html";
  } else if (currentPage === 'p3') {
    // Redirect to last page when "No" is clicked on the P3 page
    window.location.href = "lastpage.html";
  } else if (currentPage === 'lastpage') {
    // Float the No button to a random location on the last page
    const noButton = document.querySelector('.btn-no');
    floatNoButton(noButton);
  }
}

function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split("/").pop().split(".")[0];
  return page.toLowerCase();
}

function floatNoButton(button) {
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 40);

  button.style.position = 'absolute';
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
}
