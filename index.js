function calculateTotal() {
    // Ambil nilai dari field input
    const rentalDate = document.getElementById("rental-date").value;
    const returnDate = document.getElementById("return-date").value;
    const carTypeElement = document.getElementById("car-type");
    const totalPriceField = document.getElementById("total-price");

    // Ambil harga mobil dari atribut data-price
    const carPrice = carTypeElement.options[carTypeElement.selectedIndex]?.getAttribute("data-price");

    // Validasi input: pastikan semua field diisi
    if (!rentalDate || !returnDate || !carPrice) {
        totalPriceField.value = "Isi semua field dengan benar";
        return;
    }

    // Konversi tanggal ke objek Date
    const startDate = new Date(rentalDate);
    const endDate = new Date(returnDate);

    // Validasi tanggal: pastikan tanggal akhir setelah tanggal awal
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || endDate <= startDate) {
        totalPriceField.value = "Tanggal tidak valid";
        return;
    }

    // Hitung jumlah hari
    const timeDiff = endDate - startDate;
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Konversi ms ke hari

    // Hitung total harga
    const totalPrice = days * parseInt(carPrice, 10);

    // Format hasil ke Rupiah
    totalPriceField.value = `Rp ${totalPrice.toLocaleString("id-ID")}`;
}

// Tambahkan event listener ke elemen terkait
document.getElementById("rental-date").addEventListener("change", calculateTotal);
document.getElementById("return-date").addEventListener("change", calculateTotal);
document.getElementById("car-type").addEventListener("change", calculateTotal);
