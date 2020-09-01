<?php
require '../class/Database.php';
$session = $_SESSION['login']; // получаю пользователя который записан в сесии
$selectedUsers = $db->getRow("SELECT * FROM users WHERE login = ?", [$session]); // получаю данные пользователя из БД в зависимости от того что в сесии

$id = $selectedUsers['id']; // id выбраного пользователя

// получаю данные для обновление информации
$login = $_POST['change-login'];
$pass = $_POST['change-pass'];
$name = $_POST['change-name'];
$surname = $_POST['change-surname'];
$lang = $_POST['change-lang'];

if  (isset($_POST['change-btn'])) {
   $update = $db->updateRow("UPDATE users SET login = ?, password = ?, name = ?, surname = ?, lang = ? WHERE id = ?", [$login, $pass, $name, $surname, $lang, $id]);
    echo "Запись с номером" . " ". $id. " " ."была изменина!"; // вывожу сообщение о том что запись изменена
    echo '<meta http-equiv="refresh" content="3; URL=http://php.com/lab4/view/client.php" />'; //редирект на главную
}
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Редактирование пользователя</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<form action="" method="POST">
    <p><label for="login">Новый логин:</label></p>
    <input type="text" id="login" name="change-login" value="<?php echo $selectedUsers['login'];?>">
    <p><label for="pass">Новый пароль:</label></p>
    <input type="text" id="pass" name="change-pass" value="<?php echo $selectedUsers['password'];?>">
    <p><label for="name">Новое имя:</label></p>
    <input type="text" id="name" name="change-name" value="<?php echo $selectedUsers['name'];?>">
    <p><label for="surname">Новая фамилия:</label></p>
    <input type="text" id="surname" name="change-surname" value="<?php echo $selectedUsers['surname'];?>">
    <p><label for="lang">Новый язык:</label></p>
    <input type="text" id="lang" name="change-lang" value="<?php echo $selectedUsers['lang'];?>">
    <p><input class="btn btn-success" type="submit" name='change-btn'></p>

    <a href="../view/client.php">Вернуться назад</a>
</form>
</body>
</html>

