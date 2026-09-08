function refresh(){
localStorage.clear();
}
function gid(x){
    return document.getElementById(x);
}
function gc(x){
    return document.getElementsByClassName(x);
}
function dis(){
    gid("cart-page").style.display = "none";
    gid("main-page").style.display = "block";
}
function searchPage() {
    const term = gid("search").value.toLowerCase().trim();
    if (term === "") {
        return;
    }
    const elements = document.querySelectorAll("h1, h2, h3, h5, p, li");
    for (const ID of elements) {
        if (ID.textContent.toLowerCase().includes(term)) {
            ID.scrollIntoView({
                block: "center"
            });
            return;
        }
    }
    alert("No results found");
}
const menuBtn = gid("menu-btn");
const sidebar = gid("sidebar");
menuBtn.onclick = () => {
    sidebar.classList.toggle("active");
    return false;
};
function updateCartCount(){
    let total = 0;
    for(let product in cart){
        total += cart[product].quantity;
    }
    gid("cart-count").textContent = total;
}
function saveCart(){
    localStorage.setItem("cart",
    JSON.stringify(cart));
    updateCartCount();
}
function add(productName){
    cart[productName].quantity++;
    saveCart();
}
function E(ID, image, name, price, size, color){
    gid(ID).innerHTML = `<div
    class="product-card">
            <img src="${image}"
            loading="lazy"
            width="320"
            height="180"
            alt="صورة ${name}">
            <div class="product-info">
                <p>رقم الطلب: ${ID}</p>
                <h5>${name}</h5>
            <p>:الاحجام
            <br>${size}</p>
            <p>الالوان: ${color}</p>
            <p class="price">السعر: ${price} دينار</p>
<a onclick="add('${ID}')" class="cta"
style="margin: 10px 25%;">
                    ضف لقائمة الطلبات
                </a>
            </div>
        </div>`;
}
E(
    "01",
    "img/Chinese-linen-suit.png",
    "سوت لنن ( قميص + بنطرون ) صيني القالب متوسط الى كبير",
    90000,
    "M, L, XL, 2XL, 3XL",
    "جوزي، بيجي فاتح، حبري، ابيض، اسود"
);
E(
    "02",
    "img/Turkish-long-sleeves-shirt.png",
    "قميص ردن تركي نقشة خامة ناعمة القالب قياس خاص كبير",
    40000,
    "4XL, 5XL, 6XL",
    "حبري، رصاصي طوخ على سواد، رصاصي فاتح"
);
E(
    "03",
    "img/badboyjacket.png",
    "قميص ردن تركي القالب قياس خاص كبير",
    40000,
    "4XL, 5XL, 6XL",
    "عسلي فاتح، اسود، ازرق لون الكابوي"
);
E(
    "04",
    "img/anotherbadboy.png",
    "قميص ردن تركي القالب متوسط",
    35000,
    "M, L, XL, 2XL, 3XL",
    "بيجي فاتح، اسود، ابيض، سمائي طوخ"
);
E(
    "05",
    "img/blueshirt.png",
    "قميص نص صيني يحتوي على سباندكس القالب متوسط",
    30000,
    "S, M, L, XL, 2XL",
    "جنزاري غامق، اسود، ابيض، رماني"
);
E(
    "06",
    "img/shirtwithlines.png",
    "قميص نص ردن تركي القالب رسمي عدل",
    25000,
    "M, L, XL, 2XL",
    "ابيض مقلم بالبيجي، ابيض مقلم بالاسود، ابيض مقلم بالازرق"
);

