import React, { useContext } from 'react'
import StoreContext from '../../context/StoreContext'
import {
    Wrapper,
} from './styles'
import Flags from 'country-flag-icons/react/3x2'

const LocaleSelector = () => {
    const { _locale, changeLocale } = useContext(StoreContext);

    return (
        <Wrapper>
            {/*<Select onChange={e => changeLocale(e.target.value)} value={locale} data-width="fit">
                <Option value="en">{getUnicodeFlagIcon('US') + ` `}English</Option>
                <Option value="it">{getUnicodeFlagIcon('IT') + ` `}Italiano</Option>
                <Option value="de">{getUnicodeFlagIcon('DE') + ` `}Deutsch</Option>
                <Option value="es">{getUnicodeFlagIcon('ES') + ` `}Español</Option>
                <Option value="fr">{getUnicodeFlagIcon('FR') + ` `}Le français</Option>
            </Select>*/}

            <Flags.US onClick={() => changeLocale('en')} style={{ width: '40px', cursor: 'pointer' }} />
            {` `}
            <Flags.IT onClick={() => changeLocale('it')} style={{ width: '40px', cursor: 'pointer' }} />
            {` `}
            <Flags.DE onClick={() => changeLocale('de')} style={{ width: '40px', cursor: 'pointer' }} />
            {` `}
            <Flags.ES onClick={() => changeLocale('es')} style={{ width: '40px', cursor: 'pointer' }} />
            {` `}
            <Flags.FR onClick={() => changeLocale('fr')} style={{ width: '40px', cursor: 'pointer' }} />



        </Wrapper>
    );
}

export default LocaleSelector;