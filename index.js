alert("Это сайт с игровым тестом на знание циклических алгоритмов, после каждого твоего ответа, к счётчику очков будет добавляться от 1 до 6 очков (бросок кубика D6), а при не правильном ответе будет сниматься от 2 до 12 очков (бросок двух кубиков D6), твоя цель собрать 100 очков, удачи :)");
let tyty = document.getElementById('test');
let score = 0;
let question1 = document.createElement("div");
let question2 = document.createElement("div");
let question3 = document.createElement("div");
let question4 = document.createElement("div");
let question5 = document.createElement("div");

question1.id = "question";
question1.innerHTML = `<h2>Алгоритм записывается в виде схемы, состоящей из ...</h2>
<ul>
    <li><label><input type="radio" name="qw" value="t">Блоков</label></li> <!-- ***** -->
    <li><label><input type="radio" name="qw" value="f">Окружностей</label></li>
    <li><label><input type="radio" name="qw" value="f">Кода</label></li>
    <li><label><input type="radio" name="qw" value="f">Элементов</label></li>
</ul>`

question2.id = "question";
question2.innerHTML = `<h2>Что обоначает этот блок?</h2>
<img src="img/start_end.png" class="img">

<ul>
    <li><label><input type="radio" name="qw" value="f">Условие</label></li> 
    <li><label><input type="radio" name="qw" value="t">Начало/Конец</label></li> <!-- ******* -->
    <li><label><input type="radio" name="qw" value="f">Ввод\Вывод</label></li>
    <li><label><input type="radio" name="qw" value="f">Действие</label></li>
</ul>`


question3.id = "question";
question3.innerHTML = `<h2>Сколько действий можно поместить в один блок?</h2>

<ul>
    <li><label><input type="radio" name="qw" value="t">Одно</label></li> <!-- **** -->
    <li><label><input type="radio" name="qw" value="f">Два</label></li> 
    <li><label><input type="radio" name="qw" value="f">Три</label></li>
    <li><label><input type="radio" name="qw" value="f">Больше трёх</label></li>
</ul>`

question4.id = "question";
question4.innerHTML = `<h2>Какого блока не хватает?</h2>
<img src="img/какогоНеХватает.png" class="img">
<ul>
    <li><label><input type="radio" name="qw" value="t"><img src="img/ввод_вывод.png"></label></li> <!-- ****** -->
    <li><label><input type="radio" name="qw" value="f"><img src="img/цикл.png"></label></li> 
    <li><label><input type="radio" name="qw" value="f"><img src="img/действие.png"></label></li>
</ul>`

question5.id = "question";
question5.innerHTML = `<h2>К какому типу инструкций можно отнести инструкцию у лапши быстрого приготовления?</h2>
<img src="img/инструкия.png" class="img">

<ul>
    <li><label><input type="radio" name="qw" value="f">Словестый</label></li> 
    <li><label><input type="radio" name="qw" value="f">Циклический</label></li> 
    <li><label><input type="radio" name="qw" value="t">Линйный</label></li> <!-- ****** -->
</ul>`



let array = [question1,question2,question3,question4,question5];
function newQuestion() {
    tyty.append(array[Math.floor(Math.random() * array.length)])
}
newQuestion();
function getOrLessPoints() {
    let point = document.getElementsByClassName("points");
    let div = document.getElementById('question');

    if (document.querySelector('input[name="qw"]:checked')) {
        if (document.querySelector('input[value="t"]:checked')) {
            console.log("Что ты выбрал?");
            score += 5;
        }
        else{
            console.log("Что ты НЕ выбрал?");
            if (score<=0) {
                score = score;
            }
            else{
                score -= 5;
            }
        }
        point[0].textContent = "Очки: "+score;
        if (score >= 100) {
            alert("Ты выиграл, можешь взять печеньку :)")
        }
        let parent = div.parentNode.removeChild(div);
        newQuestion();
    }
    else{
        alert("А выбрать?");
    }
}