E(
    "07",
    "img/shirtwithsquares.png",
    "قميص نص ردن تركي القالب رسمي عدل",    
    25000,
    "M, L, XL, 2XL",
    "سمائي، بيجي على رصاصي"
);
E(
    "08",
    "img/sky.png",
    "تيشيرت ياخة تركي حجري ناعم القالب متوسط",
    30000,
    "M, L, XL, 2XL, 3XL",
    "سمائي فاتح، سمائي طوخ، حبري، بيجي فاتح، اسمنتي فاتح، ماروني، عسلي، زيتوني غامق، مشمشي"
);
E(
    "09",
    "img/orangetshirt.png",
    "تيشيرت ياخة تركي حجري ناعم القالب قياس خاص",
    40000,
    "3xl, 4xl, 5xl, 6xl",
    "حبري، اسود، مشمشي، جوزي، بيجي، اخضر طوخ، اخضر وسط، ازرق وسط"
);
E(
    "10",
    "img/choclate.png",
    "تيشيرت صيني مقلم القالب متوسط",
    30000,
    "M, L, XL, 2XL",
    "( اوف وايت، بيجي، اسود )، ( اوف وايت، زيتوني، جوزي )، ( اوف وايت، رصاصي، حبري)"
);
E(
    "11",
    "img/whitetshirt.png",
    "تيشيرت ياخة صيني خامة تحتوي على سباندكس ناعمة القالب متوسط",
    30000,
    "S, M, L, XL, 2XL",
    "ابيض، اسود، جنزاري غامق، زيتوني"
);
E(
    "12",
    "img/skytshirtwithcrown.png",
    "تيشيرت حلقة خامة ناعمة القالب متوسط",
    25000,
    "L, XL, 2XL, 3XL",
    "زيتوني فاتح، عسلي، رصاصي فاتح، حبري، سمائي، اسود"
);
E(
    "13",
    "img/browntshirt.png",
    "تيشيرت حلقة نقشة القالب متوسط",
    30000,
    "L, XL, 2XL, 3XL",
    "جوزي، ابيض، اسود، ليموني باهت"
);
E(
    "14",
    "img/bluejeans.png",
    "كابوي تركي قالب سلم فت",
    40000,
    "32, 33, 34, 36, 38, 40, 42",
    "رصاصي طوخ، رصاصي فاتح، اسود سادة، اسود كاحد، ازرق فاتح، ازرق وسط، ازرق طوخ، حبري، حبري على خضار، حبري على جوزي"
);
E(
    "15",
    "img/cowboy.png",
    "بنطرون كابوي تركي الخامة تحتوي على ليكرا او مطاط القالب بين البوري و الهاف",
    30000,
    "30, 31, 32, 33, 34, 36, 38",
    "أزرق وسط، أزرق باهت، ثلجي، اسود، رصاصي فاتح، رصاصي طوخ، حبري على بيجي، ترابي"
);
E(
    "16",
    "img/whitetrousers.png",
    "بنطرون قماش تركي القالب هاف بوري طويل",
    30000,
    "32, 34, 36, 38, 40, 42, 44",
    "اسود، حبري، جوزي، بيجي فاتح، بيجي وسط، بيجي طوخ، رصاصي فاتح، رصاصي سط، رصاصي طوخ"
);
E(
    "17",
    "img/anotherwhitetrousers.png",
    "بنطرون كتان رسمي تركي يحتوي على مطاط القالب يشبه البنطرون القماش",
    40000,
    "34, 36, 38, 40, 42, 44, 46",
    "رصاصي فاتح، رصاصي طوخ، اسود، حبري، بيجي فاتح، بيجي طوخ، جوزي"
);
E(
    "18",
    "img/triotrousers.png",
    "بنطرون قماش تركي القالب بين البوري والهاف",
    30000,
    "32, 34, 36, 38, 40, 42",
    "اسود، جوزي، بيجي فاتح، بيجي طوخ، بيجي وسط، رصاصي فاتح، رصاصي طوخ، ازرق طوخ، حبري"
);
E(
    "19",
    "img/desert.png",
    "بنطرون الخامة لنن صيني القالب هاف مائل الى العريض",
    45000,
    "M, L, XL, 2XL",
    "اسود، بيجي فاتح، بيجي طوخ، حبري، زيتوني فاتح، ابيض، جوزي"
);
E(
    "20",
    "img/idol.png",
    "بجامة تركية حجل تحتوي على قطن وبوليستر القالب متوسط",
    30000,
    "S, M, L, XL, 2XL",
    "حبري، رصاصي فاتح، اسود"
);
E(
    "21",
    "img/pijama.png",
    "بجامة تركية فلات تحتوي على قطن وبوليستر القالب متوسط",
    30000,
    "S, M, L, XL, 2XL",
    "حبري، رصاصي طوخ، اسود"
);
let cart = {
    "01": {
        ID: "01",
        name: "سوت لنن ( قميص + بنطرون ) صيني القالب متوسط الى كبير",
        price: 90000,
        quantity: 0,
        img: "img/Chinese-linen-suit.png",
        size: "M, L, XL, 2XL, 3XL",
        color: "جوزي، بيجي فاتح، حبري، ابيض، اسود"
    },
    "02": {
        ID: "02",
        name: "قميص ردن تركي نقشة خامة ناعمة القالب قياس خاص كبير",
        price: 40000,
        quantity: 0,
        img: "img/Turkish-long-sleeves-shirt.png",
        size: "4XL, 5XL, 6XL",
        color: "حبري، رصاصي طوخ على سواد، رصاصي فاتح"
    },
    "03": {
        ID: "03",
        name: "قميص ردن تركي القالب قياس خاص كبير",
        price: 40000,
        quantity: 0,
        img: "img/badboyjacket.png",
        size: "4XL, 5XL, 6XL",
        color: "عسلي فاتح، اسود، ازرق لون الكابوي"
    },
    "04": {
        ID: "04",
        name: "قميص ردن تركي القالب متوسط",
        price: 35000,
        quantity: 0,
        img: "img/anotherbadboy.png",
        size: "M, L, XL, 2XL, 3XL",
        color: "بيجي فاتح، اسود، ابيض، سمائي طوخ"
    },
    "05": {
        ID: "05",
        name: "قميص نص صيني يحتوي على سباندكس القالب متوسط",
        price: 30000,
        quantity: 0,
        img: "img/blueshirt.png",
        size: "S, M, L, XL, 2XL",
        color: "جنزاري غامق، اسود، ابيض، رماني"
    },
    "06": {
        ID: "06",
        name: "قميص نص ردن تركي القالب رسمي عدل",
        price: 25000,
        quantity: 0,
        img: "img/shirtwithlines.png",
        size: "M, L, XL, 2XL",
        color: "ابيض مقلم بالبيجي، ابيض مقلم بالاسود، ابيض مقلم بالازرق"
    },
    "07": {
        ID: "07",
        name: "قميص نص ردن تركي القالب رسمي عدل",
        price: 25000,
        quantity: 0,
        img: "img/shirtwithsquares.png",
        size: "M, L, XL, 2XL",
        color: "سمائي، بيجي على رصاصي"
    },
    "08": {
        ID: "08",
        name: "تيشيرت ياخة تركي حجري ناعم القالب متوسط",
        price: 30000,
        quantity: 0,
        img: "img/sky.png",
        size: "M, L, XL, 2XL, 3XL",
        color: "سمائي فاتح، سمائي طوخ، حبري، بيجي فاتح، اسمنتي فاتح، ماروني، عسلي، زيتوني غامق، مشمشي"
    },
    "09": {
        ID: "09",
        name: "تيشيرت ياخة تركي حجري ناعم القالب قياس خاص",
        price: 40000,
        quantity: 0,
        img: "img/orangetshirt.png",
        size: "3xl, 4xl, 5xl, 6xl",
        color: "حبري، اسود، مشمشي، جوزي، بيجي، اخضر طوخ، اخضر وسط، ازرق وسط"
    },
    "10": {
        ID: "10",
        name: "تيشيرت صيني مقلم القالب متوسط",
        price: 30000,
        quantity: 0,
        img: "img/choclate.png",
        size: "M, L, XL, 2XL",
        color: "( اوف وايت، بيجي، اسود )، ( اوف وايت، زيتوني، جوزي )، ( اوف وايت، رصاصي، حبري)"
    },
    "11": {
        ID: "11",
        name: "تيشيرت ياخة صيني خامة تحتوي على سباندكس ناعمة القالب متوسط",
        price: 30000,
        quantity: 0,
        img: "img/whitetshirt.png",
        size: "S, M, L, XL, 2XL",
        color: "ابيض، اسود، جنزاري غامق، زيتوني"
    },
    "12": {
        ID: "12",
        name: "تيشيرت حلقة  خامة ناعمة القالب متوسط",
        price: 25000,
        quantity: 0,
        img: "img/skytshirtwithcrown.png",
        size: "L, XL, 2XL, 3XL",
        color: "زيتوني فاتح، عسلي، رصاصي فاتح، حبري، سمائي، اسود"
    },
    "13": {
        ID: "13",
        name: "تيشيرت حلقة نقشة القالب متوسط",
        price: 30000,
        quantity: 0,
        img: "img/browntshirt.png",
        size: "L, XL, 2XL, 3XL",
        color: "جوزي، ابيض، اسود، ليموني باهت"
    },
    "14": {
        ID: "14",
        name: "كابوي تركي قالب سلم فت",
        price: 40000,
        quantity: 0,
        img: "img/bluejeans.png",
        size: "32, 33, 34, 36, 38, 40, 42",
        color: "رصاصي طوخ، رصاصي فاتح، اسود سادة، اسود كاحد، ازرق فاتح، ازرق وسط، ازرق طوخ، حبري، حبري على خضار، حبري على جوزي"
    },
    "15": {
        ID: "15",
        name: "بنطرون كابوي تركي الخامة تحتوي على ليكرا او مطاط القالب بين البوري و الهاف",
        price: 30000,
        quantity:0,
        img: "img/cowboy.png",
        size: "30, 31, 32, 33, 34, 36, 38",
        color: "أزرق وسط، أزرق باهت، ثلجي، اسود، رصاصي فاتح، رصاصي طوخ، حبري على بيجي، ترابي"
    },
    "16": {
        ID: "16",
        name: "بنطرون قماش تركي القالب هاف بوري طويل",
        price: 30000,
        quantity: 0,
        img: "img/whitetrousers.png",
        size: "32, 34, 36, 38, 40, 42, 44",
        color: "اسود، حبري، جوزي، بيجي فاتح، بيجي وسط، بيجي طوخ، رصاصي فاتح، رصاصي سط، رصاصي طوخ"
    },
    "17": {
        ID: "17",
        name: "بنطرون كتان رسمي تركي يحتوي على مطاط القالب يشبه البنطرون القماش",
        price: 40000,
        quantity: 0,
        img: "img/anotherwhitetrousers.png",
        size: "34, 36, 38, 40, 42, 44, 46",
        color: "رصاصي فاتح، رصاصي طوخ، اسود، حبري، بيجي فاتح، بيجي طوخ، جوزي"
    },
    "18": {
        ID: "18",
        name: "بنطرون قماش تركي القالب بين البوري والهاف",
        price: 30000,
        quantity: 0,
        img: "img/triotrousers.png",
        size: "32, 34, 36, 38, 40, 42",
        color: "اسود، جوزي، بيجي فاتح، بيجي طوخ، بيجي وسط، رصاصي فاتح، رصاصي طوخ، ازرق طوخ، حبري"
    },
    "19": {
        ID: "19",
        name: "بنطرون الخامة لنن صيني القالب هاف مائل الى العريض",
        price: 45000,
        quantity: 0,
        img: "img/desert.png",
        size: "M, L, XL, 2XL",
        color: "اسود، بيجي فاتح، بيجي طوخ، حبري، زيتوني فاتح، ابيض، جوزي"
    },
    "20": {
        ID: "20",
        name: "بجامة تركية حجل تحتوي على قطن وبوليستر القالب متوسط",
        price: 30000,
        quantity: 0,
        img: "img/idol.png",
        size: "S, M, L, XL, 2XL",
        color: "حبري، رصاصي فاتح، اسود"
    },
    "21": {
        ID: "21",
        name: "بجامة تركية فلات تحتوي على قطن وبوليستر القالب متوسط",
        price: 30000,
        quantity: 0,
        img: "img/pijama.png",
        size: "S, M, L, XL, 2XL",
        color: "حبري، رصاصي طوخ، اسود"
    },
};
function showCart(){
let html = `<section id="cart">
    <a class="cta" style="margin-top:10px;" onclick="refresh(); location.reload();">أفرغ قائمة الطلبات</a>
    <br>
<h2>قائمة الطلبات</h2>
<section>
<div class="list">`;
let totalItems = 0;
let totalPrice = 0;
for(let product in cart){
    let quantity = cart[product].quantity;
    let price = cart[product].price;
    if(quantity > 0){
        let subtotal = quantity * price;
        html += `
        <div class="product">
            <img src="${cart[product].img}"
            loading="lazy"
            width="320"
            height="180"
            alt="صورة ${cart[product].name}">
            <p>رقم الطلب: ${cart[product].ID}</p>
            <p>
            <strong>${cart[product].name}
            </strong><br>
            :الأحجام
            <br>
             ${cart[product].size}<br>
            الألوان: ${cart[product].color}<br>
                الكمية: ${quantity}<br>
                السعر: ${price} دينار<br>                
                المجموع الفرعي: ${subtotal} دينار
            </p>
            <a onclick="remove1('${product}')" class="cta"
            style="margin: 10px 35%;">أزل واحد</a>
            <a onclick="removeall('${product}')" class="cta"
            style="margin: 10px 35%;">أزل الكل</a>
        </div>`;
        totalItems += quantity;
        totalPrice += subtotal;
    }
}
html += `</div>
</section>
<br>
<p>عدد الطلبات الكلي: ${totalItems}</p>
<p>السعر الكلي: ${totalPrice} دينار</p>
<p>ملاحظة: تكلفة التوصيل تُحَدَد حسب الاتفاق مع صاحب المحل بعد ارسال الطلب, الضغط على زر ارسال الطلب يحول الطلب إلى واتساب صاحب المحل</p>
<br>
<div>
    <textarea placeholder="اكتب الحجم و اللون"
    id="description"></textarea>
    <br>
        <input
        class="contact-form-input"
        id="phone-number"
        type="tel"
        placeholder="رقم الهاتف">
        <p>شارك موقعك الجغرافي معنا على واتساب بعد ارسال الطلب</p>
</div>
<a class="cta" onclick="checkout(); refresh();">ارسل الطلب</a>
<a class="cta" href="tel:+9647704510148" style="margin-top:20px;">اتصل بنا</a>
<a onclick="location.reload();" class="cta" style="margin-top:20px;">استمر بالتسوق</a>
</section>`;
gid("cart-page").innerHTML = html;
gid("main-page").style.display = "none";
gid("cart-page").style.display = "block";
}
    if(document.getElementById("cart")){
    showCart();
    updateCartCount();
}
function remove1(productName){
    if(cart[productName].quantity > 0){
        cart[productName].quantity--;
        showCart();
        saveCart();
    }
}
function removeall(productName){
    cart[productName].quantity = 0;
    saveCart();
    if(document.getElementById("cart")){
    showCart();
    }
}
const savedCart = localStorage.getItem("cart");
if(savedCart){
    cart = JSON.parse(savedCart);
}
updateCartCount();
function sendContact(){
    let contact = "رقم الهاتف: " + gc('contact-form-input')[0].value;
    window.open(
        "https://wa.me/9647704510148?text=" + contact,
        "_blank"
    );
}
function checkout(){
            let order = "مرحباً أود أن أطلب:%0A";
            let total = 0;
    for(let product in cart){
        if(cart[product].quantity > 0){
            let subtotal =
                cart[product].quantity *
                cart[product].price;
            total += subtotal;
            order +=
                "%0Aالطلب: " +
                cart[product].ID + "%0A" +
                cart[product].name +
                " × " +
                cart[product].quantity +" ("
                    +
                subtotal +
                " دينار)%0A";
        }
    }
    order += "%0Aالكلي: " + total + " دينار";
    order += "%0Aالوصف: " +
    gid("description").value;    
    order += "%0Aرقم الهاتف: " + gid("phone-number").value;
    window.open(
        "https://wa.me/9647704510148?text=" + order,
        "_blank"
    );
}
