const scrollBody = (active) => {
    return !active ? document.body.classList.remove("lock") : document.body.classList.add("lock")
}

export default scrollBody;