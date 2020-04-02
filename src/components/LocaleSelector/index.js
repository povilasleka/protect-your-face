import React, { useContext } from 'react'
import StoreContext from '../../context/StoreContext'
import { Select, Option } from './styles'

const LocaleSelector = () => {
    const { locale, changeLocale } = useContext(StoreContext);

    return (
        <>
            <Select class="form-control" onChange={e => changeLocale(e.target.value)} value={locale}>
                <Option value="en">English</Option>
                <Option value="it">Italiano</Option>
                <Option value="de">Deutsch</Option>
                <Option value="es">Español</Option>
                <Option value="fr">Le français</Option>
            </Select>
        </>
    );
}

export default LocaleSelector;