// Lắng nghe sự kiện khi người dùng chọn tệp
document.getElementById('fileInput').addEventListener('change', function() {
    // Lấy tệp đã chọn
    var file = this.files[0];
    if (file) {
        // document.getElementById('previewImage').classList.remove('d-none')
        document.getElementById('previewImage').classList.add('d-block')
        document.getElementById('zone').classList.add('d-none')
    }
    
    // Tạo một đối tượng FileReader để đọc nội dung của tệp
    var reader = new FileReader();
    
    // Lắng nghe sự kiện khi quá trình đọc tệp hoàn thành
    reader.onload = function(event) {
        // Gán đường dẫn dữ liệu (data URL) của hình ảnh cho thuộc tính src của thẻ img
        document.getElementById('previewImage').src = event.target.result;
    };
    
    // Đọc tệp dưới dạng dữ liệu URL
    reader.readAsDataURL(file);
});