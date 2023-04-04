const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Prefab)
    label: cc.Prefab = null;

    @property(cc.Prefab)
    nodeGraphics2: cc.Prefab = null;

    touches: cc.Vec2[] = []
    graphics: cc.Graphics = null;
    graphics2: cc.Graphics = null;
    edits: cc.EditBox[][]=[[],[],[],[],[]];

    start () {
        var canvas = cc.find('Canvas');
        //canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        //canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        //canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        for (let i = 2; i < 5 ; i ++)
        {
            for (let j = 1; j < 8 ; j ++)
            {
                let obj = cc.find('Canvas/nodeGrid/m_layout'+i+'/'+'node'+j+'/'+'m_EditBoxLine'+i+'_'+j);
                //if (obj != null) 
               // {
                    this.edits[i-1].push(obj.getComponent(cc.EditBox));
               // }
                
            }
        
        }
        

        this.graphics = this.getComponent(cc.Graphics);

        let node = cc.instantiate(this.nodeGraphics2);
        if(node != null)
        {
            canvas.addChild(node)
            this.graphics2 = node.getComponent(cc.Graphics);
        }
        
        
        this.drawGrids()
    }

    drawGrids () {
        //var canvas = cc.find('Canvas');
        //canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        //canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        //canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

       // this.graphics.moveTo(-200, 100);

        for (let i = 0; i < 26; i++) {
            let y = 300 - i*20 
            //for (let j = 0; j < 31; j++) {
                //let x = i
                this.graphics.moveTo(-280,y);
                this.graphics.lineTo(280,y);
            //}
            
        }

        for (let i = 0; i < 29; i++) {
            let x = -280 + i*20 
            //for (let j = 0; j < 31; j++) {
                //let x = i
                this.graphics.moveTo(x,-200);
                this.graphics.lineTo(x,300);
            //}
            
        }

        this.graphics = this.getComponent(cc.Graphics);

        
        
        //this.graphics.lineTo(0.1, 0);
       // this.graphics.lineTo(-0.11, 0);
        this.graphics.stroke();


        //let scene = cc.director.getScene();
        for (let i=0; i < 10 ; i++)
        {
            let y = 300 - (25)*20 +(i)*2*20
            let node = cc.instantiate(this.label);
            //node.parent = scene;
            this.node.addChild(node);
            let lal = node.getComponent(cc.Label)
            lal.string = ""+i
            node.setPosition(-290, y);
            node.setScale(0.8)
        }
        
        let t = [5,10,12.5,15,20]
        let tn = [30,40,45,50,60]
        for (let i=0; i < 5 ; i++)
        {

            let x = -280 + t[i]*20

          
            let node = cc.instantiate(this.label);
            //node.parent = scene;
            this.node.addChild(node);
            let lal = node.getComponent(cc.Label)
            lal.string = ""+tn[i]
            node.setPosition(x, -210);
            node.setScale(0.8)
        }


       // this.graphics2.moveTo(-200,-400)
       // this.graphics2.lineTo(200,-400)
       // this.graphics2.stroke();
        
    }

    update  (dt) {

        if (this.graphics2 == null)
        {
            return ;
        }

       let editY = []
        let editY2 = []
        for (let i = 1; i < 6; i ++)
        {
            if (this.edits[2][i] != null)
            {
                let n = parseFloat(this.edits[2][i].string) 
                if(n != null )
                {
                    editY.push(n)
                }
                else
                {
                    editY.push(0)
                }
                
            }

            if (this.edits[3][i] != null)
            {
                let n = parseFloat(this.edits[3][i].string) 
                if(n != null )
                {
                    editY2.push(n)
                }
                else
                {
                    editY2.push(0)
                }
                
            }
            
        }

        this.graphics2.clear(true);
        let len = editY.length
        let t = [5,10,12.5,15,20]
        for (let i =0; i < len-1;i++)
        {
            let x1 = -280 + t[i]*20
            let y1 = 300 - (25)*20 +(editY[i])*2*20

            this.graphics2.moveTo(x1,y1)

            let x2 = -280 + t[i+1]*20
            let y2 = 300 - (25)*20 +(editY[i+1])*2*20

             this.graphics2.lineTo(x2,y2)



              y1 = 300 - (25)*20 +(editY2[i])*2*20

              this.graphics2.moveTo(x1,y1)
              y2 = 300 - (25)*20 +(editY2[i+1])*2*20
              this.graphics2.lineTo(x2,y2)

        }



        //this.graphics2.moveTo(-200,-400)
        //this.graphics2.lineTo(200,-400)
        this.graphics2.stroke();


    }

}
