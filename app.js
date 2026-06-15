// POPUP DATA
const salons = {
  luxe: {
    name: "Evara Luxe Bridal Studio",
    rating: "⭐ 4.9 (284)",
    location: "📍 South Delhi",
    price: "💰 ₹35,000+",
    desc: "Luxury bridal specialists for high-end wedding looks."
  },

  blush: {
    name: "Blush & Bloom Studio",
    rating: "⭐ 4.7 (196)",
    location: "📍 West Delhi",
    price: "💰 ₹18,000+",
    desc: "Soft aesthetic bridal and pre-bridal care experts."
  }
};

// OPEN POPUP
function openPopup(key) {
  const salon = salons[key];

  document.getElementById("popup-title").innerText = salon.name;
  document.getElementById("popup-rating").innerText = salon.rating;
  document.getElementById("popup-location").innerText = salon.location;
  document.getElementById("popup-price").innerText = salon.price;
  document.getElementById("popup-desc").innerText = salon.desc;

  document.getElementById("popup").classList.remove("hidden");
}

// CLOSE POPUP
document.getElementById("closePopup").onclick = () => {
  document.getElementById("popup").classList.add("hidden");
};
