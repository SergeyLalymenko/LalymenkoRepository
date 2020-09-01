<?php

$lang = $_POST['lang'];
$_SESSION['lang'] = $lang;

	abstract class User {
		protected $_users = [[
        ]];
			// конструктор
		function __construct($users) {
				$this->_users = $users;
		}

		// method
        public  function sayHelloDefault() {
			return "Здравствуйте\n"."<strong>{$this->_users['role']}\n</strong>" ."{$this->_users['name']} {$this->_users['surname']}\n";
		}

		public function sayHelloEng() {
            return "Hello\n"."<strong>{$this->_users['role']}\n</strong>" ."{$this->_users['name']} {$this->_users['surname']}\n";
        }

        public function sayHelloUkr() {
            return "Привіт\n"."<strong>{$this->_users['role']}\n</strong>" ."{$this->_users['name']} {$this->_users['surname']}\n";
        }

        public function sayHelloItali() {
            return "Ciao\n"."<strong>{$this->_users['role']}\n</strong>" ."{$this->_users['name']} {$this->_users['surname']}\n";
        }

	}
        /**
         * Admin
         */
        class Admin extends User {
            public  function sayHelloDefault() {
                return parent::sayHelloDefault(). 'вы можете на сайте делать всё';
            }

            public function sayHelloEng()
            {
                return parent::sayHelloEng(). "you can doing anythings";
            }

            public function sayHelloUkr()
            {
                return parent::sayHelloUkr(). 'ви можете робити на сайті все, що завгодно';
            }

            public function sayHelloItali()
            {
                return parent::sayHelloItali(). 'puoi fare tutto sul sito';
            }
        }

        /**
         * MANAGER
         */
        class Manager extends User{

            public  function sayHelloDefault() {
                return parent::sayHelloDefault(). 'вы можете на сайте изменять, удалять и создавать клиентов';
            }

            public function sayHelloEng()
            {
                return parent::sayHelloEng(). 'you can modify, delete and create clients on the site';
            }

            public function sayHelloUkr()
            {
                return parent::sayHelloUkr(). 'на сайті ви можете, змінювати, видаляти информацию, а також створювати нових клієнтів';
            }

            public function sayHelloItali()
            {
                return parent::sayHelloItali(). 'è possibile modificare, eliminare e creare client sul sito';
            }

        }

        /**
         *  Client
         */
        class Client extends User{
            public  function sayHelloDefault() {
                return parent::sayHelloDefault(). 'вы можете на сайте просматривать информацию доступную пользователям';
            }

            public function sayHelloEng()
            {
                return parent::sayHelloEng(). 'you can view information available to users on the site';
            }

            public function sayHelloUkr()
            {
                return parent::sayHelloUkr(). 'на сайті ви можете переглядати інформацію доступну тільки клієнтам';
            }

            public function sayHelloItali()
            {
                return parent::sayHelloItali(). 'è possibile visualizzare le informazioni disponibili per gli utenti sul sito';
            }
        }
