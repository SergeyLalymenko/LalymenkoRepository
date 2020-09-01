<?php
session_start();
if  ($_SESSION['login'] == "Afanasiy") {
    header("Location: /'HTTP/1.0 403 Forbidden");
}
require_once '../class/Database.php'; // подключаю класс с БД
// получаю id с нажатой кнопки в файле users-list.php
$id = substr($_POST['id_user'], 27); // обрезаю  строку оставляю только id

$selectedUser = $db->getRow("SELECT * FROM users WHERE id = ?", [$id]); // вывожу данные пользователя по которому кликнули в value

// получаю данные для обновление информации
$login = $_POST['update-login'];
$pass = $_POST['update-pass'];
$name = $_POST['update-name'];
$surname = $_POST['update-surname'];
$lang = $_POST['update-lang'];

$idUpdate = $selectedUser['id']; // id юзера который будет обновлен

// если кнопка нажата выполняю запрос на обновление данных
if  (isset($_POST['update-btn'])) {
    $update = $db->updateRow("UPDATE users SET login = ?, password = ?, name = ?, surname = ?, lang = ? WHERE id = ?", [$login, $pass, $name, $surname, $lang, $idUpdate]);
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
        <input type="text" id="login" name="update-login" value="<?php echo $selectedUser['login']?>">
    <p><label for="pass">Новый пароль:</label></p>
        <input type="text" id="pass" name="update-pass" value="<?php echo $selectedUser['password']?>">
    <p><label for="name">Новое имя:</label></p>
        <input type="text" id="name" name="update-name" value="<?php echo $selectedUser['name']?>">
    <p><label for="surname">Новая фамилия:</label></p>
        <input type="text" id="surname" name="update-surname" value="<?php echo $selectedUser['surname']?>">
    <p><label for="lang">Новый язык:</label></p>
        <input type="text" id="lang" name="update-lang" value="<?php echo $selectedUser['lang']?>">
    <p><input class="btn btn-success" type="submit" name='update-btn'></p>

    <a href="user_list.php">Список всех пользователей</a>
</form>
</body>
</html>
