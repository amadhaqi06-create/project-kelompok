// Tunggu sampai halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

    // Ambil elemen dari HTML berdasarkan id-nya
    const inputTagihan = document.getElementById("input-tagihan");
    const inputOrang   = document.getElementById("input-orang");
    const btnReset     = document.getElementById("btn-reset");
    const hasil        = document.getElementById("hasil");
    const statistik    = document.getElementById("statistik");

    // Kalau bukan halaman kalkulator, hentikan script
    if (!inputTagihan) return;

    let jumlahHitung = 0; // penghitung berapa kali dihitung

    // Fungsi utama: hitung pembagian tagihan
    function hitungPatungan(persenTip) {
        // Cek apakah input sudah diisi
        if (inputTagihan.value === "" || inputOrang.value === "") {
            hasil.textContent = "Masukkan tagihan & jumlah orang!";
            return;
        }

        // Ubah input jadi angka
        const tagihan = Number(inputTagihan.value);
        const orang   = Number(inputOrang.value);

        // Cek jumlah orang valid
        if (orang <= 0) {
            hasil.textContent = "Jumlah orang tidak valid!";
            return;
        }

        // Rumus hitung
        const nilaiTip   = tagihan * (persenTip / 100);
        const totalBayar = tagihan + nilaiTip;
        const perOrang   = totalBayar / orang;

        // Tampilkan hasil
        hasil.textContent = "Per orang bayar: Rp " +
                            Math.round(perOrang).toLocaleString('id-ID');

        // Tambah riwayat hitung
        jumlahHitung++;
        statistik.textContent = "Riwayat transaksi dihitung: " + jumlahHitung;
    }

    // Hubungkan tombol tip dengan fungsi
    document.getElementById("btn-tip-0").addEventListener("click",  () => hitungPatungan(0));
    document.getElementById("btn-tip-5").addEventListener("click",  () => hitungPatungan(5));
    document.getElementById("btn-tip-10").addEventListener("click", () => hitungPatungan(10));
    document.getElementById("btn-tip-15").addEventListener("click", () => hitungPatungan(15));

    // Tombol reset
    btnReset.addEventListener("click", function () {
        inputTagihan.value = "";
        inputOrang.value   = "";
        hasil.textContent  = "Per orang bayar: Rp 0";
    });
});