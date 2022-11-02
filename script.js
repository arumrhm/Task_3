// 3. Events Handler (onClick di HTML)
function tombol() {
    // 1. Membuat Teks (Manipulasi Element)
    const judul = document.getElementById('judul');
    judul.innerHTML = 'ARUM RAHMAWATI';

    // Membuat Teks (Manipulasi Element)
    const kontak = document.getElementById('kontak');
    kontak.innerHTML = ' <br><br><table> <h2>INFORMASI KONTAK</h2> <td>HP/WA</td> <td>: 0882-7201-8069</td> </tr><tr>  <td>Email</td> <td><a href="">: arum.120140085@student.itera.ac.id</a></td> </tr> </table>';
    
     // Membuat Teks (Manipulasi Element)
    const tentang = document.getElementById('tentang');
    tentang.innerHTML = '<br> <h2>TENTANG</h2>Ini tentang seorang perempuan yang biasa dipanggil Arum dan sedang menempuh pendidikan di Institut Teknologi Sumatera dengan Program Studi Teknik Informatika. Selain itu perempuan ini menyukai hal-hal yang berhubungan dengan alam semesta seperti langit di waktu subuh misalnya.';

    // Membuat Teks (Manipulasi Element)
    const pendidikan = document.getElementById('pendidikan');
    pendidikan.innerHTML = ' <br> <h2> RIWAYAT PENDIDIKAN</h2> <ul> <li> <span>SDN 1 Kupang Kota (2009-2014)</span> </li> <li> <span>SMPN 3 Bandar Lampung (2014-2017)</span> </li> <li> <span>SMAS Perintis 2 Bandar Lampung (2017-2020)</span> </li> <li> <span>Institut Teknologi Sumatera (2020-Sekarang)</span> </li> </ul>';

    // Membuat Teks (Manipulasi Element)
    const pengalaman = document.getElementById('pengalaman');
    pengalaman.innerHTML = '<br> <h2>PENGALAMAN</h2> <ul> <li> Asisten Praktikum Fisika Dasar I Tahun 2021-2022 </li> <li> Asisten Praktikum Fisika Dasar II Tahun 2021-2022 </li> <li> Himpunan Mahasiswa Teknik Informatika Divisi Pengabdian Masyarakat </li> <li> Panitia Konsumsi Makrab Teknik Informatika 2020</li> <li> Panitia Mentor Kaderisasi Tahun 2022 Himpunan Mahasiswa Teknik Informatika (HMIF)</li> <li> Panitia Kreativ Informathics Thesis Expo Vol. IV </li> </ul>';
}
// Membuat Element (Manipulasi Node)
function note() {
    const inputElement = document.querySelector('#masukan'); // Input Elemen
    const Name = inputElement.value; // Mengambil input

    if(!Name) return alert('Input kosong, ulangi'); // Pengecekan Data input

    const el = document.createElement('li'); // Tambah data pada list.
    el.innerText = Name;
    document.querySelector('#Detail').appendChild(el);

    inputElement.value = ''; // Membersihkan Input
}
