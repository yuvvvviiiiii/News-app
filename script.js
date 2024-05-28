fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F')
.then(response => response.json())
.then(data => {
    const newsList = document.getElementById('new-list');
    data.items.forEach(item => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news-items');
        const li = document.createElement('li');
        const h2 = document.createElement('h2');
        const a = document.createElement('a');
        const img = document.createElement('img');
        img.src = item.enclosure ? item.enclosure.link : 'img-url.jpg'
        img.alt = item.title;

        h2.textContent = item.title;
        a.textContent = 'Read More';
        a.href = item.link;
        a.target = '_blank';
        newsDiv.appendChild(h2);
        newsDiv.appendChild(document.createTextNode(item.description));
        newsDiv.appendChild(a);
        newsList.appendChild(img);

        newsList.appendChild(newsDiv);
        
    })
})