const cityName = ['москва', 'санкт-петербург', 'смоленск', 'алушта', 'геленджик', 'курск', 'казань', 'нижний новгород', 'архангельск', 'йошкар-ола'];
let computerCityName = _.sample(cityName);
let restCityName = cityName.filter((cityName) => computerCityName !== cityName); 

const exceptLetters = ['ь', 'ъ', 'Ы'];

const getLastLetter = (cityName) => {
    const lastLetter = _.last(cityName);
    if (exceptLetters.includes(lastLetter)) {
        return cityName[cityName.length - 2]
    }

    return lastLetter;
};


while (true) {
    const userCityName = prompt(`Компьюьер выбрал ${computerCityName}: Ваш ход`);

    if (userCityName[0].toLowerCase() !== getLastLetter(computerCityName)) {
        alert('Вы совершили ошибку');
        break;
    }
    
    if (!restCityName.includes(userCityName.toLowerCase())) {
        alert('Такого города нет');
        break;
    }

    restCityName = restCityName.filter((cityName) => userCityName !== cityName);
    computerCityName = restCityName.find((cityName) => cityName[0] === getLastLetter(userCityName));

    if (!computerCityName) {
        alert('Компьютер проиграл');
        break;
    }

    restCityName = restCityName.filter((cityName) => computerCityName !== cityName);

};