$(document).ready(function () {
  /*
  |--------------------------------------------------------------------------
  | VAR
  |--------------------------------------------------------------------------
  */

	if (get_cookie("chatbot_visualizando") == '1') {
    	set_cookie("chatbot_visualizando", "0");
		location.reload();
  	}

	

  let stepatual = $("#step-count").text();
  let $messages = $(".messages-content"),
    i = 0;

  if (!get_cookie("chat_iniciado")) {
    set_cookie("chat_iniciado", "0");
  }

  $("#resultado .buttons").prepend(
    '<button type="button" class="responder_novamente">Responder novamente</button>'
  );

  $("#resultado .responder_novamente").on("click", function () {
    $.ajax({
      url: ajax_object.ajax_url,
      type: "POST",
      dataType: "json",
      data: {
        action: "tratamento",
        reinicia_chat: "reiniciar",
      },
      success: function (result) {
        location.reload();
      },
    });
    //    erase_cookie('chat_iniciado');
    //    erase_cookie('chatbot_status');
    //    erase_cookie('chatbot_useremail');
    //    location.reload();
  });

  monta_resultados();

  $messages.mCustomScrollbar();

  /*
  |--------------------------------------------------------------------------
  | FUNCTIONS COOKIE 
  |--------------------------------------------------------------------------
  */

  function set_cookie(name, value, days = 1) {
    //' new Date().setHours(24) '
    if (days) {
      var d = new Date();
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = "; expires=" + d.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function get_cookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  if (get_cookie("chat_enviado") != "") {
    setTimeout(function () {
      erase_cookie("chat_info");
      $(".progress").css("width", "100%");
      $(
        '<div class="message new"><figure class="avatar"><img src="https://lift.actiosoftware.com/wp-content/uploads/2022/03/MicrosoftTeams-image-27.png" alt=""></figure><div class="pergunta">Chat enviado!</div></div>'
      )
        .appendTo($(".mCSB_container"))
        .addClass("new");
    }, 2000);
  }

  function erase_cookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
  }

  /*
  |--------------------------------------------------------------------------
  | FUNCTIONS CHAT
  |--------------------------------------------------------------------------
  */

  function monta_resultados() {
    let verify_cookie =
      get_cookie("chatbot_status") == "finalizado" &&
      get_cookie("chatbot_useremail") != "";

    if (verify_cookie) {
      $.ajax({
        url: ajax_object.ajax_url,
        type: "POST",
        dataType: "json",
        data: {
          action: "tratamento",
          monta_resultados: "get",
          consulta: get_cookie("chatbot_useremail"),
        },
        success: function (result) {
          console.log(result);
          $("#json_resultados").text(result.json_respostas);
          resultado_sucesso(JSON.parse(result.json_respostas));
        },
      });
    }
  }

  function resultado_sucesso(retorno) {
    let jsonres = retorno;

    let textos = {
      textos: [
        {
          tema: "Processo",
          textos_class: [
            {
              A: "<p>O processo de gest??o de desempenho deve ser vivo e gerar um ciclo virtuoso, que se renova e se retroalimenta a medida que a empresa e seus colaboradores crescem e/ou envoluem. Por isso, ?? importante aprimora-lo continuamente para que o mesmo siga agregando valor para todas as partes envolvidas, de acordo com as li????es aprendidas no ciclo anterior. Analise as tend??ncias/boas pr??ticas relacionadas a este tema e avalie o que faz mais sentido para a sua empresa, considerando todo o contexto ao qual ela est?? inserida. O resultado deste processo gera impactos na vida e na carreira das pessoas e, consequentemente, no n??vel de motiva????o e engajamento das mesmas. Independente de qual for o modelo de gest??o de desempenho da sua empresa (mais ou menos robusto/disrruptivo), busque sempre assegurar a simplicidade, agilidade e a qualidade na execu????o deste processo. Dica de ouro: busque refer??ncias, mas n??o se baseie apenas nisso! Lembre-se de que n??o existe um modelo ??nico/ideal de gest??o de desempenho, mas sim o modelo certo para cada empresa. O que funciona muito bem para uma empresa, pode n??o ser adequando para outra!</p><p>Na gest??o de desempenho, a tecnologia  tem um  impacto na melhoria da experi??ncia das pessoas ao longo de todo este processo. Quanto mais robusto e avan??ado for o processo, maior ser?? a necessidade de otimiza????o/automatiza????o para  minimizar a carga de atividades operacionais e  reduzir a depend??ncia das pessoas com o  RH para a execu????o e cumprimento das atividades/etapas que comp??em o processo, promovendo maior visibilidade e  autonomia a todos os envolvidos, al??m de construir uma base hist??rica com dados gerando analytics . Assim, a sua empresa pode concentrar energia e tempo naquilo que realmente importa e interessa: nas pessoas! Avalie se as ferramentas/sistemas utilizados pela sua empresa est??o sendo suficientes para atender ??s necessidades e expectativas dos usu??rios (RH, l??deres e colaboradores). Caso n??o atenda, verifique a possibilidade de aderir um novo recurso, que se adapte melhor a realidade e particularidades da sua empresa.</p>",
              B: "<p>O processo de gest??o de desempenho deve ser vivo e gerar um ciclo virtuoso, que se renova e se retroalimenta a medida que a empresa e seus colaboradores crescem e/ou envoluem. Por isso, ?? importante aprimora-lo continuamente para que o mesmo siga agregando valor para todas as partes envolvidas, de acordo com as li????es aprendidas no ciclo anterior. Analise as tend??ncias/boas pr??ticas relacionadas a este tema e avalie o que faz mais sentido para a sua empresa, considerando todo o contexto ao qual ela est?? inserida. O resultado deste processo gera impactos na vida e na carreira das pessoas e, consequentemente, no n??vel de motiva????o e engajamento das mesmas. Independente de qual for o modelo de gest??o de desempenho da sua empresa (mais ou menos robusto/disrruptivo), busque sempre assegurar a simplicidade, agilidade e a qualidade na execu????o deste processo. Dica de ouro: busque refer??ncias, mas n??o se baseie apenas nisso! Lembre-se de que n??o existe um modelo ??nico/ideal de gest??o de desempenho, mas sim o modelo certo para cada empresa. O que funciona muito bem para uma empresa, pode n??o ser adequando para outra!</p><p>Na gest??o de desempenho, a tecnologia  tem um  impacto na melhoria da experi??ncia das pessoas ao longo de todo este processo. Quanto mais robusto e avan??ado for o processo, maior ser?? a necessidade de otimiza????o/automatiza????o para  minimizar a carga de atividades operacionais e  reduzir a depend??ncia das pessoas com o  RH para a execu????o e cumprimento das atividades/etapas que comp??em o processo, promovendo maior visibilidade e  autonomia a todos os envolvidos, al??m de construir uma base hist??rica com dados gerando analytics . Assim, a sua empresa pode concentrar energia e tempo naquilo que realmente importa e interessa: nas pessoas! Avalie se as ferramentas/sistemas utilizados pela sua empresa est??o sendo suficientes para atender ??s necessidades e expectativas dos usu??rios (RH, l??deres e colaboradores). Caso n??o atenda, verifique a possibilidade de aderir um novo recurso, que se adapte melhor a realidade e particularidades da sua empresa.</p>",
              C: "<p>Avalie se o processo de gest??o de desempenho adotado pela sua empresa est?? alinhado ao n??vel de maturidade. O resultado deste processo gera impactos na vida e na carreira das pessoas e, consequentemente, no n??vel de motiva????o e engajamento das mesmas. Opte pela simplicidade e qualidade da execu????o deste processo! O mais importante ?? fazer com que ele funcione bem e fa??a sentido para todas as partes envolvidas. Na d??vida, colete as percep????es das pessoas a respeito deste processo x  as necessidades do neg??cio, antes de viabilizar a implementa????o das oportunidades de melhoria identificadas. Lembre-se de que n??o existe um modelo ??nico de gest??o de desempenho, mas sim o modelo certo para cada empresa. O que funciona muito bem para uma empresa, pode n??o ser adequando para outra! Busque sempre a melhoria cont??nua do processo, de acordo com as li????es aprendidas no ciclo anterior. N??o tenha pressa, evolua aos poucos (um degrau de cada vez), essa ?? chave para o sucesso!</p><p>Analise e reflita sobre o que a empresa e as pessoas esperam do atual modelo gest??o de desempenho da sua empresa. Como este processo ?? percebido pela pessoas? O que funciona bem e n??o pode ser perdido? O que n??o funciona e precisa ser melhorado? Da forma como ?? conduzido, este processo atende as reais necessidades e expetativas das pessoas e do neg??cio? Se a resposta da pergunta anterior for n??o, o processo certamente n??o gera o valor esperado e precisa ser revisitado. Se tiver dificuldade, busque ajuda!</p><p>Um fator essencial e indiscut??vel para a operacionaliza????o e otimiza????o de qualquer processo, ?? o investimento em tecnologia. Na gest??o de desempenho isso n??o ?? diferente. Por se tratar de um processo cr??tico e extremamente estrat??gico, que demanda a coleta e an??lise minunciosa de dados para uma tomada decis??o assertiva (que afeta diretamente o futuro das pessoas e o neg??cio), minimizar a carga de atividades operacionais e melhorar a experi??ncia das pessoas ao longo deste processo ?? fundamental. Assim, a sua empresa pode concentrar energia e tempo naquilo que realmente importa e interessa: nas pessoas! Ter um processo de gest??o de desempenho manual, moroso e/ou com o uso de ferramentas/sistemas que n??o se adaptam ao processo e modelo ideal para a sua empresa, trar?? mais perdas do que ganhos (principalmente de dinheiro). Por isso, avalie bem as op????es e opte por aquele que for mais adequado para a sua empresa.</p>",
              D: "<p>Avalie se o processo de gest??o de desempenho adotado pela sua empresa est?? alinhado ao n??vel de maturidade. O resultado deste processo gera impactos na vida e na carreira das pessoas e, consequentemente, no n??vel de motiva????o e engajamento das mesmas. Opte pela simplicidade e qualidade da execu????o deste processo! O mais importante ?? fazer com que ele funcione bem e fa??a sentido para todas as partes envolvidas. Na d??vida, colete as percep????es das pessoas a respeito deste processo x  as necessidades do neg??cio, antes de viabilizar a implementa????o das oportunidades de melhoria identificadas. Lembre-se de que n??o existe um modelo ??nico de gest??o de desempenho, mas sim o modelo certo para cada empresa. O que funciona muito bem para uma empresa, pode n??o ser adequando para outra! Busque sempre a melhoria cont??nua do processo, de acordo com as li????es aprendidas no ciclo anterior. N??o tenha pressa, evolua aos poucos (um degrau de cada vez), essa ?? chave para o sucesso!</p><p>Analise e reflita sobre o que a empresa e as pessoas esperam do atual modelo gest??o de desempenho da sua empresa. Como este processo ?? percebido pela pessoas? O que funciona bem e n??o pode ser perdido? O que n??o funciona e precisa ser melhorado? Da forma como ?? conduzido, este processo atende as reais necessidades e expetativas das pessoas e do neg??cio? Se a resposta da pergunta anterior for n??o, o processo certamente n??o gera o valor esperado e precisa ser revisitado. Se tiver dificuldade, busque ajuda!</p><p>Um fator essencial e indiscut??vel para a operacionaliza????o e otimiza????o de qualquer processo, ?? o investimento em tecnologia. Na gest??o de desempenho isso n??o ?? diferente. Por se tratar de um processo cr??tico e extremamente estrat??gico, que demanda a coleta e an??lise minunciosa de dados para uma tomada decis??o assertiva (que afeta diretamente o futuro das pessoas e o neg??cio), minimizar a carga de atividades operacionais e melhorar a experi??ncia das pessoas ao longo deste processo ?? fundamental. Assim, a sua empresa pode concentrar energia e tempo naquilo que realmente importa e interessa: nas pessoas! Ter um processo de gest??o de desempenho manual, moroso e/ou com o uso de ferramentas/sistemas que n??o se adaptam ao processo e modelo ideal para a sua empresa, trar?? mais perdas do que ganhos (principalmente de dinheiro). Por isso, avalie bem as op????es e opte por aquele que for mais adequado para a sua empresa.</p>",
            },
          ],
        },
        {
          tema: "Diretrizes",
          textos_class: [
            {
              A: "<p>Verifique se o modelo de KPIs/metas individuais e/ou coletivas definidas pela sua empresa ?? revisitado sempre que necess??rio, de acordo com o cen??rio e principais desafios, refletindo e impulsionando a estrat??gia do neg??cio. ?? impressind??vel  direcionar os esfor??os de maneira assertiva (na mesma dire????o) para assegurar e/ou superar o atingimento dos resultados. Lembre-se que a gest??o de desempenho mensura e direciona a execu????o da estrat??gia da sua empresa.</p><p>Ao final de cada ciclo de gente, avalie se o modelo de gest??o de desempenho adotado pela sua empresa est?? sendo efetivo no fortalecimento da cultura, levando em considera????o a ader??ncia dos profissionais ao 'jeito de ser' (aquilo que a empresa acredita, valoriza e n??o abre m??o). Assegure que a identidade organizacional e a estrat??gia da sua empresa esteja conectada e fortemente internalizada neste processo para potencializar e gerar o m??ximo de valor para o neg??cio e, consequentemente, para as pessoas. Dica de ouro: analise a necessidade de customiza????o e/ou adapta????o do modelo de compet??ncias adotado pela sua empresa, usando uma abordagem mais simples e uma linguagem aderente as necessidades, particularidades do neg??cio. Assim como nas metas, ?? importante que as compet??ncias organizacionais esteja bem desdobradas e calibradas, de acordo com o n??vel de exig??ncia e complexidade das fun????es.</p>",
              B: "<p>Verifique se o modelo de KPIs/metas individuais e/ou coletivas definidas pela sua empresa ?? revisitado sempre que necess??rio, de acordo com o cen??rio e principais desafios, refletindo e impulsionando a estrat??gia do neg??cio. ?? impressind??vel  direcionar os esfor??os de maneira assertiva (na mesma dire????o) para assegurar e/ou superar o atingimento dos resultados. Lembre-se que a gest??o de desempenho mensura e direciona a execu????o da estrat??gia da sua empresa.</p><p>Ao final de cada ciclo de gente, avalie se o modelo de gest??o de desempenho adotado pela sua empresa est?? sendo efetivo no fortalecimento da cultura, levando em considera????o a ader??ncia dos profissionais ao 'jeito de ser' (aquilo que a empresa acredita, valoriza e n??o abre m??o). Assegure que a identidade organizacional e a estrat??gia da sua empresa esteja conectada e fortemente internalizada neste processo para potencializar e gerar o m??ximo de valor para o neg??cio e, consequentemente, para as pessoas. Dica de ouro: analise a necessidade de customiza????o e/ou adapta????o do modelo de compet??ncias adotado pela sua empresa, usando uma abordagem mais simples e uma linguagem aderente as necessidades, particularidades do neg??cio. Assim como nas metas, ?? importante que as compet??ncias organizacionais esteja bem desdobradas e calibradas, de acordo com o n??vel de exig??ncia e complexidade das fun????es.</p>",
              C: "<p>Avalie a necessidade de defini????o e/ou revis??o dos KPIs/metas individuais e/ou coletivas, visando garantir que os mesmos est??o refletindo e ajudando a impulsionar a estrat??gia da sua empresa. Al??m disso, o desdobramento das metas para todos os n??veis da empresa, ajuda a direcionar os esfor??os de maneira mais assertiva para o alcance dos resultados esperados. ?? fudamental que todos 'remem o barco' na mesma dire????o.</p><p>Analise se o processo de gest??o de desempenho adotado pela sua empresa est?? coerente com o que de fato ela preza e valoriza, considerando as particularidades do neg??cio. A identidade organizacional (prop??sito, miss??o, vis??o e valores/princip??os) devem estar intimamente internalizados neste processo, pois este reflete a cultura. Do contr??rio, ele n??o agregar?? valor para o neg??cio e, consequentemente, para os profissionais.</p><p>Enquando as metas devem ser apuradas, os comportamentos devem ser avaliados. Verifique a necessidade de definir e/ou revisar as compet??ncias organizacionais e de lideran??a, garantindo que as mesmas est??o traduzindo o 'jeito de ser' da sua empresa (aquilo que a empresa acredita, valoriza e n??o abre m??o) em comportamentos esperados e poss??veis de serem observados e avaliados (para reduzir ao m??ximo o n??vel de subjetividade no momento da avalia????o). Compet??ncias bem definidas e comunicadas, d??o clareza para as pessoas sobre o que ?? esperado delas, al??m de direcionar o desenvolvimento das compet??ncias necess??rias para o neg??cio. Assim como nas metas, uma mesma compet??ncias pode ser desdobrada e calibrada, de acordo com o n??vel de exig??ncia e complexidade das fun????es.</p>",
              D: "<p>Avalie a necessidade de defini????o e/ou revis??o dos KPIs/metas individuais e/ou coletivas, visando garantir que os mesmos est??o refletindo e ajudando a impulsionar a estrat??gia da sua empresa. Al??m disso, o desdobramento das metas para todos os n??veis da empresa, ajuda a direcionar os esfor??os de maneira mais assertiva para o alcance dos resultados esperados. ?? fudamental que todos 'remem o barco' na mesma dire????o.</p><p>Analise se o processo de gest??o de desempenho adotado pela sua empresa est?? coerente com o que de fato ela preza e valoriza, considerando as particularidades do neg??cio. A identidade organizacional (prop??sito, miss??o, vis??o e valores/princip??os) devem estar intimamente internalizados neste processo, pois este reflete a cultura. Do contr??rio, ele n??o agregar?? valor para o neg??cio e, consequentemente, para os profissionais.</p><p>Enquando as metas devem ser apuradas, os comportamentos devem ser avaliados. Verifique a necessidade de definir e/ou revisar as compet??ncias organizacionais e de lideran??a, garantindo que as mesmas est??o traduzindo o 'jeito de ser' da sua empresa (aquilo que a empresa acredita, valoriza e n??o abre m??o) em comportamentos esperados e poss??veis de serem observados e avaliados (para reduzir ao m??ximo o n??vel de subjetividade no momento da avalia????o). Compet??ncias bem definidas e comunicadas, d??o clareza para as pessoas sobre o que ?? esperado delas, al??m de direcionar o desenvolvimento das compet??ncias necess??rias para o neg??cio. Assim como nas metas, uma mesma compet??ncias pode ser desdobrada e calibrada, de acordo com o n??vel de exig??ncia e complexidade das fun????es.</p>",
            },
          ],
        },
        {
          tema: "Pessoas",
          textos_class: [
            {
              A: "<p>A gest??o de desempenho da sua empresa funciona como um importante aliado da estrat??gia da jornada do colaborador (employee experience)? Quanto mais os colaboradores estiverem motivados e satisfeitos com a sua empresa, melhor ser?? o engajamento e, consequentemente, melhores ser??o os resultados alcan??ados. Por isso, ?? preciso executar um trabalho cont??nuo de acompanhamento e desenvolvimento dos colaboradores durante todas as fases dessa jornada (desde o primeiro contato at?? o fim do v??nculo empregat??cio). ?? por meio da gest??o de desempenho, que a sua empresa poder?? acompanhar e identificar rapidamente as fortalezas e os gaps das equipes e mant??-las alinhadas, contribuindo para a melhoria da experi??ncia dos colaboradores da organiza????o.</p><p>?? papel da lideran??a promover e garantir que a gest??o de desempenho ocorra na pr??tica (durante a rotina de trabalho) de forma cont??nua, ao longo de todo o ciclo de gente. Para que isso ocorra, a lideran??a deve ser acess??vel e pr??xima, atuando de forma ativa a participativa na gest??o e desenvolvimento do time, oferecendo acompanhamento, orienta????o/direcionamento e forma????o, com base nas necessidades, aspira????es e particularidades individuais e coletivas do time. Avalie se o assunto 'gente' est??  inserido na agenda da lideran??a da sua empresa de forma definitiva e  recorrente, investindo tempo e enegia necess??ria para contribir forma efetiva com a melhoria da performance dos colaboradores.</p><p>Quando pensamos em desenvolvimento de pessoas, mais um fator importante deve ser levado em considera????o (al??m do apoio da lideran??a): o PROTAGONISMO das PESSOAS! Por isso, ?? essencial que a sua empresa garanta a capacita????o de todos e atue na promo????o cont??nua de a????es que refor??em o engajamento das mesmas acerca do processo de gest??o de desempenho. O desenvolvimento s?? acontece se as pessoas se comprometerem e entenderem o valor que este processo agrega.</p>",
              B: "<p>A gest??o de desempenho da sua empresa funciona como um importante aliado da estrat??gia da jornada do colaborador (employee experience)? Quanto mais os colaboradores estiverem motivados e satisfeitos com a sua empresa, melhor ser?? o engajamento e, consequentemente, melhores ser??o os resultados alcan??ados. Por isso, ?? preciso executar um trabalho cont??nuo de acompanhamento e desenvolvimento dos colaboradores durante todas as fases dessa jornada (desde o primeiro contato at?? o fim do v??nculo empregat??cio). ?? por meio da gest??o de desempenho, que a sua empresa poder?? acompanhar e identificar rapidamente as fortalezas e os gaps das equipes e mant??-las alinhadas, contribuindo para a melhoria da experi??ncia dos colaboradores da organiza????o.</p><p>?? papel da lideran??a promover e garantir que a gest??o de desempenho ocorra na pr??tica (durante a rotina de trabalho) de forma cont??nua, ao longo de todo o ciclo de gente. Para que isso ocorra, a lideran??a deve ser acess??vel e pr??xima, atuando de forma ativa a participativa na gest??o e desenvolvimento do time, oferecendo acompanhamento, orienta????o/direcionamento e forma????o, com base nas necessidades, aspira????es e particularidades individuais e coletivas do time. Avalie se o assunto 'gente' est??  inserido na agenda da lideran??a da sua empresa de forma definitiva e  recorrente, investindo tempo e enegia necess??ria para contribir forma efetiva com a melhoria da performance dos colaboradores.</p><p>Quando pensamos em desenvolvimento de pessoas, mais um fator importante deve ser levado em considera????o (al??m do apoio da lideran??a): o PROTAGONISMO das PESSOAS! Por isso, ?? essencial que a sua empresa garanta a capacita????o de todos e atue na promo????o cont??nua de a????es que refor??em o engajamento das mesmas acerca do processo de gest??o de desempenho. O desenvolvimento s?? acontece se as pessoas se comprometerem e entenderem o valor que este processo agrega.</p>",
              C: "<p>Reflita se a gest??o de desempenho est?? conectada  com todas as fases da jornada do colaborador (employee experience). A gest??o de desempenho deve ser vista um grande 'guarda-chuva', que retroalimenta e possu?? interface com a gest??o de pessoas como um todo. Sendo assim, a gest??o de desempenho n??o deve se limitar apenas ao processo avaliativo (AVD, reuni??es de gente, devolutivas, PDI, dentre outras pr??ticas...), que ocorrem de forma pontual em um ou mais momentos do ano. O processo avaliativo deve ser visto como uma etapa da gest??o de desempenho, que permite a mesura????o e formaliza????o do desempenho obtido. No entando, as entradas e sa??das da gest??o de desempenho, devem ser considerados como inputs para outros processos, tais como: Atra????o & Sele????o, Onboarding, Treinamento & Desenvolvimento, Avalia????o de Desempenho, Potencial Carreira e Sucess??o, Reconhecimento, dentre outros.</p><p>Como est?? o  preparo e a atua????o da lideran??a na promo????o e no apoio a condu????o deste processo? ?? crucial ter clareza sobre os pap??is & responsabilidades de todos os agentes envolvidos na gest??o de desempenho. ?? papel da lideran??a promover e garantir que a gest??o de desempenho ocorra na pr??tica (durante a rotina de trabalho) de forma cont??nua, ao longo de todo o ciclo de gente. Para que isso ocorra, a lideran??a deve ser acess??vel e pr??xima, atuando de forma ativa a participativa na gest??o e desenvolvimento do time, oferecendo acompanhamento, orienta????o/direcionamento e forma????o, com base nas necessidades, aspira????es e particularidades individuais e coletivas do time. No entando, essa postura exige maturidade, preparo e comprometimento da lideran??a. Dica de ouro: avalie o comportamento da lideran??a da sua empresa e invista energia e tempo na capacita????o e sensibiliza????o dos mesmos, para que o assunto 'gente' seja inserido na agenda da lideran??a de forma definitiva e  recorrente. Al??m disso, busque uma ferramenta/sistema que apoie e facilite essa gest??o.</p><p>Quando pensamos em desenvolvimento de pessoas, mais um fator importante deve ser levado em considera????o (al??m do apoio da lideran??a): o PROTAGONISMO das PESSOAS! Parece ??bvio, mas aqui estamos falando da disposi????o, do desejo de melhorar e do engajamento das pessoas para se autodesenvolverem. Por mais que a sua empresa forne??a condi????es e recursos para isso, o desenvolvimento s?? acontece se as pessoas se comprometerem e entenderem o valor que este processo pode agregar. Por isso, ?? extremamente importante que os colaboradores tamb??m sejam capacitados e sensibilizados acerca da importancia da gest??o de desempenho. Se a sua empresa optar por um processo centrado nas pessoas, lembre-se de a principal sa??da deste processo s??o os planos de desenvolvimento individual/coletivo do time, com o objetivo de refor??ar as fortalezas e desenvolver os pontos de melhoria identificados no processo avaliativo. Por isso, o protagonismo, a dedica????o e o compromisso de todos com a gest??o de desempenho e com o seu pr??prio desenvolvimento, tamb??m ?? considerado um fator critico de sucesso.</p>",
              D: "<p>Reflita se a gest??o de desempenho est?? conectada  com todas as fases da jornada do colaborador (employee experience). A gest??o de desempenho deve ser vista um grande 'guarda-chuva', que retroalimenta e possu?? interface com a gest??o de pessoas como um todo. Sendo assim, a gest??o de desempenho n??o deve se limitar apenas ao processo avaliativo (AVD, reuni??es de gente, devolutivas, PDI, dentre outras pr??ticas...), que ocorrem de forma pontual em um ou mais momentos do ano. O processo avaliativo deve ser visto como uma etapa da gest??o de desempenho, que permite a mesura????o e formaliza????o do desempenho obtido. No entando, as entradas e sa??das da gest??o de desempenho, devem ser considerados como inputs para outros processos, tais como: Atra????o & Sele????o, Onboarding, Treinamento & Desenvolvimento, Avalia????o de Desempenho, Potencial Carreira e Sucess??o, Reconhecimento, dentre outros.</p><p>Como est?? o  preparo e a atua????o da lideran??a na promo????o e no apoio a condu????o deste processo? ?? crucial ter clareza sobre os pap??is & responsabilidades de todos os agentes envolvidos na gest??o de desempenho. ?? papel da lideran??a promover e garantir que a gest??o de desempenho ocorra na pr??tica (durante a rotina de trabalho) de forma cont??nua, ao longo de todo o ciclo de gente. Para que isso ocorra, a lideran??a deve ser acess??vel e pr??xima, atuando de forma ativa a participativa na gest??o e desenvolvimento do time, oferecendo acompanhamento, orienta????o/direcionamento e forma????o, com base nas necessidades, aspira????es e particularidades individuais e coletivas do time. No entando, essa postura exige maturidade, preparo e comprometimento da lideran??a. Dica de ouro: avalie o comportamento da lideran??a da sua empresa e invista energia e tempo na capacita????o e sensibiliza????o dos mesmos, para que o assunto 'gente' seja inserido na agenda da lideran??a de forma definitiva e  recorrente. Al??m disso, busque uma ferramenta/sistema que apoie e facilite essa gest??o.</p><p>Quando pensamos em desenvolvimento de pessoas, mais um fator importante deve ser levado em considera????o (al??m do apoio da lideran??a): o PROTAGONISMO das PESSOAS! Parece ??bvio, mas aqui estamos falando da disposi????o, do desejo de melhorar e do engajamento das pessoas para se autodesenvolverem. Por mais que a sua empresa forne??a condi????es e recursos para isso, o desenvolvimento s?? acontece se as pessoas se comprometerem e entenderem o valor que este processo pode agregar. Por isso, ?? extremamente importante que os colaboradores tamb??m sejam capacitados e sensibilizados acerca da importancia da gest??o de desempenho. Se a sua empresa optar por um processo centrado nas pessoas, lembre-se de a principal sa??da deste processo s??o os planos de desenvolvimento individual/coletivo do time, com o objetivo de refor??ar as fortalezas e desenvolver os pontos de melhoria identificados no processo avaliativo. Por isso, o protagonismo, a dedica????o e o compromisso de todos com a gest??o de desempenho e com o seu pr??prio desenvolvimento, tamb??m ?? considerado um fator critico de sucesso.</p>",
            },
          ],
        },
        {
          tema: "Decis??o",
          textos_class: [
            {
              A: "<p>A gest??o de desempenho da sua empresa ?? efetiva na forma????o de um pipeline de gente estruturado, que suporte as necessidades das pessoas e do neg??cios para o curto, m??dio e longo prazo? Para isso, reflita: as movimenta????es, a????es de reconhecimento, carreira e sucess??o da sua empresa est??o coerentes e fundamentadas na performance obtida pelos colaboradores? Os dados levados em considera????o para apoiar essa decis??o, garantem que a mesma seja feita de forma mais justa, imparcial e alinhadas com as necessidades do neg??cio? A lideran??a apoia, tem autonomia e/ou contribui com este processo de alguma forma? As pessoas se sentem valorizadas e possuem uma perspectiva clara de carreira, com suas aspira????es e expectativas sendo levadas em considera????o? Dica: aprofunde essas quest??es dentro do seu processo e invista em people analytics (algoritmo para cruzamento de dados e gera????o de hip??teses) para ganhar tempo na gera????o dos insumos necess??rios, que garantam uma tomada de decis??o bem embasada e assertiva.</p>",
              B: "<p>A gest??o de desempenho da sua empresa ?? efetiva na forma????o de um pipeline de gente estruturado, que suporte as necessidades das pessoas e do neg??cios para o curto, m??dio e longo prazo? Para isso, reflita: as movimenta????es, a????es de reconhecimento, carreira e sucess??o da sua empresa est??o coerentes e fundamentadas na performance obtida pelos colaboradores? Os dados levados em considera????o para apoiar essa decis??o, garantem que a mesma seja feita de forma mais justa, imparcial e alinhadas com as necessidades do neg??cio? A lideran??a apoia, tem autonomia e/ou contribui com este processo de alguma forma? As pessoas se sentem valorizadas e possuem uma perspectiva clara de carreira, com suas aspira????es e expectativas sendo levadas em considera????o? Dica: aprofunde essas quest??es dentro do seu processo e invista em people analytics (algoritmo para cruzamento de dados e gera????o de hip??teses) para ganhar tempo na gera????o dos insumos necess??rios, que garantam uma tomada de decis??o bem embasada e assertiva.</p>",
              C: "<p>Tenho em vista que a gest??o de desempenho ?? um processo altamente cr??tico e estrat??gico para o futuro do neg??cio e de seus colaboradores, ?? preciso entender e avaliar se o modelo adotado pela sua empresa gera todos os insumos necess??rios para garantir uma tomada de decis??o bem embasada e assertiva. Para isso, reflita: as movimenta????es, a????es de reconhecimento, carreira e sucess??o da sua empresa est??o coerentes e fundamentadas na performance obtida pelos colaboradores? Os dados levados em considera????o para apoiar essa decis??o, garantem que a mesma seja feita de forma mais justa, imparcial e alinhadas com as necessidades do neg??cio? A lideran??a apoia, tem autonomia e/ou contribui com este processo de alguma forma? As pessoas se sentem valorizadas e possuem uma perspectiva clara de carreira, com suas aspira????es e expectativas sendo levadas em considera????o?  Se alguma das respostas anteriores for n??o, ?? provavel que a gest??o de desempenho da sua empresa n??o seja efetiva na forma????o de um pipeline de gente estruturado, que suporte as necessidades das pessoas e do neg??cios para o curto, m??dio e longo prazo.  Aprofunde essas quest??es dentro do seu processo e invista em ferramentas/recursos que possam apoiar na consolida????o de dados, gerando insumos para essas decis??es.</p>",
              D: "<p>Tenho em vista que a gest??o de desempenho ?? um processo altamente cr??tico e estrat??gico para o futuro do neg??cio e de seus colaboradores, ?? preciso entender e avaliar se o modelo adotado pela sua empresa gera todos os insumos necess??rios para garantir uma tomada de decis??o bem embasada e assertiva. Para isso, reflita: as movimenta????es, a????es de reconhecimento, carreira e sucess??o da sua empresa est??o coerentes e fundamentadas na performance obtida pelos colaboradores? Os dados levados em considera????o para apoiar essa decis??o, garantem que a mesma seja feita de forma mais justa, imparcial e alinhadas com as necessidades do neg??cio? A lideran??a apoia, tem autonomia e/ou contribui com este processo de alguma forma? As pessoas se sentem valorizadas e possuem uma perspectiva clara de carreira, com suas aspira????es e expectativas sendo levadas em considera????o?  Se alguma das respostas anteriores for n??o, ?? provavel que a gest??o de desempenho da sua empresa n??o seja efetiva na forma????o de um pipeline de gente estruturado, que suporte as necessidades das pessoas e do neg??cios para o curto, m??dio e longo prazo.  Aprofunde essas quest??es dentro do seu processo e invista em ferramentas/recursos que possam apoiar na consolida????o de dados, gerando insumos para essas decis??es.</p>",
            },
          ],
        },
        {
          tema: "Comunica????o",
          textos_class: [
            {
              A: "<p>?? de suma import??ncia que as pessoas tenham clareza sobre todo o funcionamento, investimento (principalmente de tempo/energia) e caminho percorrido pela empresa e profissionais envolvidos para assergurar a seriedade, qualidade e efetividade deste processo. Para isso, garanta que a gest??o de desempenho da sua empresa seja sempre bem comunicada e entendida por todos em toda a sua amplitude/abrang??ncia (dimens??es avaliadas, crit??rios, regras, etapas, etc.), proprocionando visibilidade acerca do andamento e resultados obtidos no processo avaliativo, ap??s o encerramento do mesmo. Novamente, a tecnologia pode ser uma grande facilitadora deste quesito.</p><p>O fluxo de comunica????o e troca constante entre l??deres, liderados e equipes ao longo do ciclo de gente, ?? fundamental para garantir a efetividade da gest??o de desempenho . Lembre-se de que, em linhas gerais, a gest??o de desempenho nada mais ?? do que um conjunto de pr??ticas colaborativas, no qual o olhar do outro ajuda a melhorar o seu. Verifique se rotinas de alinhamento adotadas pela sua empresa s??o cumpridas corretamente, refor??ando essa intera????o entre os profissionais, por meio de conversas frequentes e transparentes com foco no desenvolvimento.</p>",
              B: "<p>?? de suma import??ncia que as pessoas tenham clareza sobre todo o funcionamento, investimento (principalmente de tempo/energia) e caminho percorrido pela empresa e profissionais envolvidos para assergurar a seriedade, qualidade e efetividade deste processo. Para isso, garanta que a gest??o de desempenho da sua empresa seja sempre bem comunicada e entendida por todos em toda a sua amplitude/abrang??ncia (dimens??es avaliadas, crit??rios, regras, etapas, etc.), proprocionando visibilidade acerca do andamento e resultados obtidos no processo avaliativo, ap??s o encerramento do mesmo. Novamente, a tecnologia pode ser uma grande facilitadora deste quesito.</p><p>O fluxo de comunica????o e troca constante entre l??deres, liderados e equipes ao longo do ciclo de gente, ?? fundamental para garantir a efetividade da gest??o de desempenho . Lembre-se de que, em linhas gerais, a gest??o de desempenho nada mais ?? do que um conjunto de pr??ticas colaborativas, no qual o olhar do outro ajuda a melhorar o seu. Verifique se rotinas de alinhamento adotadas pela sua empresa s??o cumpridas corretamente, refor??ando essa intera????o entre os profissionais, por meio de conversas frequentes e transparentes com foco no desenvolvimento.</p>",
              C: "<p>Avalie se a gest??o de desempenho da sua empresa ??, de fato, bem comunicada e entendida por todos em toda a sua amplitude/abrang??ncia (dimens??es avaliadas, crit??rios, regras, etapas, etc.), proprocionando visibilidade acerca do andamento e resultados obtidos no processo avaliativo, ap??s o encerramento do mesmo. ?? de suma import??ncia que as pessoas tenham clareza sobre todo o funcionamento, investimento (principalmente de tempo/energia) e caminho percorrido pela empresas e profissionais envolvidos para assergurar a seriedade, qualidade e efetividade deste processo. Novamente, a tecnologia pode ser uma grande facilitadora deste quesito.</p><p>Verifique a necessidade de promover e/ou aprimorar o fluxo de comunica????o e troca constante entre l??deres, liderados e equipes ao longo do ciclo de gente. Lembre-se de que, em linhas gerais, a gest??o de desempenho nada mais ?? do que um conjunto de pr??ticas colaborativas, no qual o olhar do outro ajuda a melhorar o seu. Dica de ouro: estabele??a e implemente rotinas que reforcem essa intera????o entre os profissionais, por meio de conversas frequentes e transparentes, focadas em desenvolvimento.</p>",
              D: "<p>Avalie se a gest??o de desempenho da sua empresa ??, de fato, bem comunicada e entendida por todos em toda a sua amplitude/abrang??ncia (dimens??es avaliadas, crit??rios, regras, etapas, etc.), proprocionando visibilidade acerca do andamento e resultados obtidos no processo avaliativo, ap??s o encerramento do mesmo. ?? de suma import??ncia que as pessoas tenham clareza sobre todo o funcionamento, investimento (principalmente de tempo/energia) e caminho percorrido pela empresas e profissionais envolvidos para assergurar a seriedade, qualidade e efetividade deste processo. Novamente, a tecnologia pode ser uma grande facilitadora deste quesito.</p><p>Verifique a necessidade de promover e/ou aprimorar o fluxo de comunica????o e troca constante entre l??deres, liderados e equipes ao longo do ciclo de gente. Lembre-se de que, em linhas gerais, a gest??o de desempenho nada mais ?? do que um conjunto de pr??ticas colaborativas, no qual o olhar do outro ajuda a melhorar o seu. Dica de ouro: estabele??a e implemente rotinas que reforcem essa intera????o entre os profissionais, por meio de conversas frequentes e transparentes, focadas em desenvolvimento.</p>",
            },
          ],
        },
        {
          tema: "Resultado Geral",
          textos_class: [
            {
              A: "<p>A Gest??o de Desempenho tem sido um dos temas mais desafiadores e priorizados nos ??ltimos anos, por se tratar de um processo extremamente cr??tico para alavancar a estrat??gia das organiza????es, em meio a um cen??rio global de neg??cios cada vez mais complexos, vol??teis e disruptivos.</p><p>Pensando nisso, se faz cada vez mais importante e necess??rio direcionar, acompanhar e mensurar o desempenho das pessoas com dinamismo, const??ncia e efic??cia, por meio de pr??ticas construtivas e colaborativas, que promovam de fato o desenvolvimento cont??nuo dos colaboradores.</p>",
              B: "<p>A Gest??o de Desempenho tem sido um dos temas mais desafiadores e priorizados nos ??ltimos anos, por se tratar de um processo extremamente cr??tico para alavancar a estrat??gia das organiza????es, em meio a um cen??rio global de neg??cios cada vez mais complexos, vol??teis e disruptivos.</p><p>Pensando nisso, se faz cada vez mais importante e necess??rio direcionar, acompanhar e mensurar o desempenho das pessoas com dinamismo, const??ncia e efic??cia, por meio de pr??ticas construtivas e colaborativas, que promovam de fato o desenvolvimento cont??nuo dos colaboradores.</p>",
              C: "<p>A Gest??o de Desempenho tem sido um dos temas mais desafiadores e priorizados nos ??ltimos anos, por se tratar de um processo extremamente cr??tico para alavancar a estrat??gia das organiza????es, em meio a um cen??rio global de neg??cios cada vez mais complexos, vol??teis e disruptivos.</p><p>Pensando nisso, se faz cada vez mais importante e necess??rio direcionar, acompanhar e mensurar o desempenho das pessoas com dinamismo, const??ncia e efic??cia, por meio de pr??ticas construtivas e colaborativas, que promovam de fato o desenvolvimento cont??nuo dos colaboradores.</p>",
              D: "<p>A Gest??o de Desempenho tem sido um dos temas mais desafiadores e priorizados nos ??ltimos anos, por se tratar de um processo extremamente cr??tico para alavancar a estrat??gia das organiza????es, em meio a um cen??rio global de neg??cios cada vez mais complexos, vol??teis e disruptivos.</p><p>Pensando nisso, se faz cada vez mais importante e necess??rio direcionar, acompanhar e mensurar o desempenho das pessoas com dinamismo, const??ncia e efic??cia, por meio de pr??ticas construtivas e colaborativas, que promovam de fato o desenvolvimento cont??nuo dos colaboradores.</p>",
            },
          ],
        },
      ],
    };

    $("#resultado .itens").html("");
    $("#resultado .resumo").prepend(
      '<h2 class="nome">' + jsonres["nome_usuario"] + ",</h2>"
    );

    let arrayres = jsonres["resultados"];

    console.log(retorno);

	  let arraytemas = [];
	  let arrayporcentagens = [];

    for (var i = 0; i < arrayres.length; i++) {
		if(arrayres[i]['tema'] != 'Resultado Geral') {
			arraytemas.push(arrayres[i]['tema']);
			arrayporcentagens.push(Number(arrayres[i]['porcentagem'].replace('%', '')));
		}
      $("#resultado .itens").append(`
          <div class="${
            arrayres[i]["tema"] == "Resultado Geral" ? "resgeral" : ""
          } item ${arrayres[i]["classificacao"].toLowerCase()}" tema="${
        arrayres[i]["tema"]
      }" classificacao="${arrayres[i]["classificacao"]}">
          <div class="top">
          <span class="tema">${arrayres[i]["tema"]}</span>
          <span>${arrayres[i]["nivel"]}</span>
          <span class="classif">${arrayres[i]["classificacao"]}</span>
          <span class="porcentagem">${
            arrayres[i]["porcentagem"]
          }<span class="barra"><span class="percent" style="width: ${
        arrayres[i]["porcentagem"]
      }"></span></span></span>    
    <i class="fas fa-angle-down"></i>
          </div>
          </div>
          `);
    }

    $("#resultado .item .top").on("click", function () {
      $(this).parent().toggleClass("open");
    });

    let arraytextos = textos["textos"];
    for (var j = 0; j < arraytextos.length; j++) {
      if (arraytextos[j]["textos_class"]) {
        $('#resultado .item[tema="' + arraytextos[j]["tema"] + '"]').append(`
            <div class="texto">${
              arraytextos[j]["textos_class"][0][
                $(
                  '#resultado .item[tema="' + arraytextos[j]["tema"] + '"]'
                ).attr("classificacao")
              ]
            }</div>
            `);
      }
    }

    $("#resultado .imprimir").on("click", function () {
      window.print();
      return false;
    });

    $("#resultado .imprimir").prop("disabled", false);
	  
	  
	  
	  if($('#graph-result').length > 0) {
		  //montando gr??fico		
		  const labels = arraytemas;
		  const porcentagens = arrayporcentagens;

		  const data = {
			  labels: labels,
			  datasets: [{
				  data: porcentagens,
				  backgroundColor: '#fe980178',
				  borderColor: '#e0712c'
			  }]
		  };

		  const config = {
			  type: 'radar',
			  data: data,
			  options: {
				  scales: {
					  r: {
						  ticks: {
							  beginAtZero: true,
							  max: 100,
							  min: 0,
							  stepSize: 10
						  }
					  }
				  },
				  plugins: {
					  legend: {
						  display: false
					  }
				  }
			  },
		  };

		  var myChart = new Chart(
			  document.getElementById('graph-result'),
			  config
		  );
	  }
	  
	  
	  
  }

  function finaliza_chat() {
    $.ajax({
      url: ajax_object.ajax_url,
      type: "POST",
      dataType: "json",
      data: {
        action: "tratamento",
        finalizar_chat: $("#json-gerado").attr("data-json"),
      },
      success: function (result) {
        set_cookie("chatbot_status", "finalizado");
        document.location.reload(true);
      },
    });
  }

  if (get_cookie("chat_iniciado")) {
    bot_mensagens(get_cookie("chat_iniciado"));
  }

  function fake_message(step) {
    $(
      '<div class="message loading new"><figure class="avatar"><img src="https://lift.actiosoftware.com/wp-content/uploads/2022/03/MicrosoftTeams-image-27.png" alt=""></figure><span></span></div>'
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    bot_mensagens(step);
    update_scrollbar();
  }

  function handle_questions(step) {
    $(".question").on("change", function () {
      $(this).siblings(".message-submit").removeClass("hide");
    });

    $(".message-submit").on("click", function () {
      user_insert_mensagem(step);
    });

    $(".message-finish").on("click", finaliza_chat);
  }

  $(window).on("keydown", function (e) {
    if (e.which == 13) {
      user_insert_mensagem(stepatual);
      return false;
    }
  });

  function reload_time() {
    let time = "time";
    $.ajax({
      url: ajax_object.ajax_url,
      type: "POST",
      dataType: "json",
      data: {
        action: "tratamento",
        time,
      },
      success: function (result) {
        $('<div class="timestamp">' + result + "</div>").appendTo(
          $(".message:last")
        );
        time = "";
      },
    });
  }

  function update_scrollbar() {
    $messages
      .mCustomScrollbar("update")
      .mCustomScrollbar("scrollTo", "bottom", {
        scrollInertia: 10,
        timeout: 0,
      });
  }

  /*
  |--------------------------------------------------------------------------
  | USER MENSAGENS
  |--------------------------------------------------------------------------
  */

  function user_insert_mensagem(step) {
    if ($(".message-input").length > 0) {
      msg = $(".message-input").val().replace(/"/g, "'");

      if ($(".message-input").attr("name") == "email") {
        set_cookie("chatbot_useremail", msg);
      }

      user_mensagens(step, msg);
    } else if ($(".questions .question").length > 0) {
      msg = $(".questions input:checked").siblings("label").html();

      user_mensagens(step, msg);
    } else if ($.trim(msg) == "") {
      return false;
    }

    $(".message-box").remove();
    $(".questions").remove();
    update_scrollbar();
    setTimeout(function () {
      fake_message(step);
    }, 1000 + Math.random() * 20 * 100);
  }

  function user_mensagens(step, msg) {
    $.ajax({
      url: ajax_object.ajax_url,
      type: "POST",
      dataType: "json",
      data: {
        action: "tratamento",
        step,
        msg,
        json_gerado: $("#json-gerado").attr("data-json"),
      },
      success: function (result) {
        console.log(
          "%c " + result["json_gerado"],
          "background-color: black; color: red"
        );
        $(
          '<div class="message message-personal"><div class="msg">' +
            result["msg"] +
            "</div></div>"
        )
          .appendTo($(".mCSB_container"))
          .addClass("new");
        reload_time();
        $("#json-gerado").attr("data-json", result["json_gerado"]);
      },
    });
  }

  /*
  |--------------------------------------------------------------------------
  | BOT MENSAGENS
  |--------------------------------------------------------------------------
  */

  function bot_mensagens(step) {
    set_cookie("chat_iniciado", step);

    $.ajax({
      url: ajax_object.ajax_url,
      type: "POST",
      dataType: "json",
      data: {
        action: "tratamento",
        step,
      },
      success: function (result) {
        let data = result["data"];
        let next_step = result["next_step"];
        let count_steps = result["count_steps"];

        stepatual = next_step;
        let previus_step = result["previus_step"];

        $("#step-count").text = next_step;
        $(".progress").css("width", (next_step / count_steps) * 100 + "%");
        setTimeout(function () {
          $(".message.loading").remove();

          $(
            '<div class="message new"><figure class="avatar"><img src="https://lift.actiosoftware.com/wp-content/uploads/2022/03/MicrosoftTeams-image-27.png" alt=""></figure><div class="pergunta">' +
              data +
              "</div></div>"
          )
            .appendTo($(".mCSB_container"))
            .addClass("new");
          handle_questions(next_step);
          reload_time();
          update_scrollbar();
          step = next_step;
        }, 1000 + Math.random() * 20 * 100);
      },
    });
  }

  /*
  |--------------------------------------------------------------------------
  | admin page
  |--------------------------------------------------------------------------
  */


});
