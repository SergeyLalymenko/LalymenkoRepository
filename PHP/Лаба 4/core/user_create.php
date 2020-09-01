<?php
session_start();
if  ($_SESSION['login'] != 'Vasisualiy' && $_SESSION['login'] != 'Afanasiy') {
    header("Location: /'HTTP/1.0 403 Forbidden");
}
require_once '../class/Database.php';

$login = $_POST['create-login'];
$pass = $_POST['create-pass'];
$name = $_POST['create-name'];
$surname = $_POST['create-surname'];
$lang = $_POST['create-lang'];
$role = $_POST['create-role'];

if (isset($_POST['create-user-btn'])) {
    $insertRow = $db->insertRow("INSERT INTO users(login, password, name, surname, lang, role) VALUES(?, ?, ?, ?, ?, ?)", [$login, $pass, $name, $surname, $lang, $role]);
}
?>

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Создание пользователя</title>
</head>
<body>
<form action="" method="POST" style="margin-left: 1rem;">
    <p>Логин:</p>
        <input type="text" name="create-login">
    <p>Пароль:</p>
        <input type="text" name="create-pass">
    <p>Имя:</p>
        <input type="text" name="create-name">
    <p>Фамилия:</p>
        <input type="text" name="create-surname">
    <p>Язык:</p>
        <input type="text" name="create-lang">
    <p>Роль:</p>
        <input type="text" name="create-role">

    <p style="margin-top: 1rem;"><input class="btn btn-info" type="submit" name="create-user-btn"></p>
    <br>
    <a class="btn btn-warning" href="user_list.php">Список всех пользователей</a>
</form>
</body>
</html>
