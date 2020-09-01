<?php
session_start();
require '../class/User.php';    // include Class Users using method 'sayHello()'
require '../core/users.php';    // include array 'users' with information about All Users
if ($_SESSION['login'] == $users[2]['login']) {
    $user = new Client($users[2]);
}elseif ($_SESSION['login'] == $users[3]['login']) {
    $user = new Client($users[3]);
}elseif ($_SESSION['login'] == $users[4]['login']) {
    $user = new Client($users[4]);
}elseif (isset($_SESSION['login'])) {
    $user = new Client($users['login']);
}
require '../class/Session.php'; // include class Session with method 'auth()'
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
    <?php // Установка Языка                    
        if ($_SESSION['lang'] == 'en'){
            echo $user->sayHelloEng();
        }elseif ($_SESSION['lang'] == 'uk') {
            echo $user->sayHelloUkr();
        }elseif ($_SESSION['lang'] == 'it') {
            echo $user->sayHelloItali();
        }else {
            echo $user->sayHelloDefault();
        }
    //----------------------------------------------------------------------------------------------------------
    ?>
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
