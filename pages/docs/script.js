/*const apiData = [
  {
    category: "Ai APIs",
    items: [
      {
        name: "Imagine",
        link: "https://nikka-api.vercel.app/imagine?prompt=ball&apiKey=nikka",
      },
      {
        name: "Blackbox",
        link: "https://nikka-api.us.kg/blackbox?q=hi&apiKey=nikka",
      }
    ]
  },
  {
    category: "Search APIs",
    items: [
      {
        name: "Google",
        link: "https://nikka-api.vercel.app/google?q=haki&apiKey=nikka",
      },
      {
        name: "Lyrics",
        link: "https://nikka-api.vercel.app/lyrics?q=haki&apiKey=nikka",
      },
      {
        name: "Ytsearch",
        link: "https://nikka-api.us.kg/yts?q=ozeba&apiKey=nikka",
      },
      {
        name: "spotify",
        link: "https://nikka-api.us.kg/spotify?q=ozeba&apiKey=nikka",
      },
      {
        name: "Mod Apk",
        link: "https://nikka-api.us.kg/mod?q=tiktok&apiKey=nikka",
      }
    ]
  },
  {
    category: "Converter",
    items: [
      {
        name: "Currency Converter",
        link: "https://nikka-api.vercel.app/convert/currency?from=USD&to=EUR&amount=100&apiKey=nikka",
      },
      {
        name: "Length Converter",
        link: "https://nikka-api.us.kg/convert/length?from=cm&to=m&amount=100&apiKey=nikka",
      }
    ]
  },
  {
    category: "Fun",
    items: [
      {
        name: "Jokes",
        link: "https://nikka-api.vercel.app/jokes?apiKey=nikka",
      },
      {
        name: "Quotes",
        link: "https://nikka-api.us.kg/quotes?apiKey=nikka",
      }
    ]
  },
  {
    category: "Anime",
    items: [
      {
        name: "Anime Characters",
        link: "https://nikka-api.vercel.app/anime?name=Naruto&apiKey=nikka",
      },
      {
        name: "Anime Search",
        link: "https://nikka-api.us.kg/animesearch?q=Naruto&apiKey=nikka",
      }
    ]
  },
  {
    category: "Weather",
    items: [
      {
        name: "Current Weather",
        link: "https://nikka-api.vercel.app/weather?q=London&apiKey=nikka",
      },
      {
        name: "Weather Forecast",
        link: "https://nikka-api.us.kg/forecast?q=London&apiKey=nikka",
      }
    ]
  },
  {
    category: "Christian",
    items: [
      {
        name: "Bible Verses",
        link: "https://nikka-api.vercel.app/bible/verse?apiKey=nikka",
      },
      {
        name: "Christian Quotes",
        link: "https://nikka-api.us.kg/christianquotes?apiKey=nikka",
      }
    ]
  }
];

const apiListContainer = document.getElementById('apiList');

apiData.forEach(category => {
  const categorySection = document.createElement('div');
  categorySection.classList.add('category-section');
  
  const categoryHeader = document.createElement('div');
  categoryHeader.classList.add('category-header');
  categoryHeader.innerText = category.category;
  categorySection.appendChild(categoryHeader);
  
  category.items.forEach(apiItem => {
    const apiItemDiv = document.createElement('div');
    apiItemDiv.classList.add('api-item');

    const apiName = document.createElement('div');
    apiName.classList.add('api-name');
    apiName.innerText = apiItem.name;
    apiItemDiv.appendChild(apiName);

    const apiLink = document.createElement('a');
    apiLink.href = apiItem.link;
    apiLink.target = "_blank";

    const testButton = document.createElement('button');
    testButton.innerText = "Test API";
    apiLink.appendChild(testButton);

    apiItemDiv.appendChild(apiLink);
    categorySection.appendChild(apiItemDiv);
  });

  apiListContainer.appendChild(categorySection);
});
*/
