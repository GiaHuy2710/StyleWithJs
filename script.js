let originalSrc = "";

function preview(imgElement) {
  const mainImage = document.getElementById("mainImage");

  // Lưu ảnh gốc chỉ lần đầu
  if (!originalSrc) {
    originalSrc = mainImage.src;
  }

  // Đổi ảnh chính thành ảnh thumbnail
  mainImage.src = imgElement.src;
}

function restore() {
  const mainImage = document.getElementById("mainImage");

  // Khôi phục lại ảnh gốc
  if (originalSrc) {
    mainImage.src = originalSrc;
  }
}
