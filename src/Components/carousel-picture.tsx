import { useEffect, useState } from "react"

interface CarouselPicturePropsInterface {
    language: string,
    picture: {id: number, element: any, frenchAlt: string, englishAlt: string},
    picturesToShow: {previous: boolean | number, current: number, next: boolean | number},
    currentPictureMovement: string
}

export default function CarouselPicture({language,picture,picturesToShow,currentPictureMovement=""}: CarouselPicturePropsInterface): React.JSX.Element {

    const classList = `carousel_picture ${picturesToShow.previous === picture.id ? "previous-picture" : ""} ${picturesToShow.current === picture.id ? "current-picture" : ""} ${picturesToShow.next === picture.id ? "next-picture" : ""} ${currentPictureMovement}`;

    return(
        <img className={classList} key={picture.id}
            alt={language === "french" ? picture.frenchAlt : picture.englishAlt}
            src={picture.element} />
    )
}