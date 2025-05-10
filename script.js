const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const imageLink = document.getElementById('imageLink');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      preview.src = reader.result;
      imageLink.href = reader.result;
    };
    reader.readAsDataURL(file);
  }
});
