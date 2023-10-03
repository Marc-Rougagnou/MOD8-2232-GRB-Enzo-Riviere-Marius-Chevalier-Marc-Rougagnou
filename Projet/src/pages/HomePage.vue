<script setup>

</script>

<template>
  <h1>Home Page</h1>
  <section class="instrument">
    <h1>Batterie</h1>
    <div class="instrument-info">
      <img src="../../img/batterie.jpg" alt="Batterie">
      <div class="info-grid">
        <div class="info-item">
          <h2>Création de l'instrument</h2>
          <p>La batterie moderne a évolué à partir de différents instruments de percussion.</p>
        </div>
        <div class="info-item">
          <h2>Composition de l'instrument</h2>
          <p>La batterie est composée de caisses claires, de toms, de cymbales et d'une pédale de grosse caisse.</p>
        </div>
        <div class="info-item">
          <h2>Style de musique</h2>
          <p>La batterie est utilisée dans divers styles de musique, notamment le rock, le jazz et le funk.</p>
        </div>
        <div class="info-item">
          <h2>Grands auteurs</h2>
          <p>Des batteurs légendaires comme John Bonham et Keith Moon ont marqué l'histoire de la batterie.</p>
        </div>
      </div>
    </div>
  </section>
  <div class="separator"></div>

  <section class="instrument">
    <h1>Guitare</h1>
    <div class="instrument-info">
      <img src="../../img/guitare.jpg" alt="Guitare">
      <div class="info-grid">
        <div class="info-item">
          <h2>Création de l'instrument</h2>
          <p>La guitare est un instrument à cordes qui existe depuis des siècles, évoluant à partir d'instruments similaires tels que le luth.</p>
        </div>
        <div class="info-item">
          <h2>Composition de l'instrument</h2>
          <p>Une guitare acoustique se compose généralement d'une caisse de résonance, d'un manche et de cordes en acier ou en nylon.</p>
        </div>
        <div class="info-item">
          <h2>Style de musique</h2>
          <p>La guitare est polyvalente et est utilisée dans une grande variété de styles musicaux, notamment le rock, le blues, le classique et la musique folk.</p>
        </div>
        <div class="info-item">
          <h2>Grands auteurs</h2>
          <p>Des guitaristes emblématiques tels que Jimi Hendrix, Eric Clapton et Jimmy Page ont laissé leur marque dans l'histoire de la musique.</p>
        </div>
      </div>
    </div>
  </section>
  <div class="separator"></div>

  <section class="instrument">
    <h1>Piano</h1>
    <div class="instrument-info">
      <img src="../../img/piano.jpg" alt="Piano">
      <div class="info-grid">
        <div class="info-item">
          <h2>Création de l'instrument</h2>
          <p>Le piano est un instrument à clavier inventé au début du XVIIIe siècle par Bartolomeo Cristofori en Italie.</p>
        </div>
        <div class="info-item">
          <h2>Composition de l'instrument</h2>
          <p>Un piano se compose de touches, de marteaux, de cordes et d'une caisse de résonance en bois.</p>
        </div>
        <div class="info-item">
          <h2>Style de musique</h2>
          <p>Le piano est un instrument polyvalent utilisé dans divers genres musicaux, tels que la musique classique, le jazz, le pop et bien d'autres.</p>
        </div>
        <div class="info-item">
          <h2>Grands auteurs</h2>
          <p>Des compositeurs célèbres comme Ludwig van Beethoven, Wolfgang Amadeus Mozart et Frédéric Chopin ont créé des œuvres emblématiques pour le piano.</p>
        </div>
      </div>
    </div>
  </section>
  <div class="separator"></div>

  <section class="instrument">
    <h1>Saxophone</h1>
    <div class="instrument-info">
      <img src="../../img/saxophone.jpg" alt="Saxophone">
      <div class="info-grid">
        <div class="info-item">
          <h2>Création de l'instrument</h2>
          <p>Le saxophone a été inventé par Adolphe Sax au XIXe siècle en Belgique. C'est un instrument à vent en laiton.</p>
        </div>
        <div class="info-item">
          <h2>Composition de l'instrument</h2>
          <p>Un saxophone est composé d'un corps principal, d'un bec et d'un mécanisme de clés pour produire différentes notes.</p>
        </div>
        <div class="info-item">
          <h2>Style de musique</h2>
          <p>Le saxophone est associé à des genres musicaux variés, tels que le jazz, le blues, la musique classique et la musique contemporaine.</p>
        </div>
        <div class="info-item">
          <h2>Grands auteurs</h2>
          <p>Des saxophonistes célèbres tels que Charlie Parker, John Coltrane et Stan Getz ont laissé une empreinte indélébile dans l'histoire de la musique.</p>
        </div>
      </div>
    </div>
  </section>
  <div class="separator"></div>
  <section class="large-section">
    <div class="large-box orange-background">
      <h3>Why create an account</h3>
      <p>Creating an account allows you to save your sheets and access them from anywhere.</p>
    </div>
    <div class="large-box black-background">
      <h3>How to use the site</h3>
      <p>Click on the "Sheets" tab to access the sheets. You can then search for a sheet by instrument or by author.</p>
    </div>
    <div class="large-box orange-background">
      <h3>About the creators</h3>
      <p>This site was created by a group of students from the University of Concordia.</p>
    </div>
  </section>

</template>


<style scoped>


section.instrument {
  text-align: center;
  padding: 20px;
  margin-bottom: 50px;
}


section h1 {
  font-size: 36px;
  color: #FCB90C;
  background: black;
  padding: 10px;
  border-radius: 5px;
  width: 20%;
  text-align: center;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 25px;

}

.instrument-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

img {
  max-width: 400px;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.info-item {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
}

.info-item h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.info-item p {
  font-size: 14px;
}
.info-item:nth-child(1),
.info-item:nth-child(4) {
  background-color: black;
  color: #f2f2f2;
}

.info-item:nth-child(2),
.info-item:nth-child(3) {
  background-color: orange;
  color: black;
}
.separator {
  border-bottom: 1px solid #939393; /* Ligne fine gris foncé en bas de la div */
  margin: 0 auto; /* Espace autour de la div */
  width: 50%; /* Largeur de la div */
  margin-bottom: 20px;
}
/* Style de la grande section */
.large-section {
  display: flex; /* Affiche les éléments enfants en ligne */
  justify-content: space-between; /* Répartit les éléments avec un espace égal entre eux */
  margin-top: 40px; /* Espace au-dessus de la grande section */
  margin-bottom: 40px; /* Espace en dessous de la grande section */
}

/* Style des carrés égaux */
.large-box {
  flex: 1; /* Chaque carré occupe une part égale de l'espace disponible */
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Ombre légère */
}

/* Style des titres h3 */
.large-box h3 {
  font-size: 24px;
  margin: 0;
}
.large-box p {
  font-size: 14px;
  margin: 10px 0 0 0;
}
.orange-background {
  background-color: orange;
  color: black;
}
.black-background {
  background-color: black;
  color: #f2f2f2;
}
@media screen and (max-width: 768px) {
  section h1 {
    font-size: 24px;
    width: 40%;
  }

  .image-between img {
    width: 100%; /* Ajustez la largeur de l'image pour occuper toute la largeur disponible */
    margin-bottom: 20px;
  }

  .instrument {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .info-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .info-item {
    margin: 10px;
  }

  .large-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .large-box {
    margin-bottom: 20px;
    width: 80%;
  }
  .instrument-info {
    flex-direction: column;
  }
}



</style>