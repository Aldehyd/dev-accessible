import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface BasicPictureInterface {
    image: string,
    frenchAlt?: string,
    englishAlt?: string
}

export default function BasicPicture({image,frenchAlt="",englishAlt=""}: BasicPictureInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    return(
        <div className="basic-picture-container">
            <img className="basic-picture" src={image}
                alt={language === "french" ? frenchAlt : englishAlt} />
        <div className="basic-picture-mask"></div>
    </div>
    )
}