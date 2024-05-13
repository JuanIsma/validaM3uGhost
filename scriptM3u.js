

function capturarValor() {
    // Obtener el elemento input por su ID
    var inputElement = document.getElementById('display');

    // Obtener el valor del input
    var valor = inputElement.value;

    // Hacer algo con el valor, por ejemplo, mostrarlo en la consola
    calculate(valor)
}



 


function calculate(valor) {
    try {
      const url = valor.replace('get.php', 'player_api.php');
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const username = data.user_info.username;
          const password = data.user_info.password;
          const status = data.user_info.status;
          let activa, color;
          
          if (status === 'Active') {
            activa = 'Activa';
            color = '🟢';
          } else {
            activa = 'Expirada';
            color = '🔴';
          }
          
          const expireDates = data.user_info.exp_date;
          let expireDate, expireYear, expireMonth, expireDay;
          let expirate;
          
          if (expireDates) {
            expireDate = new Date(expireDates * 1000);
            expirate = true;
            expireYear = expireDate.getFullYear();
            expireMonth = expireDate.getMonth() + 1;
            expireDay = expireDate.getDate();
          } else {
            expirate = false;
          }
          
          const createDate = new Date(data.user_info.created_at * 1000);
          const createYear = createDate.getFullYear();
          const createMonth = createDate.getMonth() + 1;
          const createDay = createDate.getDate();
          const activeConnections = data.user_info.active_cons;
          const maxConnections = data.user_info.max_connections;
          const urlServer = data.server_info.url;
          const portServer = data.server_info.port;
          const timezoneServer = data.server_info.timezone;
          
          let estado;
          
          if (expirate) {
            estado = `\n🔰Estado: ${activa} ${color}\n🌐 Url: http://${urlServer}:${portServer}/get.php?username=${username}&password=${password}&type=m3u\n📅 Vence: ${expireDay}/${expireMonth}/${expireYear}\n📆 Creada: ${createDay}/${createMonth}/${createYear}\n👁 Conex activas: ${activeConnections}\n👥 Conex máx: ${maxConnections}\n🔢 Zona: ${timezoneServer}`;
          } else {
            estado = `\n🔰Estado: ${activa} ${color}\n🌐 Url: http://${urlServer}:${portServer}/get.php?username=${username}&password=${password}&type=m3u\n📅 Fecha de Caducidad: No tiene\n📅 Creación: ${createDay}/${createMonth}/${createYear}\n👁 Conex activas: ${activeConnections}\n👥 Conex máx: ${maxConnections}\n🔢 Zona: ${timezoneServer}`;
          }
          
          //console.log(estado);
          // Hacer algo con el estado, por ejemplo, mostrarlo en una página web.

           // Obtener el elemento textarea por su ID
           var textareaElement = document.getElementById('textoCapturado');

          // Escribir el valor capturado en el textarea
           textareaElement.value = estado;

        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
   



  


  
   function validar(){
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "http://sonidosmp3gratis.com/sounds/Computer_Mouse_Click_01_Sound_Effect_Mp3_339.mp3 ")
      etiquetaAudio.play()
    }  
  
  
  