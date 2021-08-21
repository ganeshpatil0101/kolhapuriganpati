
export function getYears() {
    const lastYear = new Date().getFullYear();
    let years = [];
    for(let i=2010; i <= lastYear; i++) {
        years.push(i);
    }
    return years;
}
export function getCurrentYear() {
    return new Date().getFullYear();
}

