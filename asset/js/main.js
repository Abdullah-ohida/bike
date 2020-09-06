const carts = document.querySelector('.cart-slider');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const content = document.querySelector('.container')
const toggleBtn = document.querySelector('.toggle');
const showNav = document.querySelector('.content');
const navBar = document.querySelector('.nav');
const topLink = document.querySelector('.top-link');
const navLinks = document.querySelectorAll('.scroll-link');
const current = document.getElementsByClassName('active');



//  Nav-toggle
toggleBtn.addEventListener('click', function () {
    showNav.classList.toggle('show-links');
    toggleBtn.classList.toggle('show-icon')
})

// Cart slider
carts.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');

});

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');

});

// Fixed nav-bar
window.addEventListener('scroll', function () {
    const navHeight = navBar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav')
    } else {
        navBar.classList.remove('fixed-nav');
    }

    //     // set up back to top
    if (scrollHeight > 200) {
        topLink.classList.add("show-top");
    } else {
        topLink.classList.remove("show-top");
    }
});

// Active NavBAr
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function (e) {
        current[0].className = current[0].className.replace('active', "");
        this.className += " active"
    }
}

// Get cart
const cartWrapper = document.querySelector('.cart-wrapper');
const filterBtns = document.querySelectorAll('.load-btn');
const cartArr = [
    {
        id: 1,
        title: `BMX Magic Bike`,
        category: `Preload`,
        img: `/my-bicycle/asset/imgs/cart-1.jfif`,
        price: 15.99,
        desc: ` Bike Motocross`
    },
    {
        id: 2,
        title: `BMX Stunt`,
        category: `old`,
        img: `/my-bicycle/asset/imgs/cart-2.jfif`,
        price: 23.5,
        desc: ` Bicycle Motocross`
    },
    {
        id: 3,
        title: `BMX Magic Bike`,
        category: `Preload`,
        img: `/my-bicycle/asset/imgs/cart-3.jfif`,
        price: 17.09,
        desc: ` Bike Motocross`
    },
    {
        id: 4,
        title: `BMX Stunt`,
        category: `old`,
        img: `/my-bicycle/asset/imgs/cart-4.jpg`,
        price: 9.55,
        desc: ` Bicycle Motocross`
    },
    {
        id: 5,
        title: `BMX Stunt`,
        category: `old`,
        img: `/my-bicycle/asset/imgs/cart-5.jfif`,
        price: 12.34,
        desc: ` Bicycle Motocross`
    },
    {
        id: 6,
        title: `BMX Magic Bike`,
        category: `Preload`,
        img: `/my-bicycle/asset/imgs/cart-6.jfif`,
        price: 13.99,
        desc: ` Bike Motocross`
    },
    {
        id: 7,
        title: `BMX Stunt`,
        category: `old`,
        img: `/my-bicycle/asset/imgs/cart-7.jfif`,
        price: 3.45,
        desc: ` Bicycle Motocross`
    },
    {
        id: 8,
        title: `BMX Magic Bike`,
        category: `Preload`,
        img: `/my-bicycle/asset/imgs/cart-8.jpg`,
        price: 14.99,
        desc: ` Bike Motocross`
    },
    {
        id: 9,
        title: `BMX Stunt`,
        category: `old`,
        img: `/my-bicycle/asset/imgs/vi.jpg`,
        price: 10.27,
        desc: ` Bicycle Motocross`
    },
    {
        id: 10,
        title: `BMX Magic Bike`,
        category: `Preload`,
        img: `/my-bicycle/asset/imgs/cart-3.jfif`,
        price: 15.99,
        desc: ` Bike Motocross`
    },
    {
        id: 11,
        title: `BMX Stunt`,
        category: `old`,
        img: `/my-bicycle/asset/imgs/cart-2.jfif`,
        price: 9.57,
        desc: ` Bicycle Motocross`
    },
    {
        id: 12,
        title: `BMX Magic Bike`,
        category: `Preload`,
        img: `/my-bicycle/asset/imgs/bike-1.jpg`,
        price: 15.99,
        desc: ` Bike Motocross`
    },
];
// Load CartItems
window.addEventListener('DOMContentLoaded', function () {
    getCartItem(cartArr);
})
// Filter CartItems
filterBtns.forEach((filterBtn) => {
    filterBtn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;
        const cartCategory = cartArr.filter((item) => {
            if (item.category === category) {
                return item;
            }
        });
        if (category === "all") {
            return getCartItem(cartArr);
        }
        else {
            return getCartItem(cartCategory);
        }
    });
});



