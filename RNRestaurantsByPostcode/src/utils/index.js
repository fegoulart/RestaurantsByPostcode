export const formatTime = time => {
    let year = time.substring(0,4);
    let month = time.substring(5,7);
    let day = time.substring(8,10);
    let hour = time.substring(11,16);
    return `${month}/${day} ${hour}`
}