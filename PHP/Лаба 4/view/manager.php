<?php
session_start();
if ($_SESSION['login'] != 'Afanasiy' AND $_SESSION['login'] != 'Vasisualiy') {
    header("Location: /'HTTP/1.0 403 Forbidden");
}
if (is_null($_SESSION['lang'])) $_SESSION['lang'] = 'ru';
require '../class/Auth.php'; // include class Session with method 'auth()'
require '../class/User.php'; // include Class Users using method 'sayHello()'
require_once '../translate/translate.php';
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Страница менеджера</title>
</head>
<body>
<h1>Менеджер</h1>

<?php   // Установка Языка

$user = new Manager($users[1], $translate);

if (array_key_exists($_SESSION['lang'], $translate)) {

    echo $user->sayHello($_SESSION['lang'], $users[1]['role']);
}

// ----------------------------------------------------------------------------------------
echo "
      </br>
      </br>
      Посмотреть 
    ";
?>
<a href="../core/user_list.php">список всех клиентов</a>
<br>
<form>
    <input type="submit" name="exit" value="Выйти с учётной записи">
</form>
<br>
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
