import TemporaryMenu from "../Layout/temporaryMenu.tsx";

export default function UnderConstruction(): React.JSX.Element {
    return (
        <div className="under-construction-page">
            <TemporaryMenu />
            <img alt="en construction" src="/img/under-construction.png" />
        </div>
    )
}