<?php  
	function auth($login,$pass){
	// info for Admin
	$admin_log = "admin";
	$admin_pass = "root";
	$admin_name = "Николай";
	$admin_surname = "Петров";
	$admin_rights = "Администратор";
	//info for manager 
	$manager_log = "manager";
	$manager_pass = "12345";
	$manager_name = "Анатолий";
	$manager_surname = "Смирнов";
	$manager_rights = "Менеджер";
	// info for client
	$client_log = "client";
	$client_pass = "1111";
	$client_name = "Валерий";
	$client_surname = "Козлов";
	$client_rights = "Клиент";
	
		$user=null;
		
		if ($login == $admin_log && $pass == $admin_pass) {
		// CREAT CLASS ADMIN
		$user = new Admin($admin_log, $admin_pass, $admin_name, $admin_surname, $admin_rights);
		}elseif ($login == $manager_log && $pass == $manager_pass) {
			//MANAGER
			$user = new Manager($manager_log, $manager_pass, $manager_name, $manager_surname, $manager_rights);
		}elseif ($login == $client_log && $pass == $client_pass) {
			// CLIENT
			$user = new Client($client_log, $client_pass, $client_name, $client_surname, $client_rights);
		}

		return $user;	
	}	
	class User {
		public $login;
		public $password;        
		public $name;
		public $surname;
		public $rights;
			// конструктор  
			function __construct($login, $password, $name, $surname, $rights) {
				$this->login = $login;
				$this->password = $password;
				$this->name = $name;
				$this->surname = $surname;
				$this->rights = $rights;
			}
			// method
			public  function getInfo() {
				return "Здравствуйте\n"."{$this->rights}\n" ."{$this->name} {$this->surname}\n";
			}
			
		}

		/**
		 * Наследование Admin
		 */
		class Admin extends User
		{
			public  function getInfo() {
				return parent::getInfo(). 'вы можете на сайте делать всё';
			}
		}

		/**
		 * MANAGER
		 */
		class Manager extends User
		{
			
		public  function getInfo() {
				return parent::getInfo(). 'вы можете на сайте изменять, удалять и создавать клиентов';
			}	
		}

		/**
		 *  Client
		 */
		class Client extends User
		{
			public  function getInfo() {
				return parent::getInfo(). 'вы можете на сайте просматривать информацию доступную пользователям';
			}
		}

		
	// данные с формы
	$login = $_POST['login'];
	$pass = $_POST['password'];

	

	$user = auth($login,$pass);
	if($user){
		echo  $user->getInfo() ;	
	}else{
		echo 'error';
	}

	
?>
