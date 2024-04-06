import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface BasicPictureInterface {
    imageName: string,
    frenchAlt?: string,
    englishAlt?: string,
    orientation?: string
}

export default function BasicPicture({imageName,frenchAlt="",englishAlt="",orientation="landscape"}: BasicPictureInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const classList = `basic-picture-container ${orientation === "portrait" ? "portrait" : ""}`

    return(
        <div className={classList}>
            <img className="basic-picture" src={"img/" + imageName + ".jpg"}
                alt={language === "french" ? frenchAlt : englishAlt} />
        <div className="basic-picture-mask"></div>
    </div>
    )
}