/* =====================================
   PESAN ROMANTIS
===================================== */

const message = `
Hai, cantikk nya akuu... ❤️

Aku mungkin nggak selalu pandai mengungkapkan
apa yang aku rasakan.

Tapi aku ingin kamu tahu,
aku bersyukur banget bisa mengenal kamu.

Terima kasih karena sudah menjadi
bagian dari hari-hariku.

Terima kasih untuk semua tawa,
cerita, perhatian, dan hal-hal kecil
yang mungkin menurutmu sederhana,
tapi sebenarnya sangat berarti buat aku.

Aku nggak tahu apa yang akan terjadi
di masa depan.

Tapi kalau boleh memilih,
aku ingin terus membuat banyak cerita
bersama kamu.

Jadi...

Jangan pergi ya? 🥺

Aku sayang kamu. ❤️
`;


/* =====================================
   MEMBUKA HADIAH
===================================== */

function openGift() {

    const opening = document.getElementById("opening");

    const main = document.getElementById("main");

    opening.style.display = "none";

    main.classList.remove("hidden");

    typeMessage();

    createHearts(30);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================
   EFEK MENGETIK
===================================== */

function typeMessage() {

    const textElement =
        document.getElementById("typingText");

    let index = 0;

    function typing() {

        if (index < message.length) {

            textElement.innerHTML +=
                message.charAt(index)
                === "\n"
                ? "<br>"
                : message.charAt(index);

            index++;

            setTimeout(typing, 30);
        }
    }

    typing();
}


/* =====================================
   MEMBUAT HATI MELAYANG
===================================== */

function createHearts(amount = 10) {

    const container =
        document.querySelector(".hearts");

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML =
            Math.random() > 0.5
            ? "❤️"
            : "💗";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (Math.random() * 20 + 10) + "px";

        heart.style.animationDuration =
            (Math.random() * 5 + 5) + "s";

        heart.style.animationDelay =
            Math.random() * 3 + "s";

        container.appendChild(heart);


        /* Hapus setelah animasi selesai */

        setTimeout(() => {

            heart.remove();

        }, 10000);
    }
}


/* =====================================
   HATI TERUS MUNCUL
===================================== */

setInterval(() => {

    createHearts(2);

}, 1200);


/* =====================================
   MEMBUKA POPUP KEJUTAN
===================================== */

function showSurprise() {

    const popup =
        document.getElementById("surprise");

    popup.classList.remove("hidden");

    createHearts(50);
}


/* =====================================
   MENUTUP POPUP
===================================== */

function closeSurprise() {

    const popup =
        document.getElementById("surprise");

    popup.classList.add("hidden");
}


/* =====================================
   TOMBOL KIRIM CINTA
===================================== */

function sendLove() {

    alert(
        "💗 Cinta berhasil dikirim!\n\n" +
        "Tapi kayaknya cintaku ke kamu " +
        "nggak bisa dikirim lewat internet...\n\n" +
        "Karena sudah terlanjur tinggal di hati ❤️"
    );

    createHearts(100);
}
