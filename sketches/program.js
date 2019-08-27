// #SKETCHNAME Mutual connections
var noBalls = 35;
var maxSpeed = 3;
var distBalls = 100;

var balls = [];

function enter()
{
    createBalls();    
}

function loop()
{
    clear();
    
    updateBalls();
    displayBalls();
}

function createBalls()
{
    for(var i = 0; i < noBalls; i++)
    {
        var ball = {
            x : random(width), 
            y : random(height), 
            dx : random([-1, 1]), 
            dy : random([-1, 1]),
            speed : random(1, maxSpeed)
        };
        
        balls.push(ball);
    }
}

function updateBalls()
{
    for(var i = 0; i < balls.length; i++)
    {
        var ball = balls[i];
        
        ball.x += ball.dx * ball.speed;
        ball.y += ball.dy * ball.speed;
        
        if (ball.x > width || ball.x < 0)
            ball.dx *= -1;
            
        if (ball.y > height || ball.y < 0)
            ball.dy *= -1;
    }
}

function displayBalls()
{
    for(var i = 0; i < balls.length; i++)
    {
        var ball = balls[i];
        
        fill(255);
        stroke(150);
        circle(ball.x, ball.y, 10);
        
        displayConnections(ball);
    }
}

function displayConnections(fromBall)
{
    for(var i = 0; i < balls.length; i++)
    {
        var ball = balls[i];
        if (fromBall == ball)
            continue;
        
        var d = dist(fromBall.x, fromBall.y, ball.x, ball.y);
        if (d < distBalls)
        {
            var color = map(d, 0, distBalls, 0, 150);
            stroke(color);
            fill(color);

            circle(fromBall.x, fromBall.y, 10);
            circle(ball.x, ball.y, 10);
            line(fromBall.x, fromBall.y, ball.x, ball.y);
        }
    }
}
