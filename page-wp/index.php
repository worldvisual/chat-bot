<?php
/*
  |--------------------------------------------------------------------------
  | efetua a consulta no banco de dados
  |--------------------------------------------------------------------------
  */
  $results = $wpdb->get_results("SELECT * FROM {$wpdb->prefix}chat_bot", OBJECT);
  ?>

  <section class="container-chatbot-admin">
    <header class="relatorio">
      <h3>Relátorio de respostas "Chat Bot"</h3>
    </header>
    <div class="subheader">
		<p>Shortcode para uso: <code>[chat]</code> *Adicione esse shortcode em sua página. <button class="btn-consultar" id="limpar_cookie">Limpar Cookie</button></p>
    </div>

    <div class="resultados">
      <table id="resultado_chat_bot" class="display" style="width:100%">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Empresa</th>
            <th>Telefone</th>
            <th>Resultado</th>
            <th>Visualizar</th>
          </tr>
        </thead>
        <tbody>

          <?php

          if (count($results) > 0) {
            $resultados = json_decode(json_encode($results), true);
            foreach ($resultados as $value) {
              echo '
              <tr>
              <td>' . $value["nome_usuario"] . '</td>
              <td>' . $value["email_usuario"] . '</td>
              <td>' . $value["empresa_usuario"] . '</td>
              <td>' . $value["telefone_usuario"] . '</td>
              <td><div class="json-resposta">' . $value["json_respostas"] . '</div></td>
              <td><form target="_blank" method="POST" action="' . get_site_url() . '/chat">
              <input hidden type="text" name="chatbot_useremail" value="' . $value["email_usuario"] . '">  
              <input hidden type="text" name="chatbot_status" value="finalizado">
              <button class="btn-consultar">Visualizar</button>
              </form></td>
              </tr>
              ';
            }
          }

          ?>
        </tbody>
        <tfoot>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Empresa</th>
            <th>Telefone</th>
            <th>Resultado</th>
            <th>Consultar</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>

  <script type="text/javascript">
      $(document).ready(function() {
      $('#resultado_chat_bot').DataTable({
        dom: 'Bfrtip',
        buttons: [
        'copyHtml5',
        'excelHtml5'
        ]
      });
    });  

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
	  const limpar_cookie = document.querySelector("#limpar_cookie");
	  limpar_cookie.addEventListener("click", ()=>{
		  setCookie( "chatbot_useremail", "", 0 );
		  setCookie( "chatbot_status", "finalizado", 0 );
		  setCookie( "chat_iniciado", "", 0 );		  
		  console.log('Cookies removidos');
		  document.location.reload(true);
	  });
	  
	  
	  
	  $('.btn-consultar').on('click', function(){
		  setCookie( "chatbot_visualizando", "1", 1);
	  });
	  
  </script>