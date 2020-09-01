<?php
session_start();
require '../class/Auth.php'; // include class Session with method 'auth()'
require '../class/User.php';    // include Class Users using method 'sayHello()'
require_once '../translate/translate.php';
for ($i = 0; $i < count($users); $i++) {

    if ($_SESSION['login'] === $users[$i]['login']) {

        $user = new Client($users[$i], $translate);

    }
}

?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Страница Клиента</title>
</head>
<body>

<h1>Клиент</h1>
<?php   // Установка Языка

if (array_key_exists($_SESSION['lang'], $translate)) {

    echo $user->sayHello($_SESSION['lang'], $users[$i]['role']);
}


//----------------------------------------------------------------------------------------------------------
?>
<br>
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
