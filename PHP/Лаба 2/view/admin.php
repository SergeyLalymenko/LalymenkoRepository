<?php
session_start();
require '../core/users.php'; // include array 'users' with information about All Users
if ($_SESSION['login'] != $users[0]['login']) {
    header("Location: /'HTTP/1.0 403 Forbidden");
}
require '../class/Session.php'; // include class Session with method 'auth()'
require '../class/User.php'; // include Class Users using method 'sayHello()'
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
$user = new Admin($users[0]);
if ($_SESSION['lang'] == 'en'){
    echo $user->sayHelloEng();
}elseif ($_SESSION['lang'] == 'uk') {
    echo $user->sayHelloUkr();
}elseif ($_SESSION['lang'] == 'it') {
    echo $user->sayHelloItali();
}else {
    echo $user->sayHelloDefault();
}
//--------------------------------------------------------------------------------------------
echo "
        </br>
        </br>
        <div>К примеру зайти на страницы других пользователей</div>
        <ul>
            <li><a href='manager.php'>Менеджер {$users[1]['name']} {$users[1]['surname']}</a></li>
            <br>
            <li><a href='client.php'>Страница клиентов</a></li>
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
