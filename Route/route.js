const displaycontent = ((req, res) => {

    const url = req.url;


    if (url == '/about') {
        console.log(req.method);
        res.setHeader('Content-type', 'text/html');
        return res.end("last response");
    }

    else if (url == '/') {
        res.write('by default this is home page');
        res.end();
    }else {
        res.write('page not found');
        res.end();
    }
});

module.exports = displaycontent;