import Carousel from "./carousel.tsx";
import firstImage from './dyskredy-preview.png';
import secondImage from './guitare-color.JPG';
import thirdImage from './guitare.JPG';
import fourthImage from './wood.JPG';
import fifthImage from './stick.JPG';
import AnimationToggleButton from '../Components/animation-toggle-button.tsx';

export default function Layouts(): React.JSX.Element {

    const pictures = [
        {
            id: 0,
            element: firstImage,
            frenchAlt: "très beau site",
            englishAlt: "beautiful website"
        },
        {
            id: 1,
            element: secondImage,
            frenchAlt: "guitare couleur",
            englishAlt: "color guitar"
        },
        {
            id: 2,
            element: thirdImage,
            frenchAlt: "guitare",
            englishAlt: "guitar"
        },
        {
            id: 3,
            element: fourthImage,
            frenchAlt: "copeaux",
            englishAlt: "wooden pieces"
        },
        {
            id: 4,
            element: fifthImage,
            frenchAlt: "manche de guitare",
            englishAlt: "guitar stick"
        }
    ];

    return(
        <div className="components-layout">
            <AnimationToggleButton />
            <Carousel pictures={pictures} />
        </div>
    )
}