const bioBuilder = () => {
  const bio = `
  <div class="container align-self-center" id="textCaro">
    <div id="carouselContent" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active text-center p-5">
              <p>Hi there! I'm Katy Fry. I'm a photographer, designer, artist, and aspiring web developer who calls Nashville, TN home.</p>

              <p>I grew up in a tiny town in the Ozark hills of Southwest Missouri. I spent my  time drawing, writing, pretending, and--once we were finally able to afford a computer--playing games and surfing the web over a shakey dial-up connection.</p> 
            </div>
            <div class="carousel-item text-center p-5">
              <p>I moved to Nashville in 2010 to pursue a degree in Piano Performance and English. I graduated in 2015 with a double major in Theology and English and began working as an Editoral Assistant for a nonprofit. I quickly gained the title of Editor and worked hard to put out content that was both creative as well as precise and accurate.</p>
            </div>
            <div class="carousel-item text-center p-5">
              <p>Needing a change from the publishing world, I accepted a position as Communications Director for another nonprofit in 2019. This is where I rediscovered my love of graphic design and developed a love for the web. I started looking into what it would take to be a Web Developer, and came across Nashville Software School.</p>
            </div>
            <div class="carousel-item text-center p-5">
              <p>I decided to take a Jumpstart class with NSS to see if this could be a good fit for me. I ended up falling in love with the world of code. It satisfied my need to be both creative and analytical, and engaged both the right and left sides of my brain. I was hooked. I immediately applied for the part-time year-long full-stack web development program at NSS.</p>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselContent" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselContent" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>`;
  document.querySelector('#bioText').innerHTML = bio;
};

export default bioBuilder;
