import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__title">
          <h2>Nom du Resto</h2>
        </div>
        <div className="footer__social">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8ma"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fd5" />
              <stop offset=".328" stop-color="#ff543f" />
              <stop offset=".348" stop-color="#fc5245" />
              <stop offset=".504" stop-color="#e64771" />
              <stop offset=".643" stop-color="#d53e91" />
              <stop offset=".761" stop-color="#cc39a4" />
              <stop offset=".841" stop-color="#c837ab" />
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            />
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8mb"
              cx="11.786"
              cy="5.54"
              r="29.813"
              gradientTransform="matrix(1 0 0 .6663 0 1.849)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#4168c9" />
              <stop offset=".999" stop-color="#4168c9" stop-opacity="0" />
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            />
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
            />
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path
              fill="#039be5"
              d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
            />
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            />
            <path fill="#FFF" d="M20 31L20 17 32 24z" />
          </svg>
        </div>
        <div className="footer__horaires">
          <h2>Horaires</h2>
          <h3>Lundi : 12h - 14h / 19h - 22h</h3>
          <h3>Mardi : 12h - 14h / 19h - 22h</h3>
          <h3>Mercredi : 12h - 14h / 19h - 22h</h3>
          <h3>Jeudi : 12h - 14h / 19h - 22h</h3>
          <h3>Vendredi : 12h - 14h / 19h - 22h</h3>
          <h3>Samedi : 12h - 14h / 19h - 22h</h3>
          <h3>Dimanche : 12h - 14h / 19h - 22h</h3>
        </div>
      </div>
    </footer>
  );
}
