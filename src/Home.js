import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <main>
        <section>
          <div class="container overflow-hidden">
            <div class="row gx-5">
              <h4>TV Favorites</h4>
              <div class="col-3">
                <div class="title-card-container">
                  <div class="title-card">
                    <a href="">
                      <img
                        src="https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZozzIT6Q0pVlthNws4VrbZeIKWGfV6eWcP4YVbwVVEMzeuY2bSeoB6nKamHfWzvrJp1drx1qIEdvSbBTLUN0n3veIE2IPUG5q4.webp?r=bd5"
                        alt="Suits"
                        class="fluid p-3"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="title-card-container">
                  <div class="title-card">
                    <a href="">
                      <img
                        src="https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd6RvoavVgFe5WBd3ygzS1ln3DRcvXhoQN-Ea4Vw_-wsF_Fnwup9wv7nakqHFhfPYhOqXTrVUixDpyYdqfOdJxfBcyrhLjWPToc.webp?r=5d3"
                        alt="How I Met Your Mother"
                        class="fluid p-3"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="title-card-container">
                  <div class="title-card">
                    <a href="">
                      <img
                        src="https://occ-0-3266-444.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRAzUDKQFuGR5rZAfLwv__2Fk4ozgSzrm4WlwofVuHu3ktnDYMiK41mPNlN7lCW9mky85WOeksKCo330p3-qsCiQ9EIBbm-sm7s.webp?r=643"
                        alt="Grey's Anatomy"
                        class="fluid p-3"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
