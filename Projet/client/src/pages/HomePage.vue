<template>
  <h1>Welcome to Not My Tempo </h1>
  <section class="instrument">
    <h1>Drums</h1>
    <div class="instrument-info">
      <img src="../../img/batterie.jpg" alt="Batterie">
      <div class="info-grid">
        <div class="info-item">
          <h2>Instrument creation</h2>
          <p>Modern drums have evolved from a variety of percussion instruments.</p>
        </div>
        <div class="info-item">
          <h2>Instrument composition</h2>
          <p>The drum kit consists of snare drums, toms, cymbals and a bass drum pedal.</p>
        </div>
        <div class="info-item">
          <h2>Music style</h2>
          <p>Drums are used in a variety of musical styles, including rock, jazz and funk.</p>
        </div>
        <div class="info-item">
          <h2>Great musicians</h2>
          <p>Legendary drummers such as John Bonham and Keith Moon have left their mark on drumming history.</p>
        </div>
      </div>
    </div>
  </section>
  <div class="separator"></div>

  <section class="instrument">
    <h1>Guitar</h1>
    <div class="instrument-info">
      <img src="../../img/guitare.jpg" alt="Guitare">
      <div class="info-grid">
        <div class="info-item">
          <h2>Instrument creation</h2>
          <p>The guitar is a stringed instrument that has been around for centuries, evolving from similar instruments such as the lute.</p>
        </div>
        <div class="info-item">
          <h2>Instrument composition</h2>
          <p>An acoustic guitar generally consists of a body, neck and steel or nylon strings.</p>
        </div>
        <div class="info-item">
          <h2>Music style</h2>
          <p>The guitar is versatile and is used in a wide variety of musical styles, including rock, blues, classical and folk.</p>
        </div>
        <div class="info-item">
          <h2>Great musicians</h2>
          <p>Iconic guitarists such as Jimi Hendrix, Eric Clapton and Jimmy Page have left their mark on music history.</p>
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
          <h2>Instrument creation</h2>
          <p>The piano is a keyboard instrument invented in early 18th-century Italy by Bartolomeo Cristofori.</p>
        </div>
        <div class="info-item">
          <h2>Instrument composition</h2>
          <p>A piano consists of keys, hammers, strings and a wooden resonance box.</p>
        </div>
        <div class="info-item">
          <h2>Music style</h2>
          <p>The piano is a versatile instrument used in a variety of musical genres, such as classical, jazz, pop and many others.</p>
        </div>
        <div class="info-item">
          <h2>Great musicians</h2>
          <p>Famous composers such as Ludwig van Beethoven, Wolfgang Amadeus Mozart and Frédéric Chopin created iconic works for the piano.</p>
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
          <h2>Instrument creation</h2>
          <p>The saxophone was invented by Adolphe Sax in Belgium in the 19th century. It is a brass wind instrument.</p>
        </div>
        <div class="info-item">
          <h2>Instrument composition</h2>
          <p>A saxophone consists of a main body, a mouthpiece and a key mechanism for producing different notes.</p>
        </div>
        <div class="info-item">
          <h2>Music style</h2>
          <p>The saxophone is associated with a wide variety of musical genres, including jazz, blues, classical and contemporary music.</p>
        </div>
        <div class="info-item">
          <h2>Great musicians</h2>
          <p>Famous saxophonists such as Charlie Parker, John Coltrane and Stan Getz have left an indelible mark on music history.</p>
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

h1{
  text-align: center;
  margin:1%;
  color:#FCB90C;
  border: 3px solid #FCB90C;
  background-color: #000000;
  width: fit-content;
  padding: 1%;;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;

}

section h1 {
  font-size: 36px;
  color: #FCB90C;
  background: #000000;
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
.info-item:nth-child(1), .info-item:nth-child(4) {
  background-color: #000000;
  color: #f2f2f2;
}

.info-item:nth-child(2), .info-item:nth-child(3) {
  background-color: #ffa500;
  color: #000000;
}

.separator {
  border-bottom: 1px solid #939393; 
  margin: 0 auto; 
  width: 50%; 
  margin-bottom: 20px;
}

.large-section {
  display: flex; 
  justify-content: space-between; 
  margin-top: 40px;
  margin-bottom: 40px; 
}

.large-box {
  flex: 1;
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 5px #00000033; 
}

.large-box h3 {
  font-size: 24px;
  margin: 0;
}
.large-box p {
  font-size: 14px;
  margin: 10px 0 0 0;
}
.orange-background {
  background-color: #ffa500;
  color: #000000;
}
.black-background {
  background-color: #000000;
  color: #f2f2f2;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 24px;
  }

  section h1 {
    font-size: 24px;
    width: 60%;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .instrument {
    padding: 10px;
  }

  .info-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .large-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .large-box {
    width: 80%;
  }

  .instrument-info {
    flex-direction: column;
  }
}
</style>