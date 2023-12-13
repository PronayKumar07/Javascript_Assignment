
const loadData = (id) => {
    const category_id = id; 
    fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id ? category_id : 1000}`)
    .then((res) => res.json())
    .then((dat) => displayData(dat.data));
};

const displayData = (item) => {
    console.log(item);

    if(item.length == 0)
    {
        displayErrorMessage();
        return;
    }

    const YouTubeContainer = document.getElementById("YouTube-Container");

    const row = document.createElement("div");
    row.classList.add("row");

    item.forEach((items) => {

        console.log(items);
            const col = document.createElement("div");
            col.classList.add("col-lg-3");

            const card = document.createElement("div");
            card.classList.add("box");

            const verifiedBadge = items.authors[0].verified ? '<span class="verified-badge">✔</span>' : '';

            let timeText = "";
            if (items.others.posted_date) {
                const time = parseInt(items.others.posted_date);
                const hour = parseInt((time / 3600));
                const minute =time % 60;
                timeText = `${hour} hours ${minute} minutes ago`;
            }


            card.innerHTML = `

                <div class="img-container">
                    <img class="thumbnail-img" src="${items.thumbnail}" alt="">
                    <div class = "time-info"> ${timeText} </div>
                </div>

                <div class="inner-card">
                    <img class="profile-img" src="${items.authors[0].profile_picture}" alt="">
                    <div>
                        <h4>${items.title}</h4>
                        <p>${items.authors[0].profile_name} ${verifiedBadge}</p>
                        <p>${items.others.views} views</p>
                    </div>
                </div>
            `;

            col.appendChild(card);
            row.appendChild(col);

            
       
    });

    YouTubeContainer.innerHTML = '';
    YouTubeContainer.appendChild(row);
};

loadData(1000);

function displayErrorMessage() {
    const YouTubeContainer = document.getElementById("YouTube-Container");
    YouTubeContainer.innerHTML = `
    
        <div class = "error-section">

        <img src="Icon.png" alt="">
        <h1 class= "error-msg"> Oops!! Sorry, There is no <br> content here </h1>

        </div>
    
    `;
}


function blogWindow() {

    var newWindow = window.open("", "_blank");

    newWindow.document.body.innerHTML = `


    <style>
    .Blog{
         
        background-color: bisque;
        width: auto;
        align-items: center;
        text-align: center;
        padding: auto;
    }
    </style>


        <div class="Blog">
        
        <h1>Welcome to the Blog!</h1>

        <div class ="blog-container">
    
            <div class = "blog-1">
    
            <h2>Discuss the scope of var, let, and const</h2>
            <h3>VAR</h3>
            <p>
                Function Scope: Variables declared with var are function-scoped. This means that the variable is only accessible within the function where it is declared. If it's declared outside any function, it becomes a global variable.<br>
                <br>Hoisting: Variables declared with var are hoisted to the top of their scope. This means that you can use the variable before it's declared in the code.
            </p>
        
            <h3>LET</h3>
            <p>
                Block Scope: Variables declared with let are block-scoped. This means that the variable is only accessible within the block (a pair of curly braces {}) where it is declared.<br>
                <br>Hoisting: Unlike var, variables declared with let are not hoisted to the top of their scope. They are only accessible after the point of declaration.
            </p>
        
            <h3>CONST</h3>
            <p>
                Block Scope: Similar to let, variables declared with const are block-scoped.<br>
                <br> Hoisting: const variables are not hoisted.
            </p>
    
            </div>
    
            <div class="blog-2">
    
            <h2>Tell us the use cases of null and undefined</h2>
            <h3>NULL</h3>
            <p>we can use null to explicitly indicate that a variable or object property has no value or that it is empty.</p>
            <p>Functions might return null to indicate that there is no meaningful result</p>
            <p>It's common to use null as the initial value of an object property that may be assigned later.</p>
            
            <h3>Undefined</h3>
            <p>If a function parameter is not provided, it is set to undefined.</p>
            <p>Variables that are declared but not initialized are automatically assigned the value undefined.</p>
            <p>When you try to access an object property that doesn't exist, it results in undefined.</p>
    
            </div>
    
            <div class="blog-2">
                <h2>What do you mean by REST API? </h2>
                <p>
                    
                    REST, which stands for Representational State Transfer, is an architectural style for designing networked applications. A REST API (Application Programming Interface) is an implementation of this architectural style that allows different software applications to communicate over the internet.
                </p>
            </div>
    
    
        </div>

        </div>

        
    
    `;
}

