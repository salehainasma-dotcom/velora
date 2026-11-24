
let cart = [];
let selectedCategory = "همه محصولات";

const categoryData = {
  "زیورآلات": ["گردنبند", "دستبند", "انگشتر", "گوشواره", "پابند", "ست طلا", "آویز", "گل‌سینه", "زیور مو", "سنجاق سینه"],
  "بوت و کفش": ["کتانی", "بوت", "نیم‌بوت", "صندل", "کفش مجلسی", "کفش اسپرت", "کالج", "دمپایی", "کفش پاشنه‌دار", "اسلیپر"],
  "پوشاک": ["مانتو", "شومیز", "تی‌شرت", "شلوار", "دامن", "لباس مجلسی", "هودی", "بافت", "کت", "پیراهن"],
  "کیف": ["کیف دستی", "کیف دوشی", "کوله‌پشتی", "کیف پول", "کیف مجلسی", "کیف کمری", "کیف اداری", "کیف کوچک", "کیف مسافرتی", "کیف آرایشی"],
  "عطر و ادکلن": ["عطر زنانه", "عطر مردانه", "ادکلن", "بادی اسپلش", "اسپری", "عطر جیبی", "عطر گرم", "عطر خنک", "عطر شیرین", "عطر تلخ"],
  "دیجیتال": ["هدفون", "هندزفری", "اسپیکر", "شارژر", "پاوربانک", "قاب گوشی", "پایه موبایل", "فلش", "ماوس", "کیبورد"],
  "آرایشی و بهداشتی": ["رژ لب", "ریمل", "کرم پودر", "پنکیک", "خط چشم", "رژگونه", "ضدآفتاب", "ماسک صورت", "شامپو", "کرم مرطوب‌کننده"],
  "ساعت و اکسسوری": ["ساعت مچی", "کمربند", "دستمال گردن", "گیره مو", "تل مو", "جاکلیدی", "آویز کیف", "اکسسوری مو", "دستبند چرمی", "زنجیر"],
  "خانه و دکوراسیون": ["گلدان", "آباژور", "تابلو", "ساعت دیواری", "مجسمه", "شمع", "آینه", "کوسن", "چراغ خواب", "دکوری"],
  "عینک": ["عینک آفتابی زنانه", "عینک آفتابی مردانه", "عینک طبی", "عینک فریم گرد", "عینک فریم مربع", "عینک فریم فلزی", "عینک فریم رنگی", "عینک اسپرت", "عینک کلاسیک", "عینک فانتزی"],
  "لوازم تحریر": ["دفتر", "خودکار", "مداد", "پاک‌کن", "جامدادی", "ماژیک", "دفتر پلنر", "هایلایتر", "خط‌کش", "استیکر"],
  "ورزشی": ["قمقمه", "مت ورزشی", "توپ", "کش ورزشی", "طناب", "دستکش ورزشی", "ساک ورزشی", "لباس ورزشی", "کلاه ورزشی", "مچ‌بند"],
  "ماگ و لیوان": ["ماگ سرامیکی", "ماگ شیشه‌ای", "ماگ فانتزی", "ماگ حرارتی", "لیوان دسته‌دار", "لیوان دوجداره", "فنجان", "تراول ماگ", "لیوان رنگی", "ماگ درب‌دار"],
  "ظروف پذیرایی": ["دیس", "اردوخوری", "شیرینی‌خوری", "میوه‌خوری", "ظرف سرو", "کاسه پذیرایی", "سینی", "شکلات‌خوری", "ظرف آجیل", "ظرف دسر"],
  "ظروف آشپزخانه": ["قابلمه", "ماهیتابه", "کتری", "قوری", "کفگیر", "ملاقه", "ظرف نگهدارنده", "آبکش", "تخته برش", "ظرف ادویه"],
  "ظروف شیشه‌ای": ["بطری شیشه‌ای", "پارچ شیشه‌ای", "کاسه شیشه‌ای", "ظرف مربا", "بانکه", "بطری آب", "لیوان بلوری", "ظرف حبوبات", "گلدان شیشه‌ای", "ظرف دسر شیشه‌ای"],
  "سرویس چای‌خوری": ["سرویس چای", "قوری چینی", "فنجان چای", "نعلبکی", "قندان", "شکلات‌خوری", "سماور", "استکان", "سینی چای", "سرویس دمنوش"],
  "ظروف دکوری": ["بشقاب دکوری", "گلدان دکوری", "کاسه دکوری", "مجسمه سرامیکی", "ظرف پایه‌دار", "شمعدان", "ظرف تزئینی", "گلدان رومیزی", "ظرف سفالی", "دکوری مینیمال"]
};

