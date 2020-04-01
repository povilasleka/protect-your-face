export default (lang, content) => {
    if(!lang) lang = 'en';

    const openTag = `<!--${lang}-->`;
    const closeTag = `<!--end${lang}-->`;

    const parsedTextStartIndex = content.indexOf(openTag);
    const parsedTextEndIndex = content.indexOf(closeTag);

    return content.slice(parsedTextStartIndex, parsedTextEndIndex);
}