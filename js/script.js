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

    document.getElementById('receiptForm').addEventListener('submit', function (e) {
      e.preventDefault();

      if (!this.checkValidity()) {
        this.classList.add('was-validated');
        return;
      }
      Swal.fire({
        title: "Comprovante Enviado!",
        text: "Protocolo: #12345678",
        icon: "success"
      });
    
    });