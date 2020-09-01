<?php
require '../c';

abstract class User
{
    protected $_login;
    protected $_password;
    protected $_users = [[
    ]];

// конструктор
    function __construct($users, $_login, $_password)
    {
        $this->_users = $users;
        $this->_login = $_login;
        $this->_password = $_password;
    }

// method
    public function sayHello()
    {
        return "Здравствуйте\n" . "<strong>{$this->_users['role']}\n</strong>" . "{$this->_users['name']} {$this->_users['surname']}\n";
    }

}

/**
 * Admin
 */
class Admin extends User
{
    public function sayHello()
    {
        return parent::sayHello() . 'вы можете на сайте делать всё';
    }
}

/**
 * MANAGER
 */
class Manager extends User
{

    public function sayHello()
    {
        return parent::sayHello() . 'вы можете на сайте изменять, удалять и создавать клиентов';
    }
}

/**
 *  Client
 */
class Client extends User
{
    public function sayHello()
    {
        return parent::sayHello() . 'вы можете на сайте просматривать информацию доступную пользователям';
    }
}

?>