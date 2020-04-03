import React, { useContext } from 'react'
import StoreContext from '../../context/StoreContext'
import { Select, Option, Wrapper } from './styles'
import Cookie from 'universal-cookie'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

const LocaleSelector = () => {
    const { locale, changeLocale } = useContext(StoreContext);
    const cookies = new Cookie();
    if (!cookies.get('locale')) cookies.set('locale', 'en', { path: '/' });
    if(locale === 'undefined') changeLocale(cookies.get('locale'));

    return (
        <Wrapper>
            <p>Language:</p>
            <Select onChange={e => changeLocale(e.target.value)} value={locale} data-width="fit">
                <Option value="en">{getUnicodeFlagIcon('US') + ` `}English</Option>
                <Option value="it">{getUnicodeFlagIcon('IT') + ` `}Italiano</Option>
                <Option value="de">{getUnicodeFlagIcon('DE') + ` `}Deutsch</Option>
                <Option value="es">{getUnicodeFlagIcon('ES') + ` `}Español</Option>
                <Option value="fr">{getUnicodeFlagIcon('FR') + ` `}Le français</Option>
            </Select>
        </Wrapper>
    );
}

export default LocaleSelector;