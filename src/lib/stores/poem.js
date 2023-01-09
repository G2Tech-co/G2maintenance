import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const poem = writable(null);

if (browser) {
  fetch("https://api.ganjoor.net/api/ganjoor/poem/random")
    .then((res) => res.json())
    .then((data) => {
      let arr = data.plainText.split("\r\n");
      let res = "";
      for (let i = 0; i < arr.length; i++) {
        res += "<tr>";
        res +=
          "<td style='text-align: left; padding-left: 15px;'>" +
          arr[i] +
          "</td>";
        res +=
          "<td style='text-align: right; padding-right: 15px;'>" +
          arr[i + 1] +
          "</td>";
        res += "</tr>";
        i++;
      }
      poem.set(res);
    })
    .catch((error) => {
      const data =
        "حسنت به اتفاق ملاحت جهان گرفت\r\nآری به اتفاق جهان می توان گرفت\r\nافشای راز خلوتیان خواست کرد شمع\r\nشکر خدا که سر دلش در زبان گرفت\r\nزین آتش نهفته که در سینه من است\r\nخورشید شعله ایست که در آسمان گرفت\r\nمی خواست گل که دم زند از رنگ و بوی دوست\r\nاز غیرت صبا نفسش در دهان گرفت\r\nآسوده بر کنار چو پرگار می شدم\r\nدوران چو نقطه عاقبتم در میان گرفت\r\nآن روز شوق ساغر می خرمنم بسوخت\r\nکآتش ز عکس عارض ساقی در آن گرفت\r\nخواهم شدن به کوی مغان آستین فشان\r\nزین فتنه ها که دامن آخرزمان گرفت\r\nمی خور که هر که آخر کار جهان بدید\r\nاز غم سبک برآمد و رطل گران گرفت\r\nبر برگ گل به خون شقایق نوشته اند\r\nکان کس که پخته شد می چون ارغوان گرفت\r\nحافظ چو آب لطف ز نظم تو می چکد\r\nحاسد چگونه نکته تواند بر آن گرفت";
      let arr = data.split("\r\n");
      let res = "";
      for (let i = 0; i < arr.length; i++) {
        res += "<tr>";
        res +=
          "<td style='text-align: left; padding-left: 15px;'>" +
          arr[i] +
          "</td>";
        res +=
          "<td style='text-align: right; padding-right: 15px;'>" +
          arr[i + 1] +
          "</td>";
        res += "</tr>";
        i++;
      }
      poem.set(res);
    });
}
