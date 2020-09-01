<?php
session_start();
$login = $_POST['login'];
$pass = $_POST['pass'];

class Session {

    protected $users = [['login' => 'Vasisualiy', 'name' => 'Василий', 'surname' => 'Лоханкин', 'password' => '12345', 'role' => 'admin', 'lang' => 'ru'],
        ['login' => 'Afanasiy', 'name' => 'Афанасий', 'surname' => 'Цукерберг', 'password' => '54321', 'role' => 'manager', 'lang' => 'en'],
        ['login' => 'Petro', 'name' => 'Петр', 'surname' => 'Инкогнито', 'password' => 'EkUC42nzmu', 'role' => 'client', 'lang' => 'ua'],
        ['login' => 'Pedrolus', 'name' => 'Педро', 'surname' => 'Миланов', 'password' => 'Cogito_ergo_sum', 'role' => 'client', 'lang' => 'it'],
        ['login' => 'Sasha', 'name' => 'Александр', 'surname' => 'Александров', 'password' => 'Ignorantia_non_excusat', 'role' => 'client', 'lang' => '']
    ];

    public  function setSessionValue($login) {
        $_SESSION["login"] = $login; //Записываем в сессию логин пользователя
    }

    public function auth($login, $pass) {
        for ($i=0; $i <= count($this->users); $i++) {
            if ($login == $this->users[$i]['login'] && $pass == $this->users[$i]['password'] && $this->users[$i]['role'] == 'admin') {
                $this->setSessionValue($login);
                header("Location: /lab2/view/admin.php");
            }elseif ($login == $this->users[$i]['login'] && $pass == $this->users[$i]['password'] && $this->users[$i]['role'] == 'manager'){
                $this->setSessionValue($login);
                header("Location: /lab2/view/manager.php");
            }elseif ($login == $this->users[$i]['login'] && $pass == $this->users[$i]['password'] && $this->users[$i]['role'] == 'client') {
                $this->setSessionValue($login);
                header("Location: /lab2/view/client.php");
            }
        }
    }


    public function out() {
        $_SESSION = array(); //Очищаем сессию
        session_destroy(); //Уничтожаем
    }
}

$session = new Session(); // создаю экземпляр класса Session

if (isset($login) && isset($pass)) { //Если логин и пароль были отправлены
    $session->auth($login, $pass);
}

if (isset($_GET["exit"])) { //Если нажата кнопка выхода
    if ($_GET["exit"] == true) {
        $session->out(); //Выходим
        header("Location: ../login.php"); //Редирект после выхода
    }
}



