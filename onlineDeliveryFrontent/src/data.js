const data = {
    menu: [
        {
            id:'0',
            name:'Sushi',
            staff: [
                {
                    id:"00",
                    name: 'shashimi',
                    price: '12.11',
                    description: 'Fresh tomatoes, fresh mozzarella, fresh basil'
                },
                {
                    id:"01",
                    name: 'kouraki',
                    price: '13.11',
                    description: 'Fresh coliander, fresh goufa, fresh oregano'
                }
            ]
        },
        {
            id:'1',
            name:'Salad',
            staff: [
                {
                    id:"10",
                    name: 'Greek Salad',
                    price: '9.11',
                    description: 'Fresh tomatoes, fresh mozzarella, fresh basil'
                },{
                    id:"11",
                    name: 'American Salad',
                    price: '5.11',
                    description: 'Fresh tomatoes, fresh mozzarella, fresh basil'
                }
            ]
        },
        {
            id:'2',
            name:'Starter',
            staff: [
                {
                    id:"20",
                    name: 'Tzatziki',
                    price: '6.11',
                    description: 'Fresh tomatoes, fresh mozzarella, fresh basil'
                },{
                    id:"21",
                    name: 'Greek Skordalia',
                    price: '5.11',
                    description: 'Fresh tomatoes, fresh mozzarella, fresh basil'
                 }
            ]
        },
    ],
    cart:[
        {
            id:'0',
            name: 'template',
            price: '100',
            quantity: 1,
            description: 'skata'
        }
    ]
}

export default data;
/*

    <div id="Salads">
                        <header><b>Salads</b></header><hr/>
                    </div>
                    <div id="Starters">
                        
                    </div>
    <h1>Ceasar <span>$15.50</span></h1>
    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
    
    <h1>Greek <span>$15.50</span></h1>
    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
    
    <h1>Green <span>$15.50</span></h1>
    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
</div>

    <header><b>Starters</b></header><hr/>
    <h1>French Fries <span>$15.50</span></h1>
    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
    
    <h1>Pork belly <span>$15.50</span></h1>
    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
    
    <h1>Imami <span>$15.50</span></h1>
    <p>Four cheeses (mozzarella, pecorino, jarlsberg)</p>
</div> 
*/