let images;
function getCartItem(arr) {
    let displayCart = arr.map((cartItem) => {
        // console.log(cartItem.id)
        return `<div class="cart-item">
        <div class="cart-img">
            <img onClick="test(this)" src=${cartItem.img} alt=${cartItem.title} class="img">
        </div>
        <h4 class="bike-name">${cartItem.title}</h4>
        <div class="cart-thumb">
            <p class="cart-price">$${cartItem.price}</p>
            <button class="add-cart" onClick = "addToCart(${cartItem.id})">
                <i class="fas fa-shopping-cart"></i>
                <p>Add to Cart</p>
            </button>
            <span class="like"> <i class="far fa-heart like" onClick="like(this)"></i></span>
        </div>
    </div>`

    });
    displayCart = displayCart.join("");
    cartWrapper.innerHTML = displayCart;
    // Get Element from cart
    cartBtn = document.querySelectorAll('.add-cart');
    images = document.querySelectorAll('.cart-img > img');

}
getCartItem(cartArr);


// Pop up modal=========
const modalOverlay = document.querySelector('.modal-overlay');
const imgStore = document.querySelector('.img-store');
const modal = document.querySelector('.modal');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const cancel = document.querySelector('.cancel');
// const expand = document.querySelectorAll('.like');


// POP MODAL
const test = e => {
    imgStore.src = e.src;
    modalOverlay.classList.add('pop-up');
    topLink.style.display = 'none';
}

let imageList = [];
imageCounter = 0;
images.forEach(image => {
    imageList.push(image.src)
});
// Previous btn
prev.addEventListener('click', function () {
    imageCounter--;
    if (imageCounter < 0) {
        imageCounter = imageList.length - 1;
    }
    imgStore.src = imageList[imageCounter];
});
next.addEventListener('click', function () {
    imageCounter++;
    if (imageCounter >= imageList.length - 1) {
        imageCounter = 0;
    }
    imgStore.src = imageList[imageCounter];
});

cancel.addEventListener('click', function () {
    modalOverlay.classList.remove('pop-up');
});

// *********** ADD TO CARTLIST *********************
const counter = document.querySelector('.count');
const cartTotalPrice = document.querySelector('.total-price');
const itemAmount = document.querySelector('.cart-value');
let cartList = [];
let cartTotal = 0;
let cartItemcount = 0;
const addToCart = id => {
    // console.log(id)
    cartArr.filter((item) => {
        if (item.id == id) {
            if (item.count) {
                item.count += 1
                cartTotal += item.price;
            }
            else {
                cartList.push(item)
                item.count = 1
                cartTotal += item.price;
            }
            cartItemcount++;
        }

    });
    // 
    // console.log(cartList);

    // console.log(cartList)
    cartTotalPrice.innerHTML = `$${cartTotal.toFixed(2)}`;
    counter.textContent = cartItemcount;
    itemAmount.textContent = cartItemcount;
    // console.log('cartList', cartList)
    // sidebar.classList.add('show-sidebar');
}

addToCart();

const cartIcon = document.querySelector('.cart-icon');
const cartcontainer = document.querySelector('.cart-array');


