const sampleRecipes = [
  {
    id: 1,
    title: "Chicken Biryani",
    image: "https://th.bing.com/th/id/OIP.Q4f5lR46RdwAqe9hXJ7dlAHaF7?rs=1&pid=ImgDetMain"
  },
  {
    id: 2,
    title: "Fish Biryani",
    image: "https://th.bing.com/th/id/OIP.nyYNTkMmZrVVrwqbCKLUmQHaE8?w=2560&h=1707&rs=1&pid=ImgDetMain"
  },
  {
    id: 3,
    title: "Cake",
    image: "https://live.staticflickr.com/2891/9307196813_8e8641c0e5_b.jpg"
  },
  {
    id: 4,
    title: "Soft Drinks",
    image: "https://th.bing.com/th/id/R.886c0895d8ca8dae7fc47f7d674aa9d3?rik=gGjLOrxz7c4Stg&riu=http%3a%2f%2fwww.drinksindustryireland.ie%2fwp-content%2fuploads%2f2015%2f12%2fSoft-Drinkslow.jpg&ehk=BL%2fjABSiJ9XYcUIpCTfq4UvgYGRMKbLL6KKD3yb3IqQ%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 5,
    title: "Paneer Biryani",
    image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/10/SRG_-CKK-Shoot-18_226-scaled.jpg?v=1633580575"
  },
  {
    id: 6,
    title: "Egg Curry",
    image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Dhaba_Style_Egg_Curry_Recipe-3.jpg"
  },
  {
    id: 7,
    title: "Garlic Butter Chicken",
    image: "https://th.bing.com/th/id/OIP.7-IRCHau1Jm7_5MmP1_XUAAAAA?rs=1&pid=ImgDetMain"
  },
  {
    id: 8,
    title: "Roasted Mixed Vegetables",
    image: "https://www.valyastasteofhome.com/wp-content/uploads/2020/08/IMG_4602-1.jpg"
  },
  {
    id: 9,
    title: "Chicken Rice Bowl",
    image: "https://thecurlyhairedcook.files.wordpress.com/2014/11/chicken-rice-bowl1.jpg"
  },
  {
    id: 10,
    title: "Potato Salad",
    image: "https://www.houseofhawthornes.com/wp-content/uploads/2014/05/Loaded-Baked-Potato-Salad-600x901.jpg"
  }
];

function searchRecipes() {
  const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
  const filteredRecipes = sampleRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm)
  );

  const recipeContainer = document.getElementById('recipeContainer');
  recipeContainer.innerHTML = '';

  filteredRecipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const image = document.createElement('img');
    image.src = recipe.image;

    const title = document.createElement('h3');
    title.textContent = recipe.title;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      recipeCard.remove();
    });

    recipeCard.appendChild(image);
    recipeCard.appendChild(title);
    recipeCard.appendChild(removeButton);
    recipeContainer.appendChild(recipeCard);
  });
}

// Populate the initial recipe cards
searchRecipes();