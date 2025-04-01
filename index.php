<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Landing Page</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, html {
      height: 100%;
      font-family: sans-serif;
    }

    .background {
      background-image: url('https://source.unsplash.com/1920x1080/?nature,water');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .content {
      background-color: rgba(0, 0, 0, 0.5); /* assombrit légèrement pour lisibilité */
      padding: 2rem;
      border-radius: 10px;
      text-align: center;
      color: white;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      margin-top: 1rem;
    }

    .buttons a {
      text-decoration: none;
      color: white;
      background-color: #1DA1F2; /* Couleur Twitter par défaut */
      padding: 0.75rem 1.5rem;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.3s;
    }

    .buttons a:hover {
      background-color: #0d8ddb;
    }

    @media (max-width: 600px) {
      .buttons {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>
  <div class="background">
    <div class="content">
      <h1>Bienvenue sur notre site</h1>
      <p>Suivez-nous sur les réseaux sociaux</p>
      <div class="buttons">
        <a href="https://twitter.com" target="_blank">Twitter</a>
        <a href="https://facebook.com" target="_blank">Facebook</a>
        <a href="https://instagram.com" target="_blank">Instagram</a>
      </div>
    </div>
  </div>
</body>
</html>
