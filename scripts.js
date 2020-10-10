// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى

//   let img = document.getElementById('image');
//   img.src = "../moon.jpg"
// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر

// let text = document.getElementById('caption');

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1
let mma = document.getElementById('caption');

    document.querySelector('.card').addEventListener('click', () => {
        if (mma.innerHTML == "الشمس") {
        let tt = document.getElementById("caption");
        tt.innerHTML = "القمر";
        let image = document.getElementById("image");
        image.src = "./images/moon.jpg"
        let body = document.getElementById("body");
        body.style.background = `#686d76`
    
}else if (mma.innerHTML == "القمر") {
     
        let tt = document.getElementById("caption");
    tt.innerHTML = "الشمس";
    let image = document.getElementById("image");
    image.src = "./images/sun.jpg"
    let body = document.getElementById("body");
    body.style.background = `#fadcaa`
    
}

})
       

// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
