import { faChess, faClapperboard, faGamepad, faPencil } from "@fortawesome/free-solid-svg-icons";
import { Hobby } from "../class/hobby";

export const hobbies : Hobby[] = [
    new Hobby("Dessin", "Portraits réalistes à partir de photos.", faPencil, '/assets/hobbies/dog.png'),
    new Hobby("Jeux de société", "Jeux de plateau, jeux de cartes", faChess, '/assets/hobbies/Terraforming-Mars.webp'),
    new Hobby("Jeux vidéo", "", faGamepad, '/assets/hobbies/apex_legends.png'),
    new Hobby("Univers Marvel", "Fan du MCU et de l'univers Marvel en général.", faClapperboard, '/assets/hobbies/spiders.png'),
]