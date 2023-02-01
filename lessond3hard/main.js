let langbtn = document.querySelectorAll('.btn')


langbtn.forEach(item  => {

   item.addEventListener('click',()=>{

    lang =item.innerText;
    
    if(lang ==='ru') {

        console.log('понедельник вторник среда четерг пятница субота воскресенье');

    } else if (lang === 'en') {

        console.log('Monday  Tuesday  Wednesday  Thursday  Friday  Saturday  Sunday');
    }

   })
   
});

                           //  второй вариант
// lang = prompt('выберите язык ru или en');

//  if(lang === "ru"|| lang === 'Ru' || lang === 'RU' || lang === 'rU'){

//     console.log('понедельник вторник среда четерг пятница субота воскресенье');

//    } else if (lang === 'en' || lang ==='En'|| lang === 'EN' || lang ==='En'); {

//     console.log ('Monday  Tuesday  Wednesday  Thursday  Friday  Saturday  Sunday');    

// } else {

//     console.log('неправильно указан язык попробуйте еще')
    
   
   
// }
const namePerson = 'Александр';

namePerson == 'Артем' ? console.log('Директор') : namePerson=='Александр' ? console.log('преподаватель') : console.log('студент');
