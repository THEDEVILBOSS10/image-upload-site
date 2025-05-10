function uploadToImgbb() {
  const file = document.getElementById('fileInput').files[0];
  if (!file) return alert("Please select an image.");

  const reader = new FileReader();
  reader.onloadend = function () {
    const base64Image = reader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");

    fetch("https://api.imgbb.com/1/upload?key=2f813b887d20e23d68bc269930bb6855", {
      method: "POST",
      body: new URLSearchParams({
        image: base64Image
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const link = data.data.url;
        document.getElementById("output").innerHTML = `
          <p>Image uploaded:</p>
          <a href="${link}" target="_blank">${link}</a><br>
          <img src="${link}" width="300">
        `;
      })
      .catch((err) => alert("Upload failed."));
  };

  reader.readAsDataURL(file);
}
