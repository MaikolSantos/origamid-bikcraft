if (window.SimpleSlide) {
    new SimpleSlide({
        slide: 'quote', 
        time: 5000
    });

    new SimpleSlide({
        slide: 'portfolio', 
        nav: true, 
        auto: true, 
        time: 5000, 
        pauseOnHover: true
    });
}

if (window.SimpleAnime) {
    new SimpleAnime();
}

if (window.SimpleForm) {
new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Esse site foi criado para aprendizagem. Caso queira um site institucional para seu negócio, favor enviar um e-mail para maikol.lourencon@gmail.com</p></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>EEsse site foi criado para aprendizagem. Caso queira um site institucional para seu negócio, favor enviar um e-mail para maikol.lourencon@gmail.com</p></div>", // mensagem de sucesso
  });
}
