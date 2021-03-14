const scrollBody = (lock) => {
    return !!lock ? document.body.classList.add("lock") : document.body.classList.remove("lock")
}

export default scrollBody;