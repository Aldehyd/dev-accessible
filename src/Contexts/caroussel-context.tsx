import {createContext} from 'react';

interface CarouselContextInterface {
    displayCarousel: boolean,
    picturesFullScreen: {id: number, pictureName: any, frenchAlt?: string, englishAlt?: string}[],
    currentPictureFullScreen: number,
    changeDisplayCarousel: (display: boolean)=> void,
    changePicturesFullScreen: (pictures: {id: number, pictureName: any, frenchAlt?: string, englishAlt?: string}[])=> void,
    changeCurrentPictureFullScreen: (currentPicture: number)=> void
}

const LanguageContext = createContext<CarouselContextInterface>({displayCarousel: false, picturesFullScreen: [], currentPictureFullScreen: 0});

export default LanguageContext;