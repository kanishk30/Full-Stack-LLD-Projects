/*
const categoriesContainer = document.querySelector('#categories');

categoriesContainer.addEventListener('click', function(e) {
    const clickedElement = e.target;
    console.log(clickedElement);

    // to be sure that product is clicked.
    if(clickedElement.classList.contains('product')) {
        // const productTitle = clickedElement.innerText;
        const productTitle = clickedElement.textContent;
        console.log('product title', productTitle);

        const closestCategory =  clickedElement
        .closest('.category');
        console.log('closestCategory', closestCategory)
        const selectedCategory = 
        closestCategory
        .querySelector('.category-title')
        const categoryText = selectedCategory.textContent;
        console.log('categoryText',categoryText);

        console.log(`Clicked on ${productTitle} in the ${categoryText} category. `)
    }
})

*/

const colorPalette = document.getElementById('color-palette');

colorPalette.addEventListener('click', function(e) {
    const clickedElement = e.target;

    // always check selexted element is the expected one or not.
    console.log(clickedElement)
    if(clickedElement.classList.contains('color-box')) {
        const color = clickedElement.style.backgroundColor;

        document.body.style.backgroundColor = color;
    }
})