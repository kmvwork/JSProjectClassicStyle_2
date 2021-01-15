const sliders = (slides, dir, prev, next) => {
    let slidIndex = 1;
    let paused = false;

    const items = document.querySelectorAll(slides);

    function showSlides(n) {
        if (n > items.length) {
            slidIndex = 1;
        }

        if (n < 1) {
            slidIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slidIndex - 1].style.display = 'block';
    }

    showSlides(slidIndex);

    function plusSlides(n) {
        showSlides(slidIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slidIndex - 1].classList.remove('slideInLeft');
            items[slidIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slidIndex - 1].classList.remove('slideInRight');
            items[slidIndex - 1].classList.add('slideInLeft');
        });
    } catch (e) {
    }

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(function () {
                plusSlides(1);
                items[slidIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(function () {
                plusSlides(1);
                items[slidIndex - 1].classList.remove('slideInRight');
                items[slidIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }
    activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};

export default sliders;