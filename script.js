
const upload = document.getElementById("upload");
const canvas = document.getElementById("badge");
const ctx = canvas.getContext("2d");
const downloadBtn = document.getElementById("download");

upload.addEventListener("change", (e) => {
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = "28px sans-serif";
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.fillText("पुणे चातुर्मास प्रवेश", canvas.width / 2, 50);
      ctx.fillText("5 जुलाई 2025", canvas.width / 2, 90);

      const size = 300;
      const x = (canvas.width - size) / 2;
      const y = 120;
      ctx.save();
      ctx.beginPath();
      ctx.arc(canvas.width / 2, y + size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(img, x, y, size, size);
      ctx.restore();

      ctx.font = "bold 26px sans-serif";
      ctx.fillStyle = "#000";
      ctx.fillText("I AM ATTENDING – ARE YOU?", canvas.width / 2, 480);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
});

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "pune-chaturmas-badge.png";
  link.href = canvas.toDataURL();
  link.click();
});
