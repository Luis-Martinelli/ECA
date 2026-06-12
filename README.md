# ⛽ Sistema de Envio de Comprovantes de Abastecimento

Sistema web para envio de comprovantes de abastecimento de veículos, permitindo que os usuários informem seus dados e anexem uma foto ou PDF do comprovante.

Os arquivos enviados são armazenados automaticamente no Google Drive e os registros são salvos em uma planilha Google Sheets através do Google Apps Script.

---

## 📋 Funcionalidades

✅ Cadastro do nome do motorista

✅ Cadastro do prefixo do veículo

✅ Upload de comprovantes em JPG ou PDF

✅ Validação de tamanho do arquivo (máximo 5 MB)

✅ Validação de formato de arquivo

✅ Interface responsiva utilizando Bootstrap

✅ Feedback visual com SweetAlert2

✅ Armazenamento automático no Google Drive

✅ Registro automático em Google Sheets

✅ Geração de protocolo de envio

---

## 🖥️ Protótipo da Tela

O sistema possui uma interface simples e intuitiva para facilitar o envio dos comprovantes.

### Campos disponíveis

* 👤 Nome do Motorista
* 🚗 Prefixo do Veículo
* 📎 Comprovante de Abastecimento (JPG ou PDF)

---

## 🏗️ Arquitetura da Solução

```text
Usuário
   │
   ▼
Formulário HTML
   │
   ▼
Google Apps Script
   │
   ├── 📁 Google Drive
   │      └── Armazenamento dos comprovantes
   │
   └── 📊 Google Sheets
          └── Registro dos envios
```

---

## 📂 Estrutura do Projeto

```text
📦 projeto
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 script.js
 ┗ 📜 README.md
```

---

## 📎 Formatos Aceitos

| Tipo      | Extensão |
| --------- | -------- |
| Imagem    | .jpg     |
| Imagem    | .jpeg    |
| Documento | .pdf     |

---

## 📏 Limites

* 📦 Tamanho máximo por arquivo: **5 MB**
* 📄 Apenas arquivos JPG, JPEG e PDF

---

## 🛡️ Validações Implementadas

### Frontend

* Campo Nome obrigatório
* Campo Prefixo obrigatório
* Campo Arquivo obrigatório
* Validação de extensão
* Validação de tipo MIME
* Validação de tamanho máximo

### Backend (Apps Script)

* Validação de tipo de arquivo
* Armazenamento seguro no Google Drive
* Registro automático em planilha
* Retorno de protocolo para o usuário

---

## 📊 Estrutura da Planilha

| Data/Hora | Protocolo | Nome | Prefixo | Arquivo | Link |
| --------- | --------- | ---- | ------- | ------- | ---- |

---

## 📁 Padrão de Nome dos Arquivos

Os comprovantes podem ser renomeados automaticamente seguindo o padrão:

```text
AAAA-MM-DD_PREFIXO_NOME.extensão
```

Exemplo:

```text
2026-06-12_VTR123_JoaoSilva.jpg
```

---

## 🚀 Tecnologias Utilizadas

* 🌐 HTML5
* 🎨 CSS3
* ⚡ JavaScript
* 🅱️ Bootstrap 5
* 🔔 SweetAlert2
* ☁️ Google Apps Script
* 📁 Google Drive API
* 📊 Google Sheets

---

## 🔮 Melhorias Futuras

* 🔐 Autenticação de usuários
* 📱 Layout mobile avançado
* 📷 Compressão automática de imagens
* 🤖 OCR para leitura dos comprovantes
* 📈 Dashboard gerencial
* 📧 Notificações por e-mail
* 🔎 Consulta por protocolo
* ✅ Fluxo de aprovação dos comprovantes

---

## 👨‍💻 Autor

Projeto desenvolvido para simplificar o envio e controle de comprovantes de abastecimento de veículos de forma rápida, segura e sem necessidade de infraestrutura própria.

