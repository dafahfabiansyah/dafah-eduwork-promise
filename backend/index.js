const apiKey = 'cabca71a01f7407ab8ec2319c74ff9a8';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cabca71a01f7407ab8ec2319c74ff9a8`;

const newsContainer = document.getElementById('news-container');

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const articles = data.articles;

    articles.forEach((article) => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('col-md-4', 'mb-4', 'd-flex');

      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.classList.add('card-img-top');
      image.src = article.urlToImage;
      image.alt = article.title;

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = article.title;

      const description = document.createElement('p');
      description.classList.add('card-text');
      description.textContent = article.description;

      const readMore = document.createElement('a');
      readMore.classList.add('btn', 'btn-primary');
      readMore.href = article.url;
      readMore.target = '_blank';
      readMore.textContent = 'Baca Selengkapnya';

      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(readMore);

      card.appendChild(image);
      card.appendChild(cardBody);

      newsItem.appendChild(card);

      newsContainer.appendChild(newsItem);
    });
  })
  .catch((error) => {
    console.log('Error:', error);
  });

// fitur search
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();

  if (searchTerm !== '') {
    const searchUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;

    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        newsContainer.innerHTML = '';

        const articles = data.articles;

        articles.forEach((article) => {
          const newsItem = document.createElement('div');
          newsItem.classList.add('col-md-4', 'mb-4', 'd-flex');

          const card = document.createElement('div');
          card.classList.add('card');

          const image = document.createElement('img');
          image.classList.add('card-img-top');
          image.src = article.urlToImage;
          image.alt = article.title;

          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');

          const title = document.createElement('h5');
          title.classList.add('card-title');
          title.textContent = article.title;

          const description = document.createElement('p');
          description.classList.add('card-text');
          description.textContent = article.description;

          const readMore = document.createElement('a');
          readMore.classList.add('btn', 'btn-primary');
          readMore.href = article.url;
          readMore.target = '_blank';
          readMore.textContent = 'Baca Selengkapnya';

          cardBody.appendChild(title);
          cardBody.appendChild(description);
          cardBody.appendChild(readMore);

          card.appendChild(image);
          card.appendChild(cardBody);

          newsItem.appendChild(card);

          newsContainer.appendChild(newsItem);
        });
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
});

//refresh
const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
  location.reload();
});
