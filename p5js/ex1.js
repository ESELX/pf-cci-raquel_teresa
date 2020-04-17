var a, b;

function setup(){

  // createCanvas(windowWidth,windowHeight);
  createCanvas(windowWidth ,windowHeight);
  background(220, 250, 255);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      fill(250)
   rect(0, 90, windowWidth,windowHeight);

        fill(182, 220, 153)
   rect(0, 100, windowWidth,windowHeight);
    ////
    noStroke()
    
       fill(150)
   rect(0, 340, 200, 200,20,20);
       fill(150)
   rect(210, 400, 250, 130,20,20);
       fill(180)
   rect(10, 440, 240, 120,20,20);
    fill(150)
   rect(0, 530, 100, 70,20,20);


    fill(150)
   rect(500, 430, 100, 110,20,20);
       fill(180)
   rect(320, 440, 250, 110,20,20);
     fill(150)
   rect(310, 540, 80, 50,20,20);

     fill(150)
   rect(540, 560, 50, 30,20,20);

    fill(150)
   rect(210, 540, 50, 30,20,20);
     fill(180)
   rect(170, 570, 50, 20,20,20);

       fill(180)
   rect(320, 600, 80, 20,20,20);
      fill(180)
   rect(450, 580, 50, 20,20,20);



    ///////////////////////////////////////////////////
     fill(213, 187, 172)
   rect(0, 90, windowWidth, 40);

        fill(178, 153, 139)
   rect(0, 120, windowWidth, 40);

        fill(213, 187, 172)
   rect(0, 140, windowWidth, 40);
       fill(178, 153, 139)
   rect(0, 160, windowWidth, 40);
    /////

       fill(243, 216, 201)
   rect(windowWidth-80, 0, 90, windowHeight);
         fill(175, 138, 118)
   rect(windowWidth-60, 0, 90, windowHeight);

       fill(243, 216, 201)
   rect(windowWidth-40, 0, 90, windowHeight);
      fill(175, 138, 118)
   rect(windowWidth-20, 0, 90, windowHeight);
    fill(213, 187, 172)
   rect(windowWidth, 0, 90, windowHeight);
    //

  fill(243, 216, 201)
   rect(windowWidth-110, 560, 190, 150);
   fill(175, 138, 118)
   rect(windowWidth-100, 570, 120, 150);
    //

     rect(windowWidth-95, 500, 120, 30, 10, 10, 10, 10);
    ///


    stroke(1)
  fill(243, 216, 201)
  textSize(160);
  text('R', windowWidth-90, 700);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    strokeWeight(1);
 stroke(0);
    //pergaminho
     fill(250)
   rect(620, 150, 460, 135, 10, 10, 10, 10);

     fill(191, 121, 83)
    rect(627, 125, 10, 180, 20);
      rect(622, 135, 20, 160, 20);

       fill(250)
    rect(617, 145, 30, 140, 20);

       fill(191, 121, 83)
    rect(1065, 125, 10, 180, 20);
      rect(1060, 135, 20, 160, 20);
         fill(250)
    rect(1055, 145, 30, 140, 20);


////////////////////////botao///////////////////////////////////////////////////////////////////////////////////////
fill(250)
rect(20, 450, 210, 30, 10);

    fill(0)
    textSize(22);
    text("E se...", 10, 370);

    a = createInput();
    a.position(130, 360);
    a.size(50);
    text("valor de a=", 20, 400);

    b = createInput();
    b.position(130, 400);
    b.size(50);
    text("valor de b=", 20, 430);

    button = createButton('Calcular c');
    button.size(210,30)
    button.position(20, 450);
    button.mousePressed(findc);

    ////////////////////////TA A DAR PROBLEMA///////////////////////////////////////////////////////////////////////////////////////

    //Balão de fala
    fill(250)
    rect(90, 20, 345, 55, 10, 10, 10, 1);

     //texto
    fill(87, 37, 144)
    textSize(20);
    textAlign(LEFT);
    text('Olá,o meu nome é Euclides! ', 100, 50);
    textAlign(LEFT);
    text('E eu provei o Teorema de Pitagoras!', 100, 70);


    ///////////EUCLIDES
     strokeWeight(1);
  stroke(0);
    //camisola
    fill(250, 30, 0)
    ellipse(50,90,40,50)
      //manta
    fill(230, 227, 14)
    ellipse(50,90,20,50)

    //cara
    fill(244, 226, 206)
   ellipse(50,60,40)
    //barba
    fill(250)
    ellipse(50,80,20,30)
    //nariz
    fill(244, 226, 206)
    ellipse(50,64,10)
    //olho1
    fill(250)
    ellipse(40,60,10)
     fill(0)
    ellipse(40,60,3)
    //olho2
    fill(250)
    ellipse(60,60,10)
     fill(0)
    ellipse(60,60,3)
    //chapeu
    fill(0,0,266)
    ellipse(50,44,40,20)

    ////////////////////////////////////////////////////////////INTERAÇÃO

    ///////////////////////////////////////Trianguloabc
  noStroke();
    fill(234, 182, 5)
    rect(670, 220, 15, 15);

    //TEXT a
  stroke(63, 230, 14)
  fill(63,230,14)
  textSize(22);
  text('a', 670, 255);

     //A//
      strokeWeight(4);
    line(670, 235, 785, 235);

     //TEXT b
        strokeWeight(1);
      stroke(230, 27, 14)
  fill(230, 27, 14)
  textSize(22);
  text('b', 650, 210);

     //B//
    strokeWeight(4);
    line(670, 170, 670, 235);

    //TEXT c
    strokeWeight(1);
    stroke(14, 138, 230)
  fill(14, 138, 230)
  textSize(22);
  text('c', 740, 180);

    //C//
    strokeWeight(4);
    line(670, 170, 785, 235);

      ///////////////////////////////////////textoformula
     strokeWeight(0);
    textSize(22);
    fill(0)
  text('Então', 840, 230);
    //
      fill(0)
    textSize(22);
  text('+     =', 970, 230);
    //
    textSize(22);
    fill(63,230,14)
  text('a', 950, 230);
    textSize(12);
  text('2', 963, 220);

    textSize(22);
    fill(230, 27, 14)
  text('b', 990, 230);
     textSize(12);
  text('2', 1003, 220);

    textSize(22);
     fill(14, 138, 230)
  text('c', 1030, 230);
     textSize(12);
  text('2', 1043, 220);
  }

  function findc() {
    c = a.value() *a.value() + b.value()* b.value();
  fill(0)
    textSize(22);
    text("O valor de c é igual a "+c , 330, 500);

         strokeWeight(1);
  stroke(0);
      fill(250)
   rect(250, 525, 320, 55, 10, 10, 10, 1);

    ///////////EUCLIDES

   fill(87, 37, 144)
    textSize(20);
  textAlign(LEFT);
  text('Yey! Encontramos o valor de «c»!', 260, 555);

    ///////////EUCLIDES

     strokeWeight(1);
  stroke(0);
     //braço1
    fill(230, 227, 14)
    ellipse(240,615,90,10)
      //mao
    fill(244, 226, 206)
    ellipse(200,615,10)
    //mao
    fill(244, 226, 206)
    ellipse(280,615,10)
    //camisola
    fill(250, 30, 0)
    ellipse(240,625,40,50)

      //manta
    fill(230, 227, 14)
    ellipse(240,625,20,50)

    //cara
    fill(244, 226, 206)
   ellipse(240,590,40)
    //barba
    fill(250)
    ellipse(240,610,20,30)
    //nariz
    fill(244, 226, 206)
    ellipse(240,596,10)
    //olho1
    fill(250)
    ellipse(230,590,10)
     fill(0)
    ellipse(230,590,3)
    //olho2
    fill(250)
    ellipse(250,590,10)
     fill(0)
    ellipse(250,590,3)
    //chapeu
    fill(0,0,266)
    ellipse(240,575,40,20)


    }
