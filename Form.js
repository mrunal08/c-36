class Form{
        constructor(){}

        display(){
            var title = createElement('h2');
            title.html("CAR RACING GAME");
            title.position(500,150);

            var input=createInput("Name");
            var button=createButton('PLAY');
            var greeting=createElement('h3')

            input.position(500,200);
            button.position(500,250);

            button.mousePressed(function(){ 
                input.hide();
                button.hide();

                var name =input.value();

                playerCount+=1;
                player.update(name);
                player.updateCount(playerCount);

                greeting.html("Hello "+name);
                greeting.position(500,250)})
               
            
        }
}