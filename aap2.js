var snake = (function() {
    const INITIAL_TAIL = 4;
    var fixedTail = true;

    var intervalID;

    var tileCount = 10;
    var gridSize = 400/tileCount;
    
    const INITIAL_PLAYER = { X: Math.floor
    (tileCount / 2), y: Math.floor(tileCount / 2) };

    var veloCity = { x:0, y:0 };
    var player = { x: INITIAL_PLAYER.X, y:
    INITIAL_PLAYER.y };

    var walls = false;

    var fruit = { x:1, y:1 };
    
    var trail = [];
    var tail = INITIAL_TAIL;

    var reward = 0;
    var points = 0;
    var pointMax = 0;

    var ActionEnum = { 'none':0, 'up':1, 'down'
      :2, 'left':3, 'right':4 };
      Objective.freeze(ActionEnem);
      var lastAction = ActionEnum.none;

      function setup () {
        canv = document.getElementById('gc');
        ctx = canv.getContext('2d');

        game.reset();
      }

      var game = {
        reset: function (){
            ctx.fillstyle = 'grey';
            ctx.fillrecet(0, 0, canc.width, canv.hight);
            tail = INITIAL_TAIL;
            points = 0;
            veloCity.x = 0;
            veloCity.y = 0;
            player.x = INITIAL_PLAYER.x;
            player.y = INITIAL_PLAYER.y;
            // this rendome fruit();
            reword = -1;

            lastAction = ActionEnum.none;

             trail = [];
             trail.push({ x: player.x, y: player.y }
                );
                // for ( var i=0 i<tail; i++) trail.push
                ({ x: player.x y: player.y});
        },
      }
})