
const upload = document.getElementById("upload");
const canvas = document.getElementById("badge");
const ctx = canvas.getContext("2d");
const downloadBtn = document.getElementById("download");
const whatsappBtn = document.getElementById("whatsapp");

const designWidth = 600;
const designHeight = 800;
const scale = Math.min(window.innerWidth * 0.9 / designWidth, 1);
canvas.width = designWidth * scale;
canvas.height = designHeight * scale;

const background = new Image();
background.src = "background.jpg";

upload.addEventListener("change", (e) => {
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      background.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.font = `${28 * scale}px sans-serif`;
        ctx.fillStyle = "#000";
        ctx.textAlign = "center";
        ctx.fillText("पुणे चातुर्मास प्रवेश", canvas.width / 2, 50 * scale);
        ctx.fillText("5 जुलाई 2025", canvas.width / 2, 90 * scale);

        const size = 300 * scale;
        const x = (canvas.width - size) / 2;
        const y = 120 * scale;
        ctx.save();
        ctx.beginPath();
        ctx.arc(canvas.width / 2, y + size / 2, size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(img, x, y, size, size);
        ctx.restore();

        ctx.font = `bold ${26 * scale}px sans-serif`;
        ctx.fillStyle = "#000";
        ctx.fillText("I AM ATTENDING – ARE YOU?", canvas.width / 2, 480 * scale);
      };
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

whatsappBtn.addEventListener("click", () => {
  const text = "🌼 पुणे चातुर्मास प्रवेश – 5 जुलाई 2025 🌼\nI AM ATTENDING – ARE YOU?\nGenerate yours here:";
  const url = window.location.href;
  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
  window.open(whatsappURL, "_blank");
});
