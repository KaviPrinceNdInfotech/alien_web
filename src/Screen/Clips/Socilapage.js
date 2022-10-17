import React from 'react'
import "./Social.css"

export default function Socilapage() {
  return (
    <div>
      <div className="social">
      <a href="#">
    <div className="social-btn color-telegram">
      <div className="icons8-Google-play-app"></div>
      <p className="order-1 google-font margin-telgram">Download </p>
    </div>
  </a>
  <a href="#">
    <div className="social-btn color-telegram">
      <div className="icons8-telegram-app"></div>
      <p className="order-1 google-font margin-telgram">Telegram</p>
    </div>
  </a>
  <a href="#">
    <div className="social-btn color-instagram">
      <div className="icons8-instagram"></div>
      <p className="order-1 google-font margin-instagram">instagram</p>
    </div>
  </a>
  <a href="#">
    <div className="social-btn color-whatsapp">
      <div className="icons8-whatsapp"></div>
      <p className="order-1 google-font margin-instagram">whats app</p>
    </div>
  </a>
</div>
    </div>
  )
}
