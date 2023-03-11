const espressos = [
    {
        name: 'Illy Classico Espresso Ground Coffee',
        photo: 'https://m.media-amazon.com/images/I/61CbICloZxL._SX679_.jpg',
        price: '$10.39',
        description: `Classic Roast with Notes of Chocolate & Caramel, 100% Arabica Coffee, All-Natural, No Preservatives`,
        roast: 'Classic Roast',
        isFeatured: true
    },
    {
        name: 'Lavazza Espresso Italiano',
        photo: 'https://m.media-amazon.com/images/I/61UhZ7sB3OL._SX679_.jpg',
        price: '$14.89',
        description: 'This blend made from 100 % specially selected Arabica coffee creates a full-bodied, intensely aromatic flavor that makes it the ultimate espresso coffee to look forward to at any time of day.',
        roast: 'Medium Roast',
        isFeatured: false
    },
    {
        name: 'Café Bustelo Espresso',
        photo: 'https://m.media-amazon.com/images/I/81eS99HoaVL._SX679_PIbundle-12,TopRight,0,0_SX679SY653SH20_.jpg',
        price: '$8.28',
        description: 'Pure and flavorful, Café Bustelo Espresso Ground Coffee is sure to captivate your senses. This delectable dark roast is ground from high-quality coffee beans and delivers a bold, intense flavor sip after sip. Crafted with passion, this ground coffee comes in a convenient brick form that is easy to brew and store. No special equipment is required for brewing: simply prepare it and enjoy it any way you prefer.',
        roast: 'Dark Roast',
        isFeatured: false
    },
    {
        name: 'Cafe Gavina Espresso',
        photo: 'https://m.media-amazon.com/images/I/71CYeJYglIL._SX679_.jpg',
        price: '$7.99',
        description: 'Our family’s tradition of roasting espresso dates back to our Cuban estate where the word "coffee” was synonymous with “espresso.” Café Gaviña Espresso Continental, the first product we sold in the U.S., draws its signature rich and aromatic flavor from our Spanish origins. Our passion for that bold, balanced flavor continues to this day. Nothing can beat the rich flavor of our espressos.',
        roast: 'Espresso Roast',
        isFeatured: false
    },
    {
        name: 'Starbucks Espresso Coffee',
        photo: 'https://m.media-amazon.com/images/I/71+nRRMGhlL._SX679_.jpg',
        price: '18.95',
        description: 'First created in 1975, this multi-region blend still serves as the foundation of our handcrafted espresso drinks in Starbucks stores around the world. The perfect melding of beans and roast reveals notes of rich molasses and a bold, caramelly sweetness—a flavor profile so incredible it’s never been changed. Delicious on its own or balanced with milk. Nestlé uses Starbucks trademarks under license',
        roast: 'Dark Roast',
        isFeatured: true
    },
    {
        name: 'Allegro Organic Espresso',
        photo: 'https://m.media-amazon.com/images/I/81nnxkwgcNL._SY879_.jpg',
        price: '$13.72',
        description: 'Rich and lusciously full-bodied with nuances of dark chocolate and caramel. This deep roast makes the ideal foundation for a full-flavored cappuccino or latte.',
        roast: 'Dark Roast',
        isFeatured: false
    },
    {
        name: 'Death Wish Coffee',
        photo: 'https://m.media-amazon.com/images/I/612xt7ybo8L._SX679_.jpg',
        price: '$17.42',
        description: 'Our coffee is made with the highest-quality arabica + robusta beans that are roasted to bold, never-bitter perfection. We disrupt the status quo, creating edgy, sarcastic content. We live to rebel against blah beans—and a boring, lackluster life.',
        roast: 'Espresso Roast',
        isFeatured: true
    },
    {
        name: 'Lifeboost Espresso Ground',
        photo: 'https://m.media-amazon.com/images/I/71WPYEL0j8L._SX679_.jpg',
        price: '$17.95',
        description: 'We offer low acidic coffee, resulting in less enamel decay from your teeth due to drinking too much coffee, explore our benifits.',
        roast: 'Breakfast Roast',
        isFeatured: false
    },
    {
        name: 'Lavazza Brasile Arabica Espresso',
        photo: 'https://m.media-amazon.com/images/I/71Q6qI3yW5L._SY879_.jpg',
        price: '$23.50',
        description: ' The Lavazza Tierra! Brasile Whole Bean Coffee Blend is no exception. A full body and smooth texture espresso. Arabica lambari and cereja apassita create a sweet coffee, with notes of caramel, hazelnuts, honey and milk chocolate. This blend is ideally brewed as a traditional Italian espresso. Enjoy a true taste of Italy that is uniquely Lavazza.',
        roast: 'Espresso Roast',
        isFeatured: true
    },
    {
        name: 'Lavazza Brasile Amazonia Espresso',
        photo: 'https://m.media-amazon.com/images/I/81RX55d4SZL._SY879_.jpg',
        price: '$13.29',
        description: 'The Lavazza Tierra Organic Amazonia ground coffee is made of 100% USDA organic arabica beans, hand-picked from Peru in South America. Balanced and aromatic, with light tropical notes and floral undertones.',
        roast: 'Breakfast Roast',
        isFeatured: false
    },
    {
        name: 'Ethical Organic Bean Coffee',
        photo: 'https://m.media-amazon.com/images/I/81-raeI48DL._SX679_.jpg',
        price: '$8.95',
        description: 'THICAL BEAN uses only Fairtrade, organic coffee beans certified to be grown without the use of synthetic pesticides and fertilizers. We meet higher standards of social and environmental performance, transparency, and accountability - which shows through in our organic Fairtrade coffee.',
        roast: 'Medium Roast',
        isFeatured: false,
    },
    {
        name: 'Stone Street Espresso',
        photo: 'https://m.media-amazon.com/images/I/41LWW2LHrmL.jpg',
        price: '$18.92',
        description: 'Enjoy the rich taste of our Wall Street Espresso blend in a convenient can. These cans will ensure your coffee stays fresh for longer and will be the perfect fit for any espresso lover out there.',
        roast: 'Breakfast Roast',
        isFeatured: false
    },
    {
        name: 'Gevalia Espresso',
        photo: 'https://m.media-amazon.com/images/I/913gxBi1TxL._SX679_.jpg',
        price: '$13.93',
        description: 'Gevalia Espresso Roast House Blend Ground Coffee, crafted in the Swedish tradition, fills your mug with rich and never-bitter coffee. There are 150 years of Swedish craftsmanship brewed into this espresso coffee, delivering a complex, full bodied flavor with caramel undertones.',
        roast: 'Dark Roast',
        isFeatured: true
    },
    {
        name: 'Supreme Bustelo',
        photo: 'https://m.media-amazon.com/images/I/71fYonhydwL._SX679_.jpg',
        price: '$11.99',
        description: 'Supreme by Bustelo offers the richest and darkest coffee bean grounds that you can find',
        roast: 'Dark Roast',
        isFeatured: false
    },
    {
        name: 'Blue Bottle Coffee',
        photo: 'https://m.media-amazon.com/images/I/61k1Oy7nvXL._SX679_.jpg',
        price: '$17.75',
        description: 'We treat our coffee with equal care. For every coffee, we create a custom roast designed for the best experience.',
        roast: 'Dark Roast',
        isFeatured: false
    },
    {
        name: 'Black Cat Espresso',
        photo: 'https://m.media-amazon.com/images/I/61ljzJa9oAL._SX679_.jpg',
        price: '$14.99',
        description: 'Working to design quality from the ground up, buying coffee in ways that creates more opportunity and investments back into the growers.',
        roast: 'Medium Roast',
        isFeatured: false,
    },
    {
        name: `Eight O'Clock Espresso`,
        photo: 'https://m.media-amazon.com/images/I/41jmXS+Y+kL._SY300_SX300_.jpg',
        price: '$19.45',
        description: 'You don’t get to be 150 years young without reinventing yourself every once in a while. Throughout the years, we’ve explored new varieties. Changed our look. Rolled out ground coffee and single-serving Keurig K-Cup packs. But there are some things we’ll never change. For starters, the classic flavors inside our new bags remain untouched.',
        roast: 'Dark Roast',
        isFeatured: false
    },
    {
        name: 'Grande Italia Espresso',
        photo: 'https://m.media-amazon.com/images/I/61z+5Ue8IqL._SY879_.jpg',
        price: '$13.97',
        description: `Our signature blend is available pre-ground for your immediate consumption. Taste all the nuances and characteristics of our Miscela Originale in this new format, no need to fiddle with a grinder to get the grounds exactly right (we've already done that), just scoop and brew.`,
        roast: 'Dark Roast',
        isFeatured: false
    }
]


// this will export the seed data to models/index.js 
module.exports = espressos