const viewCart = () => {
    let displayCart = cartList.map(cart => {

        // console.log('this is item id', cart.id)
        return ` <div class="item-array">
        <div class="about-item">
            <img src="${cart.img}" class="bike-1">
            <div class="about">
                <h4>${cart.title}</h4>
                <p>new / white</p>
            </div>
        </div>
        <div class="add-more">
            <i class="fas fa-minus"></i>
            <div class="item-add">
                <p class="value">${cart.count}</p>
            </div>
            <i class="fas fa-plus"></i>
        </div>
        <div class="price">
            <p>$ ${((parseFloat(cart.price)) * cart.count).toFixed(2)}</p>
        </div>
        <button class="delete-item" onClick="deleteItem(${cart.id})">
        <span class="cartid" style="display: none;">${cart.id}</span>
            <img src="/my-bicycle/asset/imgs/close.svg" alt="close" class="close">
        </button>
    </div>
  `
    });
    displayCart = displayCart.join('');
    cartcontainer.innerHTML = displayCart;
    const minusBtns = document.querySelectorAll('.fa-minus');
    const addBtns = document.querySelectorAll('.fa-plus');
    const value = document.querySelectorAll('.value');

    const deleteBtns = document.querySelectorAll('.delete-item');
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            let element = e.currentTarget.parentElement;
            cartcontainer.removeChild(element);
        })
    })
}
cartIcon.addEventListener('click', viewCart);
// *********** ADD TO CARTLIST *********************  tg


// Delete Item 
function deleteItem(item) {
    cartList = cartList.filter((list) => {
        if (list.id === item) {
            if (cartTotal === -0.00) {
                cartTotal = 0.00;
            }
            cartTotal -= list.price;
            cartTotalPrice.textContent = `$${cartTotal.toFixed(2)}`;
        }
        return (list.id !== item);
    });

    cartItemcount = cartList.length;
    counter.textContent = cartItemcount;
    itemAmount.textContent = cartItemcount;
}

// Testimonial Section
const imgContent = document.querySelector('.reviewer-img');
const reviewer = document.querySelector('.reviewer');
const review = document.querySelector('.review');
const slideBtnLeft = document.querySelector('.slide-prev');
const slideBtnRight = document.querySelector('.slide-right');
console.log(slideBtnLeft, slideBtnRight)
// const wrapper = document.querySelector('.slide-container');
const peopleReview = [
    {
        per: `/my-bicycle/asset/imgs/re-1.jpg`,
        text: `Cool and fantastics bicycles. I was spaoilt for choice. Every bicycle on the
        AvidBikers made sense, i just had to settle for one based on the color.`,
        author: `Ismail Abdullah`
    },
    {
        per: `/my-bicycle/asset/imgs/re-1.jpg`,
        text: `and fantastics bicycles. I was spaoilt for choice. Every bicycle on the
        AvidBikers made sense, i just had to settle for one based on the color.`,
        author: `obi chinyere`
    },
    {
        per: `/my-bicycle/asset/imgs/re-1.jpg`,
        text: `and fantastics bicycles. I was spaoilt for choice. Every bicycle on the
        AvidBikers made sense, i just had to settle for one based on the color.`,
        author: `Ismail Ibrahim`
    },
    {
        per: `/my-bicycle/asset/imgs/re-1.jpg`,
        text: `and fantastics bicycles. I was spaoilt for choice. Every bicycle on the
        AvidBikers made sense, i just had to settle for one based on the color.`,
        author: `John doe`
    },
    {
        per: `/my-bicycle/asset/imgs/re-1.jpg`,
        text: `"Cool and fantastics bicycles. I was spaoilt for choice. Every bicycle on the
             AvidBikers made sense, i just had to settle for one based on the color.`,
        author: `charle mark`
    },
];

let currentItem = 0
// Get new Reveiewer
function feedback(user) {
    const item = peopleReview[user];
    imgContent.src = item.per;
    reviewer.textContent = item.author;
    review.textContent = item.text
}
window.addEventListener('DOMContentLoaded', function (e) {
    feedback(currentItem);
});

slideBtnLeft.addEventListener('click', function () {
    currentItem++;
    if (currentItem === 0) {
        currentItem = peopleReview.length - 1;
    }
    feedback(currentItem)
});

slideBtnRight.addEventListener('click', function () {
    currentItem++;
    if (currentItem === peopleReview.length - 1) {
        currentItem = 0;
    }
    feedback(currentItem)
});







