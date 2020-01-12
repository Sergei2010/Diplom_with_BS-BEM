<?php
    //Если поступили данные..
    if ( isset($_POST['name'],$_POST['phone'])) {

        $name = trim( htmlspecialchars( substr($_POST['name'], 0, 40) ) );
        $phone = trim( htmlspecialchars( substr($_POST['phone'], 0, 40) ) );

        if ( $name !== '' && $phone !== '' ) {

            $email = 'sergejmatvejcuk323@gmail.com';
            $domen = 'http://klasnonabe.ru/Diplom_with_BS+BEM';

            $message = 'Имя: '.$name.'<br>Телефон: '.$phone;
            $headers  = "Content-type: text/html; charset=utf-8 \r\n";
            $headers .= 'From: ' .$domen. ' <robot@' .$domen.">\r\n";
            $subject = 'Обратный звонок';
            mail($email, $subject, $message, $headers);
            echo 1;

        }
    else {
        echo 0;
    }
}
