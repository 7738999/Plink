class plink{
	constructor(x,y)
	{
		var options={
			isStatic:true,
		
			}
		this.x=x;
		this.y=y;
		this.r=10
		this.body=Bodies.circle(x, y, 10, options)
		World.add(world, this.body);
	}

	display()
	{
		var PlinkPos=this.body.position;	
		push()
		translate(PlinkPos.x, PlinkPos.y);
		// rectMode(CENTER);
		fill(255)
		ellipseMode(CENTER);
		pop()
 }
}