const idSearch = async (id) =>{
     const ID = (id.id) ;
     const url = `https://openapi.programming-hero.com/api/news/category/${ID}`
     const res = await fetch(url)
     const data = await res.json()
     displayCatagoris(data.data)
}

const displayCatagoris = (data) =>{
     
     data.forEach(news=>{
          
     })
}