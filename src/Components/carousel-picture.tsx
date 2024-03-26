interface CarouselPicturePropsInterface {
    language: string,
    picture: {id: number, pictureName: any, frenchAlt?: string, englishAlt?: string},
    picturesToShow: {current: number, amount: number},
    pictureMovement: string,
    onClickFunction?: ()=>void
}

export default function CarouselPicture({language,picture,picturesToShow,pictureMovement="",onClickFunction}: CarouselPicturePropsInterface): React.JSX.Element {

    const classList = `carousel_picture ${picturesToShow.current === picture.id +1 ? "previous-picture" : ""} ${picturesToShow.current === picture.id ? "current-picture" : ""} ${picturesToShow.current === picture.id -1 ? "next-picture" : ""} ${pictureMovement}`;

    return(
        <img className={classList} key={picture.id} role="group" aria-roledescription="slide"
            alt={language === "french" ? picture.frenchAlt : picture.englishAlt}
            aria-label={language === "french" ? `${picture.id +1} sur ${picturesToShow.amount} ${picture.frenchAlt}` : `${picture.id +1} of ${picturesToShow.amount} ${picture.englishAlt}`}
            src={"/img/" + picture.pictureName + ".jpg"} tabIndex={picturesToShow.current === picture.id ? 0 : -1}
            onClick={onClickFunction} />
    )
}