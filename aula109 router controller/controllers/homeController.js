exports.homePage = (req, res) => {
    res.send(`
        <form action="/" method="POST" />
        Test Change: <input type="text" name="name" />
        <button>Submit</button>
        </form>
        `);
}

exports.handlePost = (req, res) => {
    res.send('New PORT route...');
};
