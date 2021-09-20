'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">hicare-restapi documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-3bcbf9078affad50d9fc9dd01dcfa1a1"' : 'data-target="#xs-controllers-links-module-AppModule-3bcbf9078affad50d9fc9dd01dcfa1a1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3bcbf9078affad50d9fc9dd01dcfa1a1"' :
                                            'id="xs-controllers-links-module-AppModule-3bcbf9078affad50d9fc9dd01dcfa1a1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-3bcbf9078affad50d9fc9dd01dcfa1a1"' : 'data-target="#xs-injectables-links-module-AppModule-3bcbf9078affad50d9fc9dd01dcfa1a1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3bcbf9078affad50d9fc9dd01dcfa1a1"' :
                                        'id="xs-injectables-links-module-AppModule-3bcbf9078affad50d9fc9dd01dcfa1a1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-b7661b77883296689d8f0753f541f9b5"' : 'data-target="#xs-injectables-links-module-AuthModule-b7661b77883296689d8f0753f541f9b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b7661b77883296689d8f0753f541f9b5"' :
                                        'id="xs-injectables-links-module-AuthModule-b7661b77883296689d8f0753f541f9b5"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtAuthGuard.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtAuthGuard</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DoctorModule.html" data-type="entity-link">DoctorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DoctorModule-09a1ed9867de8df03f6c1e430a042184"' : 'data-target="#xs-controllers-links-module-DoctorModule-09a1ed9867de8df03f6c1e430a042184"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DoctorModule-09a1ed9867de8df03f6c1e430a042184"' :
                                            'id="xs-controllers-links-module-DoctorModule-09a1ed9867de8df03f6c1e430a042184"' }>
                                            <li class="link">
                                                <a href="controllers/DoctorController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DoctorController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DoctorModule-09a1ed9867de8df03f6c1e430a042184"' : 'data-target="#xs-injectables-links-module-DoctorModule-09a1ed9867de8df03f6c1e430a042184"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DoctorModule-09a1ed9867de8df03f6c1e430a042184"' :
                                        'id="xs-injectables-links-module-DoctorModule-09a1ed9867de8df03f6c1e430a042184"' }>
                                        <li class="link">
                                            <a href="injectables/DoctorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DoctorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LicenceModule.html" data-type="entity-link">LicenceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LicenceModule-3e6b1af3400d49bdd629dfe234548286"' : 'data-target="#xs-controllers-links-module-LicenceModule-3e6b1af3400d49bdd629dfe234548286"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LicenceModule-3e6b1af3400d49bdd629dfe234548286"' :
                                            'id="xs-controllers-links-module-LicenceModule-3e6b1af3400d49bdd629dfe234548286"' }>
                                            <li class="link">
                                                <a href="controllers/LicenceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LicenceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LicenceModule-3e6b1af3400d49bdd629dfe234548286"' : 'data-target="#xs-injectables-links-module-LicenceModule-3e6b1af3400d49bdd629dfe234548286"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LicenceModule-3e6b1af3400d49bdd629dfe234548286"' :
                                        'id="xs-injectables-links-module-LicenceModule-3e6b1af3400d49bdd629dfe234548286"' }>
                                        <li class="link">
                                            <a href="injectables/LicenceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LicenceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LoginModule-b17ed3d78b621bcb26ca489e37e75bc0"' : 'data-target="#xs-controllers-links-module-LoginModule-b17ed3d78b621bcb26ca489e37e75bc0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LoginModule-b17ed3d78b621bcb26ca489e37e75bc0"' :
                                            'id="xs-controllers-links-module-LoginModule-b17ed3d78b621bcb26ca489e37e75bc0"' }>
                                            <li class="link">
                                                <a href="controllers/LoginController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoginModule-b17ed3d78b621bcb26ca489e37e75bc0"' : 'data-target="#xs-injectables-links-module-LoginModule-b17ed3d78b621bcb26ca489e37e75bc0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginModule-b17ed3d78b621bcb26ca489e37e75bc0"' :
                                        'id="xs-injectables-links-module-LoginModule-b17ed3d78b621bcb26ca489e37e75bc0"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoginService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogModule.html" data-type="entity-link">LogModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LogModule-9d8bcabcd523953c8d0c3a4ca843b2d0"' : 'data-target="#xs-injectables-links-module-LogModule-9d8bcabcd523953c8d0c3a4ca843b2d0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LogModule-9d8bcabcd523953c8d0c3a4ca843b2d0"' :
                                        'id="xs-injectables-links-module-LogModule-9d8bcabcd523953c8d0c3a4ca843b2d0"' }>
                                        <li class="link">
                                            <a href="injectables/LogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MeasureModule.html" data-type="entity-link">MeasureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MeasureModule-45ce6307c9e051e6f2ceac1f1a654699"' : 'data-target="#xs-controllers-links-module-MeasureModule-45ce6307c9e051e6f2ceac1f1a654699"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MeasureModule-45ce6307c9e051e6f2ceac1f1a654699"' :
                                            'id="xs-controllers-links-module-MeasureModule-45ce6307c9e051e6f2ceac1f1a654699"' }>
                                            <li class="link">
                                                <a href="controllers/MeasureController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeasureController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MeasureModule-45ce6307c9e051e6f2ceac1f1a654699"' : 'data-target="#xs-injectables-links-module-MeasureModule-45ce6307c9e051e6f2ceac1f1a654699"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MeasureModule-45ce6307c9e051e6f2ceac1f1a654699"' :
                                        'id="xs-injectables-links-module-MeasureModule-45ce6307c9e051e6f2ceac1f1a654699"' }>
                                        <li class="link">
                                            <a href="injectables/MeasureService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MeasureService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatientModule.html" data-type="entity-link">PatientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PatientModule-2c55e6c268a2fa90a958bc9d7b1f54a4"' : 'data-target="#xs-controllers-links-module-PatientModule-2c55e6c268a2fa90a958bc9d7b1f54a4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PatientModule-2c55e6c268a2fa90a958bc9d7b1f54a4"' :
                                            'id="xs-controllers-links-module-PatientModule-2c55e6c268a2fa90a958bc9d7b1f54a4"' }>
                                            <li class="link">
                                                <a href="controllers/PatientController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PatientModule-2c55e6c268a2fa90a958bc9d7b1f54a4"' : 'data-target="#xs-injectables-links-module-PatientModule-2c55e6c268a2fa90a958bc9d7b1f54a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PatientModule-2c55e6c268a2fa90a958bc9d7b1f54a4"' :
                                        'id="xs-injectables-links-module-PatientModule-2c55e6c268a2fa90a958bc9d7b1f54a4"' }>
                                        <li class="link">
                                            <a href="injectables/PatientService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PatientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VideocallModule.html" data-type="entity-link">VideocallModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-VideocallModule-e5e7a9fd8474bc208df5221fdad10d84"' : 'data-target="#xs-controllers-links-module-VideocallModule-e5e7a9fd8474bc208df5221fdad10d84"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VideocallModule-e5e7a9fd8474bc208df5221fdad10d84"' :
                                            'id="xs-controllers-links-module-VideocallModule-e5e7a9fd8474bc208df5221fdad10d84"' }>
                                            <li class="link">
                                                <a href="controllers/VideocallController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VideocallController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VideocallModule-e5e7a9fd8474bc208df5221fdad10d84"' : 'data-target="#xs-injectables-links-module-VideocallModule-e5e7a9fd8474bc208df5221fdad10d84"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VideocallModule-e5e7a9fd8474bc208df5221fdad10d84"' :
                                        'id="xs-injectables-links-module-VideocallModule-e5e7a9fd8474bc208df5221fdad10d84"' }>
                                        <li class="link">
                                            <a href="injectables/VideocallService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>VideocallService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link">AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DoctorController.html" data-type="entity-link">DoctorController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LicenceController.html" data-type="entity-link">LicenceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LoginController.html" data-type="entity-link">LoginController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MeasureController.html" data-type="entity-link">MeasureController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PatientController.html" data-type="entity-link">PatientController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VideocallController.html" data-type="entity-link">VideocallController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Admin.html" data-type="entity-link">Admin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Admin-1.html" data-type="entity-link">Admin</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminAppSerial.html" data-type="entity-link">AdminAppSerial</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminAppSerial-1.html" data-type="entity-link">AdminAppSerial</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApiLogHistory.html" data-type="entity-link">ApiLogHistory</a>
                            </li>
                            <li class="link">
                                <a href="classes/ApiLogHistory-1.html" data-type="entity-link">ApiLogHistory</a>
                            </li>
                            <li class="link">
                                <a href="classes/Appointment.html" data-type="entity-link">Appointment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Appointment-1.html" data-type="entity-link">Appointment</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppointmentParticipant.html" data-type="entity-link">AppointmentParticipant</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppointmentParticipant-1.html" data-type="entity-link">AppointmentParticipant</a>
                            </li>
                            <li class="link">
                                <a href="classes/Assessment.html" data-type="entity-link">Assessment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Assessment-1.html" data-type="entity-link">Assessment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Doctor.html" data-type="entity-link">Doctor</a>
                            </li>
                            <li class="link">
                                <a href="classes/Doctor-1.html" data-type="entity-link">Doctor</a>
                            </li>
                            <li class="link">
                                <a href="classes/DoctorI.html" data-type="entity-link">DoctorI</a>
                            </li>
                            <li class="link">
                                <a href="classes/DoctorLogHistory.html" data-type="entity-link">DoctorLogHistory</a>
                            </li>
                            <li class="link">
                                <a href="classes/DoctorLogHistory-1.html" data-type="entity-link">DoctorLogHistory</a>
                            </li>
                            <li class="link">
                                <a href="classes/DoctorPatientRelation.html" data-type="entity-link">DoctorPatientRelation</a>
                            </li>
                            <li class="link">
                                <a href="classes/DoctorPatientRelation-1.html" data-type="entity-link">DoctorPatientRelation</a>
                            </li>
                            <li class="link">
                                <a href="classes/DoctorSubscription.html" data-type="entity-link">DoctorSubscription</a>
                            </li>
                            <li class="link">
                                <a href="classes/DoctorSubscription-1.html" data-type="entity-link">DoctorSubscription</a>
                            </li>
                            <li class="link">
                                <a href="classes/HicareLicence.html" data-type="entity-link">HicareLicence</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImageContent.html" data-type="entity-link">ImageContent</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImageContent-1.html" data-type="entity-link">ImageContent</a>
                            </li>
                            <li class="link">
                                <a href="classes/Keypair.html" data-type="entity-link">Keypair</a>
                            </li>
                            <li class="link">
                                <a href="classes/Keypair-1.html" data-type="entity-link">Keypair</a>
                            </li>
                            <li class="link">
                                <a href="classes/Measure.html" data-type="entity-link">Measure</a>
                            </li>
                            <li class="link">
                                <a href="classes/Measure-1.html" data-type="entity-link">Measure</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureAsma.html" data-type="entity-link">MeasureAsma</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureAsma-1.html" data-type="entity-link">MeasureAsma</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureCapnography.html" data-type="entity-link">MeasureCapnography</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureCapnography-1.html" data-type="entity-link">MeasureCapnography</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureCardipia.html" data-type="entity-link">MeasureCardipia</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureCardipia-1.html" data-type="entity-link">MeasureCardipia</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureCopd6.html" data-type="entity-link">MeasureCopd6</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureCopd6-1.html" data-type="entity-link">MeasureCopd6</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureDeviceCode.html" data-type="entity-link">MeasureDeviceCode</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureDeviceCode-1.html" data-type="entity-link">MeasureDeviceCode</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureDheart.html" data-type="entity-link">MeasureDheart</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureDheart-1.html" data-type="entity-link">MeasureDheart</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureEcg.html" data-type="entity-link">MeasureEcg</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureEcg-1.html" data-type="entity-link">MeasureEcg</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureLungMonitor.html" data-type="entity-link">MeasureLungMonitor</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureLungMonitor-1.html" data-type="entity-link">MeasureLungMonitor</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureMicroscope.html" data-type="entity-link">MeasureMicroscope</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureMicroscope-1.html" data-type="entity-link">MeasureMicroscope</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasurePef.html" data-type="entity-link">MeasurePef</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasurePef-1.html" data-type="entity-link">MeasurePef</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasurePhoto.html" data-type="entity-link">MeasurePhoto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasurePhoto-1.html" data-type="entity-link">MeasurePhoto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureSpiro.html" data-type="entity-link">MeasureSpiro</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureSpiro-1.html" data-type="entity-link">MeasureSpiro</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureSpo2.html" data-type="entity-link">MeasureSpo2</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureSpo2-1.html" data-type="entity-link">MeasureSpo2</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureStethoscope.html" data-type="entity-link">MeasureStethoscope</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureStethoscope-1.html" data-type="entity-link">MeasureStethoscope</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureTotal.html" data-type="entity-link">MeasureTotal</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureTotal-1.html" data-type="entity-link">MeasureTotal</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureUrine.html" data-type="entity-link">MeasureUrine</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasureUrine-1.html" data-type="entity-link">MeasureUrine</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message-1.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/Patient.html" data-type="entity-link">Patient</a>
                            </li>
                            <li class="link">
                                <a href="classes/Patient-1.html" data-type="entity-link">Patient</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientContactInfo.html" data-type="entity-link">PatientContactInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientContactInfo-1.html" data-type="entity-link">PatientContactInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientDeviceSetting.html" data-type="entity-link">PatientDeviceSetting</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientDeviceSetting-1.html" data-type="entity-link">PatientDeviceSetting</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientLogHistory.html" data-type="entity-link">PatientLogHistory</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientLogHistory-1.html" data-type="entity-link">PatientLogHistory</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConsultationArchives.html" data-type="entity-link">VideoConsultationArchives</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConsultationArchives-1.html" data-type="entity-link">VideoConsultationArchives</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConsultationHistory.html" data-type="entity-link">VideoConsultationHistory</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConsultationHistory-1.html" data-type="entity-link">VideoConsultationHistory</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConsultationMaster.html" data-type="entity-link">VideoConsultationMaster</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConsultationMaster-1.html" data-type="entity-link">VideoConsultationMaster</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConsultationStatus.html" data-type="entity-link">VideoConsultationStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConsultationStatus-1.html" data-type="entity-link">VideoConsultationStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/VideoConsultationStatus-2.html" data-type="entity-link">VideoConsultationStatus</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link">AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DecrtptyMiddleware.html" data-type="entity-link">DecrtptyMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DecrtpytAESMiddleware.html" data-type="entity-link">DecrtpytAESMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DoctorService.html" data-type="entity-link">DoctorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Encryptnterceptor.html" data-type="entity-link">Encryptnterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JsonBodyMiddleware.html" data-type="entity-link">JsonBodyMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link">JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link">JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LicenceService.html" data-type="entity-link">LicenceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogService.html" data-type="entity-link">LogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeasureService.html" data-type="entity-link">MeasureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PatientService.html" data-type="entity-link">PatientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RawBodyMiddleware.html" data-type="entity-link">RawBodyMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VideocallService.html" data-type="entity-link">VideocallService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RefreshToken.html" data-type="entity-link">RefreshToken</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link">RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/PatientI.html" data-type="entity-link">PatientI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});