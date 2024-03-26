import {createContext} from 'react';

interface CarouselContextInterface {
    displayCarousel: boolean,
    pictures: {id: number, pictureName: any, frenchAlt?: string, englishAlt?: string}[],
    currentPicture: number,
    changeDisplayCarousel: (display: boolean)=> void,
    changePictures: (pictures: {id: number, pictureName: any, frenchAlt?: string, englishAlt?: string}[])=> void,
    changeCurrentPicture: (currentPicture: number)=> void
}

const LanguageContext = createContext<CarouselContextInterface>({displayCarousel: false, pictures: [], currentPicture: 0});

export default LanguageContext;