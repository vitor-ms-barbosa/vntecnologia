function openMenu() {
    document.getElementById('link-menu-mob').style.display = "block";
    document.getElementById('bg').style.display = "block";
    document.getElementById('button-open').style.display = "none";
    document.getElementById('button-close').style.display = "block";
    // Função de abrir o menu para telas de pequena resolução
}

function closeMenu() {
    document.getElementById('link-menu-mob').style.display = "none";
    document.getElementById('bg').style.display = "none";
    document.getElementById('button-open').style.display = "block";
    document.getElementById('button-close').style.display = "none";
    // Função de fechar o menu para telas de pequena resolução
}


function loadPage() {
    document.getElementById('sm-link').innerHTML = '<a href="#"><span class="icon-fw"><i class="fab fa-instagram"></i></span></a>'+
    '<a href="#"><span class="icon-fw"><i class="fab fa-facebook-square"></i></span></a>'+
    '<a href="#"><span class="icon-fw"><i class="far fa-envelope"></i></span></a>'+
    '<a href="#"><span class="icon-fw"><i class="fab fa-whatsapp"></i></span></a>'+
    '<a href="#"><span class="icon-fw"><i class="fab fa-linkedin"></i></span></a>'+
    '<a href="#"><span class="icon-fw"><i class="fab fa-youtube"></i></span></a>';
    // Links das redes sociais(concatenado)

    document.getElementById('address-footer').innerHTML = 'Rua XXXXXX, Nº XX Bairro XXXXXXX, Brasília - DF';
    // Endereço disposto em todas as páginas
    
    document.getElementById('email-footer').innerHTML = '<span class="material-icons">email</span><a href="mailto:atendimento.vntecnologia@gmail.com">atendimento.vntecnologia@gmail.com</a>';
    // E-mail disposto em todas as páginas

    document.getElementById('tel-footer').innerHTML = '<span class="material-icons">phone</span><a href="tel:+5577998246192">+55 (XX) X.XXXX-XXXX</a>';
    // Telefone disposto em todas as páginas
}