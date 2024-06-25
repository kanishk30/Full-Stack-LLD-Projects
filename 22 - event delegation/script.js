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

// const colorPalette = document.getElementById('color-palette');

// colorPalette.addEventListener('click', function(e) {
//     const clickedElement = e.target;

//     // always check selexted element is the expected one or not.
//     console.log(clickedElement)
//     if(clickedElement.classList.contains('color-box')) {
//         const color = clickedElement.style.backgroundColor;

//         document.body.style.backgroundColor = color;
//     }
// })


// Comment section starts.

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.querySelector('#submitComment');
    const commentInput = document.querySelector('#commentInput');
    const commentsContainer = document.querySelector('#commentsContainer');

    submitBtn.addEventListener('click', function() {
        const commentText = commentInput.value;
        addComment(commentText)

        commentInput.value = ''
    })

    commentsContainer.addEventListener('click', function(e) {
        if(e.target.className.includes('replyBtn')) {
            const parentComment = e.target.parentElement;
            const replyInputElement = parentComment.querySelector('.replyInput');
            const replyText = replyInputElement.value;

            if(replyText) {
                addReply(parentComment, replyText)
            }

            replyInputElement.value = '';
        
        } else if(e.target.className.includes('toggleReplies')) {
            // HOMEWORK.
            // IMPLETEMENT COLLPASE/EXPAND PROPERTIES ON COMMENTS.
            
        }
        
    })


    function addComment(commentText) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('repliesContainer');
        commentElement.innerHTML = `
        <p>${commentText}</p>
        <button class='replyBtn'>Reply</button>
        <textarea class="replyInput" placeholder="Write a reply...."></textarea>
        `

        commentsContainer.appendChild(commentElement);

    }

    function addReply(parentComment, replyText) {
        const replyElement = document.createElement('div');
        // replyElement.classList.add('repliesContainer');
        replyElement.className = 'repliesContainer';
        replyElement.innerHTML = `<p>${replyText}</p>`
        const btn = document.createElement('button');
        btn.classList.add('replyBtn');
        btn.innerText = 'Reply';
        replyElement.appendChild(btn);
        const replyInput = document.createElement('textarea');
        btn.className = 'replyBtn';
        btn.placeholder = 'Write a Reply....';
        replyElement.appendChild(replyInput);
        
        parentComment.appendChild(replyElement)
    }

})