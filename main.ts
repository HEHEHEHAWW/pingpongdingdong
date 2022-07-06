namespace SpriteKind {
    export const Left_paddle = SpriteKind.create()
    export const LEftpaddles = SpriteKind.create()
    export const Rightpaddle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LEftpaddles, function (sprite, otherSprite) {
    Ball.vx = Ball.vx * -1
    info.changeScoreBy(1)
})
function create_right_paddle () {
    right_paddle = sprites.create(img`
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        `, SpriteKind.Rightpaddle)
    controller.moveSprite(right_paddle, 0, 150)
    right_paddle.setStayInScreen(true)
    right_paddle.right = 160
}
function Create_ball () {
    Ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . 2 2 c c 2 2 . . . . . 
        . . . . 2 c c b b c c 2 . . . . 
        . . . . 2 c b f f b c 2 . . . . 
        . . . 2 c b f 9 9 f b c 2 . . . 
        . . . 2 c b f 9 9 f b c 2 . . . 
        . . . . 2 c b f f b c 2 . . . . 
        . . . . 2 c c b b c c 2 . . . . 
        . . . . . 2 2 c c 2 2 . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Ball.setVelocity(100, 100)
    Ball.setBounceOnWall(true)
    Ball.y += randint(0, 120)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rightpaddle, function (sprite, otherSprite) {
    Ball.vx = Ball.vx * -1
    info.player2.changeScoreBy(1)
})
function create_left_paddle () {
    Left_paddle = sprites.create(img`
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        . . . . . . . 8 9 . . . . . . . 
        `, SpriteKind.LEftpaddles)
    controller.moveSprite(Left_paddle, 0, 150)
    Left_paddle.setStayInScreen(true)
    Left_paddle.left = 0
}
let Left_paddle: Sprite = null
let right_paddle: Sprite = null
let Ball: Sprite = null
create_right_paddle()
create_left_paddle()
Create_ball()
