const creatNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
        <div class="nav">
            <img src="img/logo1.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                     <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user1.png" alt=""></a>
                <a href="product.html"><img src="/img/shopping_cart1.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
};
creatNav();
