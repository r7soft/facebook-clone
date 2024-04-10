
    const nevButtons = document.querySelectorAll('#main #nav #nav_center .nev_button');

    nevButtons.forEach(nevButton => {
        nevButton.addEventListener('mouseenter', function() {
            const highlighter = this.querySelector('.highlighter');
            const nevButtonIcon = this.querySelector('i');
            highlighter.style.display = 'initial';
            nevButtonIcon.style.color = '#0866ff';            
         
        });

        nevButton.addEventListener('mouseleave', function() {
            const highlighter = this.querySelector('.highlighter');
            const nevButtonIcon = this.querySelector('i');
            highlighter.style.display = 'none';
            nevButtonIcon.style.color = 'black'; 

        });
    });

  
        const searchBarInput = document.querySelector("#main #nav #nav_left #logo_searchBar #searchBar_container input");
        const searchResponse = document.querySelector('#main #nav #nav_left #search_resopnse');
        const navLeft = document.querySelector('#main #nav #nav_left');

    
        console.log(searchBarInput);
        console.log(searchResponse);
    
        searchBarInput.addEventListener('focus', function() {
            console.log("Input field focused");
            searchResponse.style.display = 'block';
            navLeft.style.boxShadow = '5px 5px 10px  #1414145e'
         
        });
    
        searchBarInput.addEventListener('blur', function() {
            console.log("Input field blurred");
            searchResponse.style.display = 'none';
            navLeft.style.boxShadow = 'none'

           
        });
    
