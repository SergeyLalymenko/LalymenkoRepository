<?php
session_start();
if  ($_SESSION['login'] != 'Vasisualiy') {
    header("Location: /'HTTP/1.0 403 Forbidden");
    die();
}
require_once '../class/Database.php';

if (isset($_POST['id_user'])) {
    $id = substr($_POST['id_user'], 15); // брезаю строку оставляю только id
    $delete = $db->deleteRow("DELETE FROM users WHERE id = ?", [$id]); // делаю запрос в БД на удаление
    echo "Запись с номером" . " ". $id. " " ."была удалена!"; // вывожу сообщение о том что запись удалена
    echo '<meta http-equiv="refresh" content="3; URL=http://php.com/lab4/core/user_list.php" />'; //перенапраляю на страницу с списком всех пользователей с задержкой в 3 сек
}
?>

