let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1

  const createNewTitle = () => {
      const newTitle = document.getElementById("main-title");
      newTitle.textContent = " Welcome To My Homepage";
  }

  createNewTitle()

  // Part 2

  const newBodyColor = () => { 
       document.body.style.backgroundColor = "blue";
  } 
  newBodyColor();

  // Part 3

  const remove = () => { 
        const removeItem = document.querySelector('li:last-child')
        removeItem.parentElement.removeChild(removeItem)

  } 

  remove();

  // Part 4 

  const font  = () => { 
        const changeFont = document.querySelectorAll('.special-title')
        for (let i=0; i<changeFont.length; i++) {
          changeFont[i].style.fontSize = '2rem'
        }
    } 

  font ();

  // Part 5

  const listItem = () => {
        const list = document.querySelector("#past-races");
        if (list.hasChildNodes()) {
          list.removeChild(list.children[3]);
        }
    }

    listItem();

  // Part 6


const addCity = () => { 
const newList = document.createElement("li");
const node = document.createTextNode("Boston");
newList.appendChild(node);

const element = document.getElementById("past-races");
element.appendChild(newList);

} 

addCity()


  // Part 7

  const blogPost = () => {
    //created p tag, the text node inside the p tag, and appended text in p tag 
    const para = document.createElement('p'); 
    const paraText = document.createTextNode('I DROVE MY CAR THROUGH BOSTON COMMONS ')
    para.appendChild(paraText);

    //created h1, the text node inside the h1 tag, and appended text in h1 tag. 
    const heading = document.createElement('h1');
    const headingText = document.createTextNode('Boston');
    heading.appendChild(headingText);

    //creat new div element and add both class lists  
    const newDiv= document.createElement('div');
    newDiv.classList.add ('blog-post' , 'purple');
    

    //append div element into main div 

    const main = document.querySelector('.main');
    main.appendChild(newDiv);

    //append heading and paragraph into new div  
    newDiv.append(heading, para);
  }

  blogPost();

}