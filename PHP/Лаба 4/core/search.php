<?php
require_once '../class/Database.php';
$out = $_POST['data']; // получаю даные отправленые через ajax
$out = explode(" ", $_POST['data']);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"ы
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <title>Document</title>
</head>
<body>
<?php

if (strlen($out[0]) == 0 && $searchQuery == null) { // если длина строки = 0 вывожу сообщение
    echo "<p>Пустой запрос</p>";
}else{ // что-то напечатано в инпуте выполняю запрос в БД
    $searchQuery = $db->like($out[0], $out[0], $out[0], $out[0]); // поиск по id || login || name или surname
    foreach ($searchQuery as $key => $value) {
        echo "<p>{$value['id']},
         {$value['login']},
         {$value['name']},
         {$value['surname']},
         {$value['role']},
         {$value['lang']},
    </p>";
    }
}
?>
</body>
</html>