const styles = ["ساده", "مدرن", "کلاسیک", "فانتزی", "لوکس"];

const icons = {
  "زیورآلات": "💍",
  "بوت و کفش": "👟",
  "پوشاک": "👗",
  "کیف": "👜",
  "عطر و ادکلن": "🌸",
  "دیجیتال": "📱",
  "آرایشی و بهداشتی": "💄",
  "ساعت و اکسسوری": "⌚",
  "خانه و دکوراسیون": "🏡",
  "عینک": "🕶️",
  "لوازم تحریر": "📚",
  "ورزشی": "⚽",
  "ماگ و لیوان": "☕",
  "ظروف پذیرایی": "🍽️",
  "ظروف آشپزخانه": "🍳",
  "ظروف شیشه‌ای": "🥛",
  "سرویس چای‌خوری": "🫖",
  "ظروف دکوری": "🏺"
};

let products = [];
let productId = 1;

for (const category in categoryData) {
  categoryData[category].forEach(name => {
    styles.forEach(style => {
      products.push({
        id: productId,
        name: name + " " + style,
        category: category,
        price: 250000 + productId * 1731,
        icon: icons[category]
      });
      productId++;
    });
  });
}

function formatPrice(price) {
  return price.toLocaleString("fa-IR");
}

function displayCategories() {
  const container = document.getElementById("categories");
  if (!container) return;

  container.innerHTML = "";

  const allButton = document.createElement("button");
  allButton.textContent = "همه محصولات";
  allButton.onclick = () => filterCategory("همه محصولات");
  container.appendChild(allButton);

  for (const category in categoryData) {
    const button = document.createElement("button");
    button.textContent = icons[category] + " " + category;
    button.onclick = () => filterCategory(category);
    container.appendChild(button);
  }
}

function filterCategory(category) {
  selectedCategory = category;

  const title = document.getElementById("productTitle");
  if (title) {
    title.textContent = category === "همه محصولات"
      ? "محصولات VELORA"
      : "محصولات " + category;
  }

  displayProducts();
}

function displayProducts(list = null) {
  const container = document.getElementById("product-container");
  if (!container) return;

  const items = list || products.filter(product =>
    selectedCategory === "همه محصولات" ||
    product.category === selectedCategory
  );

  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = "<p>محصولی پیدا نشد.</p>";
    return;
  }

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-photo" style="display:flex;align-items:center;justify-content:center;font-size:65px;">
        ${product.icon}
      </div>
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p>${formatPrice(product.price)} تومان</p>
      <button onclick="addToCart(${product.id})">
        افزودن به سبد خرید
      </button>
    `;

    container.appendChild(card);
  });
}

function searchProducts() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const query = input.value.trim().toLowerCase();

  const results = products.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );

  displayProducts(results);
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateCart() {
  const count = document.getElementById("cart-count");
  const itemsContainer = document.getElementById("cart-items");
  const totalContainer = document.getElementById("cart-total");

  const totalCount = cart.reduce((sum, item) =>
    sum + item.quantity, 0
  );

  if (count) count.textContent = totalCount.toLocaleString("fa-IR");

  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.textContent = "سبد خرید شما خالی است.";
    } else {
      itemsContainer.innerHTML = "";

      cart.forEach(item => {
        const row = document.createElement("div");

        const name = document.createElement("span");
        name.textContent = item.name + " × " + item.quantity + " ";

        const price = document.createElement("span");
        price.textContent = formatPrice(item.price * item.quantity) + " تومان ";

        const button = document.createElement("button");
        button.textContent = "حذف";
        button.onclick = () => removeFromCart(item.id);

        row.append(name, price, button);
        itemsContainer.appendChild(row);
      });
    }
  }

  const total = cart.reduce((sum, item) =>
    sum + item.price * item.quantity, 0
  );

  if (totalContainer) {
    totalContainer.textContent = formatPrice(total);
  }
}

function showCart() {
  const cartSection = document.getElementById("shopping-cart");
  if (cartSection) {
    cartSection.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayCategories();
  displayProducts();
  updateCart();
});
