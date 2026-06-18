    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');
    const maxSize = 5 * 1024 * 1024;

    fileInput.addEventListener('change', function () {
      const file = this.files[0];
      if (!file) {
        fileName.classList.add('d-none');
        return;
      }

      if (file.size > maxSize) {
        Swal.fire({
          title: "Tamanho do Arquivo Excedido",
          text: "O arquivo excede o tamanho máximo de 5MB.",
          icon: "warning"
        });
       
        this.value = '';
        fileName.classList.add('d-none');
        return;
      }

      fileName.textContent = 'Arquivo selecionado: ' + file.name;
      fileName.classList.remove('d-none');
    });

    // document.getElementById('receiptForm').addEventListener('submit', function (e) {
    //   e.preventDefault();

    //   if (!this.checkValidity()) {
    //     this.classList.add('was-validated');
    //     return;
    //   }
    //   Swal.fire({
    //     title: "Comprovante Enviado!",
    //     text: "Protocolo: 12345678",
    //     icon: "success"
    //   });
    
    // });
document.getElementById('receiptForm').addEventListener('submit', async function (e) {

    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const prefixo = document.getElementById('prefixo').value.trim();
    const file = fileInput.files[0];

    if (!file) {
        Swal.fire({
            icon: 'warning',
            title: 'Arquivo obrigatório',
            text: 'Selecione o comprovante.'
        });
        return;
    }

    if (!this.checkValidity()) {
        this.classList.add('was-validated');
        return;
    }

    Swal.fire({
        title: 'Enviando...',
        text: 'Aguarde alguns segundos.',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    try {

        const base64 = await converterArquivoParaBase64(file);

        const dados = {
            nome: nome,
            prefixo: prefixo,
            mimeType: file.type,
            extensao: file.name.split('.').pop().toLowerCase(),
            arquivo: base64
        };

        const response = await fetch(URL_SCRIPT, {
            method: 'POST',
            body: JSON.stringify(dados)
        });

        const resultado = await response.json();

        Swal.fire({
            icon: 'success',
            title: 'Comprovante enviado!',
            text: `Protocolo: ${resultado.protocolo}`
        });

        this.reset();
        fileName.classList.add('d-none');

    } catch (erro) {

        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Não foi possível enviar o comprovante.'
        });

        console.error(erro);
    }

});


    const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbyjAt5_mNCEPT06RyC5CKwavmfVfLmJvZzRZk24qccmeHGpvSwTj7Z7jE3S-QUq-1132w/exec";