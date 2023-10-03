<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="app.js"></script>
</head>
<title>Displaying fetched api</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm">
                <label type="text"> Type number </label>
                <input type="text" class="form-control mt-2" id="characterId" placeholder="Enter number">
                <button onclick="fetchCharacter()" type="button" name="button"
                    class="btn btn-primary mt-2">Primary</button>
                <div id="characterInfo"></div>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
</body>

</html>