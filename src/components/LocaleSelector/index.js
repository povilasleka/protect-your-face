import React, { useContext } from 'react'
import StoreContext from '../../context/StoreContext'
import { Select, Option, Wrapper } from './styles'

const LocaleSelector = () => {
    const { locale, changeLocale } = useContext(StoreContext);

    return (
        <Wrapper>
            <p>Language:</p>
            <Select onChange={e => changeLocale(e.target.value)} value={locale} data-width="fit">
                <Option value="en">English</Option>
                <Option value="it">Italiano</Option>
                <Option value="de">Deutsch</Option>
                <Option value="es">Español</Option>
                <Option value="fr">Le français</Option>
            </Select>
        </Wrapper>
    );
}

export default LocaleSelector;