//Actions liées à la gestion du menu pour mobile.
const menuMobile = {

    //Ecouteur de click sur l'icône burger du menu mobile.
    listenerBurger() {
        document.getElementById('burger-icon').addEventListener('click', (evt) => {
            if (mobileDisplayCheck.mediaQuery.matches) {
                evt.preventDefault();
                this.toggleBurgerMenu();
            }
        });
    },

    //Ecouteur de click sur les liens de navigation.
    listenerNavLinks() {
        document.querySelectorAll('.nav__link').forEach(navLink => {
            navLink.addEventListener('click', () => {
                if (mobileDisplayCheck.mediaQuery.matches) {
                    this.toggleBurgerMenu();
                }
            });
        });
    },

    //Aficher ou masquer le menu mobile en ajoutant ou supprimant des classes associées
    //aux ID visés.
    toggleBurgerMenu() {
        const arrayID = ['burger-icon', 'nav-menu', 'header'];
        const classOpen = ['nav-icon-open', 'nav__list-open', 'header-open'];
        arrayID.forEach((idName, i) => {
            document.getElementById(idName).classList.toggle(classOpen[i]);
        });
    },

    //Initialisation des méthodes de l'objet.
    init() {
        this.listenerBurger();
        this.listenerNavLinks();
    }

};


//Actions liées au Srcoll.
const onScroll = {

    //Ecouteur de scroll.
    listenerScroll() {
        window.addEventListener("scroll", this.updateDotsProgress);
    },

    //Remplissage ou non des points (dots) en fonction de la postion du scroll.
    // Pour chaque point on récupère sa position vertical : si elle est dans la fenêtre 
    //de l'utilisateur on ajoute la classe .filled sinon on la retire.
    updateDotsProgress() {
        const dots = document.querySelectorAll(".section__dots div");
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        for (let i = 0; i < dots.length; i++) {
            const dotPosition = dots[i].offsetTop;

            if (dotPosition > scrollPosition && dotPosition < scrollPosition + windowHeight) {
                dots[i].classList.add("filled");
            } else {
                dots[i].classList.remove("filled");
            }
        }
    },

    //Initialisation des méthodes de l'objet.
    init() {
        this.listenerScroll();
    }

};


//Vérification de la largeur du display (media queries.)
const mobileDisplayCheck = {

    //Media query affichage mobile.
    mediaQuery: window.matchMedia('(max-width: 879px)'),

    //Ecouteur de redimensionnement vertical du display.
    listenerDisplayChange() {
        this.mediaQuery.addEventListener('change', this.handleDisplayChange);
    },

    //Si les conditions de la media query ne sont plus recpectées,
    //suppression des classes liées à l'affichage mobile.
    handleDisplayChange(evt) {
        if (!evt.matches) {
            const elementBurger = document.getElementById('burger-icon');
            if (elementBurger.classList.contains('nav-icon-open')) {
                menuMobile.toggleBurgerMenu();
            }
        }
    },

    //Initialisation des méthodes de l'objet.
    init() {
        if (this.mediaQuery.matches) {
            this.handleDisplayChange(this.mediaQuery);
        }
        this.listenerDisplayChange();
    }

};


//Hashage de l'adresse email de contact pour aténuer les spams.
function hashMyEmail() {
    //Hashage
    const part1 = "ronan.kerveno";
    const part2 = Math.pow(2, 6);
    const part3 = String.fromCharCode(part2);
    const part4 = "gmail.com";
    const part5 = part1 + String.fromCharCode(part2) + part4;
    const linkMailto = '<a href=' + 'mai' + 'lto' + ':' + 
    part5 + '>' + part1 + part3 + part4 + '</a>';
    
    //Ecriture dans le DOM
    document.getElementById('myEmail').innerHTML = linkMailto;
}


//Affiche l'année actuelle dans le footer.
function footerCurrentYear() {
    document.getElementById('footer-year').textContent = new Date().getFullYear();
}


//Lancement des actions.
menuMobile.init();
onScroll.init();
mobileDisplayCheck.init();
hashMyEmail();
footerCurrentYear();


