<?php
session_start();
require 'class/Auth.php';       // include class Session with method 'auth()'
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Авторизация</title>
</head>
<body>
<form action="" method="POST">
    <label for="login">Логин:</label>
    <input type="text" name="login" id="login">
    <label for="pass">Пароль:</label>
    <input type="text" name="pass" id="pass">
    <input type="submit" name="entry">
</form>
</body>
</html>
