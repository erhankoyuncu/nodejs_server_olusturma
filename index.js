const http = require('http');

const server = http.createServer((req, res) => {


    const url = req.url;

    switch (url) {

        case "/":
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8",  });
            res.write("<h2> Anasayfaya Hoş Geldiniz</h2>")
            break;
        case "/hakkimda":
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8",  });
            res.write("<h2> Hakkmızda  sayfasına Hoş Geldiniz</h2>")
            break;
        case "/iletisim":
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8",  });
            res.write("<h2> İletişim Sayfasına  Hoş Geldiniz</h2>")
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/html; charset=utf-8",  });
            res.write("<h2>  Aradınğınız sayfa bulunamadı</h2>")
            break;

    }

    console.log("Bir istek gönderildi");
     
    res.end()
})

const port = 5000;

server.listen(port, () => {
    console.log("server başlatıldı. Port : " + port)
});

