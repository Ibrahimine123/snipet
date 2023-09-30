document.addEventListener('DOMContentLoaded', function () {
    const copyButtons = document.querySelectorAll('.copy-button');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeContainer = button.parentElement;
            const codeElement = codeContainer.querySelector('code');
            const textArea = document.createElement('textarea');
            textArea.value = codeElement.innerText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            button.innerText = 'Copied';

            setTimeout(() => {
                button.innerText = 'Copy';
            }, 1500);
        });
    });
});
