const ulTag =document.querySelector("ul");
let totalPages= 20;

function element(totalPages,page){
    let liTag='';
    let activeLi;
    let beforePages = page - 1;
    let afterPages = page + 1;

    if(page > 1){
        liTag += `<li class="numb" onclick="element(totalPages,${page-1})"><span>1</span></li>`;
    }

    for(let pageLength = beforePages; pageLength <= afterPages; pageLength++){
        if(page == pageLength){
            activeLi = "active";
        } else {
            activeLi = "";
        }
        liTag += `<li class="numb ${activeLi}"><span>${pageLength}</span></li>`;
    }

    if(page < totalPages){
        liTag +=`<li class="btn-catalog next arrow_forward">NEXT</li>`;
    }
    ulTag.innerHTML = liTag;
}
element(totalPages, 5);