const copyButton = document.getElementById("copyButton");
const tokenInput = document.getElementById("tokenInput");

document.addEventListener("DOMContentLoaded", function () {
        copyButton.addEventListener("click", function () {
        tokenInput.select();
        document.execCommand("copy");
    });
});

const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');
const overlay = document.getElementById('overlay');

// �������� ���� �� ����� �� ������
menuButton.addEventListener('click', function () {
    menu.classList.add('active');
    overlay.classList.add('active');
});

// �������� ���� ��� ����� �� ����� ����
const menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// �������� ���� ��� ����� ��� ��� (�� ������� ���������)
document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove('active'); 
        overlay.classList.remove('active');
    }
});

//�������� ���� ��� ������� �� ������ �������� ����
menuClose.addEventListener('click', function () {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

const termsModal = document.getElementById('termsModal');
const termsLinks = document.querySelectorAll('a[href="#terms"]'); // �������� ��� ������ Terms
const closeButton = document.getElementById('closeButton');

// ��������� ���������� ������� ��� ������ ������ Terms
termsLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // �������� ������� �� ������
        termsModal.classList.add('active');
    });
});

// ������� ������� �� ����� �� �������
closeButton.addEventListener('click', function () {
    termsModal.classList.remove('active');
});

// ������� ������� ��� ����� ��� ��������
termsModal.addEventListener('click', function (event) {
    if (event.target === termsModal) {
        termsModal.classList.remove('active');
    }
});