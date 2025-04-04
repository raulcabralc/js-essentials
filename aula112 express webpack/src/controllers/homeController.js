exports.homePage = (req, res) => {
    res.render('index');
}

exports.handlePost = (req, res) => {
    res.send('New PORT route...');
};
