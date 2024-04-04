import {createContext} from 'react';

interface ModalContextInterface {
    isModalDisplayed: boolean,
    changeIsModalDisplayed: (color: boolean)=> void
}

const ModalContext = createContext<ModalContextInterface>({isModalDisplayed: false});

export default  ModalContext;