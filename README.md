# Birthday Countdown Timer ⏲

Find out how much time is left until your next birthday.

## 🚀 Technologies
- HTML
- CSS
- JavaScript

## ℹ Description/Important notes

It was inspired by a project made by Florin Pop. Below there is his original project:
- https://github.com/florinpop17/10-projects-10-hours/tree/master/countdown-timer

My intention in this project was to practice and understand better how dates and time works on JavaScript.

I did some modifications on HTML and CSS as you can compare below:
<h3> ✅ Just to remember, these examples were recorded on 07th, January 2022: </h3>
### Original by Florin Pop:
- In his project, the countdown timer just counts the time until the next new year.
<h1>
  <img src="./assets/florin-countdown-timer.gif" />
</h1>

- One note here, and I'm not criticizing, because he made 10 projects in 10 hours, so he was in a battle against the time 😆, but on his project is necessary put the date 
for the next new year in a variable in his code. So, it's a problem, because it's only going to just work one year. Look this part below:

```javascript
const newYears = "1 Jan 2023";
```

I changed it on my project, because I don't want to know the counter time for the next year, I want to know about next birthday.

### Now, it's mine project working:

<h1>
  <img src="./assets/lucas-countdown-timer.gif" />
</h1>

Basically I just used this part below by the Florin's project, and some part of his idea 😅. I could see how to calculate the time to use in miliseconds:

```javascript
    totalMiliSeconds = (dateNextBirthday - todayToCalculate) / 1000;

    var days = Math.floor(totalMiliSeconds / 3600 / 24);
    var hours = Math.floor(totalMiliSeconds / 3600) % 24;
    var minutes = Math.floor(totalMiliSeconds / 60) % 60;
    var seconds = Math.floor(totalMiliSeconds) % 60;

    valueDaysEl.textContent = days < 10 ? '0' + days : days;
    valueHoursEl.textContent = hours < 10 ? '0' + hours : hours;
    valueMinutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    valueSecondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
```

Well, it's not everything about the project, but I just want to bring here what I did differently to practice what I have been learning!

## 📝License
This project is under the MIT license. See the [LICENSE](https://choosealicense.com/licenses/mit/) for more information.

##

If you want to collaborate, to give some opinion, if you know a different way to do, or just want to make a new friend, than send me a e-mail or message on my LinkedIn:
 <a href = "mailto:lucas.virolli2@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
 <a href="https://www.linkedin.com/in/lucasvirollidalbello/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 

##

Made with much 💜 by Lucas Virolli 🙋‍♂️
