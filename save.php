<?php
if (isset($_POST['name']) && isset($_POST['phone'])) {
    $file = 'data.txt';
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $data = "Name: $name, Phone: $phone\n";
    file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

    // Display a success message
    echo "فرم با موفقیت ارسال شد! ممنونیم $name";
    header("Location: https://quiz.thekavani.com/test.html");
    exit();
} else {
    echo "آخ‫.‬ یک چیزی این وسط درست کار نکرد‫.‬";
}
?>
