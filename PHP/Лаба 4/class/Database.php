<?php
session_start();

    class Database {
        public static $instance;
        public $isConn;
        protected static $datab;

        // connect to bd
        private function __construct($username = "root", $password = "", $host = "localhost", $dbname = "php_lab", $options = []) {
            $this->isConn = TRUE;
            try {
                self::$datab = new PDO("mysql:host={$host};dbname={$dbname};charset=utf8", $username, $password, $options);
                self::$datab->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$datab->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            }catch (PDOException $e) {
                throw new PDOException($e->getMessage());
            }
        }

        public static function getInstance() {
            if (self::$instance === null) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        private function __clone()
        {
        }

        private function __wakeup()
        {
        }

        // disconnect db
        public function disconnect() {
            self::$datab = NULL;
            $this->isConn = FALSE;
        }
        // get row
        public function getRow($query, $params = []) {
            try {
                $stmt = self::$datab->prepare($query);
                $stmt->execute($params);
                return $stmt->fetch();
            }catch (PDOException $e) {
                throw new PDOException($e->getMessage());
            }
        }
        // get rows
        public  function getRows($query, $params = []) {
            try {
                $stmt = self::$datab->prepare($query);
                $stmt->execute($params);
                return $stmt->fetchAll();
            }catch (PDOException $e) {
                throw new PDOException($e->getMessage());
            }
        }
        // insert row
        public function insertRow($query, $params = []) {
            try {
                $stmt = self::$datab->prepare($query);
                $stmt->execute($params);
                return TRUE;
            }catch (PDOException $e) {
                throw new PDOException($e->getMessage());
            }
        }
        // update row
        public function updateRow($query, $params = []) {
            self::insertRow($query, $params);
            return TRUE;
        }

        public function like($value, $value2, $value3 , $value4) {
            try {
                $stmt = self::$datab->prepare("SELECT * FROM users WHERE id LIKE ? OR login LIKE ? OR name LIKE ? or surname LIKE ?");
                $stmt->execute(array("%$value%", "%$value2%", "%$value3%", "%$value4%"));
                return $stmt->fetchAll();
            }catch (PDOException $e) {
                throw new PDOException($e->getMessage());
            }
        }
        // delete row
        public function deleteRow($query, $params = []) {
            self::insertRow($query, $params);
            return true;
        }
    }

$db = Database::getInstance();

