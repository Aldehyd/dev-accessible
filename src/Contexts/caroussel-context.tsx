import {createContext} from 'react';

interface CarouselContextInterface {
    pictures: {id: number, pictureName: any, frenchAlt?: string, englishAlt?: string}[],
    currentPicture: number,
    changePictures: (pictures: {id: number, pictureName: any, frenchAlt?: string, englishAlt?: string}[])=> void,
    changeCurrentPicture: (currentPicture: number)=> void
}

const LanguageContext = createContext<CarouselContextInterface>({pictures: [], currentPicture: 0});

export default LanguageContext;