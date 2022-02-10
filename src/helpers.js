function getRandom(val) {
    const max = val * 0.75;
    const min = val * 0.25;
    return Math.floor(Math.random() * (max - min) + min);
};

export { getRandom };