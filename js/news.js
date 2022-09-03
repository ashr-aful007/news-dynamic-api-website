const idSearch = async (id) =>{
     const ID = (id.id) ;
     const url = `https://openapi.programming-hero.com/api/news/category/${ID}`
     const res = await fetch(url)
     const data = await res.json()
     displayCatagoris(data.data)
}

const displayCatagoris = (data) =>{

      const newsContainer = document.getElementById('news-Container')
     
     data.forEach(news=>{
     const showNews =  document.createElement('div')
      const {title, total_view, thumbnail_url, author, details } = news;
      // console.log(total_view)
      // console.log(title)
      // console.log(thumbnail_url)
      // console.log(author)

         console.log(news)
      showNews.innerHTML = `
      <div class="card mb-3" style="max-width: 950px;">
      <div class="row g-0">
        <div class="col-md-4 ">
          <img src="images/news.png" class="img-fluid rounded-start w-100 h-100" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${details}</p>
            <p class="card-text"><small class="text-muted">published date: ${author.published_date}</small></p>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <img class="athor" src="images/news.png" alt="">
                <p class="d-inline-block">Athor</p>
              </div>
              <div>
                <i class="fa-regular fa-eye"><span>1.5M</span></i>
              </div>
              <div>
                <i class="fa-regular fa-star-half"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <div>
               <button class="btn"> <i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>         
      </div>          
    </div>
      `
      newsContainer.appendChild(showNews)

     })
}

idSearch('id')