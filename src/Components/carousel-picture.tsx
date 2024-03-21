import { useEffect, useState } from "react"

interface CarouselPicturePropsInterface {
    language: string,
    picture: {id: number, element: any, frenchAlt: string, englishAlt: string},
    picturesToShow: {current: number, amount: number},
    pictureMovement: string
}

export default function CarouselPicture({language,picture,picturesToShow,pictureMovement=""}: CarouselPicturePropsInterface): React.JSX.Element {

    const classList = `carousel_picture ${picturesToShow.current === picture.id +1 ? "previous-picture" : ""} ${picturesToShow.current === picture.id ? "current-picture" : ""} ${picturesToShow.current === picture.id -1 ? "next-picture" : ""} ${pictureMovement}`;

    return(
        <img className={classList} key={picture.id}
            alt={language === "french" ? picture.frenchAlt : picture.englishAlt}
            src={picture.element} />
    )
}