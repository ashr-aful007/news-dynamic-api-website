const idSearch = async (id) =>{
     const ID = (id.id) ;
     const url = `https://openapi.programming-hero.com/api/news/category/${ID}`
     const res = await fetch(url)
     const data = await res.json()
     displayCatagoris(data.data)
}


const displayCatagoris = (data) =>{
  
        const total = document.getElementById('total') 
        total.innerText = data.length;  
        toggleSpiner(true)
      const newsContainer = document.getElementById('news-Container')        
      newsContainer.innerText = '';

      const totalResult = document.getElementById('totalResult');
      const noNews = document.getElementById('noNews-pound');
    
      if(data.length === 0){
        noNews.style.display = 'block'
        totalResult.style.display = 'none'
       
      }
     else{
        noNews.style.display = 'none'
        totalResult.style.display = 'block'
                 
      }
     

     data.forEach(news=>{
        
     const showNews =  document.createElement('div')
     //destraching
      const {title, total_view, thumbnail_url, author, details, _id} = news;   
      showNews.innerHTML = `
      <div class="card mb-3" style="max-width: 950px;">
      <div class="row g-0">
        <div class="col-md-4 ">
          <img src="${thumbnail_url}" class="img-fluid rounded-start w-100 h-100" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${details.slice(0,500)}</p>
            <p class="card-text"><small class="text-muted">published date: ${author.published_date ? author.published_date : 'published date not pound' }</small></p>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <img class="athor" src="${author.img ? author.img : 'img not pound' }" alt="">
                <p class="d-inline-block fw-semibold">${author.name}</p>
              </div>
              <div>
                <i class="fa-regular fa-eye">${total_view ? total_view : 'view not pound'}<span> M</span></i>
              </div>
              <div d-inline-block>
                <i class="fa-regular fa-star-half"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <div>
               <button onclick="loadDetails('${_id}')" class="btn"><i class="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>         
      </div>          
    </div>
      `
      newsContainer.appendChild(showNews)

     })
     toggleSpiner(false)
}


// toggle spinar
const toggleSpiner = isloading =>{
  const loaderSpinr = document.getElementById('loader');
  if(isloading == true){
    loaderSpinr.classList.remove('d-none')
  }
  else{
    loaderSpinr.classList.add('d-none')
  }
}



const loadDetails = async (DeatilsId) =>{
    const url = `https://openapi.programming-hero.com/api/news/${DeatilsId}`
    try{
      const res = await fetch(url)
      const data = await res.json()
      displayAllditels(data)
    }
    catch(error){
        console.log(error)
    }

}


const displayAllditels = (data) =>{
     
}




idSearch('id')