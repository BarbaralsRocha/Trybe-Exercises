/* As pessoas devem ter o poder de alterar:
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ). */
window.onload=function(){
    function background(){
        let backgroundWindow = document.getElementById('backgroundWindow')
        let color = backgroundWindow.value
        document.body.style.backgroundColor = color
        localStorage.setItem('backgroundFunction',color)
    
    }
    //background()
    backgroundWindow.addEventListener('change', background)
    
    function loadBackgroundColor(){
        let colorLoad = localStorage.getItem('backgroundFunction')
        document.body.style.backgroundColor = colorLoad
    }
    loadBackgroundColor()
    
    
    function colorTexto(){
        let colorText = document.getElementById('colorText')
        let color = colorText.value
        body.style.color = color
    
    }
    colorText.addEventListener('keyup', colorTexto)
    
    function fonteSize(){
        let fontSize = document.getElementById('fontSize')
        let heigth = fontSize.value
        body.style.fontSize = heigth +'px'
    }
    fontSize.addEventListener('keyup', fonteSize)
    
    function fonteSize(){
        let fontSize = document.getElementById('fontSize')
        let heigth = fontSize.value
        body.style.fontSize = heigth +'px'
    }
    fontSize.addEventListener('keyup', fonteSize)
    
    function espacamento(){
        let heightLine = document.getElementById('heightLine')
        let height = heightLine.value
        body.style.lineHeight = height +'px'
    }
    heightLine.addEventListener('keyup', espacamento)
    
    function fonteFamily(){
        let fontFamily = document.getElementById('fontFamily')
        let font = fontFamily.value
        body.style.fontFamily = font
    }
    fontFamily.addEventListener('keyup', fonteFamily)

}



