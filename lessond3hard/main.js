
const lang = prompt('ВВедите ваш язык ru или en', 'ru');
const langDayArray = {
  'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
if (lang === 'ru') {
    console.log(langDayArray.ru);
  } else if (lang === 'en') {
    console.log(langDayArray.en);
  } else {
    console.log('вы ввели неверный язык');
  }
  switch (lang) {
    case 'ru':
      console.log(langDayArray.ru);
      break;
    case 'en':
      console.log(langDayArray.en);
      break;
    default:
      console.log('вы ввели неверный язык');
  }
  console.log(langDayArray[lang])

  const namePerson = prompt('введите ваше имя')

namePerson === 'Артем' ? console.log('Директор') :
namePerson==='Александр' ? console.log('преподаватель') : console.log('студент');
