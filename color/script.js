				const colors=['red','green','blue','pink','yellowgreen','purple'];
				function ramdomColor() {
					const res=document.querySelector('body').style.background=colors[Math.floor(Math.random()*6)]
				  //const res=document.querySelector('body').style.background=colors[Math.floor(Math.random()*6)]

					
				}
				document.querySelector('button').onclick=ramdomColor;
				
