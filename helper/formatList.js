const formatList = (array) => array.reduce((a, e) => (a === null ? [e] : [...a, ', ', e]), null)
export default formatList
