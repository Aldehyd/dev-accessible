
interface CarouselPicturePropsInterface {
    language: string,
    picture: {id: number, element: any, frenchAlt: string, englishAlt: string}
}

export default function CarouselPicture({language,picture}: CarouselPicturePropsInterface): React.JSX.Element {
    return(
        <img className="carousel_picture current-picture" key={picture.id}
            alt={language === "french" ? picture.frenchAlt : picture.englishAlt}
            src={picture.element} />
    )
}