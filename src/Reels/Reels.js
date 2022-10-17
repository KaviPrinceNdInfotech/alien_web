import React from 'react'
// import "./Reels.css"
import ReelSection from"./ReelSection"


export default function Reels() {
  return (
    <div>
         <div class="app__videos">
      
      <div class="video">
        <video class="video__player" src="video1.mp4"></video>

        
        <div class="videoSidebar">
          <div class="videoSidebar__button">
            <span class="material-icons"> favorite_border </span>
            <p>12</p>
          </div>

          <div class="videoSidebar__button">
            <span class="material-icons"> message </span>
            <p>23</p>
          </div>

          <div class="videoSidebar__button">
            <span class="material-icons"> share </span>
            <p>75</p>
          </div>
        </div>

        
        <div class="videoFooter">
          <div class="videoFooter__text">
            <h3>Somanath Goudar</h3>
            <p class="videoFooter__description">Best Video Ever</p>

            <div class="videoFooter__ticker">
              <span class="material-icons videoFooter__icon"> music_note </span>
              <marquee>Song name</marquee>
            </div>
          </div>
          <img
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""
            class="videoFooter__record"
          />
        </div>
      </div>
     

     
      <div class="video">
        <video class="video__player" src="video2.mp4"></video>

      
        <div class="videoSidebar">
          <div class="videoSidebar__button">
            <span class="material-icons"> favorite_border </span>
            <p>12</p>
          </div>

          <div class="videoSidebar__button">
            <span class="material-icons"> message </span>
            <p>23</p>
          </div>

          <div class="videoSidebar__button">
            <span class="material-icons"> share </span>
            <p>75</p>
          </div>
        </div>

       
        <div class="videoFooter">
          <div class="videoFooter__text">
            <h3>Somanath Goudar</h3>
            <p class="videoFooter__description">Best Video Ever</p>

            <div class="videoFooter__ticker">
              <span class="material-icons videoFooter__icon"> music_note </span>
              <marquee>Song name</marquee>
            </div>
          </div>
          <img
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""
            class="videoFooter__record"
          />
        </div>
      </div>
     
    </div>
    <ReelSection/>
    </div>
  )
}
