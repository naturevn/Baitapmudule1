function Hero(image, top, right, size) {
    this.image = image;
    this.top = top;
    this.right = right;
    this.size = size;

    this.getHeroElement = function() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; right:' + this.right + 'px;position:absolute;" />';
    }

    this.moveRight = function() {
        this.right += 1;
        console.log('ok: ' + this.right);
    }

}


var hero = new Hero('cargif.gif', 20, 30, 500);

function start() {
    if (hero.right < window.innerWidth - hero.size) {
        hero.moveRight();

        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(start, 10)
    } else {

    }
}

start();