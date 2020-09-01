<?php
session_start();
if  ($_SESSION['login'] != 'Vasisualiy' && $_SESSION['login'] != 'Afanasiy') {
    header("Location: /'HTTP/1.0 403 Forbidden");
}
require_once '../class/Database.php';
$query = $db->getRows("SELECT id, login, name, surname, role FROM users");
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Список пользователей</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Login</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th style="text-align: center;" scope="col">Role</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
<?php
foreach ($query as $key => $value) {
    echo "
        <tbody>
            <tr>
            <th scope='row'>{$value['id']}</th>
                <td>{$value['login']}</td>
                <td>{$value['name']}</td>
                <td>{$value['surname']}</td>
                <td style=\"text-align: center;\">{$value['role']}</td>
                <td>
                <form class='form-delete' action='user_delete.php' method='POST'>
                 <input class=\"delete-btn btn btn-outline-danger\" type='submit' name='id_user' value='Удалить {$value['id']}'>
                </form>
                <form class='form-update' action='user_update.php' method='POST'>
                <input class=\"update-btn btn btn-outline-info\" type='submit' name='id_user' value='Редактировать {$value['id']}'>
                </form>
                </td>
            </tr>
        </tbody>
    ";
}
?>
</table>
   <p style="text-align: center"><a class="btn btn-primary" href="user_create.php">Создать пользователя</a></p> <!-- ссылка на создание пользователя -->
<?php

// сознаю переменую для перхода на главную страницу в зависимости от того что леджит в сесии
if ($_SESSION['login'] == 'Vasisualiy') {
    $linkToMainPage = "../view/admin.php";
}elseif ($_SESSION['login'] == 'Afanasiy') {
    $linkToMainPage = "../view/manager.php";
}
?>
    <p><a href="<?php echo $linkToMainPage ?>">Назад</a></p> <!-- ссылка на главную страницу -->
</body>
</html>

