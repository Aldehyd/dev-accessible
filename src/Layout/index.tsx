import Carousel from "./carousel.tsx";
import firstImage from './dyskredy-preview.png';
import secondImage from './guitare-color.JPG';
import thirdImage from './guitare.JPG';

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
        }
    ];

    return(
        <div className="components-layout">
            <Carousel pictures={pictures} />
        </div>
    )
}