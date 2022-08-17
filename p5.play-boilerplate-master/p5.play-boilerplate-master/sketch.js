
var gamestate = 0

var dCount = 0

function preload() {

  treeImg = loadImage("assets/tree.png")
  diamondImg = loadImage("assets/diamond.png")

  bgImg = loadImage("assets/grassbg.jpg")
  characterImg = loadImage("assets/character.png")

  bg2Img = loadImage("assets/caveBg.jpg")
  rockImg = loadImage("assets/rock.png")

  bg3Img = loadImage("assets/desert.jpg")
  cactusImg = loadImage("assets/cactus.png")


  bg4Img = loadImage("assets/jungleBg.jpg")
  logImg = loadImage("assets/log.png")

  bg = loadImage("assets/nightskyBg.jpg")

}


function setup() {
  createCanvas(600, 600);

  bg = createSprite(width / 2, height / 2)
  bg.addImage(bgImg)

  tree = createSprite(50, 500)
  tree.addImage(treeImg)
  tree.scale = 0.6
  tree.setCollider("circle", 0, 0, 100)
  // tree.debug = true


  tree2 = createSprite(50, 200)
  tree2.addImage(treeImg)
  tree2.scale = 0.6
  tree2.setCollider("circle", 0, 0, 100)
  // tree2.debug = true

  tree3 = createSprite(410, 220)
  tree3.addImage(treeImg)
  tree3.scale = 0.6
  tree3.setCollider("circle", 0, 0, 100)
  //tree3.debug = true

  tree4 = createSprite(300, 420)
  tree4.addImage(treeImg)
  tree4.scale = 0.6
  tree4.setCollider("circle", 0, 0, 100)
  //tree4.debug = true

  tree5 = createSprite(200, 310)
  tree5.addImage(treeImg)
  tree5.scale = 0.6
  tree5.setCollider("circle", 0, 0, 100)
  //tree5.debug = true

  tree6 = createSprite(500, 450)
  tree6.addImage(treeImg)
  tree6.scale = 0.6
  tree6.setCollider("circle", 0, 0, 100)
  //tree6.debug = true

  tree7 = createSprite(200, 70)
  tree7.addImage(treeImg)
  tree7.scale = 0.6
  tree7.setCollider("circle", 0, 0, 100)
  //tree7.debug = true

  diamond1 = createSprite(550, 150)
  diamond1.addImage(diamondImg)
  diamond1.scale = 0.2
  // diamond.setCollider("circle" , 0 , 0 , 210)
  diamond1.debug = true

  player = createSprite(40, 350)
  player.addImage(characterImg)
  player.scale = 0.06
  // player.setCollider("rectangle", 0, 0, 200, 500)
  player.setCollider("rectangle", 0, 0, 50, 50)

  player.debug = false


  // ---------------------------- second stage -----------------------------------

  bg2 = createSprite(width / 2, height / 2)
  bg2.addImage(bg2Img)
  bg2.visible = false

  rock = createSprite(220, 370)
  rock.addImage(rockImg)
  rock.scale = 0.2
  rock.visible = false

  rock2 = createSprite(220, 370)
  rock2.addImage(rockImg)
  rock2.scale = 0.2
  rock2.visible = false

  rock3 = createSprite(260, 450)
  rock3.addImage(rockImg)
  rock3.scale = 0.2
  rock3.visible = false

  rock4 = createSprite(420, 490)
  rock4.addImage(rockImg)
  rock4.scale = 0.2
  rock4.visible = false

  rock5 = createSprite(300, 580)
  rock5.addImage(rockImg)
  rock5.scale = 0.2
  rock5.visible = false

  rock6 = createSprite(500, 350)
  rock6.addImage(rockImg)
  rock6.scale = 0.2
  rock6.visible = false


  diamond2 = createSprite(300, 250)
  diamond2.addImage(diamondImg)
  diamond2.scale = 0.2
  // diamond.setCollider("circle" , 0 , 0 , 210)
  diamond2.debug = true
  diamond2.visible = false

  // ---------------------------- third stage -----------------------------------

  bg3 = createSprite(width / 2, height / 2)
  bg3.addImage(bg3Img)
  bg3.visible = false

  cactus = createSprite(220, 370)
  cactus.addImage(cactusImg)
  cactus.scale = 0.2
  cactus.visible = false

  cactus2 = createSprite(220, 370)
  cactus2.addImage(cactusImg)
  cactus2.scale = 0.2
  cactus2.visible = false

  cactus3 = createSprite(260, 450)
  cactus3.addImage(cactusImg)
  cactus3.scale = 0.2
  cactus3.visible = false

  cactus4 = createSprite(420, 490)
  cactus4.addImage(cactusImg)
  cactus4.scale = 0.2
  cactus4.visible = false

  cactus5 = createSprite(300, 580)
  cactus5.addImage(cactusImg)
  cactus5.scale = 0.2
  cactus5.visible = false

  cactus6 = createSprite(500, 350)
  cactus6.addImage(cactusImg)
  cactus6.scale = 0.2
  cactus6.visible = false


  diamond3 = createSprite(400, 50)
  diamond3.addImage(diamondImg)
  diamond3.scale = 0.2
  // diamond.setCollider("circle" , 0 , 0 , 210)
  diamond3.debug = true
  diamond3.visible = false


// ---------------------------- forth stage -----------------------------------

  bg4 = createSprite(width / 2, height / 2)
  bg4.addImage(bg4Img)
  bg4.visible = false

  log = createSprite(220, 370)
  log.addImage(logImg)
  log.scale = 0.2
  log.visible = false

  log2 = createSprite(220, 370)
  log2.addImage(logImg)
  log2.scale = 0.2
  log2.visible = false

  log3 = createSprite(260, 450)
  log3.addImage(logImg)
  log3.scale = 0.2
  log3.visible = false

  log4 = createSprite(420, 490)
  log4.addImage(logImg)
  log4.scale = 0.2
  log4.visible = false

  log5 = createSprite(300, 580)
  log5.addImage(logImg)
  log5.scale = 0.2
  log5.visible = false

  log6 = createSprite(500, 350)
  log6.addImage(logImg)
  log6.scale = 0.2
  log6.visible = false


  diamond4 = createSprite(300, 500)
  diamond4.addImage(diamondImg)
  diamond4.scale = 0.2
  // diamond.setCollider("circle" , 0 , 0 , 210)
  diamond4.debug = true
  diamond4.visible = false



}

