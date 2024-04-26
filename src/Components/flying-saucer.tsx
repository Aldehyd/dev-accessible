
interface FlyingSaucerPropsInterface {
    side: string
}

export default function FlyingSaucer({side}: FlyingSaucerPropsInterface): React.JSX.Element {

    const classList = `flying-saucer ${side === "left" ? "left" : "right"}`;

    return (
        <div className={classList}>
            <div className="flying-saucer_head"></div>
            <div className="flying-saucer_body"></div>
        </div>
    )
}