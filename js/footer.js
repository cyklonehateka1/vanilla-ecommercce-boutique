const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <img src="img/light-logo.png" alt="" class="logo">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about company</p>
            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi saepe reiciendis repellendus dolorum
            quod debitis quibusdam hic unde sunt ducimus, laboriosam, nobis, sed vero reprehenderit molestias architecto.
            Excepturi voluptatum vel labore ut. Doloremque minus nam iure rerum saepe perspiciatis iusto voluptatem, expedita,
            error fugiat necessitatibus tempora magni quibusdam molestias non rem accusamus. Quibusdam, architecto tempore! Sit
            blanditiis aliquid earum qui repellat pariatur non, soluta, accusamus aliquam ducimus deserunt, quia hic error
            laborum. At iste eveniet error sed voluptatem reiciendis temporibus aperiam dolorum eius sint numquam, nesciunt quis
            placeat voluptas architecto ex ipsa, earum quam possimus perferendis est. Veniam, maiores molestias.</p>
            <p class="info">support emails - help@clothing.com, costumersupport@clothing.com</p>
            <p class="info">tephone - +233 248 226 831, 180 00 00 001</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & conditions</a>
                    <a href="#" class="social-link">privacy page</a>
                </div>
                <div>
                    <a href="#" class="social-link">instagram</a>
                    <a href="#" class="social-link">facebook</a>
                    <a href="#" class="social-link">twitter</a>
                </div>
            </div>
            <div class="footer-credit">Clothing, Best apparels online store</div>
    `;
}
createFooter()