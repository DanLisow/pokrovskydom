<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.min.css">
    <title>Document</title>
</head>

<body>
    <?php require 'parts/header.php'; ?>

    <div class="not-found">
        <div class="container">
            <div class="not-found__inner">
                <div class="not-found__info">
                    <p class="not-found__title">404</p>
                    <p class="not-found__text">Возможно, вы перешли по ссылке, в которой была допущена ошибка,
                        или ресурс был удалён.</p>
                    <a href="/">Вернуться на главную</a>
                </div>
            </div>
        </div>
    </div>

    <?php require 'parts/footer.php'; ?>

    <script src="js/header.js"></script>
</body>

</html>