async function fetchData(){
    const API_KEY = "pub_8cd5eb5da56f478a814c2f4caf0b644c";
    try{
        const QUERY = document.getElementById("queryinput").value;
        const response = await fetch(`https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${QUERY}`);
        const data = await response.json();
        let anbesahtml = "";
        document.getElementById("Totalr").innerHTML = data.totalResults;
        document.getElementById("info").innerHTML = data.results.forEach(article => {
        anbesahtml += `<div class="video"><p><strong><em> ID : ${article.source_priority * 35 + 6}<em><strong></div><div class="newspicture">${article.image_url}</div><div class="source"><img src="${article.source_icon}" alt="${article.source_name + "Icon"} class="sicon"><p class="sname">${article.source_name}</p></div><div class="creator">Creator : ${article.creator}</div><div class="title"><h2><a href="${article.link}">${article.title}</a></h2></div><div class="description">${article.description}</div><div class="time"><p class="pub">Published At : ${article.pubDate}</p><p class="fetch"> Fetched At : ${article.fetched_at}></div></div>`
        }); ;
    }
    catch{
        document.getElementById("info").innerHTML = "<center><h1 class='scale-up-bottom error'><strong>ERROR 404:</strong><h1><h1 class='scale-up-bottom errorwhy'><strong><em>Error, failed to load resource please try again!</em></strong><h1><p class='sscale-up-bottom'><em>Maybe be no internet connection or server error.</em></p></center>" ;
    }
}