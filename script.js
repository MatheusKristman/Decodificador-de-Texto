const textarea = document.getElementById('text-encrypt');
const btnEncrypt = document.getElementById('encrypt-btn');
const btnDecrypt = document.getElementById('decrypt-btn');
const boxCopy = document.getElementById('box-copy');
const copyText = document.getElementById('copy-scroll');
const btnCopy = document.getElementById('copy-btn');
const boxContent = document.getElementById('box-content');

let hasText = 0;

btnEncrypt.addEventListener('click', () => {
    let text = textarea.value.toLowerCase().normalize('NFD');
    if(text !== '' && textarea.value === text){
            let encryptedText = ''
            text.split('').forEach(e => {
                switch(e){
                    case 'a':
                        encryptedText += e.replace('a', 'ai');
                        break;
                    case 'e':
                        encryptedText += e.replace('e', 'enter');
                        break;
                    case 'i':
                        encryptedText += e.replace('i', 'imes');
                        break;
                    case 'o':
                        encryptedText += e.replace('o', 'ober');
                        break;
                    case 'u':
                        encryptedText += e.replace('u', 'ufat');
                        break;
                    default:
                        encryptedText += e;
                }
            });
        
            hasText = 1;
            textVerif(encryptedText);
    }else{
        alert('Inserir uma palavra valida para ser criptografada (somente letras minúsculas e sem acento).');
    }   
});

btnDecrypt.addEventListener('click', () => {
    let text = textarea.value.toLowerCase().normalize('NFD');
    const letters = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];
    if(text !== '' && textarea.value === text){        
        for(let i = 0; i < letters.length; i++) {
            if(text.includes(letters[i][1])){
                text = text.replaceAll(letters[i][1], letters[i][0]);
            }
        }
    
        hasText = 1;
        textVerif(text);
    }else{
        alert('Inserir uma palavra valida para ser descriptografada (somente letras minúsculas e sem acento).');
    } 
});

btnCopy.addEventListener('click', () => {
    const textareaCopy = document.createElement('textarea');
    const textCopy = copyText.innerText;

    textareaCopy.value = textCopy;
    document.body.appendChild(textareaCopy);
    textareaCopy.select();
    navigator.clipboard.writeText(textareaCopy.value);
    textareaCopy.remove();
    alert('Copiado para a area de transferencia!');
})

function textVerif(eText) {
    if(hasText > 0) {        
        boxContent.style.display = 'none';
        boxCopy.style.display = 'flex';
        const newText = document.createElement('p');
        newText.classList.add('copy');
        newText.textContent = eText;
        copyText.appendChild(newText);
    }else{
        boxContent.style.display = 'block';
        boxCopy.style.display = 'none';
    }
}