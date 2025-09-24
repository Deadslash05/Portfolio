document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("emailForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const from = document.getElementById("from").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    window.location.href = `mailto:daniel.cabezas.c11@gmail.com?subject=${encodeURIComponent(subject)}&body=From:%20${encodeURIComponent(from)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
  });
});