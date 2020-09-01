<?php
session_start();
require '../core/users.php';   // include array 'users' with information about All Users
if ($_SESSION['login'] != $users[1]['login'] AND $_SESSION['login'] != $users[0]['login']) {
    header("Location: /'HTTP/1.0 403 Forbidden");
}
require '../class/Session.php'; // include class Session with method 'auth()'
require '../class/User.php'; // include Class Users using method 'sayHello()'
var_dump($_SESSION);
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
<?php // Установка Языка                 
    $user = new Manager($users[1]);
        if ($_SESSION['lang'] == 'en'){
            echo $user->sayHelloEng();
        }elseif ($_SESSION['lang'] == 'uk') {
            echo $user->sayHelloUkr();
        }elseif ($_SESSION['lang'] == 'it') {
            echo $user->sayHelloItali();
        }else {
            echo $user->sayHelloDefault();
        }
// ----------------------------------------------------------------------------------------
echo "
      </br>
      </br>
      Вы можете просмотреть страницу клиентов
    ";
?>
    <a href="client.php">страница клиентов</a>
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