function draw() {
  background(0);

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  if (keyDown("left")) {
    player.x = player.x - 2
  }

  if (keyDown("right")) {
    player.x = player.x + 2
  }

  if (keyDown("up")) {
    player.y = player.y - 2
  }

  if (keyDown("down")) {
    player.y = player.y + 2
  }

  //--------------------------------------------------- code to restart the game --------------------------------------------------------------------------------------------------------------------------------------------
                                                    

  if (player.isTouching(tree) || player.isTouching(tree2) || player.isTouching(tree3) || player.isTouching(tree4) || player.isTouching(tree5) || player.isTouching(tree6) || player.isTouching(tree7)) {
    gamestate = 1
  }

  if (player.isTouching(rock) || player.isTouching(rock2) || player.isTouching(rock3) || player.isTouching(rock4) || player.isTouching(rock5) || player.isTouching(rock6)) {
    gamestate = 1
  }

  if (player.isTouching(cactus) || player.isTouching(cactus2) || player.isTouching(cactus3) || player.isTouching(cactus4) || player.isTouching(cactus5) || player.isTouching(cactus6)) {
    gamestate = 1
  }

  if (player.isTouching(log) || player.isTouching(log2) || player.isTouching(log3) || player.isTouching(log4) || player.isTouching(log5) || player.isTouching(log6)) {
    gamestate = 1
  }

  if (gamestate == 1) {
    // image(bg , 0 , 0 , 600,600)
    gameOver()
  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------- code to move to the 2nd stage
  if (player.isTouching(diamond1)) {
    gamestate = 1
    dCount = 1
  }

  // ------------------------------------------------- code to move to the 3rd stage
  else if (player.isTouching(diamond2)) {
    gamestate = 2
    dCount = 2
  }

  // ------------------------------------------------- code to move to the 4th stage
  else if (player.isTouching(diamond3)) {
    gamestate = 3
    dCount = 3
  }

  else if (player.isTouching(diamond4)) {
    gamestate = 4
    dCount = 4
  }

  // if (player.isTouching(diamond5)) {
  //   gamestate = 6
  //   dCount = 5
  // }


  //---------------------------------- completing Stage 1 -----------------------------------------------------------------------------------------------------------------------------------------------
  if (gamestate == 1 && dCount == 1) {
    bg.destroy()
    tree.destroy()
    tree2.destroy()
    tree3.destroy()
    tree4.destroy()
    tree5.destroy()
    tree6.destroy()
    tree7.destroy()
    diamond1.destroy()


    bg2.visible = true
    rock.visible = true
    rock2.visible = true
    rock3.visible = true
    rock4.visible = true
    rock5.visible = true
    rock6.visible = true
    diamond2.visible = true


    player = createSprite(40, 350)
    player.addImage(characterImg)
    player.scale = 0.17
    player.setCollider("rectangle", 0, 0, 200, 500)
    player.debug = false
  }


   //----------------------------------------completing stage 2----------------------------------------------------------------------------------------------------------------------------------
   if (gamestate == 2) {
    bg2.destroy()
    rock.destroy()
    rock2.destroy()
    rock3.destroy()
    rock4.destroy()
    rock5.destroy()
    rock6.destroy()

    bg3.visible = true
    cactus.visible = true
    cactus2.visible = true
    cactus3.visible = true
    cactus4.visible = true
    cactus5.visible = true
    cactus6.visible = true
    diamond3.visible = true


    player = createSprite(40, 350)
    player.addImage(characterImg)
    player.scale = 0.17
    player.setCollider("rectangle", 0, 0, 200, 500)
    player.debug = false

  }


   //----------------------------------------completing stage 3----------------------------------------------------------------------------------------------------------------------------------
   if (gamestate == 3) {
    bg3.destroy()
    cactus.destroy()
    cactus2.destroy()
    cactus3.destroy()
    cactus4.destroy()
    cactus5.destroy()
    cactus6.destroy()

    bg3.visible = true
    log.visible = true
    log2.visible = true
    log3.visible = true
    log4.visible = true
    log5.visible = true
    log6.visible = true
    diamond4.visible = true


    player = createSprite(40, 350)
    player.addImage(characterImg)
    player.scale = 0.17
    player.setCollider("rectangle", 0, 0, 200, 500)
    player.debug = false

  }





  drawSprites();

  textSize(25)
  fill("white")
  text("Diamonds Collected : " + dCount, 260, 50)
}


// -------------------------------------- Diamond Alert -----------------------------------------------------------

function diamondCollector() {
  swal(
    {
      title: 'Congratulation!!',
      text: "You have collected a diamond!",
      imageUrl:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/df2b5fef-969f-4e62-8eea-7858457a695e/dcnnpan-3ab9bbad-5112-4c05-8cad-e304171a8133.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RmMmI1ZmVmLTk2OWYtNGU2Mi04ZWVhLTc4NTg0NTdhNjk1ZVwvZGNubnBhbi0zYWI5YmJhZC01MTEyLTRjMDUtOGNhZC1lMzA0MTcxYTgxMzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.huKeW7DQ1pxRS2sDmBExV9_iqA4yqeuMWGIF6xG3WJc",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function (isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}

// ------------------------------------------------- Restart Alert --------------------------------------------------------

function gameOver() {
  swal(
    {
      title: 'Game Over!!',
      text: "Better Luck Next Time!",
      imageUrl:
        "https://static.thenounproject.com/png/901837-200.png",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function (isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}