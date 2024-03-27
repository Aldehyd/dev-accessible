
interface CVSkillPropsInterface {
    skill: any,
}

export default function CVSkill({skill}: CVSkillPropsInterface): React.JSX.Element {
    return (
        <button className="cv_skill" aria-expanded={ariaExpanded} aria-haspopup='true'>
            {language === 'french' ? skill.frenchTitle : skill.englishTitle}
        </button>
    )
}