import React from 'react'
import Header from './Header'

export default function about() {

    return (


        <div class="container">
            
            <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
            <div class="row">
                <div class="col-lg-4 col-xl-4">
                    <div class="card-box text-center">
                        <img src="https://res.cloudinary.com/argustwo/image/upload/v1628834524/lic8ssziiywfb0rdwyxa.jpg" class="rounded-circle avatar-xl img-thumbnail" alt="profile-image" />

                        <h4 class="mb-0">Neil Empey</h4>
                        <p class="text-muted">Software Engineer</p>

                        <div class="text-left mt-3">
                            <h4 class="font-13 text-uppercase">About Me :</h4>
                            <p class="text-muted font-13 mb-3">
                                Fullstack developer, mountain guru and self designated master tinkerer. Fascinated with the internet of things, machine learning, renewable energy, electric vehicles and off-grid living. If not working or consumed by a side project I'll be found in the mountains. Currently in the mountain west but Alaska is my heart's home.
                            </p>
                        </div>

                    </div>
                </div>

                <div class="col-lg-8 col-xl-8">
                    <div class="card-box">

                        <div class="tab-content">

                            <div class="tab-pane show active" id="about-me">

                                <h5 class="mb-4 text-uppercase"><i class="mdi mdi-briefcase mr-1"></i>
                                    Skills</h5>
                                <ul>
                                    <li>
                                        Javascript
                                    </li>
                                    <li>
                                        Ruby
                                    </li>
                                    <li>
                                        Rails
                                    </li>
                                    <li>
                                        React/Redux
                                    </li>
                                    <li>
                                        HTML/CSS
                                    </li>
                                    <li>
                                        PostgreSQL & MySQL
                                    </li>
                                </ul>


                                <div>

                                    <h5 class="mb-3 mt-4"><i class="mdi mdi-cards-variant mr-1"></i>
                                        Check out one of my projects and visit me on Github or LinkedIn </h5>
                                    <br></br>
                                    <div>
                                        <a href='https://github.com/neil-empey'><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg></a>
                                    </div>
                                    <br></br>

                                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="neil-empey-566b35218" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/neil-empey-566b35218?trk=profile-badge">Neil Empey</a></div>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>



    )

}







