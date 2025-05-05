let color = "#7B4DE7";

const colorPicker = new iro.ColorPicker("#colorPicker", {
  width: 180,
  color: color
});

colorPicker.on("color:change", function(c) {
  color = c.hexString;
});

document.getElementById("updateBtn").addEventListener("click", () => {
  const brand = document.getElementById("brandName").value || "Your Brand";
  const tagline = document.getElementById("tagline").value || "Your tagline";

  document.getElementById("previewBrand").textContent = brand;
  document.getElementById("previewBrand").style.color = color;
  document.getElementById("previewTagline").textContent = tagline;
  document.getElementById("previewFontTag").textContent = tagline;

  const swatchGroup = document.getElementById("colorSwatches");
  swatchGroup.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.className = "swatch";
    div.style.background = color;
    swatchGroup.appendChild(div);
  }
});
