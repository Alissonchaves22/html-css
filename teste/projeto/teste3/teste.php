<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $nome  = $_POST['nome'];
    $idade  = $_POST['idade'];
    $endereco = $_POST['endereco'];
    echo "{$nome} tem {$idade} anos e mora em {$endereco}";
    ?>
</body>
</html>
