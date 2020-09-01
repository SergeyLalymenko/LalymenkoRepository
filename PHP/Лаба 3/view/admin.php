<?php
session_start();
if ($_SESSION['login'] != "Vasisualiy") {
    header("Location: /'HTTP/1.0 403 Forbidden");
}
if (is_null($_SESSION['lang'])) $_SESSION['lang'] = 'ru';
require '../class/Auth.php'; // include class Session with method 'auth()'
require '../class/User.php'; // include Class Users using method 'sayHello()'
require_once '../translate/translate.php';
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Страница Админа</title>
</head>
<body>
<h1>Админ</h1>
<?php

// Установка Языка
$user = new Admin($users[0], $translate);

if (array_key_exists($_SESSION['lang'], $translate)) {

    echo $user->sayHello($_SESSION['lang'], $users[0]['role']);
}
//--------------------------------------------------------------------------------------------
echo "
        </br>
        </br>
        <div>К примеру зайти на страницы других пользователей</div>
        <ul>
            <li><a href='manager.php'>Менеджер {$users[1]['name']} {$users[1]['surname']}</a></li>
            <br>
            <li><a href='../core/user_list.php'>Страница клиентов</a></li>
        </ul>
    ";
?>
<br>
<form>
    <input type="submit" name="exit" value="Выйти с учётной записи">
</form>
<form method="POST">
    <label for="lang">Вибирете язык:</label>
    <select name="lang" id="lang">
        <option value="ru">ru</option>
        <option value="en">en</option>
        <option value="uk">uk</option>
        <option value="it">it</option>
    </select>
    <input type="submit" value="Подтвердить">
</form>
</body>
</html>