`use strict`;

function addRecommendation(){
    let name = document.querySelector("#name-optional").value;
    let message = document.getElementById("message").value;
    if(name!='' && message!=''){
        let recommendation = document.createElement(`section`);
        let para = document.createElement(`p`);
        para.innerHTML = `" ${message} "<br><br> ${name} `;
        recommendation.setAttribute(`class`, `recommendation`);
        recommendation.appendChild(para);
        console.log(para);
        console.log(recommendation);
        let confirmation = confirm(`Are you confirm this recommendation:\n\n " ${message} "\n\n ${name} `);
        if(confirmation){
            let recommendation_section = document.querySelector(`#recommendation-container`);
            recommendation_section.appendChild(recommendation);
            let form = document.getElementById(`form`);
            const overlay = document.getElementById(`overlay`);
            const popup = document.getElementById(`popup`);
            overlay.style.display=`block`;
            popup.style.display=`block`;
            form.reset()
        }

    }else{
        alert(`You can not leave an empty recommendation!`)
    }
}

function closePopup(){
    popup.style.display = `none`;
    overlay.style.display = `none`;
}
