<script>
    export let data;
</script>

<section class="card-container">
  <article class="card">
    <section class="card-inner">
      <!-- Voorkant van de kaart -->
      <section class="card-front">
        <img src='/sparkle.webp' alt="sparkle" width="600px" height="auto" class="sparkle"/>
        <article class="flower">
          <h1>{data.person.name}</h1>
          <h2>{data.person.surname}</h2>
        </article>
      </section>

      <!-- Achterkant van de kaart -->
      <section class="card-back">
        <h3><a href="https://github.com/Naddybs">@my github</a></h3>
        <figure>
          <img src={data.person.avatar} alt="Profile picture of {data.person.name}" width="55%" height="auto" />
        </figure>
      </section>
    </section>
  </article>
</section>
<img src='/hibiscus-1.webp' alt="hibiscus drawing" width="30%" height="auto"  class="hibiscus-1"/>
<img src='/hibiscus.webp' alt="hibiscus drawing" width="30%" height="auto"  class="hibiscus"/>

<style>
   /* Container om de kaart te centreren */
   .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }

  /* De kaart met perspectief */
  .card {
    width: 80vw;           /* Schaal de kaart met het scherm */
    max-width: 400px;      /* Maximale breedte van de kaart */
    perspective: 1000px;   /* Perspectief voor 3D-effect */

  }

  /* De binnenkant van de kaart om te flippen */
  .card-inner {
    position: relative;
    width: 100%;
    aspect-ratio: 2 / 3;   /* Verhouding breedte/hoogte van de kaart */
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  /* Flip de kaart bij hover of focus */
  .card:hover .card-inner,
  .card:focus-within .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    height: 90%;
    backface-visibility: hidden;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 90%;
  }

  .card-front {
    background: transparent;
    border: solid 5px black;

  }

  /* acterkant kaart effecten */
  .card-back {  
    background: linear-gradient(45deg, #ff00d9, #00e0ff, #ff00a1, #00ff75, #ff00e4);
    background-size: 400% 400%;
    animation: gradientShift 2s ease infinite, pulseGlow 5s ease-in-out infinite;
    border-radius: 15em 2em;
    transform: rotateY(180deg);
  }

  /* Bewegende gradient animatie*/
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Animatie om de kaart te laten gloeien */
@keyframes pulseGlow {
  0% {
    box-shadow: 0 0 60px rgb(61, 249, 255);
  }
  50% {
    box-shadow: 0 0 80px rgb(204, 1, 255);
  }
  100% {
    box-shadow: 0 0 60px rgb(229, 3, 71);
  }
}

a{
  text-decoration: none;
  font-family: 'Hippie Mods', sans-serif;
  font-size: 2rem;
  color: #000;
}

  /* Tekst centreren */
  article,
  figure {
    text-align: center;
    width: 100%;
  }

  /* afbeeldingen decoratie niet weergeven op mobile */
  .sparkle {
  display: none;
  }
  .hibiscus-1, .hibiscus {
  display: none;
  }

  .flower {
    width: 15em;
    aspect-ratio: 1; /* Dit zorgt ervoor dat de afbeelding niet vervormt */
    --g: /20.56% 20.56% radial-gradient(#000 calc(71% - 1px),#0000 71%) no-repeat;
    mask: 100% 50% var(--g), 93.3% 75% var(--g), 75% 93.3% var(--g), 50% 100% var(--g), 25% 93.3% var(--g), 6.7% 75% var(--g), 0% 50% var(--g), 6.7% 25% var(--g), 25% 6.7% var(--g), 50% 0% var(--g), 75% 6.7% var(--g), 93.3% 25% var(--g), radial-gradient(100% 100%, #000 38.37%, #0000 calc(38.37% + 1px));
    background: radial-gradient(circle, rgb(130 215 204/66%) 0%, #3500d5);
    & h1, h2{
        position: relative;
        top: 30%;
        font-family: 'Hippie Mods', sans-serif;
        font-size: 2.5rem;
        color: black;
        margin: 0;
    }
}

/* Vanaf ipad schermen layout aanpassen */
@media (min-width: 600px){
  .sparkle{
    display: block;
    position: absolute;
    z-index: 1;
    animation: sparkleColorShift 2s infinite alternate ease-in-out;
    transform-origin: center;
}

@keyframes sparkleColorShift  {
    0% {
        filter: drop-shadow(0 0 5px #ff009d);
    }
    50% {
        filter: drop-shadow(0 0 5px #38ecec);
    }
    100% {
        filter: drop-shadow(0 0 5px #00ff2a);
    }
}

.flower{
  width: 20em;
}


.hibiscus {
  display: block;
    position: fixed;
    bottom: 0;
    right: 0;
    animation: hibiscusPulse 6s ease-in-out infinite, hibiscusColorShift 8s ease-in-out infinite;
    transform-origin: center;
}

.hibiscus-1 {
  display: block;
    position: fixed;
    top: 0;
    left: 0;
    animation: hibiscusPulseReverse 6s ease-in-out infinite, hibiscusColorShiftReverse 8s ease-in-out infinite;
    transform-origin: center;
}

/* Puls-effect voor de bloemen */
@keyframes hibiscusPulse {
    0%, 100% {
        transform: scale(1); /* Originele grootte */
    }
    50% {
        transform: scale(1.1); /* Iets vergroten tijdens de puls */
    }
}

@keyframes hibiscusPulseReverse {
    0%, 100% {
        transform: scale(1); /* Originele grootte */
    }
    50% {
        transform: scale(0.9); /* Iets verkleinen tijdens de puls */
    }
}

/* Zachte kleurverschuiving om een magisch effect te creëren */
@keyframes hibiscusColorShift {
    0% {
        filter: drop-shadow(0 0 5px #ff009d); /* Voeg een rode gloed toe */
    }
    50% {
        filter:  drop-shadow(0 0 5px #5eecff); /* Voeg een groene gloed toe */
    }
    100% {
        filter:   drop-shadow(0 0 5px #1eff00); /* Voeg een blauwe gloed toe */
    }
}

@keyframes hibiscusColorShiftReverse {
    0% {
        filter: drop-shadow(0 0 5px #5d00ff); /* Voeg een blauwe gloed toe */
    }
    50% {
        filter:  drop-shadow(0 0 5px #a051e6); /* Voeg een groene gloed toe */
    }
    100% {
        filter:   drop-shadow(0 0 5px #ff009d); /* Voeg een rode gloed toe */
    }
}
}
</style>

