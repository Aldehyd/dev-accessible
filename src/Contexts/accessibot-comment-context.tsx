import {createContext} from 'react';

interface AccessibotCommentContextInterface {
    comment: {hover: boolean, compliant: boolean, frenchContent: string, englishContent: string},
    changeComment: (comment: {compliant: boolean, content: string})=> void
}

const AccessibotCommentContext = createContext<AccessibotCommentContextInterface>({comment: {hover: false, compliant: true, frenchContent: "", englishContent: ""}});

export default AccessibotCommentContext;