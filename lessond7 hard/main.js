const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота</i>', 'Воскресенье'];
const day = document.querySelector('#day');
const date = new Date();
const todayDay = date.getDay()-1;

const getDayWeek = function(){
  for (let i = 0; i < 7; i++) {
    if (i < 5 && i != todayDay) {
      day.innerHTML += `${week[i]}<br>`;
      console.log(2)
    }
  if (i>4){
    day.innerHTML += `<i>${week[i]}</i><br>`;
  
  }
    if(i==todayDay){
      day.innerHTML += `<b>${week[i]}</b><br>`;
    }
  
  
  
  }
}
getDayWeek()
